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

```C#
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

```c#
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


```c#
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


[# Diferencia entre WPF y WinForms](https://www.geeksforgeeks.org/difference-between-wpf-and-winforms/)

🎲


🎲🎲🎲🎲🎲🎲🎲🎲🎲
```c#
```

## Notas / Aportes
<details>
	<summary>Haz clic para ver a los contribuidores 👀</summary>
	<br/>
	
**🔥 Team:**    
- Renato Reyes Fuentes

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
- 😊 👈👀 😌 😍 🧛‍♂️     
- 🟥 ⬜ ⬛ ◼ ◻ 🔷 🔶 🔻 🔺 🔴 🟣 🔵      
- ✔ ➕ ↕ ↔ ➡ ⬇ ⬅ ✅ ▶ ❌ ❗            
- 🧰 ⛓ 💡 🌐 🖥    🛡    ▶    
- 🔅 🔆 🌚 🌗       

</details>