const searchName = (value: string | null) => {
    if (value === null) {
        console.log("There is nothing to search")
    }
    else {
        console.log("Searching..")
    }
}

searchName(null)


// km/h to m/s
const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600
        console.log(`My speed is ${convertedSpeed}`)
    }
    if (typeof speed === "string") {
        const value = speed.split(" "); //["100", "km/h"] 
        const convertedSpeed = (parseFloat(value[0]) * 1000) / 3600
        console.log(`My speed is ${convertedSpeed}`)
    }
    else {
        console.log("there is wrong type")
    }
}

getMyCarSpeed(10)
getMyCarSpeed("100 km/h")
getMyCarSpeed(true)


function throwError(message: string): never {  // it will never return anything
    throw new Error(message)
}

throwError("Vai vai Error hoyeche")
