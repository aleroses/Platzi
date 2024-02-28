function greeting() {
  let userName = "Anna";
  console.log(userName);

  if (userName === "Anna") {
    console.log(`Hello ${userName}!`);
  }
}

greeting();
// No tiene alcance 👀👇
// console.log(userName);
