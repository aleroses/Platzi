# Xamarin forms desde cero con Visual studio 2022
[Tutorial Canal Código 369](https://www.youtube.com/watch?v=GtrDcqRiDlA&t=636s)

Fundado en 2011 como proyecto independiente que permitía trabajar bajo una sola base de código apps para android y iOS.

En el 2016 Microsoft compra Xamarin y lo convierte en Xamarin forms.

|Frontend |Backend |
|---------|--------|
|XAML     |C#      |

![XAML y HTML](https://i.postimg.cc/2j1TYyXK/1-xaml-html.png)

## XAML
Nace a partir de HTML que es un lenguaje de marcado. Se podría decir que XAML es como el HTML para dispositivos móviles de Microsoft. 

XAML también soporta CSS.

## Patrón de software MVVM

Este patrón separa todo lo que está en el backend y lo pasa a una nueva  vista llamada Modelo. Luego al unirlos para darle funcionalidad al Frontend se utilizan Binding (Vinculante). 

## Instalación de Visual Studio 2022

Este link funciona en Obsidian y te lleva directo a las notas donde tengo la instalación de VS 2022 🔥🐯
[[1-Csharp-intro#2. Instalación de Visual Studio Community]]

Para mayor detalle en la instalación ver la [Documentación](https://learn.microsoft.com/en-us/xamarin/get-started/installation/?pivots=windows-vs2022)

🔥 Abrimos: Visual Studio Installer 
- Visual Studio Community 2022     
- Modificar 
- Cargas de trabajo: Móviles y de escritorio(5) 
	- ✅ Desarrollo de la interfaz de usuario de aplicaciones multiplataforma
		- Cree aplicaciones de Android, iOS, Windows y Mac desde un único código base con C# mediante .NET MAUI
	- Antes: Desarrollo para dispositivos móviles con .NET

Panel izquierdo: Detalles de instalación 
- Desarrollo de la interfaz de usuario de aplicaciones multiplataforma de .NET
	- En Opcional 
		- ✅ Xamarin 
- Instalar durante la descarga: 🛡Modificar

## Instalar MEMU Play 

[MEMU PLAY Download](https://www.memuplay.com/)

Ejecutar instalador    
- Instalar rápidamente 
- Rechazar antivirus 
- Rechazar RAV
- Esperar
- Reiniciar pc
- Abrir Ejecutar MEmu

### Configurar MEMU Play
- Buscar las 3 ➖
- Configuraciones 
- 🖥 Mostrar
- Resolución: 🔘 Celular 720 * 1280 (240dpi)
- Ok
- Reiniciar ahora

### Configurar la parte interna
Hacemos esto para no tener problemas con VS

- ⚙Ajustes 
- Información del tablet 
	- Número de compilación varias veces ✨✨ 
		- Con esto activas las opciones de desarrollo
	- ⬅ Retroceder 
- Opciones del desarrollo
	- ✅ Sí en la parte superior 
	- ✅ Actualizaciones del sistema automáticas 
	- ✅ Depuración por USB: Aceptar 
	- ⬅ Retroceder
- Seguridad 
	- ✅ Orígenes desconocidos 

### Play store 
Iniciar sesión con la cuenta de Google: No se puede :v

## Configurar dispositivo Android

Para depurar con un dispositivo Android, puede configurar su dispositivo Android para conectarse a Visual Studio o usar un emulador. Elija el escenario que sea más aplicable a usted.

[Pasos detallados](https://dotnet.microsoft.com/en-us/learn/xamarin/hello-world-tutorial/devicesetup)

## Crear un proyecto

Todos los lenguajes ➡ Todas las plataformas ➡ Móvil

1. Aplicación móvil (Xamarin.Forms) 
	- Plantilla de varios proyectos para compilar aplicaciones para iOS y Android con Xamarin y Xamarin.Forms     
	- C# - Android - iOS - Windows - Móvil 

2.  **Configure Your new project**   
    Name, location, solution, solution name…
    - Conversor
    - ✅ Colocar la solución y el proyecto en el mismo directorio. 
    - Siguiente

3. Nueva aplicación móvil    
	Seleccionar una plantilla para la aplicación  
	- En blanco: Una aplicación vacía con una sola pantalla inicial 
	Tengo previsto desarrollar:
		- ✅ Android
		- ✅ iOS


▶ Google G011A (Android 7.1 - API 25)🔽   
Tener abierto previamente MEMU Play

[Compilación de la primera aplicación](https://learn.microsoft.com/es-es/xamarin/get-started/first-app/?pivots=windows-vs2022)

## Distribución del proyecto 

- ▶ `C#` Conversor:      
	Código base, se va a compartir tanto para Android como para iOS    
	- ▶ Dependencias:    
		Paquetes a instalar 
	- 📑 App.xaml: `Frontend`   
		- ▶ `C#` App.xaml.cs: `Backend`   
			Desde aquí se arranca la aplicación. Aquí podemos decidir desde que página va a inicializarse 
	```cs
	public App()
	        {
	            InitializeComponent();
	
	            MainPage = new MainPage(); //👈👀
	            //Página desde donde se va a arrancar
	        }
	```
	- 📑 MainPage.xaml:   
		Viene por defecto  





🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲
```cs
```

## Emojis:  
<details>
  <summary>Haz click aquí para ver los emojis 👀</summary>

  <br/>

**🔥 Emojis:**        
- 🔥 ❄ ✨ 📌 🎲 🔍 🎉     
- 🤴🦁 🧔🐯  👀 👉 👈 ☝ 👇   
- 😊 👈👀 😌 😍 🧛‍♂️ 📂 📁   🗂 📑
- 🟥 ⬜ ⬛ ◼ ◻ 🔷 🔶 🔻 🔺 🔴 🟣 🔵 🔘     
- ✔ ➕ ↕ ↔ ➡ ⬇ ⬅ ✅ ▶ ❌ ❗            
- 🧰 ⛓ 💡 🌐 🖥    🛡 ⚙ 🔽    
- 🔅 🔆 🌚 🌗       

</details>