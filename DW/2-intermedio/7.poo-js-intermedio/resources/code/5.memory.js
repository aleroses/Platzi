const ale = {
  age: 18,
  email: "aleroses@mail.com",
};

const nath = ale;
nath.email = "nath@mail.com";

console.log({ ale, nath });
