(() => {
  let isEnable = true;
  isEnable = false;
  console.log(isEnable);

  let isNew: boolean = false;
  console.log(isNew);

  const random = Math.random();
  console.log(random);

  isNew = random >= 0.5 ? true : false;
  console.log(isNew);
})();
