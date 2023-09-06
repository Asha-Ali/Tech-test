
const Account = require('.Account');

describe('Account', () => {
    it('Account has the correct properties', () => {
    const account = new Account({ date: '2023-01-01', balance: 1000 });
    expect(account.date).toEqual('2023-01-01');
    expect(account.credit).toEqual('');
    expect(account.debit).toEqual('');
    expect(account.balance).toEqual(1000);
    });

    it('can correctly format account details for printing', () => {
    const account = new Account({
    date: '2023-01-10',
    credit: 500,
    debit: '',
    balance: 1500,
    });
    const formattedStatement = account.print();
    expect(formattedStatement).toEqual('2023-01-10 || 500.00 ||  || 1500.00');
    });


    it('can handle debit and negative balance', () => {
    const account = new Account({
    date: '2023-01-15',
    credit: '',
    debit: 700,
    balance: -200,
    });
    const formattedStatement = account.print();
    expect(formattedStatement).toEqual('2023-01-15 ||  || 700.00 || -200.00');
    });

});