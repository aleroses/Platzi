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
  configurable: false,
  writable: true,
  enumerable: true,
});

student.avocado = "bitter 🤯";
delete student.avocado;

console.log(student);
console.log(Object.keys(student));
