function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

// Creamos una función con el objetivo de generar un Error el cual
// tendrá un mensaje customizado por nosotros.
// Como parámetro indicamos el nombre del atributo que no se está enviando (String)
function requiredParam(param) {
  // 👈👈

  throw new Error(param + " es obligatorio");
  // Este es el mensaje de error generado
}

function createStudent({
  // Por defecto, invocamos a la nueva función requiredParam en aquellos
  // atributos que deseamos que sean obligatorios. Indicamos como argumento el nombre
  // de dicho atributo.
  name = requiredParam("name"),
  // 👈👈
  email = requiredParam("email"), // 👈👈
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  return {
    name,
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: { twitter, instagram, facebook },
  };
}
