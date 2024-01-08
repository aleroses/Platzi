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

    // 👀👇 ale.name
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

const ale = create_student({
  name: "Ale Roses",
  age: 18,
  twitter: "alerxses",
});

console.log(ale);

/* ale.name;
ale.name = "XD";

Object.getOwnPropertyDescriptors(ale);
//fijate en name

// No hay value ni writable porque ahora tenemos un get y un set

// pero si editamos esto con 
Object.defineProperty(ale, "name", {
  value: "x",
});

// vemos que ahora tiene un nuevo name pero writable es false
Object.getOwnPropertyDescriptors(ale);
// desaparece get set

console.log(ale); */
/* 
Separar los atributos que queremos que sean privados (name) y público
*/
