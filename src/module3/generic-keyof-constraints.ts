type PersonType = {
    name: string;
    age: number;
    address: string;
}

type newType = "name" | "age" | "address"; //manually korsi

// type newTypeUsingKeyOf = keyof PersonType

// const a: newType = 'age'
// const b: newTypeUsingKeyOf = "age"

// function getProperty(obj: object, kyd: string) {
//     obj[kyd]
// }

type newTypeUsingKeyOf = keyof PersonType

const a: newType = 'age'
const b: newTypeUsingKeyOf = "age"

// function getProperty(obj: object, kyd: string) {
//     obj[kyd]
// }

function getProperty<X, Y extends keyof X>(obj: X, kyd: Y) {
    obj[kyd]
}

const property = getProperty({ name: "klk", age: 10 }, "age")