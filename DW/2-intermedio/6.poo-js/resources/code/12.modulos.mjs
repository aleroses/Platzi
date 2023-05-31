function play_video(id){
    const secret_url = "https://platzisecret.com/" + id;
    console.log('Playing from url ' + secret_url);
}
function pause_video(id){
    const secret_url = "https://platzisecret.com/" + id;
    console.log('Paused from url ' + secret_url);
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    play(){
        play_video(this.videoID);
    }
    pause(){
        pause_video(this.videoID);
    }
}




/* class Classes{
    constructor({topic}){
        this.topic = topic;
    }
}

class Course{
    constructor({
        name,
        classes = [],
    }){
        this._name = name;
        this.classes = classes;
    }

    get name(){
        return this._name;
    }

    // change_name(new_name){
    //     this._name = new_name;
    // }

    set name(new_name){
        if(new_name === 'Bad Coding Course'){
            console.error('Hey! Te wa madrear...');
        }else {
            this._name = new_name;
        }
    }
}

class School{
    constructor({ path, courses = []}){
        this.path = path;
        this.courses = courses;
    }

    launch_of_new_course(new_release){
        this.courses.push(new_release);
    }
}

class Pupil{
    constructor({
        name,
        email,
        username,
        twitter,
        instagram,
        facebook,
        approved_courses = [],
        learning_paths = [],
    }){
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

    approved_course(new_course){
        this.approved_courses.push(new_course);
    }
}

const class_one = new Classes({topic: 'Class One'});
const class_two = new Classes({topic: 'Class Two'});
const class_three = new Classes({topic: 'Class Three'});
const class_four= new Classes({topic: 'Class Four'});
const class_five = new Classes({topic: 'Class Five'});
const class_six = new Classes({topic: 'Class Six'});

const course_one = new Course({
    name: 'Course 01',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
});

const course_two = new Course({
    name: 'Course 02',
    classes: [
        class_one,
        class_three,
        class_four,
    ]
});

const course_three = new Course({
    name: 'Course 03',
    classes: [
        class_one,
        class_two,
        class_three,
        class_four,
        class_five,
    ]
});

// Haciendo uso de get and set en Course (pruebas en consola)
course_one
course_one.name
// course_one.name = "Another way to change the name"
// course_one.change_name('A new course name')
course_one.name = 'This is the new course name';
course_one.name = 'Bad Coding Course' //mensaje error


const school_01 = new School({
    path: 'Web development',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const school_02 = new School({
    path: 'Video games development',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const school_03 = new School({
    path: 'Artificial intelligence',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const simone = new Pupil({
    name: 'Simone Simons',
    email: 'simons@mail.com',
    username: 'simone_simons',
    twitter: 's_simons',
    learning_paths: [
        school_01,
        school_02,
    ],
});

const alissa = new Pupil({
    name: 'Alissa White_Gluz',
    username: 'alissa_wg',
    email:'alisa_wg@mail.com',
    instagram: 'alisa_wg',
    learning_paths: [
        school_01,
        school_03,
    ]
});

school_01.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_01.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_01.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

school_02.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_02.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_02.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

school_03.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_03.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_03.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

simone.approved_course(course_one);
simone.approved_course(course_three);

alissa.approved_course(course_one);
alissa.approved_course(course_two); */