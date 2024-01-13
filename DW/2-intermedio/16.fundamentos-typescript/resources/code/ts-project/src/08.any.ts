/* (() => {
  let dinamic_var: any;

})() */

(() => {
  let my_dynamic_var: any;
  my_dynamic_var = 100;
  my_dynamic_var = null;
  my_dynamic_var = {};
  my_dynamic_var = '';

  my_dynamic_var = 'Hola';
  const rta = (my_dynamic_var as string).toLowerCase();
  console.log('Respuesta:', rta);

  my_dynamic_var = 1212;
  const rta2 = (<number>my_dynamic_var).toFixed();
  console.log('Respuesta:', rta2);
})();
