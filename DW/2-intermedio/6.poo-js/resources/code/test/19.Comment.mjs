class Comment {
  constructor({
    content,
    name_of_commenter,
    commenter_rol = "student",
  }) {
    this.content = content;
    this.name_of_commenter = name_of_commenter;
    this.commenter_rol = commenter_rol;
    this.likes = 0;
  }

  publish() {
    const comment = {
      name_of_commenter: `${this.name_of_commenter} (${this.commenter_rol})`,
      likes: `${this.likes} likes`,
      content: this.content,
    };

    return comment;
  }
}

export { Comment };
