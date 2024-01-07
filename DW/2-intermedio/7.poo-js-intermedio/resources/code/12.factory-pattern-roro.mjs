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

/* const student_base = {
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
}; */

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
  return {
    name,
    age,
    email,
    social_media: { twitter, instagram, facebook },
    approved_courses,
    learning_paths,
  };
}

const ale = create_student({
  name: "Ale Roses",
  age: 18,
  email: "aleroses@mail.com",
  twitter: "aleroses",
});

console.log(ale);
