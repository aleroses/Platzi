function errorDetector(param) {
  throw new Error(param + " es obligatorio");
}

function create_learning_path({
  name = errorDetector("name"),
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
	};

  return new_public;
}

function create_student({
  name = errorDetector("name"),
  email = errorDetector("email"),
  age,
  twitter,
  instagram,
  facebook,
  approved_courses = [],
  learning_paths = [],
} = {}) {
  const new_private = {
    _name: name,
  };

  const new_public = {
    age,
    email,
    social_media: { twitter, instagram, facebook },
    approved_courses,
    learning_paths,

    read_name() {
      return new_private._name;
    },

    change_name(new_name) {
      new_private._name = new_name;
    },
  };

  Object.defineProperty(new_public, "read_name", {
    configurable: false,
    writable: false,
  });

  Object.defineProperty(new_public, "change_name", {
    configurable: false,
    writable: false,
  });

  return new_public;
}

const ale = create_student({
  name: "Ale Roses",
  age: 18,
  email: "aleroses@mail.com",
  twitter: "aleroses",
});

console.log({ ale });
