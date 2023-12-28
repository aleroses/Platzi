// Nombres de tipo string
// Primera letra de cada palabra en Mayúscula
// Solo acepta strings

class Course {
  constructor({ name, classes = [] }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this.name;
  }

  set name(new_name) {
    if (typeof new_name === "string") {
      this._name = new_name.split(" ");
      console.log(this._name);
    }
  }
}

export { Course };
