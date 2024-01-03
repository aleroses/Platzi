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

/* Object.defineProperty(student, "test_01", {
  value: "OSNI",
  writable: true,
  enumerable: false,
  configurable: true,
});

Object.defineProperty(student, "test_02", {
  value: "OVNI",
  writable: false,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(student, "test_03", {
  value: "X-Files",
  writable: true,
  enumerable: true,
  configurable: false,
});

Object.defineProperty(student, "test_04", {
  value: "UFOs",
  writable: false,
  enumerable: false,
  configurable: false,
}); */

// console.log(Object.seal(student));
//Object.freeze(student);
//console.log(student);

/* console.log(
  Object.getOwnPropertyDescriptors(student)
); */

delete student.addCourse;
console.log(student);
