class Classes{
	constructor({topic}){
		this.topic = topic;
	}
}

class Course{
	constructor({
		name,
		classes = [],
	}){
		this.name = name;
		this.classes = classes;
	}

	get name(){
		return this._name;
	}
	set name(new_name){
		if(new_name === 'Bad Coding Course'){
			console.error('Hey! Te wa madrear...');
		}else{
			this.__name = new_name;
		}
	}
}

class School{
	constructor({
		path,
		courses = []
	}){
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
		twitter = null,
		instagram = null,
		facebook = null,
		approved_courses = [],
		learning_paths = [],
	}){
		this.name = name;
		this.email = email;
		this.username = username;
		this.social_media = [
			twitter,
			instagram,
			facebook,
		];
		this.approved_courses = approved_courses;
		this.learning_paths = learning_paths;
	}

	approved_course(new_course){
		this.approved_courses.push(new_course);
	}
}

const class_one = new Classes({
	topic: 'Topic One'
});
const class_two = new Classes({
	topic: 'Topic Two'
});
const class_three = new Classes({
	topic: 'Topic Three'
})

const course_one = new Course({
	name: 'Course One',
	classes: [
		class_one,
		class_two,
		class_three,
	]
});
const course_two = new Course({
	name: 'Course Two',
	classes: [
		class_one,
		class_two,
		class_three,
	]
});
const course_three = new Course({
	name: 'Course Three',
	classes: [
		class_one,
		class_two,
		class_three,
	]
});

const school_one = new School({
	path: 'School One',
	courses: [
		course_one,
		course_two,
		course_three,
	]
});
const school_two = new School({
	path: 'School Two',
	courses: [
		course_one,
		course_two,
		course_three,
	]
});
const school_three = new School({
	path: 'School Two',
	courses: [
		course_one,
		course_two,
		course_three,
	]
});

const simone = new Pupil({
	name: 'Simone Simons',
	email: 'simone@mail.com',
	username: 'simo_ns',
	twitter: 'simon',
	facebook: 'Simone Simons',
	learning_paths: [
		school_one, 
		school_two,
		school_three
	]
});
const alissa = new Pupil({
	name: 'Alissa White-Gluz',
	email: 'alissa@mail.com',
	username: 'alissa_wg',
	facebook: 'Alissa White-Gluz',
	learning_paths: [
		school_one,
		school_three,
	]
});

// Agregar mas courses con push a una escuela existente
school_one.launch_of_new_course(new Course({
	name: 'Course 04',
	classes: [
		class_one,
		class_two,
		class_three
	]
}));
school_two.launch_of_new_course(new Course({
	name: 'Course 05',
	classes: [
		class_one,
		class_two,
		class_three
	]
}));
school_three.launch_of_new_course(new Course({
	name: 'Course 06',
	classes: [
		class_one,
		class_two,
		class_three
	]
}));

// Agregar courses aprobados con push 
simone.approved_course(course_one);
simone.approved_course(course_two);
simone.approved_course(course_three)

alissa.approved_course(course_one);
alissa.approved_course(course_two);
alissa.approved_course(course_three);

course_one.name = 'Bad Coding Course';
// De esta manera lo toma como correcto: 
course_one._name = 'Bad coding Course';
console.log('Se cambió el nombre: ', course_one._name);
