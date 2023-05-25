// Objeto literal
const natalia = {
    name: "Natalia",
    age: 20,
    approved_courses: [
        "Course 01",
        "Course 02",
    ],

    // Metodo función
    approved_course(new_course){ //approved_course: function()
        this.approved_courses.push(new_course);
    },
};

// Modificar objeto literal 
natalia.name = "Mariana";
natalia.age += 1;

// Hacer que Natalia apruebe otro curso
// Metodo 01: Ver en consola
natalia.approved_courses.push("Course 03");
natalia

// Metodo 02: Ver en consola 
natalia.approved_course
natalia.approved_course('Course 04');
natalia


/* --------------------------------------------- */


// Prototipo
function Student(name, age, approved_courses){
    this.name = name;
    this.age = age;
    this.approved_courses = approved_courses;
    // No es buena practica
    // this.approved_course = function(new_course){
    //     this.approved_courses.push(new_course);
    // }
}

// Crear método 
Student.prototype.approved_course = function(new_course){
    this.approved_courses.push(new_course);
}

const michael = new Student(
    "Michael Connor",
    15,
    [
        'Course 01',
        'Course 02',
    ],
);

// En la consola 
michael
// Si revisamos __proto__ [[Prototype]] vemos el método que creamos (approved_course)
michael.approved_course('Course 03')



// Otras pruebas

/* function Dog(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.bark = function(){
        return 'Woof!'
    };
};

const dog1 = new Dog(
    "Daisy",
    "Labrador",
    "Black",
);

const dog2 = new Dog(
    "Jack",
    "Jack Russell",
    "White",
);






class Dog {
    constructor(name){
        this.name = name
    }

    bark(){
        return 'Woof!'
    }
}

class Chihuahua extends Dog {
    constructor(name){
        super(name)
    }

    smallBark(){
        return 'Small woof!'
    }
}

const myPet = new Chihuahua('Max');




const person = {
    name: 'Lydia',
    age: 21
}

const me = Object.create(person); */