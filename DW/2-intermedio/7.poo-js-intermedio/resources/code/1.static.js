class Duck {
  static little_sound = "quack!";

  static make_a_little_sound() {
    return "quack x2";
  }
}

console.log(Duck.little_sound);
console.log(Duck.make_a_little_sound());

const little_object = {
  name: "Ale Roses",
  email: "aleroses@mail.com",
  age: 18,
};

console.log(Object.keys(little_object));
console.log(
  Object.getOwnPropertyNames(little_object)
);
console.log(Object.entries(little_object));

/* const ale = {
  name: "Ale",
  age: 18,
  approvedCourses: ["Course 01"],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

console.log(Object.keys(ale));
console.log(Object.getOwnPropertyNames(ale));
console.log(Object.entries(ale));

Object.entries(ale);
Object.entries(ale)[3];
Object.entries(ale)[3][0]; 
*/
