(() => {
  let isEnable: boolean = true;
  isEnable = false;
  console.log(isEnable);

  let isNew: boolean = false;
  console.log(isNew);

  const random: number = Math.random();
  console.log(random);

  isNew = random >= 0.5 ? true : false;
  // isNew = random > 0.5;
  console.log(isNew);
})();
