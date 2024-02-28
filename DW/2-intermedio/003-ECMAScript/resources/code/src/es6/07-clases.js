// Declarando
/* class User {}; */

// Instancia de una clase
/* const newUser = new User(); */

// EJEMPLO 01----------------
/* class user {
    // Metodos
    greeting() {
        return 'Hello';
    }
};

const ghost = new user();
console.log(ghost.greeting());

const phantom = new user();
console.log(phantom.greeting()); */



// EJEMPLO 02---------------
// Constructor 
/* class user {
    // Constructor
    constructor() {
        console.log('Nuevo usuario');
    }
    greeting() {
        return "Hello";
    }
}

const david = new user(); */


// EJEMPLO 03---------------
// this: Hace referencia al elemento padre que lo contiene 
/* class user {
    constructor(name) {
        this.name = name;
    }
    // Metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());
 */



// EJEMPLO 04---------------
// setters and getters
class user {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const dev = new user('David', 15);
console.log(dev.uAge);
console.log(dev.uAge = 20);