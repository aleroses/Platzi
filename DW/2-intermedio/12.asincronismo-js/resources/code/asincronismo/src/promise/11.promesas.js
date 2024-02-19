/* const promise = new Promise((resolve, reject) => {
  resolve("Hey!");
}); */

const cows = 1;
const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm.`);
  } else {
    reject("There isn't cows on the farm.");
  }
});

countCows
  .then(result => {
    console.log(result);
  })
  .catch(error => console.log(error))
  .finally(() => console.log("Finally!!!"));
