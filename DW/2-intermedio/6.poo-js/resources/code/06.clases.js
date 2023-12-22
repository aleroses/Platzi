// Prototipos con la sintaxis de clases  
class Student_two{
    constructor(name, age, approved_courses){
        this.name = name;
        this.age = age;
        this.approved_courses = approved_courses;
    }

    approved_course(new_course){
        this.approved_courses.push(new_course);
    }
}

const george = new Student_two(
    'George Reece',
    28,
    [
        "Course 01",
        "Course 02",
    ],
);

// En la consola  
Student_two
george
george.approved_course('Course 03');
george.approved_courses


// Prototipos con la sintaxis de clases con { }
class Student_three{
    constructor({
        name,
        age,
        approved_courses = [],
        email,
        social_media,
    }){
        this.name = name;
        this.age = age;
        this.approved_courses = approved_courses;
    }

    approved_course(new_course){
        this.approved_courses.push(new_course);
    }
}

const alexander = new Student_three({
    name: 'Alexander',
    age: 28,
    /* approved_courses: [
        'Course 01',
        'Course 02'
    ] */
});

// Usando { } el orden de los argumentos ingresados no importa, incluso pueden estar vacios

// En la consola 
alexander



/* 
Mover una línea hacia arriba y abajo
alt + flecha hacia arriba (o flecha hacia abajo)

Copiar una línea hacia arriba o abajo
alt + shift + flecha hacia arriba (o flecha hacia abajo)

Borrar una línea completa a la vez
shift + supr */
