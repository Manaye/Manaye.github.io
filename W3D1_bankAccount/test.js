"use strict";

describe("Account class", () => {
    let account = undefined;
    describe("constructor(number)", () => {
        it("takes a number which becomes the account number", () => {
            account = new Account(1);
            assert.equal(account.getNumber(), 1);
            assert.equal(account.constructor, Account);
        });
    });

    describe("getNumber() method", () => {
        it("returns the account number", () => {
            assert.equal(account.getNumber(), 1);
        });
    });

    describe("getBalance() method", () => {
        it("returns the current account balance", () => {
            assert.equal(account.getBalance(), 0);
            account.deposit(5);
            assert.equal(account.getBalance(), 5);
        });
    });

    describe("deposit(amount) method", () => {
        it("adds amount to the current balance", () => {
            assert.equal(account.getBalance(), 5);
            account.deposit(5);
            assert.equal(account.getBalance(), 10);
        });
        it("throws a RangeError if you give a number <= 0", () => {
            let makeError = () => {
                account.deposit(-1);
            };
            assert.throws(makeError, RangeError, "Deposit amount has to be greater than zero");
        });
    });

    describe("withdraw(amount) method", () => {
        it("removes amount from the current balance", () => {
            assert.equal(account.getBalance(), 10);
            account.withdraw(4);
            assert.equal(account.getBalance(), 6);
        });
        it("throws a RangeError if you give a number <= 0", () => {
            let makeError = () => {
                account.withdraw(-1);
            };
            assert.throws(makeError, RangeError, "Withdraw amount has to be greater than zero");
        });
        it("throws an Error if you try to withraw money you don't have", () => {
            let makeError = () => {
                account.withdraw(1000);
            };
            assert.throws(makeError, Error, "Insufficient funds");
        });
    });

    describe("toString() method", () => {
        it("returns a string representation of the account", () => {
            assert.equal(account.toString(), "Account 1: balance 6");
        });
    });

    describe("endOfMonth() method", ()=>{
        it("returns an empty string", ()=>{
            assert.equal(account.endOfMonth(), "");
        });
    });
});
describe("Bank Class", () => {
    let bank = undefined;
    describe("constructor()", () => {
        it("creates a Bank object", () => {
            bank = new Bank();
            assert.equal(bank.constructor, Bank);
            assert.equal(bank._accounts.length, 0);
        });
    });
    describe("addAccount()", () => {
        it("adds an Account object to it array", () => {
            bank.addAccount();
            assert.equal(bank._accounts[0].getNumber(), 1);
            assert.equal(bank._accounts[0].getBalance(), 0);
        });
    });

    describe("endOfMonth()", ()=>{
        it("returns a string with actions related to the accounts", ()=>{
            bank._accounts[0].deposit(100);
            bank._accounts[1].withdraw(100);
            bank.addAccount();
            assert.equal(bank.endOfMonth(), "Interest added SavingsAccount 2: balance: 102.5 interest: 2.5\nWarning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500\n");
        });
    });
    
});
describe("SavingsAccount", () => {
    let savings = undefined;
    describe("constructor(number, interest)", () => {
        it("takes a number and an interest rate and makes a SavingsAccount", () => {
            savings = new SavingsAccount(1, 5);
            assert.equal(savings.getNumber(), 1);
            assert.equal(savings.getInterest(), 5);
            assert.equal(savings.constructor, SavingsAccount);
        });
    });
});


