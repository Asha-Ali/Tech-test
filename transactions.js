// a class that handles transactions

class Transaction {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }
    
    getBalance() {
        return this.transactions.reduce((balance, transaction) => {
            if (transaction.credit !== null) {
                balance += transaction.credit;
            } else {
                balance -= transaction.debit;
            }
            return balance;
        }, 0);
    }
    

    makeDeposit(amount, date) {
        this.transactions.push({
            date: date,         
            credit: amount,     
            debit: null
        });
    }
    makeWithdrawal(amount, date) {
        this.transactions.push({
            date: date,         
            credit: null,     
            debit: amount
        });
    }

    
};



module.exports = Transaction;