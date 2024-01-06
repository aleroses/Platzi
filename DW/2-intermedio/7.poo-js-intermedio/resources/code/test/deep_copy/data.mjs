const object_one = {
  a: "one",
  b: "two",
  c: {
    d: "three",
    e: "four",
  },

  edit() {
    this.a = "New valor A!!!";
  },
};

const object_two = [
  "one",
  "two",
  [
    "three",
    "four",
    ["five", "six", "seven", "eight"],
  ],
];

export { object_one, object_two };
