/* Tu reto es crear una función que aplique Object.freeze a todos los objetos anidados de forma recursiva para así realmente lograr bloquear todo el objeto. A esto se le conoce comunmente como deepFreeze. */

const student = {
  name: "Ale Roses",
  approvedCourses: ["Course 1", "Course 2"],
  caracteristicas: {
    age: 22,
    colorCabello: "Black",
    gustos: {
      musica: ["rock", "punk", "metal"],
      peliculas: ["history", "horror", "comedy"],
    },
  },
  addCourse(newCourse) {
    console.log("This", this);
    console.log(
      "This.approvedCourses",
      this.approvedCourses
    );
    this.approvedCourses.push(newCourse);
  },
};

function is_object(subject) {
  return typeof subject === "object";
}

function is_array(subject) {
  return Array.isArray(subject);
}

function deep_freeze(data) {
  let new_data;
}
