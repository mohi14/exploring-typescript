const arrayofNumbers = [1, 2, 3] // ["1","2","3"]
const arrayofStrings = arrayofNumbers.map((number) => number.toString())
console.log(arrayofStrings);


type AreaNumber = {
    height: number;
    width: number;
};

type AA = AreaNumber['height'] //look up types
type BB = keyof AreaNumber // 'width'|'height' 

type AreaString = {
    height: string;
    width: string;
};

type AreaReadonly = {
    readonly height: number;
    readonly width: number
}

// const rectangularArea: AreaNumber = {
//     height: 10,
//     width: 20
// }
// rectangularArea.width = 10


const rectangularArea: AreaReadonly = {
    height: 10,
    width: 20
}


// type Area = {
//     [key in "Persian" | "Forhan"]: string
// }
type Area = {
    [key in 'height' | 'width']: number
}

// dynamically
type Volume = {
    height: number;
    width: number;
    depth: number
}

// type volm = {
//     [key in keyof Volume]: number
// }
// type volm = {
//     [key in keyof Volume]: boolean
// }
type volm = {
    [key in keyof Volume]: Volume[key] //Volume['width]-->number 
}

// making generic

// type volm1<T> = {
//     readonly [key in keyof T]: T[key]
// }

type volm1<T> = {
    [key in keyof T]: T[key]
}

const arear1: volm1<{ height: number, width: string }> = { height: 10, width: '20' }




