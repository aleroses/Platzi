import { is_array } from "./11.validation.mjs";

function error_detector(param) {
  throw new Error(param + " es obligatorio");
}

function create_learning_path({
  name = error_detector("name"),
  courses = [],
} = {}) {
  const new_private = {
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

  return new_public;
}

function create_student({
  name = error_detector("name"),
  email = error_detector("email"),
  age,
  twitter,
  instagram,
  facebook,
  approved_courses = [],
  learning_paths = [],
} = {}) {
  const new_private = {
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

  return new_public;
}

const ale = create_student({
  name: "Ale Roses",
  age: 18,
  email: "aleroses@mail.com",
  twitter: "aleroses",
});

//ale.learning_paths = "New learning path";

ale;
// vemos get y sett para learning paths

ale.learning_paths;
// []

ale.learning_paths = "New school...";
// Menssage: Your learning path does not have the property name

ale.learning_paths = {
  name: "New school - Test 02",
};
// Message: Your learning path has no courses

ale.learning_paths = {
  name: "New school - Test 03",
  courses: "Course one",
};
// Message: Your learning path is not a list (courses)

ale.learning_paths = {
  name: "New school - Test 03",
  courses: ["Course two"],
};

// Ahora sí
ale.learning_paths;
// [{name: "escuelas.."}]

// Prueba que también funciona
const school_insane = create_learning_path({
  name: "insane insane",
  courses: [],
});

ale.learning_paths = school_insane;

// Vemos que si añadio
ale.learning_paths;

console.log({ ale });
