/* function errorDetector(param) {
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
}); */

/* ale.change_name("Ale roses xd");
ale.read_name();

// el ._name no deberia cambiar el nombre
ale._name = "XDXDXD";
ale.read_name();

ale.change_name("New name xdxdxd"); */

/* ale.read_name = function () {
  return "Potatoes!!";
}; */

/* ale.change_name("New name lolcat");

console.log({ ale }); */

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const privateAtributos = { _name: name };

  const publicAtributos = {
    // El resto de atributos serán públicos:
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: { twitter, instagram, facebook },

    readName() {
      return privateAtributos["_name"];
    },

    changeName(newName) {
      privateAtributos["_name"] = newName;
    },
  };

  Object.defineProperty(
    publicAtributos,
    "readName",
    {
      // 👈👈
      writable: false,
      configurable: false,
    }
  );

  Object.defineProperty(
    publicAtributos,
    "changeName",
    {
      // 👈👈
      writable: false,
      configurable: false,
    }
  );

  return publicAtributos;
}

// Creamos un nuevo objeto
const juan = createStudent({
  email: "juanito@frijoles.co",
  name: "Juanito",
});

// Intentamos eliminar y alterar los métodos changeName y readName
/* delete juan.changeName;
// false
delete juan.readName;
// false
juan.changeName = function (nombreImpostor) {
  // NO se ve afectada la función original return "patatas";
}; */

juan._name = "Name one";
juan.name = "Name two";
juan._name = "Name three";

console.log(juan);
console.log(juan.readName());

juan.changeName("FirstName...");
console.log(juan);

console.log(juan.readName());
