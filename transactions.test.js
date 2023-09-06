const Transaction = require('./transactions');
const Account = require('./Account');


// describe('Transaction', () => {
//     beforeEach(() => {
//         transaction = new Transaction();
//     })

//     it('should intitialise with the a balance of 0', () => {
//         expect(transaction.getBalance()).toEqual(0);
//     })

//     it('can make a deposit', () => {
//         transaction.makeDeposit(1000, '10-01-2023');
//         expect(transaction.getBalance()).toEqual(1000);
//     });

//     it('can make a withdrawal', () => {
//         transaction.makeDeposit(1000, '10-01-2023');
//         transaction.makeWithdrawal(500, '14-01-2023');
//         expect(transaction.getBalance()).toEqual(500);
//     });

//     it('should update balance correctly for multiple transactions', () => {
//         transaction.makeDeposit(1000, '10-01-2023');
//         transaction.makeWithdrawal(500, '14-01-2023');
//         transaction.makeDeposit(2000, '20-01-2023');
//         expect(transaction.getBalance()).toEqual(2500);
//     });
// });