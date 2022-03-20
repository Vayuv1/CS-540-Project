CREATE DATABASE CS540_PROJECT;

USE CS540_PROJECT;

CREATE TABLE CRYPTO_LIST (
	Name varchar(20) NOT NULL,
    Type varchar(5),
	Currency varchar(5) not null,
    Price int NOT NULL,
    Price_Change int NOT NULL,
    Perc_Change int NOT NULL,
    PRIMARY KEY (Type)
);

CREATE TABLE CRYPTO_RECORD (
	Date date,
    Type varchar(5),
    Open int unsigned not null,
    High int unsigned not null,
    Low int unsigned not null,
    Close int unsigned not null,
    PRIMARY KEY (Date, Type),
    FOREIGN KEY(Type) REFERENCES CRYPTO_LIST(Type)
);
    
CREATE TABLE PREDICTION (
	Date date,
    Type varchar(5),
    Close int unsigned NOT NULL,
    PRIMARY KEY (Date, Type),
    FOREIGN KEY(Type) REFERENCES CRYPTO_LIST(Type)
);
    
    
CREATE TABLE USERS (
	Email varchar(50),
    Username varchar(50) NOT NULL,
    Password varchar(50) NOT NULL ,
    Phone bigint unsigned,
    PRIMARY KEY (Email)
);
    
