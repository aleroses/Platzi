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
    super({ name });
    this.breed = breed;
  }

  speak() {
    super.speak();
    console.log(`${this.name} barks!!`);
  }
}

const dog = new Dog({
  name: "Fido",
  breed: "something",
});

console.log(dog.speak());

/* class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} hace un sonido.`);
  }
}

class Perro extends Animal {
  constructor(name, raza) {
    super(name);
    this.raza = raza;
  }

  speak() {
    super.speak();
    console.log(`${this.name} ladra.`);
  }
}

let perro = new Perro("Fido", "Golden Retriever");
perro.speak(); // "Fido hace un sonido." "Fido ladra." */
