const Transaction = require('./transactions');


const transaction = new Transaction();
transaction.makeDeposit(1000, '10-01-2023');
transaction.makeDeposit(2000, '13-01-2023');
transaction.makeWithdrawal(500, '14-01-2023');

transaction.printStatement();

