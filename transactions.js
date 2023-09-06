// a class that handles transactions

class Transaction {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }
    getBalance() {
        // return this.transactions.reduce((balance, transaction) => {
        //     if (transaction.credit !== null) {
        //         balance += transaction.credit;
        //     } else {
        //         balance -= transaction.debit;
        //     }
        //     return balance;
        // }, 0);
        return this.balance;
    }
    
    makeDeposit(amount, date) {
        this.balance += amount;
        this.transactions.push({
            date: date,         
            credit: amount,     
            debit: null,
            balance: this.balance
        });
        //this.balance += amount;
    }
    makeWithdrawal(amount, date) {
        
        // this.transactions.push({
        //     date: date,         
        //     credit: null,     
        //     debit: amount
        // });
        // this.balance -= amount; 

        if (amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push({
                date: date,
                credit: null,
                debit: amount,
                balance: this.balance
            });
        } else {
            console.error("Insufficient balance for withdrawal.");
        }
    }
};



module.exports = Transaction;