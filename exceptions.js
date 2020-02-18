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
