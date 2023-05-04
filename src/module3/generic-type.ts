// generic type is kind of common type

// generictuple
type GenericTuple<X,Y>=[X,Y]

const relation:GenericTuple<string,string>=['Hello','noHello']

// const relationWithSalary:GenericTuple<object,string>=[{salary:"Doller",salaryA:5000},"kjkkk"]

type RelationWithSalaryType ={
    salary:string,
    salaryA:number
}

interface IRelationWithSalaryInterface{
    salary:string,
    salaryA:number
}

// const relationWithSalary:GenericTuple<{salary:string,salaryA:number},string>=[{salary:"Doller",salaryA:5000},"kjkkk"]
// const relationWithSalary:GenericTuple<RelationWithSalaryType,string>=[{salary:"Doller",salaryA:5000},"kjkkk"]
const relationWithSalary:GenericTuple<IRelationWithSalaryInterface,string>=[{salary:"Doller",salaryA:5000},"kjkkk"]


// type GenericArray=Array<number>
type GenericArray<T>=Array<T> //here T is params 

// const rullNumbers:Array<number>=[44,12,4];
// const rullNumbers2:Array<string>=["44","22","4"]
// const rullNumbers3:Array<boolean>=[true, false,true]
// const userNameAndRollNumbers: Array<{name:string, rollnumber:number}>=[{name:"Mr. X", rollnumber:2},{name:"Mr. Y", rollnumber:3}]


// const rullNumbers:GenericArray=[44,12,4];
const rullNumbers:GenericArray<number>=[44,12,4];
const rullNumbers2:GenericArray<string>=["44","22","4"]
const rullNumbers3:GenericArray<boolean>=[true, false,true]

type NameRollType = {name:string, rollnumber:number}


// const userNameAndRollNumbers: GenericArray<{name:string, rollnumber:number}>=[{name:"Mr. X", rollnumber:2},{name:"Mr. Y", rollnumber:3}]

const userNameAndRollNumbers: GenericArray<NameRollType>=[{name:"Mr. X", rollnumber:2},{name:"Mr. Y", rollnumber:3}]