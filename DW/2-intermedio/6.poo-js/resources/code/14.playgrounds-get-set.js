class Course {
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
    set name(new_name){
        if(typeof new_name === 'string'){
            this._name = new_name;
            const x = new_name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            console.log(x);
        }else{
            console.log(`${new_name} isn't a string!`);
        }
    }
}

const course_one = new Course({
    name: 'course one',
});


course_one
course_one.name
course_one.name = 'eccentric course on computer psychology...'
course_one.name = 123