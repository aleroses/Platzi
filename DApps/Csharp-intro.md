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

-   🐍**snake_case:** Sólo usa minúsculas y separa las palabras con guion bajo ( _ ). Por consenso se usa en Python

-   👴**PascalCase:** Cada inicial con mayúscula y sin ningún tipo de separación entre palabras. El consenso indica que es la forma que usaremos para escribir los nombres de nuestros archivos, namespace (el nombre del programa y el namespace deben ser iguales también por mero consenso) y clases

-   🐫**camelCase**: Primera inicial en minúscula y el resto en mayúscula, sin separación entre palabras. Esto lo usaremos para las variables (sí, nuevamente se trata de puro consenso).


De la mano con los puntos anteriores y por comodidad, sobre todo a la hora de trabajar en equipo, se recomienda que cada elemento (métodos, variables, funciones, etc.) de nuestro programa use **nombres representativos**, es decir, que nombremos cada cosa de forma que se pueda entender sin dificultad qué debería representar o hacer, y siempre acompañando con el tipo de dato que va a poseer la variable (en caso de tratarse de una)

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

En este ejemplo estamos convirtiendo un tipo de dato **byte** que ocupa un solo byte en memoria a un tipo de dato **int** que ocupa 4 bytes en memoria. Lo que ocurre internamente en memoria es:

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

## 10. Trabajando con números y operadores aritméticos   
Creamos nuevo proyecto ➡ Console App (.NET Core)
Project name: **squareArea** ➡ .NET Core 3.1

```cs
using System;

namespace squareArea
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Rectangle area calc.

            //Rectangle values
            float sideA = 10.2f; //f👈👀
            int sideB = 1;
            sideB++;
            sideB++;
            sideB--;

            //Rectangle area formula is a*b
            float area = sideA * sideB;
			//float = float * int 👈👀
            
            Console.WriteLine("The rectangle area is: " + area);
        }
    }
}
```

- Para comentar código en una sola línea se escribe dos barras diagonales `//`.  
-   El doble slash sirve para comentar **UNA** línea pero no si queremos hacer saltos de línea. En este último caso lo haremos con `/* */`

Para la variables tipo flotante en C#, hay que agregarle una **“f”** al final de cada valor. Ejm:   
`float valor = 10.0f`

- Operador de Suma: `+`  
- Operador de Resta: `-`  
- Operador de División: `/`  
- Operador de Multiplicación: `*` 
- Operador para sacar Módulo: `%`  
- Operador para incrementar: `++`  
- Operador para decrementar: `–-`

✨ Si escriben `cw` y dos veces tab les crea todo el `Console.WriteLine();`  
Y así evitan cansar sus manitas jajajaja 😊

🎲

## 11. Operadores lógicos

Creamos nuevo proyecto ➡ Console App (.NET Core)
Project name: **LogicalOperatorsExample** ➡ .NET 6.0

Acá no hay mucha variedad. Los operadores lógicos dan como resultado _True_ o _False_ y se pueden dar mediante tres operaciones:

-   && -> AND : “**ESTO Y AQUELLO** se tienen que cumplir o morimos todos”
    
-   || -> OR : “Si **ESTO** o **AQUELLO** pasa, morimos todos”
    
-   ! -> NOT : “Esto **NO ES ASÍ**, es todo lo contrario”
    

_"No entiendo, Maginer"_  
Ahí vamos, Timmy. Vamos con un ejemplo en código:

```cs
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

bool value1 = true;
bool value2 = true;
bool value3 = false;

// &&, ||, !

bool result = value1 && value2 && value3;
Console.WriteLine("The result of the logical AND is: " + result);
//Obtenemos: False

bool result2 = value1 || value2 || value3;
Console.WriteLine("The result of the logical OR is: " + result2);
//Obtenemos: True

bool result3 = !value1;
Console.WriteLine("The result of the logical ! is: " + result3);
//Obtenemos: False
```

Otro ejemplo:    
```cs
bool value1 = true; 
bool value2 = false; 
bool value3 = false; 
bool value4 = true; 

bool result1 = value1 && value2; 
Console.WriteLine(result1); 
// False 

bool result2 = value1 && value4; 
Console.WriteLine(result2); 
// True 

bool result3 = value1 || value4; 
Console.WriteLine(result2); 
// True 

bool result3 = !value2; 
Console.WriteLine(result3); 
// True
```

Según la terminal _result1_ dará _False_. Por qué? Porque el operador _&&_ **EXIGE** que **AMBOS** resultados sean verdaderos, que **TODAS** las condiciones se cumplan (o morimos todos), mientras que _||_ es más permisivo y le basta con que **UNA CONDICIÓN SE CUMPLA** (_result3_ = _True_). Por su lado el operador _NOT_, el _!_, simplemente da el resultado opuesto (_value2_ es _False_, así que **NOT** lo señala como _True_, algo así como “Puede ser que _value2_ **NO SEA VERDADERO?**” y no, no es verdadero, así que _True_).  
Un ejemplo práctico?

-   Si Timmy puso un mail válido (_True_) **YYYY** un nick disponible (_True_) podrá registrarse en Platzi (_True_)
    
-   Timmy se registró (_True_) pero **NO** confirmó su mail (_False_), lo que es obligatorio (&&), así que no podrá usar Platzi (_False_)
    
-   Si a Timmy le regalan el plan Expert **OOO** lo adquiere él, podrá ver todos los cursos de Platzi. Timmy no lo pagó (_False_) pero se lo regalaron (_True_), asi que puede usar Platzi al completo (_True_)
    
-   Timmy **NO ES** una referencia a los Simpsons? _False_. Entonces sí es una referencia a los Simpsons (_True_)


✨ Pueden definir multiples variables en la misma línea así:

```cs
var (a, b, c) = (false, true, false);
```

![Operadores lógicos](https://i.postimg.cc/yNFmKXgb/11-logicos-relacionales.jpg)

Ver todos los operadores 👉[[js-basico#11 Operadores Asignación Comparación y Aritméticos]] 🟣 Estos enlaces solo funcionan en obsidian. 

🎲

## 12. Operadores relacionales

```cs
/*
 == Igual a
 != No igual a 
 >  Mayor que
 <  Menor que 
 >= Mayor o igual que
 <= Menor o igual que
*/

int value1 = 3;
int value2 = 18;
int value3 = -18;

bool result0 = value1 == value2;
Console.WriteLine("The result of value1 == value2 is: " + result0);

bool result1 = value1 != value2;
Console.WriteLine("The result of value1 != value2 is: " + result1);

bool result2 = value1 > value2;
Console.WriteLine("The result of value1 > value2 is: " + result2);

bool result3 = value1 < value2;
Console.WriteLine("The result of value1 < value2 is: " + result3);

bool result4 = value1 >= value2;
Console.WriteLine("The result of value1 >= value2 is: " + result4);

bool result5 = value1 <= value2;
Console.WriteLine("The result of value1 <= value2 is: " + result5);
```

![Documentación](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/operators/comparison-operators)

🎲

## 13. Cómo leer datos de un usuario en C#
```cs
using System;

namespace squareArea
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Rectangle area calc.

            //Rectangle values
            Console.WriteLine("Please enter the side A of the rectangle, you can use decimals");
            float sideA = float.Parse(Console.ReadLine());

            Console.WriteLine("Please enter the side B of the rectangle, you can use decimals");
            float sideB = float.Parse(Console.ReadLine());

            //Rectangle area formula is a*b
            float area = sideA * sideB;

            Console.WriteLine("The rectangle area is: " + area);
        }
    }
}
```

Durante la clase vimos dos tipos de conversión, pero 🤔, ¿Cuál es la diferencia entre ambas?  

🥊 **Convert VS. Parse** 🥊

-   Ambas se pueden usar para convertir datos de un tipo a otro.
-   Convert puede manejar valores NULL retornando un 0.
-   Parse no puede manejar valores NULL y muestra un error (ArgumentNullException).  

✅ Ejemplo:  

> En la variable number2 convertiremos un valor NULL en FLOAT, como sabemos nos retornara 0, por ende, el resultado de la operación es igual a 0.  
> 😉 Puedes comprobar lo que retorna Convert imprimiéndolo por pantalla.

```cs
float number1 = 10.555f;
float number2 = Convert.ToSingle(null);
float result = number1 * number2;

Console.WriteLine($"El resultado es igual a {result}"); 
```

Dato: Para usar Convert para un tipo de dato FLOAT puede realizarse atreves del método `.ToSingle()`  

> Trataremos de realizar la misma conversión, pero ahora usando Parse. Cuando ejecutemos nos mostrara un error 🥲.


![](https://i.postimg.cc/JzzhLjDx/error.png)

🎲

## 14. Arreglos en C#
Creamos nuevo proyecto ➡ Console App (.NET Core)
Project name: **ArrayDemoProject** ➡ .NET 6.0

```cs
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

string[] coffeTypes;
float[] coffePrices;

coffeTypes = new string[] { "Expreso", "Largo", "Filtrado", "Latte" };
coffePrices = new float[] { 1.2f, 1.5f, 5.0f, 5.5f };

coffeTypes[1] = "Lungo";

for (int i = 0; i < coffeTypes.Length; i++)
{
    Console.WriteLine(coffeTypes[i] + " Coffe $ " + coffePrices[i]);
}
```

🔥 Formas de definir un Array o Matrices

- Sin especificar número de espacios.   
	`int[] array1;`

- Declarando numero de espacios, se inicializa el array con el numero de espacios mediante new.   
	`int[] array2 = new int[5];`

- Numero de espacios y valores, establecemos el numero de espacios y el valor de cada uno en la misma declaración.
	`int[] array3 = new int[3] { 3, 5, 10};`

- Sin especificar numero de espacios, el numero de espacios del array de define mediante el numero de valores en la declaración.
	`int[] array4 = { 4, 9, 5, 1 };`

Siendo este ultimo el que se muestra en la clase

🔥 Importante recordar, los arreglos tienen un length, que es el tamaño real de tu arreglo, por ejemplo:

```cs
string[] coffeTypes = new string[4];
```

En este caso tenemos un arreglo de tamaño 4, lo que significa que el último dato en este arreglo será el índice 3.¿Por qué?  
Porque los arreglos comienzan desde índice 0, hasta el length - 1. en este caso, 3.

Por lo tanto si yo hago un ciclo cualquiera, como un for, debo hacerlo hasta el tamaño del arreglo < 1, es decir, el término del ciclo debe ser cuando tengo un valor igual al length o mayor.

Por ejemplo:

```cs
for(int i = 0 ; i < 4 ; i++){}
```

También importante recordar que los arreglos tienen integrados de manera implícita el length que tienen, por esto es que también funciona lo siguiente:

```cs
for(int i = 0 ; i < coffeTypes.Length ; i++){}
```

[Documentación](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/arrays/)

🎲

## 15. Listas
Creamos nuevo proyecto ➡ Console App (.NET Core)
Project name: **ListExampleProject** ➡ .NET 6.0

```cs
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

List<string> tacoShoppingList = new List<string>();

tacoShoppingList.Add("Five Tacos de suadero");
tacoShoppingList.Add("Four Tacos de Tripa");
tacoShoppingList.Add("Five Tacos de pastor");
tacoShoppingList.Add("Four Coca-Colas\n");

for (int i = 0; i < tacoShoppingList.Count; i++)
{
    Console.WriteLine(tacoShoppingList[i]);
}

tacoShoppingList.RemoveAt(0);
//tacoShoppingList.Remove("Five Tacos de suadero");

for (int i = 0; i < tacoShoppingList.Count; i++)
{
    Console.WriteLine(tacoShoppingList[i]);
}
```

🎲

## 16. Métodos o methods
Un método es un bloque de código que contiene una serie de instrucciones. Un programa hace que se ejecuten las instrucciones al llamar al método y especificando los argumentos de método necesarios. En C#, todas las instrucciones ejecutadas se realizan en el contexto de un método. El método `Main` es el punto de entrada para cada aplicación de C# y se llama mediante Common Language Runtime (CLR) cuando se inicia el programa.


```cs
using System;

namespace methods
{
    internal class Program
    {
        static void Main(string[] args)
        {
            float[] pricesArray;

            pricesArray = new float[10];
            pricesArray[0] = 1.5f;
            pricesArray[1] = 2.5f;
            pricesArray[3] = 3f;
            pricesArray[4] = 5f;
            
            Random rnd = new Random();
            Console.WriteLine("Hello World, of random numbers!");
            Console.WriteLine($"{rnd.Next(1, 10)}");
        }
    }
}
```

[Documentación sobre Random Class](https://learn.microsoft.com/en-us/dotnet/api/system.random?view=net-6.0)

🔥 Una pequeña aclaración de conceptos que les evitará confusiones en un futuro.

```cs
Random rnd = new Random();

Console.WriteLine($"Una valor random: {rnd.Next(1,10)}");
```

-   `rnd` es una instancia de la clase `Random()`, esta instancia tendrá todos los métodos y propiedades de la clase.
-   `Next()` es un método de la clase `Random()`, como `rnd` es una instancia de la clase `Random()`, puede hacer uso de todos sus métodos y propiedades “publicas”.

[Documentación sobre los metodos](https://learn.microsoft.com/es-es/dotnet/csharp/methods)

Métodos y argumentos: ¿Cuáles son los métodos mas utilizados en C#?

🎲

## 17. Métodos de strings
Bienvenida o bienvenido a esta clase donde profundizaremos en los métodos de C#, específicamente en los métodos de strings.

### Los métodos en C#

Un **método** es un bloque de código que contiene varias instrucciones que podemos ejecutar las veces que necesitemos. Son de gran ayuda cuando tienes que hacer lo mismo varias veces en un mismo programa para no repetir el mismo código una y otra vez.

En la clase anterior conocimos cómo invocar un método y utilizarlo cuantas veces necesitemos para realizar acciones específicas en nuestro programa. Ahora veamos algunos de estos métodos para el manejo de strings.

### Métodos de strings

```cs
using System;
					
public class Program
{
	public static void Main()
	{
		string ClassTopic = "Métodos de strings";
		string School = "Platzi";
		Console.WriteLine("Estoy aprendiendo de "+ ClassTopic + " en " + School + ".");
	}
}
```

En la pieza de código anterior puedes ver un pequeño programa con dos variables tipo string y su impresión. Para este tipo de variables podemos usar una gran cantidad de métodos predefinidos dentro de la biblioteca estándar de C#.

Utilicemos estas dos variables strings para conocer algunos de ellos.

#### Clone()

```cs
	string SchoolClone = School.Clone().ToString();
	Console.WriteLine(SchoolClone);
```

El método `Clone()` crea un clon exacto de un string en una variable de tipo objeto. Por ello es necesario convertirlo a string utilizando `ToString()`.

#### CompareTo()

```cs
Console.WriteLine(ClassTopic.CompareTo(School));
Console.WriteLine(School.CompareTo(SchoolClone));
```

Sirve para comparar el contenido de dos strings. Si son iguales devuelve 0 para true y si son diferentes retorna 1 para false. En este caso como `School` y `SchoolClone` son strings idénticos devolverá un 0. ¿Qué crees que se imprima en la primera línea?

#### Contains()

```cs
Console.WriteLine(School.Contains("Pla"));
```

Retorna `True` si el string contiene los caracteres que se pongan en los argumentos del método.

#### EndsWith()

```cs
Console.WriteLine(School.EndsWith("zi"));
```

Similar a `Contains()`, pero para comparar si los caracteres están al final del string.

#### StartsWith()

```cs
Console.WriteLine(School.StartsWith("Pl"));
```

Funciona de la misma manera que `EndsWith()`, pero en este caso comprueba si empieza con una serie de caracteres indicados.

#### Equals()

```cs
Console.WriteLine(School.Equals(SchoolClone));
```

Funciona de forma parecida a `CompareTo()`, pero para indicar si el contenido de ambos strings retorna `True` o `False`.

#### IndexOf()

```cs
Console.WriteLine(School.IndexOf("a"));
```

Regresa la posición dentro del string del carácter indicado en el argumento.

#### ToLower() y ToUpper()

```cs
Console.WriteLine(ClassTopic.ToLower());
Console.WriteLine(ClassTopic.ToUpper());
```

Convierten el string en todas letras minúsculas o mayúsculas.

#### Insert()

```cs
Console.WriteLine(School.Insert(6, " es educación online efectiva"));	
```

Inserta un nuevo string dentro de otro en la posición indicada dentro de los argumentos. En este caso es en 6 que es la posición después de la última letra de “Platzi”.

#### LastIndexOf()

```cs
Console.WriteLine(ClassTopic.LastIndexOf("s"));
```

Regresa la posición de la última vez que aparece el carácter. En este caso la letra “s” aparece varias veces en el string y así podemos notar cómo devuelve la última posición en la que aparece.

#### Remove()

```cs
Console.WriteLine(ClassTopic.Remove(6));
```

Elimina los caracteres del string a partir de la posición que le indiquemos hasta el final.

#### Replace()

```cs
Console.WriteLine(ClassTopic.Replace("s", "z"));
```

Reemplaza todos los caracteres por otro indicado. En este caso todas las “s” serán cambiadas por “z”.

#### Split()

```cs
string[] split = ClassTopic.Split(new char[] { 's' });		
		
        Console.WriteLine(split[0]);
        Console.WriteLine(split[1]);
        Console.WriteLine(split[2]);
```

Este es un caso especial donde creamos un nuevo string donde guardamos el string separado en trozos por la letra indicada en los argumentos del método. Para este caso se separa por la letra “s” en 3 trozos que son los que imprimimos.

#### Substring()

```cs
Console.WriteLine(ClassTopic.Substring(2,10));
```

Devuelve un substring o trozo de string de acuerdo a las posiciones indicadas en los argumentos.

#### ToCharArray()

```cs
School.ToCharArray();
```

Convierte el string en un arreglo de caracteres.

#### Trim()

```cs
string TextWithSpaces = "  hola, había espacios al principio y al final ";
Console.WriteLine(TextWithSpaces.Trim());

```

Elimina espacios al principio y al final de un string.

### Tu reto

Ya conoces varios de los métodos que puedes utilizar con strings. Estos son los más comunes, pero existen unos más.

Como reto de esta clase crea un programa donde emplees por lo menos 5 de estos métodos de strings o de algún otro que investigues. Pon a volar tu creatividad y comparte en los comentarios el programa que creaste.

---

Te veo en la próxima donde obtendrás el superpoder de crear tus propios métodos y utilizarlos cuando los necesites.

🎲

## 18. Cómo crear tus propios métodos
Ha llegado el momento de aprender a crear tus propios métodos para tus programas en C#. Una vez que domines esta habilidad no querrás dejarla por lo poderosa que puede ser.

### Creando nuestro método

Lo primero que debemos hacer es iniciar un nuevo proyecto con nuestra clase base, tal cual, lo hemos hecho hasta ahora. Nombra tu proyecto `MyMethods` y tendrás un código como este:

```cs
using System;

public class MyMethods
{
	public static void Main()
	{
		Console.WriteLine("Hello World");
	}
}
```

Arriba del método `Main()` crea tu primer método siguiendo una estructura similar de la siguiente manera:

```cs
	public void IntegerAddition(int a, int b)
	{
		int Addition = a + b;
		Console.WriteLine("El resultado es " + Addition);
	}
```

Este método tiene el objetivo de sumar dos números enteros. Para ello dentro de los paréntesis se incluyeron dos parámetros que son los dos números a sumar.

Dentro del cuerpo o bloque del método hay dos instrucciones. La primera `int Addition = a + b;` es donde se realiza la operación de suma, asignándose a una variable del mismo tipo, y en la siguiente imprimimos ese resultado.

### Accediendo al método

Para utilizar nuestro método debemos llamarlo y lo haremos desde nuestro método `Main()`.

```cs
	public static void Main()
	{
		// Aquí llamaremos al método
	}

```

Es necesario generar una referencia creando una instancia de nuestra clase donde se ejecuta el programa. Para ello escribe:

```cs
MyMethods MyProgram = new MyMethods();
```

Donde `MyMethods` es la clase del programa y `MyProgram` el nombre que se le da a la instancia que se crea y que se usará como referencia para ejecutar el método las veces que sea necesario como se ve a continuación:

```cs
MyProgram.IntegerAddition(3,6);
```

Esta línea probablemente te parece más parecida a lo que has visto con los métodos que hemos utilizado antes. Lo que hace es llamar a la instancia `MyProgram` y a su método `IntegerAddition()` que es el que creamos. Dentro de sus paréntesis se ponen los argumentos que necesitan los parámetros `int a` e `int b` que se le asignaron.

```cs
	public static void Main()
	{
		MyMethods MyProgram = new MyMethods();
		MyProgram.IntegerAddition(3,6);
	}

```

### Métodos que retornan un valor

Algo que quizá no notaste es que el método anterior tenía una palabra clave “void”, lo que significa que no retorna algún valor. Es por ello que dentro del mismo método se imprimió el resultado.

Para generar métodos de los que podamos obtener valores conocerás la palabra clave `return` y al momento de crear un método se le pondrá el tipo de dato que retornará en lugar de `void`:

```cs
	public int IntegerMultiplication(int a, int b)
	{
		int Multiplication = a * b;
		return Multiplication;
	}

```

Este es un método muy similar al anterior con la diferencia de que tiene un valor `int` a ser retornado.

Al final de todo el contenido del método se encuentra la instrucción `return Multiplication;` que indica, con la palabra clave `return` que regresará el valor que hay dentro de esa variable al punto donde se llame el método desde `Main()`.

```cs
public static void Main()
	{
		int result = MyProgram.IntegerMultiplication(12,2);	
		Console.WriteLine("El resultado de la multiplicación es " + result);
	}
```

En este caso, como el método regresa un valor, es necesario almacenarlo en una variable. Al imprimir ese resultado se verá cómo el método funciona correctamente ejecutando la multiplicación.

```cs
using System;

public class MyMethods //👈👀 Program
{
	//Method 1
	public void IntegerAddition(int a, int b)
	{
		int Addition = a + b;
		Console.WriteLine("El resultado es " + Addition);
	}

	//Method 2
	public int IntegerMultiplication(int a, int b)
	{
		int Multiplication = a * b;
		return Multiplication;
	}
	
	public static void Main()
	{
		//Access reference
		MyMethods MyProgram = new MyMethods();
		
		//Call method 1
		MyProgram.IntegerAddition(3,6);

		//Call method 2
		int result = MyProgram.IntegerMultiplication(12,2);	
		Console.WriteLine("El resultado de la multiplicación es " + result);		
	}
}
```

---

Ahora conoces cómo crear y utilizar tus propios métodos. Como reto de esta clase crea un método que ejecute la división de dos números. Como tip toma en cuenta que la mayoría de las divisiones no dan resultados enteros, por lo que necesitarás definir tu método y variables con otro tipo de dato.

Comparte tu resultado en el sistema de comentarios. ¡Nos vemos en la próxima clase!

#### ❄ Ejemplo: 
```cs
using System; 
namespace Mis_metodos 
{ 
	class MisMetodos 
	{ 
		public float division(float a,float b) 
		{ 
			float operacion = a / b; 
			return operacion; 
		} 
		public static void Main() 
		{ 
			MisMetodos metodo = new MisMetodos(); 
			float imprimir= metodo.division(10, 2);
			Console.WriteLine(imprimir); 
		} 
	} 
}
```

🎲

## 19. La sentencia if
Creamos nuevo proyecto ➡ Console App (.NET Core)
Project name: **ifStatement** ➡ .NET Core 3.1

```cs
using System;

namespace ifStatement
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int anyValue = 14;
            string message = "";

            if (anyValue == 7)
            {
                message = "OMG, it's a miracle any Value is 7\n";
            }
            else if (anyValue == 14)
            {
                message = "OMG, it's a double miracle the value is 14\n";
            }
            else
            {
                message = "Puff, the value wasn't 7";
            }

            Console.WriteLine($"The answer is: {message}");
        }
    }
}
```

### Otro ejemplo: 
```cs
using System;
using System.Collections.Generic;

namespace ifFood
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string name;
            string message = "";
            int food;

            Console.WriteLine("Escriba su nombre: ");
            name = Console.ReadLine();
            Console.WriteLine("\nHola " + name + ", tenemos estos deliciosos platillos:\n");

            List<string> PeruvianFood = new List<string>();
            PeruvianFood.Add("1. Lomo saltado");
            PeruvianFood.Add("2. Arroz con pollo");
            PeruvianFood.Add("3. Ceviche");
            PeruvianFood.Add("4. Caviar");

            for (int i = 0; i < PeruvianFood.Count; i++)
            {
                Console.WriteLine(PeruvianFood[i]); 
            }

            Console.WriteLine("\nEscribe el número de su comida preferida: ");
            food = Convert.ToInt32(Console.ReadLine());

            if (food >= 1 && food <= 4)
            {
                message = $"\nSu platillo {PeruvianFood[food-1]} está listo para ser enviado";
            }else
            {
                message = "No existe la comida que pidio";
            }
            Console.WriteLine(message);
        }
    }
}
```

[Documentación Operadores de comparación](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/operators/comparison-operators)

🎲

## 20. La sentencia switch
Hola, quiero felicitarte por haber llegado hasta aquí. Estamos casi por llegar al final de este curso y en este momento conocerás la sentencia Switch.

### ¿Para qué sirve Switch?

Piensa en ella como una alternativa a `if-else`, pero en este caso se evaluará que una sola expresión coincida con una cantidad limitada de valores o condiciones.

Imagina que tienes una lista limitada de refrescos y quieres imprimir en un ticket cuál escogió el cliente y su precio. Para este caso podemos utilizar un Switch case de esta forma:

```cs
using System;
					
public class switchExample
{
	public static void Main()
	{
		Console.WriteLine("Enter the selected soda: ");
		string caseSwitch = Console.ReadLine();

		switch (caseSwitch)
		{
          case "cola":
              Console.WriteLine("Cola soda - $2 USD");
              break;
          case "lime":
              Console.WriteLine("Lime soda - $1 USD");
              break;
          case "orange":
              Console.WriteLine("Orange soda - $1.5 USD");
              break;
		  case "apple":
			  Console.WriteLine("Apple soda - $1 USD");
              break;
          default:
              Console.WriteLine("ERROR: You did not select a soda or you entered an incorrect value.");
              break;
		}
	}
}
```

### Cómo funciona

Para este ejemplo tenemos cuatro casos que el usuario puede elegir y una variable es la que es evaluada para que el Switch decida qué bloque de código ejecutar dependiendo de cada caso.

En el ejemplo esta variable es `caseSwitch` y es en `switch(caseSwitch)` donde se le indica a la sentencia Switch qué variable debe comparar para su decisión.

Así es que si la variable es igual a `“cola”`, por ejemplo, el case hará match y ejecutará:

```cs
Console.WriteLine("Cola soda - $2 USD");
break;
```

Si te fijas hay algo muy importante al final de cada bloque dentro de los casos y es la palabra reservada `break`.

Esta palabra le indica al programa que es el punto donde terminan todas las instrucciones de ese `case`termina toda instrucción de ese caso para regresar al punto de ejecución siguiente fuera del switch para continuar con el programa.

### ¿Y qué hay de default?

Al final de toda la estructura de Switch es muy recomendable poner un caso default. Piensa en él como un `else` que incluye algo que el programa debe ejecutar en caso de que no haya match con ninguno de los casos.

```cs
default:
    Console.WriteLine("ERROR: You did not select a soda or you entered an incorrect value.");
    break;
```

Para este ejemplo se imprime que al no haber ingresado alguno de los valores de los casos se está cayendo en un error. Un caso de uso bastante utilizado para los defaults.

---

En esta clase aprendiste otra sentencia del mundo de C# que ya puedes empezar a poner en práctica en tus programas. ¡Te veo en la próxima clase porque es momento de conocer sobre los ciclos!

🎲

## 21. Ciclo for
Creamos nuevo proyecto ➡ Console App (.NET Core)
Project name: **forCicle** ➡ .NET Core 3.1

```cs
using System;
//Los ciclos FOR ejecutan una instrucción 
//o varias, cada vez que ejecuta un ciclso
namespace forCicle
{
    internal class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i <= 50; i+=10)
            {
                Console.WriteLine("Hello World! #{0}", i);
            }
        }
    }
}
```


Un ciclo for puede tener una o mas variables de control

```cs
for (int i = 0, j = 0; i < 10 && j > -10; i++, j--)
    {
        Console.WriteLine("i: "+i+" j: "+j);
    }
```

🎲

## 22. Ciclo while
Creamos nuevo proyecto ➡ Console App (.NET Core)
Project name: **whileDoWhile** ➡ .NET Core 3.1

### While
```cs
using System;
using System.Runtime.CompilerServices;

namespace whileDoWhile
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool continueSoftwareExecution = true;

            while(continueSoftwareExecution == true)
            {
                Console.WriteLine("Do you wish to keep the software running? write 1 if yes, 0 if no");

                int keepGoing = Convert.ToInt16(Console.ReadLine());
                if (keepGoing == 1)
                {
                    Console.WriteLine("Hello World! The software will keep running");
                    continueSoftwareExecution = true;
                }else if (keepGoing == 0)
                {
                    Console.WriteLine("This is the last time the software is running");
                    continueSoftwareExecution = false;
                }
                else
                {
                    Console.WriteLine("Invalid input, Try Again");
                }  
            }
        }
    }
}
```

### Do While  
```cs
using System;
using System.Runtime.CompilerServices;

namespace whileDoWhile
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool continueSoftwareExecution = false;

            do
            {
                Console.WriteLine("Do you wish to keep the software running? write 1 if yes, 0 if no");

                int keepGoing = Convert.ToInt16(Console.ReadLine());
                
                if (keepGoing == 1)
                {
                    Console.WriteLine("Hello World! The software will keep running");
                    continueSoftwareExecution = true;
                }
                else if (keepGoing == 0)
                {
                    Console.WriteLine("This is the last time the software is running");
                    continueSoftwareExecution = false;
                }
                else
                {
                    Console.WriteLine("Invalid input, Try Again");
                }
            } while (continueSoftwareExecution == true);
        }
    }
}
```

#### for, while, do-while
🔥 Grosso modo  

- **for**    
	Se utilizará cuando se conozca la cantidad de veces que se va a repetir nuestro bloque de código.

- **while**    
	Es conveniente utilizarlo cuando la cantidad de veces a repetir el ciclo dependa de un factor difícil de controlar o que llegará en un momento inesperado.

- **do-while**   
	Lo emplearemos para asegurar que nuestro ciclo se ejecute al menos una vez y que además las condiciones del problema sean similares a las de los problemas en las que se emplea **while**

🎲

## 23. Introducción del proyecto: sistema de registros de usuarios
Creamos nuevo proyecto ➡ Console App (.NET Core)
Project name: **restaurant10TablesReservationSystem** ➡ .NET Core 3.1

### Primera parte: 
```cs
using System;

/*
 * 1. Validar si es usuario existente o si se debe registrar y generar un sistema de registros o login
 * 2. El programa debe ser capaz de darle la bienvenida a un usuario existente
 * 3. El programa debe repetirse hasta que se registren los 10 comensales 
 */

namespace restaurant10TablesReservationSystem
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] userNames = new string[10] { "migue", "", "", "", "", "", "", "", "", "" };
            int arrayCurrentIndex = 1;
            bool userType;

            Console.WriteLine("Welcome to the best restaurant in the world!");

            while (true)
            {
                Console.WriteLine("Are you registered user? Write true; or write false to register");
                userType = Convert.ToBoolean(Console.ReadLine());

                if (userType == true)
                {
                    Console.WriteLine("Hello, you are a registered user, please enter your user name");
                    string userToSearch = Console.ReadLine();
                    Console.WriteLine("The user you searched is {0}", userToSearch);
                }
            }
        }
    }
}
```

🎲

🎲🎲🎲🎲🎲🎲🎲🎲🎲

```cs
```

## Notas / Aportes
<details>
	<summary>Haz clic para ver a los contribuidores 👀</summary>
	<br/>
	
**🔥 Team:**    
- Renato Reyes Fuentes
	- Javier Guardia
	- Gustavo Emilio Aguilera López

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