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

