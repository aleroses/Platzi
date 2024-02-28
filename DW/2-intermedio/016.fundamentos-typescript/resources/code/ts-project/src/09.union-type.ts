(() => {
  let user_id: number | string;
  user_id = 12;
  user_id = 'my id';

  function greeting(my_text: string | number) {

    if (typeof my_text === 'string') {
      console.log(my_text);
    } else {
      console.log(my_text);
    }
  }

  greeting('lolcat');
  greeting(123);
})();
