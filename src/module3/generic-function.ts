// arrow function

const createArray = <T>(param: T): T[] => {
    return [param]
}

const createArray1 = <T>(param: T): T[] => {
    return [param]
}

type Name = { name: string }

const result1 = createArray('Bangladesh')
const res = createArray1<string>('bd')
const res1 = createArray1<boolean>(false)
// const res2 = createArray1<{ name: string }>({ name: "bangla" })
const res2 = createArray1<Name>({ name: "bangla" })

const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2]
}

const res6 = createArray2<string, string>("bsfd", "dfsf")
// const res5 = createArray2<boolean, string[]>(false, ["dfadf"])
const res5 = createArray2<boolean, Array<string>>(false, ["dfadf"])

// spread operator

const crush = "kate winslet"
// const myInfo = {
//     name: "Persian",
//     age: 10,
//     salary: 54654564
// }

// const newData = { ...myInfo, crush }

// const addMeInMyCrushMind = (param: any) => {
//     const crsh = "jkjlk"
// }
// const addMeInMyCrushMind = (myInfo: object) => {
//     const crsh = "jkjlk";
//     const newData = { ...myInfo, crsh }
//     return newData
// }
const addMeInMyCrushMind = <T>(myInfo: T) => {
    const crsh = "jkjlk";
    const newData = { ...myInfo, crsh }
    return newData
}

const myInfo = {
    name: "Persian",
    age: 10,
    salary: 54654564
}
const ressst = addMeInMyCrushMind(myInfo)

// normal function

function createarray650<X, Y>(param1: X, param2: Y): [X, Y] {
    return [param1, param2]
}