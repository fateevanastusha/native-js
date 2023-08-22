// -----------------------------5___L_E_S_S_O_N-----------------------------

//CRUD - create read update delete

//SORTING - МАССИВ МЕНЯЕТСЯ (мутабельно)

//1. сортировка без коробки, без доп параметров

const name = ['Bob', 'Alex', 'Donald']
console.log(name.sort()) // => ['Alex', 'Bob', 'Donald']

const name1 = ['Donald', 'aLEX', 'Alex', 'alex', 'игорь', 'Юрий']
console.log(name1.sort()) // => ['Donald','Alex', 'aLEX', 'Юрий', 'игорь'] в порядке расположения символов в юникоде

const numbers = [1000 , 4, 22, 6780, -1]
console.log(numbers.sort()) // => [-1, 1000, 22, 4, 6780] в порядке расположения символов в юникоде

//2. сортировка по возрастанию чисел

const compareFunc = (a,b) => {//по возрастанию
    // > 0 - переставить местами
    // <= 0 - не меняем порядок
    if (a > b) {
        return 1 // менять местами TRUE
    } else {
        return -1 // не менять местами FALSE
    }
}
//sort либо меняет два числа местами, либо нет.
console.log(numbers.sort(compareFunc))

//3. сортировка по строкам

const students = [
    {
        name : 'Bob',
        age: 22,
        isMarried: true,
        scores : 95
    },
    {
        name : 'Alex',
        age: 24,
        isMarried: true,
        scores : 89
    },
    {
        name : 'Helge',
        age: 24,
        isMarried: true,
        scores : 90
    },
    {
        name : 'Nick',
        age: 20,
        isMarried: false,
        scores : 120
    },
    {
        name : 'John',
        age: 22,
        isMarried: true,
        scores : 89
    },
]
const sortByName = (a,b) => {
    if(a.name > b.name) {
        return 1; // TRUE
    } else {
        return -1; // FALSE
    };
};
console.log(students.sort(sortByName));

const sortByAge = (a,b) => {
    if(a.age > b.age) {
        return 1;
    } else {
        return -1;
    };
};
console.log(students.sort(sortByAge));

//4. сортировка пузырьком

//(n-1)^2 сложность алгоритма

const numbers1 = [23,45,12,11,99,34];
//переставляем БОЛЬШЕЕ число в конец numbers1.length - 1 раз
for (let k = 0; k < numbers1.length - 1; k ++ ){
    let isSorted = true;
    //переставляем БОЛЬШЕЕ число в конец КАЖДЫЙ раз сокращая кол-во итераций
    for (let i =0; i < numbers1.length-1 - k; i++) {
        if(numbers1[i] > numbers1[i + 1]) {
            isSorted = false;
            [numbers1[i + 1], numbers1[i]] = [numbers1[i], numbers1[i+1]];
        };
    };
    if (isSorted) break;
}
console.log(numbers1) // => [ 11, 12, 23, 34, 45, 99 ]
console.log("refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNjc5NDExNzU3MTMyIiwiaWF0IjoxNjc5NDExNzU3LCJleHAiOjE2Nzk0MTE3Nzd9.l4iHL1vN1m2qa1zJRVpytsYsSz8_BgLbkKkYfzbq5sQ;".split('=')[1].slice(0,-1))