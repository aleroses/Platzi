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
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: { twitter, instagram, facebook },
  };

  return publicAtributos;
}
