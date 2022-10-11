# Curso de Introducción a C#

> **Ricardo Celis** - [Faculty Manager en Platzi](https://platzi.com/profesores/celismx/)      
> **@CelisMX** en Twitter 


## 1. ¿Por qué aprender C#? ¿Para qué sirve?

C# fue un lenguaje que **Microsoft** comenzó a desarrollar a finales de los 90.

En el año 2002 salió la versión 1.0 del lenguaje, ya con todos su estándares que pueda tener, fue su gran lanzamiento.

A lo largo de los años C# a evolucionado bastante, hoy en día esta en la versión 8.0.

C# tiene gran demanda en:    

-   Mundo Web, utilizando .NET Framework
-   Desarrollo de video juegos, a través del motor de desarrollo de juegos Unity Engine.
-   En las aplicaciones híbridas, donde uno puede hacer aplicaciones que exporten a IOS o Android gracias a Xamarin.

[Para complementar tus conocimientos y tener éxito en este curso!](https://docs.microsoft.com/es-es/learn/paths/csharp-first-steps/)

🎲

## 2. Instalación de Visual Studio Community

Como herramientas tenemos:

### **Visual Studio Code**  
Nos va ayudar en temas que tiene que ver con la web, es un **EDITOR DE CÓDIGO** que nos ayudara en todos los lenguajes que sirven en todas las plataformas.

### **Visual Studio** 🔥  
Es mas robusto, permite hacer interfaz grafica, es un **IDE**, esta enfocado en cargas de trabajo web, escritorio, móvil, juegos y otros.   
[Comparar versiones](https://visualstudio.microsoft.com/es/vs/compare/)

[VS.Microsoft](https://visualstudio.microsoft.com/)     
**Download Visual Studio:** ➡ Community 2022

![Download](https://i.postimg.cc/MZnqQ7yw/2-download.png)    
**VisualStudioSetup.exe** 👈
- Doble clic sobre el ejecutable
- Visual Studio Installer: Continuar

![Download-more](https://i.postimg.cc/hvNSXjCV/2-download-csharp.png)    
**Workloads** (Cargas de trabajo)    
Es el flujo o las herramientas que se van a usar día a dia.    
- 🌐 ASP.NET and web development 
- 🖥 .NET desktop development 

**Individual components** - Buscar **C#** 🔍  
- Compilers, build tools, and runtimes 
	- ✅ C# and Visual Basic Roslyn compilers
	- ✅ MSBuild 
- Development activities 
	- ✅ C# and Visual Basic 

**Language packs**  
- English 
- Spanish 

Install while downloading: 🔵 **Install**    

![Finish download](https://i.postimg.cc/ydbM6GdG/2-download-finish.png)

Para finalizar:
- Elije un tema 🧛‍♂️
- Start Visual Studio 
- Sign in: Inicia sesión con email Microsoft 

#### ❄ Computadoras de bajos recursos 😥😪
Se recomienda probar con Visual Studio Code.

Para usar C# con VS code debemos:

1.  Instalar Visual Studio Code.  
    [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
2.  Instalar .Net Core.  
    [https://dotnet.microsoft.com/en-us/download](https://dotnet.microsoft.com/en-us/download)
3.  Instalar C# plugin para Visual Studio Code.

Aquí están algunos tutoriales:

- [Create c-sharp project with vsc](https://www.tutorialkart.com/c-sharp-tutorial/create-csharp-project-with-visual-studio-code/)
- [Visual Studio Code c-sharp](https://folderit.net/es/blog/visual-studio-code-c-sharp-es/#)

🎲

## 3. Conoce .NET 6
En la clase anterior acabamos de instalar Visual Studio Community 2019. Sin embargo, Microsoft recientemente lanzó la versión 2022, pero… ¿qué cambia exactamente? ¿Me impedirá seguir el curso? ¿Debo instalar otra versión? 🤔… Bien, comparemos estas versiones 😉. **Spoiler:** Esto no te impedirá continuar con el curso, pero te enseñaré a trabajar con esta versión 👀.

En la versión 2019 de Visual Studio usamos .NET en su versión 3.1. Entre las principales características de esta versión resalta el hecho de que debemos escribir toda la estructura de clases y namespaces en nuestro programa:

```cs
using System;

namespace HelloWorld
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Hello, World!");
		}
	}
}
```

¡Pero esto ya no es necesario en Visual Studio 2022! Esta versión del IDE utiliza por defecto a .NET en su versión 6, y es gracias a esta versión que podemos empezar a escribir directamente nuestro programa, sin tener la estructura base 😎:

```csharp
//Gracias a .NET Framework 6.0 ya no necesitamos definir toda la estructura,
//sino que ahora puedo empezar a escribir código directamente.
Console.WriteLine("Hello, World!");
```

Aunque .NET permite esto, algunas veces querrás trabajar con diferentes namespaces, o incluso querrás tener el control por tu propia cuenta de la clase con la que quieres trabajar; es por eso que también tienes la posibilidad de escribir la estructura de clases de siempre para que puedas tener todo el control de tu programa.

### ¿Y qué pasa si yo quiero usar la versión que usa el profesor en las clases?
¡Eso no es ningún problema! Como ya te mencioné, esa es la versión 3.1 de .Net, esta versión ya viene por defecto en Visual Studio 2019, pero si estás usando Visual Studio 2022 la puedes descargar… ¿adivinas de dónde? 👀.

Cuando instalamos Visual Studio también se nos instaló una aplicación llamada “Visual Studio Installer”. En esta aplicación tú puedes añadir o quitar funcionalidades de tu IDE, pero eso lo profundizaremos en la próxima clase. Por ahora, busca esa aplicación dentro de tus programas, ábrela y dale en **modificar**.

![vs installer](https://i.postimg.cc/9fSXF9VX/3-vs-installer.png)   
![vs modificar](https://i.postimg.cc/FzX90Q72/3-vs-modificar.png)

Dentro de ella debemos ir a la pestaña “Componentes Individuales” y aquí deberás seleccionar la opción que dice “.NET Core 3.1 Runtime (LTS)”

![.net-core-3.1](https://i.postimg.cc/SsMSXKN6/3-net-core-3-1-runtime-LTS.png)   
Install while downloading: 🛡 **Modificar**

Una vez seleccionada debes hacer click sobre el botón “Modify” o “Modificar” y esto añadirá .NET Core 3.1 a tu IDE, simplemente debes reiniciarlo cuando termine.

Con esto listo, cuando crees un nuevo proyecto o solución, en la ventana de configuración de tu nuevo proyecto verás una opción que dice “Framework”. En ese campo podrás seleccionar entre la versión 3.1 o la versión 6 (o cualquier otra versión que hayas instalado).

![Elegir versión 3.1](https://i.postimg.cc/rF5wswFG/3-elegir-version.png)
> Esto sale al seguir los pasos para crear un nuevo proyecto 

Recuerda que la versión 3.1 es la que estaremos usando durante la mayoría de clases el curso, pero tú puedes usar la versión 6 sin problemas 😉.

Como dato adicional, el proyecto que encontrarás en la sección de recursos de cada una de las clases estará hecho bajo la versión 3.1, esto para que sea compatible con quienes aún use la versión 2019 💚.

👋 Nos vemos en la siguiente clase donde seguiremos profundizando en nuestro IDE.


### ❄ Pequeño resumen acerca de las versiones de .NET:
-   .NET Framework (4.8) = Aplicaciones solo para Windows
-   .NET Core (3.1) = Version Opensource que es multiplataforma.
-   .NET 5 (y luego la 6) = Version más reciente que unifica .NET Core con .NET Framework, opensource y multiplataforma

[Terminología .NET vs .NET Core vs .NET Framework vs .NET Standard 🤯 ¡Fuera DUDAS!](https://www.youtube.com/watch?v=zWfIl2Za-es)

🎲

## 4. Introducción a Visual Studio y nuestro primer "Hola, mundo" en consola

### Crear Proyecto usando .NET Core 3.1
- Create a new project

1. **Console App**  
	A project for creating a command-line application that can run on .NET on Windows, Linux and macOS
	- Console App (.NET Core) = **Console Application** 
		- C# - Linux - macOS - Windows - Console 

2. **Configure Your new project**  
	Name, location, solution, solution name…
	- helloWorldPlazi
	- Siguiente

3.  **Additional Information**  
    Framework **.NET Core 3.1 (Long-term support)**
	- Aquí puedes cambiar el Framework
	- Create

[Explicación de la arquitectura de este programa](https://platzi.com/clases/1032-c-sharp-2017/9790-arquitectura-y-hola-mundo-desde-la-consola/)


```csharp
using System;

namespace helloWorldPlazi
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello Platzi!");
        }
    }
}
```

Para probar picarle a:
- ▶ helloWorldPlatzi   
	Aparecerá una consola con el texto impreso. 


❄ Pestaña Extensions    
- Manage Extensions 
	- Code stream 

❄ Pestaña Window   
- Reset Window Layout: Cambiar el layout 

✨Cuando el compilador devuelve code 0, este es el exit code del ejecutable el que es 0, (NO ES el exit code del compilador) cuando un programa tiene un exit code igual a 0 es que termino correctamente, otro número indica un error en la ejecución, esto es bien sabido sobre todo cuando han programado en C o cuando han usado BASH en Linux y ejecutan comandos, el exit core de un programa sirve para saber si no hubo error.

🎲

## 5. ¡Nuestro primer "Hola, mundo" en una aplicación gráfica!

🔥 Dentro del IDE   
- File
- New
- Project 
- Buscar WPF: Windows presentation foundation 
	- `WPF App (.NET Framework)` 
	- **Aplicación de WPF (.NET Framework)**
		- C# - XAML - Windows - Escritorio 
- Siguiente 
- name: helloWorldGrafico 
- Create 

🔥 Dentro del proyecto: `MainWindow.xaml`    
Panel izquierdo:    
- `ToolBox` / Cuadro de herramientas
- Common WPF Controls 
	- Label: Arrastrar hacia el recuadro blanco 
	
Al seleccionar el objeto aparece un panel de propiedades del lado inferior derecho, aquí puedes cambiar la fuente del texto, etc.

Panel superior:   
- ▶ Start / Iniciar

### WPF:  
Windows Presentation Foundation    
Tecnología para desarrollar interfaces de interacción en Windows.

### XAML:  
Extensible Application Markup Language    
Lenguaje de marcado para la interfaz de usuario de WPF


[Diferencia entre WPF y WinForms](https://www.geeksforgeeks.org/difference-between-wpf-and-winforms/)

🎲

## 6. ¿Cómo funcionan los Namespaces en C#?
### **Namespace**: 
Tiene que representar algo significativo para el programa, con un nombre único. Cada Namespace puede tener diferentes clases, tantas como requiera el programa. 👇

#### **Clases**:
Las clases son plantillas para crear entidades, tantas como se requiera. Cada clase puede tener diferentes métodos. 👇
   
##### **Métodos**: 
La forma o manera de ejecutar funcionalidades del programa.

🔥 Veamos un ejemplo:   
Cerrar todos los archivos dentro del IDE luego....    
- File
- Open 
- Project or solution 
- 🗂 Repos
- Entramos: 📂helloWorldPlatzi
- Seleccionar archivo `.sln` / solution 
- Open

```cs
using System; 

namespace helloWorldPlazi                //👈👀 Namespace: unique
{
    internal class Program               //👈👀 Class
    {
        static void Main(string[] args)  //👈👀 Method
        {
            Console.WriteLine("Hello Platzi!"); //👈👀 Statement 
        }
    }
}
```


### ❄ Cómo definir un Namespace en C#
**Nota de Platzi: Si programas en C#, los Namespaces pueden hacer tu vida más fácil. En este guest post, nuestro estudiante Juan Castro Lurita nos explica por qué.** En C# los Namespaces se componen de un conjunto de objetos relacionados como clases, delegados, estructuras, interfaces, etc. Así mismo **con los Namespaces organizamos mejor nuestro código** y lo mantenemos bien limpio y estructurado. Una vez definido el Namespace en un archivo aparte, podemos acceder a las clases y demás elementos definidos en ello. Una de las ventajas de usar Namespaces es **la rapidez y el ahorro de escritura de código**, ya que evitamos escribir el Namespace completo dentro de nuestro código. Por ejemplo **con el Namespace “System” podemos imprimir un mensaje así de sencillo**:

```cs
// Instanciamos el Namespace System con la directiva using:
using System;

// Imprimimos el siguiente Texto, con la sencilla instrucción:
Console.WriteLine("Ricos Postres !");

// Obtenemos:
Ricos Postres !

```

Pero si no usamos el Namespace System tendríamos que escribir:

```cs
// Para acceder al Namespace System lo escribimos manualmente antes de la instrucción
// Console.WriteLine("Ricos Postres !");
System.Console.WriteLine("Ricos Postres !");

// Obtenemos:
Ricos Postres !</pre>
```

Como pueden ver tendríamos que estar declarando en cada linea el Namespace System. Entonces si usamos un Namespace evitaremos esto y también podremos acceder a sus demás propiedades. En este artículo les mostraré cómo definir y componer nuestro Namespace en un archivo aparte y luego lo usaremos o instanciaremos en un nuevo archivo en nuestro proyecto.

#### Definiendo nuestro Namespace

Crearemos nuestro archivo **postres.cs** en donde definiremos nuestro Namespace llamado Postres:

```cs
// Instanciamos el Namespace System con la directiva using:
using System;

// Le doy un nombre a mi Namespace
namespace Postres
{
  // Creo la Clase MisPostres
  public class MisPostres

  {
    // Creo mi método Test
    public void Test()

    {
      // Imprimo un Texto
      Console.WriteLine("Soy el Namespace Postres !");

    }

  }

}
```

#### Utilizando el Namespace creado

Ahora vamos a usar nuestro Namespace, lo instanciaremos en nuestro archivo **main.cs**:

```cs
// Instancio el Namespace Postres, ya no instancio el Namespace System porque ya viene dentro del
// Namespace Postres
using Postres;
// Creo un Namespace para mi Aplicación, la llamare MiAplicacion
namespace MiAplicacion
{  
  // Creo la clase principal de mi Aplicación
  class MainClass

  {
    // Declaro el Método Main, dentro de el utilizaré la clase Postres de el Namespace Postres que 
    // tengo en el archivo postres.cs
    public static void Main (string[] args)

    {     
      // Instancio la Clase MisPostres que definí dentro del Namespace Postre, dentro del archivo
      // postres.cs
      MisPostres mp = new MisPostres();

      // instancio el método Test que definí dentro del Namespace Postre, dentro del archivo postres.cs
      mp.Test();

    }

  }

}
```

Ejecutamos nuestro proyecto y obtendremos:

![Resultado](https://static.platzi.com/blog/uploads/2016/04/nar.jpg)

🎲

## 7. Tipos de datos

|Tipo de dato |Espacio que ocupa en memoria |Rango |Descripción|
|-------------|-----------------------------|------|-----------|
|int          |4 bytes              |-2147483648 a 2147483647  |Almacena números enteros                     |
|bool         |1 byte               |0 a 1                     |Almacena un valor que puede ser verdadero o falso|
|float        |4 bytes              |De 6 a 7 dígitos          |Almacena números decimales                   |
|double       |8 bytes              |Hasta 15 dígitos          |Almacena números decimales                   |
|char         |2 bytes              |Un solo carácter          |Almacena un único carácter o letra           |
|string       |2 bytes por carácter |-                         |Almacena una secuencia de caracteres         |
|long         |8 bytes              |-9223372036854775808 a 9223372 036 854 775 807|Almacena números enteros |
|uint         |4 bytes              |0 a 4 294 967 295         |Almacena números enteros positivos           |

[Mas tipos de datos](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/built-in-types)

### **Casteo implícito:**  
Consiste en transformar cierto tipo de dato en otro al momento de realizar una operación, esto lo hace de manera automática c#.  
_Ejemplo: de un Int a un Long._

### **Casteo explicito:**  
Consiste en transformar un tipo de dato en otro de manera manual puesto que c# no lo hace de manera automática por el riesgo a la perdida de información .  
_Ejemplo: de un Double a un Float_

Para más info sobre conversión de tipos de datos [lee aquí.](https://docs.microsoft.com/es-es/dotnet/csharp/programming-guide/types/casting-and-type-conversions)

✨ Importante conocer el espacio que ocupan en memoria cada tipo de dato, ya que así podemos hacer que nuestra aplicación sea lo mas optima posible y no almacenar espacio innecesario

❄ En este video [EL EXTRAÑO Y TERRIBLE 2 147 483 647 ¡¡El número que estuvo a punto de reventar Youtube!!](https://youtu.be/jrGWMaUOSvk) se explica por que int (4 bytes = 2^32) llega justo a 2147483648 y como casi rompe Youtube, pues la variable que almacenaba las vistas era entero simple y un video estaba a punto de sobrepasarlo.

🎲

## 8. Variables

🔥 Crear nuevo proyecto:   
➡ Aplicación de consola ➡ StringExample ➡ .NET Core 3.1

```cs
using System;

namespace StringExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What's your name? Please Write your full name?");
            string fullUserName = Console.ReadLine();

            Console.WriteLine("Hello " + fullUserName + ", Welcome to Platzi");
        }
    }
}
```

▶ StringExample: Ver resultados en consola 

🔥 Crear nuevo proyecto:   
➡ Aplicación de consola ➡ NumericCalculator ➡ .NET 6.0

```cs
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

int number1;
int number2;

Console.WriteLine("Input the first number");
number1 = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Input the second number");
number2 = Convert.ToInt32(Console.ReadLine());

int result = number1 * number2;
Console.WriteLine("The result is: " + result);
```

▶ NumericCalculator: Ver resultados en consola 

### Nombrar Clases y Variables  
Comúnmente podemos encontrar formas distintas para escribir los nombres de nuestros programas, clases y variables. Estas son:

-   🐍**snake_case:** Sólo usa mayúsculas y separa las palabras con guión bajo ( _ ). Por consenso se usa en Python

-   👴**PascalCase:** Cada inicial con mayúscula y sin ningún tipo de separación entre palabras. El consenso indica que es la forma que usaremos para escribir los nombres de nuestros archivos, namespace (el nombre del programa y el namespace deben ser iguales también por mero consenso) y clases

-   🐫**camelCase**: Primera inicial en minúscula y el resto en mayúscula, sin separación entre palabras. Esto lo usaremos para las variables (sí, nuevamente se trata de puro consenso).


De la mano con los puntos anteriores y por comodidad, sobre todo a la hora de trabajar en equipo, se recomienda que cada elemento (métodos, variables, funciones, etc) de nuestro programa use **nombres representativos**, es decir, que nombremos cada cosa de forma que se pueda entender sin dificultad qué debería representar o hacer, y siempre acompañando con el tipo de dato que va a poseer la variable (en caso de tratarse de una)

```cs
int number1;
int number2;
```

💡Recordemos que podemos usar a modo de comodín la palabra reservada _var_ en lugar del tipo de valor específico a manejar, mas **no es lo recomendado**:

```cs
var number1;
var number2;
```

**Casteos y ReadLine**  
Ahora, pueden darse casos en los que necesitemos hacer cambiar el tipo de dato que vamos a utilizar y que el sistema no lo esté haciendo por su cuenta (**casteo implícito**, _int -> long_ , por ejemplo), siendo necesario que nosotros realicemos el cambio de forma manual (**casteo explícito**, string -> int, por ejemplo). En estas situaciones C# posee un método para realizar esta tarea usando _Convert_

```cs
int number1;
int number2;

Console.WriteLine("Input the first number");
number1 = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Input the second number");
number2 = Convert.ToInt32(Console.ReadLine());

int result = number1 * number2;
Console.WriteLine("The result is: " + result);
```

Con _Convert_ iniciamos el proceso de cambio de tipo de variable, pasando del string (aplicado por C#), seguido del tipo de dato a seleccionar y su peso en bytes con _ToInt32_ .

💡Recordemos que _Console.ReadLine()_ lo utilizamos para ingresar información, números enteros en este caso, por nuestra terminal. Aquí estaríamos indicando que lo ingresado con _Console.ReadLine()_ debe ser convertido a _int_ mediante el método _Convert_

```cs
Convert.ToInt32(Console.ReadLine());
```


### Tipos de conversión de datos en C#  
-   Conversión implícita
-   Conversión explicita
-   Conversión entre tipos no compatibles

#### Conversión implícita
La conversión implícita se da cuando convertimos un tipo de dato que ocupa un tamaño menor en memoria a un que ocupa uno mayor por ejemplo:

```cs
byte b = 1;
int i = b;
```

En este ejemplo estamos convirtiendo un tipo de dato **byte** que ocupa un solo byte en memoria a un un tipo de dato **int** que ocupa 4 bytes en memoria. Lo que ocurre internamente en memoria es:

```cs
b = 00000001
i = 00000000000000000000000000000001
```

La variable **b** esta compuesta de 7 ceros y un 1 y al convertir esta variable a un tipo de dato **int** C# añade 24 ceros para completar los 4 bytes, por lo que no hay perdida de información.

En el caso contrario

#### Conversión explicita

```cs
int i = 1;
byte b = i;
```

Para realizar la conversión se necesitan eliminar 4 bytes de información por lo que C# no permite convertir los datos ya que podría haber una perdida de información. Para realizar esta conversión tenemos que expresar de forma explicita la conversión para decirle a C# que estamos seguros de realizarla. A esto se le conoce como casteo de datos. El casteo de datos en C# se hace de la siguiente forma:

```cs
int i = 1;
byte b = (byte)i;
```

#### Conversión entre tipos no compatibles
Pero que pasa si tratamos de castear datos que no son compatibles por ejemplo:

```cs
string s = "1";
int i = (int)s;
```

Esta instrucción no va a compilar por que los tipos nos son compatibles y el casteo no funciona. Esto se debe a que la forma en la que se guarda la información de cadena de texto y un número son diferentes. Para realizar esta conversión podemos hacer uso de los métodos predefinidos como los siguientes:

```cs
string s = "1";
int i = Convert.ToInt32(s);
int j = int.Parse(s);
```

Todos los tipos de datos en C# poseen el método Parse que convierte una cadena de caracteres en su tipo de dato, en este caso **int**. La clase **Convert** posee varios métodos para convertir una cadena de caracteres en varios tipos de datos:

-   ToByte()
-   ToInt16()
-   ToInt32()
-   ToInt64()

Los números 16, 32 y 64 corresponden al número se bits que son equivalentes a 2, 4 y 8 bytes.

🎲

## 9. Manejo de strings
```cs
using System;

namespace helloWorldPlazi
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello Platzi!");

            int height = 170;
            int age = 26;
            string name = "Ale Vel";
            string information = "The requested info is: " 
	            + "\nUser name: " + name + "\nUser age: "
                + age+ "\nUser height: " + height;

            Console.WriteLine(information);
        }
    }
}
```

Tambien se puede interpolar el texto con `$""`
[Documentación]([https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated))

```cs
class Program 
	{ 
		static void Main(string[] args) 
		{ 
			Console.WriteLine("Hello Platzi!"); 
			
			int height = 170; 
			int age = 22; 
			string name = "Abdel Mejia"; 
			string information = $"The requested info is:\nUser name: {name} \nUser age: {age} \nUser height: {height}";
			 Console.WriteLine(information); 
		} 
	}
```

Con `$` también pueden hacer saltos de línea con`\t`

```cs
int height = 172; 
int age = 19; 
string name = "Marcos Lanuza"; 
string description = "The requested info is:\n" + 
	$"\tUser name = {name}\n" + 
	$"\tUser age = {age}\n" + 
	$"\tUser height = {height}"; 

Console.WriteLine(description);
```


❄ Hay diferentes funciones que se pueden usar con los strings.    
- **Length** para contar el numero de caracteres de un string.  
- **ToUpper() y ToLower()** para convertir todo el string en mayuscula o minuscula.  

El uso del \ es muy importante, ya que nos permite insertar en el string objetos como /, " y '.  
Ejemplos:

```cs
string team = "Liverpool";

Console.WriteLine("The length of the word Liverpool is: " + team.Length); //9 characters
Console.WriteLine(team.ToUpper()); //LIVERPOOL 
Console.WriteLine(team.ToLower()); //liverpool

Console.WriteLine("El \"Liverpool\""); //El "Liverpool"
Console.WriteLine("El \'Liverpool\'"); //El 'Liverpool'
Console.WriteLine("El \\Liverpool\\"); //El \Liverpool\
```

🎲

🎲🎲🎲🎲🎲
```cs
```

## Notas / Aportes
<details>
	<summary>Haz clic para ver a los contribuidores 👀</summary>
	<br/>
	
**🔥 Team:**    
- Renato Reyes Fuentes
	- Javier Guardia

</details>

🎲

## Examen:     
<details>
  <summary>Haz click aquí para ver los resultados 👀</summary>

  <br/>

1. Al cambiar algún estilo de color o texto en una instancia de un componente, el comportamiento esperado es:
	- 📌La instancia cambia su propiedades sin modificar el componente maestro.


2. o por:
	- 📌





</details>

🎲

## Emojis:  
<details>
  <summary>Haz click aquí para ver los emojis 👀</summary>

  <br/>

**🔥 Emojis:**        
- 🔥 ❄ ✨ 📌 🎲 🔍 🎉     
- 🤴🦁 🧔🐯  👀 👉 👈 ☝ 👇   
- 😊 👈👀 😌 😍 🧛‍♂️ 📂 📁   🗂 
- 🟥 ⬜ ⬛ ◼ ◻ 🔷 🔶 🔻 🔺 🔴 🟣 🔵      
- ✔ ➕ ↕ ↔ ➡ ⬇ ⬅ ✅ ▶ ❌ ❗            
- 🧰 ⛓ 💡 🌐 🖥    🛡    ▶    
- 🔅 🔆 🌚 🌗       

</details>