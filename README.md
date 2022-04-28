# Database Setup

The project contains two sql files, namely, CreateDB.sql which creates the database and all the tables for the project and LoadDB.sql that loads the database with few dummy datas.

# Web Application Setup


Prerequisites to install:

	node.js:
		Information on installing Node.js, see nodejs.org. If you are unsure what version of Node.js runs on your system,
		run following in a terminal window:
			~ node -v
	
	npm package manager:
		The npm client command line interface is installed with Node.js by default.
		To check that you have the npm client installed, run following in a terminal window:
			~ npm -v

	angular cli:
		To install the Angular CLI, open a terminal window and run the following command:
			~ npm install -g @angular/cli

	MySQL:
		Follow the link to download and install MySQL for your OS:
			https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/

Step 1: Clone the projet from github.
	> git clone https://github.com/Vayuv1/CS-540-Project.git

Step 2: Setup and load the database:
	> Start a localhost server in MySQL
	> Run CreateDB.sql to create the cs540_project database
	> Run LoadDB.sql to load the database with some data

Step 3: Setup server-side application:
	> To install all the dependencies, starting at the root folder, enter the following commands in the terminal:
		~ cd cs540-project-api
		~ npm install
	> To compile and run the application, enter the following command in the terminal:
		~ node server.js (This runs on port 3000)

Step 4: Setup client-side application:
	> To install all the dependencies, starting at the root folder, enter the following commands in the terminal:
		~ npm install
	> To compile and run the application, enter the following command in the terminal:
		~ ng serve (This runs on port 4200 by default)

Step 5: Go to your browser and type in localhost:4200

# Load the data (Yahoo Finance Data Retreival)
Functions from pandas_datareader.data and pandas_datareader.wb was used to extrac data from Internet sources into a pandas DataFrame. After the Data for the three desired cryptocurrencies were collected, the main attributes were selected. For this project, “Close” price was the only attribute of interest, because this corresponds to the final price at the end of each day

# Linear Regression Model

This model was generated in Jupyter Notebook. 
The folder "Crypto Forecasting" contains 4 files:
"BTC.csv", "ETH.csv" and "LTC.csv" are the dataset of Bitcoin, Ethereum and Litcoin from the past year obtained from Yahoo Finance [https://finance.yahoo.com/cryptocurrencies/]
Read all the comments in the code for a better understanding 


### Training the data

In order to train the data was split into 85% for Training data and 15% for Testing data.
The model predicts the price for next 14 days.

### Score
The R² error obtained is around 0.62 which means the model might be a little weak.

# Neural Network Model

This model took into consideration all the historical data for each cryptocurrency collected from January 1st, 2015, and then it was split into an interval of 60 days for testing and training with the main goal of predicting the 61st day. In other words, the model’s output is the next day closing price in USD.
The structure and intended behavior of artificial neural networks is inspired by the functionality of the human brain. In analogy to the structure of a brain, which consists of billions of highly interconnected neurons, artificial neural networks consist of various, highly connected nodes. Every node receives a certain amount of input from other nodes and, dependent on the received input, each note generates output, which is then passed to subsequent nodes. Hence, information is passed through the network of nodes and transformed by every node on its path.


