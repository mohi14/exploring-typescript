// normal function

function add(num1: number, num2: number): number {
    return num1 + num2
}

add(2, 4)

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2

addArrow(3, 2)

// callback function
const arr = [1, 4, 5]

const newArray = arr.map((e: number) => e * e)


// const person = {
//     name: "Mohi",
//     balance: 5,
//     addBalance(money: number) {
//         return this.balance + money
//     }
// }


// const person: {
//     name: string,
//     balance: number,
//     addBalance(money: number): number
// } = {
//     name: "Mohi",
//     balance: 5,
//     addBalance(money: number) {
//         return this.balance + money
//     }
// }


const person: {
    name: string,
    balance: number,
    addBalance(money: number): void
} = {
    name: "Mohi",
    balance: 5,
    addBalance(money: number) {
        console.log(`My new balance is ${this.balance + money}`)
    }
}

// default parameter

function addNumber(num1: number, num2: number = 10): number {
    return num1 + num2
    //dont give default value in 1st parameter. give in 2nd/last parameter  
}

// spread operator
const myFrinends = ['chandler', "joey", "ross"]
const newFriends = ["monica", "rachel", "faria"]

myFrinends.push(...newFriends)
console.log(myFrinends)


// rest operator/paremeter

// const greetFriends = (friend1: string, friend2: string, friend3: string): void => console.log(`Hi ${friend1} \n Hi ${friend2} \n Hi ${friend3} `)

// greetFriends("okay", "okay1", "okay3")

// const greetFriends = (...friends: string[]): void => console.log(friends)

// greetFriends("okay", "okay1", "okay3", "okay4", "okay5", "okay6")

const greetFriends = (...friends: string[]): void => friends.forEach((friend) => console.log(`HI ${friend}`))

greetFriends("okay", "okay1", "okay3", "okay4", "okay5", "okay6")


// array and object destructuring

const myBestFriend = {
    fullName: "mohi",
    age: 24
}

const [bestFriend] = myFrinends

const { fullName } = myBestFriend