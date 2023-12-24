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
    user_name,
    twitter,
    instagram,
    facebook,
    approved_courses = [],
    learning_paths = [],
  }) {
    this.name = name;
    this.email = email;
    this.user_name = user_name;
    this.social_media = {
      twitter,
      instagram,
      facebook,
    };
    this.approved_courses = approved_courses;
    this.learning_paths = learning_paths;
  }

  approved_courses(new_course) {
    this.approved_courses.push(new_course);
  }
}

const school_01 = new School({
  path: "Web development",
  courses: [
    "Course 01",
    "Course 02",
    "Course 03",
    "Course 04",
  ],
});

// console.log(school_01);

const simone = new Pupil({
  name: "Simone Simons",
  email: "simons@mail.com",
  username: "simone_simons",
  twitter: "s_simons",
  learning_paths: [school_01],
});

console.log(simone);
