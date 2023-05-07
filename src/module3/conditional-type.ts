// a type is dependent on another type is conditional type

type a1 = string
type a2 = a1 extends string ? string : null

type a3 = undefined
type a4 = number

// nested conditional type
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never

type Habibi = {
    wife1: string;
    wife2: string;

};

// check korbe ei Habibi Type a wife1 ase kina ? true: false

// type CheckProperty<T> = T extends { wife1: string } ? true : false

// type CheckWife1 = CheckProperty<Habibi>

type A = keyof Habibi  // "wife1" | "wife2"

//"wife1" extends "wife1|wife2"
type CheckProperty<T, K> = K extends keyof Habibi ? true : false

type CheckWife1 = CheckProperty<Habibi, 'wife1'>


// Matha kharap Example

type Bandhubi = "Monika" | "Rachel" | "Pheobe"

// type RemoveBandhubi<T> = T extends 'Rachel' ? never : T

// type CurrentBandhubi = RemoveBandhubi<Bandhubi>

type RemoveBandhubi<T, K> = T extends K ? never : T

type CurrentBandhubi = RemoveBandhubi<Bandhubi, 'Monika'>
