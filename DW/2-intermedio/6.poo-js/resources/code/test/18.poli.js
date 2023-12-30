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
  }
}
