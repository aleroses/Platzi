import { Course } from "./14.playgrounds-get-set.mjs";

const course_one = new Course({
  name: "Course One",
  classes: [
    "Class one",
    "Class two",
    "Class three",
  ],
});

// course_one.name = 123;
course_one.name = " secret course ";

// console.log(course_one.name);
console.log(course_one._name);
























/* import { Course } from "./14.playgrounds-get-set.mjs";

const course_one = new Course({
  name: "Course one",
  classes: [
    "Topic one",
    "Topic two",
    "Topic three",
  ],
});

course_one.name = 123;
//course_one.name = " secret course ";

// console.log(course_one);
console.log("Current name: ", course_one._name); */
