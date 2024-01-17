"use strict";
// Nico => [N, i, c, o]
// [N, i, c, o] => Nico
Object.defineProperty(exports, "__esModule", { value: true });
exports.rtaStr = exports.rtaArray = exports.parseStr = void 0;
/* function parseStr(
  input: string | string[]
): string | string[] {
  if (Array.isArray(input)) {
    return input.join("");
  } else {
    return input.split("");
  }
} */
function parseStr(input) {
    if (Array.isArray(input)) {
        return input.join("");
    }
    else if (typeof input === "string") {
        return input.split("");
    }
    else if (typeof input === "number") {
        return true;
    }
}
exports.parseStr = parseStr;
const rtaArray = parseStr("Ale");
exports.rtaArray = rtaArray;
rtaArray.reverse();
/* if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
  console.log(rtaArray);
} */
const rtaStr = parseStr(["A", "l", "e"]);
exports.rtaStr = rtaStr;
rtaStr.toUpperCase();
/* if (typeof rtaStr === "string") {
  rtaStr.toUpperCase();
  console.log(rtaStr);
} */
const rtaBoolean = parseStr(12);
console.log({ rtaArray, rtaStr, rtaBoolean });
