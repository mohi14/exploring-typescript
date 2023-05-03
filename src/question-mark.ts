// ternary operator

const age: number = 14

if (age >= 18) {
    console.log("yes")
}
else {
    console.log("no")
}

const isAdult = age >= 18 ? "Yes" : "No"
console.log(isAdult)

// nullish coalescing operator
// Null othoba Undefined er opor bitte kore default value set kora

const isAuthenticatedUser = "";

const userName = isAuthenticatedUser ?? "Guest"
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest"
console.log({ userName }, { userName2 })

type Manus = {
    name: string;
    age: number;
    address: {
        city: "No City";
        road: "No Road";
        home?: ""
    }
}

const manush1: Manus = {
    name: "Manus",
    age: 12,
    address: {
        city: "No City",
        road: "No Road",

    }
}

const home = manush1?.address?.home ?? "No Home"  //default "no home" 

console.log({ home })

function generateAdder(a: number): (b: number) => number {

    return function (b: number) {

        return a + b;

    };

}



const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));
