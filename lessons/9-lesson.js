// -----------------------------6___L_E_S_S_O_N-----------------------------

//ЗАМЫКАНИЯ, ФУНКЦИЯ СЧЕТЧИКА 

//Лексическое окружение - область видимости (одно и то же) - lexical environment. 

//переменные 

//1 глобальное лексическое окружение. { car : undefined }

let car 

//{car : 'bmw'}

car  = 'bmw'

function startCarEnging() {
    //{enging : 'Start'} -  блочная область видимости
    let enging = 'Start'
    return () => {
        //В данном случае имеем замыкание, т.к. car не определен внутри функции, где он определяется.
        console.log(`${enging} ${car}`);
    }
}
//вернет Start bmw
startCarEnging()()
//вернет Start skoda
//{car : 'skoda', startCarEnging : Function}
car = 'skoda'
startCarEnging()()
//Механизм замыкания состоит в том что функция ищет переменную все выше и выше, и берет первое, что находит.
//Например, если бы мы определили функцию внутри startCarEnging , он бы взял ее.

//Отличие var от let 

if(true){
    //{c : 0} - ГЛОБАЛЬНАЯ, {k : 1} - БЛОЧНАЯ
    var c = 0
    let k = 1
    console.log(c) //0
    console.log(k) //1
}
console.log(c) //0
//console.log(k) error is not defined

const counter = () => {
    //counterLE {count : 1 }
    let count = 10;
    return () => {
        console.log(++count)
    }
}
//не очищается лексическое объявление функции, т.е. сборщик мусора не работает.
let counter_ = counter()
counter_() //11
counter_() //12

//очищается лексическое окружение
counter()()//11
counter()()//11

let count = 10;
const counter1 = () => {
    return () => {
        console.log(++count)
    }
}
//не очищается лексическое объявление функции, т.е. сборщик мусора не работает.
counter1()()//11
counter1()()//12
counter1()()//13
counter1()()//14

let counter2 = (count2 = 1) => {
    return {
        increment(){
            count2++
        },
        getCount(){
            return count2
        }
    }
}

let counter_2 = counter2(21)

counter_2.increment();
counter_2.increment();
counter_2.increment();

console.log(counter_2.getCount())//4

//Каррирование - 

const sum = (a) => (b) => (c) => (a + b + c)

sum(1)(2)(3) //6

//это тройное замыкание

function sum1 (a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

console.log(sum1(1)(2)(3))

console.log(typeof(null))

//Стек вызова 
//функция а не может выполниться, пока не выполнится функция б
//функция б не может выполниться, пока не выполнится фукнция с

function a(){
    b(c())
}

function b(){
    
}

function c(){
    
}

//Рекурсия

const pow = (x, n) => {
    if (n === 1) return x
    return x * pow(x, n-1)
}

console.log(pow(3, 3)) //27 3

//всплытие, var, хостинг