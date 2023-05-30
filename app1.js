// -----------------------------------------------------------
// [0]
// -----------------------------------------------------------
// Wersja JS
// JavaScript ES10/ES2019 Features
// console.log(process.versions.v8);

// -----------------------------------------------------------
// [1]
// Brak typowania statyczne (typowanie dynamiczne)
// -----------------------------------------------------------

let age = 10;
console.log(age)
age = "km"
console.log(age)

const add = (a, b) => a + b;
console.log(add(10, 20));
console.log(add(10, "KM"));

const add2 = (a, b) => {
    if (typeof a !== 'number') {
        throw new Error('A is bad')
    }
    return a + b;
}

// Symbol jak sposob na kontrolowanie typow
const IsPerson = {
    [Symbol.hasInstance](instance) {
        return 'name' in instance && 'surname' in instance;
    }
}

const IsNumberArray = {
    [Symbol.hasInstance](instance) {
        return Array.isArray(instance)
            && instance.every(x => typeof (x) === 'number');
    }
}

const personInfo = (person) => {
    if (!(person instanceof IsPerson)) {
        throw new Error('Not a person')
    }
    console.log(person.name)
    console.log(person.surname)
}
personInfo({name: 'A', surname: 'B'})

// W JS oficjalnie nie ma enum

const Direction = {
    UP: 'UP',
    DOWN: 'DOWN',
}

class Direction2 {
    static UP = new Direction2('UP');
    static DOWN = new Direction2('DOWN');

    constructor(name) {
        this.name = name
    }
}

const Direction3 = Object.freeze({
    LEFT: Symbol('LEFT'),
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    RIGHT: Symbol('RIGHT')
})

const dir = Direction3.DOWN;
console.log(dir === Direction3.DOWN)

// -----------------------------------------------------------
// [2]
// Programowanie obiektowe
// -----------------------------------------------------------

class Product {
    #name;
    #surname
    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname
    }

    info() {
        return `${this.#name} ... ${this.#surname}`
    }
}

// Klasy abstrakcyjne

class Shape {
    constructor(x) {
        this.x = x;
    }

    calculateArea() {
        throw new Error('Abstract method')
    }

    calculatePerimeter() {
        throw new Error('Abstract method')
    }
}

class Square extends Shape {
    constructor(x) {
        super(x)
    }

    calculateArea() {
        return this.x ** 2;
    }

    calculatePerimeter() {
        return this.x * 4;
    }
}

const sq = new Square(11);
console.log(sq.calculateArea())
console.log(sq.calculatePerimeter())

