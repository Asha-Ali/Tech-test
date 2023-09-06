const Account = require('./Account');

class Transaction {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }
    getBalance() {
        return this.balance;
    }
    
    makeDeposit(amount, date) {
        this.balance += amount;
        const account = new Account({
            date: date,         
            credit: amount,     
            debit: null,
            balance: this.balance
        });
        this.transactions.push(account)
        
    }
    makeWithdrawal(amount, date) {
        this.balance -= amount;
        const account = new Account({
            date: date,         
            credit: null,     
            debit: amount,
            balance: this.balance
        });
        this.transactions.push(account)
    }

    printStatement() {
        console.log('date || credit || debit || balance');
        this.transactions.reverse().forEach((transaction) => {
        console.log(
                `${transaction.date} || ${transaction.credit || ''} || ${transaction.debit || ''} || ${transaction.balance}`
            );
        });
    }
};



module.exports = Transaction;