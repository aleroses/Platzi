function error_detector(param) {
  throw new Error(param + " is mandatory!!!");
}

function create_student({
  name = error_detector("Name"),
  age,
  twitter,
} = {}) {
  const new_private = {
    _name: name,
  };

  const new_public = {
    age,
    social_media: { twitter },

    read_name() {
      console.log("xd", new_private._name);
      return new_private._name;
    },

    change_name(new_name) {
      new_private["_name"] = new_name;
    },
  };

  Object.defineProperty(new_public, "change_name", {
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
  twitter: "alerxses",
});

// ale.change_name("PATATAS BRAVAS!!!");
// ale._name = "x"
ale.read_name();

console.log(ale);

ale.change_name("locat");
console.log(ale);
/* 
Separar los atributos que queremos que sean privados (name) y público
*/
