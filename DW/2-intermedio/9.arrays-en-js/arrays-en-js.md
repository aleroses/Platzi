# Curso de Manipulación de Arrays en JavaScript

> **Nicolas Molina** [Google Developer Expert en Google](https://platzi.com/profesores/nicobytes/)

## Introducción

### Tu AS bajo la manga

#### 1. Requisitos iniciales

Como requisito inicial, deberás tener dos carpetas: `client` y `server` que servirán para ejercicios en el navegador y en el servidor, respectivamente. También necesitarás instalar una dependencia llamada `http-server`. Asimismo puedes clonar el [repositorio de GitHub](https://github.com/platzi/curso-manipulacion-de-arrays/tree/main) del curso.

![Estructura inicial del proyecto del curso](https://i.postimg.cc/g2d5LSx3/01-archivos-iniciales.webp)

Si no conoces cómo iniciar un proyector para instalar dependencias, te recomiendo que realices el curso de [Gestión de Dependencias y Paquetes con NPM](https://platzi.com/cursos/npm/).

[Clonar repo](https://github.com/platzi/curso-manipulacion-de-arrays/tree/main)

- git clone git@github.com:platzi/curso-manipulacion-de-arrays.git
- cd curso-manipulacion-de-arrays
- npm install
	- Vemos algunas vulnerabilidades incluso criticas 
- npm update
- npm audit
- npm list 
- npm audit fix --force
- npm audit 
	- found 0 vulnerabilities

### 2. ForEach

- npx http-server client/

![](https://i.postimg.cc/sD3c7wdr/2-run-server.png)

Para ejecutar, debes hacer ctrl + clic 

Otra alternativa a esto puede ser Live server, una extensión de vsc que solo haciendo clic de derecho sobre el html podemos correrlo en el navegador. 

Explicación de ForEach [[taller-js-primer-videojuego#7. Refactor del mapa de juego]]

#### Código de la clase

Ejemplo 01: 
```js
const letters = ['a', 'b', 'c'];

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log(element);    
}
// a
// b
// c

letters.forEach((item, index) => console.log(item, index));
// a 0
// b 1
// c 2
```

Ejemplo 02: 
```html
<body>
    <div id="app"></div>
    <script>
        const products = [
            { title: 'Burger', price: 121},
            { title: 'Pizza', price: 20 },
        ];

        const app = document.getElementById('app');
        products.forEach(product => {
            app.innerHTML += `<li>${product.title} - ${product.price}</li>`;
        })
    </script>
</body>
```

Es importante tener en cuenta que, aunque este código funciona, modificar el HTML directamente utilizando `innerHTML` no es la forma más eficiente o segura de crear y modificar elementos en el DOM. En su lugar, se recomienda utilizar métodos como `createElement`, `appendChild` y `setAttribute` para crear y modificar elementos de forma programática.

#### Reto: 

```js
<body>
    <div id="app"></div>
    <script>
        const products = [
            { 
                title: 'Burger', 
                price: 12, 
                stock: 50, 
                junk: true 
            },
            { 
                title: 'Salad', 
                price: 20, 
                stock: 28, 
                junk: false 
            },
        ];

        const app = document.getElementById('app');
        products.forEach(product => {
            app.innerHTML += `
                <li>
                    Name: ${product.title} ||
                    Description: ${product.price} -
                    <input type="checkbox" ${product.junk ? 'checked' : ''}/>
                </li>`
        });
    </script>
    <!-- <input type="checkbox", checked> 👈👀-->
</body>
```

La etiqueta `input` en HTML se utiliza para crear un elemento de entrada de datos que permite al usuario ingresar información. Uno de los atributos más comunes de la etiqueta `input` es `type`, que se utiliza para especificar el tipo de entrada de datos que se espera, como un campo de texto, un botón, una casilla de verificación (checkbox), entre otros.

El atributo `checked` se utiliza junto con el tipo de entrada de datos `checkbox` para indicar si una casilla de verificación debe estar marcada o no por defecto. Si el atributo `checked` está presente en una etiqueta `input` de tipo `checkbox`, la casilla de verificación se mostrará inicialmente como marcada. Si el atributo `checked` no está presente, la casilla de verificación se mostrará inicialmente como desmarcada.


### 3. Mutable o Inmutable

Los conceptos de **mutabilidad e inmutabilidad** son muy importantes para los siguientes métodos de _arrays_. Existen métodos mutables que cambian el _array_ original; e inmutables que devuelven un _array_ diferente al original.

#### Referencias en memoria

En JavaScript, cada estructura está guardada en una referencia en memoria, por lo que si cambiamos un elemento en el _array_, también lo haremos en esa referencia. Al clonar _arrays_, se crea un nuevo _array_ que tiene las mismas referencias en memoria que el original, por lo que si se realiza un cambio en el original, también cambiará en la copia.

```js
const original = [1,2,3]
const copia = original
copia[0] = "Hola"

console.log(original) // [ 'Hola', 2, 3 ]
```

#### Diferencia entre mutabilidad e inmutabilidad

Con lo mencionado anteriormente, **mutable es aquella acción que cambia el valor en la referencia en memoria del elemento del _array_ original,** provocando que cambien el original y la copia. **Inmutable es la acción en la que se cambia el valor, pero en una referencia diferente del original**, provocando que el original siga igual.

La mutabilidad es más flexible y una buena opción si se requiere cambiar, actualizar o eliminar datos; pero esto puede ocasionar fallos o resultados erróneos en nuestra aplicación. La inmutabilidad es más exigente, te permite generar nuevas estructuras para manejarlas sin cambiar la original; pero esto puede provocar que la memoria colapse.

Por lo que, ¿Cuál es mejor? La respuesta es ninguna, cada uno te permite manejar estructuras de datos, por ende es necesario identificar cuál forma es la adecuada a aplicar en un algoritmo.

### 4. Qué es el método map

El método `map` consiste en crear un nuevo _array_ a partir de los elementos originales transformados mediante una función _(callback)_ y **es inmutable**.

La transformación implica cambiar cualquier elemento en otro, ya sea un número, un objeto, otro _array_. Las posibilidades son infinitas.

Este método recibe **dos argumentos**:

- La función que itera y transforma cada elemento del _array_ (obligatorio).
- Un objeto al que puede hacer referencia el contexto `this` en la función. Si se lo omite, será `undefined`. Recuerde que `this` en _arrow functions_ es el objeto global.

```js
let otherArray = array.map(function(), thisArg)
```

La función, que recibe como argumento el método `map`, utiliza **tres parámetros**:

- El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
- El **_array_ que está iterando**.

```js
const other = array.map(function(element, index, array))
```

#### Diferencia entre la estructura _for_ y el método _map_

Los métodos de _arrays_ nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que transforme cada elemento de un _array_ en el doble de sí mismo.

Si utilizamos la estructura `For`, necesitaremos un _array_ adicional vacío y utilizarlo con el método `push` para agregar los elementos transformados. El método `push` es mutable.

```js
const numbers = [1,2,3,4,5]
const newNumbers = []

for(let i=0; i< numbers.length; i++){
    const number = numbers[i]
    newNumbers.push(number*2)
}

console.log(newNumbers) // [ 2, 4, 6, 8, 10 ]
```

Con el método `map`, solo debemos establecer la función que indique la transformación para cada elemento.

```js
const numbers = [1,2,3,4,5]
const newNumbers = numbers.map( function(number){
    return number * 2
})
// o 
const newNumbers = numbers.map(number => number * 2)

console.log(newNumbers) // [ 2, 4, 6, 8, 10 ]
```

Recuerda siempre retornar un valor en la función `callback` del método.

#### Diferencia entre _forEach_ y _map_

La principal diferencia entre estos dos es que `forEach` solamente itera cada elemento, mientras que `map` itera y transforma cada elemento en un nuevo _array_.

¿Pero también se pueden transformar los elementos con `forEach`? Sí, sin embargo, necesitas agregar cada elemento en cada iteración a un _array_ nuevo, caso contrario puedes mutar el _array_ original.



#### Código de la clase

Usando HTML:  

```js
<body>
    <div id="app"></div>
    <script>
        const products = [
            { 
                title: 'Burger', 
                price: 12, 
                stock: 50, 
                junk: true 
            },
            { 
                title: 'Pizza', 
                price: 20, 
                stock: 28, 
                junk: false 
            },
        ];

        const app = document.getElementById('app');
        
        const new_products = products.map(product => {
            return `
                <li>
                    Name: ${product.title} ||
                    Price: ${product.price} -
                    <input type="checkbox" ${product.junk ? 'checked' : ''}/>
                </li>`
        });

        app.innerHTML = new_products.join(' ');
    </script>
</body>
```


### 5. Multiplica todos los elementos por dos

Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.

Para solucionarlo vas a encontrar una función llamada `multiplyElements` que recibe un parámetro de entrada:

- array: Un array de números

Dentro del cuerpo de la función `multiplyElements` debes escribir tu solución.

Ejemplo 1:

```js
Input: [2, 4, 5, 6, 8]
Output: [4, 8, 10, 12, 16]
```

Ejemplo 2:

```js
Input: [1, 1, -2, -3]
Output: [1, 1, -4, -6]
```

#### Solución para Platzi 

```js
export function multiplyElements(array) { 
	return array.map(n => n * 2); 
} 

multiplyElements([2, 4, 5, 6, 8]); 
multiplyElements([1, 1, -4, -6]);
```

#### Solución 
```js
const array_one = [2, 4, 5, 6, 8];
const array_two = [1, 1, -2, -3];

function multiply_elements(array){
    console.log(array.map(n => n * 2)); 
}

multiply_elements(array_one);
multiply_elements(array_two)
```


### 6. Map Reloaded

Ahora que ya sabes cómo funciona el método `map` de _arrays_ estudiemos diferentes situaciones que deberás manejar _array_ de objetos como los siguientes datos de `orders`.

```js
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]
```

#### Extrayendo datos necesarios

De un conjunto de datos a veces necesitas ciertos atributos para realizar una operación, extraer los nombres o cuantificar un suceso. El método `map` te permite extraer estos datos según los puedas utilizar.

```js
const totales = orders.map(order => order.total)

console.log(totales) // [ 60, 120, 180, 240 ]
```

#### Transformando objetos dentro de un _array_

De un conjunto de datos, de los cuales son objetos, a veces requieres añadir una propiedad nueva o eliminar una que no es necesaria. Si necesitas transformar objetos dentro de un _array_, debes tener en cuenta que **cada objeto tiene una referencia en memoria propia**. Por lo que si transformas un objeto, también lo harás en el original como en el nuevo, aun cuando el método `map` es inmutable.

Los parámetros por referencia los debes tener presente cuando manejes objetos y _arrays_.

```js
// Ejemplo donde transformas los objetos originales
const tarifas = orders.map(order => {
    order.tax = 0.19 // tax = impuesto
    return order
})

// Al ser una cópia que tiene un dato adicional no debería ser igual al original
tarifas[0] === orders[0] // true
tarifas[1] === orders[1] // true y no deberían ser iguales 
```

Una forma de evitar este comportamiento, es crear un nuevo objeto con el _[spread operator](https://platzi.com/clases/1815-ecmascript-6/25942-que-se-implemento-en-es9/)_ (operador de propagación).

```js
// Ejemplo donde no transformas los objetos originales
const tarifas = orders.map(order => {
    return {
        ...order,
        item: 0.19,
    }
})

tarifas[0] === orders[0] // false
tarifas[1] === orders[1] // false
```


### 7. Playground: calcula y agrega nuevas propiedades a un array

Tienes un array de objetos que representan datos de productos con los siguientes atributos:

- name
- price
- stock

Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, **sin decimales**.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de **$1000** el resultado de los "taxes" será **$190**, o para un producto con precio de **$656** el resultado de los "taxes" será **$124**.

Para solucionarlo vas a encontrar una función llamada `addNewAttr` que recibe un parámetro de entrada:

- array: Un array de objetos.

Dentro del cuerpo de la función `addNewAttr` debes escribir tu solución.

Ejemplo:

```js
Input:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]
```

```js
Output:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
    taxes: 190
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
    taxes: 380
  }
]
```

#### Solución para Platzi 

De la comunidad: 
```js
export function addNewAttr(array) {
	return array.map(item => ({ ...item, 'taxes': Math.trunc(item.price * .19) }))
}
```

`Math.trunc()` es una función incorporada en JavaScript que se utiliza para devolver la parte entera de un número al eliminar cualquier parte decimal. Es decir, la función elimina cualquier fracción decimal y devuelve el número entero más cercano a cero.

La función `Math.trunc()` toma un solo argumento, que es el número que se desea truncar. Si el argumento es un número entero, la función devuelve el mismo número. Si el argumento es un número decimal, la función elimina la parte decimal y devuelve el número entero resultante.

Por ejemplo, si queremos truncar el número `3.14159` utilizando `Math.trunc()`, el resultado será `3`. De manera similar, si queremos truncar el número `-7.5`, el resultado será `-7`.

Es importante tener en cuenta que `Math.trunc()` no redondea el número al entero más cercano, sino que simplemente elimina la parte decimal. Por lo tanto, si se desea redondear un número al entero más cercano, se debe utilizar una función como `Math.round()`.

La función `Math.trunc()` es compatible con todos los navegadores modernos, incluyendo Chrome, Firefox, Safari y Edge.

#### Solución

Personal:  
```js
const data = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2125,
        stock: 20
    }
]

function add_new_attribute(array){
    const data_taxes = array.map(element => {
        return {
            ...element,
            taxes: Math.floor(element.price * 0.19)
        }
    })
    console.log(data_taxes);
}

add_new_attribute(data)
/* const data_taxes = data.map(element => {
    return {
        ...element,
        taxex: element.price * 0.19,
    };
}) */

console.log(data);
/* console.log(data_taxes); */
```

```js
/* 
[
    { name: 'Product 1', price: 1000, stock: 10, taxes: 190 },
    { name: 'Product 2', price: 2125, stock: 20, taxes: 403 }
]
[
    { name: 'Product 1', price: 1000, stock: 10 },
    { name: 'Product 2', price: 2125, stock: 20 }
]
*/
```


### 8. Filter

El método `filter` consiste en crear un nuevo _array_ a partir de los elementos originales filtrados mediante una función _(callback)_ que indica la **condición a cumplir** y **es inmutable**. Si la condición se cumple, retorna el elemento completo.

Este proceso recibe **dos argumentos**:

- La función que itera y evalúa si cada elemento del _array_ si cumple con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto `this` en la función. Si se lo omite, será `undefined`. Recuerde que `this` en _arrow functions_ es el objeto global.

```js
let otherArray = array.filter(function(), thisArg)
```

La función, que recibe como argumento el método `filter`, utiliza **tres parámetros**:

- El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
- El **_array_ que está iterando**.

```js
const other = array.map(function(element, index, array))
```

#### Diferencia entre la estructura _for_ y el método _filter_

Los métodos de _arrays_ nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que filtre los elementos que tengan más de 6 letras en un _array_ de palabras.

Si empleamos la estructura `for`, necesitaremos un _array_ adicional vacío y usarlo con el método `push` para agregar los elementos que cumplan la condición. El método `push` es mutable.

```js
const words = ["spray", "elites", "limit", "apple", "exuberant"]
const newWords = []

for(let i=0; i< words.length; i++){
    const word = words[i]
    if (word.length >= 6){
        newWords.push(word)
    }
}

console.log(newWords) // [ 'elites', 'exuberant' ]
```

Con el método `filter`, solo debemos establecer la función que indique la condición a cumplir para cada elemento.

```js
const words = ["spray", "elites", "limit", "apple", "exuberant"]

const newWords = words.filter( function(word){
    if (word.length >=6){
      return true
    }else{
      return false
    }
})
// o 
const newWords = words.filter(word => word.length >= 6)

console.log(newWords) // [ 'elites', 'exuberant' ]
```

Recuerda siempre retornar un valor en la función `callback` del método.

#### Filtrar elementos a partir de la propiedad de un objeto

Con el método `filter` puedes filtrar los objetos de un _array_ a partir de una condición referente a la propiedad de cada elemento.

Teniendo en cuenta que el nuevo _array_ contendrá el **objeto completo** que haya cumplido con la condición especificada.

```js
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]
```

Por ejemplo, filtremos los elementos del _array_ `orders` cuyo total sea mayor a 150.

```js
const newOrders = orders.filter(order => order.total > 150)

console.log(newOrders) 
/* [
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true
  }
]
*/

```

### 9. Playground: retorna solo palabras de 4 letras o más

Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

Para solucionarlo vas a encontrar una función llamada `filterByLength` que recibe un parámetro de entrada:

- array: Un array de strigs con palabras

Dentro del cuerpo de la función `filterByLength` debes escribir tu solución.

Ejemplo 1:

```js
Input: ['amor', 'sol', 'piedra', 'día']
Output: [ 'amor', 'piedra' ]
```

Ejemplo 2:

```js
Input: ['rosa', 'gol', 'pez', 'día', 'gafas']
Output: [ 'rosa', 'gafas' ]
```

#### Solución para Platzi 

```js
export function filterByLength(array) {
  return array.filter(word => word.length >= 4)
}
```

#### Solución VSC

```js
const words = ['amor', 'sol', 'piedra', 'día'];

function filter_by_length(array){
    return array.filter(word => word.length >= 4)
}

filter_by_length(words);
```

### 10. Reduce

El método `reduce` **es inmutable** y consiste en retornar un solo valor del _array_ iterado a partir de una función _(callback)_ que indica de qué manera se itera cada elemento para reducirlo.

Este método recibe **dos argumentos**:

- La función que itera y reduce cada elemento del _array_. (obligatorio)
- El valor inicial que utilizará como argumento la función. Si no se especifica, en la primera iteración el valor inicial será el primer elemento del _array_ y no ejecuta la función.

```js
let reducedValue = array.reduce(function(), initialValue)
```

La función, que recibe como argumento el método `reduce`, utiliza **cuatro parámetros**:

- El **valor acumulado por la función** _(callback)_. En la primera iteración será igual al valor inicial del argumento del método. (obligatorio)
- El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente. (obligatorio)
- El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
- El **_array_ que está iterando**.

```js
let reducedValue = array.reduce(
    function(acumulator, element, index, array), 
    valorInicial
)
```

#### Diferencia entre la estructura _for_ y el método _reduce_

Los métodos de _arrays_ nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que calcule la suma de los cuadrados de los elementos de un _array_.

##### Uso de la estructura _for_ para una reducción

Si utilizamos la estructura `for`, necesitaremos una variable acumuladora para sumar los elementos en cada iteración.

```js
const numbers = [5,4,8,6,2]
let suma = 0

for(let i = 0; i<numbers.length; i++){
  const number = numbers[i]
  suma = suma + number**2
}

console.log(suma) // 145
```

##### Uso del método _reduce_ para una reducción

Con el método `reduce`, solo debemos establecer la función que indique la reducción para cada elemento.

```js
const numbers = [5,4,8,6,2]

const reducedValue = numbers.reduce((suma, number) => suma + number**2)

console.log(reducedValue) // 125
```

Observa que si **no especificamos el valor inicial** del método, entonces tomará el primer elemento sin ejecutar la función reductora.

|**Iteración**|**Reducción**|
|-------------|-------------|
|1            |5             |
|2            |5 + 4**2 = 21 |
|3                        |21 + 8**2 = 85    |
|4            |85 + 6**1 = 121|
|5                        |121 + 2**2 = 125  |

Por lo que debes **especificar el valor inicial** para solucionar este problema.

```js
const numbers = [5,4,8,6,2]

const reducedValue = numbers.reduce((suma, number) => (
    suma + number**2
), 0) // <- Valor inicial 0

console.log(reducedValue) // 145
```

De esta manera se ejecutará la función reductora adecuadamente.

|**Iteración**|**Reducción**|
|-------------|-------------|
|1            |**0** + 5**2 = 25 |
|2                        |25 + 4**2 = 41          |
|3            |21 + 8**2 = 105   |
|4                       |85 + 6**1 = 141         |
|5            |121 + 2**2 = 145  |

Si se ingresa otro valor inicial, por ejemplo `3`, entonces cambiaría la primera iteración.

|**Iteración**|**Reducción**|
|-------------|-------------|
|1            |**3** + 5**2 = 28|
|2                        |28 + 4**2 = 44         |
|…            |…                |
|5            |144 + 2**2 = 148 |

#### Ejemplo de la clase: 

```js
const totals = [1,2,3,4];

const rpta = totals.reduce((a,b) => (a + b),0);
console.log(rpta); // 10
```

![|350](https://i.ibb.co/tqxwj4V/10-reduce.png)

#### Datos:

[Tutorial Reduce con Array en JavaScript - Uso y malas prácticas ❌](https://www.youtube.com/watch?v=S1ZXSoAxEBg)


### 11. Reduce Reloaded

Ahora que ya sabes cómo funciona el método `reduce` de _arrays_, podemos utilizarlo para crear un objeto con la frecuencia de cada elemento de un _array_, es decir, cuántas veces aparece.

#### Objeto de frecuencias

Para obtener un objeto de frecuencias de cada elemento de un _array_ es necesario tener presente las siguientes consideraciones:

- Establecer un objeto vacío como valor inicial del método `reduce`.
- El objeto vacío también será nuestro acumulador.
- Verificar si el elemento ya existe en nuestro objeto de frecuencias.
- Si no existe, creamos la propiedad referente al elemento del _array_ y lo inicializamos en 1.
- Si ya existe solamente debemos aumentar en una unidad la propiedad de nuestro objeto referente al elemento del array.
- Finalmente, debes retornar el objeto dentro de la función del método `reduce`.

Por ejemplo, con el siguiente _array_ llamado `items`:

```js
const items = [5, 6, 7, 6, 5, 7, 7, 8]
```

El objeto de frecuencias será el siguiente:

```js
{
    5: 2,
    6: 2,
    7: 3,
    8: 1,
}
```

##### Utilizando el método reduce para crear un objeto de frecuencias

Una vez entendido la entrada y salida del algoritmo, entonces el código será utilizado de la siguiente manera:

```js
const frecuencias = items.reduce((objeto, elemento) => {
    if (!objeto[elemento]){
        objeto[elemento] = 1
    }else{
        objeto[elemento] = objeto[elemento] + 1
    }
    
    return objeto
}, {})
```

De esta manera obtendrás el objeto de frecuencias. Puedes utilizar este algoritmo para contar elementos de cualquier _array_.

#### Ejemplo de la clase: 

##### Primer ejemplo:  
```js
const items = [1, 3, 2, 3, 3, 1, 10];

const rpta = items.reduce((obj, item) => { // obj = {} 👈👀
    if(!obj[item]){
        obj[item] = 1;
    }else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {}); // obj = {} 👈👀
console.log(rpta);
// { '1': 2, '2': 1, '3': 3, '10': 1 }
```

Explicación:   
Se utiliza el método `reduce()` para contar el número de ocurrencias de cada elemento del arreglo `items`.

Como sabemos el método `reduce()` aplica una función reductora a cada elemento del arreglo, **devolviendo un único valor** que resulta de la acumulación de los valores previos. En este caso, el valor acumulado es **un objeto** de nombre **obj** que contiene la cantidad de veces que cada elemento aparece en el arreglo.

La función reductora recibe dos argumentos: el objeto acumulador y el elemento actual del arreglo. En cada iteración, la función comprueba si el elemento actual ya está en el objeto acumulador. Si no está, se agrega al objeto con un valor inicial de 1. Si ya está, se incrementa el valor correspondiente en 1.

Nota: Para comprender lo que ocurre en el if y else debemos saber lo siguiente, así que veamos el siguiente ejemplo:  

```js
const something = {
    1: `a`,
    2: `b`,
    3: `c`,
}

const another_thing = {
    a: 1,
    b: 2,
    c: 3,
}
// Obtenemos valores 
console.log(something[2]); //b
console.log(another_thing['c']); //3 
```

Cuando decimos `something[2]` o `another_thing['c']` estamos accediendo a sus values a través de sus respectivos key. 

Entonces:  
```js
if(!obj[item]){
        obj[item] = 1;
    }
```
En esta parte estamos diciendo que si el Objeto {} de nombre obj que al inicio está vacío no contiene ese key que es 1 { 1: } debes igualarlo a 1 quedando { 1: 1 } y así sucesivamente con el resto de números. 

Luego: 
```js
else {
	obj[item] = obj[item] + 1;
}
return obj;
```
Si llegara a existir ese key, ejemplo 1 en este caso { 1: 1 } ya existe así que debes sumarle un 1 por cada vez que se repita { 1: 2 }

Al final de la iteración, el **objeto acumulador obj** se devuelve como el resultado final de la reducción. En este caso, el objeto final contendrá las claves o keys correspondientes a cada elemento del arreglo `items`, y sus valores serán las cantidades de veces que aparecen en el arreglo.


##### Segundo ejemplo:  
```js
const data = [
    {
        customerName: 'Nicolas',
        level: 'low'
    },
    {
        customerName: 'Andrea',
        level: 'medium'
    },
    {
        customerName: 'Zulema',
        level: 'hight'
    },
    {
        customerName: 'Santiago',
        level: 'low'
    },
    {
        customerName: 'Valentina',
        level: 'medium'
    }
];

const rpta1 = data 
.map(item => item.level)
.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    }else {
        obj[item] = obj[item] + 1
    }
    return obj;
}, {});

console.log(rpta1);

// { low: 2, medium: 2, hight: 1 }
```

Otra forma:    
```js
const find = data.reduce((obj, item) => {
    obj[item.level] ? obj[item.level] += 1 : obj[item.level] = 1;
    return obj;
}, {});

console.log(find);
// { low: 2, medium: 2, hight: 1 }
```

#### Reto: 

```js
const number_list = [];
// Generamos numeros aleatorios
for (let i=0; i < 10; i++) {
    number_list.push(Math.floor(Math.random() * 10) + 1);
}

const find_ranges = number_list.reduce((range, item) => {
    if(item <= 2){
        range['1-2'] += 1;
    }else if(item <= 4){
        range['3-4'] += 1;
    }else if(item <= 6){
        range['5-6'] += 1;
    }else if(item <= 8){
        range['7-8'] += 1;
    }else if(item <= 10){
        range['9-10'] += 1;
    }
    
    return range;
}, {
    '1-2': 0,
    '3-4': 0,
    '5-6': 0,
    '7-8': 0,
    '9-10': 0
    }
);

console.log(number_list);
console.log(find_ranges);
```

### 12. Playground: calcula la suma total de elementos en un array

Tienes un array de números y tu reto es retornar la suma de todos los valores en él.

Para solucionarlo vas a encontrar una función llamada `calcSum` que recibe un parámetro de entrada:

- numbers: Un array de números

Dentro del cuerpo de la función `calcSum` debes escribir tu solución.

Ejemplo 1:

```js
Input: [1, 1, 1]
Ouput: 3
```

Ejemplo 2:

```js
Input: [2, 4, 8]
Output: [2, 4, 8]
```

Ejemplo 3:

```js
Input: []
Output: 0
```

#### Solución 

```js
function calc_sum(array){
    console.log(array.reduce((sum, item) => sum + item, 0)); 
}

calc_sum([1, 1, 1]); // 3
calc_sum([2, 4, 8]); // 14
calc_sum([]); // 0
```

## Métodos en JavaScript 

### 13. Some 

El método `some`es **inmutable** y consiste retornar un valor lógico verdadero **si existe al menos un elemento que cumpla la condición** establecida en la función _(callback)_.

Este método recibe **dos argumentos**:

- La función que itera y evalúa cada elemento del _array_ hasta que al menos uno cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto `this` en la función. Si se lo omite, será `undefined`. Recuerde que `this` en _arrow functions_ es el objeto global.

```js
array.some(function(), thisArg)
```

La función, que recibe como argumento el método `some`, utiliza **tres parámetros**:

- El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
- El **array que está iterando**.

```js
array.some(function(element, index, array))
```

#### Diferencia entre la estructura _for_ y el método _some_

Los métodos de _arrays_ nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un _array_ existe al menos un número par.

Si utilizamos la estructura `for`, necesitaremos una variable de tipo booleana con el valor `false` e iterar hasta que la condición se cumpla. La palabra reservada `break` rompe el ciclo repetitivo.

```js
const numbers = [1, 2, 3, 5]

let respuesta = false
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element % 2 === 0) {
        respuesta = true
        break
    }
}

console.log(respuesta) // true
```

Con el método `some` solo debemos establecer la función que indique la condición a cumplir para cada elemento.

```js
const numbers = [1, 2, 3, 5]

const respuesta = numbers.some(item => item % 2 === 0)
console.log(respuesta) // true
```

#### Ejemplo de la clase: 

##### Ejemplo 01

```js
const numbers = [1, 2, 3, 4];

const validate = numbers.some(item => item % 2 === 0);
console.log(validate); //true
```

##### Ejemplo 02

```js
const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Nicolas',
        total: 240,
        delivered: true,
    }
];

const order = orders.some(item => item.delivered);
console.log(order); // true
```

##### Ejemplo 03

Para este ejemplo debemos instalar una librería, esto con la finalidad de saber si dos fechas coinciden: 

Dentro del repositorio clonado:  
- npm i date-fns

Luego ingresamos a https://date-fns.org/ ingresamos en su documentación, buscamos `areIntervalsOverlapping` y copiamos `var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')` esto luego lo usaremos en el código mirar ejemplo: 

```js
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const new_appointment = {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping') 👈👀

const isOverlap = (new_date) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate},
            { start: new_date.startDate, end: new_date.endDate},
        )
    })
}

console.log(isOverlap(new_appointment));
```

### 14. Playground: ¿al menos 1 de los números es par?

Tu reto es retornar `true` si dentro de array de números al menos uno es un número par, para solucionarlo vas a encontrar una función llamada `checkArray` que recibe un parámetro de entrada:

- numbers: Un array de números

Dentro del cuerpo de la función `checkArray` debes escribir tu solución.

Ejemplo 1:

```js
Input: [1, 3, 5, 7, 10, 11]
Output: true
```

Ejemplo 2:

```js
Input: [1, 3, 5]
Output: false
```

Ejemplo 3:

```js
Input: []
Output: false
```

#### Solution 

```js
function check_array(numbers){
    return numbers.some(number => number % 2 === 0)
}

check_array([1, 3, 5, 7, 10, 11]); // true
check_array([1, 3, 5]); // false
check_array([]); // false
```


### 15. Every

El método `every`es **inmutable** y consiste retornar un valor lógico verdadero **si todos los elementos cumplen con la condición** establecida en la función _(callback)_.

Este método recibe **dos argumentos**:

- La función que itera y evalúa cada elemento del _array_ hasta que al menos uno cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto `this` en la función. Si se lo omite, será `undefined`. Recuerde que `this` en _arrow functions_ es el objeto global.

```js
array.every(function(), thisArg)
```

La función, que recibe como argumento el método `every`, utiliza **tres parámetros**:

- El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
- El **array que está iterando**.

```js
array.every(function(element, index, array))
```

#### Diferencia entre la estructura _for_ y el método _every_

Los métodos de _arrays_ nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un _array_, todos los elementos son menores o iguales a 40.

Si utilizamos la estructura `for`, necesitaremos una variable de tipo booleana con el valor `true` e iterar hasta que una condición contraria al enunciado se cumpla. La palabra reservada `break` rompe el ciclo repetitivo.

```js
const numbers = [1, 30, 41, 29, 10, 13]

let respuesta = true
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = false
        break
    }
}

console.log(respuesta) // false
```

Con el método `every`, solo debemos establecer la función que indique la condición a cumplir para cada elemento.

```js
const numbers = [1, 30, 39, 29, 10, 13]

const respuesta = numbers.every(item => item < 40)
console.log(respuesta) // true
```

#### Reto: 

```js
// Todos deben ser menores de 15
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

const result = team.every(item => item.age < 15)
console.log(result);
```

### 16. Playground: retorna un booleano si todos los elementos son pares

Tu reto es retornar `true` si dentro de array de números todos son pares, para solucionarlo vas a encontrar una función llamada `checkArray` que recibe un parámetro de entrada:

- numbers: Un array de números

Dentro del cuerpo de la función `checkArray` debes escribir tu solución.

Ejemplo 1:

```js
Input: [2, 4, 6, 8, 10]
Output: true
```

Ejemplo 2:

```js
Input: [1, 3, 5, 7, 10, 11]
Output: false
```

Ejemplo 3:

```js
Input: [1, 3, 5]
Output: false
```

Ejemplo 4:

```js
Input: []
Output: false
```


#### Solution 

```js
// Evaluar si todos son pares

function check_array(array) {
    return array.length > 0 
    ? array.every(index => index % 2 === 0)
    : false;
}

check_array([2, 4, 6, 8, 10]); //true
check_array([1, 3, 5, 7, 10, 11]);  //false
check_array([1, 3, 5]); //false
check_array([]); //false
```


### 17. Find y FindIndex

Los métodos `find` y `findIndex` consisten en encontrar el **primer elemento de un _array_ que cumpla con la condición especificada** en la función _(callback)_.

En el caso de `find` retornará el elemento completo, si cumple con la condición, caso contrario retornará `undefined`. El método `findIndex` retornará el índice del elemento encontrado, caso contrario retornará `-1`.

Estos procedimientos reciben **dos argumentos**:

- La función que itera y evalúa cada elemento del _array_ hasta encuentre uno que cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto `this` en la función. Si se lo omite, será `undefined`. Recuerde que `this` en _arrow functions_ es el objeto global.

```js
array.find(function(), thisArg)
array.findIndex(function(), thisArg)
```

La función, que recibe como argumento los métodos `find` y `findIndex`, utiliza **tres parámetros**:

- El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
- El **array que está iterando**.

```js
array.find(function(element, index, array))
array.findIndex(function(element, index, array))
```

#### Diferencia entre la estructura _for_ y los métodos _find_ y _findIndex_

Los métodos de _arrays_ nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que devuelva el primer elemento que sea mayor a 40 de un _array_.

Si utilizamos la estructura `for`, necesitaremos una variable con el valor `undefined` e iterar hasta que se cumpla la condición. La palabra reservada `break` rompe el ciclo repetitivo.

```js
const numbers = [1, 30, 41, 29, 50, 60]

let respuesta = undefined
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = element
        break
    }
}

console.log(respuesta) // 41
```

Si se necesita el índice, en lugar de una variable con el valor de `undefined`, debería estar un valor de `-1`. Y también cambiar el valor del elemento por el del índice del `for`.

Con los métodos `find` y `findIndex`, solo debemos establecer la función que indique la condición a cumplir para cada elemento.

```js
const numbers = [1, 30, 41, 29, 50, 60]

const respuesta = numbers.find(item => item >= 40)
const respuesta2 = numbers.findIndex(item => item >= 40)

console.log(respuesta) // 41
console.log(respuesta2) // 2
```

Recuerda que si los métodos `find` y `findIndex` no encuentran EL elemento, devolverán `undefined` y `-1`, respectivamente.

```js
const numbers = ["a", "b", "c"]

const respuesta = numbers.find(item => item >= 40)
const respuesta2 = numbers.findIndex(item => item >= 40)

console.log(respuesta) // undefined
console.log(respuesta2) // -1
```

### 18. Includes

El método `includes` determina si un _array_ o _string_ incluye un determinado elemento. Devuelve `true` o `false`, si existe o no respectivamente.

Este método recibe dos argumentos:

- El **elemento** a comparar.
- El **índice inicial** desde donde comparar hasta el último elemento.

#### Índices positivos y negativos

Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de **izquierda a derecha** del _array_.

```js
[0,1,2,3, ...., lenght-1]
```

Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del _array_, de **derecha a izquierda**.

```js
[-lenght, ...,  -3, -2, -1]
```

#### Diferencia entre la estructura _for_ y el método _includes_

Los métodos de _arrays_ nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un _array_ existe un elemento en específico.

Si utilizamos la estructura `for`, necesitaremos una variable de tipo booleana con el valor `false` e iterar hasta que encuentre el elemento específico. La palabra reservada `break` rompe el ciclo repetitivo.

```js
const pets = [ "cat", "dog", "bat" ]

let includeInArray = false
for (let i = 0; i < pets.length; i++){
    const item = pets[i]
    if (item === "cat"){
        includeInArray = true
        break
    }
}

console.log(includeInArray) // true
```

#### Ejemplos utilizando el método _includes_

El método `includes` se utiliza para _arrays_ y _strings_. El método es sensible a mayúsculas, minúsculas y espacios.

```js
//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true
```

```js
// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true
```

### 19. Playground: buscador de palabras con parámetros de búsqueda

Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado.

Para solucionarlo vas a encontrar una función llamada `filterByTerm` que recibe los siguientes parámetros de entrada:

- array: Un array de strigs con palabras
- term: Un string con el término a buscar

Dentro del cuerpo de la función `filterByTerm` debes escribir tu solución.

Ejemplo 1:

```js
Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"

Ouput:
["ana", "anastasia"]
```

Ejemplo 2:

```js
Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "xyz"

Output:
[]
```

#### Result 

```js
//  Retornar un array solo con las palabras que cumplan con la condición

function filter_by_term(array, term) {
    return array.filter(x => x.includes(term));
}

filter_by_term(["ana", "santi", "nico", "anastasia"], "ana");
//['ana', 'anastasia']
filter_by_term(["ana", "santi", "nico", "anastasia"], "xyz");
//[]
```

### 20. Join

El método `join` une los elementos del _array_, mediante una separación, y retorna un _string_. Si un elemento es `undefined` o `null`, se convierte en una cadena vacía.

Este procedimiento recibe un argumento:

- La **separación** de cada elemento del _array_ al unirlos.

```js
array.join(separación)
```

#### Diferencia entre la estructura _for_ y el método _join_

Los métodos de _arrays_ nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Si utilizamos la estructura `for` para recrear el método `join`, necesitaremos una variable con el valor acumuladora con un _string_ vacío y otra con el valor del separador. Se debe evaluar si existe elementos `null` o `undefined`, se lo puede realizar con el operador [nullish coalescing](https://platzi.com/clases/1815-ecmascript-6/39727-ecmascript-2020-caracteristicas-importantes/).

```js
const elements = ["hola", null, "como", "estas"]

let acumulator = ""
const separator = "/"
for (let i = 0; i<elements.length; i++){
  const element = elements[i] ?? ""
  if(i !== elements.length-1){
    acumulator += element + separator
  }else{
    acumulator += element
  }
}

console.log(acumulator) // 'hola//como/estas'
```

Con el método `join` solamente debemos establecer el separador de cada elemento como argumento.

```js
const elements = ["hola", null, "como", "estas"]

const resultado = elements.join("/")

console.log(resultado) // 'hola//como/estas'
```

#### Método split de strings

El método `split` de _strings_, es lo contrario que el método `join`, consiste en separar un _string_ en _substrings_, indicando un valor a separar. Este método retornará un _array_ de los elementos separados.

Este método recibe dos argumentos:

- El **separador** que especifica el conjunto de caracteres a separar en _substrings_.
- El **límite** de elementos separados a retornar.

```js
const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

cadena.split(" ") 
/* [ 'JavaScript', 'es', 'maravilloso,', 'con', 'JavaScript', 'puedo', 'crear', 'el', 'futuro', 'de', 'la', 'web.' ]
*/
cadena.split(", ") 
/* [ 
    'JavaScript es maravilloso', 
    'con JavaScript puedo crear el futuro de la web.' 
]*/
cadena.split("JavaScript")
/* [
    '', 
    ' es maravilloso, con ', 
    ' puedo crear el futuro de la web.' 
]*/
cadena.split(" ", 3) // [ 'JavaScript', 'es', 'maravilloso,' ]
```

#### Ejemplo de clase: 

```js
// join()
const elements = ["Fire", "Air", "Water"];

const result = elements.join(' ') //('--')
console.log(result); 
// Fire Air Water

// split()
const title = 'Lorem input xd infinito';
const split_array = title.split(' ')
console.log(split_array); 
// [ 'Lorem', 'input', 'xd', 'infinito' ]

// join() + toLowerCase(); volver minusculas
const transformation = split_array.join(' ').toLowerCase();
console.log(transformation);
// lorem input xd infinito
```

### 21. Playground: construye URLs a partir de strings

En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-).

Para solucionarlo vas a encontrar una función llamada `parseToURL` que recibe un parámetro de entrada:

- title: Un String con el título.

Dentro del cuerpo de la función `parseToURL` debes escribir tu solución.

Ejemplo 1:

```js
Input: "La forma de correr Python"
Output: "la-forma-de-correr-python"
```

Ejemplo 2:

```js
Input: "La API para nunca parar de aprender"
Output: "la-api-para-nunca-parar-de-aprender"
```

Ejemplo 3:

```js
Input: "Curso de arrays"
Output: "curso-de-arrays"
```

#### Solution 

```js
// Unir con -- y volver a minusculas
function parse_to_url(title) {
    return title.split(' ').join('-').toLowerCase()
}

parse_to_url("La forma de correr Python");
parse_to_url("La API para nunca parar de aprender");
parse_to_url("Curso de arrays");
```

## Otros apuntes  :poop:  
- [Notion](https://funny-tibia-d59.notion.site/Manipulaci-n-de-Arrays-en-JS-893d49287bc94bd289fac1a218a0ca83)