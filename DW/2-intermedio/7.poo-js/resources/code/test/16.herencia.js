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

class Free_pupil extends Pupil {
  constructor(props) {
    super(props);
  }
}

const simone = new Free_pupil({
  name: "Simone Simons",
  email: "simons@mail.com",
  username: "simone_simons",
  twitter: "s_simons",
  learning_paths: ["school_01", "school_02"],
});

simone.approved_course("Course one");
console.log(simone);
