/* import {
  is_object,
  is_array,
} from "./validation.mjs";
import { object_one, array_two } from "./data.mjs";

function deep_copy(data) {
  // Declarar
  let data_copy;

  const data_is_array = is_array(data);
  const data_is_object = is_object(data);

  if (data_is_array) {
    data_copy = [];
  } else if (data_is_object) {
    data_copy = {};
  } else {
    return data;
  }

  for (let key in data) {
    const key_is_object = is_object(data[key]);

    if (key_is_object) {
      data_copy[key] = deep_copy(data[key]);
    } else {
      if (data_is_array) {
        data_copy.push(data[key]);
      } else {
        data_copy[key] = data[key];
      }
    }
  }

  return data_copy;
}

// No es lo mismo hacer un cambio antes de hacer la copia que..
// object_one.a = "AAA"; 👈👀

// Copias 👈👀👇
const other_three = deep_copy(object_one);
const object_four = deep_copy(array_two);

// Que hacer cambios despues de haber hecho las copias...
object_one.a = "AAA";

console.log("One: ", object_one);
console.log("Two: ", array_two);
console.log("Three: ", other_three);
console.log("Four: ", object_four);
 */

import { is_object, is_array } from "./validation.mjs";
import { object_one, array_two, other_three } from "./data.mjs";

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

const object_four = deep_copy(object_one);
const array_five = deep_copy(array_two);
const other_six = deep_copy(other_three);

object_four.edit();
console.log("👉", object_four, "👉", array_five, "👉", other_six );
