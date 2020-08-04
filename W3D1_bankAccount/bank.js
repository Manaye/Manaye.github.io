"use strict";

class Bank {
    
    constructor() {
        this._accounts = [];
    }

      addAccount() {
        let number = Bank.nextNumber++;
        this._accounts.push(new Account(number));
    }
   
    addSavingsAccount(interest) {
        let number = Bank.nextNumber++;
        this._accounts.push(new SavingsAccount(number, interest))
    }

        addCheckingAccount(overdraft) {
        let number = Bank.nextNumber++;
        this._accounts.push(new CheckingAccount(number, overdraft));
    }

    closeAccount(number) {
        let idx = this._accounts.findIndex((element) => {
            return element.getNumber() === number;
        });
        this._accounts.splice(idx, 1);
    }

    accountReport() {
        let report = "";
        for (const act of this._accounts) {
            report += act.toString() + "\n";
        }
        return report;
    }

      endOfMonth() {
        let report = "";
        for (const act of this._accounts) {
            let msg = act.endOfMonth();
            if (msg !== "") {
                report += msg + "\n";
            }
        }
        return report;
    }
}

Bank.nextNumber = 1;