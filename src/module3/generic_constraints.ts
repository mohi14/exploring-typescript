// generic ta k force kora..jokhn tmi generic type ta k force koro j type ta amn amn hote hobe se khetre seta k generic constraints bola hoy.

type MandatoryTypes = { name: string, age: number, salary: number }
interface IMandatoryInterFace { name: string, age: number, salary: number }

// const addMeInMyCrushMindd = <T extends { name: string, age: number, salary: number }>(myInfo: T) => {

const addMeInMyCrushMindd = <T extends MandatoryTypes>(myInfo: T) => {
    const crshh = "jkjlk";
    const newDataa = { ...myInfo, crshh }
    return newDataa
}

type MyInfootype = {
    name: string,
    age: number,
    salary: number,
    ohter1: string

}
const myInfoo: MyInfootype = {
    name: "Persian",
    age: 10,
    salary: 54654564,
    ohter1: "jlfj"

}
// const ressstt = addMeInMyCrushMind<MyInfootype>(myInfoo)
const ressstt = addMeInMyCrushMindd(myInfoo)