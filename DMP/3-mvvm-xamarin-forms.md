# Curso Arquitectura de software MVVM Xamarin forms 

[Código 369](https://www.youtube.com/watch?v=bwZQz-V4z3k&list=PLp-3gBgEtAE_ocyuNt5E1cBKL_B0ULQNk)

Cuando estamos creando una aplicación, a todos nos gusta tener nuestro código limpio y organizado, y que cualquier cambio o añadido de funcionalidad sea lo más ágil posible llevarlo a cabo. Además, vemos la necesidad de que cualquier otro desarrollador (ya sea de nuestro equipo, externo o nosotros mismos pasado un cierto tiempo) tengamos una rápida comprensión de cómo está construido el sistema, y que continuar o desarrollar nuevo código no sea una tarea tediosa. Es aquí donde entran en juego los patrones de diseño de software.

Estas son algunas de las características más importantes que conseguimos cuando usamos un patrón de diseño en nuestros desarrollos:

-   Código más limpio y organizado.
-   Mayor claridad y mejor comprensión del proyecto frente a otros desarrolladores.
-   Mantenimiento más ágil
-   Reutilización de código
-   Mayor escalabilidad de funcionalidades

## 0. ¿Qué es el patrón de software MVVM?

El patrón **Model-View-ViewModel** (MVVM) nos ayuda a separar la lógica de negocio de la interfaz de usuario, facilitando las pruebas, mantenimiento y la escalabilidad de los proyectos.  

Existen tres componentes que nos ayudan a lograrlo:  

-   **MODEL:** Un modelo representa un objeto real del dominio de la lógica de negocio del sistema. Por ejemplo: una factura o un usuario. Es el responsable de exponer los datos de una manera que se puedan consumir fácilmente.
-   **VIEW:** Una vista se define en XAML (lenguaje de marcado), y no debe tener ninguna lógica en el código subyacente. Se une al ViewModel solo mediante el enlace de datos (_binding_).
-   **VIEWMODEL:** Es un modelo para las vistas de la aplicación, es decir, se trata de una abstracción de los datos de las vistas. Conecta únicamente los datos que requieren las vistas y realiza la lógica necesaria para la preparación de dichos datos. Además de exponer los datos relevantes para la vista, también expone los comportamientos de las vistas, generalmente con comandos.

En la siguiente captura se muestra el **esquema general de la arquitectura MVVM** aplicando un sencillo ejemplo. Nuestra aplicación representada en el esquema mostraría un listado de usuarios en la cual podemos seleccionar uno de ellos. Del usuario seleccionado se mostraría su nombre en un campo de texto.

![mvvm](https://i.postimg.cc/YCQHkgVB/1-arquitectura-mvvm.png)

Como vemos, el **modelo Usuario** es el que representa a un usuario “real” con sus atributos nombre y apellidos.

El **ViewModel** contiene los datos que requiere la vista, que son los usuarios y el usuario actualmente seleccionado. Este último contiene el atributo nombre del usuario seleccionado. Estos datos preparados por el ViewModel están conectados (bindeados) con las propiedades correspondientes de las estructuras de la vista: ListView y TextBox. De esta manera, cada vez que se selecciona un usuario del listado, el campo de texto lincado a la propiedad Usuario_Seleccionado muestra el nombre del usuario correspondiente. Esto es posible por la conexión del ViewModel con la Vista a través de la propiedad DataContext, que asigna un viewModel (conjunto de datos y comportamiento) a una vista.

[Fuente](https://blog.clicko.es/patron-diseno-mvvm-usando-wpf-parte-1/)


## 1. Hot reload  

XAML Hot Reload se conecta a su flujo de trabajo existente para aumentar su productividad y ahorrarle tiempo. Sin XAML Hot Reload, debe compilar e implementar su aplicación cada vez que desee ver un cambio de XAML. Con Hot Reload, cuando guarda su archivo XAML, los cambios se reflejan en vivo en su aplicación en ejecución. Además, su estado de navegación y sus datos se mantendrán, lo que le permitirá iterar rápidamente en su interfaz de usuario sin perder su lugar en la aplicación. Por lo tanto, con XAML Hot Reload, dedicará menos tiempo a reconstruir e implementar sus aplicaciones para validar los cambios en la interfaz de usuario.   

[Fuente](https://learn.microsoft.com/en-us/xamarin/xamarin-forms/xaml/hot-reload)

Crear nuevo proyecto:    
-> Aplicación móvil (Xamarin.Forms)    
-> MvvmGuia   

Creamos un botón y una alerta para probar los cambios en tiempo real. 

🔥 `MainPage.xaml`     
Borramos el **StackLayout** que viene por defecto.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.MainPage">
    <Grid>
        <Button Text="Guardar"
                x:Name="btnguardar"
                Clicked="btnguardar_Clicked" 
                VerticalOptions="Center"
                HorizontalOptions="Center"/>
    </Grid>

</ContentPage>
```

🔥 `MainPage.xaml.cs`   

```cs
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace MvvmGuia
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private void btnguardar_Clicked(object sender, EventArgs e)
        {
            DisplayAlert("Ok", "Esta es una alerta", "Ok");
        }
    }
}
```


## 2. BaseViewModel

Agregamos 3 carpetas dentro del proyecto **MvvmGuia**: 
- Vistas
- VistaModelo
- Modelo

📂 **VistaModelo**  
Agregar clase -> `BaseViewModel.cs`

Este código fue proporcionado en el curso y se tomará como base para desarrollar nuestro proyecto.

Propiedades que sirven para que los componentes del proyecto se ejecuten mediante estructuras de clases. Esta base ViewModel es lo que va a controlar los strings, entry, labels, buttons, comportamientos de clicked, etc. 

Código de Microsoft: Análisis de comportamientos de cada uno de los controles que utilicemos en xamarin forms. Construir los comportamientos. 

```cs
using System;
using System.Collections.Generic;
using System.Text;

//Paquetes
//Tareas asincronas
using System.Threading.Tasks;
using Xamarin.Forms;
using System.Runtime.CompilerServices;
using System.ComponentModel;

namespace MvvmGuia.VistaModelo
{
	//: Dependencia para actualizar automaticamente los cambios que hagamos 
    public class BaseViewModel : INotifyPropertyChanged
    {
	    //Para navegar entre páginas 
        public INavigation Navigation;
		
        public event PropertyChangedEventHandler PropertyChanged;
		
		//OnpropertyChanged
        //Para ver que función que comando se ha modificado del controlador 
        //Componentes: Entry, etc.
        public void OnpropertyChanged([CallerMemberName] string nombre = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nombre));
        }
		
		//Para manejar fotos 
        private ImageSource foto;
        public ImageSource Foto
        {
            get { return foto; }
            set
            {
                foto = value;
                OnpropertyChanged();
            }
        }
		
		//Igual al anterior OnpropertyChanged 
        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
		
		//Manejar alertas dentro del MVVM
        public async Task DisplayAlert(string title, string message, string cancel)
        {
            await Application.Current.MainPage.DisplayAlert(title, message, cancel);
        }
		
        public async Task<bool> DisplayAlert(string title, string message, string accept, string cancel)
        {
            return await Application.Current.MainPage.DisplayAlert(title, message, accept, cancel);
        }
		
        //SetProperty
        //Manejar Strings, Entrys, etc
        protected bool SetProperty<T>(ref T field, T value, [CallerMemberName] string propertyName = null)
        {
            if (EqualityComparer<T>.Default.Equals(field, value))
            {
                return false;
            }
			
            field = value;
            OnPropertyChanged(propertyName);
			
            return true;
        }
		
        //Manejar Entrys de tipo Strings se debe declarar de esta manera 
        private string _title;
        public string Title
        {
            get { return _title; }👈👀
            set 👈👀
            {
                SetProperty(ref _title, value);
            }
        }
		
        //_isBusy Para hacer visible un panel, controlador, grid, imgs, etc
        private bool _isBusy;
        public bool IsBusy
        {
            get { return _isBusy; }
            set
            {
                SetProperty(ref _isBusy, value);
            }
        }
        
        //SetValue: Encargado de recibir información 
        protected void SetValue<T>(ref T backingFieled, T value, [CallerMemberName] string propertyName = null)
        {
            if (EqualityComparer<T>.Default.Equals(backingFieled, value))
			
            {
			
                return;
			
            }
			
            backingFieled = value;
			
            OnPropertyChanged(propertyName);
        }
    }
}
```

Esta base se abre una sola vez, salvo tengamos que construir algo adicional, algo especifico. Pero con esta base ya tenemos todo construido para utilizarlo en nuestro proyecto.   

Comparar el código de estos tres referencias:   
- [Descargar BaseViewModel](https://drive.google.com/file/d/1q_7O8AL-4DhQmUL9PeSOJrzzo4pgpfi7/view)

- [MVVM Xamarin.forms](https://learn.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/mvvm)

- [MVVM baseviewmodel](https://www.codeproject.com/Articles/1023761/MVVM-and-BaseViewModel-foundations)


[Código BaseViewModel - Enlace directo](https://github.com/Franklin369/Baseviewmodel)


## 3. VMpatron  

📂 **VistaModelo**   
Agregar clase -> `VMpatron.cs`

Cada vez que hagamos la clase `VMpatron.cs` va a servir para replicar otro view model de alguna otra página que estemos haciendo.   

Cuando trabajemos en View Model todo debe ser construido. Cuando queramos trabajar con Entry, Button, Label debe ser construido a través de las variables y luego a través de objetos. 

❄ **# Region** y **# End Region**   
La instrucción `#Region` debe terminar con una instrucción `#End Region` correspondiente.

La directiva `#Region` permite especificar un bloque de código que se puede expandir o contraer cuando se usa la característica de esquematización del Editor de código de Visual Studio. El inicio y fin de las instrucciones `#Region` deben estar en el mismo bloque de código.

❄ **Constructor**    
Si revisamos dentro de `MainPage.xaml.cs` encontraremos un constructor que arrancará el proceso `InitializeComponent();` lo que va a renderizar la interfaz.  

```Cs
namespace MvvmGuia
{
    public partial class MainPage : ContentPage
    {
        public MainPage()👈👀
        {
            InitializeComponent();👈👀
        }

        private void btnguardar_Clicked(object sender, EventArgs e)
        {
            DisplayAlert("Ok", "Esta es una alerta", "Ok");
        }
    }
}
```

❄ **Nombrando Variables y Objetos**   
Cuando creemos variables debemos colocarle un sub-guion `string _Texto;` y todos los objetos sin el sub-guion `public string Texto;`  

❄ **Get y Set**     
Esto se hace para recibir y para devolver información 
Entry: Puede recibir información y puede otorgar información a otro proceso, ejemplo: Para validar una contraseña.    

❄ **Procesos**    
Podemos tener procesos asíncronos y los procesos simples o no asíncronos.   
Es importante trabajar con tareas asíncronas ya que cada celular o equipo se va a comportar de distinta manera de acuerdo a la velocidad de internet. 

Antes se tenia el siguiente problema:     
`//proceso1` Si en el primer proceso se va el internet, va a pasar automáticamente al `//proceso2` y aquí se va a detener. 

Esto se soluciona con tareas asíncronas:    
`//proceso1` Revisa si ya se ejecutó o si ya consumieron los datos de la base de datos y si llega a pasar por todos los procesos recién va a pasar al `//proceso2`.

Eso quiere decir que las tareas asíncronas son procesos que pueden ejecutarse en segundo plano. 

❄ **Comando**    
Si revisamos en `MainPage.xaml.cs` el comando que se está ejecutando es a través del siguiente evento `btnguardar_Clicked`: 

```cs
private void btnguardar_Clicked(object sender, EventArgs e)
{                    👀☝
    DisplayAlert("Ok", "Esta es una alerta", "Ok");
}
```

En cambio a partir de ahora con View Model vamos a trabajar con comandos a través de código y luego esto se enlazará con el archivo `MainPage.xaml`.  

🔥 `VMpatron.cs`   

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MvvmGuia.VistaModelo
{
    //:BaseViewModel 
    //Todos los comportamientos de botones, entrys 
    //lo va a heredar de BaseViewModel
    public class VMpatron:BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        #endregion
		
        #region CONSTRUCTOR
		
        #endregion
		
        #region OBJETOS
        public string Texto
        {
            get { return _Texto; }
            set { SetValue(ref _Texto, value); }
        }
        #endregion
		
        #region PROCESOS
        public async Task ProcesoAsyncrono()
        {
		
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void ProcesoSimple()
        {
		
        }
        #endregion
		
        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand ProcesoAsyncommand => new Command(async () => await ProcesoAsyncrono());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand ProcesoSimpcommand => new Command(ProcesoSimple);
        #endregion
    }
}
```


## 4. Constructor

Si revisamos dentro de `MainPage.xaml.cs` encontraremos un constructor que arrancará el proceso `InitializeComponent();` lo que va a renderizar la interfaz.  Anteriormente se estaba trabajando de esta manera:     

```Cs
namespace MvvmGuia
{
    public partial class MainPage : ContentPage
    {
        public MainPage()👈👀
        {
            InitializeComponent();👈👀
        }

        private void btnguardar_Clicked(object sender, EventArgs e)
        {
            DisplayAlert("Ok", "Esta es una alerta", "Ok");
        }
    }
}
```

Pero con View Model esto se trabaja de otra forma en comparación a lo trabajado en el curso anterior.

🔥 `VMpatron.cs`    

```cs
#region CONSTRUCTOR
public VMpatron(INavigation navigation)
{
    Navigation = navigation;
}
#endregion
```

Con esto le estamos diciendo que nuestro constructor de esta página se va a comportar como una página de navegación que puede ir hacia adelante o hacia atrás.  


## 5. Binding

Enlazar el back-end con el front-end 

📂 **Vistas**   
Agregar nuevo elemento -> Xamarin.Forms -> Página de contenido -> `Pagina1.xaml`















--- 
--- 
```xml
```

```cs
```

❄
🔥 
📂
->

👈👀
👀👇
👀☝