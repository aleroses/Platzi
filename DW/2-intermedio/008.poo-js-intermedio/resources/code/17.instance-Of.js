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

  if (is_array(learning_paths)) {
    this.learning_paths = [];

    for (let learning_path_index in learning_paths) {
      if (
        learning_paths[
          learning_path_index
        ] instanceof LearningPath
      ) {
        this.learning_paths.push(
          learning_paths[learning_path_index]
        );
      }
    }
  }

  /* const new_private = {
    _name: name,
    _learning_paths: learning_paths,
  };

  const new_public = {
    age,
    email,
    social_media: { twitter, instagram, facebook },
    approved_courses,

    get name() {
      return new_private._name;
    },

    set name(new_name) {
      if (new_name.length != 0) {
        new_private._name = new_name;
      } else {
        console.log("Add a name!!!");
      }
    },

    get learning_paths() {
      return new_private._learning_paths;
    },

    set learning_paths(new_lpath) {
      if (!new_lpath.name) {
        console.log(
          "Your learning path does not have the property name"
        );

        return;
      }

      if (!new_lpath.courses) {
        console.log(
          "Your learning path has no courses"
        );

        return;
      }

      if (!is_array(new_lpath.courses)) {
        console.log(
          "Your learning path is not a list (courses)"
        );

        return;
      }

      new_private._learning_paths.push(new_lpath);
    },
  };

  return new_public; */
}

// seguimos
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

ale instanceof Student;
// true

const student_impostor = {
  name: "ale",
  email: "ale@mail.com",
};

student_impostor instanceof Student;
// false

ale.learning_paths = school_one;
ale.learning_paths;

console.log({ ale });
