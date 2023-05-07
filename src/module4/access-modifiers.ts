// access ta k modify kore fela.. kothai access thakbe.. kothai access thakbe nah.. ta nirdharon kora.

// public use korle sobai access korte parbe
// private use korte class er moddhe user korte parbe
// protected use korle extended child use korte parbe and code er moddhe oshamanjossho toiri hote pare

class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    // private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    getBalance() {
        console.log(`My Current Balance is ${this._balance}`);
    }
    addDeposit(amount: number) {
        this._balance = this._balance + amount
    }
}

class StudentAccount extends BankAccount {
    // by using test() we can test the parent class
    test() {
        this._balance
    }
}

const myAccount = new BankAccount(444, "mohi", 500);
console.log(myAccount);