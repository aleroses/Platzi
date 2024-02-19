/* class Dog {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  
	miau() {
    console.log(
      `I'm ${this.name} and I'm a dog and I don't "miau". I have the power of ${this.power}`
    );
  }
}

const skill = new Dog("Skill", "The Force");
console.log("Class:", Dog, "instance:", skill);
skill.notFromProto = "Not from .prototype";
console.log(skill);

skill.miau();
Dog.prototype.withProto = function () {
  console.log("Now class with proto,", this.name);
};
skill.withProto();

Dog.prototype.notRecommended = function () {
  console.log(
    `Now, I will be referencing something that only exist in Skill: ${this.notFromProto}`
  );
};
const value = new Dog("Value", "Super bark");
skill.notRecommended();
value.notRecommended(); */

class Student {
  constructor({ name, age, courses = [] }) {
    this.name = name;
    this.age = age;
    this.courses = courses;
  }

  new_course(course_name) {
    this.courses.push(course_name);
  }
}

const ale = new Student({ age: 18, name: "ale" });
console.log(ale);

console.log(ale);
