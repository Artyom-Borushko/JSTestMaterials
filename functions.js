function function1 (name) {
    // to do
}


// anonymous function ↓

const testFunction = function (surname) {
    // to do
}


// named function ↓

const testFunction2 = function namedFunction () {
    // to do
}



const testNamedFunctionES6 = (name, surname) => {
    // to do
}



const spreadFunction = (name = "Artyom", age = 21) => {
    // to do 
    return name + age
}
const array1 = ['Dima', 18]
console.log(spreadFunction(...array1));



const objectFunction = ({surname = 'Petrov', id = 321}) => {
console.log(surname);   
console.log(id); 
}
const args1 = {surname: 'Barushka', id: 123}
console.log(objectFunction(args1)); 



const returnFunctionExample = () => {
    return ['Roger', 6]
}
const [name, age] = returnFunctionExample()
console.log(name, age)



const returnFunctionExampleForObjects = () => {
    return {name2: 'Axe', age2: 8}
}
const {name2, age2} = returnFunctionExampleForObjects()
console.log(name2, age2);



const innerFunctionFirst = () => {
    const innerFunctionSecondInside = () => {}
    innerFunctionSecondInside() // INNER FUNCTION HAS THE OUTER FUNCTION SCOPE (we can call it only inside the outer function)
    return 'Some text to return'
}
console.log(innerFunctionFirst());



const car = {
    brand: 'Ford',
    weight: 12,
    start: function () {
        console.log(`Ready to start ${this.brand} ${this.weight}`);
    }
}
car.start()



; (function () {
    console.log('Immediately invoked function expression');
}) ()

const containerForIIFE = (function () {
    return "IIFE return this text"
}) ()
console.log(containerForIIFE);



const implicitReturn = () => ({value: 'test'})
const obj = implicitReturn()
console.log(obj.value);



const prepareBark = dog => {
    const say = `${dog} barked!`
    return () => console.log(say)
}
const bark = prepareBark('Jim')
bark()
