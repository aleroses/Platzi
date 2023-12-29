class Animal {
  constructor({ name }) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor({ name, breed }) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks!!`);
  }
}

const dog = new Dog({ name: "Fido" });
console.log(dog.speak());
