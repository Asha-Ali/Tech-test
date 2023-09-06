//import transactions.js
// a class that handles the print bank statement format

const Transaction = require('./transactions');

class BankStatement{
    constructor(transactions = []) {
        if (!Array.isArray(transactions) || transactions.some((transaction) => !(transaction instanceof Transaction))) {
        throw new Error('Invalid input');
        }
        this.transactions = transactions;
        }

    generateStatement() {
        //console.log('Inside generateStatement');
        const sortedTransactions = this.transactions.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
        let balance = 0;
        const statement = sortedTransactions
        .map((transaction) => {
            if (transaction.credit !== null && typeof transaction.credit === 'number') {
                balance += transaction.credit;
                return `${transaction.date} || ${transaction.credit.toFixed(2)} || || ${balance.toFixed(2)}`;
                } else if (transaction.debit !== null && typeof transaction.debit === 'number') {
                balance -= transaction.debit;
                return `${transaction.date} || || ${transaction.debit.toFixed(2)} || ${balance.toFixed(2)}`;
                }
                return ''; // Handle other cases or invalid transactions as needed
        })
            .join('\n');

            return `date || credit || debit || balance\n${statement}`;
            
    }
    // print() {
    //     //console.log('date || credit || debit || balance');
    //     this.transactions.reverse().forEach((transaction) => {
    //     const formattedCredit = transaction.credit !== null ? transaction.credit.toFixed(2) : '';
    //     const formattedDebit = transaction.debit !== null ? transaction.debit.toFixed(2) : '';
    //     const balance = transaction.balance.toFixed(2);
    //     console.log(`${transaction.date} || ${formattedCredit} || ${formattedDebit} || ${balance}`);
    //     });
    // }

    print() {
        console.log('date || credit || debit || balance');
        this.transactions.reverse().forEach((transaction) => {
            const formattedCredit = transaction.credit !== null ? transaction.credit.toFixed(2) : '';
            const formattedDebit = transaction.debit !== null ? transaction.debit.toFixed(2) : '';
            const formattedBalance = typeof transaction.balance === 'number' ? transaction.balance.toFixed(2) : '';
            console.log(`${transaction.date} || ${formattedCredit} || ${formattedDebit} || ${formattedBalance}`);
        });
    }
}



module.exports = BankStatement