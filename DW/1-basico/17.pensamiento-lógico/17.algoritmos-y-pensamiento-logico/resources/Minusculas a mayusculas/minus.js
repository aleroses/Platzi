// Opcion 1 No funciona
let saludo = ["h", "o", "l", "a"]
mayusculas(saludo);

function mayusculas(parametro){
  for(i=0; i < parametro.length; i++){
    parametro[i].toUpperCase();
    console.log(parametro[i]);
  }
}


// Opcion 2
let texto = prompt("Ingresa tu nombre");
document.write(texto.toUpperCase());

//Opcion 3
let frase = " hola platzinauta";
document.write(frase.toUpperCase());
