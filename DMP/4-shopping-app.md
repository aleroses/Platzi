# App compras con animaciones en Xamarin forms

[Tutorial](https://www.youtube.com/playlist?list=PLp-3gBgEtAE9oEC3bEszQq6PmnhVD5_he)

## 0. Demostración de los resultados

![Proyecto](https://i.postimg.cc/25h9pzK0/project-shopping-app.gif)     
[Stanislav Soyma - Diseño original](https://dribbble.com/shots/9876208-Grocery-store-concept-shopping-app)     


## 1. Creando el proyecto

### 🦄 Crear un proyecto    
- Aplicación móvil (Xamarin.Forms)

#### Configure su nuevo proyecto
- Nombre del proyecto: **Appcompras**   
- ☑ Colocar la solución y el proyecto en el mismo directorio 

#### Nueva aplicación móvil  
- En blanco 
- Android y iOS  

### Firebase: Crear cuenta google 

[Firebase](https://firebase.google.com/?hl=es)

- Ir a la consola
- Crear un proyecto 
- Nombre del proyecto: **appcompras**
	- ☑ Aceptar condiciones
	- ☑ Confirmar uso 
- Continuar 
- Quitar permiso - [ ] Habilitar Google Analytics para este proyecto 
- **Crear proyecto** 
- Continuar 

❄ Panel izquierdo  
Compilación -> **Realtime Database** -> Crear una base de datos   

❄ Configurar base de datos  
- Estados Unidos
- Comenzar en modo bloqueado 

❄ Realtime Database    
❄❄ Reglas 

Esto permite conectarnos a un BD sin problemas  
```sql
{
  "rules": {
    ".read": "auth==null",
    ".write": "auth==null"
  }
}
```
- **Publicar** 

❄❄ Datos    
Creamos 2 tablas 

🔥 `Primera tabla`    
https://appcompras-518fb-default-rtdb.firebaseio.com/ :null delete ➕🗑
- Le das al  ➕

- Clave: **Detallecompra** -> Valor: Dejarlo vacío y le das al ➕
	- Clave: **Modelo** -> Valor:  ➕
		- Clave: **Cantidad** -> Valor: **-**   
- Agregar


**Modelo**  ➕
- Clave: **Idproducto** -> Valor: **-**  
- Agregar

**Modelo**  ➕  
- Clave: **Total** -> Valor: **-**  
- Agregar

**Modelo**  ➕   
- Clave: **Preciocompra** -> Valor: **-**   
- Agregar  

🔥 `Segunda tabla`   
https://appcompras-518fb-default-rtdb.firebaseio.com/  ➕🗑
- Le das al  ➕

- Clave: **Productos** -> Valor: Dejarlo vacío y le das al ➕
	- Clave: **p1** -> Valor:  ➕
		- Clave: **Descripcion** -> Valor: **Mango**  -> Enter
- Agregar

**p1** ➕  
- Clave: **Icono** -> Valor:  
- Agregar

**p1** ➕  
- Clave: **Peso** -> Valor: **500gr** 
- Agregar

**p1** ➕  
- Clave: **Precio** -> Valor: **20** 
- Agregar

🔥🔥 **Productos**  ➕   
- Clave: **p2** -> Valor: ➕
	- Clave: **Descripcion** -> Valor: **Piña** 
- Agregar

**p2** ➕  
- Clave: **Icono** -> Valor: **-** 
- Agregar

**p2** ➕  
- Clave: **Peso** -> Valor: **200gr** 
- Agregar

**p2** ➕  
- Clave: **Precio** -> Valor: **30** 
- Agregar

Agregamos 4 productos (p3 Plátano, p4 Aguacate, p5 Cereza, p6 Manzana)

- Productos
	- p3
		- Descripción: "Plátano"
		- Icono: "https://i.postimg.cc/PJDXKWN6/banana.png"
		- Peso: "500gr"
		- Precio: 20
	- p4
		- Descripción: "Aguacate"
		- Icono: "https://i.postimg.cc/8Cxx4qWS/avocado.png"
		- Peso: "200gr"
		- Precio: 30

Buscamos imágenes de las frutas agregadas y las subimos a Postimages: 
El link lo agregamos en Icono "https://i.postimg.cc/28HvPm5n/mango.png"


## 2. Mostrar productos

Agregamos las carpetas: 

🦄 `Appcompras` -> Agregar -> 📂 Nueva carpeta      
📂 Vistas      
📂 Modelo   
📂 VistaModelo   
📂 Conexiones   
📂 Datos   

Importamos paquete...        
🖥 Solución "Appcompras" (3 de 3 proyectos)   
-> Administrar paquetes NuGet para la solución...     

- Examinar: `FirebaseDatabase.net`  
	- ☑ Proyecto
	- ☑ Appcompras
	- ☑ Appcompras.Android/Appc
	- ☑ Appcompras.iOS/Appcomp  
- Instalar 

📂 Conexiones -> Agregar -> Clase-> `Cconexion.cs`    

Nos dirigimos a la web de Firebase y copiamos el link de la BD:    
https://appcompras-518fb-default-rtdb.firebaseio.com/     

🔥 `Cconexion.cs`   

```cs
using System;
using System.Collections.Generic;
using System.Text;
using Firebase.Database;

namespace Appcompras.Conexiones
{
    public class Cconexion
    {
        public static FirebaseClient firebase = new FirebaseClient("https://appcompras-518fb-default-rtdb.firebaseio.com/");

    }
}
```

Esto permite conectarnos a la BD de Firebase

📂 Modelo -> Agregar -> Clase-> `Mproductos.cs`     

🔥 `Mproductos.cs`     

```cs
using System;
using System.Collections.Generic;
using System.Text;

namespace Appcompras.Modelo
{
    public class Mproductos
    {
        public string Descripcion { get; set; }
        public string Precio { get; set; }
        public string Icono { get; set; }
        public string Peso { get; set; }
        public string Idproducto { get; set; }
    }
}
```

📂 Datos -> Agregar -> Clase-> `Dproductos.cs`    

🔥 `Dproductos.cs`   

```cs
using System;
using System.Collections.Generic;
using System.Text;

//Para usar condicionales
using System.Linq;

//Para tareas asincronas
using System.Threading.Tasks;
using Appcompras.Modelo;

using Appcompras.Conexiones;
using Xamarin.Essentials;

namespace Appcompras.Datos
{
    public class Dproductos
    {
        public async Task<List<Mproductos>> Mostrarproductos()
        {
            return (await Cconexion.firebase
                .Child("Productos")
                .OnceAsync<Mproductos>()).Select(item => new Mproductos
                {
                    Descripcion = item.Object.Descripcion,
                    Icono = item.Object.Icono,
                    Precio = item.Object.Precio,
                    Peso = item.Object.Peso,
                    Idproducto = item.Key
                }).ToList();
        }
    }
}

```


## 3. Creando las paginas

📂 Vistas    
-> Agregar -> Nuevo elemento   
-> Xamarin.Forms -> Pagina de contenidos 
-> `Compras.xaml`     
-> `Agregarcompra.xaml`     

📂 VistaModelo      
Agregamos archivos: `BaseViewModel.cs` y `VMpatron.cs`

📌 Estos archivos los usamos en el curso [[3-mvvm-xamarin-forms#2. BaseViewModel]] aquí encontraremos los enlaces directos a la descarga (revisar enlace directo a GitHub). 

🔥 `BaseViewModel.cs`   

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using System.Runtime.CompilerServices;
using System.ComponentModel;
namespace Appcompras.VistaModelo 👈👀 //Cambiamos
{
    public class BaseViewModel : INotifyPropertyChanged
    {
        public INavigation Navigation;

        public event PropertyChangedEventHandler PropertyChanged;
        public void OnpropertyChanged([CallerMemberName] string nombre = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nombre));
        }
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

        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        public async Task DisplayAlert(string title, string message, string cancel)
        {
            await Application.Current.MainPage.DisplayAlert(title, message, cancel);
        }

        public async Task<bool> DisplayAlert(string title, string message, string accept, string cancel)
        {
            return await Application.Current.MainPage.DisplayAlert(title, message, accept, cancel);
        }

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

        private string _title;
        public string Title
        {
            get { return _title; }
            set
            {
                SetProperty(ref _title, value);
            }
        }

        private bool _isBusy;
        public bool IsBusy
        {
            get { return _isBusy; }
            set
            {
                SetProperty(ref _isBusy, value);
            }
        }
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


🔥 `VMpatron.cs`    

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Appcompras.VistaModelo 👈👀 //Cambiamos
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
        public VMpatron(INavigation navigation)
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

📂 VistaModelo   
Agregar -> Clase -> `VMcompras.cs`   

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Appcompras.VistaModelo
{
    public class VMcompras:BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation)
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

📌 Borramos archivo `MainPage.xaml`

🔥 `App.xaml.cs`  

```cs
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Appcompras.Vistas;

namespace Appcompras
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new Compras());
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


## 4. PancakeView

### Instalar paquete PancakeView

Importamos paquete...        
🖥 Solución "Appcompras" (3 de 3 proyectos)   
-> Administrar paquetes NuGet para la solución...     

- Examinar: `Xamarin.Forms.PancakeView`  
	- ☑ Proyecto
	- ☑ Appcompras
	- ☑ Appcompras.Android/Appc
	- ☑ Appcompras.iOS/Appcomp  
- Instalar 


📂 Vistas     
🔥 `Compras.xaml`  

Buscamos imágenes de una flecha (<) y un ecualizador en Flaticon
```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView">
    <StackLayout>
        <Grid>
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="Black">
                
                <StackLayout Orientation="Horizontal">
                    <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                           HeightRequest="20" />
                    <Label Text="Frutas y vegetales"
                           VerticalOptions="Center"
                           FontSize="18"
                           TextColor="#3d3d3d"
                           Margin="30,0,0,0" />
                    <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                           HeightRequest="30"
                           HorizontalOptions="EndAndExpand" />
                </StackLayout>
            </pancake:PancakeView>
        </Grid>
    </StackLayout>
</ContentPage>
```

Probamos el programa...


## 5. Contenedor manual    

📂 Vistas     
🔥 `Compras.xaml`  

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100"
              VerticalOptions="FillAndExpand"
              >
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <Grid ColumnDefinitions="*,*">
                    <StackLayout Orientation="Horizontal"
                                 Grid.ColumnSpan="2">
                        <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                               HeightRequest="20" />
                        <Label Text="Frutas y vegetales"
                               VerticalOptions="Center"
                               FontSize="18"
                               TextColor="#3d3d3d"
                               Margin="30,0,0,0" />
                        <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                               HeightRequest="30"
                               HorizontalOptions="EndAndExpand" />
                    </StackLayout>
                    <StackLayout x:Name="Izquierda" Grid.Column="0">
                            
                    </StackLayout>
                    <StackLayout x:Name="Derecha" Grid.Column="1">
                        
                    </StackLayout>
                </Grid>
            </pancake:PancakeView>
            <StackLayout Grid.Row="1" BackgroundColor="#050506">
                
            </StackLayout>
        </Grid>
    </StackLayout>
</ContentPage>
```


### 6. Creando el plano

📂 Vistas     
🔥 `Compras.xaml`    

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100"
              VerticalOptions="FillAndExpand"
              >
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView HeightRequest="600">
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout x:Name="Izquierda"
                                     Grid.Column="0"
                                     Grid.Row="1"
                                     BackgroundColor="Red">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="0">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/28HvPm5n/mango.png"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout x:Name="Derecha"
                                     Grid.Column="1"
                                     Grid.Row="1"
                                     BackgroundColor="Green">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <StackLayout Grid.Row="1" BackgroundColor="#050506">
                
            </StackLayout>
        </Grid>
    </StackLayout>
</ContentPage>
```


## 7. Finalizando el plano  

📂 Vistas      
🔥 `Compras.xaml`     

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100"
              VerticalOptions="FillAndExpand"
              >
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView HeightRequest="600">
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout x:Name="Izquierda"
                                     Grid.Column="0"
                                     Grid.Row="1"
                                     BackgroundColor="Red">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="22">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/28HvPm5n/mango.png"
                                           HeightRequest="150"
                                           HorizontalOptions="Center"
                                           Margin="0,10"/>
                                    <Label Text="$8.30"
                                           FontAttributes="Bold"
                                           FontSize="22"
                                           Margin="0,10"
                                           TextColor="#333333"/>
                                    <Label Text="Manzana"
                                           FontSize="16"
                                           TextColor="Black"
                                           CharacterSpacing="1"/>
                                    <Label Text="500g"
                                           FontSize="13"
                                           TextColor="#cccccc"
                                           CharacterSpacing="1"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout x:Name="Derecha"
                                     Grid.Column="1"
                                     Grid.Row="1"
                                     BackgroundColor="Green">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <StackLayout Grid.Row="1" BackgroundColor="#050506">
                
            </StackLayout>
        </Grid>
    </StackLayout>
</ContentPage>
```


## 8. Pasar de xaml a csharp

📂 VistaModelo     
🔥 `VMcompras.cs` 

```cs
using Appcompras.Modelo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Appcompras.VistaModelo
{
    public class VMcompras : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation)
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
        public void Dibujarproductos(Mproductos item, int index, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var _ubicacion = Convert.ToBoolean(index % 2);
            var carril = _ubicacion ? Carrilderecha : Carrilizquierda;

            var frame = new Frame
            {
                HeightRequest = 300,
                CornerRadius = 10,
                Margin = 8,
                HasShadow = false,
                BackgroundColor = Color.White,
                Padding = 22,
            };

            var stack = new StackLayout
            {

            };

            var image = new Image
            {
                Source = item.Icono,
                HeightRequest = 150,
                HorizontalOptions = LayoutOptions.Center,
                Margin = new Thickness(0, 10),
            };

            var labelprecio = new Label
            {
                Text = "$" + item.Precio,
                FontAttributes = FontAttributes.Bold,
                FontSize = 22,
                Margin = new Thickness(0, 10),
                TextColor = Color.FromHex("#333333")
            };
        }

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


## 9. Listar productos

📂 VistaModelo      
🔥 `VMcompras.cs`   

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Appcompras.VistaModelo
{
    public class VMcompras : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        int _index;

        List<Mproductos> _listaproductos;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation)
        {
            Navigation = navigation;
            Mostrarproductos(); 👈👀 //Continuamos aquí prox video  
        }
        #endregion

        #region OBJETOS
        public string Texto
        {
            get { return _Texto; }
            set { SetValue(ref _Texto, value); }
        }

        public List<Mproductos> Listaproductos
        {
            get { return _listaproductos; }
            set { SetValue(ref _listaproductos, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Mostrarproductos(StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var funcion = new Dproductos();
            Listaproductos = await funcion.Mostrarproductos();
            
            foreach(var item in Listaproductos)
            {
                Dibujarproductos(item, _index, Carrilderecha, Carrilizquierda);
                _index++;
            }
        }

        public void Dibujarproductos(Mproductos item, int index, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var _ubicacion = Convert.ToBoolean(index % 2);
            var carril = _ubicacion ? Carrilderecha : Carrilizquierda;

            var frame = new Frame
            {
                HeightRequest = 300,
                CornerRadius = 10,
                Margin = 8,
                HasShadow = false,
                BackgroundColor = Color.White,
                Padding = 22,
            };

            var stack = new StackLayout
            {

            };

            var image = new Image
            {
                Source = item.Icono,
                HeightRequest = 150,
                HorizontalOptions = LayoutOptions.Center,
                Margin = new Thickness(0, 10),
            };

            var labelprecio = new Label
            {
                Text = "$" + item.Precio,
                FontAttributes = FontAttributes.Bold,
                FontSize = 22,
                Margin = new Thickness(0, 10),
                TextColor = Color.FromHex("#333333")
            };

            var labeldescripcion = new Label
            {
                Text = item.Descripcion,
                FontSize = 16,
                TextColor = Color.Black,
                CharacterSpacing = 1
            };

            var labelpeso = new Label
            {
                Text = item.Peso,
                FontSize = 13,
                TextColor = Color.FromHex("#cccccc"),
                CharacterSpacing = 1
            };

            stack.Children.Add(image);
            stack.Children.Add(labelprecio);
            stack.Children.Add(labeldescripcion);
            stack.Children.Add(labelpeso);

            frame.Content = stack;
            carril.Children.Add(frame);
        }

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


## 10. Agregando box  

📂 VistaModelo       
🔥 `VMcompras.cs`    

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Appcompras.VistaModelo
{
    public class VMcompras : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        int _index;

        List<Mproductos> _listaproductos;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            Navigation = navigation;
            Mostrarproductos(Carrilderecha, Carrilizquierda);
        }
        #endregion

        #region OBJETOS
        public string Texto
        {
            get { return _Texto; }
            set { SetValue(ref _Texto, value); }
        }

        public List<Mproductos> Listaproductos
        {
            get { return _listaproductos; }
            set { SetValue(ref _listaproductos, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Mostrarproductos(StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var funcion = new Dproductos();
            Listaproductos = await funcion.Mostrarproductos();

            var box = new BoxView
            {
                HeightRequest = 60
            };

            Carrilderecha.Children.Clear();
            Carrilizquierda.Children.Clear();

            Carrilderecha.Children.Add(box);
            
            foreach(var item in Listaproductos)
            {
                Dibujarproductos(item, _index, Carrilderecha, Carrilizquierda);
                _index++;
            }
        }

        public void Dibujarproductos(Mproductos item, int index, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var _ubicacion = Convert.ToBoolean(index % 2);
            var carril = _ubicacion ? Carrilderecha : Carrilizquierda;

            var frame = new Frame
            {
                HeightRequest = 300,
                CornerRadius = 10,
                Margin = 8,
                HasShadow = false,
                BackgroundColor = Color.White,
                Padding = 22,
            };

            var stack = new StackLayout
            {

            };

            var image = new Image
            {
                Source = item.Icono,
                HeightRequest = 150,
                HorizontalOptions = LayoutOptions.Center,
                Margin = new Thickness(0, 10),
            };

            var labelprecio = new Label
            {
                Text = "$" + item.Precio,
                FontAttributes = FontAttributes.Bold,
                FontSize = 22,
                Margin = new Thickness(0, 10),
                TextColor = Color.FromHex("#333333")
            };

            var labeldescripcion = new Label
            {
                Text = item.Descripcion,
                FontSize = 16,
                TextColor = Color.Black,
                CharacterSpacing = 1
            };

            var labelpeso = new Label
            {
                Text = item.Peso,
                FontSize = 13,
                TextColor = Color.FromHex("#cccccc"),
                CharacterSpacing = 1
            };

            stack.Children.Add(image);
            stack.Children.Add(labelprecio);
            stack.Children.Add(labeldescripcion);
            stack.Children.Add(labelpeso);

            frame.Content = stack;
            carril.Children.Add(frame);
        }

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

📂 Vistas      
🔥 `Compras.xaml`     

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100"
              VerticalOptions="FillAndExpand"
              >
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView>
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="0"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilizquierda">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="22">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                                           HeightRequest="150"
                                           HorizontalOptions="Center"
                                           Margin="0,10"/>
                                    <Label Text="$8.30"
                                           FontAttributes="Bold"
                                           FontSize="22"
                                           Margin="0,10"
                                           TextColor="#333333"/>
                                    <Label Text="Manzana"
                                           FontSize="16"
                                           TextColor="Black"
                                           CharacterSpacing="1"/>
                                    <Label Text="500g"
                                           FontSize="13"
                                           TextColor="#cccccc"
                                           CharacterSpacing="1"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="1"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilderecha">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <StackLayout Grid.Row="1" BackgroundColor="#050506">
                
            </StackLayout>
        </Grid>
    </StackLayout>
</ContentPage>
```

📂 Vistas       
🔥 `Compras.xaml.cs`     

```cs
using Appcompras.VistaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Appcompras.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Compras : ContentPage
    {
        public Compras()
        {
            InitializeComponent();
            BindingContext = new VMcompras(Navigation, Carrilderecha, Carrilizquierda);
        }
    }
}
```


## 11. Página agregar compra

🔥 `App.xaml.cs`    

```cs
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Appcompras.Vistas;

namespace Appcompras
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new Agregarcompra());
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

📂 Vistas       
🔥 `Agregarcompra.xaml`     

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Agregarcompra"
             NavigationPage.HasNavigationBar="False">
    <StackLayout Padding="36,15"
                 Spacing="20">
        <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
               HeightRequest="20"
               Margin="20"
               HorizontalOptions="Start"/>
        <StackLayout>
            <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                   Margin="0,0,0,30"
                   HeightRequest="220"/>
            <Label Text="Manzana"
                   FontAttributes="Bold"
                   FontSize="36"
                   TextColor="Black"
                   />
            <Label Text="500g"
                   CharacterSpacing="1"
                   TextColor="Gray"
                   Margin="0,-8,0,4"
                   FontSize="14"/>
            <StackLayout Orientation="Horizontal">
                <Grid HorizontalOptions="StartAndExpand"
                      VerticalOptions="Center">
                    <Frame Padding="0"
                           BackgroundColor="White"
                           CornerRadius="20"
                           HasShadow="False"
                           HeightRequest="40"
                           VerticalOptions="Center"
                           WidthRequest="100">
                        
                    </Frame>
                    <Label Text="-"
                           FontSize="36"
                           HorizontalOptions="Start"
                           TextColor="Black"
                           Margin="16,-2,0,6"/>
                </Grid>
            </StackLayout>
        </StackLayout>
    </StackLayout>
</ContentPage>
```


## 12. Diseño

Diseñamos la página Agregar compra.

📂 Vistas       
🔥 `Agregarcompra.xaml`     

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Agregarcompra"
             NavigationPage.HasNavigationBar="False">
    <StackLayout BackgroundColor="White"  
			    Padding="36,15"
                 Spacing="20">
        <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
               HeightRequest="20"
               Margin="-20, 20"
               HorizontalOptions="Start"/>
        <StackLayout>
            <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                   Margin="0,0,0,30"
                   HeightRequest="220"/>
            <Label Text="Manzana"
                   FontAttributes="Bold"
                   FontSize="36"
                   TextColor="Black"
                   />
            <Label Text="500g"
                   CharacterSpacing="1"
                   TextColor="Gray"
                   Margin="0,-8,0,4"
                   FontSize="14"/>
            <StackLayout Orientation="Horizontal">
                <Grid HorizontalOptions="StartAndExpand"
                      VerticalOptions="Center">
                    <Frame Padding="0"
                           BackgroundColor="#EEEEFF"
                           CornerRadius="20"
                           HasShadow="False"
                           HeightRequest="40"
                           VerticalOptions="Center"
                           WidthRequest="100">
                        
                    </Frame>
                    <Label Text="-"
                           FontSize="36"
                           HorizontalOptions="Start"
                           TextColor="Black"
                           Margin="16,-2,0,6"/>
                    <Label Text="1"
                           HorizontalOptions="Center"
                           VerticalOptions="Center"
                           FontSize="18"
                           FontAttributes="Bold"
                           TextColor="Black"/>
                    <Label Text="+"
                           FontSize="21"
                           HorizontalOptions="End"
                           TextColor="Black"
                           Margin="0,-4,16,0" 
                           VerticalOptions="Center"/>
                </Grid>
                <Label Text="$5.30"
                       FontAttributes="Bold"
                       FontSize="36"
                       TextColor="Black"
                       />
            </StackLayout>
            <Label Text="Descripcion del producto"
                   FontAttributes="Bold"
                   FontSize="18"
                   TextColor="Black"
                   Margin="0,14,0,0"/>
            <Label Text="Información general del producto"
                   TextColor="Gray"
                   FontSize="15"/>
        </StackLayout>
        <StackLayout Orientation="Horizontal"
                     
                     HorizontalOptions="FillAndExpand"
                     VerticalOptions="EndAndExpand"
                     Margin="0,0,0,20">
            <Grid HorizontalOptions="Start">
                <Frame Padding="0"
                       BackgroundColor="#EEEEFF"
                       HasShadow="False"
                       HeightRequest="40"
                       CornerRadius="30"
                       WidthRequest="40"
                       VerticalOptions="Center"
                       HorizontalOptions="Start">
                    
                </Frame>
                <Image Source="https://i.postimg.cc/qqLbqj1m/heart.png"
                       HeightRequest="20"
                       VerticalOptions="Center"
                       Margin="10,0"/>
            </Grid>
            <Button Text="Agregar al carrito"
                    BackgroundColor="#FEBB44"
                    CornerRadius="40"
                    TextTransform="None"
                    HeightRequest="54"
                    WidthRequest="230"
                    Margin="50,20,0,10"/>
        </StackLayout>
    </StackLayout>
</ContentPage>
```


## 13.  Tap desde csharp   

📂 VistaModelo -> Agregar -> Clase -> VMagregarcompra.cs        
🔥 `VMagregarcompra.cs`     

```cs
using Appcompras.Modelo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Appcompras.VistaModelo
{
    public class VMagregarcompra:BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        public Mproductos Parametrosrecibe { get; set; }
        #endregion

        #region CONSTRUCTOR
        public VMagregarcompra(INavigation navigation, Mproductos parametrosTrae)
        {
            Navigation = navigation;
            Parametrosrecibe = parametrosTrae;
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

📂 Vistas    
🔥 `Compras.xaml`     

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100"
              VerticalOptions="FillAndExpand"
              >
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView>
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="0"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilizquierda">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="22">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                                           HeightRequest="150"
                                           HorizontalOptions="Center"
                                           Margin="0,10"/>
                                    <Label Text="$8.30"
                                           FontAttributes="Bold"
                                           FontSize="22"
                                           Margin="0,10"
                                           TextColor="#333333"/>
                                    <Label Text="Manzana"
                                           FontSize="16"
                                           TextColor="Black"
                                           CharacterSpacing="1"/>
                                    <Label Text="500g"
                                           FontSize="13"
                                           TextColor="#cccccc"
                                           CharacterSpacing="1"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="1"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilderecha">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <StackLayout Grid.Row="1" BackgroundColor="#050506">
                
            </StackLayout>
            <Grid.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding command}" />
            </Grid.GestureRecognizers>
        </Grid>
    </StackLayout>
</ContentPage>
```

📂 Vistas    
🔥 `Agregarcompra.xaml.cs`     

```cs
using Appcompras.Modelo;
using Appcompras.VistaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Appcompras.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Agregarcompra : ContentPage
    {
        public Agregarcompra(Mproductos parametrosTrae)
        {
            InitializeComponent();
            BindingContext = new VMagregarcompra(Navigation, parametrosTrae);
        }
    }
}
```

🔥 `Agregarcompra.xaml`     

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Agregarcompra"
             NavigationPage.HasNavigationBar="False">
    <StackLayout BackgroundColor="White"
                 Padding="36,15"
                 Spacing="20">
        <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
               HeightRequest="20"
               Margin="-20, 20"
               HorizontalOptions="Start"/>
        <StackLayout>
            <Image Source="{Binding Parametrosrecibe.Icono}"
                   Margin="0,0,0,30"
                   HeightRequest="220"/>
            <Label Text="Manzana"
                   FontAttributes="Bold"
                   FontSize="36"
                   TextColor="Black"
                   />
            <Label Text="500g"
                   CharacterSpacing="1"
                   TextColor="Gray"
                   Margin="0,-8,0,4"
                   FontSize="14"/>
            <StackLayout Orientation="Horizontal">
                <Grid HorizontalOptions="StartAndExpand"
                      VerticalOptions="Center">
                    <Frame Padding="0"
                           BackgroundColor="#EEEEFF"
                           CornerRadius="20"
                           HasShadow="False"
                           HeightRequest="40"
                           VerticalOptions="Center"
                           WidthRequest="100">
                        
                    </Frame>
                    <Label Text="-"
                           FontSize="36"
                           HorizontalOptions="Start"
                           TextColor="Black"
                           Margin="16,-2,0,6"/>
                    <Label Text="1"
                           HorizontalOptions="Center"
                           VerticalOptions="Center"
                           FontSize="18"
                           FontAttributes="Bold"
                           TextColor="Black"/>
                    <Label Text="+"
                           FontSize="21"
                           HorizontalOptions="End"
                           TextColor="Black"
                           Margin="0,-4,16,0" 
                           VerticalOptions="Center"/>
                </Grid>
                <Label Text="$5.30"
                       FontAttributes="Bold"
                       FontSize="36"
                       TextColor="Black"
                       />
            </StackLayout>
            <Label Text="Descripcion del producto"
                   FontAttributes="Bold"
                   FontSize="18"
                   TextColor="Black"
                   Margin="0,14,0,0"/>
            <Label Text="Información general del producto"
                   TextColor="Gray"
                   FontSize="15"/>
        </StackLayout>
        <StackLayout Orientation="Horizontal"
                     
                     HorizontalOptions="FillAndExpand"
                     VerticalOptions="EndAndExpand"
                     Margin="0,0,0,20">
            <Grid HorizontalOptions="Start">
                <Frame Padding="0"
                       BackgroundColor="#EEEEFF"
                       HasShadow="False"
                       HeightRequest="40"
                       CornerRadius="30"
                       WidthRequest="40"
                       VerticalOptions="Center"
                       HorizontalOptions="Start">
                    
                </Frame>
                <Image Source="https://i.postimg.cc/qqLbqj1m/heart.png"
                       HeightRequest="20"
                       VerticalOptions="Center"
                       Margin="10,0"/>
            </Grid>
            <Button Text="Agregar al carrito"
                    BackgroundColor="#FEBB44"
                    CornerRadius="40"
                    TextTransform="None"
                    HeightRequest="54"
                    WidthRequest="230"
                    Margin="50,20,0,10"/>
        </StackLayout>
    </StackLayout>
</ContentPage>
```

📂 VistaModelo   
🔥 `VMcompras.cs`     

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using Appcompras.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Appcompras.VistaModelo
{
    public class VMcompras : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        int _index;

        List<Mproductos> _listaproductos;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            Navigation = navigation;
            Mostrarproductos(Carrilderecha, Carrilizquierda);
        }
        #endregion

        #region OBJETOS
        public string Texto
        {
            get { return _Texto; }
            set { SetValue(ref _Texto, value); }
        }

        public List<Mproductos> Listaproductos
        {
            get { return _listaproductos; }
            set { SetValue(ref _listaproductos, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Mostrarproductos(StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var funcion = new Dproductos();
            Listaproductos = await funcion.Mostrarproductos();

            var box = new BoxView
            {
                HeightRequest = 60
            };

            Carrilderecha.Children.Clear();
            Carrilizquierda.Children.Clear();

            Carrilderecha.Children.Add(box);
            
            foreach(var item in Listaproductos)
            {
                Dibujarproductos(item, _index, Carrilderecha, Carrilizquierda);
                _index++;
            }
        }

        public void Dibujarproductos(Mproductos item, int index, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var _ubicacion = Convert.ToBoolean(index % 2);
            var carril = _ubicacion ? Carrilderecha : Carrilizquierda;

            var frame = new Frame
            {
                HeightRequest = 300,
                CornerRadius = 10,
                Margin = 8,
                HasShadow = false,
                BackgroundColor = Color.White,
                Padding = 22,
            };

            var stack = new StackLayout
            {

            };

            var image = new Image
            {
                Source = item.Icono,
                HeightRequest = 150,
                HorizontalOptions = LayoutOptions.Center,
                Margin = new Thickness(0, 10),
            };

            var labelprecio = new Label
            {
                Text = "$" + item.Precio,
                FontAttributes = FontAttributes.Bold,
                FontSize = 22,
                Margin = new Thickness(0, 10),
                TextColor = Color.FromHex("#333333")
            };

            var labeldescripcion = new Label
            {
                Text = item.Descripcion,
                FontSize = 16,
                TextColor = Color.Black,
                CharacterSpacing = 1
            };

            var labelpeso = new Label
            {
                Text = item.Peso,
                FontSize = 13,
                TextColor = Color.FromHex("#cccccc"),
                CharacterSpacing = 1
            };

            stack.Children.Add(image);
            stack.Children.Add(labelprecio);
            stack.Children.Add(labeldescripcion);
            stack.Children.Add(labelpeso);

            frame.Content = stack;

            var tap = new TapGestureRecognizer();
            tap.Tapped += async (object sender, EventArgs e) =>
            {
                await Navigation.PushAsync(new Agregarcompra(item));
            };

            carril.Children.Add(frame);
            stack.GestureRecognizers.Add(tap);
        }

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

Dentro de la región procesos encontramos esta porción de código 
```cs
var tap = new TapGestureRecognizer();
            tap.Tapped += async (object sender, EventArgs e) =>
            {
                await Navigation.PushAsync(new Agregarcompra());👈👀 
            };
```
Damos clic derecho sobre `Agregarcompra()` y luego seleccionamos -> ir a definición. Estos nos llevara al archivo `Agregarcompra.xaml.cs `


🔥 `App.xaml.cs`     

```cs
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Appcompras.Vistas;

namespace Appcompras
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new Compras());
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

Probamos la navegación entre páginas dándole clic a cualquier fruta, luego detenemos la depuración para continuar.


## 14. Contador

📂 VistaModelo  
🔥 `VMagregarcompra.cs`     

```cs
using Appcompras.Modelo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Appcompras.VistaModelo
{
    public class VMagregarcompra:BaseViewModel
    {
        #region VARIABLES
        int _Cantidad;
        String _Preciotexto;

        public Mproductos Parametrosrecibe { get; set; }
        #endregion

        #region CONSTRUCTOR
        public VMagregarcompra(INavigation navigation, Mproductos parametrosTrae)
        {
            Navigation = navigation;
            Parametrosrecibe = parametrosTrae;
            Preciotexto = "$" + Parametrosrecibe.Precio;
        }
        #endregion

        #region OBJETOS
        public string Preciotexto
        {
            get { return _Preciotexto; }
            set { SetValue(ref _Preciotexto, value); }
        }

        public int Cantidad
        {
            get { return _Cantidad; }
            set { SetValue(ref _Cantidad, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Volver()
        {
            await Navigation.PopAsync();
        }

        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void Aumentar()
        {
                Cantidad++;
        }

        public void Disminuir()
        {
            if (Cantidad > 0)
            {
                Cantidad--;
            }
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Volvercommand => new Command(async () => await Volver());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand Aumentarcommand => new Command(Aumentar);
        public ICommand Disminuircommand => new Command(Disminuir);
        #endregion
    }
}
```

📂 Vistas    
🔥 `Agregarcompra.xaml`     

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Agregarcompra"
             NavigationPage.HasNavigationBar="False">
    <StackLayout BackgroundColor="White"
                 Padding="36,15"
                 Spacing="20">
        <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
               HeightRequest="20"
               Margin="-20, 20"
               HorizontalOptions="Start">
            <Image.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding Volvercommand}"/>
            </Image.GestureRecognizers>
        </Image>
        <StackLayout>
            <Image Source="{Binding Parametrosrecibe.Icono}"
                   Margin="0,0,0,30"
                   HeightRequest="220"/>
            <Label Text="{Binding Parametrosrecibe.Descripcion}"
                   FontAttributes="Bold"
                   FontSize="36"
                   TextColor="Black"
                   />
            <Label Text="{Binding Parametrosrecibe.Peso}"
                   CharacterSpacing="1"
                   TextColor="Gray"
                   Margin="0,-8,0,4"
                   FontSize="14"/>
            <StackLayout Orientation="Horizontal">
                <Grid HorizontalOptions="StartAndExpand"
                      VerticalOptions="Center">
                    <Frame Padding="0"
                           BackgroundColor="#EEEEFF"
                           CornerRadius="20"
                           HasShadow="False"
                           HeightRequest="40"
                           VerticalOptions="Center"
                           WidthRequest="100">
                        
                    </Frame>
                    <Label Text="-"
                           FontSize="36"
                           HorizontalOptions="Start"
                           TextColor="Black"
                           Margin="16,-2,0,6">
                        <Label.GestureRecognizers>
                            <TapGestureRecognizer Command="{Binding Disminuircommand}"/>
                        </Label.GestureRecognizers>
                    </Label>
                    <Label Text="{Binding Cantidad}"
                           HorizontalOptions="Center"
                           VerticalOptions="Center"
                           FontSize="18"
                           FontAttributes="Bold"
                           TextColor="Black"/>
                    <Label Text="+"
                           FontSize="21"
                           HorizontalOptions="End"
                           TextColor="Black"
                           Margin="0,-4,16,0"
                           VerticalOptions="Center">
                        <Label.GestureRecognizers>
                            <TapGestureRecognizer Command="{Binding Aumentarcommand}" />
                        </Label.GestureRecognizers>
                    </Label>
                </Grid>
                <Label Text="{Binding Preciotexto}"
                       FontAttributes="Bold"
                       FontSize="36"
                       TextColor="Black"
                       />
            </StackLayout>
            <Label Text="Descripcion del producto"
                   FontAttributes="Bold"
                   FontSize="18"
                   TextColor="Black"
                   Margin="0,14,0,0"/>
            <Label Text="Información general del producto"
                   TextColor="Gray"
                   FontSize="15"/>
        </StackLayout>
        <StackLayout Orientation="Horizontal"
                     
                     HorizontalOptions="FillAndExpand"
                     VerticalOptions="EndAndExpand"
                     Margin="0,0,0,20">
            <Grid HorizontalOptions="Start">
                <Frame Padding="0"
                       BackgroundColor="#EEEEFF"
                       HasShadow="False"
                       HeightRequest="40"
                       CornerRadius="30"
                       WidthRequest="40"
                       VerticalOptions="Center"
                       HorizontalOptions="Start">
                    
                </Frame>
                <Image Source="https://i.postimg.cc/qqLbqj1m/heart.png"
                       HeightRequest="20"
                       VerticalOptions="Center"
                       Margin="10,0"/>
            </Grid>
            <Button Text="Agregar al carrito"
                    BackgroundColor="#FEBB44"
                    CornerRadius="40"
                    TextTransform="None"
                    HeightRequest="54"
                    WidthRequest="230"
                    Margin="50,20,0,10"/>
        </StackLayout>
    </StackLayout>
</ContentPage>
```

Acá puedes agregar un punto de interrupción para ver todos los datos que pasan por el constructor VMagregarcompra, Parametrosrecibe. 


## 15. Insertar detallecompra

📂 Modelo -> Agregar -> Clase -> Mdetallecompras.cs          
🔥 `Mdetallecompras.cs`     

```cs
using System;
using System.Collections.Generic;
using System.Text;

namespace Appcompras.Modelo
{
    public class Mdetallecompras
    {
        public string Cantidad { get; set; }
        public string Preciocompra { get; set; }
        public string Idproducto { get; set; }
        public string Total { get; set; }
        public string Iddetallecompra { get; set; }
    }
}
```

📂 Datos -> Agregar -> Clase -> Ddetallecompras.cs          
🔥 `Ddetallecompras.cs`     

```cs
using System;
using System.Collections.Generic;
using System.Text;
using Firebase.Database.Query;
using System.Linq;
using Firebase.Database;
using System.Threading.Tasks;
using Appcompras.Modelo;
using Appcompras.Conexiones;

namespace Appcompras.Datos
{
    public class Ddetallecompras
    {
        public async Task InsertarDc(Mdetallecompras parametros)
        {
            await Cconexion.firebase
                .Child("Detallecompra")
                .PostAsync(new Mdetallecompras()
                {
                    Cantidad = parametros.Cantidad,
                    Idproducto = parametros.Idproducto,
                    Preciocompra = parametros.Preciocompra,
                    Total = parametros.Total
                });
        }
    }
}
```

📂 VistaModelo  
🔥 `VMagregarcompra.cs`     

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Appcompras.VistaModelo
{
    public class VMagregarcompra:BaseViewModel
    {
        #region VARIABLES
        int _Cantidad;
        String _Preciotexto;

        public Mproductos Parametrosrecibe { get; set; }
        #endregion

        #region CONSTRUCTOR
        public VMagregarcompra(INavigation navigation, Mproductos parametrosTrae)
        {
            Navigation = navigation;
            Parametrosrecibe = parametrosTrae;
            Preciotexto = "$" + Parametrosrecibe.Precio;
        }
        #endregion

        #region OBJETOS
        public string Preciotexto
        {
            get { return _Preciotexto; }
            set { SetValue(ref _Preciotexto, value); }
        }

        public int Cantidad
        {
            get { return _Cantidad; }
            set { SetValue(ref _Cantidad, value); }
        }
        #endregion

        #region PROCESOS
        public async Task InsertarDc()
        {
            if (Cantidad == 0)
            {
                Cantidad = 1;
            }
            var funcion = new Ddetallecompras();
            var parametros = new Mdetallecompras();
            parametros.Cantidad = Cantidad.ToString();
            parametros.Idproducto = Parametrosrecibe.Idproducto;
            parametros.Preciocompra = Parametrosrecibe.Precio;
            double total = 0;
            double preciocompra = Convert.ToDouble(Parametrosrecibe.Precio);
            double cantidad = Convert.ToDouble(Cantidad);
            total = cantidad * preciocompra;
            parametros.Total = total.ToString();

            await funcion.InsertarDc(parametros);
            await Volver();
        }

        public async Task Volver()
        {
            await Navigation.PopAsync();
        }

        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void Aumentar()
        {
                Cantidad++;
        }

        public void Disminuir()
        {
            if (Cantidad > 0)
            {
                Cantidad--;
            }
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Volvercommand => new Command(async () => await Volver());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand Aumentarcommand => new Command(Aumentar);
        public ICommand Disminuircommand => new Command(Disminuir);
        public ICommand Insertarcommand => new Command(async () => await InsertarDc());
        #endregion
    }
}
```

📂 Vistas  
🔥 `Agregarcompra.xaml`     

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Agregarcompra"
             NavigationPage.HasNavigationBar="False">
    <StackLayout BackgroundColor="White"
                 Padding="36,15"
                 Spacing="20">
        <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
               HeightRequest="20"
               Margin="-20, 20"
               HorizontalOptions="Start">
            <Image.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding Volvercommand}"/>
            </Image.GestureRecognizers>
        </Image>
        <StackLayout>
            <Image Source="{Binding Parametrosrecibe.Icono}"
                   Margin="0,0,0,30"
                   HeightRequest="220"/>
            <Label Text="{Binding Parametrosrecibe.Descripcion}"
                   FontAttributes="Bold"
                   FontSize="36"
                   TextColor="Black"
                   />
            <Label Text="{Binding Parametrosrecibe.Peso}"
                   CharacterSpacing="1"
                   TextColor="Gray"
                   Margin="0,-8,0,4"
                   FontSize="14"/>
            <StackLayout Orientation="Horizontal">
                <Grid HorizontalOptions="StartAndExpand"
                      VerticalOptions="Center">
                    <Frame Padding="0"
                           BackgroundColor="#EEEEFF"
                           CornerRadius="20"
                           HasShadow="False"
                           HeightRequest="40"
                           VerticalOptions="Center"
                           WidthRequest="100">
                        
                    </Frame>
                    <Label Text="-"
                           FontSize="36"
                           HorizontalOptions="Start"
                           TextColor="Black"
                           Margin="16,-2,0,6">
                        <Label.GestureRecognizers>
                            <TapGestureRecognizer Command="{Binding Disminuircommand}"/>
                        </Label.GestureRecognizers>
                    </Label>
                    <Label Text="{Binding Cantidad}"
                           HorizontalOptions="Center"
                           VerticalOptions="Center"
                           FontSize="18"
                           FontAttributes="Bold"
                           TextColor="Black"/>
                    <Label Text="+"
                           FontSize="21"
                           HorizontalOptions="End"
                           TextColor="Black"
                           Margin="0,-4,16,0"
                           VerticalOptions="Center">
                        <Label.GestureRecognizers>
                            <TapGestureRecognizer Command="{Binding Aumentarcommand}" />
                        </Label.GestureRecognizers>
                    </Label>
                </Grid>
                <Label Text="{Binding Preciotexto}"
                       FontAttributes="Bold"
                       FontSize="36"
                       TextColor="Black"
                       />
            </StackLayout>
            <Label Text="Descripcion del producto"
                   FontAttributes="Bold"
                   FontSize="18"
                   TextColor="Black"
                   Margin="0,14,0,0"/>
            <Label Text="Información general del producto"
                   TextColor="Gray"
                   FontSize="15"/>
        </StackLayout>
        <StackLayout Orientation="Horizontal"
                     
                     HorizontalOptions="FillAndExpand"
                     VerticalOptions="EndAndExpand"
                     Margin="0,0,0,20">
            <Grid HorizontalOptions="Start">
                <Frame Padding="0"
                       BackgroundColor="#EEEEFF"
                       HasShadow="False"
                       HeightRequest="40"
                       CornerRadius="30"
                       WidthRequest="40"
                       VerticalOptions="Center"
                       HorizontalOptions="Start">
                    
                </Frame>
                <Image Source="https://i.postimg.cc/qqLbqj1m/heart.png"
                       HeightRequest="20"
                       VerticalOptions="Center"
                       Margin="10,0"/>
            </Grid>
            <Button Text="Agregar al carrito"
                    BackgroundColor="#FEBB44"
                    CornerRadius="40"
                    TextTransform="None"
                    HeightRequest="54"
                    WidthRequest="230"
                    Margin="50,20,0,10"
                    Command="{Binding Insertarcommand}"/>
        </StackLayout>
    </StackLayout>
</ContentPage>
```


## 16. Enlazar tablas 

📂 Datos  
🔥 `Ddetallecompras.cs`     

```cs
using System;
using System.Collections.Generic;
using System.Text;
using Firebase.Database.Query;
using System.Linq;
using Firebase.Database;
using System.Threading.Tasks;
using Appcompras.Modelo;
using Appcompras.Conexiones;

namespace Appcompras.Datos
{
    public class Ddetallecompras
    {
        public async Task InsertarDc(Mdetallecompras parametros)
        {
            await Cconexion.firebase
                .Child("Detallecompra")
                .PostAsync(new Mdetallecompras()
                {
                    Cantidad = parametros.Cantidad,
                    Idproducto = parametros.Idproducto,
                    Preciocompra = parametros.Preciocompra,
                    Total = parametros.Total
                });
        }

        public async Task<List<Mdetallecompras>> MostrarpreviaDc()
        {
            var ListaDc = new List<Mdetallecompras>();
            var parametrosProductos = new Mproductos();
            var funcionproductos = new Dproductos();

            var data = await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>();

            data.Where(a => a.Key != "Modelo");

            foreach(var hobit in data)
            {
                var parametros = new Mdetallecompras();
                parametros.Idproducto = hobit.Object.Idproducto;
                parametrosProductos.Idproducto = hobit.Object.Idproducto;
                var listaproductos = await funcionproductos.MostrarproductosXid(parametrosProductos);

                parametros.Imagen = listaproductos[0].Icono;
                ListaDc.Add(parametros);
            }

            return ListaDc;
        }
    }
}
```

🔥 `Dproductos.cs`     

```cs
using System;
using System.Collections.Generic;
using System.Text;

//Para usar condicionales
using System.Linq;

//Para tareas asincronas
using System.Threading.Tasks;
using Appcompras.Modelo;

using Appcompras.Conexiones;
using Xamarin.Essentials;

namespace Appcompras.Datos
{
    public class Dproductos
    {
        public async Task<List<Mproductos>> Mostrarproductos()
        {
            return (await Cconexion.firebase
                .Child("Productos")
                .OnceAsync<Mproductos>()).Select(item => new Mproductos
                {
                    Descripcion = item.Object.Descripcion,
                    Icono = item.Object.Icono,
                    Precio = item.Object.Precio,
                    Peso = item.Object.Peso,
                    Idproducto = item.Key
                }).ToList();
        }

        public async Task<List<Mproductos>> MostrarproductosXid(Mproductos parametros)
        {
            return (await Cconexion.firebase
                .Child("Productos")    
                .OnceAsync<Mproductos>())
                .Where(a=>a.Key == parametros.Idproducto).Select(item => new Mproductos
                {
                    Descripcion = item.Object.Descripcion,
                    Icono = item.Object.Icono,
                    Precio = item.Object.Precio,
                    Peso = item.Object.Peso,
                    Idproducto = item.Key
                }).ToList();
        }
    }
}
```

📂 Modelado  
🔥 `Mdetallecompras.cs`     

```cs
using System;
using System.Collections.Generic;
using System.Text;

namespace Appcompras.Modelo
{
    public class Mdetallecompras
    {
        public string Cantidad { get; set; }
        public string Preciocompra { get; set; }
        public string Idproducto { get; set; }
        public string Total { get; set; }
        public string Iddetallecompra { get; set; }

        //
        public string Imagen { get; set; }
    }
}
```


## 17. Cart

📂 Datos   
🔥 `Ddetallecompras.cs`     

```cs
using System;
using System.Collections.Generic;
using System.Text;
using Firebase.Database.Query;
using System.Linq;
using Firebase.Database;
using System.Threading.Tasks;
using Appcompras.Modelo;
using Appcompras.Conexiones;

namespace Appcompras.Datos
{
    public class Ddetallecompras
    {
        public async Task InsertarDc(Mdetallecompras parametros)
        {
            await Cconexion.firebase
                .Child("Detallecompra")
                .PostAsync(new Mdetallecompras()
                {
                    Cantidad = parametros.Cantidad,
                    Idproducto = parametros.Idproducto,
                    Preciocompra = parametros.Preciocompra,
                    Total = parametros.Total
                });
        }

        public async Task<List<Mdetallecompras>> MostrarVistapreviaDc()
        {
            var ListaDc = new List<Mdetallecompras>();
            var parametrosProductos = new Mproductos();
            var funcionproductos = new Dproductos();

            var data = await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>();

            data.Where(a => a.Key != "Modelo");

            foreach(var hobit in data)
            {
                var parametros = new Mdetallecompras();
                parametros.Idproducto = hobit.Object.Idproducto;
                parametrosProductos.Idproducto = hobit.Object.Idproducto;
                var listaproductos = await funcionproductos.MostrarproductosXid(parametrosProductos);

                parametros.Imagen = listaproductos[0].Icono;
                ListaDc.Add(parametros);
            }

            return ListaDc;
        }
    }
}
```

📂 VistaModelo   
🔥 `VMcompras.cs`     

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using Appcompras.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Appcompras.VistaModelo
{
    public class VMcompras : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        int _index;

        List<Mproductos> _listaproductos;
        List<Mdetallecompras> _listaVistapreviaDc;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            Navigation = navigation;
            Mostrarproductos(Carrilderecha, Carrilizquierda);
        }
        #endregion

        #region OBJETOS
        public List<Mdetallecompras> ListaVistapreviaDc
        {
            get { return _listaVistapreviaDc; }
            set { SetValue(ref _listaVistapreviaDc, value); }
        }

        public List<Mproductos> Listaproductos
        {
            get { return _listaproductos; }
            set { SetValue(ref _listaproductos, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Mostrarproductos(StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var funcion = new Dproductos();
            Listaproductos = await funcion.Mostrarproductos();

            var box = new BoxView
            {
                HeightRequest = 60
            };

            Carrilderecha.Children.Clear();
            Carrilizquierda.Children.Clear();

            Carrilderecha.Children.Add(box);
            
            foreach(var item in Listaproductos)
            {
                Dibujarproductos(item, _index, Carrilderecha, Carrilizquierda);
                _index++;
            }
        }

        public void Dibujarproductos(Mproductos item, int index, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var _ubicacion = Convert.ToBoolean(index % 2);
            var carril = _ubicacion ? Carrilderecha : Carrilizquierda;

            var frame = new Frame
            {
                HeightRequest = 300,
                CornerRadius = 10,
                Margin = 8,
                HasShadow = false,
                BackgroundColor = Color.White,
                Padding = 22,
            };

            var stack = new StackLayout
            {

            };

            var image = new Image
            {
                Source = item.Icono,
                HeightRequest = 150,
                HorizontalOptions = LayoutOptions.Center,
                Margin = new Thickness(0, 10),
            };

            var labelprecio = new Label
            {
                Text = "$" + item.Precio,
                FontAttributes = FontAttributes.Bold,
                FontSize = 22,
                Margin = new Thickness(0, 10),
                TextColor = Color.FromHex("#333333")
            };

            var labeldescripcion = new Label
            {
                Text = item.Descripcion,
                FontSize = 16,
                TextColor = Color.Black,
                CharacterSpacing = 1
            };

            var labelpeso = new Label
            {
                Text = item.Peso,
                FontSize = 13,
                TextColor = Color.FromHex("#cccccc"),
                CharacterSpacing = 1
            };

            stack.Children.Add(image);
            stack.Children.Add(labelprecio);
            stack.Children.Add(labeldescripcion);
            stack.Children.Add(labelpeso);

            frame.Content = stack;

            var tap = new TapGestureRecognizer();
            tap.Tapped += async (object sender, EventArgs e) =>
            {
                await Navigation.PushAsync(new Agregarcompra(item));
            };

            carril.Children.Add(frame);
            stack.GestureRecognizers.Add(tap);
        }

        public async Task ProcesoAsyncrono()
        {

        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void ProcesoSimple()
        {

        }

        public async Task MostrarVistapreviaDc()
        {
            var funcion = new Ddetallecompras();
            ListaVistapreviaDc = await funcion.MostrarVistapreviaDc();
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

📂 Vistas      
🔥 `Compras.xaml`       

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100"
              VerticalOptions="FillAndExpand"
              >
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView>
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="0"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilizquierda">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="22">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                                           HeightRequest="150"
                                           HorizontalOptions="Center"
                                           Margin="0,10"/>
                                    <Label Text="$8.30"
                                           FontAttributes="Bold"
                                           FontSize="22"
                                           Margin="0,10"
                                           TextColor="#333333"/>
                                    <Label Text="Manzana"
                                           FontSize="16"
                                           TextColor="Black"
                                           CharacterSpacing="1"/>
                                    <Label Text="500g"
                                           FontSize="13"
                                           TextColor="#cccccc"
                                           CharacterSpacing="1"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="1"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilderecha">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <StackLayout Grid.Row="1"
                         Orientation="Horizontal"
                         Margin="20,0,10,0">
                <Label Text="Cart"
                       FontSize="30"
                       FontAttributes="Bold"
                       VerticalOptions="Center"
                       TextColor="White"/>
                <CollectionView HorizontalOptions="CenterAndExpand"
                                VerticalOptions="Center">
                    
                </CollectionView>
                <Frame HeightRequest="40"
                       WidthRequest="60"
                       VerticalOptions="Center"
                       CornerRadius="30"
                       Padding="5"
                       BackgroundColor="#FABC4B">
                    <Label Text="1"
                           VerticalOptions="Center"
                           FontSize="15"
                           FontAttributes="Bold"/>
                </Frame>
            </StackLayout>
            <Grid.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding command}" />
            </Grid.GestureRecognizers>
        </Grid>
    </StackLayout>
</ContentPage>
```


## 18. Detalle compra

📂 Vistas      
🔥 `Compras.xaml.cs`   

```cs
using Appcompras.VistaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Appcompras.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Compras : ContentPage
    {
        VMcompras vm;

        public Compras()
        {
            InitializeComponent();
            vm = new VMcompras(Navigation, Carrilderecha, Carrilizquierda);
            BindingContext = vm;

            this.Appearing += Compras_Appearing; //+=Tabulador
        }

        private async void Compras_Appearing(object sender, EventArgs e)
        {
            await vm.MostrarVistapreviaDc();
        }
    }
}
```

🔥 `Compras.xaml`   

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100"
              VerticalOptions="FillAndExpand"
              >
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView>
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="0"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilizquierda">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="22">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                                           HeightRequest="150"
                                           HorizontalOptions="Center"
                                           Margin="0,10"/>
                                    <Label Text="$8.30"
                                           FontAttributes="Bold"
                                           FontSize="22"
                                           Margin="0,10"
                                           TextColor="#333333"/>
                                    <Label Text="Manzana"
                                           FontSize="16"
                                           TextColor="Black"
                                           CharacterSpacing="1"/>
                                    <Label Text="500g"
                                           FontSize="13"
                                           TextColor="#cccccc"
                                           CharacterSpacing="1"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="1"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilderecha">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <StackLayout Grid.Row="1"
                         Orientation="Horizontal"
                         Margin="20,0,10,0">
                <Label Text="Cart"
                       FontSize="30"
                       WidthRequest="100"
                       FontAttributes="Bold"
                       VerticalOptions="Center"
                       TextColor="White"/>
                <CollectionView HorizontalOptions="CenterAndExpand"
                                VerticalOptions="Center"
                                ItemsSource="{Binding ListaVistapreviaDc}">
                    <CollectionView.ItemsLayout>
                        <GridItemsLayout Orientation="Horizontal"
                                         Span="1"
                                         HorizontalItemSpacing="10"/>
                    </CollectionView.ItemsLayout>
                    <CollectionView.ItemTemplate>
                        <DataTemplate>
                            <Grid Margin="4,0"
                                  WidthRequest="30">
                                <Frame CornerRadius="24"
                                       HorizontalOptions="Center"
                                       VerticalOptions="Center">
                                    
                                </Frame>
                                <Image Source="{Binding Imagen}"
                                       Margin="0,6"
                                       WidthRequest="30"
                                       HorizontalOptions="Center" />
                            </Grid>
                        </DataTemplate>
                    </CollectionView.ItemTemplate>
                </CollectionView>
                <Frame HeightRequest="40"
                       WidthRequest="60"
                       VerticalOptions="Center"
                       CornerRadius="30"
                       Padding="5"
                       BackgroundColor="#FABC4B">
                    <Label Text="1"
                           VerticalOptions="Center"
                           FontSize="15"
                           FontAttributes="Bold"/>
                </Frame>
            </StackLayout>
            <Grid.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding command}" />
            </Grid.GestureRecognizers>
        </Grid>
    </StackLayout>
</ContentPage>
```

📂 Datos        
🔥 `Ddetallecompras.cs`   

```cs
using System;
using System.Collections.Generic;
using System.Text;
using Firebase.Database.Query;
using System.Linq;
using Firebase.Database;
using System.Threading.Tasks;
using Appcompras.Modelo;
using Appcompras.Conexiones;

namespace Appcompras.Datos
{
    public class Ddetallecompras
    {
        public async Task InsertarDc(Mdetallecompras parametros)
        {
            await Cconexion.firebase
                .Child("Detallecompra")
                .PostAsync(new Mdetallecompras()
                {
                    Cantidad = parametros.Cantidad,
                    Idproducto = parametros.Idproducto,
                    Preciocompra = parametros.Preciocompra,
                    Total = parametros.Total
                });
        }

        public async Task<List<Mdetallecompras>> MostrarVistapreviaDc()
        {
            var ListaDc = new List<Mdetallecompras>();
            var parametrosProductos = new Mproductos();
            var funcionproductos = new Dproductos();

            var data = (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>())
                .Where(a => a.Key != "Modelo")
                .Select(item=> new Mdetallecompras
                {
                    Idproducto = item.Object.Idproducto,
                    Iddetallecompra = item.Key
                })
                ;

            foreach(var hobit in data)
            {
                var parametros = new Mdetallecompras();
                parametros.Idproducto = hobit.Idproducto;
                parametrosProductos.Idproducto = hobit.Idproducto;
                var listaproductos = await funcionproductos.MostrarproductosXid(parametrosProductos);

                parametros.Imagen = listaproductos[0].Icono;
                ListaDc.Add(parametros);
            }

            return ListaDc;
        }
    }
}
```


## 19. Transiciones  

Importamos paquete...        
🖥 Solución "Appcompras" (3 de 3 proyectos)   
-> Administrar paquetes NuGet para la solución...     

- Examinar: `Xamarin.Plugin.SharedTransitions`  
	- ☑ Proyecto
	- ☑ Appcompras
	- ☑ Appcompras.Android/Appc
	- ☑ Appcompras.iOS/Appcomp  
- Instalar 

🔥 `App.xaml.cs`  

```cs
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Appcompras.Vistas;
using Plugin.SharedTransitions;

namespace Appcompras
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new SharedTransitionNavigationPage(new Compras());
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

📂 Vistas   
🔥 `Compras.xaml`    

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView"
             xmlns:transicion ="clr-namespace:Plugin.SharedTransitions;assembly=Plugin.SharedTransitions">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100"
              VerticalOptions="FillAndExpand"
              >
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView>
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="0"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilizquierda">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="22">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                                           HeightRequest="150"
                                           HorizontalOptions="Center"
                                           Margin="0,10"/>
                                    <Label Text="$8.30"
                                           FontAttributes="Bold"
                                           FontSize="22"
                                           Margin="0,10"
                                           TextColor="#333333"/>
                                    <Label Text="Manzana"
                                           FontSize="16"
                                           TextColor="Black"
                                           CharacterSpacing="1"/>
                                    <Label Text="500g"
                                           FontSize="13"
                                           TextColor="#cccccc"
                                           CharacterSpacing="1"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="1"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilderecha">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <StackLayout Grid.Row="1"
                         Orientation="Horizontal"
                         Margin="20,0,10,0">
                <Label Text="Cart"
                       FontSize="30"
                       WidthRequest="100"
                       FontAttributes="Bold"
                       VerticalOptions="Center"
                       TextColor="White"/>
                <CollectionView HorizontalOptions="CenterAndExpand"
                                VerticalOptions="Center"
                                ItemsSource="{Binding ListaVistapreviaDc}">
                    <CollectionView.ItemsLayout>
                        <GridItemsLayout Orientation="Horizontal"
                                         Span="1"
                                         HorizontalItemSpacing="10"/>
                    </CollectionView.ItemsLayout>
                    <CollectionView.ItemTemplate>
                        <DataTemplate>
                            <Grid Margin="4,0"
                                  WidthRequest="30">
                                <Frame CornerRadius="24"
                                       HorizontalOptions="Center"
                                       VerticalOptions="Center">
                                    
                                </Frame>
                                <Image Source="{Binding Imagen}"
                                       Margin="0,6"
                                       WidthRequest="30"
                                       HorizontalOptions="Center" 
                                       transicion:Transition.Group="{Binding Idproducto}"
                                       transicion:Transition.Name="producto"/>
                            </Grid>
                        </DataTemplate>
                    </CollectionView.ItemTemplate>
                </CollectionView>
                <Frame HeightRequest="40"
                       WidthRequest="60"
                       VerticalOptions="Center"
                       CornerRadius="30"
                       Padding="5"
                       BackgroundColor="#FABC4B">
                    <Label Text="1"
                           VerticalOptions="Center"
                           FontSize="15"
                           FontAttributes="Bold"/>
                </Frame>
            </StackLayout>
            <Grid.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding command}" />
            </Grid.GestureRecognizers>
        </Grid>
    </StackLayout>
</ContentPage>
```

🔥 `Agregarcompra.xaml`    

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Agregarcompra"
             NavigationPage.HasNavigationBar="False"
             xmlns:transicion="clr-namespace:Plugin.SharedTransitions;assembly=Plugin.SharedTransitions">
    <StackLayout BackgroundColor="White"
                 Padding="36,15"
                 Spacing="20">
        <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
               HeightRequest="20"
               Margin="-20, 20"
               HorizontalOptions="Start">
            <Image.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding Volvercommand}"/>
            </Image.GestureRecognizers>
        </Image>
        <StackLayout>
            <Image Source="{Binding Parametrosrecibe.Icono}"
                   Margin="0,0,0,30"
                   HeightRequest="220"
                   transicion:Transition.Name="producto"/>
            <Label Text="{Binding Parametrosrecibe.Descripcion}"
                   FontAttributes="Bold"
                   FontSize="36"
                   TextColor="Black"
                   />
            <Label Text="{Binding Parametrosrecibe.Peso}"
                   CharacterSpacing="1"
                   TextColor="Gray"
                   Margin="0,-8,0,4"
                   FontSize="14"/>
            <StackLayout Orientation="Horizontal">
                <Grid HorizontalOptions="StartAndExpand"
                      VerticalOptions="Center">
                    <Frame Padding="0"
                           BackgroundColor="#EEEEFF"
                           CornerRadius="20"
                           HasShadow="False"
                           HeightRequest="40"
                           VerticalOptions="Center"
                           WidthRequest="100">
                        
                    </Frame>
                    <Label Text="-"
                           FontSize="36"
                           HorizontalOptions="Start"
                           TextColor="Black"
                           Margin="16,-2,0,6">
                        <Label.GestureRecognizers>
                            <TapGestureRecognizer Command="{Binding Disminuircommand}"/>
                        </Label.GestureRecognizers>
                    </Label>
                    <Label Text="{Binding Cantidad}"
                           HorizontalOptions="Center"
                           VerticalOptions="Center"
                           FontSize="18"
                           FontAttributes="Bold"
                           TextColor="Black"/>
                    <Label Text="+"
                           FontSize="21"
                           HorizontalOptions="End"
                           TextColor="Black"
                           Margin="0,-4,16,0"
                           VerticalOptions="Center">
                        <Label.GestureRecognizers>
                            <TapGestureRecognizer Command="{Binding Aumentarcommand}" />
                        </Label.GestureRecognizers>
                    </Label>
                </Grid>
                <Label Text="{Binding Preciotexto}"
                       FontAttributes="Bold"
                       FontSize="36"
                       TextColor="Black"
                       />
            </StackLayout>
            <Label Text="Descripcion del producto"
                   FontAttributes="Bold"
                   FontSize="18"
                   TextColor="Black"
                   Margin="0,14,0,0"/>
            <Label Text="Información general del producto"
                   TextColor="Gray"
                   FontSize="15"/>
        </StackLayout>
        <StackLayout Orientation="Horizontal"
                     
                     HorizontalOptions="FillAndExpand"
                     VerticalOptions="EndAndExpand"
                     Margin="0,0,0,20">
            <Grid HorizontalOptions="Start">
                <Frame Padding="0"
                       BackgroundColor="#EEEEFF"
                       HasShadow="False"
                       HeightRequest="40"
                       CornerRadius="30"
                       WidthRequest="40"
                       VerticalOptions="Center"
                       HorizontalOptions="Start">
                    
                </Frame>
                <Image Source="https://i.postimg.cc/qqLbqj1m/heart.png"
                       HeightRequest="20"
                       VerticalOptions="Center"
                       Margin="10,0"/>
            </Grid>
            <Button Text="Agregar al carrito"
                    BackgroundColor="#FEBB44"
                    CornerRadius="40"
                    TextTransform="None"
                    HeightRequest="54"
                    WidthRequest="230"
                    Margin="50,20,0,10"
                    Command="{Binding Insertarcommand}"/>
        </StackLayout>
    </StackLayout>
</ContentPage>
```

📂 VistaModelo      
🔥 `VMcompras.cs`    

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using Appcompras.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;
using Plugin.SharedTransitions;

namespace Appcompras.VistaModelo
{
    public class VMcompras : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        int _index;

        List<Mproductos> _listaproductos;
        List<Mdetallecompras> _listaVistapreviaDc;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            Navigation = navigation;
            Mostrarproductos(Carrilderecha, Carrilizquierda);
        }
        #endregion

        #region OBJETOS
        public List<Mdetallecompras> ListaVistapreviaDc
        {
            get { return _listaVistapreviaDc; }
            set { SetValue(ref _listaVistapreviaDc, value); }
        }

        public List<Mproductos> Listaproductos
        {
            get { return _listaproductos; }
            set { SetValue(ref _listaproductos, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Mostrarproductos(StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var funcion = new Dproductos();
            Listaproductos = await funcion.Mostrarproductos();

            var box = new BoxView
            {
                HeightRequest = 60
            };

            Carrilderecha.Children.Clear();
            Carrilizquierda.Children.Clear();

            Carrilderecha.Children.Add(box);
            
            foreach(var item in Listaproductos)
            {
                Dibujarproductos(item, _index, Carrilderecha, Carrilizquierda);
                _index++;
            }
        }

        public void Dibujarproductos(Mproductos item, int index, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var _ubicacion = Convert.ToBoolean(index % 2);
            var carril = _ubicacion ? Carrilderecha : Carrilizquierda;

            var frame = new Frame
            {
                HeightRequest = 300,
                CornerRadius = 10,
                Margin = 8,
                HasShadow = false,
                BackgroundColor = Color.White,
                Padding = 22,
            };

            var stack = new StackLayout
            {

            };

            var image = new Image
            {
                Source = item.Icono,
                HeightRequest = 150,
                HorizontalOptions = LayoutOptions.Center,
                Margin = new Thickness(0, 10),
            };

            var labelprecio = new Label
            {
                Text = "$" + item.Precio,
                FontAttributes = FontAttributes.Bold,
                FontSize = 22,
                Margin = new Thickness(0, 10),
                TextColor = Color.FromHex("#333333")
            };

            var labeldescripcion = new Label
            {
                Text = item.Descripcion,
                FontSize = 16,
                TextColor = Color.Black,
                CharacterSpacing = 1
            };

            var labelpeso = new Label
            {
                Text = item.Peso,
                FontSize = 13,
                TextColor = Color.FromHex("#cccccc"),
                CharacterSpacing = 1
            };

            stack.Children.Add(image);
            stack.Children.Add(labelprecio);
            stack.Children.Add(labeldescripcion);
            stack.Children.Add(labelpeso);

            frame.Content = stack;

            var tap = new TapGestureRecognizer();
            tap.Tapped += async (object sender, EventArgs e) =>
            {
                var page = (App.Current.MainPage as SharedTransitionNavigationPage).CurrentPage;
                SharedTransitionNavigationPage.SetTransitionDuration(page, 1000);
                SharedTransitionNavigationPage.SetTransitionSelectedGroup(page, item.Idproducto);
                await Navigation.PushAsync(new Agregarcompra(item));
            };

            carril.Children.Add(frame);
            stack.GestureRecognizers.Add(tap);
        }

        public async Task ProcesoAsyncrono()
        {

        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void ProcesoSimple()
        {

        }

        public async Task MostrarVistapreviaDc()
        {
            var funcion = new Ddetallecompras();
            ListaVistapreviaDc = await funcion.MostrarVistapreviaDc();
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


## 20. Transiciones entre paginas

📂 VistaModelo      
🔥 `VMcompras.cs`    

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using Appcompras.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;
using Plugin.SharedTransitions;

namespace Appcompras.VistaModelo
{
    public class VMcompras : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        int _index;

        List<Mproductos> _listaproductos;
        List<Mdetallecompras> _listaVistapreviaDc;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            Navigation = navigation;
            Mostrarproductos(Carrilderecha, Carrilizquierda);
        }
        #endregion

        #region OBJETOS
        public List<Mdetallecompras> ListaVistapreviaDc
        {
            get { return _listaVistapreviaDc; }
            set { SetValue(ref _listaVistapreviaDc, value); }
        }

        public List<Mproductos> Listaproductos
        {
            get { return _listaproductos; }
            set { SetValue(ref _listaproductos, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Mostrarproductos(StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var funcion = new Dproductos();
            Listaproductos = await funcion.Mostrarproductos();

            var box = new BoxView
            {
                HeightRequest = 60
            };

            Carrilderecha.Children.Clear();
            Carrilizquierda.Children.Clear();

            Carrilderecha.Children.Add(box);
            
            foreach(var item in Listaproductos)
            {
                Dibujarproductos(item, _index, Carrilderecha, Carrilizquierda);
                _index++;
            }
        }

        public void Dibujarproductos(Mproductos item, int index, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var _ubicacion = Convert.ToBoolean(index % 2);
            var carril = _ubicacion ? Carrilderecha : Carrilizquierda;

            var frame = new Frame
            {
                HeightRequest = 300,
                CornerRadius = 10,
                Margin = 8,
                HasShadow = false,
                BackgroundColor = Color.White,
                Padding = 22,
            };

            var stack = new StackLayout
            {

            };

            var image = new Image
            {
                Source = item.Icono,
                HeightRequest = 150,
                HorizontalOptions = LayoutOptions.Center,
                Margin = new Thickness(0, 10),
            };

            var labelprecio = new Label
            {
                Text = "$" + item.Precio,
                FontAttributes = FontAttributes.Bold,
                FontSize = 22,
                Margin = new Thickness(0, 10),
                TextColor = Color.FromHex("#333333")
            };

            var labeldescripcion = new Label
            {
                Text = item.Descripcion,
                FontSize = 16,
                TextColor = Color.Black,
                CharacterSpacing = 1
            };

            var labelpeso = new Label
            {
                Text = item.Peso,
                FontSize = 13,
                TextColor = Color.FromHex("#cccccc"),
                CharacterSpacing = 1
            };

            stack.Children.Add(image);
            stack.Children.Add(labelprecio);
            stack.Children.Add(labeldescripcion);
            stack.Children.Add(labelpeso);

            frame.Content = stack;

            var tap = new TapGestureRecognizer();
            tap.Tapped += async (object sender, EventArgs e) =>
            {
                var page = (App.Current.MainPage as SharedTransitionNavigationPage).CurrentPage;
                SharedTransitionNavigationPage.SetBackgroundAnimation(page, BackgroundAnimation.SlideFromRight);
                SharedTransitionNavigationPage.SetTransitionDuration(page, 1000);
                SharedTransitionNavigationPage.SetTransitionSelectedGroup(page, item.Idproducto);
                await Navigation.PushAsync(new Agregarcompra(item));
            };

            carril.Children.Add(frame);
            stack.GestureRecognizers.Add(tap);
        }

        public async Task ProcesoAsyncrono()
        {

        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void ProcesoSimple()
        {

        }

        public async Task MostrarVistapreviaDc()
        {
            var funcion = new Ddetallecompras();
            ListaVistapreviaDc = await funcion.MostrarVistapreviaDc();
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


## 21. Diseño de lista de compras

📂 Vistas    
🔥 `Compras.xaml`   

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView"
             xmlns:transicion ="clr-namespace:Plugin.SharedTransitions;assembly=Plugin.SharedTransitions">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100" IsVisible="false"
              VerticalOptions="FillAndExpand"
              x:Name="gridproductos">
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView>
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="0"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilizquierda">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="22">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                                           HeightRequest="150"
                                           HorizontalOptions="Center"
                                           Margin="0,10"/>
                                    <Label Text="$8.30"
                                           FontAttributes="Bold"
                                           FontSize="22"
                                           Margin="0,10"
                                           TextColor="#333333"/>
                                    <Label Text="Manzana"
                                           FontSize="16"
                                           TextColor="Black"
                                           CharacterSpacing="1"/>
                                    <Label Text="500g"
                                           FontSize="13"
                                           TextColor="#cccccc"
                                           CharacterSpacing="1"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="1"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilderecha">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <!--#region Panelcontador -->
            <StackLayout Grid.Row="1"
                         Orientation="Horizontal"
                         Margin="20,0,10,0"
                         x:Name="Panelcontador">
                <Label Text="Cart"
                       FontSize="30"
                       WidthRequest="100"
                       FontAttributes="Bold"
                       VerticalOptions="Center"
                       TextColor="White" />
                <CollectionView HorizontalOptions="CenterAndExpand"
                                VerticalOptions="Center"
                                ItemsSource="{Binding ListaVistapreviaDc}">
                    <CollectionView.ItemsLayout>
                        <GridItemsLayout Orientation="Horizontal"
                                         Span="1"
                                         HorizontalItemSpacing="10" />
                    </CollectionView.ItemsLayout>
                    <CollectionView.ItemTemplate>
                        <DataTemplate>
                            <Grid Margin="4,0"
                                  WidthRequest="30">
                                <Frame CornerRadius="24"
                                       HorizontalOptions="Center"
                                       VerticalOptions="Center"></Frame>
                                <Image Source="{Binding Imagen}"
                                       Margin="0,6"
                                       WidthRequest="30"
                                       HorizontalOptions="Center"
                                       transicion:Transition.Group="{Binding Idproducto}"
                                       transicion:Transition.Name="producto" />
                            </Grid>
                        </DataTemplate>
                    </CollectionView.ItemTemplate>
                </CollectionView>
                <Frame HeightRequest="40"
                       WidthRequest="60"
                       VerticalOptions="Center"
                       CornerRadius="30"
                       Padding="5"
                       BackgroundColor="#FABC4B">
                    <Label Text="1"
                           VerticalOptions="Center"
                           FontSize="15"
                           FontAttributes="Bold" />
                </Frame>
            </StackLayout>
            <!--#endregion-->
            <Grid.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding command}" />
            </Grid.GestureRecognizers>
        </Grid>
        <!--#region Paneldetallecompra -->
        <StackLayout x:Name="Paneldetallecompra">
            <Label Text="Cart"
                   TextColor="White"
                   FontSize="32"
                   FontAttributes="Bold"
                   Padding="40,28,40,40"
                   HeightRequest="120"
                   WidthRequest="100"/>
            <CollectionView HeightRequest="250"
                            VerticalOptions="Center">
                
            </CollectionView>
            <StackLayout Orientation="Horizontal">
                <Grid>
                    <Frame CornerRadius="24"
                           BackgroundColor="#555555">
                        
                    </Frame>
                    <Image Source="https://i.postimg.cc/1Xk4m0Yy/delivery.png"
                           WidthRequest="26"/>
                </Grid>
            </StackLayout>
        </StackLayout>
        <!--#endregion-->
    </StackLayout>
</ContentPage>
```

> En nuevo **StackLayout** se contrae, se subraya, clic derecho, rodear con, region. Lo mismo con el **StackLayout** del Cart.


## 22. Diseño de total

📂 Vistas    
🔥 `Compras.xaml`    

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView"
             xmlns:transicion ="clr-namespace:Plugin.SharedTransitions;assembly=Plugin.SharedTransitions">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100" IsVisible="false"
              VerticalOptions="FillAndExpand"
              x:Name="gridproductos">
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView>
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="0"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilizquierda">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="22">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                                           HeightRequest="150"
                                           HorizontalOptions="Center"
                                           Margin="0,10"/>
                                    <Label Text="$8.30"
                                           FontAttributes="Bold"
                                           FontSize="22"
                                           Margin="0,10"
                                           TextColor="#333333"/>
                                    <Label Text="Manzana"
                                           FontSize="16"
                                           TextColor="Black"
                                           CharacterSpacing="1"/>
                                    <Label Text="500g"
                                           FontSize="13"
                                           TextColor="#cccccc"
                                           CharacterSpacing="1"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="1"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilderecha">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <!--#region Panelcontador -->
            <StackLayout Grid.Row="1"
                         Orientation="Horizontal"
                         Margin="20,0,10,0"
                         x:Name="Panelcontador">
                <Label Text="Cart"
                       FontSize="30"
                       WidthRequest="100"
                       FontAttributes="Bold"
                       VerticalOptions="Center"
                       TextColor="White" />
                <CollectionView HorizontalOptions="CenterAndExpand"
                                VerticalOptions="Center"
                                ItemsSource="{Binding ListaVistapreviaDc}">
                    <CollectionView.ItemsLayout>
                        <GridItemsLayout Orientation="Horizontal"
                                         Span="1"
                                         HorizontalItemSpacing="10" />
                    </CollectionView.ItemsLayout>
                    <CollectionView.ItemTemplate>
                        <DataTemplate>
                            <Grid Margin="4,0"
                                  WidthRequest="30">
                                <Frame CornerRadius="24"
                                       HorizontalOptions="Center"
                                       VerticalOptions="Center"></Frame>
                                <Image Source="{Binding Imagen}"
                                       Margin="0,6"
                                       WidthRequest="30"
                                       HorizontalOptions="Center"
                                       transicion:Transition.Group="{Binding Idproducto}"
                                       transicion:Transition.Name="producto" />
                            </Grid>
                        </DataTemplate>
                    </CollectionView.ItemTemplate>
                </CollectionView>
                <Frame HeightRequest="40"
                       WidthRequest="60"
                       VerticalOptions="Center"
                       CornerRadius="30"
                       Padding="5"
                       BackgroundColor="#FABC4B">
                    <Label Text="1"
                           VerticalOptions="Center"
                           FontSize="15"
                           FontAttributes="Bold" />
                </Frame>
            </StackLayout>
            <!--#endregion-->
            <Grid.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding command}" />
            </Grid.GestureRecognizers>
        </Grid>
        <!--#region Paneldetallecompra -->
        <StackLayout x:Name="Paneldetallecompra"
                     VerticalOptions="FillAndExpand">
            <Label Text="Cart"
                   TextColor="White"
                   FontSize="32"
                   FontAttributes="Bold"
                   Padding="40,28,40,40"
                   HeightRequest="120"
                   WidthRequest="100"/>
            <CollectionView HeightRequest="300"
                            VerticalOptions="Center">
                
            </CollectionView>
            <StackLayout Orientation="Horizontal"
                         Margin="36,0,32,0">
                <Grid WidthRequest="80">
                    <Frame CornerRadius="24"
                           BackgroundColor="#555555"
                           HorizontalOptions="Center"
                           VerticalOptions="Center">
                        
                    </Frame>
                    <Image Source="https://i.postimg.cc/1Xk4m0Yy/delivery.png"
                           WidthRequest="26"
                           HorizontalOptions="Center"/>
                </Grid>
                <StackLayout Margin="20,0,100,0">
                    <Label Text="Delivery"
                           TextColor="White"
                           />
                    <Label Text="All orders of $40 or more qualify for FREE delivery."
                           TextColor="Gray" />
                </StackLayout>
                <Label Text="$10"
                       TextColor="White"
                       FontAttributes="Bold"
                       WidthRequest="100"/>
            </StackLayout>
            <StackLayout Orientation="Horizontal"
                         Margin="40,50,40,0">
                <Label Text="Total:"
                       TextColor="White"
                       FontSize="30"
                       FontAttributes="Bold"/>
                <Label Text="$37.85"
                       TextColor="White"
                       FontSize="30"
                       FontAttributes="Bold" 
                       HorizontalOptions="EndAndExpand"/>
            </StackLayout>
            <Button Text="Next"
                    BackgroundColor="#DEBB44"
                    CornerRadius="30"
                    Margin="15,0,15,20"
                    VerticalOptions="EndAndExpand"
                    HeightRequest="60"/>
        </StackLayout>
        <!--#endregion-->
    </StackLayout>
</ContentPage>
```


## 23. Reconocedor de gestos  

📂 Vistas    
🔥 `Compras.xaml`    

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView"
             xmlns:transicion ="clr-namespace:Plugin.SharedTransitions;assembly=Plugin.SharedTransitions">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100"
              VerticalOptions="FillAndExpand"
              x:Name="gridproductos">
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView>
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="0"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilizquierda">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="22">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                                           HeightRequest="150"
                                           HorizontalOptions="Center"
                                           Margin="0,10"/>
                                    <Label Text="$8.30"
                                           FontAttributes="Bold"
                                           FontSize="22"
                                           Margin="0,10"
                                           TextColor="#333333"/>
                                    <Label Text="Manzana"
                                           FontSize="16"
                                           TextColor="Black"
                                           CharacterSpacing="1"/>
                                    <Label Text="500g"
                                           FontSize="13"
                                           TextColor="#cccccc"
                                           CharacterSpacing="1"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="1"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilderecha">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <!--#region Panelcontador -->
            <StackLayout Grid.Row="1"
                         Orientation="Horizontal"
                         Margin="20,0,10,0"
                         x:Name="Panelcontador">
                <StackLayout.GestureRecognizers>
                    <SwipeGestureRecognizer Direction="Up"
                                            Swiped="DeslizarPanelcontador"/>
                </StackLayout.GestureRecognizers>
                <Label Text="Cart"
                       FontSize="30"
                       WidthRequest="100"
                       FontAttributes="Bold"
                       VerticalOptions="Center"
                       TextColor="White" />
                <CollectionView HorizontalOptions="CenterAndExpand"
                                VerticalOptions="Center"
                                ItemsSource="{Binding ListaVistapreviaDc}">
                    <CollectionView.ItemsLayout>
                        <GridItemsLayout Orientation="Horizontal"
                                         Span="1"
                                         HorizontalItemSpacing="10" />
                    </CollectionView.ItemsLayout>
                    <CollectionView.ItemTemplate>
                        <DataTemplate>
                            <Grid Margin="4,0"
                                  WidthRequest="30">
                                <Frame CornerRadius="24"
                                       HorizontalOptions="Center"
                                       VerticalOptions="Center"></Frame>
                                <Image Source="{Binding Imagen}"
                                       Margin="0,6"
                                       WidthRequest="30"
                                       HorizontalOptions="Center"
                                       transicion:Transition.Group="{Binding Idproducto}"
                                       transicion:Transition.Name="producto" />
                            </Grid>
                        </DataTemplate>
                    </CollectionView.ItemTemplate>
                </CollectionView>
                <Frame HeightRequest="40"
                       WidthRequest="60"
                       VerticalOptions="Center"
                       CornerRadius="30"
                       Padding="5"
                       BackgroundColor="#FABC4B">
                    <Label Text="1"
                           VerticalOptions="Center"
                           FontSize="15"
                           FontAttributes="Bold" />
                </Frame>
            </StackLayout>
            <!--#endregion-->
            <Grid.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding command}" />
            </Grid.GestureRecognizers>
        </Grid>
        <!--#region Paneldetallecompra -->
        <StackLayout x:Name="Paneldetallecompra"
                     VerticalOptions="FillAndExpand"
                     IsVisible="{Binding IsvisiblePanelDc}">
            <StackLayout.GestureRecognizers>
                <SwipeGestureRecognizer Direction="Down"
                                        Swiped="DeslizarPaneldetallecompra"/>
            </StackLayout.GestureRecognizers>
            <Label Text="Cart"
                   TextColor="White"
                   FontSize="32"
                   FontAttributes="Bold"
                   Padding="40,28,40,40"
                   HeightRequest="120"
                   WidthRequest="100"/>
            <CollectionView HeightRequest="300"
                            VerticalOptions="Center">
                
            </CollectionView>
            <StackLayout Orientation="Horizontal"
                         Margin="36,0,32,0">
                <Grid WidthRequest="80">
                    <Frame CornerRadius="24"
                           BackgroundColor="#555555"
                           HorizontalOptions="Center"
                           VerticalOptions="Center">
                        
                    </Frame>
                    <Image Source="https://i.postimg.cc/1Xk4m0Yy/delivery.png"
                           WidthRequest="26"
                           HorizontalOptions="Center"/>
                </Grid>
                <StackLayout Margin="20,0,100,0">
                    <Label Text="Delivery"
                           TextColor="White"
                           />
                    <Label Text="All orders of $40 or more qualify for FREE delivery."
                           TextColor="Gray" />
                </StackLayout>
                <Label Text="$10"
                       TextColor="White"
                       FontAttributes="Bold"
                       WidthRequest="100"/>
            </StackLayout>
            <StackLayout Orientation="Horizontal"
                         Margin="40,50,40,0">
                <Label Text="Total:"
                       TextColor="White"
                       FontSize="30"
                       FontAttributes="Bold"/>
                <Label Text="$37.85"
                       TextColor="White"
                       FontSize="30"
                       FontAttributes="Bold" 
                       HorizontalOptions="EndAndExpand"/>
            </StackLayout>
            <Button Text="Next"
                    BackgroundColor="#DEBB44"
                    CornerRadius="30"
                    Margin="15,0,15,20"
                    VerticalOptions="EndAndExpand"
                    HeightRequest="60"/>
        </StackLayout>
        <!--#endregion-->
    </StackLayout>
</ContentPage>
```

Al usar etiqueta Swiped debemos dar clic a **Nuevo controlador de eventos.** Luego podemos reemplazar el nombre tanto en `Compras.xaml` como en `Compras.xaml.cs`

🔥 `Compras.xaml.cs`    

```cs
using Appcompras.VistaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Appcompras.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Compras : ContentPage
    {
        VMcompras vm;

        public Compras()
        {
            InitializeComponent();
            vm = new VMcompras(Navigation, Carrilderecha, Carrilizquierda);
            BindingContext = vm;

            this.Appearing += Compras_Appearing; //+=Tabulador
        }

        private async void Compras_Appearing(object sender, EventArgs e)
        {
            await vm.MostrarVistapreviaDc();
        }

        private void DeslizarPanelcontador(object sender, SwipedEventArgs e)
        {

        }

        private void DeslizarPaneldetallecompra(object sender, SwipedEventArgs e)
        {

        }
    }
}
```

📂 VistaModelo    
🔥 `VMcompras.cs`    

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using Appcompras.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;
using Plugin.SharedTransitions;

namespace Appcompras.VistaModelo
{
    public class VMcompras : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        int _index;

        List<Mproductos> _listaproductos;
        List<Mdetallecompras> _listaVistapreviaDc;

        bool _IsvisiblePaneldetallecompra;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            Navigation = navigation;
            Mostrarproductos(Carrilderecha, Carrilizquierda);
            IsvisiblePanelDc = false;
        }
        #endregion

        #region OBJETOS
        public bool IsvisiblePanelDc
        {
            get { return _IsvisiblePaneldetallecompra; }
            set { SetValue(ref _IsvisiblePaneldetallecompra, value); }
        }

        public List<Mdetallecompras> ListaVistapreviaDc
        {
            get { return _listaVistapreviaDc; }
            set { SetValue(ref _listaVistapreviaDc, value); }
        }

        public List<Mproductos> Listaproductos
        {
            get { return _listaproductos; }
            set { SetValue(ref _listaproductos, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Mostrarproductos(StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var funcion = new Dproductos();
            Listaproductos = await funcion.Mostrarproductos();

            var box = new BoxView
            {
                HeightRequest = 60
            };

            Carrilderecha.Children.Clear();
            Carrilizquierda.Children.Clear();

            Carrilderecha.Children.Add(box);
            
            foreach(var item in Listaproductos)
            {
                Dibujarproductos(item, _index, Carrilderecha, Carrilizquierda);
                _index++;
            }
        }

        public void Dibujarproductos(Mproductos item, int index, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var _ubicacion = Convert.ToBoolean(index % 2);
            var carril = _ubicacion ? Carrilderecha : Carrilizquierda;

            var frame = new Frame
            {
                HeightRequest = 300,
                CornerRadius = 10,
                Margin = 8,
                HasShadow = false,
                BackgroundColor = Color.White,
                Padding = 22,
            };

            var stack = new StackLayout
            {

            };

            var image = new Image
            {
                Source = item.Icono,
                HeightRequest = 150,
                HorizontalOptions = LayoutOptions.Center,
                Margin = new Thickness(0, 10),
            };

            var labelprecio = new Label
            {
                Text = "$" + item.Precio,
                FontAttributes = FontAttributes.Bold,
                FontSize = 22,
                Margin = new Thickness(0, 10),
                TextColor = Color.FromHex("#333333")
            };

            var labeldescripcion = new Label
            {
                Text = item.Descripcion,
                FontSize = 16,
                TextColor = Color.Black,
                CharacterSpacing = 1
            };

            var labelpeso = new Label
            {
                Text = item.Peso,
                FontSize = 13,
                TextColor = Color.FromHex("#cccccc"),
                CharacterSpacing = 1
            };

            stack.Children.Add(image);
            stack.Children.Add(labelprecio);
            stack.Children.Add(labeldescripcion);
            stack.Children.Add(labelpeso);

            frame.Content = stack;

            var tap = new TapGestureRecognizer();
            tap.Tapped += async (object sender, EventArgs e) =>
            {
                var page = (App.Current.MainPage as SharedTransitionNavigationPage).CurrentPage;
                SharedTransitionNavigationPage.SetBackgroundAnimation(page, BackgroundAnimation.SlideFromRight);
                SharedTransitionNavigationPage.SetTransitionDuration(page, 1000);
                SharedTransitionNavigationPage.SetTransitionSelectedGroup(page, item.Idproducto);
                await Navigation.PushAsync(new Agregarcompra(item));
            };

            carril.Children.Add(frame);
            stack.GestureRecognizers.Add(tap);
        }

        public async Task ProcesoAsyncrono()
        {

        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void ProcesoSimple()
        {

        }

        public async Task MostrarVistapreviaDc()
        {
            var funcion = new Ddetallecompras();
            ListaVistapreviaDc = await funcion.MostrarVistapreviaDc();
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


## 24. Desplazamientos

📂 VistaModelo     
🔥 `VMcompras.cs`     

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using Appcompras.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;
using Plugin.SharedTransitions;

namespace Appcompras.VistaModelo
{
    public class VMcompras : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        int _index;

        List<Mproductos> _listaproductos;
        List<Mdetallecompras> _listaVistapreviaDc;

        bool _IsvisiblePaneldetallecompra;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            Navigation = navigation;
            Mostrarproductos(Carrilderecha, Carrilizquierda);
            IsvisiblePanelDc = false;
        }
        #endregion

        #region OBJETOS
        public bool IsvisiblePanelDc
        {
            get { return _IsvisiblePaneldetallecompra; }
            set { SetValue(ref _IsvisiblePaneldetallecompra, value); }
        }

        public List<Mdetallecompras> ListaVistapreviaDc
        {
            get { return _listaVistapreviaDc; }
            set { SetValue(ref _listaVistapreviaDc, value); }
        }

        public List<Mproductos> Listaproductos
        {
            get { return _listaproductos; }
            set { SetValue(ref _listaproductos, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Mostrarproductos(StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var funcion = new Dproductos();
            Listaproductos = await funcion.Mostrarproductos();

            var box = new BoxView
            {
                HeightRequest = 60
            };

            Carrilderecha.Children.Clear();
            Carrilizquierda.Children.Clear();

            Carrilderecha.Children.Add(box);
            
            foreach(var item in Listaproductos)
            {
                Dibujarproductos(item, _index, Carrilderecha, Carrilizquierda);
                _index++;
            }
        }

        public void Dibujarproductos(Mproductos item, int index, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var _ubicacion = Convert.ToBoolean(index % 2);
            var carril = _ubicacion ? Carrilderecha : Carrilizquierda;

            var frame = new Frame
            {
                HeightRequest = 300,
                CornerRadius = 10,
                Margin = 8,
                HasShadow = false,
                BackgroundColor = Color.White,
                Padding = 22,
            };

            var stack = new StackLayout
            {

            };

            var image = new Image
            {
                Source = item.Icono,
                HeightRequest = 150,
                HorizontalOptions = LayoutOptions.Center,
                Margin = new Thickness(0, 10),
            };

            var labelprecio = new Label
            {
                Text = "$" + item.Precio,
                FontAttributes = FontAttributes.Bold,
                FontSize = 22,
                Margin = new Thickness(0, 10),
                TextColor = Color.FromHex("#333333")
            };

            var labeldescripcion = new Label
            {
                Text = item.Descripcion,
                FontSize = 16,
                TextColor = Color.Black,
                CharacterSpacing = 1
            };

            var labelpeso = new Label
            {
                Text = item.Peso,
                FontSize = 13,
                TextColor = Color.FromHex("#cccccc"),
                CharacterSpacing = 1
            };

            stack.Children.Add(image);
            stack.Children.Add(labelprecio);
            stack.Children.Add(labeldescripcion);
            stack.Children.Add(labelpeso);

            frame.Content = stack;

            var tap = new TapGestureRecognizer();
            tap.Tapped += async (object sender, EventArgs e) =>
            {
                var page = (App.Current.MainPage as SharedTransitionNavigationPage).CurrentPage;
                SharedTransitionNavigationPage.SetBackgroundAnimation(page, BackgroundAnimation.SlideFromRight);
                SharedTransitionNavigationPage.SetTransitionDuration(page, 1000);
                SharedTransitionNavigationPage.SetTransitionSelectedGroup(page, item.Idproducto);
                await Navigation.PushAsync(new Agregarcompra(item));
            };

            carril.Children.Add(frame);
            stack.GestureRecognizers.Add(tap);
        }

        public async Task ProcesoAsyncrono()
        {

        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void ProcesoSimple()
        {

        }

        public async Task MostrarVistapreviaDc()
        {
            var funcion = new Ddetallecompras();
            ListaVistapreviaDc = await funcion.MostrarVistapreviaDc();
        }

        public async Task MostrarpanelDC(Grid gridproductos, StackLayout paneldetalleC, StackLayout panelcontador)
        {
            await Task.WhenAll(
                panelcontador.FadeTo(0, 500),
                gridproductos.TranslateTo(0, 200, 500, Easing.CubicIn),
                paneldetalleC.TranslateTo(0, 200, 500, Easing.CubicIn)
                );
            IsvisiblePanelDc = true;
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

📂 Vistas        
🔥 `Compras.xaml.cs`   

```cs
using Appcompras.VistaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Appcompras.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Compras : ContentPage
    {
        VMcompras vm;

        public Compras()
        {
            InitializeComponent();
            vm = new VMcompras(Navigation, Carrilderecha, Carrilizquierda);
            BindingContext = vm;

            this.Appearing += Compras_Appearing; //+=Tabulador
        }

        private async void Compras_Appearing(object sender, EventArgs e)
        {
            await vm.MostrarVistapreviaDc();
        }

        private async void DeslizarPanelcontador(object sender, SwipedEventArgs e)
        {
            await vm.MostrarpanelDC(gridproductos, Paneldetallecompra, Panelcontador);
        }

        private async void DeslizarPaneldetallecompra(object sender, SwipedEventArgs e)
        {

        }
    }
}
```


## 25. Mostrar detalle compra

📂 VistaModelo     
🔥 `VMcompras.cs`     

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using Appcompras.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;
using Plugin.SharedTransitions;

namespace Appcompras.VistaModelo
{
    public class VMcompras : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        int _index;

        List<Mproductos> _listaproductos;
        List<Mdetallecompras> _listaVistapreviaDc;
        List<Mdetallecompras> _listaDc;

        bool _IsvisiblePaneldetallecompra;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            Navigation = navigation;
            Mostrarproductos(Carrilderecha, Carrilizquierda);
            IsvisiblePanelDc = false;
        }
        #endregion

        #region OBJETOS
        public bool IsvisiblePanelDc
        {
            get { return _IsvisiblePaneldetallecompra; }
            set { SetValue(ref _IsvisiblePaneldetallecompra, value); }
        }

        public List<Mdetallecompras> ListaVistapreviaDc
        {
            get { return _listaVistapreviaDc; }
            set { SetValue(ref _listaVistapreviaDc, value); }
        }

        public List<Mdetallecompras> ListaDc
        {
            get { return _listaDc; }
            set { SetValue(ref _listaDc, value); }
        }

        public List<Mproductos> Listaproductos
        {
            get { return _listaproductos; }
            set { SetValue(ref _listaproductos, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Mostrarproductos(StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var funcion = new Dproductos();
            Listaproductos = await funcion.Mostrarproductos();

            var box = new BoxView
            {
                HeightRequest = 60
            };

            Carrilderecha.Children.Clear();
            Carrilizquierda.Children.Clear();

            Carrilderecha.Children.Add(box);
            
            foreach(var item in Listaproductos)
            {
                Dibujarproductos(item, _index, Carrilderecha, Carrilizquierda);
                _index++;
            }
        }

        public void Dibujarproductos(Mproductos item, int index, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var _ubicacion = Convert.ToBoolean(index % 2);
            var carril = _ubicacion ? Carrilderecha : Carrilizquierda;

            var frame = new Frame
            {
                HeightRequest = 300,
                CornerRadius = 10,
                Margin = 8,
                HasShadow = false,
                BackgroundColor = Color.White,
                Padding = 22,
            };

            var stack = new StackLayout
            {

            };

            var image = new Image
            {
                Source = item.Icono,
                HeightRequest = 150,
                HorizontalOptions = LayoutOptions.Center,
                Margin = new Thickness(0, 10),
            };

            var labelprecio = new Label
            {
                Text = "$" + item.Precio,
                FontAttributes = FontAttributes.Bold,
                FontSize = 22,
                Margin = new Thickness(0, 10),
                TextColor = Color.FromHex("#333333")
            };

            var labeldescripcion = new Label
            {
                Text = item.Descripcion,
                FontSize = 16,
                TextColor = Color.Black,
                CharacterSpacing = 1
            };

            var labelpeso = new Label
            {
                Text = item.Peso,
                FontSize = 13,
                TextColor = Color.FromHex("#cccccc"),
                CharacterSpacing = 1
            };

            stack.Children.Add(image);
            stack.Children.Add(labelprecio);
            stack.Children.Add(labeldescripcion);
            stack.Children.Add(labelpeso);

            frame.Content = stack;

            var tap = new TapGestureRecognizer();
            tap.Tapped += async (object sender, EventArgs e) =>
            {
                var page = (App.Current.MainPage as SharedTransitionNavigationPage).CurrentPage;
                SharedTransitionNavigationPage.SetBackgroundAnimation(page, BackgroundAnimation.SlideFromRight);
                SharedTransitionNavigationPage.SetTransitionDuration(page, 1000);
                SharedTransitionNavigationPage.SetTransitionSelectedGroup(page, item.Idproducto);
                await Navigation.PushAsync(new Agregarcompra(item));
            };

            carril.Children.Add(frame);
            stack.GestureRecognizers.Add(tap);
        }

        public async Task ProcesoAsyncrono()
        {

        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void ProcesoSimple()
        {

        }

        public async Task MostrarVistapreviaDc()
        {
            var funcion = new Ddetallecompras();
            ListaVistapreviaDc = await funcion.MostrarVistapreviaDc();
        }

        public async Task MostrarpanelDC(Grid gridproductos, StackLayout paneldetalleC, StackLayout panelcontador)
        {
            uint duracion = 700;
            await Task.WhenAll(
                panelcontador.FadeTo(0, 500),
                gridproductos.TranslateTo(0, -200, duracion+200, Easing.CubicIn),
                paneldetalleC.TranslateTo(0, -300, duracion, Easing.CubicIn)
                );
            IsvisiblePanelDc = true;
        }

        public async Task MostrargridProductos(Grid gridproductos, StackLayout paneldetalleC, StackLayout panelcontador)
        {
            uint duracion = 700;
            await Task.WhenAll(
                panelcontador.FadeTo(1, 500),
                gridproductos.TranslateTo(0, 0, duracion + 200, Easing.CubicIn),
                paneldetalleC.TranslateTo(0, 1000, duracion, Easing.CubicIn)
                );
            IsvisiblePanelDc = false;
        }

        public async Task MostrarDetalleC()
        {
            var funcion = new Ddetallecompras();
            ListaDc = await funcion.MostrarDc();
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

📂 Vistas     
🔥 `Compras.xaml.cs`     

```cs
using Appcompras.VistaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Appcompras.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Compras : ContentPage
    {
        VMcompras vm;

        public Compras()
        {
            InitializeComponent();
            vm = new VMcompras(Navigation, Carrilderecha, Carrilizquierda);
            BindingContext = vm;

            this.Appearing += Compras_Appearing; //+=Tabulador
        }

        private async void Compras_Appearing(object sender, EventArgs e)
        {
            await vm.MostrarVistapreviaDc();
        }

        private async void DeslizarPanelcontador(object sender, SwipedEventArgs e)
        {
            await vm.MostrarpanelDC(gridproductos, Paneldetallecompra, Panelcontador);
        }

        private async void DeslizarPaneldetallecompra(object sender, SwipedEventArgs e)
        {
            await vm.MostrargridProductos(gridproductos, Paneldetallecompra, Panelcontador);
        }
    }
}
```

📂 Datos     
🔥 `Ddetallecompras.cs`     

```cs
using System;
using System.Collections.Generic;
using System.Text;
using Firebase.Database.Query;
using System.Linq;
using Firebase.Database;
using System.Threading.Tasks;
using Appcompras.Modelo;
using Appcompras.Conexiones;

namespace Appcompras.Datos
{
    public class Ddetallecompras
    {
        public async Task InsertarDc(Mdetallecompras parametros)
        {
            await Cconexion.firebase
                .Child("Detallecompra")
                .PostAsync(new Mdetallecompras()
                {
                    Cantidad = parametros.Cantidad,
                    Idproducto = parametros.Idproducto,
                    Preciocompra = parametros.Preciocompra,
                    Total = parametros.Total
                });
        }

        public async Task<List<Mdetallecompras>> MostrarVistapreviaDc()
        {
            var ListaDc = new List<Mdetallecompras>();
            var parametrosProductos = new Mproductos();
            var funcionproductos = new Dproductos();

            var data = (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>())
                .Where(a => a.Key != "Modelo")
                .Select(item=> new Mdetallecompras
                {
                    Idproducto = item.Object.Idproducto,
                    Iddetallecompra = item.Key
                })
                ;

            foreach(var hobit in data)
            {
                var parametros = new Mdetallecompras();
                parametros.Idproducto = hobit.Idproducto;
                parametrosProductos.Idproducto = hobit.Idproducto;
                var listaproductos = await funcionproductos.MostrarproductosXid(parametrosProductos);

                parametros.Imagen = listaproductos[0].Icono;
                ListaDc.Add(parametros);
            }

            return ListaDc;
        }

        public async Task<List<Mdetallecompras>> MostrarDc()
        {
            var ListaDc = new List<Mdetallecompras>();
            var parametrosProductos = new Mproductos();
            var funcionproductos = new Dproductos();

            var data = (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>())
                .Where(a => a.Key != "Modelo")
                .Select(item => new Mdetallecompras
                {
                    Idproducto = item.Object.Idproducto,
                    Iddetallecompra = item.Key
                })
                ;

            foreach (var hobit in data)
            {
                var parametros = new Mdetallecompras();
                parametros.Idproducto = hobit.Idproducto;
                parametrosProductos.Idproducto = hobit.Idproducto;
                var listaproductos = await funcionproductos.MostrarproductosXid(parametrosProductos);

                parametros.Imagen = listaproductos[0].Icono;
                parametros.Cantidad = hobit.Cantidad;
                parametros.Total = hobit.Total;
                ListaDc.Add(parametros);
            }

            return ListaDc;
        }
    }
}
```


## 26. Enlazar detalle compras

📂 Datos          
🔥 `Ddetallecompras.cs`  
Dentro del foreach var parametros = `Mdetallecompras();` Clic derecho, ir a definición. 

```cs
using System;
using System.Collections.Generic;
using System.Text;
using Firebase.Database.Query;
using System.Linq;
using Firebase.Database;
using System.Threading.Tasks;
using Appcompras.Modelo;
using Appcompras.Conexiones;

namespace Appcompras.Datos
{
    public class Ddetallecompras
    {
        public async Task InsertarDc(Mdetallecompras parametros)
        {
            await Cconexion.firebase
                .Child("Detallecompra")
                .PostAsync(new Mdetallecompras()
                {
                    Cantidad = parametros.Cantidad,
                    Idproducto = parametros.Idproducto,
                    Preciocompra = parametros.Preciocompra,
                    Total = parametros.Total
                });
        }

        public async Task<List<Mdetallecompras>> MostrarVistapreviaDc()
        {
            var ListaDc = new List<Mdetallecompras>();
            var parametrosProductos = new Mproductos();
            var funcionproductos = new Dproductos();

            var data = (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>())
                .Where(a => a.Key != "Modelo")
                .Select(item=> new Mdetallecompras
                {
                    Idproducto = item.Object.Idproducto,
                    Iddetallecompra = item.Key
                })
                ;

            foreach(var hobit in data)
            {
                var parametros = new Mdetallecompras();
                parametros.Idproducto = hobit.Idproducto;
                parametrosProductos.Idproducto = hobit.Idproducto;
                var listaproductos = await funcionproductos.MostrarproductosXid(parametrosProductos);

                parametros.Imagen = listaproductos[0].Icono;
                ListaDc.Add(parametros);
            }

            return ListaDc;
        }

        public async Task<List<Mdetallecompras>> MostrarDc()
        {
            var ListaDc = new List<Mdetallecompras>();
            var parametrosProductos = new Mproductos();
            var funcionproductos = new Dproductos();

            var data = (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>())
                .Where(a => a.Key != "Modelo")
                .Select(item => new Mdetallecompras
                {
                    Idproducto = item.Object.Idproducto,
                    Iddetallecompra = item.Key,
                    Cantidad = item.Object.Cantidad,
                    Total = item.Object.Total
                })
                ;

            foreach (var hobit in data)
            {
                var parametros = new Mdetallecompras();
                parametros.Idproducto = hobit.Idproducto;
                parametrosProductos.Idproducto = hobit.Idproducto;
                var listaproductos = await funcionproductos.MostrarproductosXid(parametrosProductos);

                parametros.Descripcion = listaproductos[0].Descripcion;
                parametros.Imagen = listaproductos[0].Icono;
                parametros.Cantidad = hobit.Cantidad;
                parametros.Total = hobit.Total;
                ListaDc.Add(parametros);
            }

            return ListaDc;
        }
    }
}
```

📂 Modelo              
🔥 `Mdetallecompras.cs`  

```cs
using System;
using System.Collections.Generic;
using System.Text;

namespace Appcompras.Modelo
{
    public class Mdetallecompras
    {
        public string Cantidad { get; set; }
        public string Preciocompra { get; set; }
        public string Idproducto { get; set; }
        public string Total { get; set; }
        public string Iddetallecompra { get; set; }

        //
        public string Imagen { get; set; }
        public string Descripcion { get; set; }
    }
}
```

📂 Vistas     
🔥 `Compras.xaml`     

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView"
             xmlns:transicion ="clr-namespace:Plugin.SharedTransitions;assembly=Plugin.SharedTransitions">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100"
              VerticalOptions="FillAndExpand"
              x:Name="gridproductos">
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView>
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="0"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilizquierda">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="22">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                                           HeightRequest="150"
                                           HorizontalOptions="Center"
                                           Margin="0,10"/>
                                    <Label Text="$8.30"
                                           FontAttributes="Bold"
                                           FontSize="22"
                                           Margin="0,10"
                                           TextColor="#333333"/>
                                    <Label Text="Manzana"
                                           FontSize="16"
                                           TextColor="Black"
                                           CharacterSpacing="1"/>
                                    <Label Text="500g"
                                           FontSize="13"
                                           TextColor="#cccccc"
                                           CharacterSpacing="1"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="1"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilderecha">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <!--#region Panelcontador -->
            <StackLayout Grid.Row="1"
                         Orientation="Horizontal"
                         Margin="20,0,10,0"
                         x:Name="Panelcontador">
                <StackLayout.GestureRecognizers>
                    <SwipeGestureRecognizer Direction="Up"
                                            Swiped="DeslizarPanelcontador"/>
                </StackLayout.GestureRecognizers>
                <Label Text="Cart"
                       FontSize="30"
                       WidthRequest="100"
                       FontAttributes="Bold"
                       VerticalOptions="Center"
                       TextColor="White" />
                <CollectionView HorizontalOptions="CenterAndExpand"
                                VerticalOptions="Center"
                                ItemsSource="{Binding ListaVistapreviaDc}">
                    <CollectionView.ItemsLayout>
                        <GridItemsLayout Orientation="Horizontal"
                                         Span="1"
                                         HorizontalItemSpacing="10" />
                    </CollectionView.ItemsLayout>
                    <CollectionView.ItemTemplate>
                        <DataTemplate>
                            <Grid Margin="4,0"
                                  WidthRequest="30">
                                <Frame CornerRadius="24"
                                       HorizontalOptions="Center"
                                       VerticalOptions="Center"></Frame>
                                <Image Source="{Binding Imagen}"
                                       Margin="0,6"
                                       WidthRequest="30"
                                       HorizontalOptions="Center"
                                       transicion:Transition.Group="{Binding Idproducto}"
                                       transicion:Transition.Name="producto" />
                            </Grid>
                        </DataTemplate>
                    </CollectionView.ItemTemplate>
                </CollectionView>
                <Frame HeightRequest="40"
                       WidthRequest="60"
                       VerticalOptions="Center"
                       CornerRadius="30"
                       Padding="5"
                       BackgroundColor="#FABC4B">
                    <Label Text="1"
                           VerticalOptions="Center"
                           FontSize="15"
                           FontAttributes="Bold" />
                </Frame>
            </StackLayout>
            <!--#endregion-->
            <Grid.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding command}" />
            </Grid.GestureRecognizers>
        </Grid>
        <!--#region Paneldetallecompra -->
        <StackLayout x:Name="Paneldetallecompra"
                     VerticalOptions="FillAndExpand"                     
                     IsVisible="{Binding IsvisiblePanelDc}">
            <StackLayout.GestureRecognizers>
                <SwipeGestureRecognizer Direction="Down"
                                        Swiped="DeslizarPaneldetallecompra"/>
            </StackLayout.GestureRecognizers>
            <Label Text="Cart"
                   TextColor="White"
                   FontSize="32"
                   FontAttributes="Bold"
                   Padding="40,28,40,40"
                   HeightRequest="120"
                   WidthRequest="100"/>
            <CollectionView HeightRequest="300"
                            VerticalOptions="Center"
                            ItemsSource="{Binding ListaDc}">
                <CollectionView.ItemTemplate>
                    <DataTemplate>
                        <StackLayout Margin="0, 12"
                                     Orientation="Horizontal"
                                     Spacing="10">
                            <Grid WidthRequest="62"
                                  Margin="10,0">
                                <Frame BackgroundColor="White"
                                       CornerRadius="24"
                                       HorizontalOptions="Center"
                                       VerticalOptions="Center">
                                    
                                </Frame>
                                <Image Source="{Binding Imagen}"
                                       WidthRequest="20"
                                       Margin="0,10"
                                       HorizontalOptions="Center"/>
                            </Grid>
                            <Label Text="{Binding Cantidad}"
                                   TextColor="White"
                                   VerticalOptions="Center"/>
                            <Label Text="x"
                                   TextColor="White"
                                   VerticalOptions="Center" />
                            <Label Text="{Binding Descripcion}"
                                   TextColor="White"
                                   VerticalOptions="Center" />
                            <Label Text="{Binding Total}"
                                   TextColor="White"
                                   VerticalOptions="Center" 
                                   HorizontalOptions="EndAndExpand"
                                   Margin="10,0"/>
                        </StackLayout>
                    </DataTemplate>
                </CollectionView.ItemTemplate>
            </CollectionView>
            <StackLayout Orientation="Horizontal"
                         Margin="36,0,32,0">
                <Grid WidthRequest="80">
                    <Frame CornerRadius="24"
                           BackgroundColor="#555555"
                           HorizontalOptions="Center"
                           VerticalOptions="Center">
                        
                    </Frame>
                    <Image Source="https://i.postimg.cc/1Xk4m0Yy/delivery.png"
                           WidthRequest="26"
                           HorizontalOptions="Center"/>
                </Grid>
                <StackLayout Margin="20,0,100,0">
                    <Label Text="Delivery"
                           TextColor="White"
                           />
                    <Label Text="All orders of $40 or more qualify for FREE delivery."
                           TextColor="Gray" />
                </StackLayout>
                <Label Text="$10"
                       TextColor="White"
                       FontAttributes="Bold"
                       WidthRequest="100"/>
            </StackLayout>
            <StackLayout Orientation="Horizontal"
                         Margin="40,50,40,0">
                <Label Text="Total:"
                       TextColor="White"
                       FontSize="30"
                       FontAttributes="Bold"/>
                <Label Text="$37.85"
                       TextColor="White"
                       FontSize="30"
                       FontAttributes="Bold" 
                       HorizontalOptions="EndAndExpand"/>
            </StackLayout>
            <Button Text="Next"
                    BackgroundColor="#DEBB44"
                    CornerRadius="30"
                    Margin="15,0,15,20"
                    VerticalOptions="EndAndExpand"
                    HeightRequest="60"/>
        </StackLayout>
        <!--#endregion-->
    </StackLayout>
</ContentPage>
```

🔥 `Compras.xaml.cs`    

```cs
using Appcompras.VistaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Appcompras.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Compras : ContentPage
    {
        VMcompras vm;

        public Compras()
        {
            InitializeComponent();
            vm = new VMcompras(Navigation, Carrilderecha, Carrilizquierda);
            BindingContext = vm;

            this.Appearing += Compras_Appearing; //+=Tabulador
        }

        private async void Compras_Appearing(object sender, EventArgs e)
        {
            await vm.MostrarVistapreviaDc();
            await vm.MostrarDetalleC();
        }

        private async void DeslizarPanelcontador(object sender, SwipedEventArgs e)
        {
            await vm.MostrarpanelDC(gridproductos, Paneldetallecompra, Panelcontador);
        }

        private async void DeslizarPaneldetallecompra(object sender, SwipedEventArgs e)
        {
            await vm.MostrargridProductos(gridproductos, Paneldetallecompra, Panelcontador);
        }
    }
}
```


## 27. Editar detallecompra

📂 VistaModelo     
🔥 `VMagregarcompra.cs`     

```cs
//Revisar siguiente clase
```

📂 Datos     
🔥 `Ddetallecompras.cs`     

```cs
using System;
using System.Collections.Generic;
using System.Text;
using Firebase.Database.Query;
using System.Linq;
using Firebase.Database;
using System.Threading.Tasks;
using Appcompras.Modelo;
using Appcompras.Conexiones;

namespace Appcompras.Datos
{
    public class Ddetallecompras
    {
        public async Task InsertarDc(Mdetallecompras parametros)
        {
            await Cconexion.firebase
                .Child("Detallecompra")
                .PostAsync(new Mdetallecompras()
                {
                    Cantidad = parametros.Cantidad,
                    Idproducto = parametros.Idproducto,
                    Preciocompra = parametros.Preciocompra,
                    Total = parametros.Total
                });
        }

        public async Task<List<Mdetallecompras>> MostrarVistapreviaDc()
        {
            var ListaDc = new List<Mdetallecompras>();
            var parametrosProductos = new Mproductos();
            var funcionproductos = new Dproductos();

            var data = (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>())
                .Where(a => a.Key != "Modelo")
                .Select(item=> new Mdetallecompras
                {
                    Idproducto = item.Object.Idproducto,
                    Iddetallecompra = item.Key
                })
                ;

            foreach(var hobit in data)
            {
                var parametros = new Mdetallecompras();
                parametros.Idproducto = hobit.Idproducto;
                parametrosProductos.Idproducto = hobit.Idproducto;
                var listaproductos = await funcionproductos.MostrarproductosXid(parametrosProductos);

                parametros.Imagen = listaproductos[0].Icono;
                ListaDc.Add(parametros);
            }

            return ListaDc;
        }

        public async Task<List<Mdetallecompras>> MostrarDc()
        {
            var ListaDc = new List<Mdetallecompras>();
            var parametrosProductos = new Mproductos();
            var funcionproductos = new Dproductos();

            var data = (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>())
                .Where(a => a.Key != "Modelo")
                .Select(item => new Mdetallecompras
                {
                    Idproducto = item.Object.Idproducto,
                    Iddetallecompra = item.Key,
                    Cantidad = item.Object.Cantidad,
                    Total = item.Object.Total
                })
                ;

            foreach (var hobit in data)
            {
                var parametros = new Mdetallecompras();
                parametros.Idproducto = hobit.Idproducto;
                parametrosProductos.Idproducto = hobit.Idproducto;
                var listaproductos = await funcionproductos.MostrarproductosXid(parametrosProductos);

                parametros.Descripcion = listaproductos[0].Descripcion;
                parametros.Imagen = listaproductos[0].Icono;
                parametros.Cantidad = hobit.Cantidad;
                parametros.Total = hobit.Total;
                ListaDc.Add(parametros);
            }

            return ListaDc;
        }

        public async Task <List<Mdetallecompras>> MostrarDcXidproducto(string idproducto)
        {
            return (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>()
                ).Where(a=> a.Object.Idproducto==idproducto).Select(item => new Mdetallecompras
                {
                    Total = item.Object.Total,
                }
                ).ToList();
        }

        public async Task Editardetalle(Mdetallecompras parametros)
        {
            var data = (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>())
                .Where(a => a.Object.Idproducto == parametros.Idproducto)
                .FirstOrDefault();
            double cantidadInicial = Convert.ToDouble(data.Object.Cantidad);
            data.Object.Cantidad = (cantidadInicial + Convert.ToDouble(parametros.Cantidad)).ToString();

            double cantidad = Convert.ToDouble(data.Object.Cantidad);
            double preciocompra = Convert.ToDouble(parametros.Preciocompra);
            double total = 0;
            total = cantidad * preciocompra;
            data.Object.Total = total.ToString();

            await Cconexion.firebase
                .Child("Detallecompra")
                .Child(data.Key)
                .PutAsync(data.Object);
        }
    }
}
```


## 28. Código fuente final

Ingresamos a la [BD de Firebase](https://appcompras-518fb-default-rtdb.firebaseio.com/) y eliminamos los productos ingresados anteriormente, menos el Modelo. 
- Detallecompra
	- Mtdaofkljflkasfs
	- Mflajfklsjflksjflks


📂 VistaModelo     
🔥 `VMagregarcompra.cs`     

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Appcompras.VistaModelo
{
    public class VMagregarcompra:BaseViewModel
    {
        #region VARIABLES
        int _Cantidad;
        String _Preciotexto;

        public Mproductos Parametrosrecibe { get; set; }
        #endregion

        #region CONSTRUCTOR
        public VMagregarcompra(INavigation navigation, Mproductos parametrosTrae)
        {
            Navigation = navigation;
            Parametrosrecibe = parametrosTrae;
            Preciotexto = "$" + Parametrosrecibe.Precio;
        }
        #endregion

        #region OBJETOS
        public string Preciotexto
        {
            get { return _Preciotexto; }
            set { SetValue(ref _Preciotexto, value); }
        }

        public int Cantidad
        {
            get { return _Cantidad; }
            set { SetValue(ref _Cantidad, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Validarcompra()
        {
            var funcion = new Ddetallecompras();
            var listaXidproducto = await funcion.MostrarDcXidproducto(Parametrosrecibe.Idproducto);

            if(listaXidproducto.Count > 0)
            {
                await Editardc();
            }
            else
            {
                await InsertarDc();
            }
        }

        public async Task Editardc()
        {
            if(Cantidad < 1)
            {
                Cantidad = 1;
            }

            var funcion = new Ddetallecompras();
            var parametros = new Mdetallecompras();
            parametros.Cantidad = Cantidad.ToString();
            parametros.Idproducto = Parametrosrecibe.Idproducto;
            parametros.Preciocompra = Parametrosrecibe.Precio;

            await funcion.Editardetalle(parametros);
            await Volver();
        }

        public async Task InsertarDc()
        {
            if (Cantidad == 0)
            {
                Cantidad = 1;
            }
            var funcion = new Ddetallecompras();
            var parametros = new Mdetallecompras();
            parametros.Cantidad = Cantidad.ToString();
            parametros.Idproducto = Parametrosrecibe.Idproducto;
            parametros.Preciocompra = Parametrosrecibe.Precio;
            double total = 0;
            double preciocompra = Convert.ToDouble(Parametrosrecibe.Precio);
            double cantidad = Convert.ToDouble(Cantidad);
            total = cantidad * preciocompra;
            parametros.Total = total.ToString();

            await funcion.InsertarDc(parametros);
            await Volver();
        }

        public async Task Volver()
        {
            await Navigation.PopAsync();
        }

        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void Aumentar()
        {
                Cantidad++;
        }

        public void Disminuir()
        {
            if (Cantidad > 0)
            {
                Cantidad--;
            }
        }
        #endregion

        #region COMANDOS
        //Llamar al Proceso Asincrona: await es para tareas asincronas
        public ICommand Volvercommand => new Command(async () => await Volver());
        //Llamar al Proceso Simple o no Asincrono
        public ICommand Aumentarcommand => new Command(Aumentar);
        public ICommand Disminuircommand => new Command(Disminuir);
        public ICommand Insertarcommand => new Command(async () => await Validarcompra());
        #endregion
    }
}
```

🔥 `VMcompras.cs`     

```cs
using Appcompras.Datos;
using Appcompras.Modelo;
using Appcompras.Vistas;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;
using Plugin.SharedTransitions;

namespace Appcompras.VistaModelo
{
    public class VMcompras : BaseViewModel
    {
        #region VARIABLES
        string _Texto;
        int _index;

        List<Mproductos> _listaproductos;
        List<Mdetallecompras> _listaVistapreviaDc;
        List<Mdetallecompras> _listaDc;

        bool _IsvisiblePaneldetallecompra;
        string _cantidadtotal;
        #endregion

        #region CONSTRUCTOR
        public VMcompras(INavigation navigation, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            Navigation = navigation;
            Mostrarproductos(Carrilderecha, Carrilizquierda);
            IsvisiblePanelDc = false;
        }
        #endregion

        #region OBJETOS
        public string Cantidadtotal
        {
            get { return _cantidadtotal; }
            set { SetValue(ref _cantidadtotal, value); }
        }

        public bool IsvisiblePanelDc
        {
            get { return _IsvisiblePaneldetallecompra; }
            set { SetValue(ref _IsvisiblePaneldetallecompra, value); }
        }

        public List<Mdetallecompras> ListaVistapreviaDc
        {
            get { return _listaVistapreviaDc; }
            set { SetValue(ref _listaVistapreviaDc, value); }
        }

        public List<Mdetallecompras> ListaDc
        {
            get { return _listaDc; }
            set { SetValue(ref _listaDc, value); }
        }

        public List<Mproductos> Listaproductos
        {
            get { return _listaproductos; }
            set { SetValue(ref _listaproductos, value); }
        }
        #endregion

        #region PROCESOS
        public async Task Mostrarproductos(StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var funcion = new Dproductos();
            Listaproductos = await funcion.Mostrarproductos();

            var box = new BoxView
            {
                HeightRequest = 60
            };

            Carrilderecha.Children.Clear();
            Carrilizquierda.Children.Clear();

            Carrilderecha.Children.Add(box);
            
            foreach(var item in Listaproductos)
            {
                Dibujarproductos(item, _index, Carrilderecha, Carrilizquierda);
                _index++;
            }
        }

        public void Dibujarproductos(Mproductos item, int index, StackLayout Carrilderecha, StackLayout Carrilizquierda)
        {
            var _ubicacion = Convert.ToBoolean(index % 2);
            var carril = _ubicacion ? Carrilderecha : Carrilizquierda;

            var frame = new Frame
            {
                HeightRequest = 300,
                CornerRadius = 10,
                Margin = 8,
                HasShadow = false,
                BackgroundColor = Color.White,
                Padding = 22,
            };

            var stack = new StackLayout
            {

            };

            var image = new Image
            {
                Source = item.Icono,
                HeightRequest = 150,
                HorizontalOptions = LayoutOptions.Center,
                Margin = new Thickness(0, 10),
            };

            var labelprecio = new Label
            {
                Text = "$" + item.Precio,
                FontAttributes = FontAttributes.Bold,
                FontSize = 22,
                Margin = new Thickness(0, 10),
                TextColor = Color.FromHex("#333333")
            };

            var labeldescripcion = new Label
            {
                Text = item.Descripcion,
                FontSize = 16,
                TextColor = Color.Black,
                CharacterSpacing = 1
            };

            var labelpeso = new Label
            {
                Text = item.Peso,
                FontSize = 13,
                TextColor = Color.FromHex("#cccccc"),
                CharacterSpacing = 1
            };

            stack.Children.Add(image);
            stack.Children.Add(labelprecio);
            stack.Children.Add(labeldescripcion);
            stack.Children.Add(labelpeso);

            frame.Content = stack;

            var tap = new TapGestureRecognizer();
            tap.Tapped += async (object sender, EventArgs e) =>
            {
                var page = (App.Current.MainPage as SharedTransitionNavigationPage).CurrentPage;
                SharedTransitionNavigationPage.SetBackgroundAnimation(page, BackgroundAnimation.SlideFromRight);
                SharedTransitionNavigationPage.SetTransitionDuration(page, 1000);
                SharedTransitionNavigationPage.SetTransitionSelectedGroup(page, item.Idproducto);
                await Navigation.PushAsync(new Agregarcompra(item));
            };

            carril.Children.Add(frame);
            stack.GestureRecognizers.Add(tap);
        }

        public async Task ProcesoAsyncrono()
        {

        }
        //Cuando no son procesos Asíncronos se
        //remplaza el async Task por void 
        public void ProcesoSimple()
        {

        }

        public async Task MostrarVistapreviaDc()
        {
            var funcion = new Ddetallecompras();
            ListaVistapreviaDc = await funcion.MostrarVistapreviaDc();
        }

        public async Task MostrarpanelDC(Grid gridproductos, StackLayout paneldetalleC, StackLayout panelcontador)
        {
            uint duracion = 700;
            await Task.WhenAll(
                panelcontador.FadeTo(0, 500),
                gridproductos.TranslateTo(0, -200, duracion+200, Easing.CubicIn),
                paneldetalleC.TranslateTo(0, -300, duracion, Easing.CubicIn)
                );
            IsvisiblePanelDc = true;
        }

        public async Task MostrargridProductos(Grid gridproductos, StackLayout paneldetalleC, StackLayout panelcontador)
        {
            uint duracion = 700;
            await Task.WhenAll(
                panelcontador.FadeTo(1, 500),
                gridproductos.TranslateTo(0, 0, duracion + 200, Easing.CubicIn),
                paneldetalleC.TranslateTo(0, 1000, duracion, Easing.CubicIn)
                );
            IsvisiblePanelDc = false;
        }

        public async Task MostrarDetalleC()
        {
            var funcion = new Ddetallecompras();
            ListaDc = await funcion.MostrarDc();
        }

        public async Task Sumarcantidades()
        {
            var funcion = new Ddetallecompras();
            Cantidadtotal = await funcion.Sumarcantidad();
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

📂 Datos     
🔥 `Ddetallecompras.cs`     

```cs
using System;
using System.Collections.Generic;
using System.Text;
using Firebase.Database.Query;
using System.Linq;
using Firebase.Database;
using System.Threading.Tasks;
using Appcompras.Modelo;
using Appcompras.Conexiones;

namespace Appcompras.Datos
{
    public class Ddetallecompras
    {
        public async Task InsertarDc(Mdetallecompras parametros)
        {
            await Cconexion.firebase
                .Child("Detallecompra")
                .PostAsync(new Mdetallecompras()
                {
                    Cantidad = parametros.Cantidad,
                    Idproducto = parametros.Idproducto,
                    Preciocompra = parametros.Preciocompra,
                    Total = parametros.Total
                });
        }

        public async Task<List<Mdetallecompras>> MostrarVistapreviaDc()
        {
            var ListaDc = new List<Mdetallecompras>();
            var parametrosProductos = new Mproductos();
            var funcionproductos = new Dproductos();

            var data = (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>())
                .Where(a => a.Key != "Modelo")
                .Select(item=> new Mdetallecompras
                {
                    Idproducto = item.Object.Idproducto,
                    Iddetallecompra = item.Key
                })
                ;

            foreach(var hobit in data)
            {
                var parametros = new Mdetallecompras();
                parametros.Idproducto = hobit.Idproducto;
                parametrosProductos.Idproducto = hobit.Idproducto;
                var listaproductos = await funcionproductos.MostrarproductosXid(parametrosProductos);

                parametros.Imagen = listaproductos[0].Icono;
                ListaDc.Add(parametros);
            }

            return ListaDc;
        }

        public async Task<List<Mdetallecompras>> MostrarDc()
        {
            var ListaDc = new List<Mdetallecompras>();
            var parametrosProductos = new Mproductos();
            var funcionproductos = new Dproductos();

            var data = (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>())
                .Where(a => a.Key != "Modelo")
                .Select(item => new Mdetallecompras
                {
                    Idproducto = item.Object.Idproducto,
                    Iddetallecompra = item.Key,
                    Cantidad = item.Object.Cantidad,
                    Total = item.Object.Total
                })
                ;

            foreach (var hobit in data)
            {
                var parametros = new Mdetallecompras();
                parametros.Idproducto = hobit.Idproducto;
                parametrosProductos.Idproducto = hobit.Idproducto;
                var listaproductos = await funcionproductos.MostrarproductosXid(parametrosProductos);

                parametros.Descripcion = listaproductos[0].Descripcion;
                parametros.Imagen = listaproductos[0].Icono;
                parametros.Cantidad = hobit.Cantidad;
                parametros.Total = hobit.Total;
                ListaDc.Add(parametros);
            }

            return ListaDc;
        }

        public async Task <List<Mdetallecompras>> MostrarDcXidproducto(string idproducto)
        {
            return (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>()
                ).Where(a=> a.Object.Idproducto==idproducto).Select(item => new Mdetallecompras
                {
                    Total = item.Object.Total,
                }
                ).ToList();
        }

        public async Task Editardetalle(Mdetallecompras parametros)
        {
            var data = (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>())
                .Where(a => a.Object.Idproducto == parametros.Idproducto)
                .FirstOrDefault();
            double cantidadInicial = Convert.ToDouble(data.Object.Cantidad);
            data.Object.Cantidad = (cantidadInicial + Convert.ToDouble(parametros.Cantidad)).ToString();

            double cantidad = Convert.ToDouble(data.Object.Cantidad);
            double preciocompra = Convert.ToDouble(parametros.Preciocompra);
            double total = 0;
            total = cantidad * preciocompra;
            data.Object.Total = total.ToString();

            await Cconexion.firebase
                .Child("Detallecompra")
                .Child(data.Key)
                .PutAsync(data.Object);
        }

        public async Task<List<Mdetallecompras>> Mostrarcantidades()
        {
            return (await Cconexion.firebase
                .Child("Detallecompra")
                .OnceAsync<Mdetallecompras>()
                ).Where(a=>a.Key!="Modelo").Select(item => new Mdetallecompras
                {
                    Cantidad = item.Object.Cantidad
                }
                ).ToList();
        }

        public async Task <string> Sumarcantidad()
        {
            var funcion = new Ddetallecompras();
            var lista = await funcion.Mostrarcantidades();
            double cantidad = 0;

            foreach(var hobit in lista)
            {
                cantidad += Convert.ToDouble(hobit.Cantidad);
            }
            return cantidad.ToString();
        }
    }
}
```

📂 Vistas     
🔥 `Compras.xaml`  

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Appcompras.Vistas.Compras"
             NavigationPage.HasNavigationBar="False"
             xmlns:pancake="clr-namespace:Xamarin.Forms.PancakeView;assembly=Xamarin.Forms.PancakeView"
             xmlns:transicion ="clr-namespace:Plugin.SharedTransitions;assembly=Plugin.SharedTransitions">
    <StackLayout BackgroundColor="#050506">
        <Grid RowDefinitions="*, 100"
              VerticalOptions="FillAndExpand"
              x:Name="gridproductos">
            <pancake:PancakeView
                CornerRadius="0,0,40,40"
                BackgroundColor="#efefec">
                <ScrollView>
                    <Grid ColumnDefinitions="*,*"
                          Margin="8,0,8,0"
                          RowDefinitions="80,*">
                        <StackLayout Orientation="Horizontal"
                                     Grid.ColumnSpan="2">
                            <Image Source="https://i.postimg.cc/nL90fCcX/leftarrow.png"
                                   HeightRequest="20" 
                                   Margin="10,0,0,0"/>
                            <Label Text="Frutas y vegetales"
                                   VerticalOptions="Center"
                                   FontSize="18"
                                   TextColor="#3d3d3d"
                                   Margin="30,0,0,0" />
                            <Image Source="https://i.postimg.cc/prNP2hHy/controls.png"
                                   HeightRequest="30"
                                   HorizontalOptions="EndAndExpand" 
                                   Margin="0,0,10,0"/>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="0"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilizquierda">
                            <Frame HeightRequest="300"
                                   CornerRadius="10"
                                   Margin="8"
                                   HasShadow="False"
                                   BackgroundColor="White"
                                   Padding="22">
                                <StackLayout>
                                    <Image Source="https://i.postimg.cc/T1d0J9kx/apple.png"
                                           HeightRequest="150"
                                           HorizontalOptions="Center"
                                           Margin="0,10"/>
                                    <Label Text="$8.30"
                                           FontAttributes="Bold"
                                           FontSize="22"
                                           Margin="0,10"
                                           TextColor="#333333"/>
                                    <Label Text="Manzana"
                                           FontSize="16"
                                           TextColor="Black"
                                           CharacterSpacing="1"/>
                                    <Label Text="500g"
                                           FontSize="13"
                                           TextColor="#cccccc"
                                           CharacterSpacing="1"/>
                                </StackLayout>
                                
                            </Frame>
                        </StackLayout>
                        <StackLayout 
                                     Grid.Column="1"
                                     Grid.Row="1"                                     
                                     x:Name="Carrilderecha">
                            
                        </StackLayout>
                    </Grid>
                </ScrollView>
            </pancake:PancakeView>
            <!--#region Panelcontador -->
            <StackLayout Grid.Row="1"
                         Orientation="Horizontal"
                         Margin="20,0,10,0"
                         x:Name="Panelcontador">
                <StackLayout.GestureRecognizers>
                    <SwipeGestureRecognizer Direction="Up"
                                            Swiped="DeslizarPanelcontador"/>
                </StackLayout.GestureRecognizers>
                <Label Text="Cart"
                       FontSize="30"
                       WidthRequest="100"
                       FontAttributes="Bold"
                       VerticalOptions="Center"
                       TextColor="White" />
                <CollectionView HorizontalOptions="CenterAndExpand"
                                VerticalOptions="Center"
                                ItemsSource="{Binding ListaVistapreviaDc}">
                    <CollectionView.ItemsLayout>
                        <GridItemsLayout Orientation="Horizontal"
                                         Span="1"
                                         HorizontalItemSpacing="10" />
                    </CollectionView.ItemsLayout>
                    <CollectionView.ItemTemplate>
                        <DataTemplate>
                            <Grid Margin="4,0"
                                  WidthRequest="30">
                                <Frame CornerRadius="24"
                                       HorizontalOptions="Center"
                                       VerticalOptions="Center"></Frame>
                                <Image Source="{Binding Imagen}"
                                       Margin="0,6"
                                       WidthRequest="30"
                                       HorizontalOptions="Center"
                                       transicion:Transition.Group="{Binding Idproducto}"
                                       transicion:Transition.Name="producto" />
                            </Grid>
                        </DataTemplate>
                    </CollectionView.ItemTemplate>
                </CollectionView>
                <Frame HeightRequest="40"
                       WidthRequest="60"
                       VerticalOptions="Center"
                       CornerRadius="30"
                       Padding="5"
                       BackgroundColor="#FABC4B">
                    <Label Text="{Binding Cantidadtotal}"
                           VerticalOptions="Center"
                           HorizontalOptions="Center"
                           FontSize="15"
                           FontAttributes="Bold" />
                </Frame>
            </StackLayout>
            <!--#endregion-->
            <Grid.GestureRecognizers>
                <TapGestureRecognizer Command="{Binding command}" />
            </Grid.GestureRecognizers>
        </Grid>
        <!--#region Paneldetallecompra -->
        <StackLayout x:Name="Paneldetallecompra"
                     VerticalOptions="FillAndExpand"                     
                     IsVisible="{Binding IsvisiblePanelDc}">
            <StackLayout.GestureRecognizers>
                <SwipeGestureRecognizer Direction="Down"
                                        Swiped="DeslizarPaneldetallecompra"/>
            </StackLayout.GestureRecognizers>
            <Label Text="Cart"
                   TextColor="White"
                   FontSize="32"
                   FontAttributes="Bold"
                   Padding="40,28,40,40"
                   HeightRequest="120"
                   WidthRequest="100"/>
            <CollectionView HeightRequest="300"
                            Margin="0,0,0,0"
                            VerticalOptions="Center"
                            ItemsSource="{Binding ListaDc}">
                <CollectionView.ItemTemplate>
                    <DataTemplate>
                        <StackLayout Margin="0, 12"    
                                     Orientation="Horizontal"
                                     Spacing="10">
                            <Grid WidthRequest="62"
                                  Margin="10,0">
                                <Frame BackgroundColor="White"
                                       CornerRadius="24"
                                       HorizontalOptions="Center"
                                       VerticalOptions="Center">
                                    
                                </Frame>
                                <Image Source="{Binding Imagen}"
                                       WidthRequest="20"
                                       Margin="0,10"
                                       HorizontalOptions="Center"/>
                            </Grid>
                            <Label Text="{Binding Cantidad}"
                                   TextColor="White"
                                   VerticalOptions="Center"/>
                            <Label Text="x"
                                   TextColor="White"
                                   VerticalOptions="Center" />
                            <Label Text="{Binding Descripcion}"
                                   TextColor="White"
                                   VerticalOptions="Center" />
                            <Label Text="{Binding Total}"
                                   TextColor="White"
                                   VerticalOptions="Center" 
                                   HorizontalOptions="EndAndExpand"
                                   Margin="10,0"/>
                        </StackLayout>
                    </DataTemplate>
                </CollectionView.ItemTemplate>
            </CollectionView>
            <StackLayout Orientation="Horizontal"
                         Margin="36,0,32,0">
                <Grid WidthRequest="80">
                    <Frame CornerRadius="24"
                           BackgroundColor="#555555"
                           HorizontalOptions="Center"
                           VerticalOptions="Center">
                        
                    </Frame>
                    <Image Source="https://i.postimg.cc/1Xk4m0Yy/delivery.png"
                           WidthRequest="26"
                           HorizontalOptions="Center"/>
                </Grid>
                <StackLayout Margin="20,0,100,0">
                    <Label Text="Delivery"
                           TextColor="White"
                           />
                    <Label Text="All orders of $40 or more qualify for FREE delivery."
                           TextColor="Gray" />
                </StackLayout>
                <Label Text="$10"
                       TextColor="White"
                       FontAttributes="Bold"
                       WidthRequest="100"/>
            </StackLayout>
            <StackLayout Orientation="Horizontal"                         
                         Margin="40,50,40,0">
                <Label Text="Total:"
                       TextColor="White"
                       FontSize="30"
                       FontAttributes="Bold"/>
                <Label Text="$37.85"
                       TextColor="White"
                       FontSize="30"
                       FontAttributes="Bold" 
                       HorizontalOptions="EndAndExpand"/>
            </StackLayout>
            <Button Text="Next"
                    
                    BackgroundColor="#DEBB44"
                    CornerRadius="30"
                    Margin="15,0,15,20"
                    VerticalOptions="EndAndExpand"
                    HeightRequest="60"/>
        </StackLayout>
        <!--#endregion-->
    </StackLayout>
</ContentPage>
```

🔥 `Compras.xaml.cs`  

```cs
using Appcompras.VistaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Appcompras.Vistas
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Compras : ContentPage
    {
        VMcompras vm;

        public Compras()
        {
            InitializeComponent();
            vm = new VMcompras(Navigation, Carrilderecha, Carrilizquierda);
            BindingContext = vm;

            this.Appearing += Compras_Appearing; //+=Tabulador
        }

        private async void Compras_Appearing(object sender, EventArgs e)
        {
            await vm.MostrarVistapreviaDc();
            await vm.MostrarDetalleC();
            await vm.Sumarcantidades();
        }

        private async void DeslizarPanelcontador(object sender, SwipedEventArgs e)
        {
            await vm.MostrarpanelDC(gridproductos, Paneldetallecompra, Panelcontador);
        }

        private async void DeslizarPaneldetallecompra(object sender, SwipedEventArgs e)
        {
            await vm.MostrargridProductos(gridproductos, Paneldetallecompra, Panelcontador);
        }
    }
}
```


📌 Se modificaron algunos colores en `styles.xml`   

- Appcompras.Android
	- Resources 
		- values
			- `styles.xml`


```xml
<?xml version="1.0" encoding="utf-8" ?>
<resources>

  <style name="MainTheme" parent="MainTheme.Base">
    <!-- As of Xamarin.Forms 4.6 the theme has moved into the Forms binary -->
    <!-- If you want to override anything you can do that here. -->
    <!-- Underneath are a couple of entries to get you started. -->

    <!-- Set theme colors from https://aka.ms/material-colors -->
    <!-- colorPrimary is used for the default action bar background -->
    <!--<item name="colorPrimary">#2196F3</item>-->
    <!-- colorPrimaryDark is used for the status bar -->
    <item name="colorPrimaryDark">#EFEFEC</item>
    <!-- colorAccent is used as the default value for colorControlActivated
         which is used to tint widgets -->
    <!--<item name="colorAccent">#FF4081</item>-->
  </style>
</resources>
```

- [Código fuente](https://drive.google.com/file/d/1HOrmqJdyFonNvwdnWBDsaF6OV5XYRE4_/view)
- [Código en GitHub]()

--- 
---

### Recursos adicionales

<details>
	<summary>Haz clic para ver a los recursos usados 👀</summary>
	<br/>

📂 Vistas     
🔥 `Compras.xaml`    


📂 VistaModelo     
🔥 `VMcompras.cs`    


```xml
```

```cs
```

🖥
🗑
➕
->   
🦄   
🔥    
❄   
☠   
📂  
🗂   
☑
👀👇   
👀☝   
👈👀   
📌

</details>






