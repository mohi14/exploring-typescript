// jokhn kono class kono parameter nive nah tokhn constructor declare korar kono dorker nei

// jokhn akta class er kono akta method different different rup dekhabe. tokhn take bole polymorphism

class Person {
    takeNap(): void {
        console.log("I am sleeping 8 hours per day")
    }
}

class Studentt extends Person {
    takeNap(): void {
        console.log(`I am sleeping 10 hours per day`)
    }
}

class Developer extends Person {
    takeNap(): void {
        console.log(`I am sleeping 5 hours per day`)
    }
}

function getNap(param: Person) {
    param.takeNap();
}

const persn1 = new Person()
const persn2 = new Studentt()
const persn3 = new Developer()

getNap(persn1)
getNap(persn2)
getNap(persn3)



class Shape {
    getArea(): number {
        return 0
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}

function getAreaOfShape(param: Shape) {
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10))
getAreaOfShape(new Rectangle(10, 20))