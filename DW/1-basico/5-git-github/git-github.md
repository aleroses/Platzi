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
- [x] Git Bash Here
- [x] Use a TrueType font in all console windows
- [x] Check daily for Git for Windows updates
- Next (tres veces) ✔✔✔
- [x] Let Git Decide: Master
- [x] Git from the command line and also from 3rd-party software
- Next ✔
- [x] Use bundled OpenSSH
- [x] Use the Open SSL library
- Next ✔
- Checkout Windows-style, commit Unix-style line endings
- Next ✔
- Use MinTTY(the default terminal of MSYS2)
- Default (fast-forward or merge)
- Git Credential Manager 
- Next ✔
- [x] Enable file system caching 
- [x] Enable symbolic links
- Install

Una vez culminada la instalación, verificamos que git esta instalado:
- Abrimos Git Bash
- Ejecutamos el comando: `git --version`   
- Versión 17/10/2022: Git for Windows 2.38.0.windows.1 (64-bit)


Actualizar Git en Windows     
- `git update-git-for-windows`

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

Si quieres configurar un repositorio como local y agregar otro correo, debes [Leer esto](https://www.atlassian.com/es/git/tutorials/setting-up-a-repository#:~:text=Para%20crear%20un%20nuevo%20repositorio,tu%20directorio%20de%20trabajo%20actual.)      
- `git config --local user.email "email"`    

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

> ![Branches](https://i.postimg.cc/qMr060H6/15-2-Introducci-n-a-las-ramas-o-branches-de-Git.png)

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
- `git branch -D nameBranch`: Permite eliminar ramas.   

📌 Recuerda que al ejecutar el comando `git checkout` para cambiar de rama o commit **_puedes perder el trabajo que no hayas guardado_**. Guarda tus cambios antes de hacer git checkout.❗❗❗	   

Página para practicar:      
[Learn Git Branching](https://learngitbranching.js.org/?locale=es_AR)

> ![Fusion branches](https://i.postimg.cc/fTLy5N42/16-fusion-branch.png)

🎲

## 17. Resolución de conflictos al hacer un merge

Git nunca borra nada a menos que nosotros se lo indiquemos. Cuando usamos los comandos `git merge` o `git checkout` estamos cambiando de rama o creando un nuevo commit, no borrando ramas ni commits (recuerda que puedes borrar commits con `git reset` y ramas con `git branch -d branchName`).

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
	- `git remote add origin url`
2. Verificar que la URL se haya guardado correctamente
	- `git remote`   
	- `git remote -v`
		- `v`: verbal 
1. Traer la versión del repositorio remoto y hacer merge para crear un commit con los archivos de ambas partes. Podemos usar `git fetch` y `git merge` o solo:   
	- `git pull origin master --allow-unrelated-histories`
		-  Control + shift + zz
		- Alt + shift + zz
		- Esc + shift + zz
1. Por ultimo, hacer `git push` para enviar y guardar los cambios de nuestro repositorio local en GitHub:   
	- `git push origin master`  

**GitHub** :octocat:    
Recargamos la web y podemos ver que todo se agregó   
- Podemos editar y hacer commits en la rama master/main
- Podemos ver el historial de commits, etc.

📌 Si hacemos cambios en GitHub debemos actualizar nuestro repositorio local con `git pull origin master`

✨Para cambiar el nombre de un repositorio remoto, usar el siguiente comando: 

```bash
$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'
```

🚀 [Mira tus estadísticas](https://www.githubwrapped.io/)

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

En el entorno local vamos a crear una llave privada y una publica y una vez creada le vamos a enviar la llave publica a GitHub a tu repositorio.    

🔥 **Configuración local de Git**     
1. Usamos Email de GitHub   
	- `git config -l`
	- `git config --global user.email "algo@gmail.com"`

2. Generar llaves SSH: Protege tu llave privada con un passphrase (opcional).   
	- `ssh-keygen -t rsa -b 4096 -C "algo@gmail.com"`
> ![Llaves](https://i.postimg.cc/9F2bMYKZ/21-llave.webp)

📌 Si no pudieron crear su llave seguramente no se los permite por la falta de actualización del algoritmo rsa, actualmente pude crear la mía con esta nueva llamada ED25519.   
	- `ssh-keygen -t ed25519 -C "your_email@example.com"`

✨ Ver las llaves creadas       
- `C:/users/oneuser/.ssh`

🔥 **Configurar S.O Windows - Linux**    
1. Revisar encender el servidor de llaves SSH de tu computadora
	- `eval $(ssh-agent -s)`
- [x] Evalúa que un comando se dispare
- [x] Agent: Significa que el servidor SSH está corriendo 
- [x] PID: Process ID -> identificador del proceso
- [x] 1243: número que indica que el proceso está corriendo y todo está bien

> Esto básicamente es un programa que revisa que las llaves estén corriendo y que las conecta para hacer la **conexión doble** cuando nos conectemos a un servidor remoto, en este caso a GitHub.

2.  Agregar llave privada al servidor
	- `ssh-add ~/.ssh/id_rsa`

📌 ~ alt + 126:   
Símbolo llamado virgulilla que **en los sistemas operativos UNIX se refiere al valor de la variable $HOME , esto es, el directorio del usuario que está logueado**. Permite de esta forma referenciar ese directorio directamente, sin tener que escribir /home/usuario/ cada vez.

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
- [x] K: key change o algo así xd
- [x] De llegar a dar error solo quita -K

✨ [Tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)


**¿Por qué usar esto?** ❄        
Cuando te conectas a GitHub e ingresas tu usuario y contraseña, tienes dos problemas:    
- Que siempre tienes que estar haciéndolo 
- Siendo una conexión segura HTTPS, el usuario y contraseña se están guardando en el entorno local esto significa que si roban tu laptop o computadora, eres vulnerable a password cracking, a que crackeen la contraseña de tu repositorio y esto es muy problemático, porque si entran a tu código fuente pueden entrar a tu servidor o a tu mega proyecto, etc. 

> ![Keys](https://i.postimg.cc/q7nGffPV/21-SSH-en-local.png)  

Para evitar esto debemos agregarle una capa de seguridad mucho mas fuerte con llaves publicas y privadas.      

Esto no solo aumenta la seguridad sino que además ya no tienes que volver a colocar tu usuario y contraseña.     

✨ Las llaves SSH no son por repositorio ni por proyecto si no por persona.

📌 Cifrar disco usando BitLocker 

OJO: Si agregan una contraseña cuando les pide el ‘passphrase’ esto hará que siempre que hagan pull/push les pida esa misma contraseña. ❗❗❗    

Esto es muy tedioso, por lo que recomiendo poner una contraseña fácil o directamente no poner nada ya que con la configuración de la llave SSH es seguro de por sí.

🔥 Pero en el caso que si pusieron y quieren cambiarla o directamente eliminarla les comparto el siguiente comando:
- `ssh-keygen -f ~/.ssh/id_rsa -p`

Con esto pueden modificar la contraseña o no poner nada directamente.

🎲

## 22. Conexión a GitHub con SSH

Luego de crear nuestras llaves SSH podemos entregarle la llave pública a GitHub para comunicarnos de forma segura y sin necesidad de escribir nuestro usuario y contraseña todo el tiempo.

❄ **Añadir llave pública en GitHub**     
Para esto necesitas copias la **llave pública** de tu computadora    
- C:/users/oneuser/.ssh

Luego:
- Ir al perfil de GitHub :octocat:   
	- Settings
	- SSH and GPG Keys
	- New SSH Key 🟩
		- Title: Laptop de educación de Platzi
		- Key: Pegar llave
		- Add SSH key

❄ **Obtener URL SSH**    
- En GitHub :octocat:    
	- Your repositores 
	- Hyperblog 
	- Code: 🟩 Clone
	- SSH -> Copiar

🔥 **Actualizar URL de HTTPS a SSH**    
Ahora podemos actualizar la URL que guardamos en nuestro repositorio remoto, solo que, en vez de guardar la URL con HTTPS, vamos a usar la URL con SSH:
- Dentro de nuestro proyecto
- `git remote -v`
- `git remote set-url origin url-ssh-repo-de-github`
	- origin es un estándar de la industria y perfectamente se puede colocar otro nombre. Esto también sirve si deseas cambiar la URL por otra. 


📌 Si es la primera vez que añades una URL utiliza el comando:     
**Ver tema: 19 y 21**     
- `git remote add origin url`


🔥 **Verificar que funciona**    
- Hacer cambios en el proyecto
- Antes de hacer un `commit` debemos traernos la ultima version del servidor GitHub  
- `git pull origin master`
	- origin es el nombre del repositorio remoto
	- Este comando trae los cambios del repositorio remoto y los fusiona con la rama actual master
- `git status` 
- `git diff`
- `git commit -am "Una versión del HiperBlog"`
- Ahora, antes de enviar los cambios al repositorio remoto debemos hacer un `git pull`. En caso de que alguien haya hecho cambios y así no tener conflictos.
- `git pull origin master`
- `git push origin master`

❄ **Verificamos en GitHub** :octocat:     
Your repositories   
- hyperblog
	- blogpost.html
		- Vemos los cambios
		- History

### Conexión a una segunda cuenta de GitHub

Si tengo una máquina (PC, Laptop) que ya está conectado con una cuenta de GitHub y ya tiene una llave SSH, no podre usar esta misma llave SSH en otra cuenta de GitHub, ya que las llaves SSH no son por repositorio ni por proyecto sino por máquina. 

La única manera de enviar proyectos a una nueva cuenta de GitHub es usando HTTPS y no SSH como hubiera preferido. Solo debo configurar Git de manera local de la siguiente manera:  

```bash
✨ git config --local user.name "[Tu segundo nombre]"
✨ git config --local user.email "[Tu segunda dirección de correo electrónico]"
```

📌 Nota: Usamos `--local` porque `--global` ya lo tiene la cuenta principal.

🎲

## 23. Tags y versiones en Git y GitHub

Los tags o etiquetas nos permiten asignar versiones a los commits con cambios más importantes o significativos de nuestro proyecto.

**Revisar la historia del proyecto**   
- `git log`   
- `git log --all`   
- `git log --all --graph`  
- `git log --all --graph --decorate --oneline`  

🔥 **Comandos para trabajar con etiquetas:**     
- `git tag` o `git show-ref --tags`
	- Listar los tags de nuestro repositorio local.
	- Saber a que hast o a que commit está conectado un tag
	- Nos muestra el tag llamado v0.1 que está asignado a un commit
- `git tag -a nombre-del-tag id-del-commit`
	- Crear un nuevo tag y asignarlo a un commit
	- `git tag -a version0.1 -m "Resultados" 1fc92a796e58f4b9f`
		- -a: Add agregar
		- version0.1: Nombre asignado al tag
		- 1fc92a796e58f4b9f: Hast, commit que obtenemos usando el comando git log, en el punto que queramos que sea el final de la versión.
- `git tag -d nombre-del-tag`
	- Borrar un tag en el repositorio local:
- `git push origin --tags`  
	- Publicar un tag en el repositorio remoto
	- Primero hacer git pull antes de enviar algo a GitHub
- `git tag -d nombre-del-tag` y `git push origin :refs/tags/nombre-del-tag`
	- Borrar un tag del repositorio remoto

❄ **Revisamos en GitHub** :octocat:     
Your repositories     
- Proyecto Hyperblogs
	- master >> branch >> tag

🔥 **Crear alias**    
Temporal:    
- `alias arbolito="git log --all --graph --decorate --oneline"`   

Permanente: Para un proyecto:       
- `git config alias.arbolito "log --all --graph --decorate --oneline"`

Permanente: Global:     
- `git config --global alias.arbolito "log --all --graph --decorate --oneline"`

Para correrlo:        
`arbolito` or `git arbolito` Ahora cada vez que escribamos arbolito ejecutara el comando `git log --all --graph --decorate --oneline` 

📌 Comando que permite guardar alias solo para git. con esto se puede ejecutar cada que se escribe git arbolito
- `git config --global alias.arbolito "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"`

🎲

## 24. Manejo de ramas en GitHub

Puedes trabajar con ramas que nunca envías a GitHub, así como pueden haber ramas importantes en GitHub que nunca usas en el repositorio local. Lo importante es que aprendas a manejarlas para trabajar profesionalmente.

🔥 **Crear una rama en el repositorio local:**
- `git checkout master`
	- Nos ubicamos en alguna rama para hacer una copia del ultimo commit en otra rama.
- `git branch branchNameaCrear` o `git checkout -b branchNameaCrear`
- `git branch`  
- `git checkout oldName` y `git branch -m newName`
	- Cambiarle el nombre a la rama

🔥 **Publicar una rama local al repositorio remoto:**
- `git checkout branchName`
- `git push origin branchName`
	- Agrega la historia de las ramas a GitHub
- `git push origin --delete branchName`
	- Borra la rama de GitHub

🔥 **Comandos para manejar ramas**   
- `git show-branch`
- `git show-branch --all`
	- Muestra las ramas existentes
	- Muestra mas o menos la historia mas reciente de cada rama
- `gitk`
	- Software que muestra la historia de manera visual 

📌 Recuerda que podemos ver gráficamente nuestro entorno y flujo de trabajo local con Git usando el comando gitk.

📌 En caso crees nuevas ramas en local, estas aún no existen en GitHub por ende, no se hace un pull para traer los cambios que se le pudieron hacer a estas ramas.        
En otros casos se hace pull porque las ramas ya están en GitHub y se necesita hacer un pull para traer posibles cambios hechos por otros desarrolladores sobre estas ramas.

[Más info](https://www.hostinger.co/tutoriales/renombrar-rama-git)

🎲

## 25. Configurar múltiples colaboradores en un repositorio de GitHub :octocat:

Por defecto, cualquier persona puede clonar o descargar tu proyecto desde GitHub, pero no pueden crear commits, ni ramas, ni nada.    

Existen varias formas de solucionar esto para poder aceptar contribuciones. Una de ellas es añadir a cada persona de nuestro equipo como colaborador de nuestro repositorio.    

Solo debemos entrar a la configuración de colaboradores de nuestro proyecto (Repositorio > Settings > Collaborators) y añadir el email o username de los nuevos colaboradores.    

❄ **Añadir colaboradores** :octocat:       
Como dueño del proyecto desde tu cuenta debes dar acceso al nuevo colaborador del proyecto en GitHub para que pueda hacer push.    
- Your repositories 
	- Hyper blogs (project)
	- Settings ⚙ (Del proyecto, no de la cuenta)
	- Collaborators 🧑‍🤝‍🧑
	- Add people 🟩
	- Usar correo o user name del colaborador 
- El colaborador debe revisar su correo y aceptar la invitación. 

📌 Para hacer pruebas necesitas:
- Otro correo y cuenta en GitHub
- Crear una maquina virtual 
- Configurar entorno virtual 
	- Instalar git (05)
	- Configurar git bash (08)
	- Crear repositorio (08)
	- Configurar llaves SSH (21 - 22)
- Crear carpeta para pruebas
	- En el Home o ~
	- mkdir proyecto-colaborativo
	- cd proyecto-colaborativo/

❄ **Clonar proyecto** :octocat:     
Visitar Hyperblog con otro usuario     
- https://github.com/freddier/hyperblog/
- Hyperblog
	- Code > Clone SSH > copiar URL SSH

🔥 **En Git Bash - Consola**      
- `git clone url-ssh`

🔥 **Enviar cambios a GitHub siendo colaborador**     
- `vim algo.txt`
- `git commit -am "Mi primer commit"`
- `git pull origin master`
- `git push origin master`

✨ Ahora el dueño del proyecto puede traer los cambios hechos por el colaborador a la rama master   
- `git pull origin master`

La diferencia entre este usuario y el resto, es que este usuario que colaborará con el proyecto no hará un `git init` porque solo se quiere traer el repositorio.    

✨ Ahora debemos dividir el trabajo en ramas y al final hacer un merge a master cuando todo esté listo.   

🎲

## 26. Flujo de trabajo profesional: Haciendo merge de ramas de desarrollo a master

🔥 **Branch Header: Jefe** 🤴🦁      
- Envío de cambios al repositorio local        
	- `git checkout header`
		- Hacemos cambios a los archivos
	- `git arbolito` 
	- `git status / git diff`
	- `git commit -am "Mensaje de referencia"`

- Envío de cambios al repositorio remoto        
	- `git pull origin header`
	- `git push origin header`

❄ **Branch Footer: Colaborador** 🧔🐯
-   Traer de internet rama footer
    -   `branch master`
    -   `git pull origin footer`
    -   `git branch`
-   Trabajamos sobre la rama footer
    -   `git checkout footer`
        -   `ls -al`
        -   Hacemos cambios a los archivos 
    -   `git status`
-   Enviamos cambios al repositorio local
    -   `git commit -am "Footer terminado"`
    -   `clear`
-   Envío de cambios al repositorio remoto
    -   `git pull origin footer`
    -   `git push origin footer`

🔥 **Branch Master!!!: Jefe** 🤴🦁
-   Revisamos cada rama y su estado en la web
    -   Abrimos los archivos con el navegador
    -   `git checkout master`
    -   `git checkout header`
    -   `git checkout footer`
        -   Esto está desactualizado
	    -   `git pull origin footer`

✨ **¿Y después?**      
El jefe del proyecto debe fusionar las ramas en Master
-   Fusionar ramas
    -   `git checkout master`
    -   `git merge header`
    -   Esc + i -> Agregamos un comentario relacionado - Nuevo logo, color de fondo y header final
    -   Esc + shift + zz
    -   `git merge header`
-   Enviar cambios a GitHub
    -   `git pull origin master`
    -   `git push origin master`

A master solo se envía lo que se esta seguro que está listo para ir a  producción, es una buena practica.

> ![Flujo en ramas](https://i.postimg.cc/y8LjDHWt/26-flujo-ramas.png)


📌 Imágenes en GitHub:     
Las mejores practicas dicen que no se debe agregar imágenes (binarios) a GitHub.
-   Son mas pesada que el texto y vuelve mas pesado mi repositorio.
-   GitHub no muestra los cambios en tiempo real, porque en ocasiones no actualiza su versión en cache, aún así todo está ok.

Solución:
-   Control + shift + r


✨ Otros recursos necesarios para preparar todo en Ubuntu   

🔥 **Instalar VS Code en Ubuntu**
- Como un paquete Snap
	- Los snaps son paquetes de software autónomos que incluyen el binario de todas las dependencias necesarias para ejecutar la aplicación. Los paquetes Snap son fáciles de actualizar y seguros.
- Para instalar VS Code abrimos una terminal (Ctrl+Alt+T)
	- `sudo snap install --classic code`

- Como paquete .deb utilizando apt
	- Repositorios oficiales de Microsoft
	- `sudo apt update; sudo apt install software-properties-common apt-transport-https wget`
	- `wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -`
	- `sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"`
	- `sudo apt install code`
	- `sudo apt update; sudo apt upgrade`


🔥 **Limpiar cache APT Ubuntu**      
- `sudo apt clean`


🔥 **Virtual box pantalla completa**    
- Iniciar maquina virtual
- Dispositivos
	- Insertar imagen de CD de las "Guest Additions"
	- Ejecutar (run)
	- Contraseña
		- En consola enter 
- Abrir una terminal
	- `reboot`
	
- Una vez reiniciado ubuntu
- Clic derecho
- Configuración de pantalla
	- Resolución Elegir resolución 


🔥 **Resolver error Guest Additions**    
C:\Program Files\Oracle\VirtualBox\VBoxGuestAdditions.iso
- Archivo -> cerrar -> apagar la maquina -> aceptar
- En Interfaz de Virtual Box
- Ubuntu
- Almacenamiento 
	- Unidad óptica
-  Eliminar disco de la unidad virtual
- Iniciar nuevamente la maquina ubuntu


🔥 **Solución Reproducción de Video Ubuntu**    
- `sudo apt install vlc`

También:      
- Settings de Firefox
- General
	- Digital Rights management (DRM) Content
	- Contenido sujeto a administración de derechos de autor(DRM)
	- Activar

Además
- Revisar la Configuración de la Protección contra rastreo de Firefox
- Icono de escudo en la pagina que estoy visitando
- Deshabilitar para esta sesión 

🎲

## 27. Flujo de trabajo profesional con Pull requests

En un entorno profesional normalmente se bloquea la rama master, y para enviar código a dicha rama pasa por un `code review` y luego de su aprobación se unen códigos con los llamados `merge request`.   

Para realizar pruebas enviamos el código a servidores que normalmente los llamamos `staging develop` (servidores de pruebas) luego de que se realizan las pruebas pertinentes tanto de código como de la aplicación estos pasan a el servidor de producción con el ya antes mencionado merge request.  

> ![Flujo Pull request](https://i.postimg.cc/JnKMgxq9/27-flujo-pull-requests.png)

❄ La forma en la funciona en el mundo real, en el mundo de la programación profesional es la siguiente:  

Imagina que tienes una rama master, la rama principal. Lo mas importante de esta rama es que es desde aquí que se envía todo al servidor remoto, al servidor real de producción, donde se alojara la versión final.   

A veces tenemos que hacer pruebas en entornos que se parezcan al de producción sin que afecte a los usuarios.   

Esos tipos de servidores se llaman servidores de desarrollo o servidores de staging. No confundir con staging, el area intermedia antes de enviar todo al repositorio local con un commit.
Son distintos una cosa es staging para el desarrollo y otra es staging dentro de git.    

Staging en los servidores de desarrollo son ramas que es lo que está justo antes de master y justo aquí está el servidor de pruebas y se parece tanto como sea posible al servidor real.   

❄ Esto funciona de la siguiente manera:   
- Creamos una rama especial donde se va a tener lo que sea que se esta desarrollando que es la rama de feature o la rama de característica en nuestro caso creamos una para el header y otra para el footer y se desarrollo en el area local normal de toda la vida y luego envían la ultima version de esa rama a staging para hacerle un merge a la ultima version de staging.

- En teoría staging y master siempre deberían estar actualizados y esto es trabajo del líder de equipo pero asumiendo que están actualizados esto se llamaría normalmente merge pero resulta que el merge no es la forma correcta de hacerlo porque en un entorno profesional hay que revisar el código, entonces esto va a un lugar intermedio que se conoce como pull request, un pull request es básicamente un estado intermedio antes de enviar el merge.

- Lo que el pull request me permite es que otros miembros del equipo puedan ver los cambios que tu hiciste y si les gusta aprobarlos y al aprobarlos se auto ejecuta el merge en staging.

- Igualmente una vez tu pruebas en staging lo que quieres hacer es fusionar los cambios con la rama maestra entonces haces también un pull request.

- El pull request no es una característica de git sino de GitHub.

- El pull request es importante porque le permite a personas que no son colaboradores trabajar y apoyar en una rama.

- La persona que hace todo lo antes descrito son los lideres de equipo o un perfil muy especial llamado DevOps que es un administrador del entorno de desarrollo que hace que toda la vida del programador sea mucho mas fácil y que los equipos de trabajo trabajen de una manera mas efectiva.

✨ **Aportes de compañeros**   
🔥 **DevOps**      
El término “DevOps” es una combinación de las palabras “development” (desarrollo) y “operations” (operaciones), DevOps incluye sistemas de seguridad, maneras de trabajar en colaboración, análisis de datos, entre otras características.      

DevOps describe los enfoques para agilizar los procesos con los que una idea (como una nueva función de software, una solicitud de mejora o una corrección de errores) pasa del desarrollo a la implementación, en un entorno de producción en que puede generar valor para el usuario.     

🔥 **Pull request**     
Acción de validar un código que se va a mergear de una rama a otra. En este proceso de validación pueden entrar los factores que queramos: Builds (validaciones automáticas), asignación de código a tareas, validaciones manuales por parte del equipo, despliegues, etc.   

🎲

## 28. Utilizando Pull Requests en GitHub

🔥 **Git - Jefe** 🤴🦁         
- Branch Master
	-   `git pull origin master`
	-   `git branch fix-typo`
	-   `git branch`

- Branch fix-typo
	-   `git checkout fix-typo`
	-   Corregir algo.txt
	-   `git status`
	-  `git diff`

- Enviar cambios al repositorio local
	-   `git commit -am "Correccion hecha -Tildes"`

- Enviar cambios a GitHub
	-   `git push origin fix-typo`


❄ **GitHub - Jefe** 🤴🦁    
- Fusionar/Comparar Master con fix-typo (Manual)
	-   Repositorio -> hyperblog
	    -   New `Pull request`
	    -   Base: Master <- Compare: Fix-typo

- Comparar Master con Fix-typo (Automático)
	-   Repositorio -> hyperblog
	    -   Compare & pull request
	    -   Write: No debimos pasar este error.
	    -   Reviewers: Alien11
	    -   Create pull request


❄ **GitHub - Colaborador** 🧔🐯   
- Repositorio -> hyperblog
	-   Pull request
	-   Dismiss
	-   Corrección hecha -Tildes
	-   Freddier pide tu revision de este pull request
	-   Freddy quiere fusionar un commit hacia master de su rama fix-typo
	-   Commits
	-   Files changed
	-   Review changes
	    -   Write: Mejor usa tildes directas (entidadHTML)
	    -   Request changes
	    -   Submit review


❄ **GitHub - Jefe** 🤴🦁     
- Notificación new
	-   Tildes y tipos arreglados
	-   Aún no podemos hacer merge, el colaborador está pidiendo cambios


🔥 **Git - Jefe** 🤴🦁         
- Branch fix-typo
	-   `git pull origin fix-typo`
	-   Corregir blogpost.html
	-   `git status`
	-   `git commit -am "Cambio a entidades HTML"`
	-   `git push origin fix-typo`


❄ **GitHub - Jefe** 🤴🦁     
- Hyperblog -> Branch fix-typo
	-   View #1
	-   files changed
	-   Conversation
	-   Write: Cambios hechos, por favor hazme el merge
	-   Comment


❄ **GitHub - Colaborador** 🧔🐯   
- Hyperblog
	-   Pull requests
	-   Tildes y typos arreglados en el post
	-   Files changed 1
	-   Review changes
	    -   Write: Excelente. Eso era!
	    -   Approve
	    -   Submit review

- Fusionar la rama fix-typo con master - Ejecutar el merge
	-   Merge pull request
	-   Confirm merge

- Borrar branch Fix-typo
	-   Delete branch: lo elimina de GitHub

- Hyperblog -> master
	-   Todo bien


🔥 **Git - Jefe** 🤴🦁     
- Branch fix-typo
	-   `git pull origin fix-typo`
	    -   No la encuentra porque la rama fue borrada
	-   `git checkout master`
	-   `git pull origin master`
	-   `git log`
	-   `git arbolito`


📌 Compare&pull request   
Esto se vuelve útil en el proceso de DevOps.
[¿Qué es DevOps? (platzi.com)](https://platzi.com/blog/que-es-devops/)           
-   Reviewers: Personas que pueden revisar esto.
-   Labels: Crear etiquetas.
-   Projects: Formas de agrupar repositorios dentro de GitHub.
-   Milestone: Significa que se tenia un objetivo y se logró.

📌 Pull request     
El pull request no ejecuta el merge de por sí, simplemente describe lo que está pasando.         
Los pull request de lado de git no existen, solo existen en GitHub.


📌 ¿Quién debe ejecutar el merge?      
Lo puede hacer tanto el colaborador como el jefe del proyecto.  



✨ **Flujo de un pull request: Resumiendo**
🔥 En Git:    
-   Los cambios se trabajan en una rama paralela (`git checkout -b rama`)
-   Se hace un commit a la rama (`git commit -am "Mensaje"`)
-   Se suben al remoto los cambios (`git push origin rama`)

❄ En GitHub:   
-   Se hace el pull request comparando las ramas master y fix-typo.
-   Uno, o varios colaboradores revisan que el código sea correcto y dan feedback (en el chat del pull request)
-   El colaborador hace los cambios que desea en la rama y lo vuelve a subir al remoto (automáticamente jala la historia de los cambios que se hagan en la rama, en remoto)
-   Se aceptan los cambios en GitHub
-   Se hace merge a master desde GitHub

📌 **Importante:** Al modificar una rama, también se modifica el pull request.

> ![Pull Requests](https://i.postimg.cc/cJjHXhXX/28-github-pr.webp)

📌 Referencias
https://platzi.com/blog/que-es-devops/
https://platzi.com/servidores/


✨ Otros recursos necesarios para preparar todo en Ubuntu     
🔥 **Instalar Edge en Ubuntu**   
Método 1
1. Instalar Microsoft Edge en el escritorio Ubuntu 20.04 LTS
https://www.microsoftedgeinsider.com/en-us/

2. Instalar programa para instalar
- sudo apt install gdebi
- gdebi
- gdebi-gtk
- archivo -> abrir -> Esperamos -> instalar paquete

🎲

## 29. Creando un Fork, contribuyendo a un repositorio

❄ **GitHub - Dueño** 🤴🦁     
- Eliminar colaborador
	-   Your repositories
	-   hyperblog
	-   Settings
	-   Manage access
	-   Collaborators -> 🚮

📌 Ahora solo puede clonar el repositorio pero no puede hacer push de ningún tipo, no puede crear ramas ni tags. Tambien puede copiar el proyecto y decirnos quiero hacer estos cambios por favor fusiónelo 

❄ **GitHub - Colaborador** 🧔🐯   
- Seguir y aportar a un proyecto
	-   https://github.com/freddier/hyperblog
	-   hyperblog
	    -   Dueño/hyperblog
	    -   Watch -> All Activity
	    -   Star (Unstar)

- Clonar proyecto
	-   Fork
	-   Colaborador/hyperblog
	    -   30 Commits << Back
	    -   1 release << Back
	    -   Contributors

- Obtener URL SSH
	-   Colaborador/hyperblog
	    -   Code -> Clone
	    -   Copiar llave SSH

📌 Fork: Tenedor, es cuando se tienen dos caminos y se puede elegir entre cualquiera de esos dos. En este caso hacer un fork es tomar una copia del estado actual del proyecto y clonarlo y lo clono como un proyecto mío. Característica única de GitHub.

🔥 **Git - Colaborador** 🧔🐯   
- Clonar proyecto
	-   `cd cursos`
	    -   `git clone URL SSH`
	    -   `ls -al`
	    -   `cd hyperblog/`
	    -   `ls -al`
	    -   `git status`
	    -   Hacer cambios blogpost.html historia.txt
	    -   `git status` >> `git diff`
	    -   `git commit -am "Tildes"`
	    -   `git status`
	    -   `git push`


❄ **GitHub - Colaborador** 🧔🐯  
- Vemos los cambios
	-   Colaborador/hyperblog

- Crear pull request y merge
	-   Pull requests
	-   new pull request
	    - base repository: Dueño/hyperblog 
	    - base: master <--
	    - head repository: Colaborador/hyperblog
	    - compare: master
	    -   Split : Unified
	    -   Create pull request
	    -   Write: Mejoras project
	    -   Create pull request

⏳⏰ Ahora el colaborador debe esperar a que el dueño haga los cambios. 


❄ **GitHub - Dueño** 🤴🦁    
- github.com -> home
	-   Notificaciones
	-   Dueño/hyperblog : Alguien le hizo un pull request
	-   Colaborador quiere fusionar 1 commit a mi rama master desde su rama master
	-   Commits
	-   Pull requests
	    -   Tildes con entidades
	    -   Files changed
	    -   Viewed: Check
	-   Review changes
	    -   Write: ok
	    -   Approve
	    -   Submit review
	-   Merge pull request
	-   Confirm merge
	
	- Ver cambios
		-   Dueño/hyperblog
		-   Commits -> branch master


🔥 **Git - Dueño** 🤴🦁     
- En master
	-   `git status`
	-   Hacer cambios en blogpost.html
	-   `git status`
	-   `git commit -am "Cambios"`
	-   `git pull origin master`
	-   `git arbolito`
	-   `git push origin master`

- Revisar en GitHub -> Master
	-   Dueño/hyperblog


❄ **GitHub - Colaborador** 🧔🐯  
- Colaborador/hyperblog
	-   branch master
	-   This branch is 3 commits behind freddier:master -> Compare

- Copiar URL SSH
	-   Dueño/hyperblog
	    -   Branch Master
	    -   Code -> Clone
	    -   Use SSH

- `Pull request` desde la consola


🔥 **Git - Colaborador** 🧔🐯   
- Crear otra fuente para hacer pull
	-   `cd hyperblog`
	-   `branch master`
	-   `git remote -v`

- Crear conexión a otro repo
	-   `git remote add upstream URL SSH`
	-   `git remote -v`

- Traer cambios del master del Dueño (remoto)
	-   `git pull upstream master`
	-   `git status`
	-   `git commit -am "Fusion"`
	-   `git push origin master`

- Revisar Colabordor/hyperblog

✨ ¿Forks/Bifurcaciones?     
Es una característica única de GitHub en la que se crea una copia exacta del estado actual de un repositorio directamente en GitHub, éste repositorio podrá servir como otro origen y se podrá clonar (como cualquier otro repositorio), en pocas palabras, lo podremos utilizar como un git cualquiera.

✨Trabajando con varios repositorios remotos     
Cuando trabajas en un proyecto que existe en diferentes repositorios remotos (normalmente a causa de un fork) es muy probable que desees poder trabajar con ambos repositorios, para esto puedes crear una conexión remoto adicional desde consola.     
-  `git remote add <nombre_del_remoto> <url_del_remoto>`
-   `git remote upstream https://github.com/freddier/hyperblog`

Al crear un remoto adicional podremos, hacer pull desde el nuevo origen (en caso de tener permisos podremos hacer fetch y push).     
-   `git pull <remoto> <rama>`
-   `git pull upstream master`

Éste pull nos traerá los cambios del remoto, por lo que se estará al día en el proyecto, el flujo de trabajo cambia, en adelante se estará trabajando haciendo pull desde el upstream y push al origin para pasar a hacer pull request.       
-   `git pull upstream master`
-   `git push origin master`

> ![Fork](https://i.postimg.cc/65KRWMH1/29-fork.png)

📌 git push:     
En ocasiones solo se tiene un lugar que es el origin y el master, no necesito colocar git push origin master.

📌 Proyectos Open Source:      
Cualquier persona que le guste el proyecto...         
Puede:
-   Clonar el repositorio
-   Solicitar un merge al dueño del repositorio

No puede:      
-   Hacer push de ningún tipo
-   Crear ramas, ni tags

📌 Compare across forks:       
Muestra las diferencias entre el master original y mi copia.    
`Mensaje en GitHub:` Escoge las dos ramas para saber que cambió y empezar un nuevo pull request: `Compare across forks`     

🎲

## 30. Haciendo deployment a un servidor	

En esta clase aprenderemos como hacer deploy de nuestra aplicación utilizando un servidor.     

No te preocupes si no has comprado un servidor, no es necesario, puedes instalar un servidor local en tu computadora para realizar pruebas y testear tu aplicación.

En Platzi tenemos una carrera de servidores que te va a ayudar a automatizar mucho más estas tareas:      
- Para entender como hacer estos servidores [Curso de Administración de servidores](platzi.com/servidores)
- Curso de DevOps 

**Deploy** es el proceso que permite enviar al servidor uno o varios archivos. Este servidor puede ser de prueba, desarrollo o producción.   

En el siguiente ejemplo veremos cómo se realiza el deployment de un documento en un servidor web básico.


🔥 **Pasos para hacer deployment en un servidor web:**    
-   Entrar a la capeta de los archivos del servidor.
-   Copiar link en _clone_, elegir entre HTTPS o SSH del repositorio a contribuir.  
- En la carpeta deseada se clona el repositorio:

```
git clone url
Deploy:
```

-   Realizar cambios y _commit_ en GitHub.
-   Traer al Repositorio local las actualización para el servidor en la capeta de los archivos del servidor.

```
git pull ramaRemota main
```

📌 Nota: Siempre se debe proteger el archivo .git. Dependiendo del software para el servidor web, existen diferentes maneras. La conexión entre GitHub y el servidor se puede realizar mediante: Travis (pago) o Jenkis (Open source).

Aporte creado por: Brayan Mamani, chedl


✨ Apuntes de la clase    
Freddie menciona que normalmente la rama master es la que se envía al servidor de producción, depende del flujo de trabajo de cada persona.     
Ejemplo:       
- Hay grupos de trabajo que lo que hacen es colocar tags a la rama que se envía a producción y eso se envía a producción.

La forma de enviar a producción es similar a como hemos venido trabajando.        

❄ En GitHub:     
- freddier/hyperblog 
	- Sabiendo que se tienen varios archivos …
- En la web:
	- freddier.com
	- Ahora lo que vamos a hacer es ingresar a una URL en la web freddier.com Este es un servidor que Freddie compró hace algún tiempo pero tu puedes tener y usar tu propio servidor.    

Aquí asumimos que ya sabes como montar un servidor en Linux y en ese servidor voy a entrar a la carpeta donde tenemos los archivos.   


🔥 En Git:   
- `cd /var/www/freddier.com/html/`
- `ls -al`
- Archivos index.html y test.html
- `cat index.html`: Solo es un test del sistema
- `cat text.html`: Es una prueba
	
En la Web:         
- Si ingreso a freddier.com/test.html
	- Texto: Es una prueba

Todo lo anterior es un servidor en nginx que Freddie configuró en un proveedor de cloud que había consumido antes. No se estresen por eso!!!	


❄ En GitHub:       
- Copiar URL para conectar en local
	- Code -> Clone -> Copiar SSH


🔥 En Git:    
- Traer a local el repositorio de GitHub
	- `git clone URL SSH`
	- `ls -al`

En la web
- www.freddier.com/hyperblog/blogpost.html
	- Nos muestra la web creada con html y CSS


❄ En GitHub:          
- Hacer cambios en:
	- blogpost -> edit
	- `<h1> Aqu&iacute; inicia la historia de un gran proyecto </h1>`
	- Commit changes
		- Título: Cambio del título visible para probar un deploy
	- Commit directly to the master branch
	- Commit changes
	- Home hyperblog: Vemos los cambios


🔥 En Git:       
Traemos los cambios hechos en GitHub para poder ver los en el navegador.
- cd hyperblog/
- ls -al
- git status
	- Your branch is up to date with 'origin/master'
- git pull origin master
- Ahora ya vemos los cambios en la web
- ls -al

📌Esta es una forma sencilla de hacer un Deployment. El problema con esto es que no es una buena practica, porque alguien podría tener acceso al archivo .git y a toda nuestra base de datos de cambios, entonces, tenemos que proteger el .git . Si usas apache hay unas formas, o nginx hay otras. Esto lo aprendes en la carrera de administración de servidores

✨ Formas avanzadas de hacer Deployment      
Existe una pagina llamada travis-ci.org es como un GitHub que conecta automáticamente tus ramas de GitHub con tus servidores. Solo le das permisos a tu servidor, permisos de GitHub y cuando le haces push a una rama ejemplo llamada deployment, automáticamente detecta esto y lo va a enviar.    

Por ejemplo: Si tienes código que tiene que ser construido como un JavaScript que tiene que tener procesos o un CSS, automáticamente puede disparar esos procesos.           

Travis cuesta dinero a menos que lo estés usando para proyectos open source, pero si tu quieres instalar uno tienes Jenkins.io esto es otro sistema, es poderoso pero es muy complejo y esto lo enseñan en cursos de integración continua. El curso de GitLab te enseña a profundidad estas cosas.       

🎲

## 31. Hazme un pull request

Aviso importante del Team Platzi

¡Muchas gracias por tu participación en este reto! Hasta agosto de 2020 hemos procesado 1.269 pull requests en el repositorio del curso. Ahora hemos decidido cerrar este experimento, por lo que no seguiremos aprobando nuevos PRs. ¡Pero no te desanimes! Aún así te animamos a completar y enviar tu solución a este desafío para poner en práctica todo lo que has aprendido.

Queremos que uses las habilidades ya aprendidas para aplicarlas en esta clase. Haz un fork de el repositorio de GitHub y realiza las tareas que te indicaremos en esta clase. Ojo, debes seguir las reglas e instrucciones que se dieron en el video.

Regla a seguir:

Dentro del ID “post” luego de “suscribete y dale like” agrega otra línea o párrafo con tu nombre o tu nombre de usuario en Platzi.
¡Suerte! Y #NuncaParesDeAprender

✨ Apuntes de la clase para dar solución al reto       

Desafío Ver clase 29    
- Ir a hyperblog en freddier/hyperblog
- Hacer un fork
- Estrella y un Watch
- Hacer un pull request
	- Reglas:
	- En blogpost
			- Dentro del Id="post"
				- Debajo de suscríbete y dale like
				- Agregar otro párrafo con tu nombre o id de usuario de platzi
		- Pull request

🎲

## 32. Ignorar archivos en el repositorio con .gitignore

No todos los archivos que agregas a un proyecto deberían ir a un repositorio, por ejemplo cuando tienes un archivo donde están tus contraseñas que comúnmente tienen la extensión .env o cuando te estás conectando a una base de datos; son archivos que nadie debe ver.

✨ Git tiene algo llamado git ignore y lo puedes ver en otros proyectos open source de GitHub.    

Una buena practica es evitar que los archivos binarios del contenido sean parte de un repositorio, algunos archivos binarios como el logo de algo puede que pasen pero la gran mayoría no.

Entonces, digamos que quiero agregar una imagen justo en el centro de mi blogposts.

🔥 **Probemos como funciona**     
🔥 En git:      
- `code .`
- Abrimos el blogpost agregamos la imagen
	- `<p><img src="imágenes/equipo.jpg" width="100%"/></p>`
	- También:
	- `<p><img src="https://i.imgur.com/Gdp3Nlr.png" alt="" width="50%"></p>`
- `git status`

- Crear nuevo archivo para ignorar cosas     
	- `touch .gitignore`
		- .gitignore: es una lista de los archivos que vamos a ignorar y la sintaxis es similar a si estuvieras buscando un archivo en algún lugar * significa todo tipo de archivos
	- Agregamos archivos a ignorar
		- `*.jpg`: Esto va a ignorar el 100% de los jpg

- git status 
- git add .gitignore
- git commit -am "Agregué una imagen al blog"
- git pull origin master
- git push origin master


❄En GitHub      
Vemos los cambios


### Ignora carpetas 

La forma básica de excluir una carpeta es la siguiente: 

```
/my_folder/
```

Para excluir una carpeta específica que se encuentra en diferentes ubicaciones dentro de un repositorio de Git, puede utilizar el siguiente patrón.

```
**/my_folder/
```

El doble asterisco `**` indica que la coincidencia se realizará en cualquier subdirectorio del repositorio. El `/` al final de la línea asegura que solo se excluya la carpeta `my_folder` y no los archivos que puedan tener el mismo nombre.

También puedes hacer lo siguiente: 

```
**/{my_folder, another_folder}/
```

Esta línea excluye tanto la carpeta `my_folder` como la carpeta `another_folder` en cualquier subdirectorio del repositorio.

📌 Nota: Al momento de crear un repositorio remoto en GitHub puedes especificar que quieres que se añada un archivo `.gitignore template: **Node**`, este tendrá los archivos que más comúnmente se deben ignorar como la carpeta `node_modules` la cual puede llegar a ser muy pesada:

![](https://i.postimg.cc/jS3rgkV4/gitignore.png)


### ✨ Buscar inspiración en otros proyectos         
- Ver archivo .gitignore
	- laravel/laravel
	- Vuejs/vue
	- TryGhost / Ghost
	- arduino/Arduino

🎲

## 33. Readme.md es una excelente práctica

README.md es una excelente práctica en tus proyectos, md significa Markdown, que es una especie de código que te permite cambiar la manera en que se ve un archivo de texto.

Lo interesante de Markdown es que funciona en muchas páginas, por ejemplo la edición en Wikipedia; es un lenguaje intermedio que no es HTML, no es texto plano, es una manera de crear excelentes texto formateados.

✨ **Editemos nuestro README.md**      
Abrirlo en VSC o usar un editor online M editor.md
	-   [M.editor](https://pandao.github.io/editor.md/en.html)

🔥 En Git     
-   git status
-   git commit -am "README modificado para explicar bien el proyecto a futuros estudiantes"
-   git pull origin master
-   git push origin master

❄ En GitHub        
Verificamos README.md


✨ Apuntes sobre Markdown       
[Web para practicar Markdown](https://www.markdowntutorial.com/lesson/1/) 

> ![Markdown](https://i.postimg.cc/X7xsztxn/MARKDOWN.png)  

📌La forma de aprender readme.md es inspirarnos en proyectos open source.
Readme.md existe porque queremos contarle al mundo de que trata un repositorio.      

Ver como está construido un Readme.md     
- Ingresar en un repositorio
	- readme.md 
		- edit -> lapicito 🖊 :v
		- puedes ver como está construido 

🎲

## 34. Tu sitio web público con GitHub Pages

GitHub tiene un servicio de hosting gratis llamado GitHub Pages, tu puedes tener un repositorio donde el contenido del repositorio se vaya a GitHub y se vea online.       
- https://pages.github.com/

✨ **Publicar una página: Proyectos nuevos**     
❄ **En GitHub**        
- Crear un repositorio nuevo que tenga tu nombre de usuario
	- Home :octocat:
	- New repository ➕
		- Create a new repository
			- Repository name: `freddier.github.io`
			- Description: Ejemplo de un GitHub page
			- Publico
			- [x] Add a README file
			- Create repository
	- Copiar URL SSH del proyecto recién creado
		- Code
			- SSH -> copied!


🔥 **En Git**   
- home 
	- cd ~
	- git clone URL-SSH
	- ls -al
	- cd freddier/

- Crear archivo index.html
	- `vim index.html`
		- `<h1>Este es un sitio web con GitHub Pages</h1>`
	- `git status`
	- `git add .`
	- `git commit -am "Mi primer diseño de pagina en GitHub"`
	- `git remote -v`
		- Conectado a Freddier/freddier.git
	- `git push origin master`

❄ **En GitHub**      
- Configurar repo para que cargue GitHub page
	- freddier/freddier.github.io
		- Settings
			- Pages: 📃 Ver panel izquierdo
				- Branch
					- None 🔽 cambiar por -> `master` 
					- 📂/(root) 🔽 -> también intentar con /docs
				- Save		
			- Clic en URl
	- Revisamos repositorio `freddier.github.io`
		- Settings
			- Pages
				- Your site is live at freddier.github.io/index.html

📌 Debes esperar media hora aproximadamente hasta que tu página sea reconocida por GitHub Page.

> ![About](https://i.postimg.cc/HxgqKFmd/34-page.jpg)    
Tambien puedes agregar el link en la sección About ⚙


✨ **Publicar una página: Old projects**     
Ahora hacer lo mismo pero con hyperblog
- Settings
	- Pages: 📃 Ver panel izquierdo
		- Branch
			- None 🔽 cambiar por -> `master` 
			- 📂/(root) 🔽 -> también intentar con /docs
		- Save	
		- Esperara un poco
			- hyperblog/blogpost.html

📌 Si no aparece la página en un buen rato intenta agregarle al nombre .github.io:         
- alevel/oldproject
	- Settings
		- General
			- Repository name:
				- `oldproject.github.io` Rename

🎲

## 35. Git Rebase: reorganizando el trabajo realizado

Rebase es el proceso de mover o combinar una secuencia de confirmaciones en una nueva confirmación base. La reorganización es muy útil y se visualiza fácilmente en el contexto de un flujo de trabajo de ramas de funciones. 

El comando `rebase` es una mala práctica, nunca se debe usar, pero para efectos del curso te lo vamos a enseñar para que hagas tus propios experimentos. Con rebase puedes recoger todos los cambios confirmados en una rama y ponerlos sobre otra.

En general la historia en los repositorios remotos debería mantenerse intacta, `rebase` es solo para repositorios locales porque este re-escribe la historia del repositorio.

🔥 El proceso general se puede visualizar de la siguiente manera.

Cambiamos a la rama que queremos traer los cambios
	- `git checkout experiment`

Aplicamos rebase para traer los cambios de la rama que queremos 
	- `git rebase master`


✨ **Ejemplo practico:**

🔥 Git
- Branch master
	-   Editamos historia.txt
	-   `git commit -am "Mast. 1"`
	-   `git arbolito`

- Crear rama experiment
	-   `git branch experiment`

- Branch experiment
	-   `git checkout experiment`
	-   Editamos historia.txt
	-   `git commit -am "Exp 1"`
	-   Sigamos editando hist.txt
	-   `git commit -am "Exp 2"`

- Pegar Branches
	- Traer todo de master a la rama experiment
		-   `git checkout experiment`
		-   `git rebase master`

- Branch master
	-   `git checkout master`
	-   Editemos historia.txt
	-   `git commit -am "Mast. 2"`

- Branch experiment
	- Traer todo de master
		-   `git checkout experiment`
		-   `git arbolito`
		-   `git rebase master`

- Branch master
	- Traer todo de experiment
	-   `git checkout master`
	-   `git rebase experiment`
	-   `git arbolito`
	-   `git pull origin master`
	-   `git push origin master`


❄ GitHub
- Revisamos historia.txt
	-   `history`

🔥 Git
- Eliminar rama
	-   `git branch -D experiment`
	-   `git arbolito`

📌 Primero se le hace rebase a la rama que voy a borrar de la historia y luego se le hacer rebase a la rama principal o sino se entra en un conflicto extraño 


🔥 **Otra explicación por si te quedaron dudas con la practica**     

> ![rebase](https://i.postimg.cc/yYrtz4NK/35.rebase.webp)

Para hacer un rebase en la rama feature de la rama master, correrías los siguientes comandos:        
`git checkout feature`     
`git rebase master`       

Esto _trasplanta_ la rama feature desde su locación actual hacia la punta de la rama master:      

> ![rebase](https://i.postimg.cc/W1FKNWDk/35.rebase02.webp)   

Ahora, falta fusionar la rama feature con la rama master         

```
git checkout master
git rebase feature
# No reorganices el historial público
```

Nunca debes reorganizar las confirmaciones una vez que se hayan enviado a un repositorio público. La reorganización sustituiría las confirmaciones antiguas por las nuevas y parecería que esa parte del historial de tu proyecto se hubiera desvanecido de repente.    
 
El comando **_rebase_** es **_una mala práctica, sobre todo en repositorios remotos. Se debe evitar su uso, pero para efectos de práctica te lo vamos a mostrar, para que hagas tus propios experimentos. Con `rebase` puedes recoger todos los cambios confirmados en una rama y ponerlos sobre otra.  

```
# Cambiamos a la rama que queremos traer los cambios
git checkout experiment
# Aplicamos rebase para traer los cambios de la rama que queremos 
git rebase master
```

✨ Aporte creado por: Carlos Eduardo Diaz

📌 Esto es un rebase, es la forma de hacer cambios silenciosos en otras ramas y volver a pegar la historia de esa rama a una rama anterior haciéndole un rebase. Pero, no queda historia, no se sabe realmente quien hizo cambios y en ocasiones la rama master avanzo mucho puede crear conflictos 

🎲

## 36. Git Stash: Guardar cambios en memoria y recuperarlos después

Cuando necesitamos regresar en el tiempo porque borramos alguna línea de código pero no queremos pasarnos a otra rama porque nos daría un error ya que debemos pasar ese “mal cambio” que hicimos a stage, podemos usar git stash para regresar el cambio anterior que hicimos.     

`git stash` es típico cuando estamos cambios que no merecen una rama o no merecen un rebase si no simplemente estamos probando algo y luego quieres volver rápidamente a tu versión anterior la cual es la correcta.        

✨ **Ejemplo practico**    
🔥 Git       
-   gitk
- Branch Master
	-   Editamos blogpost.html con errores adrede
	-   `git status`
	-   `git branch`
	-   `git stash`
	    -   Volvió al estado anterior a los errores y los cambios se guardaron en un lugar temporal
	-   `git stash list`
	    -   Lista todo los cambios
	    -   WIP: Work in progress

- Branch footer
	-   `git checkout footer`
	-   Podemos cambiar de rama sin que nos pida guardar cambios

- Branch master
	-   `git checkout master`
	-   `git stash pop`
	    -   Vuelve al estado donde habían errores
	-   Control z



🔥 Git       
- Guardar cambios y ponerlos en una nueva rama
	-   Editar hyperblog.html
	-   `git stash`
	-   `git stash list`
	-   `git stash branch english`
	    -   Todos los cambios se movieron a otra rama

- Branch english-version
	-   `git branch`
	-   `git status`
	-   `git commit -am "I speak english now"`
	-   `git status`

- Branch master
	-   `git checkout master`
	-   `git stash list`

- Hacer cambios y no guardarlos
	-   Editar archivos
	-   `git stash`
	    -   Todo regresó al ultimo commit
	-   `git stash list`
	-   `git stash drop`
	    -   Eliminar esos cambio


✨ ¿Esto es útil?    
Stash es una forma útil de tener en temporal cambios y poder moverte entre ramas y luego poder recuperarlos.

🎲

## 37. Git Clean: limpiar tu proyecto de archivos no deseados

A veces creamos archivos cuando estamos realizando nuestro proyecto que realmente no forman parte de nuestro directorio de trabajo, que no se deberían agregar y lo sabemos.

- Para saber qué archivos vamos a borrar tecleamos `git clean --dry-run`
- Para borrar todos los archivos listados (que no son carpetas) tecleamos `git clean -f`


✨ Probamos los comandos       
- Replicar varios archivos para la prueba (historia y css)
	- `git status`
📃📜📑


Git sabe cual es la estructura de tu directorio de trabajo. Si tienes archivos que no has agregado al repositorio local y en vez de agregarlos los quieres quitar eliminar debes usar los comandos:    
-   `git clean --dry-run`
    -   Saber que archivos se van a borrar
    -   dry-run: Ejecución en seco
-   `git clean -f`
    -   Borra todo menos:
        -   Carpetas: Deben ser borradas manualmente
        -   Imágenes: Git las está ignorando.


✨ Qué archivos elimina?          
Git Clean elimina archivos sin seguimiento, aquellos que se encuentran en el directorio del repositorio, pero que no se han añadido al índice del repositorio con git add . ni git commit -m ""

🎲

## 38. Git cherry-pick: traer commits viejos al head de un branch 🍒

Existe un mundo alternativo en el cual vamos avanzando en una rama pero necesitamos en master uno de esos avances de la rama, para eso utilizamos el comando `git cherry-pick id-commit`.    

**Git Cherry-pick** es un comando que permite tomar uno o varios commits de otra rama sin tener que hacer un merge completo. Así, gracias a cherry-pick, podríamos aplicar los commits relacionados con nuestra funcionalidad en la rama master sin necesidad de hacer un merge.

Para demostrar cómo utilizar git cherry-pick, supongamos que tenemos un repositorio con el siguiente estado de rama:

```
a -b - c - d   Master
         \
           e - f - g Feature

```

El uso de git cherry-pick es sencillo y se puede ejecutar de la siguiente manera:

```
git checkout master
```

En este ejemplo, commit Sha es una referencia de confirmación. Puedes encontrar una referencia de confirmación utilizando el comando git log. En este caso, imaginemos que queremos utilizar la confirmación ‘f’ en la rama master. Para ello, primero debemos asegurarnos de que estamos trabajando con esa rama master.

```
git cherry-pick f

```

Una vez ejecutado, el historial de Git se verá así:

```
a -b - c - d - f   Master
         \
           e - f - g Feature
```

La confirmación f se ha sido introducido con éxito en la rama de funcionalidad.     

📌 `cherry-pick` es una mala práctica porque significa que estamos reconstruyendo la historia, usa cherry-pick con sabiduría. Si no sabes lo que estás haciendo ten mucho cuidado.      


🎲 Aporte creado por: Carlos Eduardo Diaz.

✨ **Ejemplo practico **    
🔥 Git      
- Abrimos README.md
	-   `code README.md`
	    -   * Creado por el increíble platzi team
	-   `git stash`
	-   `git stash branch readme-mejorado`

- Branch readme-mejorado   
	-   `git commit -am "Créditos al team platzi"`
	-   `git status`
	-   `git arbolito`
	-   `git log --oneline`
	-   Editamos README.md
	    -   * Incluye ejemplos en Windows, Linux y Mac
	-   `git commit -am "Ejemplos en Windows, Linux y Mac"`
	-   `git log --oneline`
	-   Editamos README.md
	    -   * Disponible para todas las edades
	-   `git commit -am "Diverso y atractivo para todos"`
	-   `git log --oneline`
	    -   Copiar commit

- Branch master: Traer de readme-mejorado una sola línea de texto
	-   `git checkout master`
	-   `git cherry-pick dca2a24`
	-   `git status`
	-   `git commit -am "Una sola línea"`
	-   `git log --oneline`
	-   `git pull origin master`
	-   `git push origin master`

- Fusionar ambas ramas
	-   Branch master
	-   `git merge readme-mejorado`

- Corregir conflicto
	-   Accept both changes (Aceptar ambos cambios)
	    -   Esto fusiona ambas cosas
	-   `git status`
	-   `git commit -am "Readme mejorado"`
	-   `git pull origin master`
	-   `git push origin master`

❄ GitHub      
-   Revisamos README.md


✨ ¿git log --oneline?     
Comando que muestra todos los commits hechos, de donde obtendremos el HASH que usaremos junto con git cherry-pick d2a4f3s.

🎲

## 39. Reconstruir commits en Git con amend
A veces hacemos un commit, pero resulta que no queríamos mandarlo porque faltaba algo más. Utilizamos `git commit --amend`, amend en inglés es remendar y lo que hará es que los cambios que hicimos nos los agregará al commit anterior.

✨ **Ejemplo practico**       
🔥 Git    
Cambiaremos el color de fondo del footer junto con el titulo de la cabecera.      
- Abrimos blogpost.html
	-   `code blogpost.html`
	    -   Tu blog de confianza</span>
	-   `git status`
	-   `git commit -am "Cambio al tagline y color del footer"`

Como nos olvidamos de cambiar el color del footer....      

- Abrimos estilos.css
	-   `cd css/`
	-   `code estilos.css`
	```
		#footer
			    {
			     background: #37488b;
			    }
	```
	- `cd ..`
	- `git add css/estilos.css`
	-  `git commit --amend`
	    - amend: remendar
	    - Hace que los cambios anteriores se peguen a los cambios recientes y no va a crear un commit nuevo.
	-  `git status`
	-  `git arbolito`
	-  `git log --stat`

🎲

## 40. Git Reset y Reflog: úsese en caso de emergencia

¿Qué pasa cuando todo se rompe y no sabemos qué está pasando?  
Con `git reset HashDelHEAD` nos devolveremos al estado en que el proyecto funcionaba.

- `git reset --soft HashDelHEAD` te mantiene lo que tengas en staging ahí.
- `git reset --hard HashDelHEAD` resetea absolutamente todo incluyendo lo que tengas en staging.

`git reset` es una mala práctica, no deberías usarlo en ningún momento; debe ser nuestro último recurso.


✨ **Hagamos la simulación**      
🔥 Git
- Branch master
	-   Borrar blogpost
	-   `git commit -am "Bladkfsafs amo Platzi"`

- Branch Cabecera
	-   `git checkout cabecera`
	-   `git merge master`
	-   `cd ..`
	-   Nos vamos a dormir :v y al volver...
	-   `cd proyecto1/`
	-   `git log`
	-   `gitk`

- Branch master
	-   `git checkout master`
	-   `git branch -D cabecera`
	-   `git log --oneline`

- Volver al lugar correcto
	-   `git reflog`
	    -   Vemos el HASH y el HEAD
	    -   Copiamos el último HASH donde todo era correcto
	-   `git reset --hard c894560`
	-   `git arbolito`
	-   `git pull origin master`
	-   `git push origin master`

❄ Revisar GitHub      


📌 Git reflog       
Muestra las modificaciones a lo largo de la historia.   

✨ Comandos que aceptan parámetros      
- `git checkout master`
- `git checkout eff544f`
	-   Moverte sin realizar ningún cambio al commit exacto de la ref
- `git reset`
	- Hará que el último commit sea reemplazado por la ref.
	- `git reset --hard eff544f`
		-   Perderá todo lo que se encuentra en staging y en el Working directory
	- `git reset --soft eff544f`
		-   Recupera los cambios que tengas en el commit eff544f, los agregará al staging area y moverá el head al commit eff544f
	- `git merge eff544f`
		-   Puedes hacer merge de un commit específico, funciona igual que con una branch, pero te hace el merge del estado específico del commit mandado.

✨ `#0a131e`  

🎲

## 41. Buscar en archivos y commits de Git con Grep y log

A medida que nuestro proyecto se hace grande vamos a querer buscar ciertas cosas.      
Por ejemplo: ¿Cuántas veces en nuestro proyecto utilizamos la palabra color?       
Para buscar utilizamos el comando git grep color y nos buscará en todo el proyecto los archivos en donde está la palabra color.    

- Con `git grep -n color` nos saldrá un output el cual nos dirá en qué línea está lo que estamos buscando.
- Con `git grep -c color` nos saldrá un output el cual nos dirá cuántas veces se repite esa palabra y en qué archivo.
- Si queremos buscar cuántas veces utilizamos un atributo de HTML lo hacemos con `git grep -c "<p>"`


🔥 Ejemplo practico     
Branch master   
- Grep Buscar en los archivos
	-   `git grep color`
	-   `git grep la`
- Saber la línea donde se usó
	-   `git grep -n color`
	-   `git grep -n platzi`
	-   Contar la cantidad de veces que aparece una palabra
	-   `git grep -c la`
	-   `git grep -c Platzi`
- Buscar cuantas veces se usó la etiqueta p
	-   `git grep -c "<p>"`

- Log Buscar en los commits
	- Buscar cuantas veces usé la palabra cabecera
		-   `git log -S "cabecera"`


✨ Comandos    
- Buscar palabras en los archivos en el branch actual        
	-   `git grep "palabra a buscar"`

- Mostrar la línea en la cual la pablara aparece en el archivo         
	-   `git grep -n "palabra a buscar"`

- Mostrar cuantas veces aparece la palabra en cada archivo      
	-   `git grep -c "palabra a buscar"`

- Buscar los commits en los cuales sale una palabra      
	-   `git log -S "palabra a buscar"`

🎲

## 42. Comandos y recursos colaborativos en Git y GitHub

Hay una serie de comando que uno repite constantemente y yo te enseñe alias a nivel global pero también hay alias internamente dentro de git.

Te voy a mostrar una serie de comandos que escribió Harry Robert para manejar su equipo de una manera mas colaborativa y como guárdalos no como un comando global de tu consola si no como comando específicos dentro de git

✨ **Comandos de Git**    
- `git shortlog`
	-   Diseñado para ver cuantos commits ha hecho cada miembro del equipo
- `git shortlog -sn --all --no-merges`
	-   Muestra las personas que hicieron commits.
	-   `--all` Muestra las personas y el número de commits que se realizaron incluido los borrados.
	-   `--no-merges` No incluye los merges
- `git config --global alias.stats "shortlog -sn --all --no-merges"`
	-   Crear un alias global llamado stats o estadísticas que se llama digitando la palabra stats
- `git stats`
	-   Alias creado para llamar a un comando mas extenso y nos muestra las estadísticas de commits sin merges de cada uno de los miembros del repositorio de la rama donde estoy en este momento.
- `git blame -c blogpost.html`
	-   Saber quien hizo que cosa (blame - culpa), nos muestra línea por línea quien hizo cada cosa
	-   `-c` Muestra lo mismo pero con mejor indentación
- `git comando --help`
	-   Ver como funciona un comando por dentro, cualquier comando, esto abre el navegador mostrando el manual
- `git blame css/estilos.css -L35,53 -c`
	-   Quien modificó que por ultima vez, desde la línea 35 hasta la línea 53. -c agrega un poco mas de formato.
- `git branch -r`
	-   Muestra las ramas remotas
- `git branch -a`
	-   Muestra todas las ramas. En blanco las locales y en rojo las remotas


✨ En GitHub      
- Panel: Opción `📈 Insights` 
	- Pulse: Muestra...
		- Cuantos pull request se hicieron merge
		- Cuantos pull request se han propuesto
		- Que issues o problemas se han cerrado
		- Básicamente reportar bugs
		- Donde puede que estén y la historia de todas las configuraciones
		- Muestra quienes son los contribuidores.

- Revisamos un proyecto: TryGhost/Ghost
	- `📈 Insights` 
		- Pulse
		- Contributors
		- Community
		- Traffic
		- Alerts: Es privado y es cuando GitHub se da cuenta que hay un problema que hay que ponerle atención.

🎲

## 43. Tu futuro con Git y GitHub

¡Felicitaciones por terminar el Curso profesional de Git y GitHub!   

Aprendimos cómo usar Git y GitHub, hacer merge request, investigar quién hizo qué a través de la línea de comandos, cómo utilizar GitHub Pages, cómo revertir cambios y mucho más. Ahora queda de tu parte experimentar, fallar, subir, borrar y por último hacer deploy de tu proyecto y compartirlo con la comunidad.   

Recuerda resolver los ejercicios, completar el examen, darle 5 estrellas al profesor y compartir tu proyecto, notas, todas tus dudas y comentarios en la sección de discusiones.   

- [Curso de GitLab](https://platzi.com/gitlab/)
- `Alt + 164 = ñ`
- `Altgr + 4 = ~ en ubuntu`
- `#0a131e`

🔥 ❄ ✨  📌  🎲  🤴🦁   🧔🐯

![The end](https://media.giphy.com/media/l2JeeOTlKw7UQC58I/giphy.gif)

