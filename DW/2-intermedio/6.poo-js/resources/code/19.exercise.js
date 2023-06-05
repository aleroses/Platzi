import { Comment } from "./19.Comments.js";
import { Student } from "./19.Student.js";

export class TeacherStudent extends Student {
    constructor(props, skills = []) {
        super(props);
        this.skills = skills;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: `profesor de ${this.skills.join()}`
        });
        return comment.publicar();
    }
}