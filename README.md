# Bank-Tech-test

A simple banking application in Java with support for deposits, withdrawals, and account statements.

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



### Testing the program

You'll use the Node.js REPL (Read-Eval-Print Loop) to interact with your program. Here's a step-by-step guide to getting started:

``````
# Create the project directory
$ git clone git@github.com:Asha-Ali/Tech-test.git
$ cd Tech-test

# install jest "globally"
# (this is so we can run the `jest` command)
$ npm install -g jest

# Run the tests:
$ jest
Executing the program

# Setup our environment to use node:
$ nvm use node

# Enter node REPL:
$ node
``````