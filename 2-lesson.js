// -----------------------------2___L_E_S_S_O_N-----------------------------

//МЕТОДЫ МАССИВОВ

const students = [
    {
        name: "Bob",
        age: 34
    },
    {
        name: "Alex",
        age: 12
    },
    {
        name : "Masha",
        age: 25
    }
]


const getNames = (array) => {
    const result = []
    const getName = obj => obj.name
    for (let i = 0; i < array.length; i++){
        const temp = getName(array[i])
        result[i] = temp
    }
    return result
}
console.log(getNames(students))

//can fill the Array with fill
const arr = new Array(1000)
arr.fill(1)

const addAge = (array) => {
    const result = [];
    const addAgeForStudent = (obj) => {
        const copy = {...obj};
        copy.age = obj.age + 5
        return copy
    }
    for (let i =0 ; i < array.length; i ++){
        const temp = addAgeForStudent(array[i])
        result[i] = temp
    }
    return result
}

const getName = obj => obj.name
const addAgeForStudent = (obj) => {
    const copy = {...obj};
    copy.age = obj.age + 5
    return copy
}

//MAP ANALOGY

const selfMageMap = (array, func) => {
    const result = []
    for (let i =0 ; i < array.length; i ++){
        const temp = func(array[i])
        result[i] = temp
    }
    return result
}

console.log(selfMageMap(students, getName()))
console.log(selfMageMap(students,selfMageMap()))

//FILTER ANALOGY

const selfMageFilter = (array, func) => {
    const result = [];
    for(let i=0; i < array.length; i++) {
        if (func(array[i]) === true){
            result.push(array[i])
        }
    }
    return result
}

console.log(selfMageFilter(students, st => st.age >= 20))

//FIND ANALOGY

const selfMageFind = (array, func) => {
    let result
    for (let i=0 ; i < array.length; i++){
        if(func(array[i]) === true) {
            return array[i]
        }
    }
}

console.log(selfMageFind(students, st => st.name === "Masha"))

//SLICE ANALOGY

const selfMadeSlice = (array, startIndex, endIndex ) => {
    const result = [];
    const end = endIndex ?
        endIndex < array.length ? endIndex
            : array.length
        : array.length
    for (let i = startIndex; i < end; i++){
        result.push(array[i])
    }
    return result
}
console.log(selfMadeSlice(students, 0,3))

