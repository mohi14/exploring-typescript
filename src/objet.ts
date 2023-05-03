// explisitly

const u: {
    name: string,
    age: number,
    isMarried: boolean
    wife?: string  //thats mean wife thakleo thakte pare. 
} = {
    name: "hello",
    age: 52,
    isMarried: true,
    wife: "bibi"
}


const usr = {
    name: "abul",
    age: 52,
    isMarried: true,
    wife: "Bibi"
}


const ser: {
    company: "Mohi Point", // by using this value should be same 
    age: number
} = {
    company: "Mohi Point",
    age: 12
}
const er: {
    readonly company: string, // by using this value can not be changed 
    age: number
} = {
    company: "Mohi Point",
    age: 12
}

// er.company = 'jkkk'