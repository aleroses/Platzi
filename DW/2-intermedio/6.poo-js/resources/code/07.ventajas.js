// Prototipo para Schools
// Crear una clase para escuelas (Learnin_path()) y una instancia para cada escuela (escuela_dw)

class School{
    constructor({
        path,
        courses = [],
    }){
        this.path = path;
        this.courses = courses;
    };

    launch_of_new_course(new_release){
        this.courses.push(new_release);
    }
};

// Prototipo para los Students 
class Student_four{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approved_courses = [],
        learning_paths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.social_media = {
            // twitter: twitter
            twitter,
            instagram,
            facebook,
        };
        this.approved_courses = approved_courses;
        this.learning_paths = learning_paths;
    }

    approved_course(new_course){
        this.approved_courses.push(new_course)
    }
}


const school_01 = new School({
    path: 'Web development',
    courses: [
        'Course 01',
        'Course 02',
        'Course 03',
        'Course 04',
        'Course 05',
    ]
});

const school_02 = new School({
    path: 'Video games development',
    courses: [
        'Course 01',
        'Course 02',
        'Course 03',
        'Course 04',
        'Course 05',
    ]
});

const school_03 = new School({
    path: 'Artificial intelligence',
    courses: [
        'Course 01',
        'Course 02',
        'Course 03',
        'Course 04',
        'Course 05',
    ]
});

school_01.launch_of_new_course('Course 06');
school_01.launch_of_new_course('Course 07');

school_03.launch_of_new_course('Course 06');
school_03.launch_of_new_course('Course 07');
school_03.launch_of_new_course('Course 08');


const simone = new Student_four({
    name: 'Simone Simons',
    username: 'si_mones',
    twitter: 'si_mone_s',
    learning_paths: [
        school_01,
        school_02
    ],
});

const alissa = new Student_four({
    name: 'Alissa White-Gluz',
    username: 'alissa_wg',
    email: 'alissa_wg@mail.com',
    instagram: 'alissa_wg',
    learning_paths: [
        school_01,
        school_03,
    ],
});

simone.approved_course('Course 01');
simone.approved_course('Course 03');

alissa.approved_course('Course 02');
alissa.approved_course('Course 05');










// Esto no es escalable 
/* const juan_one = {
    name: 'Juan Despues de Cristo',
    username: 'JuanDC',
    points: 100,
    social_media: {
        twitter: 'juan_dc',
        instagram: 'juan_dc',
        facebook: undefined,
    },
    approved_courses: [
        'Courso 01',
        'Course 02',
    ],
    learning_pat: [
        {
            name: 'School 01',
            courses: [
                'Course 01',
                'Course 02',
                'Course 03',
            ],
        },
        {
            name: 'School 02',

        },
    ]
}; */