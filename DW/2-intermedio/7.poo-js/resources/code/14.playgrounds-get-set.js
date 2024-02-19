/* class Course{
    constructor({
        name,
        classes = []
    }){
        this.name = name;
        this.classes = classes;
    }

    get name(){
        return this._name;
    }
    set name(new_name){
        if(typeof new_name == 'string'){
            const capital_letters = new_name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            this._name = capital_letters;
        }else{
            console.warn(`¡${new_name} isn't a string!`);
        }
    }
}

const course_name = 'Course one'
const course_one = new Course({ name: course_name })

course_one.name
course_one.name = 123;
course_one.name = 'eccentric course on computer psychology...'; */

/* 
'eccentric course on computer psychology...'
1. .split(' ') Separamos la oración en un array de palabras
    ['eccentric', 'course', 'on', 'computer', 'psychology...']
2. .map(word => word) Recorremos el array de palabras 
    ['eccentric', 'course', 'on', 'computer', 'psychology...']
3. .charAt(0) Extraemos el primer caracter de cada palabra
    ['e', 'c', 'o', 'c', 'p']
4. .toUpperCase() Convertimos cada caracter en mayúscula
    ['E', 'C', 'O', 'C', 'P']
5. + .slice(1) Extraemos todas las letras de cada palabra a partir del index 1 en adelante, excepto la letra de la posición 0 y las concatenamos con lo anterior la letra mayuscula obtenida con el método anterior. 
    ['Eccentric', 'Course', 'On', 'Computer', 'Psychology...']
6. .join(' ') Unimos el contenido del array usando como separador un espacio
    'Eccentric Course On Computer Psychology...'
*/

class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }
  set name(new_name) {
    if (typeof new_name === "string") {
      const capital_letters = new_name
        .split(" ")
        .map(
          word =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" ");
      this._name = capital_letters;
    } else {
      console.warn(`${new_name} isn't a string!!`);
    }
  }
}

const course_new = "course one";
const course_one = new Course({ name: course_new });

course_one.name =
  "eccentric course on computer psychology...";
course_one.name;
