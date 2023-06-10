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
), 0) // <- Valor inicial

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

```js
const items = [1, 3, 2, 3, 3, 1, 10];
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

const rpta = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    }else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rpta);
// { '1': 2, '2': 1, '3': 3, '10': 1 }

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

## Otros apuntes  :poop:  
- [Notion](https://funny-tibia-d59.notion.site/Manipulaci-n-de-Arrays-en-JS-893d49287bc94bd289fac1a218a0ca83)