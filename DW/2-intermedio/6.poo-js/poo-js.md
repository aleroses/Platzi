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



Fernando Quinteros Gutierrez
Anfernee Valera