// import { is_array } from "./11.validation.mjs";

/* class SuperObject {
  static isObject(subject) {
    return typeof subject === "object";
  }

  static isArray(subject) {
    return Array.isArray(subject);
  }

  static deepCopy(subject) {
    // Declarar
    let copy_subject;

    const subject_is_array = is_array(subject);
    const subject_is_object = is_object(subject);

    if (subject_is_array) {
      copy_subject = [];
    } else if (subject_is_object) {
      copy_subject = {};
    } else {
      return subject;
    }

    for (key in subject) {
      const key_is_object = is_object(subject[key]);

      if (key_is_object) {
        copy_subject[key] = deep_copy(subject[key]);
      } else {
        if (subject_is_array) {
          copy_subject.push(subject[key]);
        } else {
          copy_subject[key] = subject[key];
        }
      }
    }

    return copy_subject;
  }
} */

function SuperObject() {
}

SuperObject.deepCopy = function() {}


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
