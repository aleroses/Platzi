// Nico => [N, i, c, o]
// [N, i, c, o] => Nico

function parseStr(
  input: string | string[]
): string | string[] {
  if (Array.isArray(input)) {
    return input.join("");
  } else {
    return input.split("");
  }
}

const rtaArray = parseStr("Ale");

if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
  console.log(rtaArray);
}

const rtaStr = parseStr(["A", "l", "e"]);

if (typeof rtaStr === "string") {
  rtaStr.toUpperCase();
  console.log(rtaStr);
}

console.log({ rtaArray, rtaStr });
