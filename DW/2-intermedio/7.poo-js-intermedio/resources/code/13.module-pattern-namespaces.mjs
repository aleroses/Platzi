function errorDetector(param) {
  throw new Error(param + " es obligatorio");
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
      return new_private["_name"];
    },

    change_name(new_name) {
      new_private["_name"] = new_name;
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

ale.change_name("Ale roses xd");
ale.read_name();
ale._name = "XDXDXD";
ale.read_name();

ale.change_name("New name xdxdxd");

/* ale.read_name = function () {
  return "Potatoes!!";
}; */

ale.change_name("New name lolcat");

console.log(ale);
