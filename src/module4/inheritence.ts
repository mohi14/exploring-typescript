class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name
        this.age = age
        this.address = address
    }
    makeSleep(hours: number): string {
        return `This ${this.name} will sleep from ${hours}`
    }
}


// class Student {
// name: string;
// age: number;
// address: string;

// constructor(name: string, age: number, address: string) {
//     this.name = name
//     this.age = age
//     this.address = address
// }
// makeSleep(hours: number): string {
//     return `This ${this.name} will sleep from ${hours}`
// }
// }

class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}

const student1 = new Student("Mohi", 25, "Uttara")



// class Teacher {
//     name: string;
//     age: number;
//     address: string;
//     designation: string;

//     constructor(name: string, age: number, adress: string, designation: string) {
//         this.name = name;
//         this.age = age,
//             this.address = adress,
//             this.designation = designation
//     }
//     makeSleep(hours: number): string {
//         return `This ${this.name} will sleep from ${hours}`
//     }

//     takeClasses(numberOfClass: number): string {
//         return `This ${this.name} will take ${numberOfClass} class`
//     }
// }

class Teacher extends Parent {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }
    takeClasses(numberOfClass: number): string {
        return `This ${this.name} will take ${numberOfClass} class`
    }
}

const teacher1 = new Teacher("kfjkl", 25, "fjsklf", "jlfajf");
