let object = {name: 'Artyom'}
let undefinedObject
let storage = (keys) => keys.name

try {
    console.log(storage(object))
} catch (e) {
    console.log(e.message)
}

console.log('Before')

try {
    console.log(storage(undefinedObject))
} catch (e) {
    console.log(e.message)
}

console.log('After')



;(function (params) {                               // IIFE
    // body
}) ()



const car = {
    maker: 'Ford',
    model: 'Fiesta',
    drive() {
      console.log(`Driving a ${this.maker} ${this.model} car!`)
    }
  }
  car.drive()
  //Driving a Ford Fiesta car!
                                                                        // same results ↓↑
  const car1 = {
    maker: 'Ford',
    model: 'Fiesta',
    drive: function() {
      console.log(`Driving a ${this.maker} ${this.model} car!`)
    }
  }
  car1.drive()
//Driving a Ford Fiesta car!




class Person {
    constructor(name) {
        this.name = name
    }
    hello () {
        return 'Hello, I am ' + this.name + '.'
    }
}

class Actor extends Person {
    hello () {
        return super.hello() + ' I am an actor.' 
    }
}

let tomeCruise = new Actor('Tom')
console.log(tomeCruise.hello());




// class Person {
//     set age(years) {
//       this.theAge = years
//     }
//   }




// Деструктурирующее присваивание

// Техника деструктурирующего присваивания позволяет, например, взять объект, извлечь из него некоторые значения
// и поместить их в именованные переменные или константы.

const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54,
}
const {firstName: name, age} = person
console.log(age); // 54

//  Здесь из объекта извлекаются свойства firstName и age. Свойство age записывается в объявляемую тут же константу с таким же именем,
//  а свойство firstName, после извлечения, попадает в константу name.

// Деструктурирующее присваивание подходит и для работы с массивами.

const a = [1,2,3,4,5]
const [first, second, , , fifth] = a
console.log(second); // 2

// В константы first, second и fifth попадут, соответственно, первый, второй и пятый элементы массива.


