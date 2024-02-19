// Prototipo para Schools
// 1. Crear una clase para escuelas (Learnin_path())
// 2. Crear una instancia para cada escuela (escuela_dw) Pupil
// 3. Revisar que no se repitan coursos dentro de las escuelas

class Classes {
  constructor({ topic }) {
    this.topic = topic;
  }
}

class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

class School {
  constructor({ path, courses = [] }) {
    this.path = path;
    this.courses = courses;
  }

  launch_of_new_course(new_release) {
    this.courses.push(new_release);
  }
}

class Pupil {
  constructor({
    name,
    email,
    username,
    twitter,
    instagram,
    facebook,
    approved_courses = [],
    learning_paths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.social_media = {
      twitter,
      instagram,
      facebook,
    };
    this.approved_courses = approved_courses;
    this.learning_paths = learning_paths;
  }

  approved_course(new_course) {
    this.approved_courses.push(new_course);
  }
}

const class_one = new Classes({
  topic: "Class One",
});
const class_two = new Classes({
  topic: "Class Two",
});
const class_three = new Classes({
  topic: "Class Three",
});
const class_four = new Classes({
  topic: "Class Four",
});
const class_five = new Classes({
  topic: "Class Five",
});
const class_six = new Classes({
  topic: "Class Six",
});

const course_one = new Course({
  name: "Course 01",
});
