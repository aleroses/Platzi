class Comment {
  constructor({
    content,
    pupil_name,
    pupil_role = "pupils",
  }) {
    this.content = content;
    this.pupil_name = pupil_name;
    this.pupil_role = pupil_role;
    this.like = 0;
  }

  publish() {
    console.log(
      `${this.pupil_name} + (${this.pupil_role})`
    );
    console.log(`${this.like} likes`);
    console.log(this.content);
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

  post_comment(comment_content) {
    const comment = new Comment({
      content: comment_content,
      pupil_name: this.name,
    });

    comment.publish();
  }
}

class Free_pupil extends Pupil {
  constructor(props) {
    super(props);
  }
}

class Teacher extends Pupil {
  constructor(props) {
    super(props);
  }

  approved_course(new_course) {
    this.approved_course.push(new_course);
  }

  post_comment(comment_content) {
    const comment = new Comment({
      content: comment_content,
      pupil_name: this.name,
      pupil_role: "teacher",
    });

    comment.publish();
  }
}

const simone = new Free_pupil({
  name: "Simone Simons",
  email: "simons@mail.com",
  username: "simone_simons",
  twitter: "s_simons",
  learning_paths: ["school_01", "school_02"],
});

const angela = new Teacher({
  name: "Angela Gossow",
  username: "angela_gossow",
  email: "gossow@mail.com",
  instagram: "angelagossow",
});

simone.approved_course("Course one");
angela.post_comment("This is a comment!!!");
console.log(simone, angela);
