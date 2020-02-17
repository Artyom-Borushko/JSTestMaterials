console.log('Hello, world!')

for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log('My name ' + 'is ')

let a;

if (a) {
    console.log('true')
} else {
    console.log('false')
}

let one = 1
let anotherOne = "11"
console.log(one + anotherOne)

{ab: 1; b: 12}
{abc: {bca: 312}}

function test (ad, fg) {
    return ad * fg
}
console.log(test(2,2))

class Person {
    constructor (name) {
        this.name = name
    }

    // get name () {
    //     return this.name
    // }
    // set name (value) {
    //     this.name = value
    // }

    hello () {
        return ('That\'s object based on class ')
    }
}

const firstPerson = new Person('Artyom')
let checkName = firstPerson.hello
console.log(checkName)



class Coder extends Person {
    code () {
        return 'Typing some code'
    }
}

const firstProgrammer = new Coder()
firstProgrammer.hello


const checkFunctionFunctionality = function checkFunction() {
    return 'Check accepted'
}


