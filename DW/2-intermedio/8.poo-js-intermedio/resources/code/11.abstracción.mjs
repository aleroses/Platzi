import {
  is_object,
  is_array,
} from "./11.validation.mjs";

function deep_copy(data) {
  let data_copy; //👈👀 Declarar

  const data_is_object = is_object(data)
    ? (data_copy = {})
    : false;
  const data_is_array = is_array(data)
    ? (data_copy = [])
    : false;

  for (const key in data) {
    if (data_is_object) {
      const key_is_object = is_object(data[key]);

      key_is_object
        ? (data_copy[key] = deep_copy(data[key]))
        : (data_copy[key] = data[key]);
    } else if (data_is_array) {
      data_copy.push(data[key]);
    } else {
      return data;
    }
  }

  return data_copy;
}

const student_base = {
  name: undefined,
  email: undefined,
  age: undefined,
  approved_courses: undefined,
  learning_paths: undefined,
  social_media: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const ale = deep_copy(student_base);
Object.defineProperty(ale, "name", {
  value: "Ale Roses",
  configurable: false,
});

// Podremos editar pero no "eliminar"
ale.name = "Other name X";

// delete ale.name
// ale.name

// Recuerda que para evitarnos configurar uno por uno nuestros objetos podemos usar Object.seal(objeto) esto evitará que podamos eliminar sus propiedades
Object.seal(ale);

// Muestra si configurable está como true o false
Object.isSealed(ale);

// Muestra si configurable y writable están como true o false
Object.isFrozen(ale)

console.log(ale);
