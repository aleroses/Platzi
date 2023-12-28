// Nombres de tipo string
// Primera letra de cada palabra en Mayúscula
// Solo acepta strings

export class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {}

  set name(new_name) {}
}
