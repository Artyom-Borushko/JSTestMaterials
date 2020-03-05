class Animal {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }
}

const firstAnimal = new Animal({
    name : "Lev",
    age : 12,
    hasTail : true
})

console.log(firstAnimal);


