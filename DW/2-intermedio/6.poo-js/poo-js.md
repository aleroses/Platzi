# Curso Básico de Programación Orientada a Objetos con JavaScript

## JavaScript Orientado a Objetos

### **1.** JavaScript: orientado a objetos, basado en prototipos

JavaScript tiene características que lo hacen parecer roto, pero tienen un motivo.

#### Objetos vs. objetos vs. objetos

-   En JS casi todo es un objeto
-   Para crear algoritmos, funcionalidades debemos crear objetos
-   Podemos crear objetos de diferentes formas:
    1.  Abriendo llaves `{}`
    2.  `Object.create`
    3.  Podemos crear objetos a través de funciones
        1.  Podemos utilizar o no la palabra `new`
-   Al utilizar la palabra `new` ya no estaríamos creando objetos literales sino instancias de prototipos
-   Para crear prototipos podemos implementar tanto la sintaxis de prototipos como la sintaxis de clases

Normalmente, los lenguajes de programación son orientados a objetos y basados en clases. JS es orientado a objetos y basado en prototipos. 


### **2.** Qué es programación orientada a objetos

#### Paradigma

Es esa teoría que suministra la base y el modelo para resolver problemas. Hay que tener en cuenta que ningún paradigma es necesariamente mejor que otro. Solo hay que saber cual aplicar para la lógica de tu negocio. 

Algunos paradigmas: 
1.  Estructurado
2.  Orientado a objetos
3.  Funcional

#### ¿Qué es la POO?

Es un paradigma que permite una forma de abordar tus problemas abstrayendo los elementos en forma de objetos.

##### Algunas de sus ventajas?

Todo nuevo paradigma surge para resolver nuevas necesidades que los viejos paradigmas no nos permiten de manera sencilla (siendo justos, es para hacernos la vida mas sencilla).  

Dentro de sus ventajas tenemos:   
-   El orden: Al separar nuestros elementos en Objetos será mas fácil mantener nuestro código y hacerlo escalable.
-   Reutilización del código: DRY (Don’t Repeat Yourself), Nuestras piezas de código no deberían de repetirse ya que esto nos dificultará la evolución futura (y su mantenimiento).

#### ¿Qué Elementos podemos encontrar en la POO?

Hasta ahora hemos escuchado de estos 4 ( y los seguirás escuchando muy a menudo):

-   Clases: Son bloques de código que nos permiten definir métodos y atributos (base) para nuestros objetos.
-   Atributos: Son las características de nuestros objetos (Altura, peso, Si es estudiante (o no)
-   Métodos: Son funciones que guardamos en nuestros objetos para actualizar la información de forma segura.



### **3.** Bonus: fútbol y programación orientada a objetos

#### ¿Qué es un objeto?

Podemos tomar como ejemplo objetos de la vida real, por ejemplo un lápiz, una pluma o un borrador. Cada uno de ellos tendrá datos únicos de los cuales podremos construir sus clases

En JavaScript, los objetos se pueden crear utilizando la sintaxis de objeto literal, que es un conjunto de pares clave-valor, donde la clave es el nombre de la propiedad y el valor puede ser de cualquier tipo de datos, incluyendo otros objetos. También se pueden definir objetos utilizando la sintaxis de la función constructora y la clase.

```js
// Objeto persona con propiedades nombre, edad y dirección
let persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle 123",
    ciudad: "Ciudad de México",
    pais: "México"
  }
};

// Objeto coche con propiedades marca, modelo y año
let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2021
};

// Objeto estudiante con propiedades nombre, edad y lista de materias
let estudiante = {
  nombre: "Maria",
  edad: 20,
  materias: ["Matemáticas", "Física", "Programación"]
];
```

En estos ejemplos, cada objeto tiene diferentes propiedades con diferentes valores. El objeto persona tiene una propiedad "dirección" que es a su vez otro objeto con sus propias propiedades. El objeto estudiante tiene una propiedad "materias" que es una lista de cadenas.

También es posible crear objetos utilizando la sintaxis de la función constructora o la clase en JavaScript. Por ejemplo:

```js
// Definición de clase Coche  
class Coche {  
	constructor(marca, modelo, año) {  
		this.marca = marca;  
		this.modelo = modelo;  
		this.año = año;  
	}

	// Método 
	conducir() {  
		console.log(`Conduciendo un ${this.marca} ${this.modelo}`);  
	}  
}

// Creación de objeto coche con la clase Coche  
let coche = new Coche("Ford", "Mustang", 2022);  
coche.conducir(); // Imprime "Conduciendo un Ford Mustang"
```

En este ejemplo, se define una clase Coche con un constructor que establece las propiedades de marca, modelo y año. Además, se define un método "conducir" que imprime un mensaje con la marca y modelo del coche. Luego, se crea un objeto coche utilizando la clase Coche y se llama al método "conducir" en el objeto resultante.

En resumen, los objetos en JavaScript son colecciones de propiedades que pueden contener valores de diferentes tipos, incluyendo otros objetos. Se pueden crear utilizando la sintaxis de objeto literal, la función constructora o la clase. Los objetos en JavaScript son muy flexibles y pueden ser dinámicamente modificados durante la ejecución del programa, lo que los hace muy útiles para la programación en JavaScript.

- **Las clases** es la forma en que se va a obtener la información de cada objetos, a estos se les llama atributos. A partir de estas clases podemos crear objetos, a esto se le llama Instanciar de una clase.

-   **Atributos**: Son las propiedades que tendrán cada uno de los objetos creados con nuestras clases, por ejemplo en la clase lápiz tiene como propiedades o atributos un color, textura, tamaño, forma de la punta, etc. Para el siguiente ejemplo tomamos una clase Usuario y le ponemos como atributo “nombre”

-   **Métodos**: Son simples funciones que existen dentro de la clase que determinan las acciones, por ejemplo en el caso del borrador tiene una función de borrar, para el lápiz tiene la función de escribir al igual que la pluma.


#### En la POO hay 4 pilares que debemos comprender

-   **Herencia**: Crear nuevas clases con características similares a partir de otras. Con la herencia puedes crear una clase que sea hijo o una copia de otra clase, al heredar una clase se tiene todos los métodos y atributos de la clase padre, podrás modificarlas solo en caso de ser necesario. Funciona como una jerarquía de lo mas general a lo mas especifico.
-   **Encapsulamiento**: Esconder datos que solo pueden ser accedidos por la clase. Esta significa restringir u ocultar el acceso a los datos dentro de la misma clase al “mundo exterior”, usualmente solo se modifican en la misma clase. Existen tres clases de encapsulamiento.
	1.  Encapsulamiento público:  
	    Los miembros públicos de una clase son accesibles desde cualquier parte del programa, incluyendo clases y objetos externos. Los métodos y propiedades públicas se definen con la palabra clave "public" y se utilizan para interactuar con el objeto desde fuera de la clase.
	1.  Encapsulamiento protegido:  
	    Los miembros protegidos de una clase son accesibles solo desde la clase y sus subclases. Los métodos y propiedades protegidos se definen con la palabra clave "protected" y se utilizan para proporcionar una interfaz interna para la clase y sus subclases.
	3.  Encapsulamiento privado:  
	    Los miembros privados de una clase son accesibles solo desde la propia clase. Los métodos y propiedades privados se definen con la palabra clave "private" y se utilizan para ocultar los detalles internos de la clase y protegerla de modificaciones externas.
-   **Abstracción**: La abstracción son los datos necesarios de una clase, por ejemplo si se elabora el menu de un restaurante, es necesario el nombre del platillo y precio, otros datos como el color favorito del chef no son necesarios. Esto debe ir de lo mas general a lo especifico
-   **Polimorfismo**: Es la habilidad de tener diferentes comportamientos o formas basados en que subclase se esta utilizando, relacionado a la herencia. 

## Objetos, clases y prototipos 

### **4.** Qué es un objeto en JavaScript 

> Objetos literales !== instancias POO

Un objeto en JavaScript es una colección de propiedades. Una propiedad en JavaScript es simplemente una asociación entre un nombre (llave) y un valor. Cuando este valor es una función, podemos decir que se trata de un método.  
   
Los objetos en JavaScript, al ser un lenguaje basado en prototipos, heredan propiedades de otros objetos por medio del prototipo.  
   
Podemos construir objetos de dos formas: De la “nada” (o también llamado objeto literal) o _clonando_ un objeto ya existente. En la mayoría de lenguajes que soportan prototipos existe una clase raíz (por lo general llamada Object) que tiene las propiedades mínimas necesarias para la creación de objetos.

Un objeto en JavaScript es una instancia del prototipo Object que es creado de forma “nativa”.

#### Objeto literal

Los _objetos literales_ se distinguen de los _objetos_ de la POO porque no son instancias de un prototipo creado por el desarrollador.  

Sin embargo los objetos literales son instancias del prototipo `Object` creado por defecto en JavaScript. Esto significa que heredan todas las propiedades y métodos de `Object`, como `toString`, `hasOwnProperty`, entre otros.

Por ejemplo, si se crea un objeto literal como este:

```js
const persona = {
  nombre: "Diego",
  edad: 30,
  ciudad: "Madrid"
};
```

Entonces, `persona` es una instancia del prototipo `Object`. Esto se puede comprobar utilizando el método `isPrototypeOf` de `Object`:

```js
console.log(Object.prototype.isPrototypeOf(persona)); // true
```

También se puede acceder a las propiedades y métodos heredados de `Object` en el objeto literal:

```js
console.log(persona.hasOwnProperty("nombre")); // true
console.log(persona.toString()); // "[object Object]"
```

Es importante tener en cuenta que los objetos literales no son la única forma de crear objetos en JavaScript, y que también se pueden crear objetos utilizando otros métodos, como la función constructora o la clase.

#### Prototipo

Un prototipo es una estructura de código a partir de la cual se crean objetos, ya que guarda los atributos y métodos que luego podrán ser heredados por sus instancias.  

Podemos pensarlo como un “molde” de objetos.  

```js
function Student() {
	this.name = 'Nombre';
	this.age = '18';
	this.points = '750';
}

const Juanita = new Student();
```

En JavaScript, cada objeto tiene un enlace interno a otro objeto llamado prototipo, que actúa como un modelo para el objeto. El prototipo es un objeto que contiene propiedades y métodos que son compartidos por todas las instancias de un objeto.

Cuando se accede a una propiedad o método en un objeto, JavaScript primero busca la propiedad o método en el objeto en sí mismo. Si no se encuentra allí, JavaScript busca en su prototipo. Si la propiedad o método no se encuentra en el prototipo, JavaScript buscará en el prototipo del prototipo y así sucesivamente, hasta que se llegue al final de la cadena de prototipos, que en JavaScript es el objeto `Object.prototype`.

El uso de prototipos es la base de la herencia en JavaScript. Cuando se crea un objeto, se puede especificar su prototipo utilizando la propiedad especial `prototype`. Por ejemplo, se puede crear una función constructora para un objeto `Persona` y especificar su prototipo de la siguiente manera:

```js
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre}`);
};

const persona1 = new Persona('Juan', 30);
const persona2 = new Persona('Maria', 25);

persona1.saludar(); // Hola, mi nombre es Juan
persona2.saludar(); // Hola, mi nombre es Maria
```

En este ejemplo, la función constructora `Persona` tiene un prototipo que contiene el método `saludar`. Cuando se crea una nueva instancia de `Persona` utilizando el operador `new`, la instancia hereda el prototipo de `Persona`, lo que significa que también hereda el método `saludar`.

El uso de prototipos en JavaScript permite la creación de objetos con propiedades y métodos compartidos, lo que ayuda a la eficiencia y simplicidad del código. Además, permite la creación de estructuras de herencia complejas y dinámicas.

#### Objeto

Los objetos son estructuras de datos formadas por métodos y atributos, los cuales hereda de su prototipo padre.  

De modo que los objetos son instancias de ese prototipo, particularmente cuando dicho prototipo fue creado por el desarrollador (en caso contrario se llaman objetos literales). 

##### Objeto en POO vs Objeto literal 

En JavaScript, un objeto de POO (Programación Orientada a Objetos) es un objeto que se crea a partir de una función constructora o de una clase. La función constructora o la clase define la estructura y el comportamiento del objeto, y se utilizan para crear nuevas instancias del objeto.

Por ejemplo, aquí hay un objeto creado a partir de una función constructora:

```js
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const persona1 = new Persona("Juan", 30);
```

En este ejemplo, `Persona` es una función constructora que se utiliza para crear objetos `Persona`. La función constructora define las propiedades `nombre` y `edad` del objeto, y se utiliza la palabra clave `new` para crear una nueva instancia del objeto `Persona`.

Por otro lado, un objeto literal en JavaScript es un objeto que se define directamente en el código fuente utilizando la sintaxis de llaves `{}`. El objeto literal no tiene una estructura definida previamente, sino que se crean propiedades y valores en el momento de la definición del objeto.

Por ejemplo, aquí hay un objeto literal:

```js
const persona2 = {
  nombre: "Maria",
  edad: 25
};
```

En este ejemplo, `persona2` es un objeto literal que tiene dos propiedades: `nombre` y `edad`.

La principal diferencia entre un objeto de POO y un objeto literal es que los objetos de POO se crean a partir de una función constructora o de una clase, lo que permite definir la estructura y el comportamiento del objeto de antemano. Por otro lado, los objetos literales se definen directamente en el código fuente y no tienen una estructura definida previamente.

Otra diferencia importante es que los objetos de POO pueden tener métodos y propiedades que se comparten entre todas las instancias del objeto, mientras que los objetos literales no pueden tener métodos o propiedades compartidas entre instancias.

En general, los objetos de POO se utilizan para crear objetos más complejos y estructurados, mientras que los objetos literales se utilizan para objetos más simples y sin estructura predefinida. Sin embargo, ambos tipos de objetos son importantes en JavaScript y se utilizan ampliamente en el desarrollo de aplicaciones web y en otros entornos de programación.

#### Atributos

Dentro de los objetos se pueden guardar atributos para guardar en ellos la información la información que se les asocia. Así, toda la información del objeto se guarda en sí mismo.  

Por ejemplo, si tenemos una clase "Coche", los atributos podrían ser "marca", "modelo", "color", "año", "kilometraje", etc. Cada coche que se cree a partir de esta clase tendrá sus propios valores para estos atributos.

```js
class Coche {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }
}
```

Los atributos pueden ser públicos o privados. Los atributos públicos son accesibles desde cualquier parte del programa y pueden ser modificados directamente. Los atributos privados solo son accesibles desde dentro de la clase y solo pueden ser modificados mediante métodos públicos de la misma.

#### Métodos

Dentro de los objetos también pueden guardarse métodos, los cuales son funciones que, entre otras cosas, permiten actualizar la información guardada en los atributos de forma segura.  

En la programación orientada a objetos (POO), un método es una función que está asociada a una clase y que define el comportamiento de los objetos creados a partir de ella. Un método puede acceder y manipular los atributos de un objeto y puede realizar cualquier operación que se requiera dentro del contexto de la clase.

En JavaScript, los métodos se definen dentro de una clase utilizando la sintaxis de funciones. Por ejemplo:

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
```

En este ejemplo, la clase "Persona" tiene un método llamado "saludar" que muestra por consola un saludo personalizado con el nombre y la edad de la persona.

Para llamar a un método de un objeto en JavaScript, se utiliza la notación de punto. Por ejemplo:

```js
const persona1 = new Persona("Juan", 30);
persona1.saludar(); // muestra "Hola, mi nombre es Juan y tengo 30 años." por consola
```

Aquí, creamos un objeto "persona1" a partir de la clase "Persona" y luego llamamos al método "saludar" utilizando la notación de punto.

Otro ejemplo de método en JavaScript sería el siguiente:

```js
class Rectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.base + this.altura);
  }
}
```

En este ejemplo, la clase "Rectangulo" tiene dos métodos: "calcularArea" y "calcularPerimetro". El método "calcularArea" devuelve el área del rectángulo (multiplicando la base por la altura), y el método "calcularPerimetro" devuelve el perímetro del rectángulo (sumando el doble de la base y la altura).

Para llamar a estos métodos, podemos crear un objeto "rectangulo1" a partir de la clase "Rectangulo" y luego llamar a los métodos utilizando la notación de punto:

```js
const rectangulo1 = new Rectangulo(5, 3);
console.log(rectangulo1.calcularArea()); // muestra 15 por consola
console.log(rectangulo1.calcularPerimetro()); // muestra 16 por consola
```

Aquí, creamos un objeto "rectangulo1" con base 5 y altura 3, y luego llamamos a los métodos "calcularArea" y "calularPerimetro" utilizando la notación de punto. El resultado de la llamada a cada método se muestra por consola.

### Atributo `__proto__`

Es el nombre que se le da al atributo donde se guardan los métodos que las estructuras de datos tienen por defecto en JavaScript.  

El atributo `__proto__` se hereda a partir de los prototipo por defecto de JavaScript para cada estructura de datos en particular, por ejemplo de los prototipos `Object` y `Array`.  

El atributo `__proto__` también se hereda a los objetos, ya que éstos son a la vez instancias de algún prototipo creado por el desarrollador y del prototipo `Object`.

En JavaScript, todos los objetos tienen un atributo interno llamado `__proto__`, que es una referencia al prototipo del objeto. El prototipo es un objeto que se utiliza como plantilla para crear otros objetos. Cuando un objeto se crea a partir de una función constructora o utilizando la sintaxis de clase, su prototipo se establece automáticamente como el prototipo de la función constructora o clase.

El atributo `__proto__` se utiliza para acceder al prototipo de un objeto y para establecer la cadena de prototipos de un objeto. Esto permite que los objetos hereden propiedades y métodos de su prototipo y de los prototipos de sus ancestros.

Por ejemplo, considera la siguiente función constructora:

```js
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
}
```

En este ejemplo, la función constructora "Persona" define dos atributos: "nombre" y "edad", y un método "saludar" que muestra un saludo personalizado por consola.

El prototipo de la función constructora "Persona" se define utilizando la propiedad "prototype". En este caso, el prototipo tiene un método "saludar" que se hereda por todos los objetos creados a partir de la función constructora.

Si creamos un objeto "persona1" a partir de la función constructora "Persona", podemos acceder a su prototipo utilizando el atributo `__proto__`. Por ejemplo:

```js
const persona1 = new Persona("Juan", 30);
console.log(persona1.__proto__); // muestra el objeto prototipo de la función constructora "Persona"
```

En este ejemplo, utilizamos el atributo `__proto__` para acceder al objeto prototipo de la función constructora "Persona".

También podemos utilizar el atributo `__proto__` para establecer la cadena de prototipos de un objeto. Por ejemplo:

```js
const persona2 = {nombre: "María", edad: 25};
persona2.__proto__ = Persona.prototype;
persona2.saludar(); // muestra "Hola, mi nombre es María y tengo 25 años." por consola
```

En este ejemplo, creamos un objeto "persona2" con dos atributos: "nombre" y "edad". Luego, establecemos su prototipo utilizando el atributo `__proto__` y lo igualamos al prototipo de la función constructora "Persona". De esta forma, el objeto "persona2" hereda el método "saludar" del prototipo de la función constructora "Persona".

Es importante tener en cuenta que el uso del atributo `__proto__` no se recomienda en la programación moderna de JavaScript, ya que puede tener un impacto en el rendimiento y puede llevar a problemas de compatibilidad entre navegadores. En su lugar, se recomienda utilizar métodos más modernos y estandarizados para trabajar con prototipos, como `Object.create()` o `Object.setPrototypeOf()`.

#### Instancia 

En JavaScript, una instancia es un objeto creado a partir de una función constructora o utilizando la sintaxis de clase. Una instancia es una versión única y específica de un objeto que se crea con valores específicos para sus atributos.

Por ejemplo, considera la siguiente función constructora:

```js
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
}
```

En este ejemplo, la función constructora "Persona" define dos atributos: "nombre" y "edad", y un método "saludar" que muestra un saludo personalizado por consola.

Si creamos un objeto "persona1" a partir de la función constructora "Persona", estamos creando una instancia de la clase "Persona". Por ejemplo:

```js
const persona1 = new Persona("Juan", 30);
```

En este ejemplo, creamos un objeto "persona1" utilizando la palabra clave "new" y pasando dos argumentos a la función constructora "Persona". Esto crea una instancia de la clase "Persona" con los valores "Juan" y 30 para los atributos "nombre" y "edad", respectivamente.

Cada instancia creada a partir de una función constructora o utilizando la sintaxis de clase es un objeto único y específico con sus propios valores para los atributos. Por ejemplo, si creamos otra instancia "persona2" con valores diferentes, esta será un objeto distinto con sus propios valores de atributos:

```js
const persona2 = new Persona("María", 25);
```

En este caso, creamos otra instancia de la clase "Persona" con los valores "María" y 25 para los atributos "nombre" y "edad", respectivamente. Aunque ambas instancias son de la misma clase y tienen el mismo método "saludar", son objetos distintos con valores de atributos diferentes.

En resumen, una instancia en JavaScript es un objeto creado a partir de una función constructora o utilizando la sintaxis de clase. Cada instancia es un objeto único y específico con sus propios valores para los atributos y puede tener su propio comportamiento mediante la definición de sus propios métodos.


### **5.** Objetos literales y prototipos en JavaScript

#### Código de la clase  

```js
// Objeto literal
const natalia = {
    name: "Natalia",
    age: 20,
    approved_courses: [
        "Course 01",
        "Course 02",
    ],

    // Metodo función
    approved_course(new_course){
        //approved_course: function()
        this.approved_courses.push(new_course);
        // this se refiere al objeto natalia
    },
};

// Ver en consola
natalia;
// Modificar objeto literal 
natalia.name = "Mariana";
natalia.age += 1;

// Hacer que Natalia apruebe otro curso
// Metodo 01: Ver en consola
natalia.approved_courses.push("Course 03");
natalia

// Metodo 02: Ver en consola 
natalia.approved_course
natalia.approved_course('Course 04');
natalia
```

```js
// Prototipo
function  Student(name, age, approved_courses){
    this.name = name;
    this.age = age;
    this.approved_courses = approved_courses;
    // No es buena practica
    // this.approved_course = function(new_course){
    //     this.approved_courses.push(new_course);
    // }
}

// Crear método 
Student.prototype.approved_course = function(new_course){
    this.approved_courses.push(new_course);
}

const michael = new Student(
    "Michael Connor",
    15,
    [
        'Course 01',
        'Course 02',
    ],
);

// En la consola 
michael
// Si revisamos __proto__ vemos el método que creamos (approved_course)
michael.approved_course('Course 03')
```

#### 🎉👨‍👩‍👧‍👧 JavaScript visualizado: herencia prototípica

¿Alguna vez se preguntó por qué podemos usar métodos integrados como `.length`, `.split()`, `.join()`en nuestras cadenas, arreglos u objetos? Nunca los especificamos explícitamente, ¿de dónde vienen? Ahora no digas "Es JavaScript jajaja nadie lo sabe, es mágico 🧚🏻‍♂️", en realidad se debe a algo llamado _herencia prototípica_ . ¡Es bastante impresionante, y lo usas más a menudo de lo que crees!

A menudo tenemos que crear muchos objetos del mismo tipo. ¡Digamos que tenemos un sitio web donde la gente puede buscar perros!

¡Para cada perro, necesitamos un objeto que represente a ese perro! 🐕 En lugar de escribir un nuevo objeto cada vez, usaré una función constructora (sé lo que estás pensando, ¡cubriré las clases de ES6 más adelante!) a partir de la cual podemos crear instancias de Dog usando la palabra clave ( **esta** publicación `new`es Sin embargo, no se trata realmente de explicar las funciones del constructor, así que no hablaré demasiado sobre eso).

¡Cada perro tiene un nombre, una raza, un color y una función para ladrar!

```js
function Dog(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.bark = function(){
        return 'Woof!'
    };
};
```

Cuando creamos la `Dog`función constructora, no fue el único objeto que creamos. ¡Automáticamente, también creamos otro objeto, llamado _prototipo_ ! De forma predeterminada, este objeto contiene una propiedad _constructora_`Dog` , que en este caso es simplemente una referencia a la función constructora original.

![](https://i.postimg.cc/B6Mz6NS6/05-1-herencia.gif)

La `prototype`propiedad en la función constructora Dog no es enumerable, lo que significa que no aparece cuando intentamos acceder a las propiedades de los objetos. ¡Pero todavía está allí!

Bien, entonces... ¿Por qué tenemos este objeto _de propiedad ?_ Primero, creemos algunos perros que queremos mostrar. Para mantenerlo simple, los llamaré `dog1`y `dog2`. `dog1`es Daisy, una linda labrador negra! `dog2`es Jack, el intrépido Jack Russell blanco 😎

```js
const dog1 = new Dog(
    "Daisy",
    "Labrador",
    "Black",
);

const dog2 = new Dog(
    "Jack",
    "Jack Russell",
    "White",
);
```

¡Iniciemos sesión `dog1`en la consola y expandamos sus propiedades!

![](https://i.postimg.cc/PrtRDgpq/05-2-herencia.gif)

Vemos las propiedades que agregamos, como `name`, `breed`, `color`y `bark`.. pero ¡qué `__proto__`propiedad! No es enumerable, lo que significa que normalmente no aparece cuando tratamos de obtener las propiedades del objeto. ¡Vamos a expandirlo! 😃

![](https://i.postimg.cc/QN5F7PLv/05-3-herencia.gif)

Woah se ve exactamente como el `Dog.prototype`objeto! Bueno, adivina qué, `__proto__`es una referencia al `Dog.prototype`objeto. De esto se trata **la herencia de prototipos** : ¡cada instancia del constructor tiene acceso al prototipo del constructor! 🤯

![](https://i.postimg.cc/BvgdRJ1R/05-4-herencia.gif)

Entonces, ¿por qué es genial? A veces tenemos propiedades que comparten todas las instancias. Por ejemplo, la `bark`función en este caso: es exactamente la misma para cada instancia, ¿por qué crear una nueva función cada vez que creamos un nuevo perro, consumiendo memoria cada vez? ¡En cambio, podemos agregarlo al `Dog.prototype`objeto! 🥳

![](https://i.postimg.cc/Gmc2Dmr5/05-5-herencia.gif)

Cada vez que intentamos acceder a una propiedad en la instancia, el motor primero busca localmente para ver si la propiedad está definida en el objeto mismo. Sin embargo, si no puede encontrar la propiedad a la que estamos tratando de acceder, ¡el motor **recorre la cadena de prototipos** a través de la `__proto__`propiedad!

![](https://i.postimg.cc/8zKv40pD/05-6-herencia.gif)

¡Este es solo un paso, pero puede contener varios pasos! Si siguió adelante, es posible que haya notado que no incluí una propiedad cuando expandí el `__proto__`objeto que muestra `Dog.prototype`. `Dog.prototype`en sí mismo es un objeto, lo que significa que en realidad es una instancia del `Object`constructor. Eso significa que `Dog.prototype`también contiene una `__proto__`propiedad, que es una referencia a `Object.prototype`!

![](https://i.postimg.cc/gkKtzmDD/05-7-herencia.gif)

Finalmente, tenemos una respuesta sobre el origen de todos los métodos incorporados: ¡están en la cadena de prototipos! 😃

Por ejemplo el `.toString()`método. ¿Está definido localmente en el `dog1`objeto? Hmm no ... ¿Está definido en el objeto `dog1.__proto__`al que se hace referencia, a saber `Dog.prototype`? ¡También no! ¿Está definido en el objeto `Dog.prototype.__proto__`al que hace referencia, a saber `Object.prototype`? ¡Sí! 🙌🏼

![](https://i.postimg.cc/FK3633vy/05-8-herencia.gif)

Ahora, acabamos de usar funciones constructoras ( `function Dog() { ... }`), que aún es JavaScript válido. Sin embargo, ES6 en realidad introdujo una sintaxis más sencilla para las funciones de construcción y para trabajar con prototipos: ¡clases!

> Las clases son solo **azúcar sintáctica** para funciones constructoras. ¡Todo sigue funcionando de la misma manera!

Escribimos clases con la `class`palabra clave. ¡Una clase tiene una `constructor`función, que es básicamente la función constructora que escribimos en la sintaxis de ES5! Las propiedades que queremos añadir al prototipo, se definen en el propio cuerpo de la clase.

![](https://i.postimg.cc/zXL1td15/05-9-herencia.gif)

Otra gran cosa acerca de las clases es que podemos **extender** fácilmente otras clases.

¡Diga que queremos mostrar varios perros de la misma raza, a saber, chihuahuas! Un chihuahua es (de alguna manera... 😐) todavía un perro. Para simplificar este ejemplo, solo pasaré la `name`propiedad a la clase Perro por ahora en lugar de `name`, `breed`y `color`. Pero estos chihuahuas también pueden hacer algo especial, tienen un pequeño ladrido. En vez de decir `Woof!`, un chihuahua también puede decir `Small woof!`🐕

En una clase extendida, podemos acceder al constructor de la clase principal usando la `super`palabra clave. Los argumentos que espera el constructor de la clase padre, tenemos que pasarlos a `super`: `name`en este caso.

```js
class Dog {
    constructor(name){
        this.name = name
    }

    bark(){
        return 'Woof!'
    }
}

class Chihuahua extends Dog {
    constructor(name){
        super(name)
    }

    smallBark(){
        return 'Small woof!'
    }
}

const myPet = new Chihuahua('Max');
```

`myPet`tiene acceso tanto a `Chihuahua.prototype`and `Dog.prototype`(y automáticamente `Object.prototype`, ya que `Dog.prototype`es un objeto).

![](https://i.postimg.cc/SQW7p47x/05-10-herencia.gif)

Como `Chihuahua.prototype`tiene la `smallBark`función, y `Dog.prototype`tiene la `bark`función, podemos acceder a ambos `smallBark`y `bark`en `myPet`!

Ahora, como puede imaginar, la cadena de prototipos no continúa para siempre. Eventualmente hay un objeto cuyo prototipo es igual a `null`: ¡el `Object.prototype`objeto en este caso! Si intentamos acceder a una propiedad que no se encuentra localmente o en la cadena de prototipos, `undefined`se devuelve.

![](https://i.postimg.cc/yd76g055/05-11-herencia.gif)

---

Aunque aquí expliqué todo con funciones y clases de constructor, otra forma de agregar prototipos a objetos es con el `Object.create`método. Con este método, creamos un nuevo objeto y podemos especificar exactamente cuál debería ser el prototipo de ese objeto. 💪🏼

Hacemos esto, pasando un _objeto existente_ como argumento al `Object.create`método. ¡Ese objeto es el prototipo del objeto que creamos!

```js
const person = {
    name: 'Lydia',
    age: 21
}

const me = Object.create(person);
```

Vamos a registrar el `me`objeto que acabamos de crear.

![](https://i.postimg.cc/TP1MZQzT/05-12-herencia.gif)

No agregamos ninguna propiedad al objeto, ¡simplemente solo contiene la propiedad `me`no enumerable ! `__proto__`La `__proto__`propiedad contiene una referencia al objeto que definimos como prototipo: el `person`objeto, que tiene una `name`y una `age`propiedad. Dado que el `person`objeto es un objeto, el valor de la `__proto__`propiedad en el `person`objeto es `Object.prototype`(pero para que sea un poco más fácil de leer, ¡no expandí esa propiedad en el gif!)

---

Con suerte, ahora comprende por qué la herencia de prototipos es una característica tan importante en el maravilloso mundo de JavaScript. Si tiene preguntas, ¡no dude en comunicarse conmigo! 😊

[Ver articulo](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)

### **6.** Clases en JavaScript 

Una clase en JavaScript no es más que una sintaxis en algunos casos más cómoda para crear prototipos. Está basada en otros lenguajes los cuales tienen programación orientada a objetos mediante clases.

```js
// Prototipos con la sintaxis de clases  
class Student_two{
    constructor(name, age, approved_courses){
        this.name = name;
        this.age = age;
        this.approved_courses = approved_courses;
    }

    approved_course(new_course){
        this.approved_courses.push(new_course);
    }
}

const george = new Student_two(
    'George Reece',
    28,
    [
        "Course 01",
        "Course 02",
    ],
);

// En la consola 
Student 
Student_two
george
george.approved_course('Course 03');
george.approved_courses
```

```js
// Prototipos con la sintaxis de clases con { }
class Student_three{
    constructor({
        name,
        age,
        approved_courses = [],
        email,
        social_media,
    }){
        this.name = name;
        this.age = age;
        this.approved_courses = approved_courses;
    }

    approved_course(new_course){
        this.approved_courses.push(new_course);
    }
}

const alexander = new Student_three({
    name: 'Alexander',
    age: 28,
    /* approved_courses: [
        'Course 01',
        'Course 02'
    ] */
});

// En la consola 
alexander
```

Usando { } el orden de los argumentos ingresados no importa, incluso pueden estar vacíos. 

### Patrón RORO

El patrón RORO (Resource Ownership and Initialization) es una técnica utilizada en JavaScript para gestionar la propiedad y la inicialización de recursos, como conexiones de bases de datos, archivos o cualquier otro recurso que requiera una inicialización o liberación adecuada.

El patrón RORO se basa en el principio de que quien inicializa un recurso es responsable de liberarlo cuando ya no se necesite. Esto ayuda a evitar fugas de memoria y otros problemas relacionados con la gestión de recursos.

A continuación, te mostraré un ejemplo sencillo de cómo se utiliza el patrón RORO en JavaScript:

```javascript
function Resource() {
  // Inicialización del recurso
  console.log("Recurso inicializado");

  // Método para liberar el recurso
  this.release = function() {
    console.log("Recurso liberado");
  };
}

function doSomethingWithResource() {
  // Crear una instancia del recurso
  var resource = new Resource();

  // Realizar operaciones con el recurso
  console.log("Haciendo algo con el recurso...");

  // Liberar el recurso cuando ya no se necesite
  resource.release();
}

// Ejemplo de uso
doSomethingWithResource();
```

En el ejemplo anterior, la función `Resource` se encarga de inicializar el recurso y proporciona un método `release` para liberarlo. La función `doSomethingWithResource` crea una instancia del recurso, realiza alguna operación y luego lo libera llamando al método `release` del recurso.

Al seguir el patrón RORO, garantizas que el recurso se inicializa correctamente y se libera adecuadamente cuando ya no se necesita, evitando posibles problemas de gestión de recursos.

Es importante tener en cuenta que el patrón RORO es solo una convención y no una característica incorporada en JavaScript. Depende de los desarrolladores seguir esta convención para gestionar adecuadamente los recursos en sus aplicaciones.

#### Tips 
`[[Prototype]]` en lugar de `__proto__`   
La capacidad de visualizar `[[Prototype]]` en lugar de `__proto__` en la consola del navegador depende de la implementación específica del motor JavaScript utilizado por el navegador y puede variar entre las diferentes versiones que este use.

Atajos de VSC    
- **Mover una línea hacia arriba y abajo**  
	- alt + flecha hacia arriba (o flecha hacia abajo)
- **Copiar una línea hacia arriba o abajo**  
	- alt + shift + flecha hacia arriba (o flecha hacia abajo)
- **Selección multiple**  
	- alt + ctrl + flecha (arriba o abajo)
- **Borrar una línea completa a la vez**  
	- shift + supr


### **7.** Ventajas de la programación orientada a objetos

Trabajar con objetos literales no es practico cuando se tiene mucha información. Imagina el siguiente ejemplo pero para miles de usuarios, nadie quiere perder tanto tiempo haciendo esto. 

```js
// Esto no es escalable 
const juan_one = {
    name: 'Juan Despues de Cristo',
    username: 'JuanDC',
    points: 100,
    social_media: {
        twitter: 'juan_dc',
        instagram: 'juan_dc',
        facebook: undefined,
    },
    approved_courses: [
        'Courso 01',
        'Course 02',
    ],
    learning_pat: [
        {
            name: 'School 01',
            courses: [
                'Course 01',
                'Course 02',
                'Course 03',
            ],
        },
        {
            name: 'School 02',

        },
    ]
};
```

Para esto llega la POO. 

```js
// Prototipo para Schools
// Crear una clase para escuelas (Learnin_path()) y una instancia para cada escuela (escuela_dw)

class School{
    constructor({
        path,
        courses = [],
    }){
        this.path = path;
        this.courses = courses;
    };

    launch_of_new_course(new_release){
        this.courses.push(new_release);
    }
};

// Prototipo para los Students 
class Student_four{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approved_courses = [],
        learning_paths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.social_media = {
            // twitter: twitter
            twitter,
            instagram,
            facebook,
        };
        this.approved_courses = approved_courses;
        this.learning_paths = learning_paths;
    }

    approved_course(new_course){
        this.approved_courses.push(new_course)
    }
}


const school_01 = new School({
    path: 'Web development',
    courses: [
        'Course 01',
        'Course 02',
        'Course 03',
        'Course 04',
        'Course 05',
    ]
});

const school_02 = new School({
    path: 'Video games development',
    courses: [
        'Course 01',
        'Course 02',
        'Course 03',
        'Course 04',
        'Course 05',
    ]
});

const school_03 = new School({
    path: 'Artificial intelligence',
    courses: [
        'Course 01',
        'Course 02',
        'Course 03',
        'Course 04',
        'Course 05',
    ]
});

school_01.launch_of_new_course('Course 06');
school_01.launch_of_new_course('Course 07');

school_03.launch_of_new_course('Course 06');
school_03.launch_of_new_course('Course 07');
school_03.launch_of_new_course('Course 08');


const simone = new Student_four({
    name: 'Simone Simons',
    username: 'si_mones',
    twitter: 'si_mone_s',
    learning_paths: [
        school_01,
        school_02
    ],
});

const alissa = new Student_four({
    name: 'Alissa White-Gluz',
    username: 'alissa_wg',
    email: 'alissa_wg@mail.com',
    instagram: 'alissa_wg',
    learning_paths: [
        school_01,
        school_03,
    ],
});

simone.approved_course('Course 01');
simone.approved_course('Course 03');

alissa.approved_course('Course 02');
alissa.approved_course('Course 05');
```

Si dentro de un objeto la clave valor tienen el mismo nombre, solo basta con escribirlo una vez.

### **8.** Playgrounds: Manejo de clases

Dadas la siguientes clases:

Clase Banda con las propiedades:

- nombre - string
- géneros - Array
- integrantes - Array

Crea una clase llamada "Integrante" con las propiedades:

- nombre - string
- instrumento - string

Escribe la lógica para agregar integrantes a la clase Banda en la función agregar Integrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Batería".

La solución debería tener un input y output como los siguientes:

Input

```js
  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)
  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
```

Output

```js
{
  "nombre":"Los Jacks",
  "generos":["rock","pop","post-punk"],
  "integrantes":[
    {"nombre":"Erik","instrumento":"Guitarra"},
    {"nombre":"Paul","instrumento":"Bateria"}
  ]}
```

### Solución 01: Hecho para Platzi 

```js
class Banda {
    constructor({
        nombre,
        generos = [],
    }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        const drums_found = this.integrantes.find(x => x.instrumento == 'Bateria');

        if (integranteNuevo.instrumento == 'Bateria' && drums_found) {
        console.log('Ya existe baterista');
        } else {
        this.integrantes.push(integranteNuevo);
        }
    }
}

//Crear clase Integrante
class Integrante {
    constructor({ nombre, instrumento }) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
}

const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
}
const banda = new Banda(data)
banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))

export {
    Banda,
    Integrante,
}
```

### Solución 02 

```js
class Band{
    constructor({
        name,
        genres = [],
        /* members = [], */
    }){
        this.name = name;
        this.genres = genres;
        this.members = [];
    }

    new_member(member){
        const drums_found = this.members.find(x => x.instrument == 'drums')

        if(member.instrument == 'drums' &&  drums_found){
            console.log(`There is already a band member who plays the drums. It's ${drums_found.name}`);
        }else{
            this.members.push(member);
        }
    }
}

class Members{
    constructor({name, instrument}){
        this.name = name;
        this.instrument = instrument;
    }
}

const band_one = new Band({
    name: 'Band One',
    genres: [
        'Indie Rock',
        'Pop Rock',
    ],
});

const band_two = new Band({
    name: 'Band Two',
    genres: [
        'Electronics',
        'Trance',
    ],
});

band_one.new_member(new Members({name: 'Ale', instrument: 'piano'}));
band_one.new_member(new Members({name: 'Iva', instrument: 'drums'}));
band_one.new_member(new Members({name: 'Ully', instrument: 'drums'})); 
```

#### Método Every()

El método `every()` en JavaScript se utiliza en arrays para comprobar si todos los elementos del array cumplen con una condición específica. La sintaxis del método `every()` es la siguiente:

```javascript
array.every(function(currentValue, index, arr), thisValue)
```

Donde:

- `array` es el array en el que se desea comprobar si todos los elementos cumplen con la condición.
- `currentValue` es el valor del elemento actual que se está evaluando en el array.
- `index` es el índice del elemento actual que se está evaluando en el array.
- `arr` es el array en el que se está comprobando si todos los elementos cumplen con la condición.
- `thisValue` es un valor opcional que se utiliza como `this` dentro de la función que se ejecuta en cada elemento del array.

La función que se pasa como argumento al método `every()` se ejecuta en cada elemento del array y debe devolver un valor booleano. Si la función devuelve `true` para todos los elementos del array, el método `every()` devuelve `true`. Si la función devuelve `false` para al menos un elemento del array, el método `every()` devuelve `false`.

Aquí hay un ejemplo de cómo usar el método `every()` para comprobar si todos los elementos de un array de números son mayores que 0:

```javascript
const numeros = [2, 4, 6, 8];

const todosMayoresQueCero = numeros.every(function(numero) {
  return numero > 0;
});

console.log(todosMayoresQueCero); // true
```

Otro ejemplo podría ser comprobar si todos los elementos de un array de objetos tienen una propiedad específica con un valor determinado:

```javascript
const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'María', edad: 30 },
  { nombre: 'Pedro', edad: 20 }
];

const todosMayoresDeEdad = personas.every(function(persona) {
  return persona.edad >= 18;
});

console.log(todosMayoresDeEdad); // true
```

## Pilares de la POO: abstracción y polimorfismo

### **9.** Qué es abstracción 

La abstracción es un concepto que se refiere a la capacidad de representar objetos del mundo real en términos de sus características y comportamientos esenciales, y ocultar los detalles complejos de su implementación. La abstracción permite crear clases y objetos que encapsulan datos y comportamientos relacionados, y proporcionan una interfaz clara y simplificada para interactuar con ellos.

Ejemplos de abstracción:

1. Un objeto "Coche" que tiene propiedades como "marca", "modelo", "color", "velocidad", "aceleración", "frenado", etc. 

2. Una clase "Persona" que tiene propiedades como "nombre", "edad", "género", "ocupación", etc.

En lugar de exponer todos los detalles internos de cómo se implementa la velocidad, aceleración, frenado, etc., se puede exponer una interfaz pública que permita al usuario interactuar con el coche de manera intuitiva y simplificada por ejemplo, acelerar(), frenar(), cambiarVelocidad(). Lo mismo con la clase Persona por ejemplo, obtenerNombre(), obtenerEdad(), etc.

La ventaja principal de la abstracción en JS POO es que permite escribir código más modular y mantenible, ya que reduce la complejidad del software al ocultar detalles innecesarios y exponer solo lo que es relevante para su uso. Además, la abstracción facilita la reutilización del código, ya que los objetos abstractos pueden ser utilizados en diferentes contextos sin necesidad de conocer su implementación interna. También permite a los desarrolladores trabajar en equipo de manera más eficiente, ya que pueden diseñar y desarrollar componentes independientes que interactúan a través de interfaces claramente definidas y documentadas. En resumen, la abstracción en JS POO es una herramienta poderosa para simplificar la complejidad y mejorar la calidad del software.

### **10.** Abstracción en JavaScript

```js
// Prototipo para Schools
// 1. Crear una clase para escuelas (Learnin_path()) 
// 2. Crear una instancia para cada escuela (escuela_dw) Pupil
// 3. Revisar que no se repitan coursos dentro de las escuelas

class Classes{
    constructor({topic}){
        this.topic = topic;
    }
}

class Course{
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes;
    }
}

class School{
    constructor({ path, courses = []}){
        this.path = path;
        this.courses = courses;
    }

    launch_of_new_course(new_release){
        this.courses.push(new_release);
    }
}

class Pupil{
    constructor({
        name,
        email,
        username,
        twitter,
        instagram,
        facebook,
        approved_courses = [],
        learning_paths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.social_media = {
            twitter,
            instagram,
            facebook,
        };
        this.approved_courses = approved_courses;
        this.learning_paths = learning_paths;
    }

    approved_course(new_course){
        this.approved_courses.push(new_course);
    }
}

const class_one = new Classes({topic: 'Class One'});
const class_two = new Classes({topic: 'Class Two'});
const class_three = new Classes({topic: 'Class Three'});
const class_four= new Classes({topic: 'Class Four'});
const class_five = new Classes({topic: 'Class Five'});
const class_six = new Classes({topic: 'Class Six'});

const course_one = new Course({
    name: 'Course 01',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
});

const course_two = new Course({
    name: 'Course 02',
    classes: [
        class_one,
        class_three,
        class_four,
    ]
});

const course_three = new Course({
    name: 'Course 03',
    classes: [
        class_one,
        class_two,
        class_three,
        class_four,
        class_five,
    ]
});

const school_01 = new School({
    path: 'Web development',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const school_02 = new School({
    path: 'Video games development',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const school_03 = new School({
    path: 'Artificial intelligence',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const simone = new Pupil({
    name: 'Simone Simons',
    email: 'simons@mail.com',
    username: 'simone_simons',
    twitter: 's_simons',
    learning_paths: [
        school_01,
        school_02,
    ],
});

const alissa = new Pupil({
    name: 'Alissa White_Gluz',
    username: 'alissa_wg',
    email:'alisa_wg@mail.com',
    instagram: 'alisa_wg',
    learning_paths: [
        school_01,
        school_03,
    ]
});

school_01.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_01.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_01.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

school_02.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_02.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_02.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

school_03.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_03.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_03.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

simone.approved_course(course_one);
simone.approved_course(course_three);

alissa.approved_course(course_one);
alissa.approved_course(course_two);
```

### **11.** Qué es encapsulamiento

El encapsulamiento en JavaScript (JS) es un concepto que se refiere a la capacidad de ocultar la complejidad interna de los objetos, protegiendo sus propiedades y métodos para que no sean accesibles desde fuera de la clase. El encapsulamiento permite que los objetos mantengan su estado interno y comportamiento, y solo expongan una interfaz pública que permita interactuar con ellos de manera controlada.

El encapsulamiento se logra en JS POO a través del uso de propiedades y métodos privados y públicos. Las propiedades y métodos privados solo pueden ser accedidos desde dentro de la clase, mientras que las propiedades y métodos públicos pueden ser accedidos desde fuera de la clase.

Aquí tienes algunos ejemplos de encapsulamiento en JS POO:

1. Una clase "Cuenta Bancaria" que tiene propiedades privadas como "saldo" y "número de cuenta", y métodos públicos como "depositar()", "retirar()" y "obtenerSaldo()". El saldo y el número de cuenta solo son accesibles desde dentro de la clase, mientras que los métodos públicos permiten interactuar con la cuenta bancaria de manera controlada.

2. Una clase "Empleado" que tiene propiedades privadas como "nombre", "edad", "salario" y métodos públicos como "obtenerNombre()", "obtenerEdad()", "obtenerSalario()", "aumentarSalario()" y "disminuirSalario()". El nombre, la edad y el salario solo son accesibles desde dentro de la clase, mientras que los métodos públicos permiten interactuar con el empleado de manera controlada.

3. Una clase "Coche" que tiene propiedades privadas como "velocidad", "aceleración" y "frenado", y métodos públicos como "acelerar()", "frenar()", "cambiarVelocidad()", etc. La velocidad, aceleración y frenado solo son accesibles desde dentro de la clase, mientras que los métodos públicos permiten interactuar con el coche de manera controlada.

En todos estos ejemplos, el encapsulamiento permite proteger las propiedades y métodos privados de la clase, evitando que sean modificados o accedidos desde fuera de la misma. Esto permite mejorar la seguridad y la estabilidad del código, ya que se evitan errores y comportamientos inesperados que podrían surgir si se modifican las propiedades privadas de manera no controlada. Además, el encapsulamiento permite a los desarrolladores cambiar la implementación interna de la clase sin afectar a su interfaz pública, lo que facilita la evolución del software a medida que se requieren cambios o mejoras en la funcionalidad.


#### ¿Qué es encapsulamiento?  
Es guardar, proteger  o limitar el acceso de cierto atributos y/o propiedades en nuestros prototipos y objetos.

Cuando hablamos de **encapsulamiento **hablamos de:

- Esconder métodos y atributos 👻
- No permitir la alteración de métodos y atributos ❌

##### Formas de aplicar encapsulamiento en JavaScript

- Getters y setters 🖐
- Namespaces 🙂
- Object.defineProperties 🎈
- Módulo de ES6 🤝


### **12.** Getters y setters en JavaScript

```js
class Course{
    constructor({
        name,
        classes = [],
    }){
        this._name = name;
        this.classes = classes;
    }

    get name(){
        return this._name;
    }

    // change_name(new_name){
    //     this._name = new_name;
    // }

    set name(new_name){
        if(new_name === 'Bad Coding Course'){
            console.error('Hey! Te wa madrear...');
        }else {
            this._name = new_name;
        }
    }
}

const course_one = new Course({
    name: 'Course 01',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
});

// Haciendo uso de get and set en Course (pruebas en consola)
course_one
course_one.name
// course_one.name = "Another way to change the name"
// course_one.change_name('A new course name')
course_one.name = 'This is the new course name';
course_one.name = 'Bad Coding Course' //mensaje error
```

#### Dato 
Pasa algo extraño:   
Si escribes `course.name = 'Bad Coding Course'` el SET comprueba que cumpla lo que le pedí. PEEEEROOO si escribo por consola:  
`course._name = 'Bad Coding Course'` SE SALTA la barrera del SET y me toma como correcto lo que ponga! 

![](https://i.postimg.cc/63jZD9FY/12-get-set-error.jpg)

#### Mas info y ejemplos 

En JavaScript, los métodos `get` y `set` se utilizan para acceder a propiedades de objetos y establecer valores para esas propiedades. Estos métodos son útiles en la programación orientada a objetos (POO) en JavaScript para definir propiedades de objetos que no se pueden acceder directamente.

Aquí hay un ejemplo de cómo usar `get` y `set` en JavaScript:

```javascript
class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  // Definir un getter para la propiedad "nombre"
  get nombre() {
    return this._nombre;
  }

  // Definir un setter para la propiedad "nombre"
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  // Definir un getter para la propiedad "edad"
  get edad() {
    return this._edad;
  }

  // Definir un setter para la propiedad "edad"
  set edad(nuevaEdad) {
    if (nuevaEdad > 0) {
      this._edad = nuevaEdad;
    } else {
      console.log("La edad debe ser un número mayor que cero.");
    }
  }
}

// Crear un objeto "persona"
let persona = new Persona("Juan", 25);

// Acceder a la propiedad "nombre" a través del getter
console.log(persona.nombre); // "Juan"

// Establecer un nuevo valor para la propiedad "nombre" a través del setter
persona.nombre = "Pedro";
console.log(persona.nombre); // "Pedro"

// Acceder a la propiedad "edad" a través del getter
console.log(persona.edad); // 25

// Establecer un nuevo valor para la propiedad "edad" a través del setter
persona.edad = 0;
// La edad debe ser un número mayor que cero.

console.log(persona.edad); // 25
```

En cuanto a si se recomienda más usar `#` o `_` para definir propiedades privadas en JavaScript, es importante tener en cuenta que `#` es una nueva característica introducida en la versión ES2020 de JavaScript, que todavía no es compatible con todos los navegadores y entornos de ejecución. Por lo tanto, en la práctica, es posible que sea necesario seguir utilizando `_` para definir propiedades privadas en JavaScript. Sin embargo, `#` se considera la forma recomendada de definir propiedades privadas en JavaScript, ya que es más explícito y menos propenso a conflictos de nombres con otras propiedades y métodos.

#### ES2020 `#` 
En ES2020 se introdujo la sintaxis campos privados en las clases. Se hace uso de un numeral como prefijo del nombre de la variable.  
   
¿Cuál sería la ventaja de usar esto? Que no existe la posibilidad de que alguien modifique la variable privada desde la instancia a menos de que use el setter que le dimos.  
   
Con el ejemplo en esta clase, quedaría así:

```javascript
classCourse{
  #name;

  constructor({
    name,
    classes = []
  }) {
    this.#name = name;
    this.classes = classes;
  }

  getname() {
    returnthis.#name;
  }

  setname(nuevoNombrecito) {
    if (nuevoNombrecito === 'Bad Coding Course') {
      console.error('Hey! Te wa madrear...');
    } else {
      this.#name = nuevoNombrecito;
    }
  }
}
```

### **13.** Módulos de ECMAScript 6

El uso de los módulos en JavaScript depende de las declaraciones **_Export_** e **_Import_**.

Para modular, solo basta que el archivo tenga la extensión **_.js_**, pero el motor V8 que es el que corre en los navegadores, recomienda usar la extensión **_.mjs_**

- Esto es util porque queda claro cuál archivo es modulo y cual no.
- Asegura que los archivos de modulo sean tratados como tal por la extensión **Babel** o **Node.js**

#### Export
Hay dos formas de exportar:   
1. Colocar en frente de cada elemento la palabra **_export_**
2. Exportar en una sola declaración al final del archivo modulo las características que se quieren exportar, ejemplo:

```js
export {PlatziClass, Student, LearningPaths};
```

#### Import  
La importación obviamente se hace en el script que queremos usar dichos elementos.

```js
import {PlatziClass, Student, LearningPaths} from '/ruta';
```

#### ¿Como aplicar el modulo en HTML?

```html
<script type="module" src="main.js"></script>
```

Otra cosa importante es que podemos **_Renombrar_** las Importaciones y Exportaciones.

> ¿Como renombramos los componentes?  
> esto básicamente se logra con la palabra clave **_as_**  

Ejemplo:

```js
export {
PlatziClass as ClasesPlatzi,
LearningPaths as RutaAprendizaje
```

y en donde vayamos a importar, llamamos con su nuevo nombre, ejemplo:

```js
import { ClasesPlatzi, RutaAprendizaje} from '/ruta';
```

_NOTA:_

- Se recomienda que el cambio de nombre se haga en la importación y no en la exportación, pero eso ya es criterio del programador

#### Código de la clase 

Se ejecuta usando la extensión Code Runner

```js
// archivo: 12.modulos.mjs
function play_video(id){
    const secret_url = "https://platzisecret.com/" + id;
    console.log('Playing from url ' + secret_url);
}
function pause_video(id){
    const secret_url = "https://platzisecret.com/" + id;
    console.log('Paused from url ' + secret_url);
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    play(){
        play_video(this.videoID);
    }
    pause(){
        pause_video(this.videoID);
    }
}
```

```js
// archivo: 12.module.mjs
import { PlatziClass } from "./12.modulos.mjs";

const highway_67 = new PlatziClass({
    name: 'JavaScript: OOP',
    videoID: '0123456789',
});

highway_67.play();
highway_67.pause();
// Playing from url https://platzisecret.com/0123456789
// Paused from url https://platzisecret.com/0123456789

highway_67.play();
highway_67.pause();
// Playing from url https://platzisecret.com/0123456789
// Paused from url https://platzisecret.com/0123456789

highway_67.play();
highway_67.pause();
// Playing from url https://platzisecret.com/0123456789
// Paused from url https://platzisecret.com/0123456789

console.log(highway_67);
console.log(highway_67.name);
console.log(highway_67.videoID);
// PlatziClass { name: 'JavaScript: OOP', videoID: '0123456789' }
// JavaScript: OOP
// 0123456789
```

#### Otro ejemplo: 

Para usar `export` e `import` en JavaScript, debes seguir los siguientes pasos:

1. Crear un archivo de JavaScript que contenga el código que deseas exportar. Por ejemplo, crea un archivo llamado `module.js` que contenga lo siguiente:

```js
//module.js
export const PI = 3.14159;

export function saludar(nombre) {
	console.log(`Hola, ${nombre}!`);
}
```

2. Crear un archivo de JavaScript separado donde desees importar el código del archivo `module.js`. Por ejemplo, crea un archivo llamado `app.js` que contenga lo siguiente:

```js
//app.js
import { PI, saludar } from './module.js';

console.log(PI); // Output: 3.14159
saludar('Juan'); // Output: Hola, Juan!
```

3. En el caso de querer ejecutar estos archivos usando la extensión Code Runner, debes asegurarte de tenerla instalada en tu editor de código. Luego, abre el archivo que deseas ejecutar (en este caso, `app.js`) y presiona el botón "Run" (o ejecuta el comando de teclado correspondiente). Esto ejecutará el código y mostrará la salida en la consola de Code Runner.

4. Si deseas ejecutar el código en el navegador, debes crear un archivo HTML que cargue tanto el archivo `module.js` como el archivo `app.js`. Por ejemplo, crea un archivo llamado `index.html` que contenga lo siguiente:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>My App</title>
</head>
<body>
    <script src="./module.js" type="module"></script>
    <script src="./app.js" type="module"></script>
</body>
</html>
```

Luego, abre el archivo `index.html` en tu navegador y abre la consola de desarrollador. Verás la salida del código en la consola del navegador.

Es importante destacar que para usar `import` y `export` en el navegador es necesario que el navegador soporte módulos ES6.

Al usar la extensión Live Server, podrás cargar tus archivos HTML y JavaScript como si estuvieran alojados en un servidor web real, lo que te permitirá probar la importación de módulos ES6 en el navegador sin tener problemas con la política de seguridad del navegador al cargar archivos directamente desde el sistema de archivos local.


### **14.** Playgrounds: Controlar accesos con get y set

En este reto dada la siguiente clase:

```js
export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {

  }

  set name(nuevoNombrecito) {

  }
}
```

Usando el `set` de la propiedad **name** valida siempre que se le quiera asignar un valor lo siguiente:

- Que sea de tipo string.
    - Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
- Si no es un string no se cambia el valor de la propiedad name.

La solución debería tener un input y output como los siguientes:

Input

```js
const courseName = "curso de programación básica"
const nombreMaysuculas = new Course({
    name: courseName,
})
nombreMayusculas.name
```

Output

```js
'Curso de Programación Básica'
```

Nota: Para resolver este ejercicio se usan métodos vistos en cursos anteriores.
- `.split()` [[taller-js-primer-videojuego#6. Arreglos multidimensionales en JavaScript#.split]]
-  `.map()` [[js-basico#19. Métodos de recorridos de Arrays]]
- `.slice()` [[js-basico#14. Arrays#Métodos de los Arrays]]

#### `.charAt()` 
El método `charAt()` es un método integrado en JavaScript que se utiliza para obtener el carácter en una posición específica en una cadena de caracteres. Este método toma un índice como argumento y devuelve el carácter en esa posición.

La sintaxis básica del método `charAt()` es la siguiente:

```javascript
cadena.charAt(indice);
```

Donde `cadena` es la cadena de caracteres que se va a utilizar y `indice` es el índice del carácter que se desea obtener. El índice comienza en 0 para el primer carácter de la cadena.

Por ejemplo, si queremos obtener el primer carácter de una cadena de texto, podemos utilizar el método `charAt()` de la siguiente manera:

```javascript
let texto = "Hola mundo";
let primerCaracter = texto.charAt(0);
console.log(primerCaracter); // "H"
```

En este ejemplo, `charAt(0)` devuelve el primer carácter de la cadena `texto`, que es "H".

El método `charAt()` también se puede utilizar para acceder a otros caracteres en una cadena de texto. Por ejemplo, si queremos obtener el tercer carácter de una cadena de texto, podemos utilizar el método `charAt()` de la siguiente manera:

```javascript
let texto = "Hola mundo";
let tercerCaracter = texto.charAt(2);
console.log(tercerCaracter); // "lEn este ejemplo, `charAt(2)` devuelve el tercer carácter de la cadena `texto`, que es "l".
```

El método `charAt()` es muy útil para acceder a caracteres específicos en una cadena de texto en JavaScript. Además, se puede utilizar en conjunto con otros métodos de JavaScript, como `slice()` y `toUpperCase()`, para realizar transformaciones en caracteres individuales de una cadena de texto.

#### `.toUpperCase()` 

El método `toUpperCase()` es un método integrado en JavaScript que se utiliza para convertir una cadena de caracteres en mayúsculas. Este método no modifica la cadena original, sino que devuelve una nueva cadena en donde todas las letras están en mayúsculas.

La sintaxis básica del método `toUpperCase()` es la siguiente:

```javascript
cadena.toUpperCase();
```

Donde `cadena` es la cadena de caracteres que se va a convertir en mayúsculas. El método `toUpperCase()` no toma argumentos.

Por ejemplo, si queremos convertir una cadena de texto en mayúsculas, podemos utilizar el método `toUpperCase()` de la siguiente manera:

```javascript
let texto = "Hola mundo";
let textoEnMayusculas = texto.toUpperCase();
console.log(textoEnMayusculas); // "HOLA MUNDO"
```

En este ejemplo, `toUpperCase()` devuelve una nueva cadena con todas las letras de la cadena original en mayúsculas.

El método `toUpperCase()` es muy útil para normalizar las cadenas de texto en JavaScript, especialmente cuando se comparan cadenas de texto sin importar las mayúsculas y minúsculas. Además, se puede utilizar en conjunto con otros métodos de JavaScript, como `charAt()` y `slice()`, para realizar transformaciones en caracteres individuales o secciones de una cadena de texto.

#### `.join()`

El método `join()` es un método integrado en JavaScript que se utiliza para unir los elementos de un array en una cadena de caracteres. Este método toma un separador como argumento y devuelve una cadena de caracteres que contiene los elementos del array separados por el separador especificado.

La sintaxis básica del método `join()` es la siguiente:

```javascript
array.join(separador);
```

Donde `array` es el array que se va a unir y `separador` es la cadena de caracteres que se utiliza para separar los elementos del array en la cadena resultante. Si no se especifica ningún separador, los elementos del array se unen sin separadores.

Por ejemplo, si queremos unir los elementos de un array en una cadena de texto separados por comas, podemos utilizar el método `join()` de la siguiente manera:

```javascript
let numeros = [1, 2, 3, 4, 5];
let numerosComoTexto = numeros.join(',');
console.log(numerosComoTexto); // "1,2,3,4,5"
```

En este ejemplo, `join(',')` une los elementos del array `numeros` en una cadena de texto separados por comas.

El método `join()` también se puede utilizar para unir los elementos de un array en una cadena de texto sin separadores. Por ejemplo:

```javascript
let numeros = [1, 2, 3, 4, 5];
let numerosComoTextoSinSeparador = numeros.join('');
console.log(numerosComoTextoSinSeparador); // "12345"
```

En este ejemplo, `join('')` une los elementos del array `numeros` en una cadena de texto sin separadores.

El método `join()` es muy útil para trabajar con arrays de elementos en JavaScript, especialmente cuando se necesita convertirlos en una cadena de texto. Además, se puede utilizar en conjunto con otros métodos de JavaScript, como `map()` y `toUpperCase()`, para realizar transformaciones complejas en los elementos del array antes de unirlos en una cadena de texto.

#### Solución al reto 

```js
class Course {
    constructor({
        name,
        classes = [],
    }){
        this.name = name; //this._name = name;👈👀
        this.classes = classes;
    }

    get name(){
        return this._name;
    }
    set name(new_name){
        if(typeof new_name === 'string'){
            this._name = new_name;
            const x = new_name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            console.log(x);
        }else{
            console.log(`${new_name} isn't a string!`);
        }
    }
}

const course_one = new Course({
    name: 'course one',
});

course_one
course_one.name
course_one.name = 'eccentric course on computer psychology...'
course_one.name = 123

/* 
'eccentric course on computer psychology...'
1. .split(' ') Separamos la oración en un array de palabras
    ['eccentric', 'course', 'on', 'computer', 'psychology...']
2. .map(word => word) Recorremos el array de palabras 
    ['eccentric', 'course', 'on', 'computer', 'psychology...']
3. .charAt(0) Extraemos el primer caracter de cada palabra
    ['e', 'c', 'o', 'c', 'p']
4. .toUpperCase() Convertimos cada caracter en mayúscula
    ['E', 'C', 'O', 'C', 'P']
5. + .slice(1) Extraemos todas las letras de cada palabra a partir del index 1 en adelante, excepto la letra de la posición 0 y las concatenamos con lo anterior la letra mayuscula obtenida con el método anterior. 
    ['Eccentric', 'Course', 'On', 'Computer', 'Psychology...']
6. .join(' ') Unimos el contenido del array usando como separador un espacio
    'Eccentric Course On Computer Psychology...'
*/
```

##### `this.name = name;` vs `this._name = name;` en el constructor

Al usar `this._name = name;` no se aplica el set a la primera instancia creada, solo se aplica a las siguientes pero al usar `this.name = name;` si se aplica desde la primera instancia.

```js
class Course {
    constructor({
        name,
        classes = [],
    }){
        this.name = name; //this._name = name; 👈👀
        this.classes = classes;
    }
}
```

La razón por la que la primera instancia de la clase `Course` creada no se beneficia de la validación en el método setter cuando se utiliza `this._name = name;` en el constructor, es porque el método setter solo se invoca cuando se establece el valor de la propiedad `name` después de la creación del objeto. En el constructor, se está estableciendo directamente el valor de la propiedad privada `_name` sin pasar por el método setter.

Por otro lado, cuando se utiliza `this.name = name;` en el constructor, se está llamando al método setter directamente, y por lo tanto, se aplica la validación en el valor de `name` incluso en la primera instancia creada.

Por ejemplo, si se crea una instancia de la clase `Course` utilizando `this._name = name;` en el constructor:

```javascript
const course_new = 'course one';
const course_one = new Course({ name: course_new });
console.log(course_one.name); // "course one"
```

En este caso, como se ha establecido directamente el valor de la propiedad privada `_name` en el constructor, la validación en el método setter no se ha aplicado, y por lo tanto, el valor de `name` sigue siendo "course one".

Por otro lado, si se crea una instancia de la clase `Course` utilizando `this.name = name;` en el constructor:

```javascript
const course_new = 'course one';
const course_one = new Course({ name: course_new });
console.log(course_one.name); // "Course One"
```

En este caso, al utilizar `this.name = name;` en el constructor, se llama al método setter directamente y se aplica la validación en el valor de `name`, por lo que el valor de `name` se cambia a "Course One" (con la primera letra de cada palabra en mayúscula).

Es importante tener en cuenta que, aunque el método setter no se llama al establecer directamente el valor de la propiedad privada `_name` en el constructor, el método getter sí se puede utilizar para acceder al valor de la propiedad `_name` desde fuera de la clase.

#### Otra solución a medias :v 

```js
exportclassCourse{
  constructor({
    name,
    classes = [],
  }) {
    this._name = name;
    this.classes = classes;
  }

  getname() {
    returnthis._name;
  }

  setname(nuevoNombrecito) {
    if (typeof nuevoNombrecito !== "string") {
      console.log("Parce no puedes hacer eso");
    } else {
      this._name = nuevoNombrecito[0].toUpperCase() + nuevoNombrecito.slice(1);
    }
  }
}
```

## Pilares de la POO: herencia y polimorfismo

### **15.** Qué es herencia 

Sirve para crear nuevas clases con características similares a partir de otras. Con la herencia puedes crear una clase que sea hijo o una copia de otra clase, al heredar una clase se tiene todos los métodos y atributos de la clase padre, podrás modificarlas solo en caso de ser necesario. Funciona como una jerarquía de lo mas general a lo mas especifico.

La herencia en JavaScript se basa en el prototipo de objetos. Un objeto en JavaScript tiene un prototipo que es otro objeto del cual hereda propiedades y métodos. Cuando se busca una propiedad o método en un objeto, si no se encuentra en él mismo, se busca en su prototipo, y así sucesivamente hasta que se llega al objeto base `Object.prototype`.

Para crear una clase que herede de otra clase en JavaScript, se puede utilizar la palabra clave `extends`. Por ejemplo:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} hace un sonido.`);
  }
}

class Perro extends Animal {
  speak() {
    console.log(`${this.name} ladra.`);
  }
}

let perro = new Perro('Fido');
perro.speak(); // "Fido ladra."
```

En este ejemplo, la clase `Perro` hereda de la clase `Animal` utilizando la palabra clave `extends`. La clase `Perro` tiene un método `speak` que reemplaza el método `speak` de la clase `Animal`. Al crear una instancia de la clase `Perro` y llamar al método `speak`, se llama al método `speak` de la clase `Perro`.

También se pueden utilizar las propiedades y métodos de la clase padre en la clase hija utilizando la palabra clave `super`. Por ejemplo:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} hace un sonido.`);
  }
}

class Perro extends Animal {
  constructor(name, raza) {
    super(name);
    this.raza = raza;
  }

  speak() {
    super.speak();
    console.log(`${this.name} ladra.`);
  }
}

let perro = new Perro('Fido', 'Golden Retriever');
perro.speak(); // "Fido hace un sonido." "Fido ladra."
```

En este ejemplo, la clase `Perro` tiene un constructor que utiliza la palabra clave `super` para llamar al constructor de la clase `Animal` y establecer la propiedad `name`. La clase `Perro` también tiene un método `speak` que llama al método `speak` de la clase `Animal` utilizando la palabra clave `super`, y luego agrega el ladrido del perro.

La herencia en JavaScript es una herramienta poderosa que permite reutilizar código y crear jerarquías de clases. Sin embargo, también es importante tener en cuenta que JavaScript es un lenguaje flexible y dinámico, y que la herencia basada en prototipos puede tener algunos comportamientos inesperados. Es importante comprender bien cómo funciona la herencia en JavaScript para utilizarla de manera efectiva.

### **16.** Herencia en JavaScript

```js
function play_video(id){
    const secret_url = "https://platzisecret.com/" + id;
    console.log('Playing from url' + secret_url);
}
function pause_video(id){
    const secret_url = "https://platzisecret.com/" + id;
    console.log('Paused from url' + secret_url);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    play(){
        play_video(this.videoID);
    }
    pause(){
        pause_video(this.videoID);
    }
}
class Classes{
    constructor({topic}){
        this.topic = topic;
    }
}

class Course{
    constructor({
        name,
        classes = [],
        is_free = false,
        language = 'spanish'
    }){
        this._name = name;
        this.classes = classes;
        this.is_free = is_free;
        this.language = language;
    }

    get name(){
        return this._name;
    }

    set name(new_name){
        if(new_name === 'Bad Coding Course'){
            console.error('Web...no');
        }else {
            this._name = new_name;
        }
    }
}

class School{
    constructor({ path, courses = []}){
        this.path = path;
        this.courses = courses;
    }

    launch_of_new_course(new_release){
        this.courses.push(new_release);
    }
}


// Trabajamos con pupil y herencia 
class Pupil{
    constructor({
        name,
        email,
        username,
        twitter,
        instagram,
        facebook,
        approved_courses = [],
        learning_paths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.social_media = {
            twitter,
            instagram,
            facebook,
        };
        this.approved_courses = approved_courses;
        this.learning_paths = learning_paths;
    }

    approved_course(new_course){
        this.approved_courses.push(new_course);
    }
}
class Free_pupil extends Pupil{
    constructor(properties){
        super(properties);
    }

    approved_course( new_course){
        if(new_course.is_free){
            this.approved_courses.push(new_course);
        }else {
            console.log(`Sorry, ${this.name}, You can only take free courses.`);
        }
    }
}

class Basic_pupil extends Pupil{
    constructor(properties){
        super(properties);
    }

    approved_course(new_course){
        if(new_course.language !== 'english' ){
            this.approved_courses.push(new_course);
        }else {
            console.log(`Sorry, ${this.name}, You can't take the English academy courses.`);
        }
    }
}

class Expert_pupil extends Pupil{
    constructor(properties){
        super(properties);
    }

    approved_course(new_course){
        this.approved_courses.push(new_course);
    }
}

const class_one = new Classes({topic: 'Class One'});
const class_two = new Classes({topic: 'Class Two'});
const class_three = new Classes({topic: 'Class Three'});
const class_four= new Classes({topic: 'Class Four'});
const class_five = new Classes({topic: 'Class Five'});
const class_six = new Classes({topic: 'Class Six'});

const course_one = new Course({
    name: 'Course 01',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ],
    is_free: true,
});

const course_two = new Course({
    name: 'Course 02',
    classes: [
        class_one,
        class_three,
        class_four,
    ],
    language: 'english',
});

const course_three = new Course({
    name: 'Course 03',
    classes: [
        class_one,
        class_two,
        class_three,
        class_four,
        class_five,
    ]
});

// Haciendo uso de get and set en Course (pruebas en consola)
course_one
course_one.name
// course_one.name = "Another way to change the name"
// course_one.change_name('A new course name')
course_one.name = 'This is the new course name';
course_one.name = 'Bad Coding Course' //mensaje error


const school_01 = new School({
    path: 'Web development',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const school_02 = new School({
    path: 'Video games development',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const school_03 = new School({
    path: 'Artificial intelligence',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const simone = new Free_pupil({
    name: 'Simone Simons',
    email: 'simons@mail.com',
    username: 'simone_simons',
    twitter: 's_simons',
    learning_paths: [
        school_01,
        school_02,
    ],
});

const alissa = new Basic_pupil({
    name: 'Alissa White_Gluz',
    username: 'alissa_wg',
    email:'alisa_wg@mail.com',
    instagram: 'alisa_wg',
    learning_paths: [
        school_01,
        school_03,
    ]
});

school_01.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_01.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_01.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

school_02.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_02.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_02.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

school_03.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_03.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_03.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

simone.approved_course(course_one);
simone.approved_course(course_three);

alissa.approved_course(course_one);
alissa.approved_course(course_two);

// herencia
simone 
simone.approved_course(course_one);
simone.approved_courses
simone.approved_course(course_two); //ingles
alissa.approved_course(course_three); 
alissa.approved_courses
```


### **17.** Qué es polimorfismo

- Sobrecarga 
- Paramétrico 
- Inclusión 

El polimorfismo en programación orientada a objetos (POO) es la capacidad de los objetos de una clase de tomar diferentes formas y comportamientos en función del contexto en el que se utilizan. En JavaScript, el polimorfismo se logra mediante la capacidad de los objetos de tener diferentes métodos o propiedades dependiendo de su tipo.

Un ejemplo común de polimorfismo en JavaScript es el uso del operador "+" para concatenar cadenas o sumar números. Cuando se usa "+" con dos cadenas, JavaScript los concatena en una sola cadena. Cuando se usa "+" con dos números, JavaScript los suma. Este comportamiento polimórfico del operador "+" se debe a la capacidad de JavaScript de realizar una coerción de tipo implícita.

Otro ejemplo de polimorfismo en JavaScript es la capacidad de los objetos de diferentes clases para responder a un mismo método. Por ejemplo, una clase "Rectángulo" y una clase "Círculo" pueden tener un método "calcularÁrea", pero cada clase implementa este método de manera diferente según su forma. Al llamar al método "calcularÁrea" en un objeto de la clase "Rectángulo" o "Círculo", se obtiene el área correspondiente a su forma.

A continuación se muestra un ejemplo de código que ilustra el polimorfismo en JavaScript:

```js
// Definir una clase "Figura"
class Figura {
  calcularArea() {
    console.log("El método calcularArea debe ser implementado en la subclase");
  }
}

// Definir una clase "Rectángulo" que hereda de "Figura"
class Rectangulo extends Figura {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    console.log(`El área del rectángulo es ${this.base * this.altura}`);
  }
}

// Definir una clase "Círculo" que hereda de "Figura"
class Circulo extends Figura {
  constructor(radio) {
    super();
    this.radio = radio;
  }

  calcularArea() {
    console.log(`El área del círculo es ${Math.PI * this.radio * this.radio}`);
  }
}

// Crear objetos de tipo "Rectángulo" y "Círculo"
const rectangulo = new Rectangulo(5, 8);
const circulo = new Circulo(4);

// Llamar al método "calcularArea" en los objetos de tipo "Rectángulo" y "Círculo"
rectangulo.calcularArea(); // El área del rectángulo es 40
circulo.calcularArea(); // El área del círculo es 50.26548245743669
```

En este ejemplo, la clase "Figura" define un método "calcularArea" que se utiliza en las clases hijas "Rectángulo" y "Círculo" para calcular el área correspondiente a su forma. Al llamar al método "calcularArea" en un objeto de la clase "Rectángulo" o "Círculo", se invoca el método correspondiente de la clase hija, lo que demuestra el polimorfismo en acción.

El polimorfismo en JavaScript es una técnica que permite que un objeto pueda tener diferentes formas o comportamientos. En otras palabras, el polimorfismo permite que un objeto pueda ser tratado como si fuera de diferentes tipos. Un ejemplo de polimorfismo en JavaScript es cuando se utiliza una función con el mismo nombre para diferentes objetos y cada objeto tiene su propia implementación de la función.

Por ejemplo, podemos crear tres funciones con el mismo nombre y diferentes operaciones. Luego, podemos llamar a la función con diferentes argumentos y obtener resultados diferentes.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log('Animal sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Bark');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow');
  }
}

const dog = new Dog('Buddy');
const cat = new Cat('Kitty');

dog.makeSound(); // Output: Bark
cat.makeSound(); // Output: Meow
```

### **18.** Polimorfismo en JavaScript

```js
class Comment{
    constructor({
        content,
        pupil_name,
        pupil_role = 'pupils'
    }){
        this.content = content;
        this.pupil_name = pupil_name;
        this.pupil_role = pupil_role;
        this.likes = 0;
    }

    publish(){
        console.log(`${this.pupil_name} + (${this.pupil_role})`);
        console.log(`${this.likes} likes`);
        console.log(this.content);
    }
}

function play_video(id){
    const secret_url = "https://platzisecret.com/" + id;
    console.log('Playing from url' + secret_url);
}
function pause_video(id){
    const secret_url = "https://platzisecret.com/" + id;
    console.log('Paused from url' + secret_url);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    play(){
        play_video(this.videoID);
    }
    pause(){
        pause_video(this.videoID);
    }
}
class Classes{
    constructor({topic}){
        this.topic = topic;
    }
}

class Course{
    constructor({
        name,
        classes = [],
        is_free = false,
        language = 'spanish'
    }){
        this._name = name;
        this.classes = classes;
        this.is_free = is_free;
        this.language = language;
    }

    get name(){
        return this._name;
    }

    set name(new_name){
        if(new_name === 'Bad Coding Course'){
            console.error('Web...no');
        }else {
            this._name = new_name;
        }
    }
}

class School{
    constructor({ path, courses = []}){
        this.path = path;
        this.courses = courses;
    }

    launch_of_new_course(new_release){
        this.courses.push(new_release);
    }
}


// Trabajamos con pupil y herencia 
class Pupil{
    constructor({
        name,
        email,
        username,
        twitter,
        instagram,
        facebook,
        approved_courses = [],
        learning_paths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.social_media = {
            twitter,
            instagram,
            facebook,
        };
        this.approved_courses = approved_courses;
        this.learning_paths = learning_paths;
    }

    approved_course(new_course){
        this.approved_courses.push(new_course);
    }

    post_comment(comment_content){
        const comment = new Comment({
            content: comment_content,
            pupil_name: this.name,
        });

        comment.publish();
    }
}
class Free_pupil extends Pupil{/*  */
    constructor(properties){
        super(properties);
    }

    approved_course(new_course){
        if(new_course.is_free){
            this.approved_courses.push(new_course);
        }else {
            console.log(`Sorry, ${this.name}, You can only take free courses.`);
        }
    }
}
class Basic_pupil extends Pupil{
    constructor(properties){
        super(properties);
    }

    approved_course(new_course){
        if(new_course.language !== 'english' ){
            this.approved_courses.push(new_course);
        }else {
            console.log(`Sorry, ${this.name}, You can't take the English academy courses.`);
        }
    }
}
class Expert_pupil extends Pupil{
    constructor(properties){
        super(properties);
    }

    approved_course(new_course){
        this.approved_courses.push(new_course);
    }
}
class Teacher_student extends Pupil{
    constructor(properties){
        super(properties)
    }

    approved_course(new_course){
        this.approved_course.push(new_course);
    }

    post_comment(comment_content){
        const comment = new Comment({
            content: comment_content,
            pupil_name: this.name,
            pupil_role: 'teacher'
        });

        comment.publish();
    }
}

const class_one = new Classes({topic: 'Class One'});
const class_two = new Classes({topic: 'Class Two'});
const class_three = new Classes({topic: 'Class Three'});
const class_four= new Classes({topic: 'Class Four'});
const class_five = new Classes({topic: 'Class Five'});
const class_six = new Classes({topic: 'Class Six'});

const course_one = new Course({
    name: 'Course 01',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ],
    is_free: true,
});

const course_two = new Course({
    name: 'Course 02',
    classes: [
        class_one,
        class_three,
        class_four,
    ],
    language: 'english',
});

const course_three = new Course({
    name: 'Course 03',
    classes: [
        class_one,
        class_two,
        class_three,
        class_four,
        class_five,
    ]
});

// Haciendo uso de get and set en Course (pruebas en consola)
course_one
course_one.name
// course_one.name = "Another way to change the name"
// course_one.change_name('A new course name')
course_one.name = 'This is the new course name';
course_one.name = 'Bad Coding Course' //mensaje error


const school_01 = new School({
    path: 'Web development',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const school_02 = new School({
    path: 'Video games development',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const school_03 = new School({
    path: 'Artificial intelligence',
    courses: [
        course_one,
        course_two,
        course_three,
    ]
});

const simone = new Free_pupil({
    name: 'Simone Simons',
    email: 'simons@mail.com',
    username: 'simone_simons',
    twitter: 's_simons',
    learning_paths: [
        school_01,
        school_02,
    ],
});

const alissa = new Basic_pupil({
    name: 'Alissa White_Gluz',
    username: 'alissa_wg',
    email:'alisa_wg@mail.com',
    instagram: 'alisa_wg',
    learning_paths: [
        school_01,
        school_03,
    ]
});

const angela = new Teacher_student({
    name: 'Angela Gossow',
    username: 'angela_gossow',
    email: 'gossow@mail.com',
    instagram: 'angelagossow'
})

school_01.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_01.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_01.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

school_02.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_02.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_02.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

school_03.launch_of_new_course(new Course({
    name: 'Course 04',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_03.launch_of_new_course(new Course({
    name: 'Course 05',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));
school_03.launch_of_new_course(new Course({
    name: 'Course 06',
    classes: [
        class_one,
        class_two,
        class_three,
        class_six,
    ]
}));

simone.approved_course(course_one);
simone.approved_course(course_three);

alissa.approved_course(course_one);
alissa.approved_course(course_two);

// herencia
simone
simone.approved_course(course_one);
simone.approved_courses
simone.approved_course(course_two); //ingles
alissa.approved_course(course_three); 
alissa.approved_courses

// polimorfismo
angela
angela.post_comment('We want more practical courses and less theory :3');
alissa.post_comment('I also want more practical courses and less theory!!!')
angela
```

### **19.** Playgrounds: Sobrescribir métodos heredados

Dentro de este reto encuentras las clases **Student** y **Comment** con un código base, recuerda ir a verlas en el sistema de archivos.

Tu reto consisten en:

- Hacer que la clase `TeacherStudent` herede de `Student`
- Agrega un propiedad de tipo Array llamada `skills` a la clase `TeacherStudent`.
- Sobrescribir el método `publicarComentario` dentro de `TeacherStundent`.
- Debe agregar el array de skills en su la propiedad `studentRole` de la clase `Comment`.
- El string debe verse de la siguiente manera "profesor de skill1, skill2".

Input

```js
  const skills = ["js", "python", "mongodb"]
  const props = {
    name: "Erik Ochoa",
    username: "elyager"
  }

  const profesor = new TeacherStudent(props, skills)
  profesor.publicarComentario('Mi primer comentario')
```

Output

```js
{
  "studentName":"Erik Ochoa (profesor de js,python,mongodb)",
  "likes":"0 likes",
  "content":"Mi primer comentario"
}
```

#### Archivo Comment.js

```js
export class Comment {
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    const comentario = {
      studentName: this.studentName + " (" + this.studentRole + ")",
      likes: this.likes + " likes",
      content: this.content
    }
    return comentario
  }
}
```

#### Archivo Student.js

```js
import { Comment } from "./Comment";

export class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    return comment.publicar();
  }
}
```

#### Archivo solución exercise.js

```js
import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent extends Student {
    constructor(props, skills = []) {
        super(props);
        this.skills = skills;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: `profesor de ${this.skills.join()}`
        });
        return comment.publicar();
    }
}
```

## Examen 📌

<details>
	<summary>Haz clic para ver los resultados 👀</summary>
	<br/>

1. ¿Qué es __proto__ en JavaScript?   
	
	- 📌El mecanismo para que las instancias hereden los métodos y atributos de sus prototipos.   
	
	La propiedad `__proto__` es un enlace interno que tienen todos los objetos en JavaScript que apunta a su prototipo. El prototipo es un objeto del cual el objeto actual hereda métodos y propiedades. Cuando se accede a una propiedad en un objeto, JavaScript primero busca la propiedad en el propio objeto y luego en su prototipo a través de la cadena de prototipos hasta que se encuentra la propiedad o se llega al final de la cadena de prototipos.    
	
	Es importante destacar que `__proto__` es una propiedad no estándar y no es recomendable usarla en código de producción. En su lugar, se debe usar el método `Object.getPrototypeOf()` para acceder al prototipo de un objeto, o utilizar la sintaxis de clase o la función `Object.create()` para establecer la herencia de prototipos de forma más segura y legible.    

2. ¿Qué podemos guardar dentro de los objetos?

	- Strings
	- Números
	-  📌Todas las respuestas son correctas.
	- Arrays
	- Otros objetos

	En JavaScript, los objetos pueden contener una variedad de tipos de datos, incluyendo strings, números, arrays, otros objetos y otros tipos de datos. Los objetos en JavaScript se definen como colecciones de pares clave-valor, donde la clave es una cadena que identifica la propiedad y el valor puede ser de cualquier tipo de dato, incluyendo los mencionados anteriormente. 

	Por ejemplo, un objeto puede contener una propiedad "nombre" que almacena un string, una propiedad "edad" que almacena un número, una propiedad "amigos" que almacena un array de strings, y una propiedad "direccion" que almacena otro objeto con propiedades como "calle", "ciudad" y "pais". 

	Es importante destacar que los objetos en JavaScript son dinámicos, lo que significa que se pueden agregar o eliminar propiedades en cualquier momento, y los valores de las propiedades se pueden cambiar en cualquier momento.

3. Los módulos de ECMAScript 6 nos permiten:

	- 📌Aplicar encapsulamiento a nivel de archivos.

	Los módulos de ECMAScript 6 nos permiten definir y exportar un conjunto de funciones, objetos y/o variables desde un archivo JavaScript para que puedan ser importados y utilizados en otros archivos JavaScript. El uso de módulos permite aplicar encapsulamiento a nivel de archivo, lo que significa que el código dentro de un módulo está aislado del código fuera de él, lo que ayuda a prevenir conflictos de nombres y a mantener el código organizado y modularizado. 

	Los módulos ECMAScript 6 se definen utilizando la sintaxis `export` para exportar funciones, objetos y/o variables desde un archivo y la sintaxis `import` para importarlas en otro archivo. Los módulos también pueden tener dependencias, lo que significa que pueden importar otros módulos y utilizar sus funciones, objetos y/o variables. 

	Es importante destacar que el soporte de los módulos ECMAScript 6 varía según el navegador y se requiere una herramienta de compilación como Babel para transpilar el código a una versión compatible con navegadores más antiguos.

4. ¿Para qué creamos objetos en JavaScript?

	- Para agrupar propiedades en una lista dándole un “nombre clave” a cada elemento.
	- Para agrupar variables relacionadas en un mismo lugar dentro del código.
	-  📌Todas las respuestas son correctas.
	- 📌Para crear los moldes de elementos que necesitan nuestros proyectos.

5. ¿Cuál es la convención para nombrar atributos o métodos privados en JavaScript?

	- 📌 Empezar con _ (guión bajo).

6.  ¿Cómo podrías crear un getter que exponga al atributo "privado" _name en JavaScript?

	- 📌get name() { return this._name; }

7.  ¿Qué son los prototipos en JavaScript?

	- 📌Moldes para crear objetos.

8.  ¿Cuál de las siguientes líneas de código para acceder al atributo de un objeto en JavaScript es INCORRECTA?

	-  📌objeto->atributo
	- objeto.atributo
	- objeto["atributo"]
	- objeto[variable]

	Esta sintaxis no es válida en JavaScript para acceder a los atributos de un objeto. En su lugar, se pueden utilizar las siguientes opciones:
	
	- La sintaxis de punto `objeto.atributo`: esta sintaxis se utiliza para acceder a un atributo de un objeto utilizando el nombre del atributo como una cadena después del operador de punto.
	
	- La sintaxis de corchetes `objeto["atributo"]`: esta sintaxis se utiliza para acceder a un atributo de un objeto utilizando el nombre del atributo como una cadena dentro de corchetes.
	
	- La sintaxis de corchetes con una variable `objeto[variable]`: esta sintaxis se utiliza para acceder a un atributo de un objeto utilizando una variable que contiene el nombre del atributo dentro de corchetes.
	
	Es importante destacar que la sintaxis de punto es más comúnmente utilizada y es más fácil de leer, mientras que la sintaxis de corchetes es útil en situaciones en las que el nombre del atributo es dinámico o se desconoce de antemano.

9.  ¿Si todos los arrays tienen el método .push dentro de su atributo __proto__, cuál es la forma más cómoda de ejecutarlo desde el array asignaturas en JavaScript?

	- 📌asignaturas.push()

	En JavaScript, el método `push()` es un método que se encuentra en el objeto `Array.prototype`, lo que significa que todos los arrays en JavaScript tienen este método disponible a través de su propiedad `__proto__`. Sin embargo, es importante destacar que el acceso directo a la propiedad `__proto__` no es recomendado para su uso en código de producción y se debe evitar en su lugar se debe utilizar la sintaxis de punto o corchetes para acceder a los métodos y propiedades de un objeto.
	
	La sintaxis más común y conveniente para ejecutar el método `push()` desde un array en JavaScript es simplemente llamando al método en el objeto array, como en el ejemplo `asignaturas.push()`. Esto agrega un nuevo elemento al final del array `asignaturas`.
	
	Las otras opciones propuestas (`asignaturas.proto.push()`, `asignaturas.super.push()`, `asignaturas.__proto__.push()`, y `asignaturas.prototype.push()`) no son sintaxis válidas para acceder al método `push()` de un array en JavaScript.

10. Las instancias de prototipos también heredan los métodos y atributos del prototipo Object. Esta afirmación es:

	- 📌Verdadera

11.  ¿Qué es herencia en JavaScript?

	- 📌La capacidad de heredar/extender los métodos y atributos de un prototipo "madre".

12.  Para aplicar la herencia en JavaScript, ¿cómo podemos ejecutar el método constructor del prototipo del que extendemos?

	- 📌Con el método super.

13. ¿Qué es abstracción en JavaScript?

	- 📌Crear prototipos "molde" para abstraer la lógica y datos de nuestros objetos.

14. ¿Cuál de las siguientes es una mejor forma de calificar nuestro código JavaScript?

	- 📌Legibilidad.

	La legibilidad se refiere a la facilidad con la que el código se puede leer y entender. Es importante que el código sea legible porque facilita la mantención y solución de errores en el código, y también ayuda a que otros desarrolladores puedan entender el código y colaborar en el proyecto.
	
	La modernidad de la sintaxis (opción a) es importante, pero no es el único factor a considerar al calificar nuestro código JavaScript. La cantidad de líneas de código (opción b) y el tiempo que tardas en escribirlo (opción c) también son importantes, pero no son indicadores de la calidad del código en sí mismos. La cantidad de líneas de código repetidas (opción d) es un indicador de la calidad del código, pero solo en la medida en que se refiere a la capacidad del programador para escribir código limpio y eficiente, evitando duplicación innecesaria.
	
	En resumen, la legibilidad es un factor clave para calificar nuestro código JavaScript, aunque también debemos considerar otros factores importantes como la eficiencia, el rendimiento, la funcionalidad, la escalabilidad y la capacidad de mantenimiento.

15. Los atributos __proto__ en los objetos de JS pueden contener otro atributo __proto__ por dentro. Esto es:

	- 📌Verdadero

16. ¿Cuáles son las palabras clave que diferencian a una función “normal” de un prototipo en JavaScript?

	-📌this, new y prototype.

	En JavaScript, una función constructora o prototipo es una función especial que se utiliza para crear objetos. Estas funciones se distinguen de las funciones regulares por el uso de las palabras clave `this`, `new` y `prototype`.
	
	- `this` se refiere al objeto actual que se está creando o modificando.
	- `new` se utiliza para crear una nueva instancia del objeto.
	- `prototype` se refiere al objeto que se utiliza como plantilla para crear nuevos objetos.
	
	Por lo tanto, la combinación de estas palabras clave es lo que distingue a una función prototipo de una función regular.

17. ¿Cuál de las siguientes afirmaciones sobre los objetos en JavaScript es INCORRECTA?

	- 📌Los objetos literales NO son instancias de ningún prototipo.
	- Object es el prototipo madre de todos los objetos y prototipos.
	- Los objetos son instancias de prototipos.
	- Los arrays son objetos.

	En JavaScript, todos los objetos son instancias de prototipos, incluyendo los objetos literales. De hecho, los objetos literales son instancias de `Object.prototype`.
	
	La opción b es correcta. `Object` es el prototipo madre de todos los objetos y prototipos en JavaScript. Todos los objetos en JavaScript heredan propiedades y métodos de `Object.prototype`, incluyendo el método `toString()`.
	
	La opción c es correcta. Los objetos en JavaScript son instancias de prototipos. Cada objeto tiene un prototipo heredado que define sus propiedades y métodos. Los objetos pueden heredar propiedades y métodos de su prototipo heredado y también pueden agregar sus propias propiedades y métodos.
	
	La opción d es correcta. Los arrays en JavaScript son objetos que tienen propiedades y métodos especiales para manipular conjuntos de datos. Los arrays heredan propiedades y métodos de `Array.prototype`, que a su vez hereda de `Object.prototype`.
	
	Por lo tanto, la afirmación incorrecta es la opción a: "Los objetos literales NO son instancias de ningún prototipo".


18. ¿Cuáles son los pilares de la POO?

	- 📌Abstracción, encapsulamiento, herencia y polimorfismo.

	Los pilares de la programación orientada a objetos (POO) son cuatro:
	
	1. Abstracción: se refiere a la capacidad de representar objetos del mundo real en el código mediante la identificación de sus características y comportamientos esenciales.
	
	2. Encapsulamiento: se refiere a la capacidad de ocultar la complejidad y los detalles innecesarios de una funcionalidad y exponer solo la interfaz necesaria para interactuar con ella.
	
	3. Herencia: se refiere a la capacidad de crear nuevas clases a partir de clases existentes, heredando sus propiedades y métodos y agregando nuevas propiedades y métodos.
	
	4. Polimorfismo: se refiere a la capacidad de utilizar una sola interfaz para representar diferentes tipos de objetos, de modo que un objeto pueda ser utilizado en lugar de otro.

19. ¿Qué son los objetos literales en JavaScript?

	- 📌Instancias directas del prototipo Object.

	En JavaScript, un objeto literal es una forma de crear un objeto de forma directa, sin necesidad de utilizar una función constructora. La sintaxis de un objeto literal es un conjunto de pares clave-valor entre llaves `{}`.
	
	Por ejemplo, el siguiente código crea un objeto literal con dos propiedades:

	```js
	let miObjeto = { 
	  propiedad1: "valor1", 
	  propiedad2: "valor2" 
	};
	```

	Los objetos literales son instancias directas del prototipo `Object`. Esto significa que heredan propiedades y métodos de `Object.prototype`, como el método `toString()`.
	
	Los objetos literales son una forma común y conveniente de crear objetos en JavaScript, ya que su sintaxis es clara y legible. Sin embargo, los objetos literales no son adecuados para todos los casos y en ocasiones se necesita crear objetos más complejos utilizando funciones constructoras o clases.

20. Completa la frase. "Todos los paradigmas de programación..."

	- 📌Intentan resolver los problemas, falencias o incomodidades de los paradigmas históricamente anteriores.

	Los paradigmas de programación son enfoques y estilos de programación que ofrecen diferentes formas de pensar y abordar el diseño y la implementación de programas. Cada paradigma tiene sus propias características y beneficios, pero todos comparten el objetivo de resolver los problemas, falencias o incomodidades de los paradigmas históricamente anteriores.
	
	Por ejemplo, el paradigma imperativo se centró en el control de flujo de la ejecución del programa mediante la secuencia de instrucciones, pero tenía problemas para manejar la complejidad y la modularidad de los programas grandes. El paradigma orientado a objetos surgió como una forma de resolver estos problemas, al permitir la encapsulación, la abstracción, la herencia y el polimorfismo.
	
	Cada paradigma tiene sus ventajas y desventajas, y no existe un paradigma que sea superior a todos los demás en todos los casos. En cambio, los programadores deben elegir el paradigma que mejor se adapte a sus necesidades y objetivos, y deben estar dispuestos a aprender y adaptarse a medida que evoluciona la tecnología y cambian las demandas del mercado.
</details>