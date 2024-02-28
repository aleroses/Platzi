const object_one = {
  a: "one",
  b: "two",
  c: {
    d: "three",
    e: "four",
  },

  edit() {
    this.a = "new valor";
  },
};

// Validar si es un objeto
function is_object(subject) {
  return typeof subject === "object";
}

// Validar si es un array
function is_array(subject) {
  return Array.isArray(subject);
}

function deep_copy(subject) {
  // Declarar
  let copy_subject;

  const subject_is_array = is_array(subject);
  const subject_is_object = is_object(subject);

  if (subject_is_array) {
    copy_subject = [];
  } else if (subject_is_object) {
    copy_subject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const key_is_object = is_object(subject[key]);

    if (key_is_object) {
      copy_subject[key] = deep_copy(subject[key]);
    } else {
      if (subject_is_array) {
        copy_subject.push(subject[key]);
      } else {
        copy_subject[key] = subject[key];
      }
    }
  }

  return copy_subject;
}

const object_two = deep_copy(object_one);
console.log(object_two);

/* object_one.a = "AAAA";
object_one.c.e = "EEEE";
console.log({ object_one, object_two });
console.log(object_two.edit()); */
