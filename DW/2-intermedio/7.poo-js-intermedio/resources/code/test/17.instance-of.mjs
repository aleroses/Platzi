import { is_array } from "../11.validation.mjs";

function error_detector(param) {
  throw new Error(param + " is mandatory");
}

function LearningPath({
  name = error_detector("name"),
  courses = [],
} = {}) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = error_detector("Name"),
  email = error_detector("Email"),
  age,
  twitter,
  instagram,
  facebook,
  approved_courses = [],
  learning_paths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;

  this.social_media = {
    twitter,
    instagram,
    facebook,
  };

  if (is_array(learning_paths)) {
    this.learning_paths = [];

    for (let lp_index in learning_paths) {
      if (
        learning_paths[lp_index] instanceof
        LearningPath
      ) {
        this.learning_paths.push(
          learning_paths[lp_index]
        );
      }
    }
  }
}

const school_one = new LearningPath({
  name: "School one",
  courses: [],
});
const school_two = new LearningPath({
  name: "School two",
  courses: [],
});

const ale = new Student({
  name: "Ale Roses",
  age: 18,
  email: "aleroses@mail.com",
  twitter: "aleroses",
  learning_paths: [
    school_one,
    school_two,
    { name: "Impostor", courses: [] },
  ],
});

console.log(ale);
console.log(ale instanceof Student);

const student_impostor = {
  name: "ale",
  email: "ale@mail.com",
};
console.log(student_impostor instanceof Student);

//ale.learning_paths = school_one;
//console.log(ale.learning_paths);
console.log(ale);
