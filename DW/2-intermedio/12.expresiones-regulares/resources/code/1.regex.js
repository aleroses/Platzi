/* --------------- Ejemplo 01---------------- */
/* const text = "Hola, ¿cómo estás? Hola a todos.";
const regex = /Hola/g;
const coincidencias = text.match(regex);

console.log(coincidencias); */

/* --------------- Ejemplo 02 ---------------- */
/* var texto = "Hola, ¿cómo estás? Hola a todos.";
var regex_one = /Hola/g;
var regex_two = /a/g;
var resultado;
var salida;

while (
  (resultado = regex_one.exec(texto)) !== null &&
  (salida = regex_two.exec(texto)) !== null
) {
  console.log(resultado);
  console.log(salida);
} */

/* --------------- Ejemplo 03 ---------------- */

/* const text = "Hi, my name is Ghost707";
const regex = /is ([A-Za-z0-9]+)/;
const result = regex.exec(text);

console.log(result);
console.log(result[0]);
console.log(result[1]); */

/* const text = "Hi, my name is Ghost";
// Patrón: 1 letras y cualquer otro carácter
const regex = /([A-Za-z])./g; 
const result = text.match(regex);
console.log(result); */

/* --------------- Ejemplo 04 ---------------- */
/* const text = "Hi, this is the bug 1A2B3c4d";
const regex = /bug ([A-Za-z0-9]+)/;
const result = text.match(regex);

console.log(result[0]); */

/* --------------- Ejemplo 05 ---------------- */
/* const texto =
  "Hola! Mi número de teléfono es 123-456-7890 y mi dirección de correo es ejemplo@mail.com";

const digitos = texto.match(/\d/g);
const letra_d = texto.match(/d/g);
console.log("Dígitos encontrados:", digitos);
console.log("Letras d:", letra_d);

const letrasNumeros = texto.match(/\w/g);
console.log("Letras y números encontrados:", letrasNumeros); */

/* --------------- Ejemplo 06 ---------------- */

/* const text = "Hi, this is an example.";
const result = text.match(/example\./g);
console.log(result); */

/* --------------- Ejemplo 07 ---------------- */

/* const regex = /\b\w{3}\b/;  // \b: Límite de palabra (\w)
const result_one = regex.test("Hola");
const result_two = regex.test("two");
const result_three = regex.test("Al3");

console.log(result_one, result_two, result_three); */

/* const regex = /\b\w{3}\b/g; // \b: Límite de palabra (\w)
const result_one = [
  "Holaeioua".match(regex),
  "Hol aeioua".match(regex),
  "Hol aei oua".match(regex)
];
console.log(result_one); */

/* --------------- Ejemplo 08 ---------------- */
/* const regex = /[aeiou].*[aeiou]/;

const result_one = regex.test("Hola mundo");
const result_two = regex.exec("Hola mundo");
console.log(` Result: ${result_one} => ${result_two}`);
// Result: true => ola mundo

const result_three = regex.test("Hello word");
const result_four = regex.exec("Hello word");
console.log(` Result: ${result_three} => ${result_four}`);
// Result: true => ello wo

const result_five = regex.test("Word");
const result_six = regex.exec("Word");
console.log(` Result: ${result_five} => ${result_six}`);
// Result: false => null */

/* --------------- Ejemplo 09 ---------------- */
// Patrón: /([1era letra])otro caracter([2da letra])/g
/* const regex = /([a-zA-Z]).([a-zA-Z])/g;
const str = "Hola mundo";
const result_one = str.replace(regex, "$2"); // 2da letra
const result_two = str.replace(regex, "$1"); // 1era letra
const result_three = str.replace(regex, "$2$1"); // 2da y 1era
console.log(result_one, result_two, result_three); */

// Hola mundo
// --l--m--do
// H--a--u--o
// lHmaduo

/* 
// Ejemplos de uso de replace()
const cadena = "Hola mundo";
const nuevaCadena = cadena.replace("mundo", "amigo");
console.log(nuevaCadena); // "Hola amigo" */

/* const cadena = "Hola mundo";
const nuevaCadena = cadena.replace(/o/g, "e");
console.log(nuevaCadena); // "Hela munde" */

/* const cadena = "Juan Pérez";
// \s representa un espacio en blanco. 
const nuevaCadena = cadena.replace(/(\w+)\s(\w+)/, "$2, $1");
console.log(nuevaCadena); // "P, Juanérez"
// P, Juanérez */

/* --------------- Ejemplo 10 ---------------- */
/* const regex = /\./;
const str = "Hola.amigos.bienvenidos";
const result = str.split(regex);
console.log(result); */

/* -----Buscando hexadecimales de 6 dígitos y con # al inicio----- */
/* const regex = /[#][0-9a-fA-F]{6}/;
const colorCode =
  "#FF00FF#AB20AF as12#FF00FF#AB20AF #FF00FF#AB20AF #FF00FF#AB20AF #FF00FF";

if (regex.test(colorCode)) {
  console.log("El código de color es válido.");
} else {
  console.log("El código de color no es válido.");
} */

/* 
const regex = /[#][a-fA-F\d]{6}/g;
const colorCode = "#FF00FF#AB20AFas12#FF00FF as12#AB20AF as12#FF00FF#AB20AF as12#FF00FF";
const result = colorCode.match(regex);
console.log(result); 
*/

/* --------------- Ejemplo 11 ---------------- */
/* const text = 'xyz';
const regex = /\d?[a-z][a-z]?/g;
const result = text.match(regex);
console.log(result); */

/* const text = 'dogs';
const regex = /\d*[a-z]s/g;
const result = text.match(regex);
console.log(result); */

/* const text = 'a2s789';
const regex = /\d*[a-z]?s\d+/g;
const result = text.match(regex);
console.log(result); */

/* --  Buscar número telefonico 10 dígitos -- */
/* function encontrarNumerosTelefonicos(texto) {
  var patron = /(\d[\d\s.-]{8,}\d)/g;
  var numerosTelefonicos = texto.match(patron);

  if (numerosTelefonicos) {
    console.log("Números telefónicos encontrados:");
    console.log(numerosTelefonicos);
  } else {
    console.log("No se encontraron números telefónicos.");
  }
}

// Ejemplo de uso
var texto =
  "Mi número de teléfono es 1234567890. También puedes contactarme al 987-654-3210 o al 555 123 4567, incluso en el 555.123.4567 o al 12-34.32-42.89.";

encontrarNumerosTelefonicos(texto); */

/* --- Buscar datos con una coma---- */
/* const pattern = /.+?,/g;
const text = 'csv1,csv2,csv3,csv4,csv5 1234,543,234,567,567 123,543,234,567,567'
const result = text.match(pattern);
console.log(result); */

/* ---------------Usos de ?--------------- */
/* const pattern = /colou?r/g;
console.log('color'.match(pattern));
console.log('colour'.match(pattern));
console.log('colur'.match(pattern));
*/

/* const pattern = /a.+?b/g;
console.log('aabb'.match(pattern)); // aab
console.log('aaabbb'.match(pattern)); // aaab
console.log('aabbbb'.match(pattern)); // aab
console.log('aab'.match(pattern)); // aab */

/* const pattern = /\?/g;
console.log('Hello?'.match(pattern));
console.log('Hello'.match(pattern)); */

/* -------------- Usos de ^ ------------------- */
/* const pattern = /^abc/g;
console.log('abcdef'.match(pattern));
console.log('xyzabc'.match(pattern));
console.log('abcxyz'.match(pattern)); */

/* const pattern = /[^0-9]/g;
console.log('123abc'.match(pattern));
console.log('123'.match(pattern));
console.log('!@#'.match(pattern));
console.log('123abc!@#'.match(pattern)); */

/* const pattern = /[a-z^]/g;
console.log('^a12^34@sdf'.match(pattern)); */

/* const pattern = /^Hola/gm;
const text = `Hola, ¿cómo estás?
¡Hola! Bienvenido.
Hola a todos.`;

const matches = text.match(pattern);
console.log(matches); */

/* --- Buscar datos sin coma ---- */
/* const pattern = /[^,\s]+/g;
const text =
"csv1,csv2,csv3,csv4,csv5 1234,543,234,567,567 123,543,234,567,567";
const result = text.match(pattern);
console.log(result); */

/* const text =
"csv1,csv2,csv3,csv4,csv5 1234,543,234,567,567 123,543,234,567,567";
const pattern = /[^,\s]+/g;
console.log(text.match(pattern)); */

/* --------- \W y \D ----------- */

/* const regex = /[\W_]/g;
const texto = "¡Hola, mundo! ¿Cómo estás?";

console.log(texto.match(regex)); */

/* const regex = /\D+/g;
const texto = "La temperatura es de 25 grados Celsius.";

const numeros = texto.match(regex);
console.log(numeros);

/* -------- Encontrar solo números --------- */
/* const text = `
555658
56-58-11
56.58.11
563.78-8
6 09 587
76y87r98`;
const pattern = /\d[\d\W]{6,}\d\W/gm;
const numbers = text.match(pattern);
console.log(numbers);
console.log(numbers[0].replace("/\n/g", " ")); */

/* const regex = /^[a-zA-Z\u00C0-\u017F]+$/g;
const texto = "Hola";

const resultado = texto.replace(regex, "");
console.log(texto.match(regex));
console.log(resultado); */

/* ------------- $ ------------------------- */
/* const regex = /\w+er$/g;
console.log('correr'.match(regex));
console.log('leer'.match(regex));
console.log('saltar'.match(regex)); */

/* const text = 'Hola, mundo!';
const new_text = text.replace(/.$/,"*");
console.log(new_text); */

/* const regex = /\d$/g;
console.log('123'.match(regex));
console.log('abc'.match(regex));
console.log('456xyz'.match(regex)); */

/* const regex = /^\d+$/g;
console.log('12345'.match(regex));
console.log('456xyz'.match(regex));
console.log('abc123'.match(regex)); */

/* const regex = /^[a-z]+$/g;
console.log('hola'.match(regex));
console.log('Hola'.match(regex));
console.log('hola123'.match(regex)); */

/* const regex = /^[^\s]+$/g;
console.log("hola".match(regex));
console.log("hola mundo".match(regex));
console.log("hola\tmundo".match(regex)); */

/* const regex = /^[aeiou].*[bcdfghjklmnpqrstvwxyz]$/g;
console.log("apple".match(regex));
console.log("orange".match(regex)); 
console.log("elephant".match(regex));  */

/* ----- Hacer un match con las lineas 1 y 6: --------- */
/* const text = `
3rgergwg0
354656546
aa
3
3
3$%^%$^$%78`;

// const pattern = /^\d[^0-9]{2,}\d?\d$/gm;
// const pattern = /^\d[\D]{2,}\d?\d$/gm;
// const pattern = /^\d[\D]{2,}\d+$/gm;
const pattern = /^\d\D{2,}\d+$/gm;

const match = text.match(pattern);
console.log(match);
*/

/* -------------------- Buscar IPs ----------------- */

/* const ips = `
192.168.0.1
172.16.0.1
10.0.0.1
192.168.1.1
192.168.2.1
192.168.10.1
192.168.100.1
192.168.254.1
192.168.0.100
192.168.1.100
123..456
1.2.3.4.5
`;

const pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/gm;
console.log(ips.match(pattern)); */

/* ------ Buscar número de Telefono similares +1 (123) 456-7890 -----*/
/* const text = `
+1 (123) 456-7890
(123) 456-7890
123-456-7890
123.456.7890
1234567890
123-456-7890

1234567890
(123) 45-6789
+1 1234567890
12-345-6789
+12 (123) 456-7890`;

const phoneNumberRegex =
  /(\+\d{1}\s?)?[\(]?(\d{3})[\)]?([.-\s]?)(\d{3})([.-\s]?)(\d{4})/gm;
const matches = text.match(phoneNumberRegex);

if (matches) {
  const phoneNumber = matches;
  console.log("Números de teléfono encontrado:", phoneNumber);
} else {
  console.log("No se encontró un número de teléfono válido.");
} */

/* ------- Buscar URLs----------- */
/* const urlRegex = /((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
const text = `
https://www.ejemplo.com
http://sub-dominio.ejemplo.com/ruta
https://www.example.com
http://sub-domain.example.com/path
https://www.google.com
https://www.github.com/user/repository
http://localhost:3000
ftp://ftp.example.com/file.txt
https://www.example.com/?param=value
http://www.example.com/page.html#section
http-123423312,`;
const urls = text.match(urlRegex);
console.log(urls); */

/* ------- Validar Mails----------- */
/* const text = `
example@gmail.com
john.doe@yahoo.com
jane_smith123@hotmail.com
info@company.co.uk
johndoe1234@domain.name
user1234@example.co
test-email@email-provider.com
myemail123@subdomain.domain.com
alice+bob@gmail.com
1234567890@example.com

exam_ple@gmail.com
john.doe@y!ahoo.com
jane@smith@hotmail
info@company
johndoe@-domain.name
@example.com
test-email@
myemail123@subdomain..com
alice@+bob@gmail.com
1234567890@example
`;

const pattern = /^[\w._+-]+@(?:[\w-]+\.)+[a-zA-Z]{2,}$/gm;
console.log(text.match(pattern)); */

/* ----- Grupo de no Captura (?: ... ) ------- */
/* const pattern = /(apple|banana)(?:s|es)/;
console.log('apples'.match(pattern)); */

/* const regex = /\b\w+(?:ing)\b/g;
const text = "I'm running and jumping. The car is moving.";

const matches = text.match(regex);
console.log(matches); */

/* const regex = /#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
const text = "The colors are #FF0000, #00FF00, and #0000FF.";

const matches = text.match(regex);
console.log(matches);
*/

/* ---- Geolocalización */
/* const regex = /\b\d{5}\b/g;
const text = "Los códigos postales son 90210, 10001, y 60601.";

const matches = text.match(regex);
console.log(matches); */
/* 
const regex = /\b[A-ZÀ-ÿ][a-zA-ZÀ-ÿ\s]+\b/g;
const text = "Nueva York, San Francisco, Los Ángeles.";

const matches = text.match(regex);
console.log(matches); // À = Alt + 183 // ÿ = Alt + 152 */

/* const pattern = /-?\d{1,3}\.\d{1,6},\s?-?\d{1,3}\.\d{1,6}/gm;
const text = `
-99.205646,19.429707,2275.10
-99.205581, 19.429652,2275.10
-99.204654,19.428952,2275.58
`;
console.log(text.match(pattern)); */

/* const pattern = /^-?\d{1,3}\.\d{1,6},\s?-?\d{1,3}\.\d{1,6},.*$/gm;
const text = `
-99.205646,19.429707,2275.10
-99.205581, 19.429652,2275.10
-99.204654,19.428952,2275.58
`;
console.log(text.match(pattern)); */

/* const pattern =
  /^-?\d{1,3}\s\d{1,2}'\s\d{1,2}.\d{1,2}"[WE],\s-?\d{1,3}\s\d{1,2}'\s\d{1,2}.\d{1,2}"[SN]$/gm;
const text = `
-99 12' 34.08"W, 19 34' 56.98"N  
-34 54' 32.00"E, -3 21' 67.00"S
`;
console.log(text.match(pattern)); */

/* --------- Nombres ---------- */
const text = `
Camilo Sarmiento Gálvez
Alejandro Pliego Abasto
Milagros Reyes Japón
Samuel París Arrabal
Juan Pablo Tafalla
Axel Gálvez Velázquez
Óscar Montreal Aparicio
Jacobo Pozo Tassis
Guillermo Ordóñez Espiga
Eduardo Pousa Curbelo
Ivanna Bienvenida Kevin
Ada Tasis López
Luciana Sáenz García
Florencia Sainz Márquz
Catarina Cazalla Lombarda
Paloma Gallo Perro
Margarita Quesada Florez
Vicente Fox Quesada
Iris Graciani
Asunción Carballar
Constanza Muñoz
Manuél Andres García Márquez
`;
/* 
const regex =
  /^[A-Za-zÀ-ÿ]+\s?[A-Za-zÀ-ÿ]+[\S? ]([A-Za-zÀ-ÿ]+)?[\S? ]([A-Za-zÀ-ÿ]+)/gm; 
*/
const regex = /([A-Za-zÀ-ÿ]+[\S? ?]?){1,4}/gm;
console.log(text.match(regex));
