function error_detector(param) {
  throw new Error(param + " is mandatory!!!");
}

function create_student({
  name = error_detector("Name"),
  email = error_detector("Email"),
  age,
  twitter,
  instagram,
  facebook,
  approved_courses = [],
  learning_paths = [],
} = {}) {
  const new_private = {
    _name: name,
  };

  const new_public = {
    age,
    email,
    social_media: { twitter, instagram, facebook },
    approved_courses,
    learning_paths,

		read_name() {
			
		}
  };
}
