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

const array_two = [
  "one",
  "two",
  [
    "three",
    "four",
    ["five", "six", "seven", "eight"],
  ],
];

const other_three = "This is a text!!!";

export { object_one, array_two, other_three };
