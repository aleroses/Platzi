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
  
  // A dónde a punta `this`: 
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

Object.defineProperty(juan, "pruebaNASA", { value: "extraterrestres", writable: true, enumerable: true, configurable: true }); 
```

Veamos un poco más acerca de [Object.defineProperty](https://platzi.com/clases/2419-javascript-poo-intermedio/40091-metodos-estaticos-del-prototipo-object-modificacio/). 🤓💪

## Otros apuntes: 

[POO intermedio](https://fantasy-snail-94c.notion.site/Clases-del-Curso-Intermedio-de-Programaci-n-Orientada-a-Objetos-en-JavaScript-9bb99983619e407c9a07b1173c5b0a5d)