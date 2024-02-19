const delay = (time, message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
};

delay(3000, "Great!!!")
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
