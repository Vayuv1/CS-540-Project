INSERT INTO crypto_list (Name, Type, Currency, Price, Price_Change, Perc_Change) values
	('Bitcoin', 'BTC', 'USD', 37961.50, -987.64, -2.54),
    ('Etherium', 'ETH', 'USD', 2527.77, -101.40, -3.86),
    ('Litecoin', 'LTC', 'USD', 100.07, -3.39, -3.28);
    
INSERT INTO crypto_record (Date, Type, Open, High, Low, Close) Values
	('2022-03-01', 'BTC', 43194, 44793, 42952, 44354),
    ('2022-03-01', 'ETH', 2919, 3029, 2868, 2972);	
    
INSERT INTO prediction (Date, Type, Close) values
	('2022-03-08', 'LTC', 120),
    ('2022-03-09', 'BTC', 36000);
    
INSERT INTO users (Email, Username, Password, Phone) values
	('abc@xyz.com', 'abcXYZ', 'dasdafdsds', 9196380898),
    ('xyz@abc.com', 'xyzABC', 'nknknknkj', 9195364789);
	