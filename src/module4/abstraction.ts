// -------------------------interface------------------

// interface IVehicle {
//     name: string;
//     model: string;
// }

// const vehicle: IVehicle = {
//     name: "Car",
//     model: "2000"
// }

interface IVehicle {
    startEngine(): void
    stopEngine(): void
    move(): void
    gg?(): void
}

class Vehicle implements IVehicle {
    // interface er method gola must use korte hobe

    constructor(public name: string, public brand: string, public model: number) {

    }
    startEngine(): void {
        console.log("i am starting engine....");
    }
    stopEngine(): void {
        console.log("i am stoping engine..");
    }
    move(): void {
        console.log("moving engine..");
    }
    test() {
        console.log("I am for testing purpose");
    }
}

const vehicle1 = new Vehicle("Car", "toyota", 2000)


// --------------abstract class------------

// abstract class Vehiclee {

//     constructor(public name: string, public brand: string, public model: number) {

//     }

//     startEngine(): void {
//         console.log("i am starting engine....");
//     }
//     stopEngine(): void {
//         console.log("i am stoping engine..");
//     }
//     move(): void {
//         console.log("moving engine..");
//     }
//     test() {
//         console.log("I am for testing purpose");
//     }
// }

abstract class Vehiclee {

    constructor(public name: string, public brand: string, public model: number) {

    }

    abstract startEngine(): void
    abstract stopEngine(): void
    move(): void {
        console.log("moving engine..");
    }

    test() {
        console.log("I am for testing purpose");
    }
}

// abstract class k follow kora jabe, extends kora jabe but instance toiri kora jabe nah

// const car1 = new Vehiclee('car', "honda", 2015)

class Car1 extends Vehiclee {
    startEngine(): void {
        console.log("i am starting engine....");
    }
    stopEngine(): void {
        console.log("i am stoping engine..");
    }
}

