const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const {makeDb} = require('mysql-async-simple')
const config = require('./db-config')

const app = express();

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
})

app.get('/api/cryptos', async (req, res, next) => {
    const con = mysql.createConnection(config);
    const db  = makeDb();

    await db.connect(con);
    let cryptos = [];
    const sql = 'SELECT Name as name, Type as code FROM crypto_list;';

    try{
        cryptos = await db.query(con, sql);
    } catch (e) {
        return res.status(500).json({
            errorMessage: e.message
        });
    } finally {
        await db.close(con);
    }
    res.status(200).json({
        message: 'Data fetched successfully',
        data: cryptos
    });
});


app.get('/api/records', async (req, res, next) => {
    let records = [];
    let predictions = [];
    let cryptos = [];
    let result = {};

    const con = mysql.createConnection(config);
    const db  = makeDb();

    await db.connect(con);

    const sqlList = 'select name as name, type as code, price as price, price_change as priceChange, perc_change as perChange from crypto_list;';
    const sqlRecord = 'select date as date, type as code, open as open, high as high, low as low, close as close from crypto_record;';
    const sqlPrediction = 'select date as date, type as code, close as close from prediction;';

    try {
        cryptos = await db.query(con, sqlList);
        records = await db.query(con, sqlRecord);
        predictions = await db.query(con, sqlPrediction);

        cryptos.forEach(crypto => {
            const cryptoRecords = records.filter(record => record.code === crypto.code);
            const cryptoPredictions = predictions.filter(prediction => prediction.code === crypto.code);
            cryptoPredictions.map(cryptoPrediction => {
                cryptoPrediction.predicted = true;
                return cryptoPrediction;
            })
            result[crypto.code] = [...cryptoRecords, ...cryptoPredictions, {
                date: new Date(),
                price: crypto.price,
                priceChange: crypto.priceChange,
                perChange: crypto.perChange
            }];
        })
    } catch (e) {
        return res.status(500).json({
            errorMessage: e.message
        });
    } finally {
        await db.close(con);
    }

    res.status(200).json({
        message: 'Data fetched successfully',
        data: result
    });
});

app.get('/api/users', async (req, res, next) => {
    const con = mysql.createConnection(config);
    const db  = makeDb();

    await db.connect(con);
    let users = [];
    const sql = 'SELECT email as email, username as username, password as password, phone as phone FROM users;';

    try{
        users = await db.query(con, sql);
    } catch (e) {
        return res.status(500).json({
            errorMessage: e.message
        });
    } finally {
        await db.close(con);
    }
    res.status(200).json({
        message: 'Data fetched successfully',
        users: users
    });
});

app.post('/api/users', async (req, res, next) => {
    const data = req.body;

    const con = mysql.createConnection(config);
    const db  = makeDb();

    await db.connect(con);
    const sql = 'INSERT INTO users(email, username, password, phone) values(?,?,?,?);';

    try{
        await db.query(con, sql, [data.email, data.username, data.password, data.phone]);
    } catch (e) {
        return res.status(500).json({
            errorMessage: e.message
        });
    } finally {
        await db.close(con);
    }
    res.status(200).json({
        message: 'Data stored successfully'
    });
});


module.exports = app;
