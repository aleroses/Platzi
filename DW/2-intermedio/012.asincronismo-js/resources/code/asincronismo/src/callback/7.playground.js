const exec = callback => {
  setTimeout(() => {
    callback("Something text...");
  }, 2000);
};

const message = text => {
  console.log(text);
};

exec(message);
