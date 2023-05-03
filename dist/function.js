"use strict";
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 4);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
addArrow(3, 2);
// callback function
const arr = [1, 4, 5];
const newArray = arr.map((e) => e * e);
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
const person = {
    name: "Mohi",
    balance: 5,
    addBalance(money) {
        console.log(`My new balance is ${this.balance + money}`);
    }
};
// default parameter
function addNumber(num1, num2 = 10) {
    return num1 + num2;
    //dont give default value in 1st parameter. give in 2nd/last parameter  
}
// spread operator
const myFrinends = ['chandler', "joey", "ross"];
const newFriends = ["monica", "rachel", "faria"];
myFrinends.push(...newFriends);
console.log(myFrinends);
