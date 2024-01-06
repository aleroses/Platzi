import { is_object, is_array } from "./validation.mjs";
import { object_one, object_two } from "./data.mjs";

function deep_copy(data) {
  // Declarar
  let copy_data;

  const data_is_array = is_array(data);
  const data_is_object = is_object(data);

  if (data_is_array) {
    copy_data = [];
  } else if (data_is_object) {
    copy_data = {};
  } else {
    return data;
  }

  for (let key in data) {
    const key_is_object = is_object(data[key]);

    if (key_is_object) {
      copy_data[key] = deep_copy(data[key]);
    } else {
      if (data_is_array) {
        copy_data.push(data[key]);
      } else {
        copy_data[key] = data[key];
      }
    }
  }

  return copy_data;
}

// No es lo mismo hacer un cambio antes de hacer la copia que..
// object_one.a = "AAA"; 👈👀

// Copias 👈👀👇
const object_three = deep_copy(object_one);
const object_four = deep_copy(object_two);

// Que hacer cambios despues de haber hecho las copias...
object_one.a = "AAA";

console.log("One: ", object_one);
console.log("Two: ", object_two);
console.log("Three: ", object_three);
console.log("Four: ", object_four);
