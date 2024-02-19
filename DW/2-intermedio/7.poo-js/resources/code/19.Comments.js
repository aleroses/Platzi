export class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        const comentario = {
            studentName: this.studentName + " (" + this.studentRole + ")",
            likes: this.likes + " likes",
            content: this.content
        }
        return comentario
    }
}