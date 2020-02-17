
// traditional loop ↓
const arrayOfItems = ['a', 'b', 'c']
for (let i = 0; i < arrayOfItems.length; i++) {
    const storage = arrayOfItems[i];
    console.log(storage);
    // break - to abort the loop
    // continue - to skip the current iteration and go directly to the next one
}



arrayOfItems.forEach((item, index) => {                 // forEach loop. To break need to throw extension
    console.log(item);
    console.log(index);
});

arrayOfItems.forEach(item => console.log(item));        // forEach loop, which returns only value 



const arrayOfItems1 = ['ab', 'bc', 'cd']
let i = 0
do {                                                    // do...while loop. Performs at least once. Can use break and continue
    console.log(arrayOfItems1[i])
    i = i + 1
} while (i < arrayOfItems1.length)



const list = ['a', 'b', 'c']
let io = 0
while (io < list.length) {                              // while loop. May never perform
  console.log(list[io]) //значение
  console.log(io) //индекс
  io = io + 1
}



let personObject = {
    name: 'Artyom',
    surname: 'Borushko',
    id: 123
}
for (const property in personObject) {                   // for...in loop. To iterate over all enumerable properties of the object BY NAME
    console.log(property) // имя свойства
    console.log(personObject[property]) // значение свойства 
}



for (const value of ['a', 'c', 'd']) {                    // for...of. Iterates through the PROPERTY VALUE (значения свойств)
    console.log(value)                                    // can be aborted through break and continue
}

for (const [index, value] of ['b', 'b', 'c'].entries()) {
    console.log(index)                                    // also for...of
    console.log(value)
}



// just funny code ↓
const operations = []
for (let i = 0; i < 5; i++) {
  operations.push(() => {
    console.log(i)
  })
}
for (const operation of operations) {
  operation()
}



