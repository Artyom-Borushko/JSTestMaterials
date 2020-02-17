const arr1 = []
const arr2 = [1, 2, 5, 12]


const arr3 = Array(5).fill(11)
console.log(arr3);


console.log(arr2 [2])
arr2 [2]  = 123
console.log(arr2 [2]);


const checkLengthOfAnArray = arr2.length
console.log(checkLengthOfAnArray);


// create an array based on existing array ↓
const arr4 = [1 ,6 , 2]
const multiplyByTwo = el => el * 2
const multipleByTwoWorking = arr4.map(multiplyByTwo)
console.log(arr4)
console.log(multipleByTwoWorking)


// Iteration through an array (forEach)
const arr5 = [1, 21, 2, 43, 15]
arr5.forEach((el) => {console.log(el)})



// Iteration through for...of (APPEARED IN ES6)
const arr6 = [1, 2, 3]
for (const element of arr6) {
    console.log(element);
}


// iteration through standard for loop
for (let i = 0; i < arr6.length; i++) {
    console.log(arr6[i]);
}



// method @@iterator (appeared in ES6)
const arr7 = [1, 2, 3]
let containerForArrayIteration = arr7[Symbol.iterator]()
console.log(containerForArrayIteration.next().value)

    // return key and value pair
let containerForKeysAndPairs = arr7.entries()
console.log(containerForKeysAndPairs.next().value)

    // return only key
let containerForKeys = arr7.keys()
console.log(containerForKeys.next().value);



// some operations with arrays
arr8 = [1, 2, 3]

arr8.push(6)                // append to the end
console.log(arr8)

arr8.unshift(1)             // append to the beginning
console.log(arr8)

arr8.pop()                  // removes element from the end and return that element
console.log(arr8)

arr8.shift()                // delete an element from the beginning of an array
console.log(arr8)

arr8.splice(0, 1)           // delete from specified position by the number
console.log(arr8);

arr9 = [1,2,3,4,5,6,7,8]    
arr9.splice(2, 2, 'a', 'b')  // delete an array's element and insert another elements instead of previous
console.log(arr9);


const storageOfArrays = arr8.concat(arr7)   // combining arrays
console.log(storageOfArrays)


const arr10 = [1, 2, 3, 4, 5, 6, 2, 7, 5, 8]
console.log(arr10.indexOf(4));                  // searching in array by value (return index)
console.log(arr10.lastIndexOf(2))


arr10.includes(3)                       // check for the presence of element in an array
console.log(arr10.includes(3, 3))



arr11 = [1, 2, 3, 4, 5, 6, 2, 7, 5, 8]
arr11.slice(3,6)                                // getting a copy of an array fragment
console.log(arr11.slice(3,6))


arr12 = [1,3,5,2,7,9,4,8]
arr12.sort()                            // sort an array
console.log(arr12)
arr12.sort((a,b) => b - a)              // sort an array in descending order
console.log(arr12)

arr12.reverse()                         // sort an array in a reverse order
console.log(arr12)


arr13 = [1,2,3,4,5]
arr13.toString()                        // converts array to string
console.log(arr13)

console.log(arr13.join('a, '))          // converts array to string and pass the element separator


const stringStatement = 'That\'s a string'
const arrayFromString = Array.from(stringStatement)         // copying array from existing array (may create array from string) 
console.log(arrayFromString)

arr14 = [1, 5, 7, 8, 3]
const receiver = Array.of(...arr14)        // creates a copy of an existing array
console.log(receiver)

arr14.copyWithin(1, 2, 4)                  // copying array elements to a certain location in the array itself
console.log(arr14)



