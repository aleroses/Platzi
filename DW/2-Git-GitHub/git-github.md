# Curso Profesional de Git y GitHub

> **Freddy Vega** - CEO en Platzi   

## 1. ¿Qué es Git?
Sistema que guarda solo cambios de un archivo, maneja los cambios que otras personas hagan sobre los mismos archivos, así multiples personas pueden trabajar en un mismo proyecto  sin pisarse. Cuando hay errores se puede saber quien hizo los cambios y recuperar versiones viejas.

**Git:**    
Usada en la maquina local, funciona en la terminal o línea de comandos.   
- add .
- commit -am " "
- merge
- pull origin master

![Git|50](https://i.postimg.cc/T1Mr73P2/git.png)

**GitHub:** :octocat:        
Para colaborar con otros, usar interfaz web o publicar proyectos.   
- Guarda proyectos
- Sus cambios
- Cada una de sus versiones

![GitHub|50](https://i.postimg.cc/BbT2df8T/github.png)

🎲

## 2. ¿Por qué usar un sistema de control de versiones como Git?
Para solo guardar los cambios y no guardar todo el archivo de nuevo.

**Control de versiones:**    
- Solo guarda cambios
- Donde ocurrieron 
- Cuando ocurrieron 
- Sabe quien los hizo 
- Volver a ellos en el pasado

**Comandos para iniciar repo y enviar cambios**    
`git init`     
- Arranca el repositorio 📂.git
- Crea una carpeta / repositorio que es una Base de Datos donde se van a guardar los cambios o versiones de cualquier archivo.

`git add algo.txt` or `git add .`     
- Envía uno o todo los archivos a **_Staging_** 
- **_Staging_** zona previa antes de enviar todo al repositorio local.

`git commit -m "Mensaje de referencia v01"`    
- Agrega cambios de los archivos al repositorio local (DB del sistema de control de versiones).

**Comandos para ver cambios**     
`git status`    
- Muestra el estado del directorio de trabajo. 
- 🔴 or 🟢  

`git show`       
- Muestra todos los cambios históricos.   

`git log algo.txt`   
- Muestra la historia entera de un archivo.

**Comandos para traer y enviar cambios en remoto**    
`git pull origin master`        
- Trae tus archivos de algún repositorio remoto.
- `origin` nombre del repositorio remoto.
- `master / main` nombre del repositorio local principal.

`git push origin master`       
- Llevar archivo al repositorio remoto para que lo vea todo el mundo.
- `origin` nombre del repositorio remoto.
- `master / main` nombre del repositorio local principal.

📌 Solo admite archivos de _texto.md plano.txt_ o archivos que se puedan abrir en un editor de código. 📋📎👩‍💻

📌 Iconos/imágenes
- [Flaticon - Iconos - Imgs](https://www.flaticon.com/)
- [Iconarchive](http://www.iconarchive.com/)
- [Undraw](https://undraw.co/illustrations)
- [Svgporn - Marcas](https://svgporn.com/)
- [Iconfinder](https://www.iconfinder.com/)

🎲

## 3. Instalando Git y GitBash en Windows

**Buscar en Google:**     
[Download Git](https://git-scm.com/downloads)

**Instalación**   
- Ejecutar como administrador
- Next (dos veces) ✔✔
- Marcar 
	- [x] Git Bash Here
	- [x] Use a TrueType font in all console windows
	- [x] Check daily for Git for Windows updates
- Next (tres veces) ✔✔✔
- Marcar
	- [x] Git from the command line and also from 3rd-party software
- Next ✔
- Use the Open SSL library
- Next ✔
- Checkout Windows-style, commit Unix-style line endings
- Next ✔
- Use MinTTY(the default terminal of MSYS2)
- Next ✔
- Marcar
	- [x] Todo
	- [x] Enable symbolic links
- Install
- Marcar
	- [x] Launch Git Bash
- Finish
- Abrir Git Bash

Una vez culminada la instalación, verificamos que git esta instalado:
- Abrimos Git Bash
- Ejecutamos el comando: `git --version`   

📌 Windows: Por defecto no trae una configuración para Git, por eso los pasos llegan a ser mas extensos.
📌 La configuración hecha en la instalación es la mas recomendada para no tener inconvenientes, pero si se desea se pueden cambiar algunas cosas según el usuario. 

🎲

## 4. Instalando Git en OSX
La instalación de GIT en Mac es un poco más sencilla. No debemos instalar GitBash porque Mac ya trae por defecto una consola de comandos (la puedes encontrar como “Terminal”). Tampoco debemos configurar OpenSSL porque viene listo por defecto.

OSX está basado en un Kernel de UNIX llamado BSD. Estos significa que hay algunas diferencias entre las consolas de Mac y Linux. Pero no vas a notar la diferencia a menos que trabajes con acceso profundo a las interfaces de red o los archivos del sistema operativo. Ambas consolas funcionan muy parecido y comparten los comandos que vamos a ver durante el curso.

**Buscar en Google:**       
[Download Git](https://git-scm.com/downloads)

**Instalación**      
- Abrir paquete
- Caja Amarilla: Clic derecho - Open
- Open
- Continue
- Install
- Contraseña
- Mover a la papelera

🎲

## 5. Instalando Git en Linux
**Instalación en Consola**     
- `sudo apt-get update`
	- Super User Do: Super usuario hacer 🦸‍♀️🦸‍♂️
	- apt: poderes de administrador / actitud
	- Actualiza los paquetes instalados
- `sudo apt-get upgrade`
	- Actualiza los archivos viejos 
- `sudo apt-get install git`

**Verificar la instalación**     
- `git --version`

**Actualizar git a su ultima version**    
- `sudo add-apt-repository ppa:git-core/ppa`  
- `sudo apt update; sudo apt install git`  
- `git --version`  

📌 Es importante actualizar y mejorar los paquetes antes de cada instalación. Es una buena practica. ✌

🎲

## 6. Editores de código, archivos binarios y de texto plano
**Editores de Código**   
- Atom
- Sublime Text
- Visual Studio Code

Son programa que permiten crear y modificar archivos de texto plano.

**Tipos de archivos y sus diferencias:**     
_**Archivos de Texto (.txt):**_ 📝   
Texto plano normal y sin nada especial. Se ve igual en un bloc de notas o en editores de texto avanzados.

_**Archivos RTF (.rtf):** _ 📚      
Texto con tamaños diferentes, estilos y colores. Se distorsiona al abrirlos en editores de texto avanzados.

_**Archivos de Word (.docx):**_ 🖼🖍    
Podemos guardar imágenes y texto con diferentes tamaños, estilos y colores. Al ser código binario se distorsiona al abrirlo en un editor de código. 


**Habilitar las Extensiones de Archivos:**   
- Abriendo cualquier carpeta
- Vista 
	- Mostrar u ocultar 
		- [x] Extensiones de nombre de archivo  

> ![Habilitar Extensiones](https://i.postimg.cc/8Pnp8Z69/6-habilitar-extensiones.jpg)

🎲

## 7. Introducción a la terminal y línea de comandos
**Comandos Usados en la terminal**
- `pwd` Print working directory    
	- Muestra la ruta de nuestra ubicación

- `cd` Change directory     
	- `cd ..` Retrocede una carpeta
	- `cd /algo/` Adelanta para entrar a la siguiente carpeta
	- `cd ../../` Retrocede dos carpetas

- `ls` Lista archivos    
	- `ls -al` Muestra archivos ocultos y los ordena en una lista    

- `clear` Limpia la consola   

- `mkdir carpeta01` Make directory / Crear carpetas

- `touch vacio.txt`    
	- Crear archivos que no tengan nada por dentro

- `cat vacio.txt` Catenate / encadenar    
	- Muestra el contenido de un archivo

- `history`  
	- Muestra el historial completa de todos los comandos que escribí hasta ahora.
	- `!72`
		- Usando el comando anterior podemos invocar un comando usando su numero de orden.

- `rm vacio.txt` Remove / Retirar / Borrar archivos    
	- `rm -ri vacio.txt` Recursive interactive
	- `rm --help` Muestra serie de explicaciones de como funciona el comando

📌 Windows
- La mayúscula y minúscula no importan
- Puedes escribir todo pegado: cd..

📌 Tecla tap
- Autocompleta coincidencias existentes 

🎲

## 8. Crea un repositorio de Git y haz tu primer commit
**Configurar git bash**     
Primero debemos decirle quienes somos
- `git config --list`
	- Configuración por defecto de git
	- Podemos ver que aún no está nuestro nombre ni correo
- `git config --global user.name "John Lennon"`
	- Cambiar usuarios globales
- `git config --global user.email "john.l@mail.com"`  
	- Cambiar email 

**Otros comandos de configuración**      
- `git config`   
	- Lista de las funciones de este comando y sus configuraciones
- `git config --list --show-origin`
	- Ver donde se guardaron las configuraciones

**Crear repositorio / Primer commit**    
Para crear un repositorio debemos tener una carpeta especifica que será donde se hará el control de versiones.     

**1. Flujo normal**   
- `mkdir proyecto01`   
- `cd proyecto01`   
- `pwd` `/c/Users/OneUser/proyecto01`
- `git init` 🔥      
- `ls -al`    
	- Ver carpetas ocultas (.git)

En este punto creas tus archivos y les agregas contenido para luego enviarlos al repositorio local como la primera versión o el primer avance de tu trabajo.     
- `code .`
	- Abre VSC: Creas y guardas archivo.
- `git status` 🔥  
	- Ver cual es el estado del proyecto (Untracked)
- `git add algo.txt` 🔥   
- `git commit -m "Primer commit de este archivo"` 🔥  

**2. Otro escenario**  
- `mkdir proyecto01`   
- `cd proyecto01`   
- `pwd` `/c/Users/OneUser/proyecto01`
- `git init` 🔥    
	- Crear repositorio (directorio .git)
- `ls -al`    
	- Ver carpetas ocultas (.git)   
- `code .`
	- Abrir Visual Studio Code
	- Control + n: Crea un archivo nuevo - Escribe algo
	- Crea un archivo algo.txt
	- Control + s: Guardar cambios - Activar autoguardado
- `git status` 🔴🔥  
	- Ver cual es el estado del proyecto (Untracked)
- `git add algo.txt` 🔥   
	- Los cambios fueron enviados a _Staging_
- `git status` 🟢🔥     
- `git rm algo.txt`
	- En caso no quieras enviar los cambios al repositorio puedes remover de _staging_ y retroceder hasta antes de `add .` y dejar el archivo _Untracked_
- `git status` 🔴🔥 
- `git rm --cached algo.txt`
	- Si con el comando `git rm` anterior no fue suficiente, puedes quitar el archivo de la lista de archivo con cambios por enviar así git no lo tomará en cuenta.
- `git status`     
- `git log algo.txt`

📌 Diferencia entre `rm` con y sin `cached`:    
	- `cached` significa que está en memoria ram y está sin guardar en la base de datos del repositorio y con este comando se le quita ese add. 

📌 Los comandos con un solo guion solo llevan letras y los comandos con doble guion son usados en palabras.
- `ls -al`
- `git config --list`

🎲

## 9. Analizar cambios en los archivos de tu proyecto con Git
**Comandos para visualizar y comparar cambios**
Para probar estos comandos usar un archivo que ya tenga varios cambios (`git add .` y `git commit`).

- `git show algo.txt`
	- Muestra los cambios que ha sufrido un archivo.
- `git log algo.txt`
- `git diff 3b58a9086121... a780a1c17e69...`
	- Para usar este comando necesitas extraer los commits con el comando anterior git log.
	- Sirve para ver las diferencias entre un cambio y otro.    
	![Commits](https://i.postimg.cc/x1sXDMXY/9-commits.png)

📌 Diferencias entre `git show` y `git log`
- `show` Muestra uno o mas objetos (blobs, arboles, etiquetas y confirmaciones).
- `log` Enumera confirmaciones (commits).

📌 Si solo hacemos commit sin comentario nos aparecerá un editor llamado Vim, para este caso necesitas saber lo siguiente:  
- Para escribir: Esc + i
- Dejemos un comentarios, esto es muy importante
- Para salir: Esc + shift + zz

🎲

## 10. ¿Qué es el staging y los repositorios? Ciclo básico de trabajo en Git

Para iniciar un repositorio, o sea, activar el sistema de control de versiones de Git en tu proyecto, solo debes ejecutar el comando `git init`.

Este comando se encargará de dos cosas:    
- Primero, crear una **_carpeta .git_**, donde se guardará toda la base de datos con cambios atómicos de nuestro proyecto;
- Segundo, crear un **_área_** que conocemos como **_Staging_**, que guardará temporalmente nuestros archivos (cuando ejecutemos el comando especial `git add .`) que luego nos permitirá, guardar estos cambios en el repositorio (con un comando especial llamado `git commit -am ""`).

**Ciclo de vida o estados de los archivos en Git:**     

Cuando trabajamos con Git nuestros archivos pueden vivir y moverse entre **_4 diferentes estados_** (cuando trabajamos con repositorios remotos pueden ser más estados, pero lo estudiaremos más adelante):

- **Archivos Tracked:** son los archivos que viven dentro de Git, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas en el repositorio gracias a los comandos `git add` y `git commit`.

- **Archivos Staged:** son archivos en **_Staging_**. Viven dentro de Git y hay registro de ellos porque han sido afectados por el comando `git add`, aunque no sus últimos cambios. Git ya sabe de la existencia de estos últimos cambios, pero todavía no han sido guardados definitivamente en el repositorio porque falta ejecutar el comando git commit.

- **Archivos Unstaged:** entiéndelos como archivos “Tracked pero Unstaged”. Son archivos que viven dentro de Git pero no han sido afectados por el comando git add ni mucho menos por git commit. _Git tiene un registro de estos archivos, pero está desactualizado_, sus últimas versiones solo están guardadas en el disco duro.

- **Archivos Untracked:** son archivos que NO viven dentro de Git, solo en el disco duro. _Nunca han sido afectados por git add, así que Git no tiene registros de su existencia._

📌 Recuerda que hay un caso muy raro donde los archivos tienen dos estados al mismo tiempo: **_staged y untracked_**. Esto pasa cuando guardas los cambios de un archivo en el área de Staging (con el comando git add), pero antes de hacer commit para guardar los cambios en el repositorio haces nuevos cambios que todavía no han sido guardados en el área de Staging (en realidad, todo sigue funcionando igual pero es un poco divertido).

**Comandos para mover archivos entre los estados de Git:**   

- `git status` nos permite ver el estado de todos nuestros archivos y carpetas.

- `git add` nos ayuda a mover archivos del Untracked o Unstaged al estado **_Staged_**. Podemos usar `git add nombre-del-archivo-o-carpeta` para añadir archivos y carpetas individuales o `git add .` para mover todos los archivos de nuestro proyecto (tanto Untrackeds como unstageds).

- `git reset HEAD` nos ayuda a sacar archivos del estado Staged para devolverlos a su estado anterior. Si los archivos venían de Unstaged, vuelven allí. Y lo mismo se venían de Untracked.

- `git commit` nos ayuda a mover archivos de Unstaged a Tracked. Esta es una ocasión especial, los archivos han sido guardados o actualizados en el repositorio. Git nos pedirá que dejemos un mensaje para recordar los cambios que hicimos y podemos usar el argumento -m para escribirlo (`git commit -m "mensaje"`).

- `git rm` este comando necesita alguno de los siguientes argumentos para poder ejecutarse correctamente:
	- `git rm --cached` Mueve los archivos que le indiquemos al estado Untracked.
	- `git rm --force` Elimina los archivos de Git y del disco duro. Git guarda el registro de la existencia de los archivos, por lo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados).

> ![Ciclo básico](https://i.postimg.cc/N0TXmbsD/10-ciclo-basico-de-trabajo-en-git.png)

🎲

## 11. ¿Qué es un Branch (rama) y cómo funciona un Merge en Git? 

Git es una base de datos muy precisa con todos los cambios y crecimiento de nuestro proyecto. Los `commits` son la única forma de tener un registro de los cambios. Pero las ramas amplifican mucho más el potencial de Git.

Todos los commits se aplican sobre una rama. Por defecto, siempre empezamos en la rama `master` (puedes cambiarle el nombre si no te gusta). Podemos crear nuevas ramas, a partir de esta, para crear flujos de trabajo independientes.

Crear una nueva rama se trata de **_copiar un commit_** (de cualquier rama), pasarlo a otro lado (a otra rama) y continuar el trabajo de una parte específica de nuestro proyecto sin afectar el flujo de trabajo principal (que continúa en la rama master o la rama principal).   
 
![Branch|50](https://i.postimg.cc/zBKvStXS/11-branch.png)    

**Estándar en equipos de desarrollo**     
- `Branch master` Todo lo que esté en la rama master va a producción.  
- `Branch development` Las nuevas features (características) y experimentos van en esta rama, para unirse a master cuando estén definitivamente listas.   
- `Branch hotfix` Los issues (problemas) o errores se solucionan en esta rama, para unirse a master tan pronto como sea posible.

📌 Crear una nueva rama lo conocemos como `Checkout`. Unir dos ramas lo conocemos como `Merge`.    

Podemos crear todas las ramas y commits que queramos. De hecho, podemos aprovechar el registro de cambios de Git para crear ramas, traer versiones viejas del código, arreglarlas y combinarlas de nuevo para mejorar el proyecto.

Solo ten en cuenta que combinar estas ramas (sí, hacer “merge”) puede generar conflictos. Algunos archivos pueden ser diferentes en ambas ramas. Git es muy inteligente y puede intentar unir estos cambios automáticamente, pero no siempre funciona. En algunos casos, somos nosotros los que debemos resolver estos conflictos “a mano”.

> ![Branch and merge](https://i.postimg.cc/prR3TZGL/11-branch-merge.png)

🎲

## 12. Volver en el tiempo en nuestro repositorio utilizando reset y checkout

El comando `git checkout id-commit` nos permite **_viajar en el tiempo._** Podemos volver a cualquier versión anterior de un archivo específico o incluso del proyecto entero. Esta también es la forma de crear ramas y movernos entre ellas.    

📌 Para extraer commit debemos usar el comando `git log`

**Git checkout:**    
Opción 1    
- `git checkout 83d73c4a2eb79az10a40b1309a algo.txt`
	- Volvemos a una versión anterior.
	- Con la **_opción 2_** podemos volver al punto antes de este checkout.
- `git add .`  
- `git commit -am "mensaje"`   
	- Con esto el cambio hecho con checkout se vuelve permanente.

Opción 2     
- `git checkout master algo.txt`    
	- Habiendo usado `git checkout` **_opción 1_**, la opción 2 nos regresa a la versión más reciente registrada en el repositorio, a la ultima versión antes de haber hecho checkout.

También hay una forma de hacerlo un poco más “ruda”: usando el comando `git reset`. En este caso, no solo “volvemos en el tiempo”, sino que **_borramos los cambios que hicimos después de este commit_**.

Hay dos formas de usar `git reset:`
- Con el argumento `--hard`, borrando toda la información que tengamos en el área de staging (y perdiendo todo para siempre).
- O, un poco más seguro, con el argumento `--soft`, que mantiene allí los archivos del área de staging para que podamos aplicar nuestros últimos cambios pero desde un commit anterior.

**Git reset:**     
Opción 1    
- `git reset 83d73c4a2eb79az03b1b130574e9e706c99a --hard`    
	- Permite volver a una versión anterior de forma permanente.

Opción 2
- `git reset 83d73c4a2eb79az03b1b130574e9e706c99a --soft`    
	- Volvemos a una versión anterior pero lo que está en staging sigue ahí.

📌 `git log`   
- Muestra como si lo trabajado anteriormente hubiera desaparecido.
- Ejecutar con cuidado. 

📌 Comando para ver las estadística del trabajo: `git log --stat`
- Muestra los cambios específicos en los archivos existentes a partir del commit. ↕ para moverse y q para salir.

🎲

## 13. Git reset vs. Git rm

`Git reset` y `git rm` son comandos con utilidades muy diferentes, pero aún así se confunden muy fácilmente.

🔥 `git rm`      
Este comando nos ayuda a eliminar archivos de Git sin eliminar su historial del sistema de versiones. Esto quiere decir que si necesitamos recuperar el archivo solo debemos “viajar en el tiempo” y recuperar el último commit antes de borrar el archivo en cuestión.   

Este comando no puede usarse así nada más. Debemos usar uno de los flags para indicarle a Git cómo eliminar los archivos que ya no necesitamos en la última versión del proyecto:     

- `git rm --cached`: Elimina los archivos del área de Staging y del próximo commit pero los mantiene en nuestro disco duro.      
- `git rm --force`: Elimina los archivos de Git y del disco duro. Git siempre guarda todo, por lo que podemos acceder al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados).    

🔥 `git reset`      
Este comando nos ayuda a volver en el tiempo. Pero **_no como git checkout_** que nos deja ir, mirar, pasear y volver. Con `git reset` volvemos al pasado sin la posibilidad de volver al futuro. Borramos la historia y la debemos sobre escribir. No hay vuelta atrás.    

Este comando **_es muy peligroso_** y debemos usarlo solo en caso de emergencia. Recuerda que debemos usar alguna de estas dos opciones:

- `git reset --soft`: Borramos todo el historial y los registros de Git pero guardamos los cambios que tengamos en Staging, así podemos aplicar las últimas actualizaciones a un nuevo commit.       
- `git reset --hard`: Borra toda la información que tengamos en el área de staging (perdiendo todo para siempre). Toda la información de los commits y del área de staging se borra del historial.   

¡Pero todavía falta algo!    

- `git reset HEAD`: Este es el comando para sacar archivos del área de Staging. No para borrarlos ni nada de eso, solo para que los últimos cambios de estos archivos no se envíen al último commit, a menos que cambiemos de opinión y los incluyamos de nuevo en staging con `git add,` por supuesto.        

¿Por qué esto es importante? 🤔        

✨ Imagina el siguiente caso:       
Hacemos cambios en los archivos de un proyecto para una nueva actualización. Todos los archivos con cambios se mueven al área de staging con el comando git add. Pero te das cuenta de que uno de esos archivos no está listo todavía. Actualizaste el archivo pero ese cambio no debe ir en el próximo commit por ahora.       

¿Qué podemos hacer? 😵        

Bueno, todos los cambios están en el área de Staging, incluido el archivo con los cambios que no están listos. Esto significa que debemos sacar ese archivo de Staging para poder hacer commit de todos los demás.

💀 ¡Al usar `git rm` lo que haremos será eliminar este archivo completamente de git! Todavía tendremos el historial de cambios de este archivo, con la eliminación del archivo como su última actualización. Recuerda que en este caso no buscábamos eliminar un archivo, solo dejarlo como estaba y actualizarlo después, no en este commit. ☠❌💀

😊 En cambio, si usamos `git reset HEAD`, lo único que haremos será mover estos cambios de Staging a Unstaged. Seguiremos teniendo los últimos cambios del archivo, el repositorio mantendrá el archivo (no con sus últimos cambios pero sí con los últimos en los que hicimos commit) y no habremos perdido nada. 😄😊

**Conclusión:** Lo mejor que puedes hacer para salvar tu puesto y evitar un incendio en tu trabajo es conocer muy bien la diferencia y los riesgos de todos los comandos de Git. 🤩

🎲

## 14. Flujo de trabajo básico con un repositorio remoto

Por ahora, nuestro proyecto vive únicamente en nuestra computadora. Esto significa que no hay forma de que otros miembros del equipo trabajen en él.      

Para solucionar esto están los servidores remotos: un nuevo estado que deben seguir nuestros archivos para conectarse y trabajar con equipos de cualquier parte del mundo.

Pueden estar alojados en:       
- `GitHub`
- `GitLab`
- `BitBucket`
- Otros    

Estos servidores guardan el mismo repositorio que tienes en tu computadora, además brindan una URL con la que todos podremos acceder a los archivos del proyecto para descargarlos, hacer cambios y volverlos a enviar al servidor remoto para que otras personas vean los cambios, comparen sus versiones y creen nuevas propuestas para el proyecto.             

Esto significa que debes aprender algunos nuevos comandos:       

- `git clone url_del_servidor_remoto`: Nos permite descargar los archivos de la última versión de la rama principal y todo el historial de cambios en la carpeta .git.      

- `git push`: Luego de hacer `git add` y `git commit` debemos ejecutar este comando para mandar los cambios al servidor remoto.   

- `git fetch`: Lo usamos para traer actualizaciones del servidor remoto y guardarlas en nuestro repositorio local (en caso de que hayan, por supuesto).      

- `git merge`: También usamos el comando git merge con servidores remotos. Lo necesitamos para combinar los últimos cambios del servidor remoto y nuestro directorio de trabajo.      

- `git pull`: Básicamente, `git fetch` y `git merge` al mismo tiempo. ✨     


**Otros Comando**        
Algunos comandos que pueden ayudar cuando colaboren con **_proyectos muy grandes_** de GitHub:  

- `git log --oneline`: Te muestra el id commit y el título del commit.       
- `git log --decorate`: Te muestra donde se encuentra el head point en el log.      
- `git log --stat`: Explica el número de líneas que se cambiaron brevemente.     
- `git log -p`: Explica el número de líneas que se cambiaron y te muestra que se cambió en el contenido.    
- `git shortlog`: Indica que commits ha realizado un usuario, mostrando el usuario y el titulo de sus commits.     
- `git log --graph --oneline --decorate` y       
- `git log --pretty=format"%cn hizo un commit %h el dia %cd"`: Muestra mensajes personalizados de los commits.      
- `git log -3`: Limitamos el número de commits.     
- `git log --after=“2018-1-2”`,      
- `git log --after=“today`” y   
- `git log --after=“2018-1-2” --before=“toda y”`: Commits para localizar por fechas.    
- `git log --author=“Name Author”`: Commits realizados por autor que cumplan exactamente con el nombre.      
- `git log --grep=“INVIE”` - Busca los commits que cumplan tal cual está escrito entre las comillas.         
- `git log --grep=“INVIE” –i`: Busca los commits que cumplan sin importar mayúsculas o minúsculas.      
- `git log – index.html`: Busca los commits en un archivo en específico.     
- `git log -S “Por contenido”`: Buscar los commits con el contenido dentro del archivo.     
- `git log > log.txt`: Guarda logs en un archivo txt.  

> ![Flujo básico repo-remoto](https://i.postimg.cc/90d1P8mm/14-flujo-repo-remoto.png)

🎲

## 15. Introducción a las ramas o branches de Git

Las ramas son la forma de hacer cambios en nuestro proyecto sin afectar el flujo de trabajo de la rama principal (master/main). Esto porque queremos trabajar una parte muy específica de la aplicación o simplemente experimentar.        

**HEAD: Cabecera**      
La cabecera o HEAD representa la rama y el commit de esa rama donde estamos trabajando. Por defecto, esta cabecera aparecerá en el último commit de nuestra rama principal.  

**Crear ramas:** 🔥     
- `git branch nameBranch`: Crea una nueva rama desde el lugar que estas ubicado (master/main). Se copia el ultimo commit registrado en el repositorio. Todos los cambios que hagamos en esta rama no los va a ver la rama master/main hasta que la volvamos a fusionar con un `git merge`.    

**Cambia entre ramas:** 🔥      
- `git checkout nameBranch`      

¿Qué pasa al cambiar de rama? ✨       
Al movernos de una rama a otra los archivos se muestran según el estado de cada rama independiente.

🤘 `git checkout -b nameBranch`: Este comando es una fusión entre `git branch` y `git checkout` y crea una rama llamada `nameBranch` y a la vez hace un checkout de la rama `nameBranch`.


Tambien podemos movernos en el tiempo a cualquier otro commit de cualquier otra rama con los comandos:   
- `git reset id-commit` 
- `git checkout rama-o-id-commit`
 
📌 Cada vez que estés en una rama no olvidar realizar add o commit -am a los cambios realizados en cada rama correspondiente.   

📌 Al iniciar todo proyecto solo tenemos una rama llamada master o main, de donde parten las ramas que queramos hacer.  

> ![Branches](https://i.postimg.cc/dt8MBCJ3/15-branches-git.png)

🎲

## 16. Fusión de ramas con Git merge	

El comando `git merge` nos permite crear un nuevo commit con la **_combinación de dos ramas_** (la rama donde nos encontramos cuando ejecutamos el comando y la rama que indiquemos después del comando).

**Combinar dos Branches**      
🔥 Crear un nuevo commit en la rama master combinando los cambios de la rama development:    
1. `git checkout master`    
	- Cambia de rama y se ubica en master
2. `git merge development`    
	- Estando en master traemos el contenido de la rama development fusionando ambos contenidos. 

🔥 Crear un nuevo commit en la rama development combinando los cambios de cualquier otra rama:       
1. `git checkout development`  
2. `git merge cualquier-otra-rama`

📌 Para hacer un `merge` debemos estar ubicados en la rama de destino, para que todos los cambios se vayan ahí. Al fusionar estamos haciendo un nuevo commit así que deja un comentario.  
- Esc + Shift + zz     

✨ Asombroso, ¿verdad? Es como si Git tuviera super poderes para saber qué cambios queremos conservar de una rama y qué otros de la otra. El problema es que no siempre puede adivinar, sobre todo en algunos casos donde dos ramas tienen actualizaciones diferentes en ciertas líneas en los archivos. Esto lo conocemos como un conflicto y aprenderemos a solucionarlos en la siguiente clase.     

**Otros comandos**     
- `git branch`: Con esto sabes que ramas hay. La rama que se muestra de color con un	* indica que es la rama en la que estamos ubicados.        
- `git branch -v`: Muestra la última confirmación de cambios en cada rama.
- `git branch --merged`: Muestra las ramas que han sido fusionadas con la rama activa.        
- `git branch --no-merged`: Muestra todas las ramas que contienen trabajos sin fusionar.   
- `git log --oneline --graph --all`: Permite visualizar la estructura gráfica de las ramas.     
- `git branch -D "nameBranch"`: Permite eliminar ramas.   

📌 Recuerda que al ejecutar el comando `git checkout` para cambiar de rama o commit **_puedes perder el trabajo que no hayas guardado_**. Guarda tus cambios antes de hacer git checkout.❗❗❗	   

Página para practicar:      
[Learn Git Branching](https://learngitbranching.js.org/?locale=es_AR)

> ![Fusion branches](https://i.postimg.cc/fTLy5N42/16-fusion-branch.png)

🎲

## 17. Resolución de conflictos al hacer un merge

Git nunca borra nada a menos que nosotros se lo indiquemos. Cuando usamos los comandos `git merge` o `git checkout` estamos cambiando de rama o creando un nuevo commit, no borrando ramas ni commits (recuerda que puedes borrar commits con `git reset` y ramas con `git branch -d`).

Git es muy inteligente y puede resolver algunos conflictos automáticamente: cambios, nuevas líneas, entre otros. Pero algunas veces no sabe cómo resolver estas diferencias, por ejemplo, cuando dos ramas diferentes hacen cambios distintos a una misma línea.

Esto lo conocemos como conflicto y lo podemos **_resolver manualmente_**, solo debemos hacer el merge, ir a nuestro editor de código y elegir si queremos quedarnos con alguna de estas dos versiones o algo diferente. Algunos editores de código como Visual Studio Code nos ayudan a resolver estos conflictos sin necesidad de borrar o escribir líneas de texto, basta con presionar un botón y guardar el archivo.

**Resolver conflicto manualmente**      
1. `git checkout master`       
2. `git merge development`     
	- CONFLICTOS!!!          
	- Ahora  VSC nos pide elegir el cambio a aplicar.        
3. `HEAD (Current change)` / `Development Incomming Change`    
	1. Podemos conservar el cambio existente/actual o elegir el cambio entrante. Tenemos varias opciones a elegir.
	2. Control + s: Guardar cambios
4. `git commit -am "mensaje"`         

📌 Recuerda que siempre debemos hacer un nuevo `commit -am ""` para aplicar los cambios del merge. Si Git puede resolver el conflicto hará commit automáticamente. Pero, en caso de no pueda resolverlo, debemos solucionarlo y hacer el commit.

**Otros comandos útiles**      
- `git log --graph --decorate --oneline`     
- `git mergetool`: Arranca una herramienta visual en consola que permite resolver conflictos.
- `git merge --abort`: Comando para abortar la fusión en progreso, en caso no se pueda resolver los conflictos en ese momento.
- `git reset --merge HEAD`: Si hemos realizado un merge con una rama con la que queríamos.   

Los archivos con **conflictos por el comando** `git merge` entran en un nuevo estado que conocemos como **_Unmerged_**. Funcionan muy parecido a los archivos en estado Unstaged, algo así como **un estado intermedio** entre **_Untracked_** y **_Unstaged_**, solo debemos ejecutar `git add` para pasarlos al área de staging y `git commit` para aplicar los cambios en el repositorio.


🎲

## 18. Cambios en GitHub: de master a main

El escritor Argentino Julio Cortázar afirma que las palabras tienen color y peso. Por otro lado, los sinónimos existen por definición, pero no expresan lo mismo. Feo no es lo mismo que desagradable, ni aromático es lo mismo que oloroso.          

Por lo anterior podemos afirmar que los sinónimos no expresan lo mismo, no tienen el mismo “color” ni el mismo “peso”.       

Sí, esta lectura es parte del curso profesional de Git & GitHub. Quédate conmigo.      

Desde el 1 de octubre de 2020 GitHub cambió el nombre de la rama principal: ya no es `“master”` -como aprenderás en el curso- sino `main`.     

✨ Este derivado de una profunda reflexión ocasionada por el movimiento #BlackLivesMatter.

La industria de la tecnología lleva muchos años usando términos como master, slave, blacklist o whitelist y esperamos pronto puedan ir desapareciendo.   

Y sí, las palabras importan.    

Por lo que de aquí en adelante cada vez que escuches a Freddy mencionar “master” debes saber que hace referencia a “main”

Puedes leer un poco más aquí:     
[Cambios en GitHub: de master a main](https://platzi.com/blog/cambios-en-github-master-main/)


**Alternativas**    
Create a new repository on the command line        
![De amo a principal](https://i.postimg.cc/k5KL1p9H/18-master-main.jpg)     

or push an existing repository from the command line        
![Push main](https://i.postimg.cc/Gt7fT0J4/18-push-main.jpg)       

🎲

## 19. Uso de GitHub

`GitHub` es una plataforma que nos permite guardar repositorios de Git que podemos usar como servidores remotos y ejecutar algunos comandos de forma visual e interactiva (sin necesidad de la consola de comandos).

Luego de [crear nuestra cuenta](https://github.com/) , podemos:    
- Crear o importar repositorios
- Crear organizaciones y proyectos de trabajo
- Descubrir repositorios de otras personas
- Contribuir a esos proyectos
- Dar estrellas
- Muchas otras cosas.

El `README.md` es el archivo que veremos por defecto al entrar a un repositorio. Es una muy buena práctica configurarlo para describir el proyecto, los requerimientos y las instrucciones que debemos seguir para contribuir correctamente.    

🔥 **Clonar un repositorio desde GitHub**        
Para clonar un repositorio desde GitHub (o cualquier otro servidor remoto) debemos copiar la URL (por ahora, usando HTTPS) y ejecutar el comando `git clone "url-https"`. Esto descargara la versión de nuestro proyecto que se encuentra en GitHub.

Sin embargo, esto solo funciona para las personas que quieren empezar a contribuir en el proyecto. 

🔥 **Conectar repositorios**     
Si queremos conectar el repositorio de GitHub con nuestro repositorio local, el que creamos con `git init`, debemos ejecutar las siguientes instrucciones:     

**GitHub** :octocat:       
1. Crear un nuevo repositorio
	- Repository name: Hyperblog
	- Description: Un blog increíble 
	- Public
	- Initialize this repository with a README
	- CREATE REPOSITORY
2. Obtener URL del repositorio 
	- Code
	- Clone with HTTPS
	- Copiar URL

**Git**    
1. Guardar URL del repositorio de GitHub con el nombre de `origin` 
	- `git remote add origin "url"`
2. Verificar que la URL se haya guardado correctamente
	- `git remote`   
	- `git remote -v`
		- `v`: verbal 
1. Traer la versión del repositorio remoto y hacer merge para crear un commit con los archivos de ambas partes. Podemos usar `git fetch` y `git merge` o solo:   
	- `git pull origin master --allow-unrelated-histories`
		-  Control + shift + zz
1. Por ultimo, hacer `git push` para enviar y guardar los cambios de nuestro repositorio local en GitHub:   
	- `git push origin master`  

**GitHub** :octocat:    
Recargamos la web y podemos ver que todo se agregó   
- Podemos editar y hacer commits en la rama master/main
- Podemos ver el historial de commits, etc.

📌 Si hacemos cambios en GitHub debemos actualizar nuestro repositorio local con `git pull origin master`

🎲

## 20. Cómo funcionan las llaves públicas y privadas

Las llaves públicas y privadas nos ayudan a cifrar y descifrar nuestros archivos de forma que los podamos compartir sin correr el riesgo de que sean interceptados por personas con malas intenciones.      

> ![Private key and Public key](https://i.postimg.cc/N0rZ3Q2s/20-private-public-key.png)

**La forma de hacerlo es la siguiente:**
1. Ambas personas deben crear su llave pública y privada.
2. Ambas personas pueden compartir su llave pública a las otras partes (recuerda que esta llave es pública, no hay problema si la “interceptan”).
3. La persona que quiere compartir un mensaje puede usar la llave pública de la otra persona para cifrar los archivos y asegurarse que solo puedan ser descifrados con la llave privada de la persona con la que queremos compartir el mensaje.
4. El mensaje está cifrado y puede ser enviado a la otra persona sin problemas en caso de que los archivos sean interceptados.
5. La persona a la que enviamos el mensaje cifrado puede usar su llave privada para descifrar el mensaje y ver los archivos.

📌 Puedes compartir tu llave pública pero nunca tu llave privada.

✨ En la siguiente clase vamos a crear nuestras llaves para compartir archivos con GitHub sin correr el riesgo de que sean interceptados.

![Private key and Public key](https://i.postimg.cc/qRVW0W28/20-keys.png)

🎲

## 21. Configura tus llaves SSH en local

🔥 **Configuración local de Git**     
1. Usamos Email de GitHub   
	- `git config -l`
	- `git config --global user.email "algo@gmail.com"`

2. Generar llaves SSH: Protege tu llave privada con un passphrase (opcional).   
	- `ssh-keygen -t rsa -b 4096 -C "algo@gmail.com"`
> ![Llaves](https://i.postimg.cc/9F2bMYKZ/21-llave.webp)

✨ Ver las llaves creadas       
- `C:/users/oneuser/.ssh`

🔥 **Configurar S.O Windows - Linux**    
1. Revisar encender el servidor de llaves SSH de tu computadora
	- `eval $(ssh-agent -s)`

2.  Agregar llave privada al servidor
	- `ssh-add ~/.ssh/id_rsa`

📌 ~ alt + 126

🔥 **Configurar S.O MAC**    
- `cd ~`
- `ssh-keygen -t rsa -b 4096 -C "algo@gmail.com"`
- `eval "$(ssh-agent -s)"`

Si dentro de .ssh no existe el archivo config toca crearlo sin extensiones.
- `vim config` Esc + i    ...    Esc + Shift + zz
```
	Host *
		AddKeysToAgent yes
		UseKeychain yes
		IdentityFile ruta-donde-guardaste-tu-llave-privada
```
- `ssh-add -K ~/.ssh/id_rsa`

✨ [Tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

🎲
