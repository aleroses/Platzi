# Curso Intermedio de Programación Orientada a Objetos en JavaScript

[Curso Intermedio de Programación Orientada a Objetos en JavaScript](https://platzi.com/cursos/javascript-poo-intermedio/)   

> Inicio: `19-12-2023`
> Finalización: ``

## **1.** ¿Qué hay dentro de los objetos en JavaScript?

Entenderemos cómo funcionan por dentro los objetos de JavaScript, además de cómo podríamos “hackear” a nuestro favor su sistema de prototipos para así sacarle el máximo beneficio y con ello aplicar a la programación orientada a objetos de manera óptima.

### Cómo puedes entender mejor el curso

Antes de aventurarte en este curso, te recomendamos tener los conocimientos básicos de los siguientes temas:

1. [Closures y scope](https://platzi.com/cursos/scope/): tener claro que dependiendo de donde escribas tu código, tu programa se puede comportar de manera distinta. No es lo mismo que implementes cierto código dentro o fuera de una función, un prototipo, una clase, etc.
2. [Fundamentos de POO](https://platzi.com/cursos/oop/): entender la programación orientada a objetos de manera general y agnóstica a lenguajes de programación.
3. [POO Básico en JavaScript](https://platzi.com/cursos/javascript-poo/): conocer las bases y pilares de la programación orientada a objetos, pero con la sintaxis de JavaScript.

Si previamente ya has decido aprender desarrollo web, te recomendamos seguir el orden las rutas de la [Escuela de Desarrollo Web](https://platzi.com/escuela/escuela-web/). Ahí te indicamos qué temas son recomendables que aprendas antes y qué otros después según el perfil profesional que desees desempeñar.

Empecemos conociendo sobre los [atributos y métodos estáticos en JavaScript](https://platzi.com/clases/2419-javascript-poo-intermedio/39809-static-atributos-y-metodos-estaticos-en-javascript/). 🤔

## **2.** Static: atributos y métodos estáticos en JavaScript

Si declaramos una propiedad o método de una clase como `static`, **podremos acceder a estos sin la necesidad de instanciar** dicha clase o prototipo.

Este tipo de atributos/métodos no son exclusivos de JavaScript, sino de casi todos los lenguajes que soportan la programación orientada a objetos.

### Declarando métodos y atributos `static` en JavaScript

De la siguiente manera podemos declarar atributos o métodos como `static` dentro de una clase (aplicable también a prototipos):

```js
class Patito { 
  static sonidito = "cuak!";

  static hacerSonidito() {
      return "cuak! x2";
  }
}

// Por fuera de clase Patito, podemos acceder a lo siguiente sin crear alguna instancia: 

// Al atributo `sonidito` 
console.log(Patito.sonidito) // cuak!

// Al método `hacerSonidito` 
console.log(Patito.hacerSonidito()); // cuak! x2
```

### Métodos `static` de la superclase Object

El superprototipo `Object` posee algunos métodos de tipo `static` y como todos los objetos que creamos en JavaScript heredan funcionalidad de `Object`, podemos acceder a una lista de funciones `static` que vendrán por defecto en nuestros objetos creados.

#### Obtener las llaves de un objeto

El método `keys` del superprototipo `Object` nos permite obtener el nombre de las llaves de un objeto en una lista:

``` js
const objetito = { 
  name: "Juanito", 
  email: "juanito@frijolitos.io", 
  age: 18, 
}

console.log( Object.keys(objetito) ); 
// [ 'name', 'email', 'age' ] 
```

Podríamos obtener lo mismo con el método `getOwnPropertyNames`:

```js
const objetito = { 
  name: "Juanito", 
  email: "juanito@frijolitos.io", 
  age: 18, 
}

console.log( Object.getOwnPropertyNames(objetito) );
// [ 'name', 'email', 'age' ]
```

#### Obtener los pares llave-valor de un objeto

Con el método `entries` de `Object` conseguimos tener en listas separadas los llave-valor declarados en un objeto. Estas listas serán almacenadas en otra lista:

```js
const objetito = { 
  name: "Juanito", 
  email: "juanito@frijolitos.io", 
  age: 18, 
}

console.log( Object.entries(objetito) );

/*
[
  0: [ 'name', 'Juanito' ],
  1: [ 'email', 'juanito@frijolitos.io' ],
  2: [ 'age', 18 ]
]
*/
```

#### Conocer el límite de acceso de un objeto

Existe un método `static` propio de `Object` que es muy interesante: el método `getOwnPropertyDescriptors`.

```js
const objetito = { 
  name: "Juanito", 
  email: "juanito@frijolitos.io", 
  age: 18, 
}

console.log( Object.getOwnPropertyDescriptors(objetito) ); 
```

Esto nos devuelve un objeto con los atributos de nuestro objeto inicial. Cada atributo contiene un objeto con el valor correspondiente a dicha propiedad, además de 3 propiedades adicionales: `writable`, `configurable` y `enumerable`.

```js
{ 
  name: { 
    value: 'Juanito', 
    writable: true, 
    enumerable: true, 
    configurable: true 
  }, 
  email: { 
    value: 'juanito@frijolitos.io', 
    writable: true, 
    enumerable: true, 
    configurable: true 
  }, 
  age: { 
    value: 18, 
    writable: true, 
    enumerable: true, 
    configurable: true 
  }
}
```

Estas 3 propiedades son usadas por JavaScript internamente para indicar el límite de acceso y modificación que tiene un objeto. Con esto podríamos utilizar ciertas técnicas para **manejar el encapsulamiento** (uno de los pilares de la POO) **de los objetos según lo que deseemos**.

Veamos más ejemplos de los [métodos estáticos del prototipo Object](https://platzi.com/clases/2419-javascript-poo-intermedio/40090-metodos-estaticos-del-prototipo-object-lectura/) y sobre el comportamiento que puede tener `this`. 👨‍💻

## **3.** Métodos estáticos del prototipo Object

Veamos unos ejemplos usando los métodos estáticos del prototipo `Object`. Además, podremos observar que `this` puede comportarse diferente según el contexto en donde se encuentre.

Antes de ello, en una carpeta, crea un archivo `main.js` el cual debe estar vinculado a un `index.html` creado en la misma ruta. Editaremos estos archivos en Visual Studio Code (puedes utilizar tu editor preferido) para realizar nuestras implementaciones y visualizaremos los _outputs_ en la consola del navegador.

### Comportamiento de `this` en métodos estáticos

Vamos a crear un objeto con los siguientes atributos:

```js
const juan = { 
  name: "Juanito", 
  age: 18, 
  approvedCourses: ["Curso 1"], 
  
  addCourse(newCourse) { 
  // `this` se usa para hacer referencia a la propiedad `approvedCourses` 
  // del objeto en cuestión. 
    this.approvedCourses.push(newCourse); 
  }
};
```

Ahora, utilicemos el método `entries` del prototipo `Object` pasándole como argumento nuestro objeto `juan`:

```js
console.log( Object.entries(juan) );

// En consola obtenemos un output similar a este: 
[
  [ 'name', 'Juanito' ], 
  [ 'age', 18 ], 
  [ 
    'approvedCourses', 
    [ 'Curso 1' ] 
  ], 
  [ 
    'addCourse', 
    [ Function: addCourse ] 
  ] 
]
```

Como el resultado es un `Array` que contiene a otros del mismo tipo, podemos acceder a sus índices y subíndices respectivamente. Por tanto, si accedemos al índice donde está la función `addCourse` y lo mostramos en consola, obtendríamos lo siguiente:

```js
console.log( Object.entries(juan)[3][1] );

// Mensaje en consola del navegador:_ f 
addCourse(newCourse) { this.approvedCourses.push(newCourse); } / 
```

Si podemos acceder a la función de esta manera, en principio pensaríamos que es posible añadir un nuevo curso ejecutando la función desde ahí; sin embargo, esto nos produce un error:

```jsx
Object.entries(juan)[3][1]("Curso 2");
```

![Inconvenientes con this en un objeto al ejecutar métodos estáticos](https://static.platzi.com/media/articlases/Images/inconvenientes-con-this-en-un-objeto-al-ejecutar-metodos-estaticos-curso-intermedio-de-programacion-orientada-a-objetos-en-javascript.png)

Imprimamos en consola qué es `this` en cada ejecución del método `addCourse`. Cambiemos la estructura del objeto `juan`:

```js
const juan = { 
  name: "Juanito", 
  age: 18, 
  approvedCourses: ["Curso 1"], 
  
  addCourse(newCourse) { 
    // A dónde apunta `this`: 
    console.log("This", this); 
    // Saber si el contexto de`this`tiene definida la propiedad`approvedCourses`: 
    console.log("This.approvedCourses", this.approvedCourses);

    this.approvedCourses.push(newCourse);
  }
};
```

Nuevamente, añadamos un curso accediendo al método `addCourse` desde la ejecución de `Object.entries`:

```js
Object.entries(juan)[3][1]('Curso 3');
```

![This apunta ahora al subarray creado por Object.entries y ya no hace referencia al objeto juan](https://static.platzi.com/media/articlases/Images/this-apunta-al-subarray-creado-por-object-entries-curso-intermedio-de-programacion-orientada-a-objetos-en-javascript.png)

En el navegador podremos observar que `this` apunta en realidad al subarray `["addCourse", function addCourse]` generado por `entries` y ya no al objeto `juan`. Es por ello que cuando la función `addCourse` intenta ejecutarse no encuentra la propiedad `approvedCourses` en el subarray `["addCourse", function addCourse]` que es donde ahora `this` hace referencia.

### Crear propiedades con accesibilidad editable

Existe un método estático del prototipo `Object` llamado `defineProperty` que no solo nos permite crear un atributo con su respectivo valor en un objeto, sino también nos da la posibilidad de definir las propiedades `writable`, `enumerable` y `configurable` a nuestro gusto. Estas propiedades son las que limitan el acceso y modificación en un objeto de JavaScript:

```js
const juan = {
  name: "Juanito", 
  age: 18, 
  approvedCourses: ["Curso 1"], 
  
  addCourse(newCourse) { 
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);

    this.approvedCourses.push(newCourse);
  }
};

Object.defineProperty(juan, "pruebaNASA", { 
  value: "extraterrestres", 
  writable: true, 
  enumerable: true, 
  configurable: true }); 
```

Veamos un poco más acerca de [Object.defineProperty](https://platzi.com/clases/2419-javascript-poo-intermedio/40091-metodos-estaticos-del-prototipo-object-modificacio/). 🤓💪

### Resumen: 

Al "descomponer" un objeto con `Object.entries` este produce una matriz de matrices con los atributos y métodos del objeto donde cada submatriz contiene el nombre de una propiedad del objeto y su valor correspondiente. Al realizar esta descomposición, se pierde el contexto original del objeto y se crea un nuevo ámbito léxico. Esto significa que las referencias al objeto original, como la palabra reservada `this`, ya no apuntarán al objeto original, sino que se referirán al contexto en el que se ejecuta el código que utiliza la descomposición del objeto. En otras palabras, `this` funcionará de manera diferente en el nuevo contexto generado por `Object.entries`.

El ámbito léxico cambia y por ende la palabra reservada this funciona en un contexto diferente al inicial.

```js
Object.defineProperty() El método estático 

Object.defineProperty() define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado. 

Sintaxis 
Object.defineProperty(obj, prop, descriptor) 

Parámetros:  
obj: El objeto sobre el cual se define la propiedad. 

prop: El nombre de la propiedad a ser definida o modificada. 

descriptor: Podremos definir las propiedades nativas del objeto 
``` 

## **4.** Object.defineProperty

El método `defineProperty` de la superclase `Object` no solo nos permite definir nuevos atributos en un objeto, sino también configurar las siguientes propiedades:

- **Configurable**: indica si el nuevo atributo puede ser eliminado.
- **Enumerable**: indica si el nuevo atributo podrá ser mostrado mediante funciones que listen las propiedades de un objeto. Hay excepciones en las que igual puede ser visualizado un atributo que tenga definido como `false` la propiedad `enumerable`.
- **Writable**: indica si el nuevo atributo puede ser modificado de valor.

Normalmente, estas propiedades por defecto son definidas como `true` por JavaScript, sin embargo, si generamos los atributos de un objeto con `Object.defineProperty`, podríamos definirlas a nuestro gusto.

```js
const juan = { 
  name: "Juanito", 
  age: 18, 
  approvedCourses: [ "Curso 1" ], 
  
  addCourse(newCourse) { 
    console.log("This", this); 
    console.log("This.approvedCourses", this.approvedCourses);
    
    this.approvedCourses.push(newCourse); 
  }
};

Object.defineProperty(juan, "nombreNuevaPropiedad", { 
  value: "JavaScript", // Valor que tendrá 
  enumerable: false, 
  writable: true, 
  configurable: false, 
  }
);
```

### Accesibilidad a los atributos de un objeto

Con `configurable`, `enumerable` y `writable` podemos limitar el acceso y modificación de los atributos de un objeto. Veamos su funcionamiento mediante un par de ejemplos:

#### Atributos que no puedan ser listados

Definimos `enumerable` como `false`. Este atributo recién creado no se podrá visualizar si por ejemplo intentamos listar las llaves del objeto usando `Object.keys`:

```js
// Definimos el objeto 
const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: [ "Curso 1" ],

  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
  
    this.approvedCourses.push(newCourse);
  }
};

Object.defineProperty(juan, "navigator", {
  // Creamos un nuevo atributo 
  value: "Chrome", 
  enumerable: false, 
  writable: true, 
  configurable: true, 
  }
);

// Imprimimos las llaves del objeto 
console.log( Object.keys(juan) ); 
// [ 'name', 'age', 'approvedCourses', 'addCourse' ]
```

Sin embargo, hay una excepción si usamos `Object.getOwnPropertyNames`:

```js 
// Definimos el objeto const 
juan = { 
  name: "Juanito", 
  age: 18, 
  approvedCourses: [ "Curso 1" ], 
  
  addCourse(newCourse) { 
    console.log("This", this); 
    console.log("This.approvedCourses", this.approvedCourses);
    
    this.approvedCourses.push(newCourse); 
    }
};

Object.defineProperty(juan, "navigator", { 
  // Creamos un nuevo atributo 
  value: "Chrome", 
  enumerable: false, // 👈👀 
  writable: true, 
  configurable: true, 
  }
);

// Imprimimos las propiedades del objeto 
console.log( Object.getOwnPropertyNames(juan) ); 

// [ 'name', 'age', 'approvedCourses', 'addCourse', 'navigator' ] 👈 Ya nos aparece
```

#### Atributos que no se puedan eliminar

Para ello definimos `configurable` como `false` en la nueva propiedad:

```js
// Definimos el objeto 
const juan = { 
  name: "Juanito", 
  age: 18, 
  approvedCourses: [ "Curso 1" ], 
  
  addCourse(newCourse) { 
    console.log("This", this); 
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse); 
  }
};

Object.defineProperty(juan, "terminal", { 
// Creamos un nuevo atributo 
  value: "WSL", 
  enumerable: true, 
  writable: true, 
  configurable: false, // 👈👀 
  }
);

// Mostramos las propiedades del objeto previamente... 
console.log( Object.keys(juan) ); 

// [ 'name', 'age', 'approvedCourses', 'addCourse', 'terminal' ]

delete juan.terminal; // Intentamos eliminar ❌

// Listamos los atributos para comprobar si se eliminó `terminal` 🤔
console.log( Object.keys(juan) ); 

// [ 'name', 'age', 'approvedCourses', 'addCourse', 'terminal' ] 👈 NO se eliminó
```

#### Atributos que no se puedan sobreescribir

Definimos `writable` como `false`:

```js
// Definimos el objeto 
const juan = { 
  name: "Juanito", 
  age: 18, 
  approvedCourses: [ "Curso 1" ], 
  
  addCourse(newCourse) { 
    console.log("This", this); 
    console.log("This.approvedCourses", this.approvedCourses);
    
    this.approvedCourses.push(newCourse); 
  }
};

// Creamos un nuevo atributo "editor"
Object.defineProperty(juan, "editor", { 
  value: "VSCode", 
  enumerable: true, 
  writable: false, 👈👀
  configurable: true, 
  }
);

console.log(juan.editor); // "VSCode"

juan.editor = "Atom"; // Intentamos sobreescribirlo

console.log(juan.editor); // "VSCode" 👈 No cambió
```

### Qué es Object.seal y Object.freeze

El método `seal` “sella” un determinado objeto. Es decir:

- Impide que nuevas propiedades sean agregadas.
- Define como `configurable: false` todos los atributos del objeto, con lo que impide que sean borradas.
- Los atributos sí pueden ser modificados, ya que la propiedad `writable` permanece asignado como `true`.

```js
// Definimos el objeto 
const juan = { 
  name: "Juanito", 
  age: 18, 
  approvedCourses: [ "Curso 1" ], 
  
  addCourse(newCourse) { 
    console.log("This", this); 
    console.log("This.approvedCourses", this.approvedCourses);
  
    this.approvedCourses.push(newCourse); 
  }
};

Object.seal(juan); // "Sellamos" el objeto

// Listamos para saber las llaves actuales: 
console.log(Object.keys(juan)); 
// [ 'name', 'age', 'approvedCourses', 'addCourse' ]

delete juan.age; // Intentamos eliminar un atributo del objeto

// Listamos para observar si hubo cambios: 
console.log(Object.keys(juan)); 
// [ 'name', 'age', 'approvedCourses', 'addCourse' ]
```

El método `freeze` “congela” un objeto. Es decir:

- Impide que se le agreguen nuevas propiedades.
- Impide que sean eliminadas propiedades ya existentes.
- Evita que sus propiedades `writable`, `enumerable` y `configurable` sean modificadas.

```js
// Definimos el objeto 
const juan = { 
  name: "Juanito", 
  age: 18, 
  approvedCourses: ["Curso 1"], 
  
  addCourse(newCourse) { 
    console.log("This", this); 
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse); 
  }
};

Object.freeze(juan); // "Congelamos" el objeto

// Listamos para saber las llaves actuales: 
console.log(Object.keys(juan)); 
// [ 'name', 'age', 'approvedCourses', 'addCourse' ]

delete juan.approvedCourses; 
// Intentamos eliminar un atributo del objeto 
juan.name = "Carlitos"; 
// Intentamos sobreescribir el valor de este atributo

// Listamos para observar si hubo cambios: 
console.log(Object.keys(juan)); 
// [ 'name', 'age', 'approvedCourses', 'addCourse' ] 

// Verificamos si cambió el valor de `name`: 
console.log(juan.name); // "Juanito"
```

Conozcamos ahora [cómo funciona la memoria en JavaScript](https://platzi.com/clases/2419-javascript-poo-intermedio/39811-como-funciona-la-memoria-en-javascript/). 🤔👨‍💻


## **5.** Cómo funciona la memoria en JavaScript

La memoria en JavaScript funciona de la siguiente manera:

- Las variables son referencias a un espacio en memoria.
- Los navegadores web usan dos tipos de memorias: Stack y Heap.
- La memoria Stack es muy rápida, pero sin tanto espacio. Aquí se guardan los valores primitivos (booleanos, strings, números…).
- La memoria Heap es más lenta, pero permite guardar enormes cantidades de información _(son como los tornados: grandes, lentos y desordenados)_. En esta memoria guardamos los valores de los objetos

### Cómo es el almacenamiento de objetos en JavaScript

Cuando creamos variables en JavaScript (aplicable a casi cualquier otro lenguaje), ejecutamos 2 procesos:

1. El primero es la **declaración**, es decir, le decimos a JS que vamos a crear una nueva variable con un nombre en específico.
    
    ```js
    let name;
    ```
    
2. Lo segundo es la **inicialización**: le indicamos a JavaScript que esa variable que generamos con ese nombre en específico tiene un valor.
    
    ```js
    // Declaración 
    let name; 
    // Inicialización
    name = "pepito"; 
    
    let age = 28; 
    ```
    

El nombre de las variables y el valor de estas se almacenan en la memoria **stack,** excepto cuando trabajamos con objetos.

![Memoria Stack en JS](https://static.platzi.com/media/articlases/Images/memoria-stack-en-js-curso-intermedio-de-programacion-orientada-a-objetos-en-javascript.jpg)

En memoria, el nombre de las variables apuntan a sus respectivos valores, sin embargo, cuando el valor a almacenar es un objeto, apuntan a otro apuntador (_pointer_ o puntero) y este es el que en realidad apuntará al objeto en sí el cual se encontrará almacenado en la memoria **heap**.

![Los objetos son almacenados en la memoria HEAP de JavaScript](https://static.platzi.com/media/articlases/Images/los-objetos-son-almacenados-en-la-memoria-heap-de-javascript-curso-intermedio-de-programacion-orientada-a-objetos-en-javascript.jpg)

### Cuál es la forma incorrecta de copiar objetos

Si intentamos copiar un objeto en otra variable de esta manera:

```js
// ORIGINAL
const juanita = { 
  age: 15, 
  email: "juanita@juanita.com" 
}

// COPIA 
const nath = juanita; 
```

Cuando intentemos editar los valores de los atributos del objeto copia, los atributos del objeto original se verán igualmente afectados:

```js
// Objeto original antes 
console.log(juanita); 
// { age: 15, email: 'juanita@juanita.com' }

// Editamos sólo el objeto copia 
nath.age = 20; 
nath.email = "nath@email.com" 
console.log(nath); 
// { age: 20, email: 'nath@email.com' }

// Objeto original después de editar el objeto copia:
console.log(juanita); 
// { age: 20, email: 'nath@email.com' } 
```

Lo anterior sucede porque cuando copiamos un objeto lo que en realidad estamos copiando es su referencia en la memoria, en otras palabras copiamos a su apuntador o **_pointer_**. Por ello, al modificar los valores de las propiedades de la copia de un objeto también afectamos al original.

![Cuando copiamos directamente un objeto en otra variable, en realidad copiamos su pointer o apuntador (JS)](https://static.platzi.com/media/articlases/Images/cuando-copiamos-directamente-un-objeto-en-otra-variable-en-realidad-copiamos-su-pointer-o-apuntador-js-curso-intermedio-de-programacion-orientada-a-objetos-en-javascript.jpg)

Entonces, ¿Cómo solucionamos esto? Tenemos 2 formas de hacerlo en JavaScript: el shallow copy y el [deep copy](https://platzi.com/clases/2419-javascript-poo-intermedio/39815-deep-copy-con-recursividad/). Veamos a continuación [cómo aplicar el primero](https://platzi.com/clases/2419-javascript-poo-intermedio/39812-shallow-copy-en-javascript/). 🤔💪

Información relevante:

- [[js-engine-v8+nav#Memory Heap (Montón)]]
- [Apuntes Curso engine v8](https://github.com/aleroses/Platzi/blob/master/DW/2-intermedio/10.js-engine-v8/js-engine-v8%2Bnav.md#7-memory-heap)

## **6.** Shallow copy en JavaScript

El Shallow Copy (copia superficial) se refiere a la forma de **crear un nuevo objeto a partir de las propiedades de otro**. Esta copia solo se hace a un nivel alto, no se hace con objetos dentro de objetos (nested objects), lo que provoca que la modificación de una de sus propiedades, modifique el objeto principal.

### Shallow copy con el bucle for...in

Podemos copiar las propiedades de un objeto en otro haciendo uso del bucle `for in`:

```js
const obj1 = { 
  a: "a", 
  b: "b" 
};

const obj2 = {};

for (propiedad in obj1) { 
  // propiedad es a luego b
  obj2[propiedad] = obj1[propiedad]; 
};
```

Si deseáramos modificar los valores de los atributos del objeto copia, el objeto original no se ve afectado:

```js
obj2.a = "AAA"; 
obj2.b = "BBB";

console.log(obj2); 
// { a: 'AAA', b: 'BBB' } 
console.log(obj1); 
// { a: 'a', b: 'b' } 
```

Pero, si hay objetos dentro del objeto original (nested objects) el objeto original sí se vería afectado ante las modificaciones hechas en dichos sub objetos:

```js
const obj1 = {   
  a: "a", 
  b: "b", 
  c: { 
    d: "d", 
    e: "e" 
  };
};

const obj2 = {}

for (propiedad in obj1) { 
  obj2[propiedad] = obj1[propiedad]; 
};

obj2.a = "atributo a"; 
obj2.b = "atributo b"; 
obj2.c.d = "objeto dentro de otro";

console.log(obj2); 
console.log(obj1);

// _> Mensaje en consola 
{ 
  a: 'atributo a', 
  b: 'atributo b', 
  c: { 
    d: 'objeto dentro de otro', 
    e: 'e' 
  }
} 
{ 
  a: 'a', 
  b: 'b', 
  c: { 
    d: 'objeto dentro de otro', 
    e: 'e' 
  }
} 
```

### Shallow copy con Object.assign

El `Object.assign` nos permite realizar el mismo shallow copy (copia superficial) que podemos hacer con el bucle `for`.

```js
const obj1 = {
  a: "a", 
  b: "b", 
  c: { 
    d: "d", 
    e: "e" 
  }
}

// Con esto podemos crear copias exactas 
const obj3 = Object.assign({}, obj1);

console.log(obj1); 
// { a: 'a', b: 'b', c: { d: 'd', e: 'e' } } 

console.log(obj3); 
// { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }

// Sin embargo, si hacemos modificaciones en los nested objects... 
obj1.c.d = "COPIA DESDE EL OBJ1";

// se verán afectados los demás objetos copiados 
console.log(obj3); 
// { a: 'a', b: 'b', c: { d: 'COPIA DESDE EL OBJ1', e: 'e' } } 
```

Aun así, tendremos los mismos problemas si el objeto original posee **nested objects**.

### Object.create

Nos permite crear un objeto que tenga como parte de su prototipo los atributos de otro objeto:

```js
const obj1 = { a: "a", b: "b", c: { d: "d", e: "e" } }

const obj4 = Object.create(obj1); 
```

![Object.create para que un objeto tenga como prototipo los atributos de otro](https://static.platzi.com/media/articlases/Images/object-create-curso-intermedio-de-programacion-orientada-a-objetos-en-javascript.jpg)

Hasta ahora hemos podido resolver parcialmente el problema de copiar objetos, ya que aún tenemos inconvenientes cuando los objetos originales tienen anidados otros objetos. Tratemos de resolver esto con [JSON.parse y JSON.stringify](https://platzi.com/clases/2419-javascript-poo-intermedio/39813-jsonparse-y-jsonstringify/). 👨‍💻

### Datos sobre for

Existen dos for para objetos:

for (objeto in objetos) {} >> IN es para iterar sus propiedades  
for (objeto on objetos) {} >> ON es para iterar sus valores

## **7.** Qué es JSON.parse y JSON.stringify

Con `JSON.stringify` podemos convertir un objeto en un `string` y lo inverso con `JSON.parse`. Podríamos **usar ambos métodos para lograr copiar un objeto en otro**.

```js
const obj1 = {
  a: 'a', 
  b: 'b', 
  c: { 
    d: 'd', 
    e: 'e', 
  }
}

// Lo convertimos en String y el resultado lo asignamos en un variable: 
const stringifiedComplexObj = JSON.stringify(obj1); 
// Lo convertimos a objeto y lo asignamos al nuevo objeto: 
const obj2 = JSON.parse(stringifiedComplexObj);

console.log(obj1); 
console.log(obj2);

// Si hacemos modificaciones en un de los objetos... 
obj2.c.d = "nested object"; 
obj2.c.e = "nested object"; 
// El objeto original no se vería afectado 
console.log(obj1); 
console.log(obj2); 
```

De esta forma, aunque el objeto original tenga objetos anidados, es posible crear un nuevo objeto con las mismas propiedades del original sin que este se vea afectado ante modificaciones en los objetos copias.

### Problemas para copiar un objeto con métodos

Con lo anterior pareciera que finalmente habíamos logrado dar solución a los convenientes que nos daba copiar objetos en otros. Sin embargo, tanto `JSON.parse` como `JSON.stringify` no saben trabajar con métodos, lo cual sería un nuevo inconveniente:

```js
const obj1 = {   
  a: 'a', 
  b: 'b', 
  c: { 
    d: 'd', 
    e: 'e', 
  }, 
  editA() { 
    this.a = 'Abcd' 
  }
};

const stringifiedComplexObj = JSON.stringify(obj1);

console.log(stringifiedComplexObj); 
// "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"

const obj2 = JSON.parse(stringifiedComplexObj);

console.log(obj2); 
// {a: "a", b: "b", c: {d: "d", e: "e"}} 
```

Para ello necesitamos utilizar Deep Copy para poder obtener una correcta copia de objetos. Antes de entrar en este concepto, debemos conocer [qué es recursividad](https://platzi.com/clases/2419-javascript-poo-intermedio/39814-que-es-recursividad/). ¡Vamos a ello! 🤔👩‍💻

### Qué más necesitas saber acerca de JSON.stringify()

El método `JSON.stringify()` convierte un objeto o valor de JavaScript en una cadena JSON, reemplazando opcionalmente valores si se especifica una función de reemplazo u opcionalmente incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo.

#### Descripción

- Los objetos Boolean, Number y String se convierten a sus valores primitivos, de acuerdo con la conversión semántica tradicional.
- Si durante la conversión se encuentra un undefined, una Function, o un Symbol se omite (cuando se encuentra en un objeto) o se censura a null (cuando se encuentra en un array). JSON.stringify() puede devolver undefined cuando se pasan valores “puros” como JSON.stringify(function(){}) o JSON.stringify(undefined).
- Todas las propiedades que utilicen Symbol en los nombres de la clave se ignoran por completo, incluso si utilizan una función replacer.
- Las instancias de Date implementan la función toJSON() devolviendo una cadena de texto (igual que date.toISOString()). Por lo que son tratadas como strings.
- Los números Infinity y NaN, así como el valor null, se consideran null. El resto de instancias de Object (incluyendo Map, Set, WeakMap, y WeakSet) solo tendrán serializadas sus propiedades enumerables.

`JSON.stringify ()` convierte un valor en notación JSON que lo representa.

### Qué más necesitas saber acerca de JSON.parse()

El método `JSON.parse()` analiza una cadena de texto (string) como JSON, transformando opcionalmente el valor producido por el análisis.

#### ¿Por qué JSON.parse(JSON.stringify()) es una mala práctica para clonar un objeto en JavaScript?

- Puedes perder tipos de datos.
- JavaScript no te avisará cuando pierdas algún tipo de dato al usar JSON.stringify().
- Convierte tipos de datos no soportados en soportados, como infinity y NaN en null
- Los tipos de datos Date serán parseados como strings, no como Date
- No es tan rápido y eficiente.

## **8.** Qué es recursividad

La recursividad es **cuando una función se llama a sí misma** y esta genera una nueva ejecución de la función. Esto sucede reiteradamente hasta que cumpla o no con cierta validación que nosotros declaremos para que deje de llamarse a sí misma en algún punto.

Normalmente, pensaríamos que este tipo de problemas lo podemos resolver con condicionales y/o bucles. Veamos el siguiente ejemplo:

```js
// PROBLEMA: 
// Deseamos imprimir una serie de números desde el 0 hasta n números. En este caso 
// hasta el 4 let numerito = 0; 
// Declaramos desde el número que deseamos partir.

// Usamos un bucle while para repetir este proceso hasta que se cumpla la condición: 
while(numerito < 5) { console.log(numerito); numerito++; } 
```

Así resolveríamos este problema con recursividad:

```js
// Función recursiva: 
function recursiva(numerito) { 
// Recive un número console.log(numerito); 
// Imprimimos en consola el número if (numerito < 5) { 
// Evalua si es menor a 5 
// Llamamos nuevamente a nuestra función enviandole el número siguiente: 
return recursiva(numerito + 1); } else { 
// La función deja de llamarse a sí misma: 
return 5; 
} }
```

### **¿Por qué escribir programas recursivos?**

- Son más cercanos a la descripción matemática.
- Generalmente más fáciles de analizar
- Se adaptan mejor a las estructuras de datos recursivas.
- Los algoritmos recursivos ofrecen soluciones estructuradas, modulares y elegantemente simples.

#### ¿Cuándo SÍ es factible de utilizar recursividad?

- Para simplificar el código.
- Cuando la estructura de datos es recursiva. Ejemplo: árboles.

#### ¿Cuándo NO **es factible utilizar recursividad?**

- Cuando los métodos usen arreglos largos.
- Cuando el método cambia de manera impredecible de campos.
- Cuando las iteraciones sean la mejor opción

Empleemos ahora la recursividad para poder aplicar el [Deep Copy en JavaScript](https://platzi.com/clases/2419-javascript-poo-intermedio/39815-deep-copy-con-recursividad/) y así copiar de manera óptima nuestros objetos. 🤓💪

## Otros apuntes: 

[POO intermedio](https://fantasy-snail-94c.notion.site/Clases-del-Curso-Intermedio-de-Programaci-n-Orientada-a-Objetos-en-JavaScript-9bb99983619e407c9a07b1173c5b0a5d)