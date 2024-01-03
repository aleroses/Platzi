const student = {
  name: "Ale",
  age: 18,
  approvedCourses: ["Course one"],

  addCourse(new_course) {
    console.log("This :> ", this);
    console.log(
      "This.approvedCourses :> ",
      this.approvedCourses
    );
    this.approvedCourses.push(new_course);
  },
};

/* console.log(Object.keys(student));
console.log(Object.getOwnPropertyNames(student));
console.log(Object.entries(student));

console.log(Object.entries(student)[3][1]);
console.log(
  Object.entries(student)[3][1]("Course three")
);
console.log(
  Object.getOwnPropertyDescriptors(student)
);
*/

Object.defineProperty(student, "test", {
  value: "UFOs",
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log("\n-------------------");
console.log(
  Object.getOwnPropertyDescriptors(student)
);

Object.defineProperty(student, {
  value: "algo",
  writable: false,
  enumerable: false,
  configurable: false,
});
