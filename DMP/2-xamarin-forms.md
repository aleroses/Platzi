# Xamarin forms desde cero con Visual studio 2022
[Tutorial Canal Código 369](https://www.youtube.com/watch?v=GtrDcqRiDlA&t=636s)

Fundado en 2011 como proyecto independiente que permitía trabajar bajo una sola base de código apps para android y iOS.

![Xamarin forms](https://i.postimg.cc/P5qZ9CP2/1-xamarin-forms.png)

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

![MVVM](https://i.postimg.cc/PqwGVZPs/1-mvvm.png)

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
Iniciar sesión con la cuenta de Google

## Configurar dispositivo Android

Para depurar con un dispositivo Android, puede configurar su dispositivo Android para conectarse a Visual Studio o usar un emulador. Elija el escenario que sea más aplicable a usted.

[Pasos detallados](https://dotnet.microsoft.com/en-us/learn/xamarin/hello-world-tutorial/devicesetup)

## Crear un proyecto

![Convertor cm to m](https://i.postimg.cc/L8RLJNcg/2-project-cm-to-m.png)

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

Puede ser otro pero dejo este como ejemplo:     
▶ `Google G011A (Android 7.1 - API 25)`🔽      
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
	- 📑 MainPage.xaml: `Frontend`     
		Viene por defecto y es lo que se muestra cuando corremos el programa.   
		- ▶ `C#`MainPage.xaml.cs   `Backend`   

Ejecutar en la parte superior:   
▶ `Samsung SM-G985F (Android 7.1 - API 25)`🔽     

Detenemos el programa:     
🟥 Detener depuración 

🔥 Hot reload     
Si modificamos el archivo MainPage.xaml los cambios se verán automáticamente en nuestro emulador. 

## Crear página nueva    

En el Explorador de soluciones    
- **Clic derecho...** sobre ▶ `C#` Conversor:      
	- Agregar: Nueva carpeta: Nombre: **Vistas**
- **Clic derecho...** sobre Vistas   
- Agregar: Nuevo elemento 
- Buscar xaml: 📑 Página de contenido (ContentPage)
- Nombrar: **Menuprincipal.xaml**

🔥 Agregar archivo creado a la `App.xaml.cs` 

```cs
using Conversor.Vistas;
```

```cs
	public App()
	        {
	            InitializeComponent();
	
	            MainPage = new Menuprincipal(); //👈👀
	            //Página desde donde se va a arrancar
	        }
```

En caso de algún algún error, reiniciar el proyecto o la máquina. En caso de persistir algún error trabajar con los archivos anteriores y eliminar la carpeta creada.    
- `MainPage.xaml`
	- `C# MainPage.xaml.cs`


🔥 `MainPage.xaml` or `Menuprincipal.xaml`
```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="_1_conversor.MainPage">

    <StackLayout BackgroundColor="#ffe5b6">
        <Label Text="Conversor"
               FontSize="40"
               FontAttributes="Bold"
               Margin="0, 20, 0, 0"
               HorizontalOptions="Center"/>
        <Frame VerticalOptions="FillAndExpand"
               Margin="20"
               CornerRadius="20"
               HasShadow="False">
            <StackLayout VerticalOptions="Center"
                         Spacing="20">
                <Image Source="https://i.postimg.cc/DwH6gJMq/cinta-metrica.png"/>
                <Label Text="(cm) a (m)"
                       FontAttributes="Bold"
                       FontSize="40"
                       HorizontalOptions="Center"/>
                <Button Text="Iniciar"
                        TextTransform="None"
                        Background="#ffdc7a"
                        CornerRadius="10"
                        FontSize="Medium"
                        FontAttributes="Bold"/>
            </StackLayout>
        </Frame>
    </StackLayout>

</ContentPage>
```

Descargar Just Color Picker 
Opciones: Control + s  

🟥 Detener depuración 

🔥 Para mantener el orden en caso todo el código se desordene:      
Formatear:      
- Herramientas 
- Opciones 
- Editor de texto 🔽
	- XAML 
		- Formatting 🔽
			- Spacing 
				- Espaciado de atributos
					- [x] Poner cada atributo en una línea diferente
				- Espacio de elementos
					- [x] Quitar líneas vacías del contenido 
- Control + K + D

## Crear segunda página    

En el Explorador de soluciones    
- **Clic derecho...** sobre ▶ `C#` Conversor:      
- Agregar: Nuevo elemento 
- Buscar xaml: 📑 Página de contenido (ContentPage)
- Nombrar: **Convertir.xaml**

🔥 Agregar archivo creado a la `App.xaml.cs` 

```cs
using Conversor.Vistas;//👈👀  
// Esto o solo Conversor, dependiendo si se creo la carpeta Vistas o no
```

```cs
	public App()
	        {
	            InitializeComponent();
	
	            MainPage = new Convertir(); //👈👀
	            //Página desde donde se va a arrancar
	        }
```

📌 Nota importante: Para este ejemplo nombré al proyecto como `1-conversor`, pero dentro de los archivos xaml se debe escribir como `_1_conversor` de lo contrario nos mostrará un mensaje de error: 

> No se encontró el tipo ". Compruebe que no falta una referencia a un ensamblado y que se han compilado todos los ensamblados a los que se hace referencia. 

🔥 `Convertir.xaml`    

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Conversor.Vistas.Convertir">
    <Grid BackgroundColor="#ffdc7b">
        <StackLayout VerticalOptions="Center"
                     Margin="20">
            <Image Source="https://i.postimg.cc/C5cj8GSj/world-wide-web.png" 
                   Margin="20"/>
            <Frame HasShadow="False"
                   CornerRadius="15">
                <Entry Keyboard="Numeric"
                       Placeholder="Centimetros (cm)"
                       TextColor="Black"
                       PlaceholderColor="Black"
                       FontSize="Large" />
            </Frame>
            <Button Text="Calcular"
                    CornerRadius="10"
                    FontSize="Large"
                    FontAttributes="Bold"
                    Margin="0, 20, 0, 0" 
                    TextTransform="None"
                    BackgroundColor="#7d5bf2"
                    TextColor="White"/>
            <StackLayout Orientation="Horizontal">
                <Label Text="Resultado:"
                       FontSize="Large"
                       FontAttributes="Bold"
                       VerticalOptions="Center"/>
                <Label Text="0.00"
                       FontSize="Large"
                       FontAttributes="Bold"
                       VerticalOptions="Center" />
            </StackLayout>
            <Button Text="Volver"
                    TextTransform="None"
                    BackgroundColor="White"
                    TextColor="Black"
                    FontSize="Large"
                    FontAttributes="Bold"
                    HorizontalOptions="Center"
                    CornerRadius="10"/>
        </StackLayout>
    </Grid>
</ContentPage>
```


## Navegación entre páginas 

![Navigation](https://i.postimg.cc/zGkvdJ9f/3-navegation.png)

🔥 `App.xaml.cs`

Para navegar de la página 1 a la página 2 necesitamos que la pagina 1 sea de tipo `NavigationPage`.

```cs
public App()
        {
            InitializeComponent();
			
            MainPage = new NavigationPage(new Menuprincipal());
        }
```

En este caso la página inicial será `Menuprincipal.xaml`  

🔥 `Menuprincipal.xaml`  

```xml
<Button Text="Iniciar"
    TextTransform="None"
    Background="#ffdc7a"
    CornerRadius="10"
    FontSize="Medium"
    FontAttributes="Bold" 
    
    👀👇
    x:Name="btniniciar"👈👀   
    Clicked="btniniciar_Clicked"/>👈👀
    👀☝
```

- Antes de colocarle nombre al `Clicked`, hacer esto 
- `Clicked= " "` <**Nuevo controlador de eventos**>
- Doble clic dentro de `" "` y autocompleta
	-`Clicked= " Doble clic"`

Esto creará un evento dentro de `Menuprincipal.xaml.cs`   

```cs
public partial class Menuprincipal : ContentPage
    {
        public Menuprincipal()
        {
            InitializeComponent();
        }
		
		👀👇
        private void btniniciar_Clicked(object sender, EventArgs e)
        {
		
        }
    }
```

Ahora para navegar de la página 1 a la página 2 se utiliza:
`await Navigation.PushAsync(new Pagina2());`

![Await navigation](https://i.postimg.cc/q7PghGqC/3-await-navigation.png)

🔥 `Menuprincipal.xaml.cs`  

```cs
private void btniniciar_Clicked(object sender, EventArgs e)
{
    Navigation.PushAsync(new Convertir());
}
```

Probamos el programa...  



🔥 `Menuprincipal.xaml`    
Para borrar la barra superior color azul ⬅ llamada Navigation Page:     

```xml
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Conversor.Vistas.Menuprincipal"
             
             👀👇
             NavigationPage.HasNavigationBar="False"> 👈👀
```

Hacemos lo mismo en Convertir.xaml   

🔥 `Convertir.xaml`     

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Conversor.Vistas.Convertir"

			 👀👇
             NavigationPage.HasNavigationBar="False"> 👈👀
```

Detenemos el proyecto para seguir programando...

Ahora agregamos un botón para volver.   

```xml
<Button Text="Volver"
    TextTransform="None"
    BackgroundColor="White"
    TextColor="Black"
    FontSize="Large"
    FontAttributes="Bold"
    HorizontalOptions="Center"
    CornerRadius="10"
	
	👀👇
    x:Name="btnvolver" 👈👀
    Clicked="btnvolver_Clicked"/> 👈👀
    👀☝
```

Esto genera en el archivo `Convertir.xaml.cs` un evento.      

```cs
public Convertir()
        {
            InitializeComponent();
        }
		
		👀👇
        private void btnvolver_Clicked(object sender, EventArgs e)
        {
		
        }
```

Después agregamos `Navigation.PopAsync()` para regresar.

```cs
private void btnvolver_Clicked(object sender, EventArgs e)
{
    Navigation.PopAsync(); 👈👀
}
```

Corremos el programa

🔥 `Convertir.xaml`    
Agregamos un nombre al Entry, al Label y al Button calcular   

Entry   
```xml
<Frame HasShadow="False"
        CornerRadius="15">
    <Entry Keyboard="Numeric"
            Placeholder="Centimetros (cm)"
            TextColor="Black"
            PlaceholderColor="Black"
            FontSize="Large"
            
            👀👇
            x:Name="txtcm"/> 👈👀
</Frame>
```

Label    
```xml
<StackLayout Orientation="Horizontal">
    <Label Text="Resultado:"
            FontSize="Large"
            FontAttributes="Bold"
            VerticalOptions="Center"/>
    <Label Text="0.00"
            FontSize="Large"
            FontAttributes="Bold"
            VerticalOptions="Center"
            
            👀👇
            x:Name="lblresultado"/> 👈👀
</StackLayout>
```

Botón calcular 
```xml
<Button Text="Calcular"
    CornerRadius="10"
    FontSize="Large"
    FontAttributes="Bold"
    Margin="0, 20, 0, 0" 
    TextTransform="None"
    BackgroundColor="#7d5bf2"
    TextColor="White"
    
    👀👇
    x:Name="btncalcular"
    Clicked="btncalcular_Clicked"/> 👈👀
```

No olvidar seleccionar Nuevo controlador de eventos para crear el controlador de manera automática.   

Queda así:      

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Conversor.Vistas.Convertir"
             NavigationPage.HasNavigationBar="False"
             Visual="Material">
    <Grid BackgroundColor="#ffdc7b">
        <StackLayout VerticalOptions="Center"
                     Margin="20">
            <Image Source="world.png" 
                   Margin="20"/>
            <Frame HasShadow="False"
                   CornerRadius="15">
                <Entry Keyboard="Numeric"
                       Placeholder="Centimetros (cm)"
                       TextColor="Black"
                       PlaceholderColor="Black"
                       FontSize="Large"
                       x:Name="txtcm"/>
            </Frame>
            <Button Text="Calcular"
                    CornerRadius="10"
                    FontSize="Large"
                    FontAttributes="Bold"
                    Margin="0, 20, 0, 0" 
                    TextTransform="None"
                    BackgroundColor="#7d5bf2"
                    TextColor="White"
                    x:Name="btncalcular"
                    Clicked="btncalcular_Clicked"/>
            <StackLayout Orientation="Horizontal">
                <Label Text="Resultado:"
                       FontSize="Large"
                       FontAttributes="Bold"
                       VerticalOptions="Center"/>
                <Label Text="0.00"
                       FontSize="Large"
                       FontAttributes="Bold"
                       VerticalOptions="Center"
                       x:Name="lblresultado"/>
            </StackLayout>
            <Button Text="Volver"
                    TextTransform="None"
                    BackgroundColor="White"
                    TextColor="Black"
                    FontSize="Large"
                    FontAttributes="Bold"
                    HorizontalOptions="Center"
                    CornerRadius="10"
                    x:Name="btnvolver"
                    Clicked="btnvolver_Clicked"/>
        </StackLayout>
    </Grid>
</ContentPage>
```

🔥 `Convertir.xaml.cs`    

Calcular

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Conversor.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Convertir : ContentPage
    {
        double cm;
        double m;

        public Convertir()
        {
            InitializeComponent();
        }

        private void Calcular()
        {
            cm = Convert.ToDouble(txtcm.Text);
            m = cm / 100;
            lblresultado.Text = m.ToString() + " m";
        }
		
		
		//Detectar valores vacios 
        private void Validar()
        {
            if (!string.IsNullOrEmpty(txtcm.Text))
            {
                Calcular();
            }
            else
            {
                DisplayAlert("Error", "Ingrese una cantidad", "OK");
            }
        }

        private void btnvolver_Clicked(object sender, EventArgs e)
        {
            Navigation.PopAsync();
        }

        private void btncalcular_Clicked(object sender, EventArgs e)
        {
            Validar();
        }
    }
}
```


Corremos el programa...    

## Agregar imágenes en local 

Explorador de soluciones:     
- 📱 Conversor.Android
- 📁 Resources 
	- 📁 drawable: Clic derecho y pegar
		- Arrastrar o Copiamos la imagen 

📌 De no poderse, reiniciar el proyecto.

🔥 Dentro de `Menuprincipal.xaml`     

Cambiamos:     
```xml
<Image Source="https://i.postimg.cc/DwH6gJMq/cinta-metrica.png" />
```

Por:     
```xml
<Image Source="cinta.png" />
```

🔥 Dentro  de `Convertir.xaml`   

Cambiamos:     
```xml
<Image Source="https://i.postimg.cc/C5cj8GSj/world-wide-web.png" />
```

Por:   
```xml
<Image Source="world.png" />
```


## Mejorar proyecto con un paquete Nuget 

Detener proyecto    

Explorador de soluciones: 
- Solución "Conversor" : Clic derecho 
- Administrar paquetes NuGet para la solución 
- Examinar: 
	- Buscar: `Xamarin.Forms.Visual.Material`
	- [x] Conversor.Android\Conversor
	- [x] Conversor.iOS\Conversor  
- Instalar y aceptamos 

Si encontramos en Dependencias algo llamado **Net Frameworks** eso quiere decir que va a afectar a todo el proyecto y puedo marcar todos los [ x ] 


Ahora debemos afectar al proyecto android   

🔥 `Conversor.Android` -> `MainActivity.cs`: Ingresamos doble clic 

Agregamos la referencia al nuevo paquete instalado:      
```cs
protected override void OnCreate(Bundle savedInstanceState)
{
    base.OnCreate(savedInstanceState);
	
    Xamarin.Essentials.Platform.Init(this, savedInstanceState);
    global::Xamarin.Forms.Forms.Init(this, savedInstanceState);
    
    👀👇   
    global::Xamarin.Forms.FormsMaterial.Init(this, savedInstanceState); 👈👀
    👀☝
    
    LoadApplication(new App());
}
```

Para finalizar veamos como afectaría a la vista en Xaml   

🔥 `Convertir.xaml`     
```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Conversor.Vistas.Convertir"
             NavigationPage.HasNavigationBar="False"
             
             👀👇
             Visual="Material">
```


Corremos el programa 


## Resultado 

![Project](https://i.postimg.cc/MZLsWVXR/result.png)




---

---
❄ Ejemplo random de Grid en Xamarin - Xaml 
```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Conversor.Vistas.Convertir">
    <Grid RowDefinitions="*, *"
          ColumnDefinitions="*, *">
        <Button Text="Hola" Grid.Row="1"
                Grid.Column="1"/>
    </Grid>
</ContentPage>
```

🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲
```cs
```

```xml
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