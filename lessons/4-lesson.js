// -----------------------------4___L_E_S_S_O_N-----------------------------

const todoList_1 = "23hh-56j";
const todoList_2 = "243gd-99";

const todoList = [
    {
        id : "23hh-56j",
        title: "what to learn",
        filter : "all"
    },
    {
        id : "243gd-99",
        title: "what to buy",
        filter : "all"
    },
]

const tasks = {
    [todoList_1] : [
        {id: 1, title: "html", isDone: false},
        {id: 2, title: "css", isDone: true},
        {id: 3, title: "js/ts", isDone: false}
    ],
    [todoList_2] : [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "milk", isDone: true},
        {id: 3, title: "chicken", isDone: false}
    ]
}

//reduce - сократить, "свертка"
//reduce => свёртка => одно значение
const nums = [1,2,3,4,5,6]

//сумма всех элементов

nums.reduce((acc, el) => {
    return acc + el
}, 0)
console.log(nums) // => имеем сумму всех элементов

//самый большой элемент
nums.reduce((acc, el) => acc > el ? acc : el)