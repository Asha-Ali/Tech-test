# Bank-Tech-test

A simple Java application for managing bank accounts, transactions, and generating account statements.

## Technologies

- Operating System: MacOS
- Language: JavaScript
- Testing Framework: Jest
- Version Control: Git

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```



### Testing the program

You'll use the Node.js REPL (Read-Eval-Print Loop) to interact with your program. Here's a step-by-step guide to getting started:

```sh
# Create the project directory
$ git clone git@github.com:Asha-Ali/Tech-test.git
$ cd Tech-test

# install jest "globally"
$ npm install -g jest

# Run the tests:
$ jest
```

### Executing the program

```sh
# Setup our environment to use node:
$ nvm use node

# Enter node REPL:
$ node
```

## Result

![Alt text](<Screenshot 2023-09-06 at 18.05.20.png>)
