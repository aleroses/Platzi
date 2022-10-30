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