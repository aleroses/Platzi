// Class Student y Class Comment código base
// TeacherStudent es hijo de Student
// Propiedad skills en TeacherStudent
// Sobrescribir método publicarComentario dentro de TeacherStudent
// Debe agregar el array de skills en la propiedad studentRole de la clase Comment.
// El string debe verse de la siguiente manera "profesor de skill1, skill2".

import { Comment } from "./19.Comment.mjs";
import { Student } from "./19.Student.mjs";

class Teacher extends Student {
  // Tu código aquí 👈
  constructor(props, skills = []) {
    super(props);
    this.skills = skills;
  }

  post_comment(comment_content) {
    const comment = new Comment({
      content: comment_content,
      name_of_commenter: this.name,
      commenter_rol: this.skills,
    });

    return comment.publish();
  }
}

const teacher_one = new Teacher(
  {
    name: "Ale Roses",
    twitter: "alerxses",
  },
  ["JavaScript teacher", "TyScript teacher"]
);

console.log(teacher_one);
console.log(
  teacher_one.post_comment(`I'm your new teacher`)
);
