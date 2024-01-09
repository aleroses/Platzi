function isObject(subject) { return typeof subject == "object"; }
    
    function isArray(subject) { return Array.isArray(subject); }
    
    function SuperObject() {} // 👈👈👈👈
    
    function requiredParam(param) { throw new Error(param + " es obligatorio"); }
    
    function LearningPath({ // PROTOTIPO name = requiredParam("name"), // Campo es obligatorio courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje }) { this.name = name; this.courses = courses; }
    
    function Student({ // PROTOTIPO name = requiredParam("name"), email = requiredParam("email"), age, twitter, instagram, facebook, approvedCourses = [], learningPaths = [], } = {}) {
    

    // ASIGNACIÓN DE ATRIBUTOS
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };
    
    const private = {
    "_learningPaths": [],

    
    };
    

    // "this" referencia al prototipo "Student"
    Object.defineProperty(this, "learningPaths", {
    get() { // GETTER
      return private["_learningPaths"];
    },
    set(newLp) { // SETTER
      if (newLp instanceof LearningPath) {
                // Si es que SÍ es una instancia, añadimos al array privado "_learningPaths"
        private["_learningPaths"].push(newLp);
      } else {
                // "LPs" hace referencia a Learning Paths
        console.warn("Alguno de los LPs que quieres añadir NO es una instancia del prototipo LearningPath");
      }
    },

    
    });
    

    for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];

    
    }
    
    } 