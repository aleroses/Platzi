/* Tu reto es crear una función que aplique Object.freeze a todos los objetos anidados de forma recursiva para así realmente lograr bloquear todo el objeto. A esto se le conoce comunmente como deepFreeze. */

/* import { student } from "./10.data.mjs";

function deep_freeze(obj) {
  // Primero se congela el objeto principal
  Object.freeze(obj);

  // Se obtienen todas las propiedades del objeto
  const propNames = Object.getOwnPropertyNames(obj);
  console.log("👉", propNames);

  // Se recorren las propiedades
  for (const propName of propNames) {
    const prop = obj[propName];
    console.log("🔥", prop);

    // Si la propiedad es un objeto y no es nulo, se aplica deepFreeze de forma recursiva
    if (typeof prop === "object" && prop !== null) {
      deep_freeze(prop);
    }
  }
  

  return 'xd', obj;
}

const x = deep_freeze(student);

// // No tendrá efecto 👈👀👇
// x.name = "John Doe";
// x.approvedCourses.push("Course 3");
// x.caracteristicas.age = 25;

console.log({ x }); */

import { student } from "./10.data.mjs";

function deep_freeze(subject) {
  Object.freeze(subject);

  const key_names =
    Object.getOwnPropertyNames(subject);

  console.log("👉", key_names);

  for (const key of key_names) {
    const value_name = subject[key];
    console.log("🔥", value_name);

    if (
      typeof value_name === "object" &&
      value_name !== null
    ) {
      deep_freeze(value_name);
    }
  }

  return subject;
}

const x = deep_freeze(student);

// // No tendrá efecto 👈👀👇
// x.name = "John Doe";
// x.approvedCourses.push("Course 3");
// x.caracteristicas.age = 25;

console.log(x);



/* function deepFreeze(obj) {
  if (typeof obj !== "object") return;

  Object.freeze(obj);

  for (let key in obj) {
    deepFreeze(obj[key]);
  }

  return obj;
}

const x = deepFreeze(student);
console.log(x); */
