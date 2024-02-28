// Nico => [N, i, c, o]
// [N, i, c, o] => Nico

function parseStr(input: string): string[];
function parseStr(input: string[]): string;
function parseStr(input: number): boolean;

/* function parseStr(
  input: string | string[]
): string | string[] {
  if (Array.isArray(input)) {
    return input.join("");
  } else {
    return input.split("");
  }
} */

function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join("");
  } else if (typeof input === "string") {
    return input.split("");
  } else if (typeof input === "number") {
    return true;
  }
}

const rtaArray = parseStr("Ale");
rtaArray.reverse();
/* if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
  console.log(rtaArray);
} */

const rtaStr = parseStr(["A", "l", "e"]);
rtaStr.toUpperCase();

/* if (typeof rtaStr === "string") {
  rtaStr.toUpperCase();
  console.log(rtaStr);
} */

const rtaBoolean = parseStr(12);

console.log({ rtaArray, rtaStr, rtaBoolean });

export { parseStr, rtaArray, rtaStr };
