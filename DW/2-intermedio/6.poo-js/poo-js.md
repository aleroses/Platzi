# Curso Básico de Programación Orientada a Objetos con JavaScript

## JavaScript Orientado a Objetos

### 1. JavaScript: orientado a objetos, basado en prototipos

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


### 2. Qué es programación orientada a objetos

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



### 3. Bonus: fútbol y programación orientada a objetos

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

- **Las clases** es la forma en que se van obtener información la información de cada objetos, a estos se les llama atributos. A partir de estas clases podemos crear objetos, a esto se le llama Instanciar de una clase.

-   **Atributos**: Son las propiedades que tendrán cada uno de los objetos creados con nuestras clases, por ejemplo en la clase lápiz tiene como propiedades o atributos un color, textura, tamaño, forma de la punta, etc. Para el siguiente ejemplo tomamos una clase Usuario y le ponemos como atributo “nombre”

-   **Métodos**: Son simples funciones que existen dentro de la clase que determinan las acciones, por ejemplo en el caso del borrador tiene una función de borrar, para el lápiz tiene la función de escribir al igual que la pluma. Para el siguiente ejemplo de código ejecutaremos un método para saludar


### En la POO hay 4 pilares que debemos comprender

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

### 4. Qué es un objeto en JavaScript 

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

El uso de prototipos en JavaScript es la base de la herencia en JavaScript. Cuando se crea un objeto, se puede especificar su prototipo utilizando la propiedad especial `prototype`. Por ejemplo, se puede crear una función constructora para un objeto `Persona` y especificar su prototipo de la siguiente manera:

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

El uso de prototipos en JavaScript permite la creación de objetos con propiedades y métodos compartidos, lo que ayuda a la eficiencia y simplicidad del código. Además, permite la creación de estructuras de herencia complejas y dinámicas en JavaScript.

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

Otro ejemplo de método en JavaScriptsería el siguiente:

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

Cada instancia creada a partir de una función constructora o utilizando la sintaxis de clase es un objeto único y específico consus propios valores para los atributos. Por ejemplo, si creamos otra instancia "persona2" con valores diferentes, esta será un objeto distinto con sus propios valores de atributos:

```js
const persona2 = new Persona("María", 25);
```

En este caso, creamos otra instancia de la clase "Persona" con los valores "María" y 25 para los atributos "nombre" y "edad", respectivamente. Aunque ambas instancias son de la misma clase y tienen el mismo método "saludar", son objetos distintos con valores de atributos diferentes.

En resumen, una instancia en JavaScript es un objeto creado a partir de una función constructora o utilizando la sintaxis de clase. Cada instancia es un objeto único y específico con sus propios valores para los atributos y puede tener su propio comportamiento mediante la definición de sus propios métodos.




Fernando Quinteros Gutierrez
Anfernee Valera