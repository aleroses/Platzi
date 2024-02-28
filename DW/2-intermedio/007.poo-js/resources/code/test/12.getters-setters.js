class Course {
  constructor({ name, classes = [] }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(new_name) {
    if (new_name === "Bad") {
      console.log("Incorrect");
    } else {
      this._name = new_name;
    }
  }
}

const course_one = new Course({
  name: "Course 01",
  classes: [{ topic: "Class 01" }],
});

console.log("Message 01", course_one);
console.log("Message 02", course_one.name);

course_one.name = "Bad";
course_one._name = "Bad";
console.log("Message 03", course_one._name);
