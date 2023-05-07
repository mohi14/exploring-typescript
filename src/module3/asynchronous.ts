// mocking
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is fetched"
        if (data) {
            resolve(data)
        } else {
            reject("Failed to fetched data!")
        }
    })
}


const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data
}

const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true
        if (data) {
            resolve(data)
        } else {
            reject(false)
        }
    })
}

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data
}

type ObjectType = {
    name: string,
    age: number
}

// interface IObjectType {
//     name: string,
//     age: number
// }

const makePromiseObject = (): Promise<ObjectType> => {
    return new Promise<ObjectType>((resolve, reject) => {
        const data: ObjectType = { name: "hello", age: 20 }
        if (data) {
            resolve(data)
        } else {
            reject(false)
        }
    })
}

// const makePromiseObject = (): Promise<IObjectType> => {
//     return new Promise<IObjectType>((resolve, reject) => {
//         const data: IObjectType = { name: "hello", age: 20 }
//         if (data) {
//             resolve(data)
//         } else {
//             reject(false)
//         }
//     })
// }

// const makePromiseObject = (): Promise<object> => {
//     return new Promise<object>((resolve, reject) => {
//         const data: object = { name: "hello", age: 20 }
//         if (data) {
//             resolve(data)
//         } else {
//             reject(false)
//         }
//     })
// }

const getPromiseObject = async (): Promise<object> => {
    const data = await makePromiseObject();
    return data
}


// promise<string> promist<boolean> promise<object>

// json place holder data fetch

interface IFetchDataType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async (): Promise<IFetchDataType> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
}

const getTodoData = async (): Promise<void> => {
    const result = await getTodo()
    console.log(result)
}

getTodoData();