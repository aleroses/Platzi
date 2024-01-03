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

Object.defineProperty(student, "avocado", {
  value: "delicious 👈👀",
  configurable: true,
  writable: true,
  enumerable: true,
});

console.log(student);
