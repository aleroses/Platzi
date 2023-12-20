const ale = {
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

Object.entries(ale)
Object.entries(ale)[3]
Object.entries(ale)[3][0]