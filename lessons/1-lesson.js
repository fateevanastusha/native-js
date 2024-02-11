
// -----------------------------1___L_E_S_S_O_N-----------------------------

// primitives
// string number boolean null - не можем считать объектом undefined NaN Infinity Symbol BigInt
// objects
// massive functions objects

//1. более сложная стурктура
//2. имеют свойства и методы
//3. ссылочный тип данных

 //NaN - это не число, т.к. с практической точки зрения нельзя с ним работать как с числом
 //Number.isNaN() - вернет true или false
 //Infinity тоже превратит всё в Infinity к чему прикоснется
 //если 100/0 - Infinity

 //Array.isArray() - определить массив или нет

 //react - имметабельная работа с данными

const a = [1,2,3,4]
a.push(5) // - мутация, изменение

const b = [1,2,3,4] // - переносим содержимое a (копируем)
b.push(5)
/*
a и b два отдельных массива, не смотря на то что они одинаковые
*/

function logger1(prev,current) {
    if(prev !== current){
        console.log(current)
    }
}
/*
- эта функция ok, получим log
*/

const c = b
function logger2(prev,current) {
    if(prev !== current){
        console.log(current)
    }
}
/*
- не получим log

!!!
это произойдет потому что массив - ссылочный тип
то есть хранится ссылка на ячейку памяти, в которой хранится примитив

реакт работает таким же образом. поэтому если нужно иметь предыдущю версию, то нужно его копировать не по ссылке

_______________

ЧИСТАЯ ФУНКЦИЯ - не меняет входные данные
ГРЯЗНАЯ ФУНКЦИЯ - меняет входные данные

*/
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



 //CRUD OPERATIONS
 /*
 CREATE (ADD)
  */
 const newStudent = {
     name: "John",
     age:22
 }
 const copyStudents1 = [...students, newStudent] //деструктуризация массива (раскукоживание). Делаем новый массив, добавляем в него содержимое старого, и добавляем что-то новое

 /*
 UPDATE (PUT)
  */

 //изменение лучше всего сделать в исходном массиве copyStudents1,  то есть не создавать новый copyStudents2

 const copyStudents2 = copyStudents1.map(student => student.name === "Bob" ? {...students, name: "Julia"} : student) // MAP всегда вернет НОВЫЙ массив
 //идея в том, что мы закидываем всех НЕИЗМЕНЁННЫХ студентов , и меняем нужного и закидываем его потом

/*
DELETE (DELETE)
 */

 const copyStudents3 = copyStudents2.filter(student => student.name !== "Julia") //filter вернет true либо false (брать в новый или нет)
//фильтруем массив и удаляем тех кто не нужен


// -----------------------------2___L_E_S_S_O_N-----------------------------

//МЕТОДЫ МАССИВОВ

const getNames = (array) => {
     const result = []
    const getName = obj => obj.name

    return result
}



const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(console.log('resovled'))
    }, 2000)
})
let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(console.log('resovled'))
    }, 2000)
})

let set = new Set([p1, p2]);
Promise.any(set)