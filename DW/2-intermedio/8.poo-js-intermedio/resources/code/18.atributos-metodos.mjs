import { is_array } from "./11.validation.mjs";

function error_detector(param) {
  throw new Error(param + " is mandatory");
}

function LearningPath({
  name = error_detector("name"),
  courses = [],
} = {}) {
  this.name = name;
  this.courses = courses;

  /* const new_private = {
    _name: name,
    _courses: courses,
  };

  const new_public = {
    get name() {
      return new_private._name;
    },

    // 👀👇 ale.name = 'zombie'
    set name(new_name) {
      if (new_name.length != 0) {
        new_private._name = new_name;
      } else {
        console.log("Add a name!!!");
      }
    },

    get courses() {
      return new_private._courses;
    },
  };

  return new_public; */
}

function Student({
  name = error_detector("name"),
  email = error_detector("email"),
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

  this.approved_courses = approved_courses;

  this.social_media = {
    twitter,
    instagram,
    facebook,
  };

  const new_private = {
    _learning_paths: [],
  };

  Object.defineProperty(this, "learning_paths", {
    get() {
      return new_private._learning_paths;
    },

    set(new_lp) {
      if (new_lp instanceof LearningPath) {
        new_private._learning_paths.push(new_lp);
      } else {
        console.log(
          "One of the LPs is not an instance of the Learning path prototype."
        );
      }
    },
  });

  /* if (is_array(learning_paths)) {
    this._learning_paths = []; */

  for (let learning_path_index in learning_paths) {
    this.learning_paths =
      learning_paths[learning_path_index];
  }
  /* } */
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

ale;
ale.learning_paths;
ale.learning_paths = { name: "untrue" };

console.log({ ale });
