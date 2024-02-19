import { Comment } from "./19.Comment.mjs";

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
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

  post_comment(comment_content) {
    const comment = new Comment({
      content: comment_content,
      name_of_commenter: this.name,
    });

    return comment.publish();
  }
}
export { Student };


