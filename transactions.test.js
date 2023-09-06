const Transaction = require('./transactions');

describe('Transaction', () => {
    let transaction;

    beforeEach(() => {
    transaction = new Transaction();
    });

    it('balance of 0 and an empty transactions array', () => {
    expect(transaction.getBalance()).toEqual(0);
    expect(transaction.transactions).toEqual([]);
    });

    it('deposit and update the balance', () => {
    transaction.makeDeposit(100, '2023-01-01');
    expect(transaction.getBalance()).toEqual(100);
    });

    it('withdrawal and update the balance', () => {
    transaction.makeDeposit(200, '2023-01-01');
    transaction.makeWithdrawal(50, '2023-01-02');
    expect(transaction.getBalance()).toEqual(150);
    });


    it('print the statement with deposit and withdrawal', () => {

        const originalConsoleLog = console.log;
        const consoleOutput = [];
        console.log = jest.fn((output) => {
            consoleOutput.push(output);
        });
        
        transaction.makeDeposit(100, '2023-01-01');
        transaction.makeWithdrawal(50, '2023-01-02');
        transaction.printStatement();

        console.log = originalConsoleLog;

        expect(consoleOutput[0]).toBe('date || credit || debit || balance');
        expect(consoleOutput[1]).toBe('2023-01-02 ||  || 50 || 50');
        expect(consoleOutput[2]).toBe('2023-01-01 || 100 ||  || 100');
    });
});