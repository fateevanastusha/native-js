// -----------------------------10___L_E_S_S_O_N-----------------------------

//Асинхронность нужна для того, чтобы ускорить работу
//Когда не было асинхронности, использовали колбеки: 

// fetch('https://libruary/authors', (err, data) => {
//     if(err){
//         console.log(err)
//     } else {
//         fetch('/https/library/authors/S', (err, data) => {
//             if(err){
//                 console.log(err)
//             } else {
//                 fetch('/https/library/authors/S', (err, data) => {
//                     if(err){
//                         console.log(err)
//                     } else {
//                         fetch('/https/library/authors/S/a', )
//                     } 
//                 })
//             } 
//         })
//     }
// })

//Когда мы делаем запрос, нам возвращается promise в статусе pending
//Он вернет либо reject, либо resolve 
//У promise всегда есть статус
//может вернуться либо REJECT либо RESOLVE (не может быть и то, и то, так же не могут вернуться последовательно)

const server = {
    getData(){
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(console.log('resovled'))
            }, 2000)
        })
        return promise;
    }
}
//обработка промисов. Вызовется либо то, либо то. В зависимости от того, что придет.
const promise = server.getData()
//then - ловит resovle
promise.then( (resovle) => {
    console.log('Resolved ' + resovle)
})
console.log('code is continue')
//catch - ловит reject
promise.catch((error) => {
    console.log(error)
})
//finally - выполнится и в reject, и в resolve случае
promise.finally(() => {
    console.log('finally')
})
//callback - функция, которая будет вызвана по завершению асинхронного действия

function delay(ms){
    return new Promise((res) => {
        setTimeout(() => {
            res(console.log('resolved'))
        }, ms)
    })
}

delay(2000).then(() => console.log('hello'))