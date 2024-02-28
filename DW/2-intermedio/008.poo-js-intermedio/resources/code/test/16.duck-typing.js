function is_object(subject) {
  return typeof subject === "object";
}

function is_array(subject) {
  return Array.isArray(subject);
}

function error_detector(param) {
  throw new Error(param + " is mandatory");
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

    set name(new_name) {
      if (new_name.length != 0) {
        new_private._name = new_name;
      } else {
        console.log("Add a name!!");
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
    email,
    age,
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