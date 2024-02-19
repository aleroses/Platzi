function data() {
  let pet = [];

  function add(new_pet) {
    new_pet ? pet.push(new_pet) : console.log(pet);
  }

  return add;
}

const my_pet = data();
my_pet("cat");
my_pet({ pet: "dog" });
my_pet(["fish", "pig"]);
my_pet();
