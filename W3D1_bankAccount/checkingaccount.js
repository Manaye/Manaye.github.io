"use strict";

class CheckingAccount extends Account {

    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

  
    getOverdraft() {
        return this._overdraft;
    }

    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this._overdraft) {
            throw new Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        }
        this._balance -= amount;
    }

   
    toString() {
        return "CheckingAccount " + this._number + ": balance: " + this._balance +
            " overdraft limit: " + this._overdraft;
    }

    
    endOfMonth() {
        let message = "";
        if (this._balance < 0) {
            message = "Warning, low balance " + this.toString();
        }
        return message;
    }
}