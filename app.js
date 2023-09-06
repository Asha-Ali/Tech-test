const Transaction = require('./transactions');
const BankStatement = require('./bankStatement');

// // Create instances of the Transaction class
// const transaction1 = new Transaction();
// transaction1.makeDeposit(1000, '10-01-2023');
// transaction1.makeWithdrawal(500, '14-01-2023');

// const transaction2 = new Transaction();
// transaction2.makeDeposit(2000, '20-01-2023');

// // Create an instance of the BankStatement class and add transactions
// const bankStatement = new BankStatement([transaction1, transaction2]);

// // Generate and print the bank statement
// const statement = bankStatement.generateStatement();
// console.log(statement); 



// Create instances of the Transaction class
const transaction1 = new Transaction();
transaction1.makeDeposit(1000, '10-01-2023');
transaction1.makeWithdrawal(500, '14-01-2023');

const transaction2 = new Transaction();
transaction2.makeDeposit(2000, '13-01-2023');
// Create an array of transactions
const transactions = [transaction1, transaction2];

// Create an instance of the BankStatement class and add transactions
const bankStatement = new BankStatement(transactions);

// Generate the bank statement
const statement = bankStatement.generateStatement();

// Print the statement
//console.log(statement);

// Now you can test the functions interactively
bankStatement.generateStatement(); // This will generate the statement
bankStatement.print(); // This will print the statement


