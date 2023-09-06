const Transaction = require('./transactions');
const BankStatement = require('./bankStatement');



describe('BankStatement', () => {
    // it('should generate an empty statement for no transactions', () => {
    //   const bankStatement = new BankStatement([]);
    //   const statement = bankStatement.generateStatement();
    //   expect(statement).toBe('date || credit || debit || balance\n');
    // });
    it('should initialize with valid transactions', () => {
        const validTransactions = [
        new Transaction('2023-09-01', 100, null),
        new Transaction('2023-09-02', null, 50),
        ];
    expect(() => new BankStatement(validTransactions)).not.toThrow();
    });


})