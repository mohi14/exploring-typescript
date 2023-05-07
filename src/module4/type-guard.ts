// typescript e jokhn amra type k bada dibo tokhn seta k bole type guard

// keyof guard

type Alphaneumerics = string | number

function addss(param1: Alphaneumerics, param2: Alphaneumerics): Alphaneumerics {
    if (typeof param1 == "number" && typeof param2 == "number") {
        return param1 + param2
    }
    else {
        return param1.toString() + param2.toString()
    }
}

addss("1", "2")
addss(1, 2)

// in guard

type NormalUserType = {
    name: string
}

type AdminUserType = {
    name: string;
    role: 'admin'
}

function getUserrr(user: NormalUserType | AdminUserType): string {
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`
    }
    else {
        return `I am a Normal user`
    }
}

const normalUser1: NormalUserType = { name: "Mr. kallu" }
const adminUser1: AdminUserType = { name: "Mr. Gallu", role: 'admin' }

console.log(getUserrr(normalUser1));
console.log(getUserrr(adminUser1));




// instaceof guard

class Animal1 {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log("I am making sound");
    }
}

class Dog extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeBark() {
        console.log("I am barking")
    }
}

class Cat extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeMeaw() {
        console.log("I am meawing")
    }
}



const animal11 = new Dog("Kutta", "dog") // instance-->dog
const animal12 = new Cat("Bilai", "cat") // instance-->cat

// class k amra type hishebe use korte pari

function geAnimal(obj: Animal1) {
    if (obj instanceof Dog) {
        obj.makeBark()
    }
    else if (obj instanceof Cat) {
        obj.makeMeaw()
    }
    else {
        obj.makeSound()
    }
}

geAnimal(animal11);


// function er maddhome type guard check kora

function isDog(animal: Animal1): animal is Dog {
    return animal instanceof Dog
}

function isCat(animal: Animal1): animal is Cat {
    return animal instanceof Cat
}

function geAnimal1(animal: Animal1) {
    if (isDog(animal)) {
        animal.makeBark()
    }
    else if (isCat(animal)) {
        animal.makeMeaw()
    }
    else {
        animal.makeSound()
    }
}