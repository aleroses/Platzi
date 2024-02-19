const animal = {
  name: "cat",
  age: 5,
  vaccines: ["one"],
  vaccine(number) {
    this.vaccines.push(number);
  },
};

animal.name = "dog";
animal.age += 1;
animal.vaccines.push("two");
animal.vaccine("three");
console.log(animal);

/* Other form */

function Animal(name, age, vaccines) {
  this.name = name;
  this.age = age;
  this.vaccines = vaccines;
}

Animal.prototype.vaccine = function (number) {
  this.vaccines.push(number);
};

const dog = new Animal("Burger", 3, ["one"]);
dog.vaccine("two");
console.log(dog);

/* Other forme */

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return "Woof!";
  }
}

class Chihuahua extends Dog {
  constructor(name) {
    super(name);
  }

  smallBark() {
    return "Small woof!";
  }
}

const myPet = new Chihuahua("Max");

console.log(myPet);
console.log(myPet.smallBark());

/* Other */
const person = {
  name: "Lydia",
  age: 21,
};

const me = Object.create(person);
console.log(me.name, me.age);

/* Other */
const thing = { name: "ale", age: 18 };
thing.__proto__ = Dog.prototype;
thing.bark();
console.log({ thing });
