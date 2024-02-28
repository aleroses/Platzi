/* let anyVar: any;

anyVar = true;
anyVar = undefined;

let isNew: boolean = anyVar;

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;

//unknowVar.doSomething();
if (typeof unknowVar === "string") {
  unknowVar.toUpperCase();
}

if (typeof unknowVar === "boolean") {
  const isNewV2: boolean = unknowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}; */

let x: unknown;
x = "text";
/* x = true;
x = 2; */

if (typeof x === "string") {
  console.log(
    x.charAt(0).toUpperCase() + x.slice(1)
  );
}
