const student = {
  name: "Ale",
  age: 18,
  approvedCourses: ["Course one"],

  addCourse(new_course) {
    this.approvedCourses.push(new_course);
  },
};

console.log(Object.keys(student));
console.log(Object.getOwnPropertyNames(student));
console.log(Object.entries(student));
console.log(Object.entries(student)[3][0]);
