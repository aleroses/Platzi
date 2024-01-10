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

// Object.seal(student);
Object.freeze(student);

student.avocado = "bitter 🤯";
delete student.avocado;

// seal No deja añadir ni modificar
/* Object.defineProperty(student, "test", {
  value: "insane 👈👀",
  configurable: true,
  writable: true,
  enumerable: true,
}); 

Object.defineProperty(student, "avocado", {
  value: "lolcat 👈👀",
  configurable: true,
  writable: true,
  enumerable: true,
});*/

console.log(student);
console.log(Object.keys(student));
console.log(
  Object.getOwnPropertyDescriptors(student)
);
