// Nombres de tipo string
// Primera letra de cada palabra en Mayúscula
// Solo acepta strings

class Course {
  constructor({ name, classes = [] }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(new_name) {
    if (typeof new_name === "string") {
      const format = new_name
        .trim()
        .split(" ")
        .map(word => {
          return (
            word.charAt(0).toUpperCase() +
            word.slice(1)
          );
        });

      this._name = format.join(" ");
    } else {
      console.log("This isn't a string.");
    }
  }
}

export { Course };

// Nombres de tipo string
// Primera letra de cada palabra en Mayúscula
// Solo acepta strings

/* class Course {
  constructor({ name, classes = [] }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(new_name) {
    if (typeof new_name === "string") {
      const format = new_name
        .trim()
        .split(" ")
        .map(word => {
          return (
            word.charAt(0).toUpperCase() +
            word.slice(1)
          );
        });

      this._name = format.join(" ");
    } else {
      console.log(
        `This isn't a string!!! ${new_name}`
      );
    }
  }
}

export { Course }; */
