class Animal {
    // name: string;
    // species: string;
    // sound: string;

    // public name: string;
    // public species: string;
    // public sound: string;


    // parameter properties
    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

    public makeSound() {
        console.log(`The ${this.name} says ${this.sound}`)
    }
}

const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
const cat = new Animal("Billu", "cat", "mew mew")
dog.makeSound()
cat.makeSound()