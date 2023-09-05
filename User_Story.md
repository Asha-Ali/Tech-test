# User Story

## Print Bank Statement

As a user,

I want to print my bank statement, including transaction details (date, amount, balance),

So that I can keep track of my financial transactions without the need for external storage.

Acceptance Criteria:

Scenario 1: Successful Statement Printing
Given a client has made a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When the client prints her bank statement
Then she would see the following statement:

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

Scenario 2: Empty Transaction History
Given a client has not performed any transactions
When the client prints her bank statement
Then she would see an empty statement with a header but no transactions:


```
date || credit || debit || balance
```