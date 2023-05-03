// type alias er jat vai, ata bebohar hoy object type datar khetre

type User = {
    name: string;
    age: number;
}

// extend type alias

type extendedUser = User & {
    role: string;
}

interface IUser {
    name: string;
    age: number;
}

// if we want, we can extend interface

interface IExtendedUser extends IUser {
    role: string
}

const userr: IExtendedUser = {
    name: "onnn",
    age: 2000,
    role: "noo"
}

// const userWithTypeAlias: User = {
//     name: 'Type Alias',
//     age: 100
// }

// const userWithInterface: IUser = {
//     name: 'Interface',
//     age: 200
// }


// Object , Function, Array

type addNumbersType = (num1: number, num2: number) => number
const addNumbers: addNumbersType = (num1, num2) => num1 + num2

// interface IAddNumbers {
//     (num1: number, num2: number): number
// }
// const addNumbers: IAddNumbers = (num1, num2) => num1 + num2


type rollNumberssType = number[]
// const rollNumberss: number[] = [1, 2, 3]
const rollNumberss: rollNumberssType = [1, 2, 3]

interface IRollNumberss {
    [index: number]: number
}
// const rollNumberss: IRollNumberss = [1, 2, 3]