# Curso de Expresiones Regulares
> **Alberto Alcocer** 
> Inicio: `13-08-2023`

## 1. Todo lo que aprenderás sobre expresiones regulares

Este curso te va a enseñar qué son las expresiones regulares y cómo utilizarlas.  
Por ejemplo, aplicaciones de búsqueda y filtrado, las expresiones regulares son extremadamente potentes, aprende a utilizarlas en este curso.

## 2. ¿Qué son las expresiones regulares?

Las expresiones regulares en JavaScript (también conocidas como regex o RegExp) son patrones que se utilizan para realizar búsquedas y manipulación de texto. Son secuencias de caracteres que forman un patrón de búsqueda y se utilizan para hacer coincidir o encontrar combinaciones específicas de caracteres dentro de cadenas de texto.

En JavaScript, las expresiones regulares se crean mediante la clase `RegExp` o utilizando una sintaxis literal utilizando barras diagonales (`/`).

Aquí hay un ejemplo de cómo se crea una expresión regular utilizando la sintaxis literal:

```js
var regex = /patrón/;
```

Donde "patrón" es el patrón que quieres buscar. Por ejemplo, si quieres buscar todas las coincidencias de la palabra "Hola" en una cadena, puedes usar la expresión regular `/Hola/`.

Una vez que tienes una expresión regular, puedes utilizar los métodos proporcionados por la clase `RegExp` como `test()`, `exec()` o los métodos de los objetos de cadena (como `match()`, `replace()`, `search()`, `split()`, entre otros) para realizar operaciones de búsqueda, reemplazo, extracción, etc.

> Las expresiones regulares pueden incluir metacaracteres, clases de caracteres, cuantificadores, agrupaciones y mucho más para definir patrones de búsqueda más complejos.

### Método `.match()` 

El método `.match()` en JavaScript se utiliza para buscar una cadena de texto en busca de coincidencias con una expresión regular. Devuelve un array que contiene todas las coincidencias encontradas o `null` si no se encuentra ninguna coincidencia.

La sintaxis básica del método `.match()` es la siguiente:

```js
cadena.match(expresionRegular)
```

Aquí hay un ejemplo simple de cómo usar el método `.match()`:

```js
var texto = "Hola, ¿cómo estás?";
var regex = /estás/;
var coincidencia = texto.match(regex);
console.log(coincidencia); 
// Obtenemos: Información sobre las subcadenas coincidentes y sus posiciones
// [ 'estás', index: 12, input: 'Hola, ¿cómo estás?', groups: undefined ]
```

Si la expresión regular tiene la bandera `g` (global) habilitada, el método `.match()` buscará todas las coincidencias en lugar de detenerse en la primera. En ese caso, el método `.match()` devuelve un array con todas las coincidencias encontradas.

```js
var texto = "Hola, ¿cómo estás? Hola a todos.";
var regex = /Hola/g;
var coincidencias = texto.match(regex);
console.log(coincidencias); // ['Hola', 'Hola']
```

Es importante tener en cuenta que si la expresión regular tiene la bandera `g` habilitada, el método `.match()` no devuelve información sobre las subcadenas coincidentes ni sus posiciones. Para obtener información más detallada sobre las coincidencias, se pueden utilizar métodos como `.exec()`.

Además, si la expresión regular tiene paréntesis de captura, el método `.match()` también devuelve los resultados de las subexpresiones capturadas en el array de coincidencias.

### Método `.exec()`

El método `.exec()` es un método de la clase `RegExp` en JavaScript que se utiliza para ejecutar una búsqueda de coincidencias de una expresión regular en una cadena de texto. A diferencia del método `.match()`, el método `.exec()` proporciona información más detallada sobre las coincidencias, incluyendo las subcadenas coincidentes y sus posiciones.

La sintaxis básica del método `.exec()` es la siguiente:

```js
expresionRegular.exec(cadena)
```

Aquí hay un ejemplo simple de cómo usar el método `.exec()`:

```js
var texto = "Hola, ¿cómo estás?";
var regex = /estás/;
var resultado = regex.exec(texto);
console.log(resultado);
```

En este ejemplo, la expresión regular `/estás/` busca la palabra "estás" en la cadena `texto`. El método `.exec()` devuelve un array que contiene información sobre la coincidencia encontrada, en este caso:

```js
[
  'estás',
  index: 12,
  input: 'Hola, ¿cómo estás?',
  groups: undefined
]
```

El primer elemento del array es la subcadena coincidente encontrada, en este caso, `'estás'`. Luego, se proporciona información adicional:

- `index`: La posición inicial de la coincidencia en la cadena original (en este caso, 12).
- `input`: La cadena original en la que se realizó la búsqueda.
- `groups`: Si la expresión regular tiene paréntesis de captura, este objeto contiene las subexpresiones capturadas.

Si la expresión regular tiene la bandera `g` (global) habilitada, el método `.exec()` buscará cada coincidencia a medida que se llama repetidamente. Cada vez que se llama, devuelve la siguiente coincidencia encontrada.

```js
var texto = "Hola, ¿cómo estás? Hola a todos.";
var regex = /Hola/g;
var resultado;

while ((resultado = regex.exec(texto)) !== null) {
  console.log(resultado[0]);
}

//Obtenemos: 
Hola
Hola
```

En este ejemplo, la expresión regular `/Hola/g` busca todas las apariciones de la palabra "Hola" en la cadena `texto`. Al utilizar un bucle `while`, el método `.exec()` se llama repetidamente hasta que ya no se encuentren más coincidencias. En cada iteración, se muestra la subcadena coincidente encontrada.

### Paréntesis de captura  

Si la expresión regular tiene paréntesis de captura, se pueden acceder a las subexpresiones capturadas utilizando los índices correspondientes en el array de resultados. Por ejemplo:

```js
var texto = "Hola, mi nombre es Juan.";
var regex = /Hola, mi nombre es ([A-Za-z]+)/;
var resultado = regex.exec(texto);
console.log(resultado[0]); // 'Hola, mi nombre es Juan.'
console.log(resultado[1]); // 'Juan'
```

En este ejemplo, la expresión regular `/Hola, mi nombre es ([A-Za-z]+)/` busca la frase "Hola, mi nombre es " seguida de un nombre que consiste en letras. El resultado del método `.exec()` contiene dos elementos en el array: la subcadena coincidente completa y la subexpresión capturada (el nombre).

Otro ejemplo: 
```js
const text = "Hi, my name is Ghost";
// Patrón: 1 letras y cualquer otro carácter
const regex = /([A-Za-z])./; 
const result = text.match(regex);
console.log(result);
```

Obtenemos:  
```js
[
  'Hi', // Expresión regular: /([A-Za-z])./
  'H', // Subexpresión: ([A-Za-z])
  index: 0,
  input: 'Hi, my name is Ghost',
  groups: undefined
]
```
- La expresión regular es `/([A-Za-z])./`. Es la expresión regular completa que se utiliza para buscar coincidencias en la cadena de texto.
- La subexpresión es `([A-Za-z])`. Es la parte de la expresión regular que está dentro de los paréntesis. Esta subexpresión captura una letra mayúscula o minúscula.

También:  
```js
const text = "Hi, my name is Ghost";
// Patrón: 1 letras y cualquer otro carácter
const regex = /([A-Za-z])./g; //👈👀
const result = text.match(regex);
console.log(result);
```

Obtenemos:  
```js
[
  'Hi', 'my',
  'na', 'me',
  'is', 'Gh',
  'os'
]
```


### Ampliemos sobre `/([A-Za-z]+)/`

La expresión regular `/Hola, mi nombre es ([A-Za-z]+)/` se utiliza para buscar una cadena que comienza con "Hola, mi nombre es " seguido de un nombre que consiste en una o más letras.

A continuación, desglosaré los elementos de la expresión regular:

- `/` y `/`: Estos son los delimitadores que indican el inicio y el final de la expresión regular.

- `Hola, mi nombre es `: Esta es la cadena literal que se busca al principio de la coincidencia. Corresponde exactamente a la secuencia de caracteres "Hola, mi nombre es ".

- `([A-Za-z]+)`: Estos son paréntesis que se utilizan para agrupar una parte de la expresión regular y capturarla como un grupo de captura. El grupo de captura se utiliza para extraer la porción coincidente de la cadena cuando se encuentra una coincidencia.

- `[A-Za-z]`: Esto es una clase de caracteres que define un rango de caracteres permitidos. En este caso, `[A-Za-z]` significa que se aceptan cualquier letra mayúscula o minúscula. Las letras de la A a la Z y de la a a la z.

- `+`: Este es un cuantificador que indica que la clase de caracteres `[A-Za-z]` puede aparecer una o más veces en la cadena.

En resumen, la expresión regular busca una cadena que comienza con "Hola, mi nombre es " y luego captura el nombre que sigue a esa parte. El nombre debe consistir en una o más letras mayúsculas o minúsculas. Por ejemplo, la expresión regular coincidiría con las siguientes cadenas:

- "Hola, mi nombre es John"
- "Hola, mi nombre es Maria"
- "Hola, mi nombre es Alejandro"

Sin embargo, no coincidiría con las siguientes cadenas:

- "Hola, mi nombre es 123" (no contiene solo letras)
- "Hola, mi nombre es " (no hay un nombre después de la parte inicial)

Ejemplos: 

```js
const text = "Hi, my name is Ghost707";
const regex = /is ([A-Za-z0-9]+)/;
const result = regex.exec(text);

console.log(result[0]); //is Ghost707
```

```js
const text = "Hi, this is the bug 1A2B3c4d";
const regex = /bug ([A-Za-z0-9]+)/;
const result = text.match(regex); 

console.log(result[0]); //bug 1A2B3c4d
```

## 3. Aplicaciones de las expresiones regulares

Las expresiones regulares tienen muchas utilidades en la programación y el procesamiento de texto. Algunas de las principales utilidades de las expresiones regulares son:

1. Validación de entradas: Las expresiones regulares se utilizan para validar si una cadena de caracteres cumple con un formato determinado. Por ejemplo, se pueden utilizar para verificar si un correo electrónico tiene un formato válido, si un número de teléfono sigue una estructura específica, etc.

2. Búsqueda y extracción de información: Las expresiones regulares permiten buscar patrones específicos en un texto y extraer la información relevante. Por ejemplo, se pueden utilizar para buscar todas las direcciones de correo electrónico en un documento o para extraer números de teléfono de un conjunto de datos.

3. Manipulación de texto: Las expresiones regulares también se utilizan para realizar manipulaciones en el texto, como reemplazar una parte específica de una cadena con otra, eliminar caracteres no deseados, dividir una cadena en subcadenas basadas en un patrón, entre otros.

4. Filtrado y validación de datos: Las expresiones regulares se utilizan para filtrar y validar datos en diferentes contextos. Por ejemplo, se pueden emplear en aplicaciones web para validar y filtrar entradas de formularios, en procesamiento de logs para identificar patrones de interés, en análisis de datos para extraer información relevante, etc.

5. Transformación de datos: Las expresiones regulares permiten transformar datos de una forma a otra. Por ejemplo, se pueden utilizar para convertir formatos de fecha, normalizar el formato de números, eliminar espacios en blanco innecesarios, entre otros.

6. Análisis léxico: En el desarrollo de compiladores y analizadores léxicos, las expresiones regulares se utilizan para definir los tokens o unidades léxicas de un lenguaje de programación o de un lenguaje formal.

Estas son solo algunas de las utilidades más comunes de las expresiones regulares, pero su versatilidad las hace aplicables en una amplia gama de casos en los que se requiere manipular, buscar o validar texto de manera eficiente.

- [Editor de expresiones regulares](https://rubular.com/)
- [Cheat Sheet](https://cheatography.com/davechild/cheat-sheets/regular-expressions/)

## 4. Introducción al lenguaje de expresiones regulares

Con las expresiones regulares vamos a solucionar problemas reales, problemas del día a día.

¿Qué pasa si queremos buscar en un texto (txt, csv, log, cualquiera), todos los números de teléfonos que hay?  
Tendríamos que considerar por ejemplo, que un teléfono de México serían 10 dígitos; hay quienes los separan con guión, hay quienes los separan con puntos, hay quienes no los separan sino que tienen los 10 dígitos exactos, y este patrón puede cambiar para otros países.

Esto mismo sucede con números de tarjetas de crédito, códigos postales, dirección de correos, formatos de fechas o montos, etc.

Ejemplo sencillo que utiliza los metacaracteres `\d` y `\w` en una expresión regular en JavaScript:

```js
const texto = "Hola! Mi número de teléfono es 123-456-7890 y mi dirección de correo es ejemplo@mail.com";

// Buscar dígitos
const digitos = texto.match(/\d/g);
console.log("Dígitos encontrados:", digitos);

// Buscar letras y números
const letrasNumeros = texto.match(/\w/g);
console.log("Letras y números encontrados:", letrasNumeros);
```

En este ejemplo, se utiliza el metacaracter `\d` para buscar dígitos y el metacaracter `\w` para buscar letras y números en el texto proporcionado.

La expresión regular `/\d/g` coincide con todos los dígitos presentes en el texto y devuelve una matriz con los dígitos encontrados. En este caso, el resultado sería `["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]`.

La expresión regular `/\w/g` coincide con todas las letras y números presentes en el texto y devuelve una matriz con los caracteres encontrados. En este caso, el resultado sería `["H", "o", "l", "a", "M", "i", "n", "ú", "m", "e", "r", "o", "d", "e", "t", "e", "l", "é", "f", "o", "n", "o", "e", "s", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "y", "m", "i", "d", "i", "r", "e", "c", "c", "i", "ó", "n", "d", "e", "c", "o", "r", "r", "e", "o", "e", "s", "e", "j", "e", "m", "p", "l", "o", "m", "a", "i", "l", "c", "o", "m"]`.

### Cuidado!!! 

En el ejemplo anterior usamos `\d` para extraer los dígitos (fíjate en ese `\backslash`) pero, si quisiéramos buscar coincidencias con la letra `d` sería de la siguiente forma. 

```js
const texto =
  "Hola! Mi número de teléfono es 123-456-7890 y mi dirección de correo es ejemplo@mail.com";

const digitos = texto.match(/\d/g);
const letra_d = texto.match(/d/g); //👈👀🔥
console.log("Dígitos encontrados:", digitos);
console.log("Letras d:", letra_d);

//Obtenemos: 
Dígitos encontrados: [
  '1', '2', '3', '4',
  '5', '6', '7', '8',
  '9', '0'
]
Letras d: [ 'd', 'd', 'd' ]
```

Esto mismo con el metacaracter `\w` y la letra `w`. 

## 5. El caracter (.)

El punto (.) en una expresión regular coincide con cualquier carácter, excepto un salto de línea. Es un metacaracter que representa cualquier carácter único en una expresión regular. Aquí tienes un ejemplo para ilustrar su uso:

Supongamos que tienes el siguiente texto:

```
Hola mundo.
Hola amigos.
Hola a todos.
```

Si utilizas la expresión regular `Hola.`, coincidirá con las líneas que comienzan con "Hola" seguido de exactamente un carácter. En este caso, la expresión regular coincidirá con las tres líneas mencionadas anteriormente.

En Visual Studio Code, puedes utilizar el atajo "Control + F" (o "Cmd + F" en macOS) para abrir la función de búsqueda.

![](https://i.postimg.cc/sxgn669H/5-vsc.png)

Cuando activas la opción de expresiones regulares en el cuadro de búsqueda, puedes utilizar el punto (.) y otras expresiones regulares para buscar patrones específicos en tu código o texto. Por ejemplo, si deseas buscar todas las apariciones de una palabra de cinco letras que comienza con "a" y termina con "o", puedes usar la expresión regular `a...o` en la función de búsqueda de VS Code.

En Visual Studio Code se vería de la siguiente forma: 

![](https://i.postimg.cc/y6LpgKsM/5-vsc-regex.png)

Para hacer búsquedas en texto con expresiones regulares en VSC, puedes crear un archivo `.txt` y presionar `Ctrl + F`.  

```
1
12
123
1234
12345     
123456
1234567
12345678
123456789
12345678910
12345678910a
12345 678910
123453243
hola
palabra 

Hola mundo.
Hola amigos.
Hola a todos.
```

Con los datos anteriores podemos aplicar lo siguiente...  

```
. // Encuentra todos los caracteres existentes
. // (.espacio) Encuentra un carácter seguido de todos los espacios que encuentra (espacio también es otro carácter)
.......... // Encuentra 10 caracteres unidos y multiplos de 10
... // Encuentra multiplos de 3
a...o // Busca palabras de 5 letras que comienza con "a" y termina con "o"
```

📌 Nota: Usando la herramienta de búsqueda de VSC podemos reemplazar texto fácilmente.

![](https://i.postimg.cc/SR1gw6gS/5-vsc-reemplazar.png)

Recuerda que cuando utilizas el punto (.) en una expresión regular, debes tener en cuenta que coincide con cualquier carácter, por lo que es posible que desees escaparlo con una barra invertida (.) si deseas buscar un punto literal en el texto. Por ejemplo, si deseas buscar la palabra "ejemplo." en un texto, puedes usar la expresión regular `ejemplo\.`.

Usando JavaScript quedaría así:  
```js
const text = 'Hi, this is an example.'
const result = text.match(/example\./g)
console.log(result); // [ 'example.' ]
```

### Ejemplos 

En JavaScript, puedes utilizar el punto dentro de una expresión regular para representar cualquier carácter, excepto el salto de línea.

Aquí tienes algunos ejemplos útiles de cómo utilizar expresiones regulares en JavaScript junto con el punto (.):

1. Coincidir con una palabra que comienza con una letra y tiene tres caracteres en total:

```js
const regex = /\b\w{3}\b/; // \b: Límite de palabra (\w)
const result_one = regex.test("Hola"); //false
const result_two = regex.test("two"); //true
const result_three = regex.test("Al3"); //true
```

También:  
```js
const regex = /\b\w{3}\b/g; // \b: Límite de palabra (\w)
const result_one = [
  "Holaeioua".match(regex),
  "Hol aeioua".match(regex),
  "Hol aei oua".match(regex)
];

console.log(result_one);
// [ null, [ 'Hol' ], [ 'Hol', 'aei', 'oua' ] ]
```

2. Coincidir con una cadena que tiene una vocal seguida de cualquier carácter, seguida de más caracteres random, pero que deba terminar en otra vocal:

```js
const regex = /[aeiou].*[aeiou]/;

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
// Result: false => null
```

3. Reemplazar todas las ocurrencias de una letra seguida de cualquier carácter y luego otra letra: Recuerda que `/g` buscará todas las coincidencias en lugar de detenerse en la primera.

```js
// Patrón: /([1era letra])otro caracter([2da letra])/g 
const regex = /([a-zA-Z]).([a-zA-Z])/g; 
const str = "Hola mundo";

// `$2` se utiliza como patrón de reemplazo. Esto significa que solo se conservará la segunda letra capturada en cada coincidencia. 
// 👉Hol = l (1era letra)otro caracter(2da letra)👈👀🔥
// 👉a m = m (1era letra)otro caracter(2da letra)👈👀🔥
// 👉und = d (1era letra)otro caracter(2da letra)👈👀🔥
// 👉o   = o no coincide con el patrón 👈👀🔥
const result_one = str.replace(regex, "$2"); 
// `$1` se utiliza como patrón de reemplazo. Esto significa que solo se conservará la primera letra capturada en cada coincidencia.
// 👉Hol = H (1era letra)otro caracter(2da letra)👈👀🔥
// 👉a m = a (1era letra)otro caracter(2da letra)👈👀🔥
// 👉und = u (1era letra)otro caracter(2da letra)👈👀🔥
// 👉o   = o no coincide con el patrón 👈👀🔥
const result_two = str.replace(regex, "$1"); 
// `$2$1` se utiliza como patrón de reemplazo. Esto significa que se intercambiarán las posiciones de las dos letras encontradas en cada coincidencia. Primero la segunda letra y segundo la primera. 
// 👉Hol = lH (1era letra)otro caracter(2da letra)👈👀🔥
// 👉a m = ma (1era letra)otro caracter(2da letra)👈👀🔥
// 👉und = du (1era letra)otro caracter(2da letra)👈👀🔥
// 👉o   = o no coincide con el patrón 👈👀🔥
const result_three = str.replace(regex, "$2$1"); 
console.log(result_one, result_two, result_three);
// --l--m--do   H--a--u--o   lHmaduo
// lmdo Hauo lHmaduo
```

4. Dividir una cadena en base a un punto:

```js
const regex = /\./; // Escapamos el . con \
const str = "Hola.amigos.bienvenidos";
const result = str.split(regex); // ["Hola", "amigos", "bienvenidos"]
```

Recuerda que en las expresiones regulares, el punto (.) tiene un significado especial y representa cualquier carácter (excepto el salto de línea). Si deseas que el punto sea interpretado literalmente, debes escaparlo con una barra invertida (.).

#### Datos para entender los ejemplos

1. `\b`: El `\b` representa una "límite de palabra". Se utiliza para hacer coincidir posiciones en una cadena donde hay un cambio entre un carácter alfanumérico (letras mayúsculas y minúsculas, dígitos y guiones bajos "_") `\w` y cualquier carácter que no sea alfanumérico `\W`, o viceversa. En otras palabras, `\b` coincide con una posición en la cadena donde hay una transición entre caracteres de palabra y no palabra.

2. `\w`: El `\w` expresión regular que coincide con cualquier carácter alfanumérico (letras mayúsculas y minúsculas, y dígitos) y el guion bajo (\_). Es equivalente a `[a-zA-Z0-9_]`. En resumen, `\w` coincide con cualquier carácter de palabra.

3. `{3}`: Las llaves `{}` se utilizan para cuantificar la repetición de un elemento en una expresión regular. En este caso, `{3}` se coloca después de `\w` y significa que el elemento `\w` debe repetirse exactamente 3 veces. Es decir, coincide con una secuencia de tres caracteres de palabra consecutivos.

En el primer ejemplo que mencioné:

```js
const regex = /\b\w{3}\b/;
const result = regex.test("Hola"); // false
```

La expresión regular busca una secuencia de tres caracteres de palabra que formen una palabra completa en sí misma. En este caso, "Hola" no cumple con este criterio y, por lo tanto, la expresión regular devuelve `false`.

4. `[aeiou]`: Los corchetes `[ ]` se utilizan para crear una clase de caracteres en una expresión regular. Dentro de los corchetes, se enumeran los caracteres que deseas que coincidan. En este caso, `[aeiou]` representa una clase de caracteres que coincide con cualquier vocal en minúscula. Es decir, coincide con cualquiera de los caracteres "a", "e", "i", "o" o "u".

5. `.`: El punto `.` es un metacaracter en una expresión regular que coincide con cualquier carácter, excepto un salto de línea. En otras palabras, el punto representa cualquier carácter en la cadena, excepto un salto de línea.

6. `*`: El asterisco `*` es un cuantificador en una expresión regular que indica que el elemento anterior puede repetirse cero o más veces. En este caso, el asterisco se coloca después del punto, por lo que `.*` significa que cualquier carácter (excepto un salto de línea) puede repetirse cero o más veces.

7. `[aeiou]`: En este caso, `[aeiou]` se utiliza nuevamente para representar una clase de caracteres que coincide con cualquier vocal en minúscula.

En el ejemplo anterior que mencione:

```js
const regex = /[aeiou].*[aeiou]/;
const result = regex.test("Hola mundo"); // true
```

La expresión regular busca una cadena que tenga una vocal seguida de cualquier carácter (cero o más veces) y luego otra vocal. En este caso, "Hola mundo" cumple con este criterio porque comienza con la vocal "o", luego hay cualquier cantidad de caracteres (en este caso, "la mund" y "o" nuevamente) y finalmente hay otra vocal "o". Por lo tanto, la expresión regular devuelve `true`.

8. `.test()` es un método que se utiliza en JavaScript para verificar si una cadena coincide con una expresión regular. Este método se llama en un objeto de tipo RegExp y devuelve `true` si se encuentra una coincidencia, y `false` si no se encuentra ninguna coincidencia.

Aquí tienes un ejemplo de cómo se utiliza el método `.test()`:

```js
const regex = /Hola/;
const str = "Hola mundo";
const result = regex.test(str);
console.log(result); // true
```

9. `/([a-zA-Z]).([a-zA-Z])/g`: Esta es una expresión regular delimitada por barras diagonales `/`. Veamos qué significa cada parte de la expresión:

   - `([a-zA-Z])`: Esto representa un grupo de captura que coincide con cualquier carácter alfabético en minúscula o mayúscula. El uso de paréntesis crea un grupo de captura para referirse a esta coincidencia más adelante.
   - `.`: El punto coincide con cualquier carácter, excepto un salto de línea.
   - `([a-zA-Z])`: Esto representa otro grupo de captura que coincide con cualquier carácter alfabético en minúscula o mayúscula.

   La expresión regular está utilizando los grupos de captura para identificar dos caracteres alfabéticos separados por cualquier carácter. El modificador `g` al final de la expresión regular significa que se realizará una búsqueda global para encontrar todas las coincidencias en lugar de detenerse en la primera coincidencia.

10. `.replace(regex,"$2$1")`: `.replace()` es un método utilizado en JavaScript para reemplazar partes de una cadena que coinciden con una expresión regular por otro valor. Veamos qué significa cada parte del método:

   - El primer argumento, indica qué se debe buscar en la cadena para ser reemplazado.
   - El segundo argumento `"$2$1"` es una cadena de reemplazo que utiliza los grupos de captura de la expresión regular.
     - `$2` se refiere al segundo grupo de captura, que es el segundo carácter alfabético encontrado.
     - `$1` se refiere al primer grupo de captura, que es el primer carácter alfabético encontrado.

Aquí tienes un ejemplo para ilustrar cómo se utiliza:

```js
const regex = /([a-zA-Z]).([a-zA-Z])/g;
const str = "Hola mundo";
const result = str.replace(regex, "$2$1");
console.log(result); // "lHmaduo"
```

En este ejemplo, la expresión regular busca dos caracteres alfabéticos separados por cualquier carácter. Luego, el método `.replace()` invierte el orden de los caracteres encontrados y reemplaza las coincidencias en la cadena `str`. Como resultado, obtenemos la cadena "oHla munod".

11. `/\./`: Esta es una expresión regular que busca un punto (`.`) en una cadena. Sin embargo, como el punto (`.`) tiene un significado especial en las expresiones regulares (coincide con cualquier carácter), se debe escapar con una barra invertida (`\`) para que sea interpretado literalmente y represente un punto literal. Entonces, `/\./` busca un punto literal en una cadena.

12. `.split(regex)`: `.split()` es un método utilizado en JavaScript para dividir una cadena en un array de subcadenas basado en un separador especificado. En este caso, `regex` se utiliza como el separador en la función `.split()`. La cadena original se divide en subcadenas cada vez que se encuentra una coincidencia con el separador especificado.

Aquí tienes un ejemplo para ilustrar cómo se utilizan:

```js
const regex = /\./;
const str = "Hola.amigos.bienvenidos";
const result = str.split(regex);
console.log(result); // ["Hola", "amigos", "bienvenidos"]
```

En este ejemplo, la cadena `str` se divide en un array de subcadenas utilizando `/\./` como el separador. Esto significa que la cadena se divide en cada punto (`.`) que se encuentra. Como resultado, obtenemos un array con las subcadenas separadas: `["Hola", "amigos", "bienvenidos"]`.


https://regex101.com/

## 6. Las clases predefinidas y construidas

Las búsquedas en las expresiones regulares funcionan en múltiplos de la cantidad de caracteres que explícitamente indicamos.

|Regex|Qué hace|Descripción|Inverso|
|---|---|---|---|
|`.`|Character|Cualquier caracter, selecciona cada uno de los caracteres||
|`/d`|Digit|**Digits**: (`d` minúscula) Encuentra todos los dígitos (número) de 0 a 9, es equivalente a poner [0-9].|`\D`|
|`/w`|Word|**All word characters**, Encuentra todos los caracteres que son parte de una palabra, tanto letras (minúsculas o mayúsculas) como números, es equivalente a poner [a-zA-Z0-9_].|`\W`|
|`/s`|Space|**WhiteSpaces**, Encuentra todos los espacios (los saltos de línea y tabuladores también son espacios).|`\S`|
|[0-9]|Specific Digit|Encuentra todos los dígitos de 0 a 9.||
|[0-9a-zA-Z]|Specific Word Character|Encontrará todos los caracteres que estén del 0-9 o que sean letras mayúsculas o minúsculas (`\w`)||
|[a-zA-Z]||nos encontrará solamente las letras, tanto mayúsculas como minúsculas.||
|`\`|Diagonal invertida|Escapa los caracteres, permite que un carácter especial se muestre|

Podemos combinarlas así: 
```js
\d
\d\d\d
\w
\s para espacios
\d\s\w
\w\w\w\w
[0-9] Equivalente a \d
[6-9]
[a-z]
[a-zA-Z]
[a-zA-Z0-9]
[a-zA-Z0-9_]
[a-fA-F0-9_]
[a-fA-F0-9_\.]
[a-tA-F0-5_\.]
```


### Buscando hexadecimales de 6 dígitos y con # al inicio

```js
[#][0-9a-fA-F]{6}
```

La expresión regular `[#][0-9a-fA-F]{6}` se utiliza para buscar cadenas de texto que cumplan con el siguiente patrón:

- El primer carácter debe ser el símbolo de numeral (`#`).
- Los siguientes 6 caracteres deben ser dígitos hexadecimales, es decir, pueden ser cualquier número del 0 al 9 o cualquier letra de la A a la F (mayúscula o minúscula).

Un ejemplo de cómo se puede utilizar esta expresión regular es para validar códigos de colores hexadecimales en formato RGB. Por ejemplo, si tienes una cadena de texto que representa un código de color hexadecimal, como `#FF00FF`, puedes utilizar la expresión regular para verificar si cumple con el formato esperado:

```js
const regex = /[#][0-9a-fA-F]{6}/;
const colorCode = '#FF00FF';

if (regex.test(colorCode)) {
  console.log('El código de color es válido.');
} else {
  console.log('El código de color no es válido.');
}
```

En este ejemplo, la expresión regular se utiliza con el método `test()` para verificar si el código de color `#FF00FF` cumple con el patrón establecido. En este caso, el código de color es válido y se imprimirá el mensaje "El código de color es válido." Si el código de color no cumpliera con el patrón, se imprimiría el mensaje "El código de color no es válido."

También:  
```js
const regex = /[#][a-fA-F\d]{6}/g;
const colorCode = "#FF00FF#AB20AFas12#FF00FF as12#AB20AF as12#FF00FF#AB20AF as12#FF00FF";
const result = colorCode.match(regex);
console.log(result);
```

Obtenemos:  
```js
[
  '#FF00FF',
  '#AB20AF',
  '#FF00FF',
  '#AB20AF',
  '#FF00FF',
  '#AB20AF',
  '#FF00FF'
]
```

https://eead-csic-compbio.github.io/perl_bioinformatica/node18.html


## 7. Los delimitadores: +, *, ?

En las expresiones regulares, los caracteres `*`, `+` y `?` son cuantificadores que se utilizan para especificar la cantidad de ocurrencias de un elemento en una cadena.

- El asterisco `*` indica que el elemento precedente puede aparecer cero o más veces. Por ejemplo:

  - `.*` coincide con cualquier cadena, ya que el punto `.` coincide con cualquier carácter y el asterisco `*` indica que puede aparecer cero o más veces.
  - `\d*` coincide con cualquier secuencia de dígitos numéricos, incluyendo una cadena vacía.

- El signo de más `+` indica que el elemento precedente debe aparecer al menos una vez o más. Por ejemplo:

  - `\d+` coincide con una secuencia de uno o más dígitos numéricos.
  - `\d+[a-z]` coincide con una secuencia de dígitos seguida de una letra minúscula.

- El signo de interrogación `?` indica que el elemento precedente puede aparecer cero o una vez. Por ejemplo:

  - `\d?` coincide con un dígito numérico opcional. Puede coincidir con un solo dígito o con nada.
  - `\d?[a-z]s` coincide con un dígito numérico opcional, seguido de una letra minúscula, seguida de la letra 's'.

A continuación, te proporciono algunos ejemplos interesantes:

1. `\d*[a-z][a-z]?`

   - Coincide con una cadena que puede comenzar con cero o más dígitos, seguida de una o dos letras minúsculas.
   - Ejemplo de coincidencia: "123ab" o "xyz".

En JavaScript se vería de la siguiente manera: 
```js
const text = '123ab';
const regex = /\d?[a-z][a-z]?/g;
const result = text.match(regex);
console.log(result); //[ '3ab' ]
```
```js
const text = 'xyz';
const regex = /\d?[a-z][a-z]?/g;
const result = text.match(regex);
console.log(result); //[ 'xy', 'z' ]
```

2. `\d*[a-z]s`

   - Coincide con una cadena que puede comenzar con cero o más dígitos, seguida de una letra minúscula y la letra 's'.
   - Ejemplo de coincidencia: "9cats" o "dogs".

En JavaScript se vería de la siguiente manera: 
```js
const text = '9cats';
const regex = /\d*[a-z]s/g;
const result = text.match(regex);
console.log(result); //[ 'ts' ]
```
```js
const text = 'dogs';
const regex = /\d*[a-z]s/g;
const result = text.match(regex);
console.log(result); //[ 'gs' ]
```


3. `\d*[a-z]s?`

   - Coincide con una cadena que puede comenzar con cero o más dígitos, seguida de una letra minúscula y la letra 's' que es opcional.
   - Ejemplo de coincidencia: "9cat" o "dogs".

En JavaScript se vería de la siguiente manera: 
```js
const text = '9cat';
const regex = /\d*[a-z]s?/g;
const result = text.match(regex);
console.log(result); //[ '9c', 'a', 't' ]
```
```js
const text = 'dogs';
const regex = /\d*[a-z]s?/g;
const result = text.match(regex);
console.log(result); //[ 'd', 'o', 'gs' ]
```


4. `\d*[a-z]?s\d*`

   - Coincide con una cadena que puede comenzar con cero o más dígitos, seguida de una letra minúscula opcional, la letra 's' y cero o más dígitos.
   - Ejemplo de coincidencia: "123s456" o "a2s".

En JavaScript se vería de la siguiente manera: 
```js
const text = '123s456';
const regex = /\d*[a-z]?s\d*/g;
const result = text.match(regex);
console.log(result); //[ '123s456' ]
```
```js
const text = 'a2s';
const regex = /\d*[a-z]?s\d*/g;
const result = text.match(regex);
console.log(result); //[ '2s' ]
```

5. `\d*[a-z]?s\d+`

   - Coincide con una cadena que puede comenzar con cero o más dígitos, seguida de una letra minúscula opcional, la letra 's' y al menos un dígito.
   - Ejemplo de coincidencia: "123s456" o "a2s789".

En JavaScript se vería de la siguiente manera: 
```js
const text = '123s456';
const regex = /\d*[a-z]?s\d+/g;
const result = text.match(regex);
console.log(result); //[ '123s456' ]
```
```js
const text = 'a2s789';
const regex = /\d*[a-z]?s\d+/g;
const result = text.match(regex);
console.log(result); //[ '2s789' ]
```

### Resumen 

|Clases                     |Contadores                      |
|---------------------------|--------------------------------|
|`\w` caracteres de palabra |`*` cero o muchos                |
|`\d` dígitos               |`+` uno o muchos                 |
|`\s` espacios              |`?` cero o uno                   |
|`[0-9] ~ \d`                |`[Clase]{x,y}` entre `x` y `y` repeticiones de la clase |
|`[0-9a-zA-Z_] ~  \w`         |`[clase]{x,}` al menos `x` ocurrencias de la clase      |

#### Agrupaciones:  
(XYZ) agrupa las clases X, Y y Z.    
En muchas implementaciones de RegEx, estas clases sirven para luego reemplazar, referenciándolas como `$1`, `$m[1]` o `\1` (entre otras) dependiendo en lenguaje o software que se use.  

[Practicar RegEx](https://regexr.com/)

## 8. Los contadores {min, max}

En las expresiones regulares, los contadores `{min,max}` se utilizan para especificar el número mínimo y máximo de ocurrencias de un patrón. Aquí tienes una explicación detallada sobre los contadores:

- `{n}`: Coincide exactamente con 'n' ocurrencias del patrón.
- `{n,}`: Coincide con al menos 'n' ocurrencias del patrón.
- `{,m}`: Coincide con un máximo de 'm' ocurrencias del patrón.
- `{n,m}`: Coincide con al menos 'n' y un máximo de 'm' ocurrencias del patrón.

Ahora, para el patrón que encuentre números telefónicos de 10 dígitos que puedan tener puntos, espacios, guiones u otros caracteres de separación, puedes utilizar la siguiente expresión regular en JavaScript:

```js
function encontrarNumerosTelefonicos(texto) {
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

encontrarNumerosTelefonicos(texto);
// Obtenemos: 
Números telefónicos encontrados:
[
  '1234567890',
  '987-654-3210',
  '555 123 4567',
  '555.123.4567',
  '12-34.32-42.89'
]
```

En este ejemplo, la expresión regular `(\d[\d\s.-]{8,}\d)` busca un número telefónico que comienza y termina con un dígito (`\d`), y tiene entre 8 y cualquier cantidad de ocurrencias (`{8,}`) de dígitos, espacios, puntos (`.`), guiones (`-`) o cualquier otro carácter de separación (`\s`). El modificador `g` al final de la expresión regular permite encontrar todas las ocurrencias en el texto.

El resultado mostrará todos los números telefónicos encontrados en el texto que cumplen con el patrón.


## 18. El caso de (?) como delimitador

El símbolo "?" en expresiones regulares tiene diferentes usos y puede tener diferentes efectos dependiendo de su contexto. Aquí tienes algunos ejemplos para entender su funcionamiento:

1. Coincidencia opcional:
   El símbolo "?" se utiliza para indicar que el elemento o grupo anterior es opcional, es decir, puede aparecer cero o una vez en la cadena de texto.

   Ejemplo:

   ```js
   const pattern = /colou?r/; // Coincide con "color" y "colour"
   console.log(pattern.test("color")); // true
   console.log(pattern.test("colour")); // true
   console.log(pattern.test("colur")); // false
   ```
   En este caso la `u` es opcional, puede aparecer 0 o 1 vez. 

2. Modificador de "lazy" o "no greedy":
   Cuando se utiliza después de los cuantificadores "\*", "+", "?" o "{}", el símbolo "?" modifica el comportamiento del cuantificador para que coincida con el mínimo número de veces posible.

   Ejemplo:

   ```js
   const pattern = /a.+?b/; // Coincide con la cadena "a" seguida de cualquier contenido seguido de "b", pero de la forma más corta posible
   console.log(pattern.test("aabb")); // true aab
   console.log(pattern.test("aaabbb")); // true aaab
   console.log(pattern.test("aabbbb")); // true aab
   console.log(pattern.test("aab")); // true aab
   ```

3. Escape de caracteres especiales:
   El símbolo "?" se utiliza para escapar caracteres especiales y tratarlos literalmente en lugar de su significado especial en expresiones regulares.

   Ejemplo:

   ```js
   const pattern = /\?/; // Coincide con el símbolo de interrogación literal "?"
   console.log(pattern.test("Hello?")); // true [ '?' ]
   console.log(pattern.test("Hello")); // false null
   ```

Estos son solo algunos ejemplos del uso del símbolo "?" en expresiones regulares. Recuerda que su comportamiento puede variar dependiendo del contexto en el que se utilice.


## 10. Not (^), su uso y sus peligros

El símbolo "^" en expresiones regulares tiene varios usos y efectos dependiendo de su contexto. Aquí tienes algunos ejemplos para entender su funcionamiento:

1. Coincidencia al inicio de una cadena:
   El símbolo "^" se utiliza para indicar que el patrón debe coincidir al inicio de una cadena.

   Ejemplo:

   ```js
   const pattern = /^abc/; // Coincide con "abc" solo si aparece al inicio de la cadena
   console.log(pattern.test("abcdef")); // true [ 'abc' ]
   console.log(pattern.test("xyzabc")); // false null
   console.log(pattern.test("abcxyz")); // true [ 'abc' ]
   ```

2. Negación de caracteres:
   Cuando se utiliza dentro de corchetes "\[^\]", el símbolo "^" se utiliza para negar un conjunto de caracteres. Indica que cualquier carácter distinto a los especificados puede coincidir.

   Ejemplo:

   ```js
   const pattern = /[^0-9]/; // Coincide con cualquier caracter que no sea un dígito del 0 al 9
   console.log(pattern.test("abc")); // true [ 'a', 'b', 'c' ]
   console.log(pattern.test("123")); // false null
   console.log(pattern.test("!@#")); // true [ '!', '@', '#' ]
   ```

3. Complemento de una clase de caracteres:
   Cuando se utiliza después de "\[" pero no al inicio de la clase, el símbolo "^" se utiliza para indicar el complemento de una clase de caracteres. Coincide con cualquier caracter que no esté especificado en la clase.

   Ejemplo:

   ```js
   const pattern = /[a-z^]/; // Coincide con cualquier letra minúscula o el símbolo "^"
   console.log(pattern.test("a")); // true
   console.log(pattern.test("^")); // true
   console.log(pattern.test("1")); // false
   console.log('^a12^34@sdf'.match(pattern));
   // [ '^', 'a', '^', 's', 'd', 'f' ]
   ```

### Uso de ^ en diferentes líneas 

Ejemplo del uso del símbolo caret (^) para representar el comienzo de una línea en una expresión regular:

```js
const pattern = /^Hola/gm;
const text = `Hola, ¿cómo estás?
¡Hola! Bienvenido. //¡👈👀 no coincide 
Hola a todos.`;

const matches = text.match(pattern);
console.log(matches); // [ 'Hola', 'Hola' ]
```

En este ejemplo, la expresión regular `/^Hola/gm` se utiliza para encontrar todas las apariciones de la palabra "Hola" al comienzo de una línea en un texto. La bandera "g" indica una búsqueda global y la bandera "m" (multiline) habilita el comportamiento de que el caret (^) coincida con el comienzo de cada línea y no solo con el inicio del texto.

Estos son solo algunos ejemplos del uso del símbolo "^" en expresiones regulares. Recuerda que su comportamiento puede variar dependiendo de las banderas y del contexto en el que se utilice.


### Peligros 

A continuación, se detallan algunos de los posibles peligros asociados con el uso de "^" en regex:

1. Inicio de línea: El "^" se utiliza en regex para hacer coincidir el inicio de una línea. Esto significa que si se usa incorrectamente, puede afectar la lógica de coincidencia y producir resultados inesperados. Por ejemplo, si se espera que una expresión regular coincida con una palabra específica en cualquier parte de una cadena, pero se usa "^" para anclarla al inicio de la cadena, no se obtendrán coincidencias en otros contextos.

2. Inyección de caracteres: Si se permite la entrada de usuarios en una expresión regular y se utiliza "^" sin una validación adecuada, podría permitir una inyección de caracteres no deseados. Esto podría llevar a vulnerabilidades de seguridad, como ataques de inyección de código o manipulación de patrones de búsqueda.

3. Diferencias entre implementaciones: El comportamiento del "^" puede variar ligeramente entre las diferentes implementaciones de regex. Algunos motores de regex pueden interpretar "^" de manera diferente, lo que podría conducir a resultados inconsistentes en diferentes plataformas o entornos.

Para evitar estos peligros, es recomendable seguir buenas prácticas al utilizar "^" en regex:

- Comprender claramente el contexto y el propósito del uso de "^" en la expresión regular.
- Validar y filtrar cuidadosamente la entrada de usuarios antes de utilizarla en una expresión regular.
- Considerar el uso de caracteres de escape (como "^") si se necesita una coincidencia literal del símbolo "^".
- Probar exhaustivamente las expresiones regulares en diferentes entornos y plataformas para garantizar que el comportamiento sea consistente.

### `\W` y `\D` 

En las expresiones regulares (regex), los caracteres especiales `\W` y `\D` se utilizan para hacer coincidir patrones específicos en cadenas de texto. Aquí tienes una explicación de cada uno y ejemplos útiles:

1. `\W`: Coincide con cualquier carácter que no sea una letra, número o guion bajo. Es equivalente a la clase de caracteres negados `[^\w]`. En otras palabras, coincide con caracteres no alfanuméricos.

	Los caracteres alfanuméricos son los siguientes:   
	- Letras mayúsculas del alfabeto inglés: A, B, C, ..., Z
	- Letras minúsculas del alfabeto inglés: a, b, c, ..., z
	- Dígitos numéricos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

	Los caracteres no alfanuméricos pueden variar según el contexto y la configuración regional. Algunos ejemplos comunes de caracteres no alfanuméricos incluyen:   
	- Espacios en blanco: ` ` (espacio), `\t` (tabulación), `\n` (salto de línea), `\r` (retorno de carro).  
	- Símbolos de puntuación: `.`, `,`, `;`, `¡`, `:`, `"`, `'` (apóstrofos), `(`, `)`, `[`, `]`, `{`, `}`.  
	- Símbolos matemáticos: `+`, `-`, `*`, `/`, `=`, `>`, `<`, etc.  
	- Símbolos monetarios: `$` (dólar), `€` (euro), `£` (libra), `¥` (yen), etc.  
	- Símbolos de exclamación, interrogación y otros símbolos especiales: `!`, `?` y otros caracteres especiales como `@`, `#`, `%`, `&`, `|`, `~`, etc.  
	
	📌 Nota: En JavaScript, las letras con tildes, como á, é, í, ó, ú, y sus equivalentes en mayúsculas, Á, É, Í, Ó, Ú, se consideran caracteres no alfanuméricos.
   
   Ejemplo: `/[\W_]/g`  

```js
const regex = /[\W_]/g;
const texto = "¡Hola, mundo! ¿Cómo estás?";

console.log(texto.match(regex));
```

	Obtenemos: 
```js
[
  '¡', ',', ' ', '!',
  ' ', '¿', 'ó', ' ',
  'á', '?'
]
```


   Este ejemplo buscará cualquier carácter no alfanumérico o guion bajo en una cadena de texto. Es útil para eliminar o reemplazar todos los caracteres especiales o de puntuación en una cadena, dejando solo letras y números. Por ejemplo, se podría utilizar para limpiar una cadena de entrada antes de procesarla o para validar nombres de usuario que solo deben contener letras y números.

2. `\D`: Coincide con cualquier carácter que no sea un dígito del 0 al 9. Es equivalente a la clase de caracteres negados `[^0-9]`. En otras palabras, coincide con cualquier carácter no numérico.

   Ejemplo: `/\D+/g`

```js
const regex = /\D+/g;
const texto = "La temperatura es de 25 grados Celsius.";

const numeros = texto.match(regex);
console.log(numeros);
```

	Obtenemos: 
```js
[ 'La temperatura es de ', ' grados Celsius.' ]
```

   Este ejemplo buscará cualquier secuencia de uno o más caracteres no numéricos en una cadena de texto. Es útil para eliminar o extraer todos los caracteres que no son dígitos en una cadena. Por ejemplo, se podría utilizar para extraer solo los números de teléfono de una cadena que puede contener otros caracteres, como espacios o guiones.

> `Alt + 94`

## 11. Reto: Filtrando letras en números telefónicos utilizando negaciones

Solución: 
```js
const text = `
555658
56-58-11
56.58.11
563.78-8
6 09 587
76y87r98`;
const pattern = /\d[\d\W]{6,}\d\W/gm;
const numbers = text.match(pattern);
console.log(numbers);
console.log(numbers[0].replace('/\n/g', ' '));
```
Obtenemos:  
```js
[ '555658\n56-58-11\n56.58.11\n563.78-8\n6 09 587\n' ]
555658
56-58-11
56.58.11
563.78-8
6 09 587
```

## 12. Principio (^) y final de línea ($) 

En una expresión regular, el símbolo `$` se utiliza para representar el final de una cadena de texto. Indica que la coincidencia debe ocurrir al final de la cadena.

Aquí tienes algunos ejemplos de cómo se puede utilizar el símbolo `$` en JavaScript junto con expresiones regulares:

1. Coincidir una palabra que termine con "er":

```js
const regex = /\w+er$/g;
console.log(regex.test("correr")); // true [ 'correr' ]
console.log(regex.test("leer")); // true [ 'leer' ]
console.log(regex.test("saltar")); // false null
```

En este ejemplo, la expresión regular `/\w+er$/` busca una palabra que termine con "er". Las palabras "correr" y "leer" coinciden con la expresión regular porque terminan con "er", mientras que "saltar" no coincide porque no termina con "er".

2. Reemplazar el último carácter de una cadena:

```js
const texto = "Hola, mundo!";
const nuevoTexto = texto.replace(/.$/g, "*");
console.log(nuevoTexto); // Hola, mundo*
```

En este ejemplo, la expresión regular `.$` busca el último carácter de la cadena. Utilizando el método `replace`, se reemplaza el último carácter con el asterisco "*". El resultado es "Hola, mundo*".

3. Validar que una cadena termine con un número:

```js
const regex = /\d$/g;
console.log(regex.test("123")); // true [ '3' ]
console.log(regex.test("abc")); // false null
console.log(regex.test("456xyz")); // false null
```

En este ejemplo, la expresión regular `/\d$/` verifica si una cadena termina con un número. La cadena "123" coincide con la expresión regular porque termina con un número, mientras que las cadenas "abc" y "456xyz" no coinciden porque no terminan con un número.

4. Coincidir una cadena que contenga solo dígitos numéricos:

```js
const regex = /^\d+$/g;
console.log(regex.test("12345")); // true [ '12345' ]
console.log(regex.test("456xyz")); // false null
console.log(regex.test("abc123")); // false null
```

En este ejemplo, la expresión regular `/^\d+$/` busca una cadena que contenga solo dígitos numéricos. La primera cadena coincide porque contiene solo dígitos numéricos, mientras que las siguientes dos cadenas no coinciden debido a la presencia de caracteres no numéricos.

5. Coincidir una cadena que solo contiene letras minúsculas:

```js
const regex = /^[a-z]+$/g;
console.log(regex.test("hola")); // true [ 'hola' ]
console.log(regex.test("Hola")); // false null
console.log(regex.test("hola123")); // false null
```

En este ejemplo, la expresión regular `/^[a-z]+$/` busca una cadena que comienza desde el principio (`^`) y termina al final (`$`) y contiene solo letras minúsculas de la a a la z. La primera cadena coincide porque contiene solo letras minúsculas, mientras que las siguientes dos cadenas no coinciden debido a las letras mayúsculas y los dígitos incluidos.

6. Coincidir una cadena que no contiene espacios en blanco:

```js
const regex = /^[^\s]+$/;
console.log(regex.test("hola")); // true [ 'hola' ]
console.log(regex.test("hola mundo")); // false null
console.log(regex.test("hola\tmundo")); // false null
```

En este ejemplo, la expresión regular `/^[^\s]+$/` busca una cadena que comienza desde el principio (`^`) y termina al final (`$`) y no contiene ningún espacio en blanco. La primera cadena coincide porque no contiene espacios en blanco, mientras que las siguientes dos cadenas no coinciden debido a la presencia de espacios y tabulaciones.

7. Coincidir una cadena que comienza con una vocal y termina con una consonante:

```js
const regex = /^[aeiou].*[bcdfghjklmnpqrstvwxyz]$/g;
console.log(regex.test("apple")); // false null
console.log(regex.test("orange")); // false null
console.log(regex.test("elephant")); // true [ 'elephant' ]
```

En este ejemplo, la expresión regular `/^[aeiou].*[bcdfghjklmnpqrstvwxyz]$/` busca una cadena que comienza desde el principio (`^`) con una vocal (a, e, i, o, u), seguida de cualquier cantidad de caracteres (`.*`), y termina al final (`$`) con una consonante (excepto las vocales). La primera cadena no coincide porque no cumple con el patrón, mientras que las siguientes dos cadenas coinciden porque cumplen con el patrón especificado.

### Reto: Hacer match con las líneas 1 y 6

```js
const text = `
3rgergwg0
354656546
aa
3
3
3$%^%$^$%78`;

/* const pattern = /^\d[^0-9]{2,}\d?\d$/gm; */
/* const pattern = /^\d[\D]{2,}\d?\d$/gm; */
/* const pattern = /^\d[\D]{2,}\d+$/gm; */
const pattern = /^\d\D{2,}\d+$/gm;

const match = text.match(pattern);
console.log(match);
// [ '3rgergwg0', '3$%^%$^$%78' ]
```

[Chuleta RegEx](http://w3.unpocodetodo.info/utiles/regex.php)

## 13. Logs

Los archivos de registro, también conocidos como ficheros log, son archivos utilizados para registrar eventos, actividades o información relevante generada por sistemas, aplicaciones, servicios u otros componentes de software. Estos registros son útiles para el análisis, seguimiento, solución de problemas, auditoría y monitoreo de sistemas informáticos.

Los ficheros log contienen registros secuenciales de eventos, que suelen incluir información como:

1. Fecha y hora: Registro del momento en que ocurrió el evento.
2. Descripción del evento: Detalles sobre el evento o la actividad registrada.
3. Identificación del origen: Indicación del componente o sistema que generó el evento.
4. Nivel de severidad: Clasificación que indica la importancia o gravedad del evento.
5. Datos adicionales: Información adicional relacionada con el evento, como códigos de error, valores de variables, IP de origen, etc.

Estos archivos pueden generarse en diferentes formatos, como texto plano, formato CSV (valores separados por comas), formatos estructurados como JSON o XML, entre otros. El formato y la estructura del archivo de registro dependen del sistema o la aplicación que los genere.

Los ficheros log son ampliamente utilizados en diversos entornos, incluyendo sistemas operativos, servidores web, bases de datos, aplicaciones empresariales, dispositivos de red, aplicaciones móviles, entre otros. Proporcionan una fuente valiosa de información para el análisis y el diagnóstico de problemas, permitiendo a los administradores del sistema y a los desarrolladores rastrear eventos, detectar errores, realizar auditorías y optimizar el rendimiento de los sistemas.

Ejemplo de contenido de un archivo de registro (log) ficticio:

```
2023-08-20 10:15:23 - INFO - La aplicación se ha iniciado correctamente.
2023-08-20 10:15:30 - WARNING - Se ha excedido el límite de almacenamiento disponible.
2023-08-20 10:16:05 - ERROR - No se pudo establecer conexión con la base de datos.
2023-08-20 10:16:10 - DEBUG - Variable x tiene el valor 42.
2023-08-20 10:16:20 - ERROR - El archivo especificado no existe: archivo.txt
2023-08-20 10:17:00 - INFO - Se ha completado el proceso de copia de seguridad.
```

En este ejemplo, cada línea del archivo de registro representa un evento o una actividad registrada. Cada línea contiene información como la fecha y hora del evento, el nivel de severidad (INFO, WARNING, ERROR, DEBUG), y una descripción del evento en sí. También se incluyen detalles adicionales, como mensajes de error, valores de variables o acciones realizadas.

### Análisis de ficheros log

Para analizar archivos de registro (logs) utilizando expresiones regulares en sistemas operativos como Linux u otros, puedes seguir los siguientes pasos:

1. Identifica el formato del archivo de registro: Antes de comenzar a utilizar expresiones regulares, es importante comprender el formato del archivo de registro que deseas analizar. Esto incluye conocer la estructura de cada línea de registro y los patrones que deseas extraer.

2. Selecciona una herramienta para trabajar con expresiones regulares: En sistemas operativos como Linux, puedes utilizar comandos como `grep`, `sed` o `awk` para trabajar con expresiones regulares y analizar archivos de registro. Estas herramientas te permiten buscar y manipular texto utilizando patrones definidos con expresiones regulares.

3. Construye tu expresión regular: Una vez que comprendas el formato del archivo de registro y los patrones que deseas extraer, puedes construir tu expresión regular. Puedes utilizar diferentes elementos como caracteres literales, cuantificadores, clases de caracteres, grupos de captura, etc., según tus necesidades.

4. Utiliza la herramienta adecuada con la expresión regular: Aplica la herramienta elegida (por ejemplo, `grep`, `sed` o `awk`) junto con la expresión regular para buscar y extraer la información deseada del archivo de registro. Por ejemplo, si deseas buscar todas las líneas que contienen una dirección IP en un archivo de registro, puedes usar el comando `grep` de la siguiente manera:

   ```shell
   grep -E '[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+' archivo.log
   ```

   Este comando utiliza la opción `-E` para habilitar el uso de expresiones regulares extendidas y busca líneas que contengan una secuencia de números separados por puntos, lo cual es una representación básica de una dirección IP.

5. Refina y ajusta tu expresión regular según sea necesario: A medida que analices los resultados y te familiarices más con el archivo de registro, es posible que necesites ajustar y refinar tu expresión regular para lograr una mayor precisión o manejar casos especiales.

Recuerda que existen herramientas y lenguajes de programación más avanzados, como Python o Perl, que ofrecen capacidades más poderosas para el análisis de archivos de registro utilizando expresiones regulares.

### Usando JavaScript 

Para analizar archivos de registro utilizando expresiones regulares en JavaScript, puedes seguir estos pasos:

1. Leer el archivo de registro: Primero, debes leer el contenido del archivo de registro en JavaScript. Puedes lograr esto utilizando librerías o módulos como `fs` o `axios`, dependiendo de si el archivo de registro está ubicado localmente o en un servidor remoto.

2. Definir la expresión regular: Identifica el patrón o los patrones que deseas buscar en el archivo de registro. Utiliza expresiones regulares para definir estos patrones. Por ejemplo, si deseas buscar todas las líneas que contienen una dirección IP, puedes utilizar la siguiente expresión regular: `/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g`.

3. Aplicar la expresión regular al contenido del archivo: Utiliza el método `match()` o `exec()` en el contenido del archivo para buscar todas las coincidencias con la expresión regular. Esto devolverá un array con todas las coincidencias encontradas.

4. Procesar y analizar las coincidencias: Una vez que tienes las coincidencias, puedes procesarlas y analizarlas según tus necesidades. Puedes realizar diferentes acciones, como contar la cantidad de coincidencias, extraer información adicional de las coincidencias, almacenarlas en una estructura de datos, generar estadísticas, etc.

Aquí tienes un ejemplo de cómo podrías implementar esto en JavaScript:

```js
const fs = require('fs');

// Leer el archivo de registro
const logFilePath = 'ruta/al/archivo.log';
const logContent = fs.readFileSync(logFilePath, 'utf-8');

// Definir la expresión regular
const ipRegex = /[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g;

// Aplicar la expresión regular al contenido del archivo
const ipMatches = logContent.match(ipRegex);

// Procesar y analizar las coincidencias
if (ipMatches) {
  console.log('Direcciones IP encontradas:');
  ipMatches.forEach((ip) => {
    console.log(ip);
  });
} else {
  console.log('No se encontraron direcciones IP en el archivo de registro.');
}
```

- [Generar data](https://www.generatedata.com/)
- [Colección de logs en diferentes sistemas](https://github.com/logpai/loghub)
-  [Using Logs to Investigate – SQL Injection Attack Example](https://www.acunetix.com/blog/articles/using-logs-to-investigate-a-web-application-attack/)

## 14. Teléfonos

Ejemplo de expresión regular en JavaScript para buscar números de teléfono móvil que sigan un formato específico con la cantidad de números igual a `+1 (123) 456-7890` y a este otro (123) 456-7890:

```js
const phoneNumberRegex =
  /(\+\d{1}\s?)?(\()?(\d{3})(\))?([-.\s]?)(\d{3})([-.\s]?)(\d{3,4})/gm;
```

Puedes utilizar esta expresión regular en JavaScript para buscar números de teléfono que sigan el formato especificado. Por ejemplo:

```js
const text = `
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
const matches = text.match(phoneNumberRegex);

if (matches) {
  const phoneNumber = matches[0];
  console.log('Número de teléfono encontrado:', phoneNumber);
} else {
  console.log('No se encontró un número de teléfono válido.');
}
```

Obtenemos: 
```js
Número de teléfono encontrado: [
  '+1 (123) 456-7890',
  '(123) 456-7890',
  '123-456-7890',
  '123.456.7890',
  '1234567890',
  '123-456-7890',
  '1234567890',
  '+1 1234567890',
  '(123) 456-7890'
]
```

Recuerda que esta expresión regular cubre un formato específico de número de teléfono. Si necesitas buscar números en otros formatos o considerar más variaciones, es posible que debas ajustar la expresión regular para adaptarla a tus necesidades.

## 15. URLs

Una URL (Uniform Resource Locator) es una dirección que se utiliza para localizar recursos en la web, como páginas web, imágenes, archivos, etc. Una URL tiene varias partes que indican la ubicación y el tipo de recurso al que se está accediendo. A continuación, te explico las partes principales de una URL:

1. **Protocolo**: Indica el protocolo de comunicación que se utilizará para acceder al recurso. Ejemplos comunes son "http://" (para páginas web no seguras) y "https://" (para páginas web seguras).

2. **Dominio**: Es el nombre o la dirección IP del servidor donde reside el recurso. Por ejemplo, "www.ejemplo.com" o "192.168.0.1". El dominio también puede contener subdominios, como "subdominio.ejemplo.com".

3. **Puerto**: Es un número opcional que especifica el puerto de red utilizado para la comunicación. Si no se especifica, se utiliza el puerto predeterminado para el protocolo en cuestión (por ejemplo, el puerto 80 para HTTP y el puerto 443 para HTTPS).

4. **Ruta**: Especifica la ubicación del recurso dentro del servidor. Puede incluir carpetas y subcarpetas separadas por barras ("/"). Por ejemplo, "/carpeta1/carpeta2/recurso.html".

5. **Query string**: Es una cadena de consulta opcional que se utiliza para enviar datos adicionales al servidor. Se indica mediante el símbolo de interrogación ("?") seguido de pares clave-valor separados por ampersand ("&"). Por ejemplo, "?param1=valor1&param2=valor2".

6. **Fragmento**: Identifica una sección específica dentro del recurso. Se indica mediante el símbolo de almohadilla ("#") seguido de un identificador. Por ejemplo, "#seccion1".

Estas son las partes principales de una URL, pero también puede haber otras partes específicas dependiendo del tipo de recurso o de las funcionalidades adicionales que se utilicen.

### Top Level Domains 

Los Top Level Domains (TLD) o dominios de nivel superior son la parte más alta de la estructura jerárquica del sistema de nombres de dominio (DNS). Se encuentran al final de un nombre de dominio y representan la categoría o la clasificación general del sitio web o del recurso al que se hace referencia.

Los TLD se dividen en dos categorías principales:

1. **TLD genéricos (gTLD)**: Son TLD que se utilizan a nivel global y no están asociados a un país en particular. Algunos ejemplos de gTLD comunes son:

   - .com: utilizado para sitios web comerciales.
   - .org: utilizado para organizaciones sin fines de lucro.
   - .net: utilizado para proveedores de servicios de red.
   - .edu: utilizado para instituciones educativas.
   - .gov: utilizado para entidades gubernamentales.

2. **TLD de código de país (ccTLD)**: Son TLD que están asociados a un país o territorio específico. Cada país tiene asignado su propio ccTLD de dos letras, basado en el código de país ISO 3166-1. Algunos ejemplos de ccTLD son:

   - .us: para Estados Unidos.
   - .uk: para Reino Unido.
   - .ca: para Canadá.
   - .de: para Alemania.
   - .jp: para Japón.

Además de los gTLD y ccTLD, también existen otros tipos de TLD más específicos, como los TLD de infraestructura (.arpa) y los TLD patrocinados por organizaciones (.museum, .aero, etc.).

Los TLD ayudan a organizar y clasificar los sitios web en función de su propósito o ubicación geográfica. Al utilizar diferentes TLD en una URL, se puede indicar la naturaleza o el enfoque del sitio web.

### Buscando URL's

Aquí tienes una expresión regular en JavaScript para encontrar URLs en una cadena de texto:

```js
const urlRegex = /((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
```

Esta expresión regular busca coincidencias de URLs en el texto y admite los siguientes casos:

- URLs que comienzan con "http://" o "https://".
- Dominios que contienen letras, números, guiones y subrayados.
- Dominios que tienen una o más partes separadas por puntos.
- Opcionalmente, permite especificar un número de puerto después del dominio.
- Opcionalmente, permite especificar una ruta después del dominio, que puede contener caracteres no espaciados (/ \\S\*).

Puedes usar esta expresión regular en JavaScript para encontrar y extraer URLs de una cadena de texto. Por ejemplo:

```js
const text = `
https://www.ejemplo.com
http://subdominio.ejemplo.com/ruta
https://www.example.com
http://subdomain.example.com/path
https://www.google.com
https://www.github.com/user/repository
http://localhost:3000
ftp://ftp.example.com/file.txt
https://www.example.com/?param=value
http://www.example.com/page.html#section`;
const urls = text.match(urlRegex);
console.log(urls);
```

Obtenemos: 
```js
[
  'https://www.ejemplo.com',
  'http://subdominio.ejemplo.com/ruta',
  'https://www.example.com',
  'http://subdomain.example.com/path',
  'https://www.google.com',
  'https://www.github.com/user/repository',
  'ftp.example.com/file.txt',
  'https://www.example.com/?param=value',
  'http://www.example.com/page.html#section'
]
```

Recuerda que esta expresión regular puede no ser perfecta para todos los casos posibles de URLs, ya que la estructura de las URLs puede variar y existen muchas posibles combinaciones. Sin embargo, esta expresión regular básica puede ser útil en muchos escenarios.

```js

```


