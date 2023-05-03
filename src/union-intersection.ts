type NoobDeveloper = {
    name: string,
}

// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number,
// }


enum Level {
    junior = "junior",// default value 0
    mid = "mid",// default value 1
    senior = "senior"// default value 2
}

// intersection
type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number,
    level: "junior" | "mid" | "senior"
}
// type JuniorDeveloper = NoobDeveloper & {
//     expertise: string,
//     experience: number,
//     level: Level
// }

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number
}


// union
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Mohi",
    expertise: "Javascript",
    experience: 2
}

const developer: NextLevelDeveloper = {
    name: "Next bai",
    expertise: "Typescript",
    experience: 3,
    leadershipExperience: 1,
    level: "junior"
}
// const developer: NextLevelDeveloper = {
//     name: "Next bai",
//     expertise: "Typescript",
//     experience: 3,
//     leadershipExperience: 1,
//     level: Level.junior
// }


