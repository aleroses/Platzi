function greeting() {
  let username = "Ale";

  function displayUsername() {
    return `Hello ${username}`;
  }

  return displayUsername;
}

const message = greeting();
console.log(message);
console.log(message());
