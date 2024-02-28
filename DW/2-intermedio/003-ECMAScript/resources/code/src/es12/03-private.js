class user {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Metodos
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const dev = new user('David', 15);
console.log(dev.uAge);
console.log(dev.uAge = 20);