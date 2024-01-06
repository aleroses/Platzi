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

export { student };


