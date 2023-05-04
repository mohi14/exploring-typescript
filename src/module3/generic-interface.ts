// generic interface

interface CurshInterface<T,U=null>{
    name:string;
    husband: T;
    wife?:U
}

const crosh: CurshInterface<boolean,string>={name:"fjkdjfkl",husband:true}

const crosh1: CurshInterface<string, string>={
    name: "jfksjdfkf",
    husband: "jlkjk",
    wife:"jlksdjfklsdfjkl"
}

// const crosh2: CurshInterface<{name:string; salary:number}>={
//     name:"kjflkjfk",
//     husband: {
//         name: "jkljkl",
//         salary:0.23
//     }
// }

interface IHusbandInterface{
    name:string,
    salary:number
}
const crosh2: CurshInterface<IHusbandInterface>={
    name:"kjflkjfk",
    husband: {
        name: "jkljkl",
        salary:0.23
    }
}

interface IPersonInterface{
    name:string,
    age:number
}

const crosh3: CurshInterface<IPersonInterface,IPersonInterface>={
    name:'kase',
    husband:{
        name:"fklsfkl",
        age:55
    },
    wife:{
        name:'jflkdsjlfk',
        age:40
    }
}