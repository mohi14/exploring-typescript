type CrushType = {
    name: string,
    age?: number,
    profession: string,
    address: string
}

const crush1: {
    name: string,
    age: number,
    profession: string,
    address: string
} = {
    name: "monika",
    age: 22,
    profession: "web developer",
    address: "Uganda"
}


const crush2: CrushType = {
    name: "monika2",
    profession: "web developer",
    address: "Uganda"
}

type CrushMarriedType = boolean

const isCrushMarried: CrushMarriedType = false

type OperationType = (x: number, y: number) => number

// const calculate = (number1: number, number2: number, operation: (x: number, y: number) => number) => {
//     return operation(number1, number2)
// }


const calculate = (number1: number, number2: number, operation: OperationType) => {
    return operation(number1, number2)
}

calculate(10, 20, (x, y) => x + y)
calculate(10, 20, (x, y) => x - y)
calculate(10, 20, (x, y) => x * y)