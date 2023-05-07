// access ta k modify kore fela.. kothai access thakbe.. kothai access thakbe nah.. ta nirdharon kora.

// public use korle sobai access korte parbe
// private use korte class er moddhe user korte parbe
// protected use korle extended child use korte parbe and code er moddhe oshamanjossho toiri hote pare

class BankAccount1 {
    public readonly id: number;
    public name: string;
    private _balance: number;
    // private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }



    private getTestBalance(): number {
        return this._balance
    }

    get Test(): number {
        return this.getTestBalance()
    }

    // to access private property we use getter  

    // getter
    get balance(): number {
        return this._balance
    }

    // to set any value to a private property we use setter
    // setter
    set deposit(amount: number) {
        this._balance = this._balance + amount
    }


    getBalance1(): number {
        return this._balance;
    }
    addDeposit1(amount: number) {
        this._balance = this._balance + amount
    }
}

class StudentAccount1 extends BankAccount1 {
    // by using test() we can test the parent class
    test() {

    }
}

const myAccount1 = new BankAccount1(444, "mohi", 500);

console.log(myAccount1);


myAccount1.deposit = 30
console.log(myAccount1.getBalance1())
console.log(myAccount1.balance)