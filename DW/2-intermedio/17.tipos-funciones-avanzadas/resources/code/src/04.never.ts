const withoutEnd = () => {
  while (true) {
    console.log("Nunca parar de aprender");
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === "string") {
    return "Es un string";
  } else if (Array.isArray(input)) {
    return "Es un array";
  }

  return fail("Not match");
};

console.log(example("Hola"));
console.log(example([1, 1, 1]));
console.log(example(1));
console.log(example("Despues del fail"));
