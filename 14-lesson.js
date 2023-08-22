// -----------------------------5___L_E_S_S_O_N-----------------------------
//CLASSES

//классы используются

const car = {
    brand : 'BMW',
    maxSpeed : 200,
    startEngine(){
        console.log(`${this.brand} engine is started`)
    }
}

//FABRIC FUNCTION - создает однотипные объекты

function carCreator(brand, maxSpeed){
    const car = {
        brand : brand,
        maxSpeed : maxSpeed,
        startEngine(){
            console.log(`${this.brand} engine is started`)
        }
    }
    return car
}

const car1 = carCreator('das', 432)
car1.startEngine()

//Создание почти, как класс

function Car(brand, maxSpeed){
    this.brand = brand
    this.maxSpeed = maxSpeed
}
Car.prototype.startEngine = function (){
    console.log(`${this.brand} engine is started`)
}

const car_1 = new Car('bmw', 200)
const car_2 = new Car('audi', 243)

car_1.startEngine()
car_2.startEngine()

//Для того, чтобы упростить эти действия был введен СИНТАКСИЧЕСКИЙ САХАР - класс

class CarModel {
    #brand;
    constructor(brand, maxSpeed) {
        this.#brand = brand
        this.maxSpeed = maxSpeed
    }
    //Этот метод будет создан 1 раз, т.к. он ОДИНАКОВЫЙ для всех
    startEngine(){
        console.log(`${this.brand} engine is started`)
    }
    set setBrand(newBrand) {
        if (!newBrand) throw new Error('EMPTY')
        this.#brand = newBrand.toUpperCase()

    }
    get brand(){
        return this.#brand
    }
}

const car_3 = new CarModel('krovostok', 2031)
car_3.startEngine()
//undefined т.к. тут он обращается к инстансу, а там undefined
setTimeout(car_3.startEngine, 1000)
//KROVOSTOK
setTimeout(car_3.startEngine.bind(car_3), 1000)
//KROVOSTOK
setTimeout(() => car_3.startEngine(), 1000)

//обращаемся к сеттеру
car_3.brand = ''
//обращаемся к геттеру
console.log(car_3.brand)



const promise = new Promise((res) => {
    console.log(1);
    setTimeout(()=>{
      console.log(4)
      res()
      console.log(5)
    },1)
  })
  console.log(2)
  promise.then(() =>{console.log(3)})
  Promise.resolve().then(()=>{console.log(6)})
  setTimeout(()=>{
    console.log(100)
  },0)
  

