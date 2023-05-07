// static dara bojai ata fixed property nibe. noton kore new memory toiri korbe nah


class Counter {

    static conunter: number = 0;

    static increment(): number {
        return Counter.conunter = Counter.conunter + 1
    }

    static decrement(): number {
        return Counter.conunter = Counter.conunter - 1
    }
}

// const instance11 = new Counter()
// const instance22 = new Counter()

// static korle instance use korar dorker nai, class diyei amra function gola access korte parbo

console.log(Counter.increment())
console.log(Counter.decrement())