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

Una vez que tienes una expresión regular, puedes utilizar los métodos proporcionados por la clase `RegExp` o los métodos de los objetos de cadena (como `match()`, `replace()`, `search()`, `split()`, entre otros) para realizar operaciones de búsqueda, reemplazo, extracción, etc.

Aquí hay un ejemplo de cómo usar una expresión regular para buscar todas las coincidencias de la palabra "Hola" en una cadena:

```js
const texto = "Hola, ¿cómo estás? Hola a todos.";
const regex = /Hola/g; // 'g' indica que la búsqueda es global (todas las coincidencias)
const coincidencias = texto.match(regex);
console.log(coincidencias); // ['Hola', 'Hola']
```

En este ejemplo, el método `match()` se utiliza en la cadena `texto` para buscar todas las coincidencias de la expresión regular `regex` y devuelve un array con las coincidencias encontradas.

Las expresiones regulares en JavaScript son muy poderosas y flexibles. Pueden incluir metacaracteres, clases de caracteres, cuantificadores, agrupaciones y mucho más para definir patrones de búsqueda más complejos.

### Método `.match()` 

El método `.match()` en JavaScript se utiliza para buscar una cadena de texto en busca de coincidencias con una expresión regular. Devuelve un array que contiene todas las coincidencias encontradas o `null` si no se encuentra ninguna coincidencia.

La sintaxis básica del método `.match()` es la siguiente:

```js
cadena.match(expresionRegular)
```

Donde `cadena` es la cadena de texto en la que quieres buscar coincidencias, y `expresionRegular` es la expresión regular que defines para realizar la búsqueda.

Aquí hay un ejemplo simple de cómo usar el método `.match()`:

```js
var texto = "Hola, ¿cómo estás?";
var regex = /estás/;
var coincidencia = texto.match(regex);
console.log(coincidencia); // ['estás']
```

En este ejemplo, la expresión regular `/estás/` busca la palabra "estás" en la cadena `texto`. El método `.match()` devuelve un array con la coincidencia encontrada, en este caso, `['estás']`.

Si la expresión regular tiene la bandera `g` (global) habilitada, el método `.match()` buscará todas las coincidencias en lugar de detenerse en la primera. En ese caso, el método `.match()` devuelve un array con todas las coincidencias encontradas.

```js
var texto = "Hola, ¿cómo estás? Hola a todos.";
var regex = /Hola/g;
var coincidencias = texto.match(regex);
console.log(coincidencias); // ['Hola', 'Hola']
```

En este ejemplo, la expresión regular `/Hola/g` busca todas las apariciones de la palabra "Hola" en la cadena `texto`. El método `.match()` devuelve un array con todas las coincidencias encontradas, en este caso, `['Hola', 'Hola']`.

Es importante tener en cuenta que si la expresión regular tiene la bandera `g` habilitada, el método `.match()` no devuelve información sobre las subcadenas coincidentes ni sus posiciones. Para obtener información más detallada sobre las coincidencias, se pueden utilizar métodos como `.exec()`.

Además, si la expresión regular tiene paréntesis de captura, el método `.match()` también devuelve los resultados de las subexpresiones capturadas en el array de coincidencias.

En resumen, el método `.match()` es útil cuando quieres buscar coincidencias de una expresión regular en una cadena de texto y necesitas obtener las coincidencias encontradas.

### Método `.exec()`

El método `.exec()` es un método de la clase `RegExp` en JavaScript que se utiliza para ejecutar una búsqueda de coincidencias de una expresión regular en una cadena de texto. A diferencia del método `.match()`, el método `.exec()` proporciona información más detallada sobre las coincidencias, incluyendo las subcadenas coincidentes y sus posiciones.

La sintaxis básica del método `.exec()` es la siguiente:

```js
expresionRegular.exec(cadena)
```

Donde `expresionRegular` es la expresión regular que defines para realizar la búsqueda y `cadena` es la cadena de texto en la que quieres buscar coincidencias.

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
  index: 14,
  input: 'Hola, ¿cómo estás?',
  groups: undefined
]
```

El primer elemento del array es la subcadena coincidente encontrada, en este caso, `'estás'`. Luego, se proporciona información adicional:

- `index`: La posición inicial de la coincidencia en la cadena original (en este caso, 14).
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

En resumen, el método `.exec()` es útil cuando necesitas obtener información detallada sobre las coincidencias de una expresión regular, incluyendo las subcadenas coincidentes y sus posiciones. También te permite trabajar con paréntesis de captura para extraer información específica de las coincidencias.

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

https://rubular.com/


https://cheatography.com/davechild/cheat-sheets/regular-expressions/