# Database Setup

The project contains two sql files, namely, CreateDB.sql which creates the database and all the tables for the project and LoadDB.sql that loads the database with few dummy datas.

# Web Application Setup (Angular)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.

Make sure to install angular CLI before running the project. The steps for installing Angular CLI can be found in the website below:
https://angular.io/guide/setup-local

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Linear Regression Model

This model was generated in Jupyter Notebook. 
The folder "Crypto Forecasting" contains 4 files:
"BTC.csv", "ETH.csv" and "LTC.csv" are the dataset of Bitcoin, Ethereum and Litcoin from the past year obtained from Yahoo Finance [https://finance.yahoo.com/cryptocurrencies/]

### Training the data

In order to train the data was split into 85% for Training data and 15% for Testing data.
The model predicts the price for next 14 days.


