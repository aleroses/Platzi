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

Cada vez que creemos una página, esta debe tener su propio controlador, su propio View Model (cada página).

📂 **VistaModelo**     
Agregar clase -> `VMpagina1.cs`      

En este archivo, todo lo que tenga botones, entrys, controladores va a accionar cualquier acción que se haga en la carpeta **Vistas** -> `Pagina1.xaml` con tan solo un clic.  

Al tener un patron (`VMpatron.cs`) podemos replicar rápidamente las variables, constructores, etc dentro de nuestro archivo `VMpagina1.cs`

🔥 `VMpagina1.cs`    
Cambiamos el nombre de la clase y heredamos de BaseViewModel, también hacemos cambios dentro de las regiones PROCESOS y COMANDOS.  

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace MvvmGuia.VistaModelo
{
	//Cambiamos el nombre de la clase y heredamos de BaseViewModel
    public class VMpagina1:BaseViewModel 👈👀
    {
        #region VARIABLES
        string _Texto;
        #endregion

        #region CONSTRUCTOR
        public VMpagina1(INavigation navigation)
        {
            Navigation = navigation;
        }
        #endregion

        #region OBJETOS
        public string Texto
        {
            get { return _Texto; }
            set { SetValue(ref _Texto, value); }
        }
        #endregion

        #region PROCESOS 👈👀
        public async Task Alerta()
        {
            await DisplayAlert("Titulo", "Mensaje", "OK");
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void ProcesoSimple()
        {
            
        }
        #endregion

        #region COMANDOS 👈👀
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Alertacommand => new Command(async () => await Alerta());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand ProcesoSimpcommand => new Command(ProcesoSimple);
        #endregion
    }
}
```

🔥 `Pagina1.xaml`

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina1">
    <StackLayout>
        <Button Text="Guardar"
                VerticalOptions="Center"
                HorizontalOptions="Center"
                Command="{Binding Alertacommand}"/>
    </StackLayout>
</ContentPage>
```

🔥 `Pagina1.xaml.cs`   
Conectar usando **BindingContext** que es un Vinculante y Context es un contexto general, es decir, toda esta página, todo el contexto, todo lo que engloba esta página va a enlazarse con el ViewModel.    

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using MvvmGuia.VistaModelo;

namespace MvvmGuia.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Pagina1 : ContentPage
    {
        public Pagina1()
        {
            InitializeComponent();
            //Esto ya está enlazado al ViewModel 
            BindingContext = new VMpagina1(Navigation);
        }
    }
}
```

🔥 `App.xaml.cs`    
Eliminar `MainPage.xaml` que viene por defecto 

```cs
using MvvmGuia.Vistas;
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MvvmGuia
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new Pagina1(); 👈👀
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}

```

🦄 Corremos el programa...

**Nota:** Recordar que cuando queramos vincular una página primero debemos enlazarlo en la parte de C# a través de un BindingContext haciendo referencia al ViewModel que se esté consumiendo y luego en la parte de Xaml para poder consumir algún comando o string, se usa un Binding. 


## 6. Entry binding

Veremos como controlar un Entry a través de MVVM 

🔥 `Pagina1.xaml`     

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina1">
    <Grid BackgroundColor="#467FBC">
        <StackLayout VerticalOptions="Center">
            <StackLayout Orientation="Horizontal"
                         HorizontalOptions="Center">
                <Label Text="Mensaje:"
                       TextColor="White"
                       FontAttributes="Bold"
                       VerticalOptions="Center"/>
                <Entry PlaceholderColor="White"
                       Placeholder="Escriba su mensaje"
                       HorizontalOptions="StartAndExpand"
                       TextColor="White"
                       Text="{Binding Mensaje}"/> 👈👀
            </StackLayout>
            <Button Text="Ejecutar"
                    VerticalOptions="Center"
                    HorizontalOptions="Center"
                    Command="{Binding Alertacommand}" 
                    TextTransform="None"/>
        </StackLayout>
    </Grid>
</ContentPage>
```

🔥 `VMpagina1.cs`     
Cambios en las regiones VARIABLES, OBJETOS y PROCESOS.   

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace MvvmGuia.VistaModelo
{
    public class VMpagina1:BaseViewModel
    {
        #region VARIABLES
        string _Mensaje; 👈👀
        #endregion

        #region CONSTRUCTOR
        public VMpagina1(INavigation navigation)
        {
            Navigation = navigation;
        }
        #endregion

        #region OBJETOS 
        public string Mensaje 👈👀
        {
            get { return _Mensaje; }
            set { SetValue(ref _Mensaje, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Alerta() 👈👀
        {
            await DisplayAlert("Titulo", Mensaje, "OK");
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void ProcesoSimple()
        {
            
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Alertacommand => new Command(async () => await Alerta());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand ProcesoSimpcommand => new Command(ProcesoSimple);
        #endregion
    }
}
```


## 7. Label binding

Veremos como mostrar texto en un Label usando MVVM con una operación de suma.    

🔥 `Pagina1.xaml`    

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina1">
    <Grid BackgroundColor="#467FBC">
        <StackLayout VerticalOptions="Center">
            <StackLayout Orientation="Horizontal"
                         HorizontalOptions="Center">
                <Label Text="Numero1:"
                       TextColor="White"
                       FontAttributes="Bold"
                       VerticalOptions="Center"/>
                <Entry PlaceholderColor="White"
                       Placeholder="Escriba un numero"
                       HorizontalOptions="StartAndExpand"
                       TextColor="White"
                       Text="{Binding N1}"
                       Keyboard="Numeric"/>
            </StackLayout>
            <StackLayout Orientation="Horizontal"
                         HorizontalOptions="Center">
                <Label Text="Numero2:"
                       TextColor="White"
                       FontAttributes="Bold"
                       VerticalOptions="Center" />
                <Entry PlaceholderColor="White"
                       Placeholder="Escriba un numero"
                       HorizontalOptions="StartAndExpand"
                       TextColor="White"
                       Text="{Binding N2}"
                       Keyboard="Numeric" />
            </StackLayout>
            <Button Text="Sumar"
                    VerticalOptions="Center"
                    HorizontalOptions="Center"
                    Command="{Binding Sumarcommand}" 
                    TextTransform="None"
                    BackgroundColor="White"
                    FontAttributes="Bold"
                    CornerRadius="5"/>
            <Label Text="{Binding R}"
                   TextColor="White"
                   HorizontalOptions="Center"
                   FontAttributes="Bold"
                   FontSize="40"/>
        </StackLayout>
    </Grid>
</ContentPage>
```

🔥 `VMpagina1.cs`  

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace MvvmGuia.VistaModelo
{
    public class VMpagina1:BaseViewModel
    {
        #region VARIABLES
        string _N1;
        string _N2;
        string _R; //Respuesta
        #endregion

        #region CONSTRUCTOR
        public VMpagina1(INavigation navigation)
        {
            Navigation = navigation;
        }
        #endregion

        #region OBJETOS
        public string N1
        {
            get { return _N1; }
            set { SetValue(ref _N1, value); }
        }

        public string N2
        {
            get { return _N2; }
            set { SetValue(ref _N2, value); }
        }

        public string R
        {
            get { return _R; }
            set { SetValue(ref _R, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Procesoasync()
        {
            
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void Sumar()
        {
            double n1 = 0;
            double n2 = 0;
            double respuesta = 0;

            n1 = Convert.ToDouble(N1);
            n2 = Convert.ToDouble(N2);

            respuesta = n1 + n2;

            R = respuesta.ToString();
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Procesoasyncommand => new Command(async () => await Procesoasync());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand Sumarcommand => new Command(Sumar);
        #endregion
    }
}
```


## 8. Navegación entre páginas con MVVM  

📂 **Vistas**   
Agregar nuevo elemento -> Xamarin.Forms -> Página de contenido -> `Pagina2.xaml`


🔥 `VMpagina1.cs`    

```cs
using MvvmGuia.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace MvvmGuia.VistaModelo
{
    public class VMpagina1:BaseViewModel
    {
        #region VARIABLES
        string _N1;
        string _N2;
        string _R; //Respuesta
        #endregion

        #region CONSTRUCTOR
        public VMpagina1(INavigation navigation)
        {
            Navigation = navigation;
        }
        #endregion

        #region OBJETOS
        public string N1
        {
            get { return _N1; }
            set { SetValue(ref _N1, value); }
        }

        public string N2
        {
            get { return _N2; }
            set { SetValue(ref _N2, value); }
        }

        public string R
        {
            get { return _R; }
            set { SetValue(ref _R, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Navegarpagina2()
        {
            await Navigation.PushAsync(new Pagina2());
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void Sumar()
        {
            double n1 = 0;
            double n2 = 0;
            double respuesta = 0;

            n1 = Convert.ToDouble(N1);
            n2 = Convert.ToDouble(N2);

            respuesta = n1 + n2;

            R = respuesta.ToString();
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Navegarpagina2command => new Command(async () => await Navegarpagina2());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand Sumarcommand => new Command(Sumar);
        #endregion
    }
}
```

🔥 `Pagina1.xaml`

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina1"
             NavigationPage.HasNavigationBar="False">
    <Grid BackgroundColor="#467FBC">
        <StackLayout VerticalOptions="Center">
            <StackLayout Orientation="Horizontal"
                         HorizontalOptions="Center">
                <Label Text="Numero1:"
                       TextColor="White"
                       FontAttributes="Bold"
                       VerticalOptions="Center"/>
                <Entry PlaceholderColor="White"
                       Placeholder="Escriba un numero"
                       HorizontalOptions="StartAndExpand"
                       TextColor="White"
                       Text="{Binding N1}"
                       Keyboard="Numeric"/>
            </StackLayout>
            <StackLayout Orientation="Horizontal"
                         HorizontalOptions="Center">
                <Label Text="Numero2:"
                       TextColor="White"
                       FontAttributes="Bold"
                       VerticalOptions="Center" />
                <Entry PlaceholderColor="White"
                       Placeholder="Escriba un numero"
                       HorizontalOptions="StartAndExpand"
                       TextColor="White"
                       Text="{Binding N2}"
                       Keyboard="Numeric" />
            </StackLayout>
            <Button Text="Sumar"
                    VerticalOptions="Center"
                    HorizontalOptions="Center"
                    Command="{Binding Sumarcommand}" 
                    TextTransform="None"
                    BackgroundColor="White"
                    FontAttributes="Bold"
                    CornerRadius="5"/>
            <Label Text="{Binding R}"
                   TextColor="White"
                   HorizontalOptions="Center"
                   FontAttributes="Bold"
                   FontSize="40"/>
            <Button Text="Ir pagina 2"
                    HorizontalOptions="Center"
                    CornerRadius="5"
                    BackgroundColor="White"
                    FontAttributes="Bold"
                    Command="{Binding Navegarpagina2command}"/>
        </StackLayout>
    </Grid>
</ContentPage>
```

🔥 `Pagina2.xaml`

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina2"
             NavigationPage.HasNavigationBar="False">
    <Grid>
        <Image Source="flechavolver.png"
               VerticalOptions="Start"
               HeightRequest="35"
               HorizontalOptions="Start"
               Margin="10"/>
    </Grid>
</ContentPage>
```

🔥 `App.xaml.cs`   

```cs
using MvvmGuia.Vistas;
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MvvmGuia
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new Pagina1());
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
```

📂 **VistaModelo**    
Agregar clase -> `VMpagina2.cs`

🔥 `VMpagina2.cs`    
Copiamos regiones del archivo `VMpatron.cs`   

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace MvvmGuia.VistaModelo
{
    public class VMpagina2:BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        #endregion

        #region CONSTRUCTOR
        public VMpagina2(INavigation navigation)
        {
            Navigation = navigation;
        }
        #endregion

        #region OBJETOS
        public string Texto
        {
            get { return _Texto; }
            set { SetValue(ref _Texto, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Volver()
        {
            await Navigation.PopAsync();
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void ProcesoSimple()
        {

        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Volvercommand => new Command(async () => await Volver());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand ProcesoSimpcommand => new Command(ProcesoSimple);
        #endregion
    }
}
```

🔥 `Pagina2.xaml.cs`  

```cs
using MvvmGuia.VistaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MvvmGuia.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Pagina2 : ContentPage
    {
        public Pagina2()
        {
            InitializeComponent();
            BindingContext = new VMpagina2(Navigation);
        }
    }
}
```


## 9. Asignar command a cualquier componente  

En la clase anterior teníamos un problema en el archivo `Pagina2.xaml` ya que la etiqueta Image no tiene la función de command eso quiere decir que no podemos ejecutar un comando. Esto también ocurre con los Label, Grid, StackLayout.

Para que la imagen pueda tener la acción de comando hacemos lo siguiente: 

🔥 `Pagina2.xaml`   

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina2"
             NavigationPage.HasNavigationBar="False">
    <Grid>
        <Image Source="flechavolver.png"
               VerticalOptions="Start"
               HeightRequest="35"
               HorizontalOptions="Start"
               Margin="10">
            <Image.GestureRecognizers> 👈👀
                <TapGestureRecognizer Command="{Binding Volvercommand}"/>
            </Image.GestureRecognizers>
        </Image> 👈👀
    </Grid>
</ContentPage>
```


## 10. Picker con MVVM sin datos web  

Picker que es algo como un Combo Box pero sin enlazar con datos web.

🔥 `Pagina1.xaml`    

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina1"
             NavigationPage.HasNavigationBar="False">
    <Grid BackgroundColor="#467FBC">
        <StackLayout VerticalOptions="Center">
            <StackLayout Orientation="Horizontal"
                         HorizontalOptions="Center">
                <Label Text="Numero1:"
                       TextColor="White"
                       FontAttributes="Bold"
                       VerticalOptions="Center"/>
                <Entry PlaceholderColor="White"
                       Placeholder="Escriba un numero"
                       HorizontalOptions="StartAndExpand"
                       TextColor="White"
                       Text="{Binding N1}"
                       Keyboard="Numeric"/>
            </StackLayout>
            <StackLayout Orientation="Horizontal"
                         HorizontalOptions="Center">
                <Label Text="Numero2:"
                       TextColor="White"
                       FontAttributes="Bold"
                       VerticalOptions="Center" />
                <Entry PlaceholderColor="White"
                       Placeholder="Escriba un numero"
                       HorizontalOptions="StartAndExpand"
                       TextColor="White"
                       Text="{Binding N2}"
                       Keyboard="Numeric" />
            </StackLayout>
            <Button Text="Sumar"
                    VerticalOptions="Center"
                    HorizontalOptions="Center"
                    Command="{Binding Sumarcommand}" 
                    TextTransform="None"
                    BackgroundColor="White"
                    FontAttributes="Bold"
                    CornerRadius="5"/>
            <Label Text="{Binding R}"
                   TextColor="White"
                   HorizontalOptions="Center"
                   FontAttributes="Bold"
                   FontSize="40"/>
            <Button Text="Ir pagina 2"
                    HorizontalOptions="Center"
                    CornerRadius="5"
                    BackgroundColor="White"
                    FontAttributes="Bold"
                    Command="{Binding Navegarpagina2command}"/>
            <StackLayout HorizontalOptions="Center"
                         Orientation="Horizontal">
                <Label TextColor="White"
                       FontAttributes="Bold"
                       Text="Picker:"
                       VerticalOptions="Center"/>
                <Picker TextColor="White" 👈👀
                        HorizontalOptions="FillAndExpand"
                        Title="Seleccione una opcion"
                        TitleColor="White"
                        SelectedItem="{Binding SeleccionarTipouser}">
                    <Picker.ItemsSource> 👈👀
                        <x:Array Type="{x:Type x:String}">
                            <x:String>Administrador</x:String>
                            <x:String>Empleado</x:String>
                        </x:Array>
                    </Picker.ItemsSource>
                </Picker>
            </StackLayout>
        </StackLayout>
    </Grid>
</ContentPage>
```

🔥 `VMpagina1.cs`    

```cs
using MvvmGuia.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace MvvmGuia.VistaModelo
{
    public class VMpagina1:BaseViewModel
    {
        #region VARIABLES
        string _N1;
        string _N2;
        string _R; //Respuesta
        string _Tipousuario;
        #endregion

        #region CONSTRUCTOR
        public VMpagina1(INavigation navigation)
        {
            Navigation = navigation;
        }
        #endregion

        #region OBJETOS
        public string N1
        {
            get { return _N1; }
            set { SetValue(ref _N1, value); }
        }

        public string Tipousuario 👈👀
        {
            get { return _Tipousuario; }
            set { SetValue(ref _Tipousuario, value); }
        }

        public string SeleccionarTipouser 👈👀
        {
            get { return _Tipousuario; }
            set { SetProperty(ref _Tipousuario, value); 
                Tipousuario = _Tipousuario; }
        }

        public string N2
        {
            get { return _N2; }
            set { SetValue(ref _N2, value); }
        }

        public string R
        {
            get { return _R; }
            set { SetValue(ref _R, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Navegarpagina2()
        {
            await Navigation.PushAsync(new Pagina2());
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void Sumar()
        {
            double n1 = 0;
            double n2 = 0;
            double respuesta = 0;

            n1 = Convert.ToDouble(N1);
            n2 = Convert.ToDouble(N2);

            respuesta = n1 + n2;

            R = respuesta.ToString();
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Navegarpagina2command => new Command(async () => await Navegarpagina2());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand Sumarcommand => new Command(Sumar);
        #endregion
    }
}
```

🔴 **Punto de interrupción**     
Del lado izquierdo detrás de la numeración de líneas de código podemos hacer clic 🔴 y seleccionar un punto donde se detenga el programa lo que nos dirá si esa parte de código arroja un resultado o no. Al ejecutar el programa y hacer alguna acción el editor nos mostrará una flecha naranja 🔶. Si pasamos el cursor sobre la línea de código del punto de interrupción veremos que nos muestra el dato seleccionado (Administrador o Empleado).

📌 En ocasiones al salir algún error pida reiniciar:    
🔥🔽Usar el botón 🔄 Reiniciar aplicación 

Correr programa...


## 11. DatePicket con MVVM

Veamos como seleccionar una fecha desde un DatePicket 

🔥  `Pagina1.xaml`    

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina1"
             NavigationPage.HasNavigationBar="False">
    <Grid BackgroundColor="#467FBC">
        <StackLayout VerticalOptions="Center">
            <StackLayout Orientation="Horizontal"
                         HorizontalOptions="Center">
                <Label Text="Numero1:"
                       TextColor="White"
                       FontAttributes="Bold"
                       VerticalOptions="Center"/>
                <Entry PlaceholderColor="White"
                       Placeholder="Escriba un numero"
                       HorizontalOptions="StartAndExpand"
                       TextColor="White"
                       Text="{Binding N1}"
                       Keyboard="Numeric"/>
            </StackLayout>
            <StackLayout Orientation="Horizontal"
                         HorizontalOptions="Center">
                <Label Text="Numero2:"
                       TextColor="White"
                       FontAttributes="Bold"
                       VerticalOptions="Center" />
                <Entry PlaceholderColor="White"
                       Placeholder="Escriba un numero"
                       HorizontalOptions="StartAndExpand"
                       TextColor="White"
                       Text="{Binding N2}"
                       Keyboard="Numeric" />
            </StackLayout>
            <Button Text="Sumar"
                    VerticalOptions="Center"
                    HorizontalOptions="Center"
                    Command="{Binding Sumarcommand}" 
                    TextTransform="None"
                    BackgroundColor="White"
                    FontAttributes="Bold"
                    CornerRadius="5"/>
            <Label Text="{Binding R}"
                   TextColor="White"
                   HorizontalOptions="Center"
                   FontAttributes="Bold"
                   FontSize="40"/>
            <Button Text="Ir pagina 2"
                    HorizontalOptions="Center"
                    CornerRadius="5"
                    BackgroundColor="White"
                    FontAttributes="Bold"
                    Command="{Binding Navegarpagina2command}"/>
            <StackLayout HorizontalOptions="Center"
                         Orientation="Horizontal">
                <Label TextColor="White"
                       FontAttributes="Bold"
                       Text="Picker:"
                       VerticalOptions="Center"/>
                <Picker TextColor="White"
                        HorizontalOptions="FillAndExpand"
                        Title="Seleccione una opcion"
                        TitleColor="White"
                        SelectedItem="{Binding SeleccionarTipouser}">
                    <Picker.ItemsSource>
                        <x:Array Type="{x:Type x:String}">
                            <x:String>Administrador</x:String>
                            <x:String>Empleado</x:String>
                        </x:Array>
                    </Picker.ItemsSource>
                </Picker>
            </StackLayout>
            <StackLayout HorizontalOptions="Center">
                <DatePicker TextColor="White"
                            Date="{Binding Fecha, Mode=TwoWay}">
                    <DatePicker.Format>dd/MM/yyyy</DatePicker.Format>
                </DatePicker>
                <Label Text="{Binding Resultadofecha}"
                       TextColor="White"
                       FontAttributes="Bold"
                       FontSize="20"/>
            </StackLayout>
        </StackLayout>
    </Grid>
</ContentPage>
```

🔥  `VMPagina1.cs`     

```cs
using MvvmGuia.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace MvvmGuia.VistaModelo
{
    public class VMpagina1:BaseViewModel
    {
        #region VARIABLES
        string _N1;
        string _N2;
        string _R; //Respuesta
        string _Tipousuario;
        DateTime _Fecha;
        string _Resultadofecha;
        #endregion

        #region CONSTRUCTOR
        public VMpagina1(INavigation navigation)
        {
            Navigation = navigation;
            Fecha = DateTime.Now;
        }
        #endregion

        #region OBJETOS
        public string N1
        {
            get { return _N1; }
            set { SetValue(ref _N1, value); }
        }

        public string Resultadofecha
        {
            get { return _Resultadofecha; }
            set { SetValue(ref _Resultadofecha, value); }
        }

        public DateTime Fecha
        {
            get { return _Fecha; }
            set
            {
                SetValue(ref _Fecha, value);
                Resultadofecha = _Fecha.ToString("dd/MM/yyyy");
            }
        }

        public string Tipousuario
        {
            get { return _Tipousuario; }
            set { SetValue(ref _Tipousuario, value); }
        }

        public string SeleccionarTipouser
        {
            get { return _Tipousuario; }
            set { SetProperty(ref _Tipousuario, value); 
                Tipousuario = _Tipousuario; }
        }

        public string N2
        {
            get { return _N2; }
            set { SetValue(ref _N2, value); }
        }

        public string R
        {
            get { return _R; }
            set { SetValue(ref _R, value); }
        }        
        #endregion

        #region PROCESOS
        public async Task Navegarpagina2()
        {
            await Navigation.PushAsync(new Pagina2());
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void Sumar()
        {
            double n1 = 0;
            double n2 = 0;
            double respuesta = 0;

            n1 = Convert.ToDouble(N1);
            n2 = Convert.ToDouble(N2);

            respuesta = n1 + n2;

            R = respuesta.ToString();
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Navegarpagina2command => new Command(async () => await Navegarpagina2());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand Sumarcommand => new Command(Sumar);
        #endregion
    }
}
```

Correr programa...  


## 12. CollectionView MVVM

📂 **Modelo**   
Agregar clase -> `Musuario.cs`  

🔥 `Musuario.cs`  

```cs
using System;
using System.Collections.Generic;
using System.Text;

namespace MvvmGuia.Modelo
{
    public class Musuario
    {
        public string Nombre { get; set; }
        public string Imagen { get; set; }
    }
}
```

🔥 `Pagina2.xaml`   

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina2"
             NavigationPage.HasNavigationBar="False">
    <Grid>
        <Image Source="flechavolver.png"
               VerticalOptions="Start"
               HeightRequest="35"
               HorizontalOptions="Start"
               Margin="10">
            <Image.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding Volvercommand}"/>
            </Image.GestureRecognizers>
        </Image>
        <CollectionView>
            <CollectionView.ItemTemplate>
                <DataTemplate>
                    <Grid>
                        
                    </Grid>
                </DataTemplate>
            </CollectionView.ItemTemplate>
        </CollectionView>
    </Grid>
</ContentPage>
```

🔥 `VMPagina2.cs`   

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;
using MvvmGuia.Modelo;

namespace MvvmGuia.VistaModelo
{
    public class VMpagina2:BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        public List<Musuario> listausuarios { get; set; }
        #endregion

        #region CONSTRUCTOR
        public VMpagina2(INavigation navigation)
        {
            Navigation = navigation;
            Mostrarusuarios();
        }
        #endregion

        #region OBJETOS
        public string Texto
        {
            get { return _Texto; }
            set { SetValue(ref _Texto, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Volver()
        {
            await Navigation.PopAsync();
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void Mostrarusuarios()
        {
            listausuarios = new List<Musuario>
            {
                new Musuario
                {
                    Nombre = "Frank",
                    Imagen = "https://i.postimg.cc/fLF1H03f/angry.png"
                },
                new Musuario
                {
                    Nombre = "Juan",
                    Imagen = "https://i.postimg.cc/KY06MWxV/annoyed.png"
                },
                new Musuario
                {
                    Nombre = "Carlos",
                    Imagen = "https://i.postimg.cc/wv3SckBB/excited.png"
                }
            };
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Volvercommand => new Command(async () => await Volver());
        //Llamar al Proceso Simple o no Asincrono
        //public ICommand ProcesoSimpcommand => new Command(ProcesoSimple);
        #endregion
    }
}
```


## 13. Llenar datos locales   
Continuamos desde el punto 12.

🔥 `Pagina2.xaml`   

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina2"
             NavigationPage.HasNavigationBar="False">
    <Grid>
        <Image Source="flechavolver.png"
               VerticalOptions="Start"
               HeightRequest="35"
               HorizontalOptions="Start"
               Margin="10">
            <Image.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding Volvercommand}"/>
            </Image.GestureRecognizers>
        </Image>
        <CollectionView ItemsSource="{Binding listausuarios}"
                        VerticalOptions="CenterAndExpand"
                        Margin="20,80,20,0">
            <CollectionView.ItemsLayout>
                <GridItemsLayout Orientation="Vertical"
                                 Span="1"
                                 VerticalItemSpacing="20"/>
            </CollectionView.ItemsLayout>
            <CollectionView.ItemTemplate>
                <DataTemplate>
                    <Frame CornerRadius="15"
                           BackgroundColor="#00DE87">
                        <StackLayout Orientation="Horizontal">
                            <Image Source="{Binding Imagen}"
                                   HeightRequest="150" />
                            <Label Text="{Binding Nombre}"
                                   VerticalOptions="Center"
                                   FontSize="20"
                                   FontAttributes="Bold" />
                        </StackLayout>
                        <Frame.GestureRecognizers>
                            <TapGestureRecognizer Command="{Binding Alertacommand}"/>
                        </Frame.GestureRecognizers>
                    </Frame>
                </DataTemplate>
            </CollectionView.ItemTemplate>
        </CollectionView>
    </Grid>
</ContentPage>
```

🔥 `VMpagina2.cs`   

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;
using MvvmGuia.Modelo;

namespace MvvmGuia.VistaModelo
{
    public class VMpagina2:BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        public List<Musuario> listausuarios { get; set; }
        #endregion

        #region CONSTRUCTOR
        public VMpagina2(INavigation navigation)
        {
            Navigation = navigation;
            Mostrarusuarios();
        }
        #endregion

        #region OBJETOS
        public string Texto
        {
            get { return _Texto; }
            set { SetValue(ref _Texto, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Volver()
        {
            await Navigation.PopAsync();
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void Mostrarusuarios()
        {
            listausuarios = new List<Musuario>
            {
                new Musuario
                {
                    Nombre = "Frank",
                    Imagen = "https://i.postimg.cc/fLF1H03f/angry.png"
                },
                new Musuario
                {
                    Nombre = "Juan",
                    Imagen = "https://i.postimg.cc/KY06MWxV/annoyed.png"
                },
                new Musuario
                {
                    Nombre = "Carlos",
                    Imagen = "https://i.postimg.cc/wv3SckBB/excited.png"
                }
            };
        }
        public async Task Alerta()
        {
            await DisplayAlert("Titulo", "Mensaje", "Ok");
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Volvercommand => new Command(async () => await Volver());
        //Llamar al Proceso Simple o no Asincrono
        //public ICommand ProcesoSimpcommand => new Command(ProcesoSimple);
        public ICommand Alertacommand => new Command(async () => await Alerta());
        #endregion
    }
}
```


## 14. Seleccionar item en Collectionview  

🔥 `Pagina2.xaml`   

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina2"
             NavigationPage.HasNavigationBar="False">
    <Grid>
        <Image Source="flechavolver.png"
               VerticalOptions="Start"
               HeightRequest="35"
               HorizontalOptions="Start"
               Margin="10">
            <Image.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding Volvercommand}"/>
            </Image.GestureRecognizers>
        </Image>
        <CollectionView ItemsSource="{Binding listausuarios}"
                        VerticalOptions="CenterAndExpand"
                        Margin="20,80,20,0"
                        x:Name="listauser">
            <CollectionView.ItemsLayout>
                <GridItemsLayout Orientation="Vertical"
                                 Span="1"
                                 VerticalItemSpacing="20"/>
            </CollectionView.ItemsLayout>
            <CollectionView.ItemTemplate>
                <DataTemplate>
                    <Frame CornerRadius="15"
                           BackgroundColor="#00DE87">
                        <StackLayout Orientation="Horizontal">
                            <Image Source="{Binding Imagen}"
                                   HeightRequest="150" />
                            <Label Text="{Binding Nombre}"
                                   VerticalOptions="Center"
                                   FontSize="20"
                                   FontAttributes="Bold" />
                        </StackLayout>
                        <Frame.GestureRecognizers>
                            <TapGestureRecognizer Command="{Binding Path=BindingContext.Alertacommand, Source={x:Reference listauser}}"
                                                  CommandParameter="{Binding .}"/>
                        </Frame.GestureRecognizers>
                    </Frame>
                </DataTemplate>
            </CollectionView.ItemTemplate>
        </CollectionView>
    </Grid>
</ContentPage>
```

🔥 `VMpagina2.cs`   

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;
using MvvmGuia.Modelo;

namespace MvvmGuia.VistaModelo
{
    public class VMpagina2:BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        public List<Musuario> listausuarios { get; set; }
        #endregion

        #region CONSTRUCTOR
        public VMpagina2(INavigation navigation)
        {
            Navigation = navigation;
            Mostrarusuarios();
        }
        #endregion

        #region OBJETOS
        public string Texto
        {
            get { return _Texto; }
            set { SetValue(ref _Texto, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Volver()
        {
            await Navigation.PopAsync();
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void Mostrarusuarios()
        {
            listausuarios = new List<Musuario>
            {
                new Musuario
                {
                    Nombre = "Frank",
                    Imagen = "https://i.postimg.cc/fLF1H03f/angry.png"
                },
                new Musuario
                {
                    Nombre = "Juan",
                    Imagen = "https://i.postimg.cc/KY06MWxV/annoyed.png"
                },
                new Musuario
                {
                    Nombre = "Carlos",
                    Imagen = "https://i.postimg.cc/wv3SckBB/excited.png"
                }
            };
        }
        public async Task Alerta(Musuario parametros)
        {
            await DisplayAlert("Titulo", parametros.Nombre, "Ok");
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Volvercommand => new Command(async () => await Volver());
        //Llamar al Proceso Simple o no Asincrono
        //public ICommand ProcesoSimpcommand => new Command(ProcesoSimple);
        public ICommand Alertacommand => new Command<Musuario>(async (p) => await Alerta(p));
        #endregion
    }
}
```


## 15. Menu principal

📂 **Vistas**   
Agregar nuevo elemento -> Xamarin.Forms -> Página de contenido -> `Menuprincipal.xaml`   

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Menuprincipal">
    <Grid>
        <CollectionView ItemsSource="{Binding listapaginas}"
                        VerticalOptions="CenterAndExpand"
                        Margin="20,80,20,0"
                        x:Name="listapages">
            <CollectionView.ItemsLayout>
                <GridItemsLayout Orientation="Vertical"
                                 Span="1"
                                 VerticalItemSpacing="20" />
            </CollectionView.ItemsLayout>
            <CollectionView.ItemTemplate>
                <DataTemplate>
                    <Frame CornerRadius="15"
                           BackgroundColor="#00DE87">
                        <StackLayout Orientation="Horizontal">
                            <Image Source="{Binding Icono}"
                                   HeightRequest="150" />
                            <Label Text="{Binding Pagina}"
                                   VerticalOptions="Center"
                                   FontSize="20"
                                   FontAttributes="Bold" />
                        </StackLayout>
                        <Frame.GestureRecognizers>
                            <TapGestureRecognizer Command="{Binding Path=BindingContext.Navegarcommand, Source={x:Reference listapages}}"
                                                  CommandParameter="{Binding .}" />
                        </Frame.GestureRecognizers>
                    </Frame>
                </DataTemplate>
            </CollectionView.ItemTemplate>
        </CollectionView>
    </Grid>
</ContentPage>
```

Agregar nuevo elemento -> Xamarin.Forms -> Página de contenido -> `Crudpokemon.xaml`  

📂 **VistaModelo**  
Agregar clase -> `VMmenuprincipal.cs`     
Copiamos código de VMpagina2.cs  

```cs
using MvvmGuia.Modelo;
using MvvmGuia.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace MvvmGuia.VistaModelo
{
    public class VMmenuprincipal : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        public List<Mmenuprincipal> listapaginas { get; set; }
        #endregion

        #region CONSTRUCTOR
        public VMmenuprincipal(INavigation navigation)
        {
            Navigation = navigation;
            MostrarPaginas();
        }
        #endregion

        #region OBJETOS
        public string Texto
        {
            get { return _Texto; }
            set { SetValue(ref _Texto, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Volver()
        {
            await Navigation.PopAsync();
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void MostrarPaginas()
        {
            listapaginas = new List<Mmenuprincipal>
            {
                new Mmenuprincipal
                {
                    Pagina = "Entry, datepicker, picker, label, navegación",
                    Icono = "https://i.postimg.cc/fLF1H03f/angry.png"
                },
                new Mmenuprincipal
                {
                    Pagina = "CollectionView sin enlace a Base de datos",
                    Icono = "https://i.postimg.cc/KY06MWxV/annoyed.png"
                },
                new Mmenuprincipal
                {
                    Pagina = "Crud pokemon",
                    Icono = "https://i.postimg.cc/FF0dHQRx/pokeball.png"
                }
            };
        }
        public async Task Navegar(Mmenuprincipal parametros)
        {
            string pagina;
            pagina = parametros.Pagina;

            if(pagina.Contains("Entry, datepicker"))
            {
                await Navigation.PushAsync(new Pagina1());
            }
            if (pagina.Contains("CollectionView sin enlace"))
            {
                await Navigation.PushAsync(new Pagina2());
            }
            if (pagina.Contains("Crud pokemon"))
            {
                await Navigation.PushAsync(new Crudpokemon());
            }
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        //public ICommand Volvercommand => new Command(async () => await Volver());
        //Llamar al Proceso Simple o no Asincrono
        //public ICommand ProcesoSimpcommand => new Command(ProcesoSimple);
        public ICommand Navegarcommand => new Command<Mmenuprincipal>(async (p) => await Navegar(p));
        #endregion
    }
}
```

📂 **Modelo**   
Agregar clase -> `Mmenuprincipal.cs`   

```cs
using System;
using System.Collections.Generic;
using System.Text;

namespace MvvmGuia.Modelo
{
    public class Mmenuprincipal
    {
        public string Pagina { get; set; }
        public string Icono { get; set; }
    }
}
```

🔥 `App.xaml.cs`    

```cs
using MvvmGuia.Vistas;
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MvvmGuia
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new Menuprincipal());
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
```


## 16. Botón volver

🔥 `Menuprincipal.xaml.cs`   

```cs
using MvvmGuia.VistaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MvvmGuia.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Menuprincipal : ContentPage
    {
        public Menuprincipal()
        {
            InitializeComponent();
            BindingContext = new VMmenuprincipal(Navigation);
        }
    }
}
```

🔥 `Menuprincipal.xaml`   

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Menuprincipal"
             NavigationPage.HasNavigationBar="False">
    <Grid>
        <CollectionView ItemsSource="{Binding listapaginas}"
                        VerticalOptions="CenterAndExpand"
                        Margin="20,80,20,0"
                        x:Name="listapages">
            <CollectionView.Header>
                <StackLayout>
                    <Label Text="Paginas"
                           FontAttributes="Bold"
                           FontSize="30"/>
                </StackLayout>
            </CollectionView.Header>
            <CollectionView.ItemsLayout>
                <GridItemsLayout Orientation="Vertical"
                                 Span="1"
                                 VerticalItemSpacing="20" />
            </CollectionView.ItemsLayout>
            <CollectionView.ItemTemplate>
                <DataTemplate>
                    <Frame CornerRadius="15"
                           BackgroundColor="#00DE87">
                        <StackLayout Orientation="Horizontal">
                            <Image Source="{Binding Icono}"
                                   HeightRequest="150" />
                            <Label Text="{Binding Pagina}"
                                   VerticalOptions="Center"
                                   FontSize="20"
                                   FontAttributes="Bold" />
                        </StackLayout>
                        <Frame.GestureRecognizers>
                            <TapGestureRecognizer Command="{Binding Path=BindingContext.Navegarcommand, Source={x:Reference listapages}}"
                                                  CommandParameter="{Binding .}" />
                        </Frame.GestureRecognizers>
                    </Frame>
                </DataTemplate>
            </CollectionView.ItemTemplate>
        </CollectionView>
    </Grid>
</ContentPage>
```

🔥 `Pagina1.xaml`

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MvvmGuia.Vistas.Pagina1"
             NavigationPage.HasNavigationBar="False">
    <Grid BackgroundColor="#464FBC">
        <Image Source="flechavolver.png"
               VerticalOptions="Start"
               HeightRequest="35"
               HorizontalOptions="Start"
               Margin="10">
            <Image.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding Volvercommand}" />
            </Image.GestureRecognizers>
        </Image>
        <StackLayout VerticalOptions="Center">
            <StackLayout Orientation="Horizontal"
                         HorizontalOptions="Center">
                <Label Text="Numero1:"
                       TextColor="White"
                       FontAttributes="Bold"
                       VerticalOptions="Center"/>
                <Entry PlaceholderColor="White"
                       Placeholder="Escriba un numero"
                       HorizontalOptions="StartAndExpand"
                       TextColor="White"
                       Text="{Binding N1}"
                       Keyboard="Numeric"/>
            </StackLayout>
            <StackLayout Orientation="Horizontal"
                         HorizontalOptions="Center">
                <Label Text="Numero2:"
                       TextColor="White"
                       FontAttributes="Bold"
                       VerticalOptions="Center" />
                <Entry PlaceholderColor="White"
                       Placeholder="Escriba un numero"
                       HorizontalOptions="StartAndExpand"
                       TextColor="White"
                       Text="{Binding N2}"
                       Keyboard="Numeric" />
            </StackLayout>
            <Button Text="Sumar"
                    VerticalOptions="Center"
                    HorizontalOptions="Center"
                    Command="{Binding Sumarcommand}" 
                    TextTransform="None"
                    BackgroundColor="White"
                    FontAttributes="Bold"
                    CornerRadius="5"/>
            <Label Text="{Binding R}"
                   TextColor="White"
                   HorizontalOptions="Center"
                   FontAttributes="Bold"
                   FontSize="40"/>
            <Button Text="Ir pagina 2"
                    HorizontalOptions="Center"
                    CornerRadius="5"
                    BackgroundColor="White"
                    FontAttributes="Bold"
                    Command="{Binding Navegarpagina2command}"/>
            <StackLayout HorizontalOptions="Center"
                         Orientation="Horizontal">
                <Label TextColor="White"
                       FontAttributes="Bold"
                       Text="Picker:"
                       VerticalOptions="Center"/>
                <Picker TextColor="White"
                        HorizontalOptions="FillAndExpand"
                        Title="Seleccione una opcion"
                        TitleColor="White"
                        SelectedItem="{Binding SeleccionarTipouser}">
                    <Picker.ItemsSource>
                        <x:Array Type="{x:Type x:String}">
                            <x:String>Administrador</x:String>
                            <x:String>Empleado</x:String>
                        </x:Array>
                    </Picker.ItemsSource>
                </Picker>
            </StackLayout>
            <StackLayout HorizontalOptions="Center">
                <DatePicker TextColor="White"
                            Date="{Binding Fecha, Mode=TwoWay}">
                    <DatePicker.Format>dd/MM/yyyy</DatePicker.Format>
                </DatePicker>
                <Label Text="{Binding Resultadofecha}"
                       TextColor="White"
                       FontAttributes="Bold"
                       FontSize="20"/>
            </StackLayout>
            
        </StackLayout>
    </Grid>
</ContentPage>
```

🔥 `VMpagina1.cs`   

```cs
using MvvmGuia.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace MvvmGuia.VistaModelo
{
    public class VMpagina1:BaseViewModel
    {
        #region VARIABLES
        string _N1;
        string _N2;
        string _R; //Respuesta
        string _Tipousuario;
        DateTime _Fecha;
        string _Resultadofecha;
        #endregion

        #region CONSTRUCTOR
        public VMpagina1(INavigation navigation)
        {
            Navigation = navigation;
            Fecha = DateTime.Now;
        }
        #endregion

        #region OBJETOS
        public string N1
        {
            get { return _N1; }
            set { SetValue(ref _N1, value); }
        }

        public string Resultadofecha
        {
            get { return _Resultadofecha; }
            set { SetValue(ref _Resultadofecha, value); }
        }

        public DateTime Fecha
        {
            get { return _Fecha; }
            set
            {
                SetValue(ref _Fecha, value);
                Resultadofecha = _Fecha.ToString("dd/MM/yyyy");
            }
        }

        public string Tipousuario
        {
            get { return _Tipousuario; }
            set { SetValue(ref _Tipousuario, value); }
        }

        public string SeleccionarTipouser
        {
            get { return _Tipousuario; }
            set { SetProperty(ref _Tipousuario, value); 
                Tipousuario = _Tipousuario; }
        }

        public string N2
        {
            get { return _N2; }
            set { SetValue(ref _N2, value); }
        }

        public string R
        {
            get { return _R; }
            set { SetValue(ref _R, value); }
        }        
        #endregion

        #region PROCESOS
        public async Task Volver()
        {
            await Navigation.PopAsync();
        }

        public async Task Navegarpagina2()
        {
            await Navigation.PushAsync(new Pagina2());
        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void Sumar()
        {
            double n1 = 0;
            double n2 = 0;
            double respuesta = 0;

            n1 = Convert.ToDouble(N1);
            n2 = Convert.ToDouble(N2);

            respuesta = n1 + n2;

            R = respuesta.ToString();
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Navegarpagina2command => new Command(async () => await Navegarpagina2());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand Sumarcommand => new Command(Sumar);
        public ICommand Volvercommand => new Command(async() => await Volver());
        #endregion
    }
}
```

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