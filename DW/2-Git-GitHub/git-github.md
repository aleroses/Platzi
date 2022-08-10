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

Git reset y git rm son comandos con utilidades muy diferentes, pero aún así se confunden muy fácilmente.

git rm
Este comando nos ayuda a eliminar archivos de Git sin eliminar su historial del sistema de versiones. Esto quiere decir que si necesitamos recuperar el archivo solo debemos “viajar en el tiempo” y recuperar el último commit antes de borrar el archivo en cuestión.

Recuerda que git rm no puede usarse así nomás. Debemos usar uno de los flags para indicarle a Git cómo eliminar los archivos que ya no necesitamos en la última versión del proyecto:

git rm --cached: Elimina los archivos del área de Staging y del próximo commit pero los mantiene en nuestro disco duro.
git rm --force: Elimina los archivos de Git y del disco duro. Git siempre guarda todo, por lo que podemos acceder al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados).

git reset
Este comando nos ayuda a volver en el tiempo. Pero no como git checkout que nos deja ir, mirar, pasear y volver. Con git reset volvemos al pasado sin la posibilidad de volver al futuro. Borramos la historia y la debemos sobre escribir. No hay vuelta atrás.

Este comando es muy peligroso y debemos usarlo solo en caso de emergencia. Recuerda que debemos usar alguna de estas dos opciones:

Hay dos formas de usar git reset: con el argumento --hard, borrando toda la información que tengamos en el área de staging (y perdiendo todo para siempre). O, un poco más seguro, con el argumento --soft, que mantiene allí los archivos del área de staging para que podamos aplicar nuestros últimos cambios pero desde un commit anterior.

git reset --soft: Borramos todo el historial y los registros de Git pero guardamos los cambios que tengamos en Staging, así podemos aplicar las últimas actualizaciones a un nuevo commit.
git reset --hard: Borra todo. Todo todito, absolutamente todo. Toda la información de los commits y del área de staging se borra del historial.
¡Pero todavía falta algo!

git reset HEAD: Este es el comando para sacar archivos del área de Staging. No para borrarlos ni nada de eso, solo para que los últimos cambios de estos archivos no se envíen al último commit, a menos que cambiemos de opinión y los incluyamos de nuevo en staging con git add, por supuesto.
¿Por qué esto es importante?
Imagina el siguiente caso:

Hacemos cambios en los archivos de un proyecto para una nueva actualización. Todos los archivos con cambios se mueven al área de staging con el comando git add. Pero te das cuenta de que uno de esos archivos no está listo todavía. Actualizaste el archivo pero ese cambio no debe ir en el próximo commit por ahora.

¿Qué podemos hacer?

Bueno, todos los cambios están en el área de Staging, incluido el archivo con los cambios que no están listos. Esto significa que debemos sacar ese archivo de Staging para poder hacer commit de todos los demás.

¡Al usar git rm lo que haremos será eliminar este archivo completamente de git! Todavía tendremos el historial de cambios de este archivo, con la eliminación del archivo como su última actualización. Recuerda que en este caso no buscábamos eliminar un archivo, solo dejarlo como estaba y actualizarlo después, no en este commit.

En cambio, si usamos git reset HEAD, lo único que haremos será mover estos cambios de Staging a Unstaged. Seguiremos teniendo los últimos cambios del archivo, el repositorio mantendrá el archivo (no con sus últimos cambios pero sí con los últimos en los que hicimos commit) y no habremos perdido nada.

Conclusión: Lo mejor que puedes hacer para salvar tu puesto y evitar un incendio en tu trabajo es conocer muy bien la diferencia y los riesgos de todos los comandos de Git.

🎲

## 14. Flujo de trabajo básico con un repositorio remoto

Por ahora, nuestro proyecto vive únicamente en nuestra computadora. Esto significa que no hay forma de que otros miembros del equipo trabajen en él.

Para solucionar esto están los servidores remotos: un nuevo estado que deben seguir nuestros archivos para conectarse y trabajar con equipos de cualquier parte del mundo.

Estos servidores remotos pueden estar alojados en GitHub, GitLab, BitBucket, entre otros. Lo que van a hacer es guardar el mismo repositorio que tienes en tu computadora y darnos una URL con la que todos podremos acceder a los archivos del proyecto para descargarlos, hacer cambios y volverlos a enviar al servidor remoto para que otras personas vean los cambios, comparen sus versiones y creen nuevas propuestas para el proyecto.

Esto significa que debes aprender algunos nuevos comandos:

git clone url_del_servidor_remoto: Nos permite descargar los archivos de la última versión de la rama principal y todo el historial de cambios en la carpeta .git.

git push: Luego de hacer git add y git commit debemos ejecutar este comando para mandar los cambios al servidor remoto.

git fetch: Lo usamos para traer actualizaciones del servidor remoto y guardarlas en nuestro repositorio local (en caso de que hayan, por supuesto).

git merge: También usamos el comando git merge con servidores remotos. Lo necesitamos para combinar los últimos cambios del servidor remoto y nuestro directorio de trabajo.

git pull: Básicamente, git fetch y git merge al mismo tiempo.


-- Otros Comando --

Algunos comandos que pueden ayudar cuando colaboren con proyectos muy grandes de github:

git log --oneline - Te muestra el id commit y el título del commit.
git log --decorate- Te muestra donde se encuentra el head point en el log.
git log --stat - Explica el número de líneas que se cambiaron brevemente.
git log -p- Explica el número de líneas que se cambiaron y te muestra que se cambió en el contenido.
git shortlog - Indica que commits ha realizado un usuario, mostrando el usuario y el titulo de sus commits.
git log --graph --oneline --decorate y
git log --pretty=format:"%cn hizo un commit %h el dia %cd" - Muestra mensajes personalizados de los commits.
git log -3 - Limitamos el número de commits.
git log --after=“2018-1-2” ,
git log --after=“today” y
git log --after=“2018-1-2” --before=“today” - Commits para localizar por fechas.
git log --author=“Name Author” - Commits realizados por autor que cumplan exactamente con el nombre.
git log --grep=“INVIE” - Busca los commits que cumplan tal cual está escrito entre las comillas.
git log --grep=“INVIE” –i- Busca los commits que cumplan sin importar mayúsculas o minúsculas.
git log – index.html- Busca los commits en un archivo en específico.
git log -S “Por contenido”- Buscar los commits con el contenido dentro del archivo.
git log > log.txt - guardar los logs en un archivo txt

🎲

## 15. Introducción a las ramas o branches de Git

Las ramas son la forma de hacer cambios en nuestro proyecto sin afectar el flujo de trabajo de la rama principal. Esto porque queremos trabajar una parte muy específica de la aplicación o simplemente experimentar.

La cabecera o HEAD representan la rama y el commit de esa rama donde estamos trabajando. Por defecto, esta cabecera aparecerá en el último commit de nuestra rama principal. Pero podemos cambiarlo al crear una rama (git branch rama, git checkout -b rama) o movernos en el tiempo a cualquier otro commit de cualquier otra rama con los comandos (git reset id-commit, git checkout rama-o-id-commit).

---Apuntes---
En el proyecto al principio tenemos una rama llamada master y hemos hablado mucho de eso.
Lo veras en la consola dentro del proyecto.

Las ramas son formas en las que nosotros podemos hacer cambios sin afectar la principal rama.
Eso es importante porque en ocasiones quieres hacer un cambio especial.

En nuestro proyecto tenemos un post y vamos a hacer que mientras la rama master o maestra esta cambiando el block post normalmente, hay una rama paralela que va crear una Header una cabecera, y a esa rama la vamos a llamar Cabecera y luego las vamos a fusionar para ver como queda en la rama maestra y así entender el flujo de ramas dentro de git.

Master es nuestra rama principal y en esa rama tenemos toda nuestra historia de commit, cada vez que hemos hecho0 un cambio a nuestros archivos viven en esos commit.
El commit mas reciente es el que llamamos HEAD o Cabecera.

Imaginemos que creamos otra rama llamada cabecera, esto realmente hace una copia del ultimo commit en otro lado y todos los cambios que hagamos en esta rama no los va a ver la rama master hasta que la volvamos a fusionar con un proceso llamado merge.

-> Hacemos cambios en blogpost.html

>> git status 
>> git commit -am "Mensaje de referencia"
	Esto automáticamente hace el git add de los cambios pero solo funciona con archivos que se les había hecho un add previamente. Si creo un archivo completamente nuevo esto no va a funcionar.

Si no le doy un mensaje me dispara un entorno (VIM) donde puedo escribir el mensaje.

>> Esc + i
	Insertar texto -> Commit al master del Blogpost en su version mas reciente

>> Esc + shif + zz
	Guardar
	
>> git log

>> git log --stat

>> git status 

>> git show
	q para salir
	
>> git branch cabecera
	Crea una rama llamada cabecera
	
>> git show 
	Dice que tengo un HEAD que le apunta al master y a la cabecera 		
	
>> git status
	Sigo en la rama master
	
>> git checkout cabecera 
	Cambiamos de rama y ahora veremos el HEAD -> cabecera
	
>> git status

-> Hacemos cambios en blogpost.html

>> git status 

>> git add blogpost.html 
>> git commit -m "Estructura inicial de la cabecera"

>> git status
>> git show
>> git log
	q para salir 
	

>> git checkout master
	Nos movemos a la rama master, veremos que nuestro archivo cambio a lo que teníamos antes de agregar la cabecera dentro del html
	
>> git log 
	
>> git checkout cabecera
	volvemos a la rama cabecera y el archivo cambia inmediatamente 
	
	
>> Esta es la magia de git, podemos tener multiples archivos cambiando solo se guardan los cambios e....

🎲
		
## 16. Fusión de ramas con Git merge	
	
El comando git merge nos permite crear un nuevo commit con la combinación de dos ramas (la rama donde nos encontramos cuando ejecutamos el comando y la rama que indiquemos después del comando).

# Crear un nuevo commit en la rama master combinando
# los cambios de la rama cabecera:
git checkout master
git merge cabecera

# Crear un nuevo commit en la rama cabecera combinando
# los cambios de cualquier otra rama:
git checkout cabecera
git merge cualquier-otra-rama

Asombroso, ¿verdad? Es como si Git tuviera super poderes para saber qué cambios queremos conservar de una rama y qué otros de la otra. El problema es que no siempre puede adivinar, sobre todo en algunos casos donde dos ramas tienen actualizaciones diferentes en ciertas líneas en los archivos. Esto lo conocemos como un conflicto y aprenderemos a solucionarlos en la siguiente clase.

Recuerda que al ejecutar el comando git checkout para cambiar de rama o commit puedes perder el trabajo que no hayas guardado. Guarda tus cambios antes de hacer git checkout.	
	
	
---Apuntes---	

--> Estando en cabecera
>> git status
>> Cambios en html y css
>> git commit -am "mensaje"
	Para no perder archivos
>> git status	
>> git checkout master	
>> Cambios en html	
>> git commit -am "mensaje"	
>> git status
>> git log
>> git checkout cabecera	
	Para hacer un merge debemos estar en la rama de destino para que todos los cambios se vayan ahí.
>> git branch
	Con esto sabes que ramas hay y la de color con un 
	* indica en la que estamos ubicados 
>> git checkout master
>> git merge cabecera 
	Un merge es un commit hacia la rama master así que debes colocar un mensaje
	Esc + Shif + zz
>> git log	
>> Vemos el html de master fusionado 	
>> Agregamos algo al css
>> git commit -am "mensaje"
>> git log
	


Pagina para practicar:
https://learngitbranching.js.org/?locale=es_AR

🎲

## 17. Resolución de conflictos al hacer un merge

Git nunca borra nada a menos que nosotros se lo indiquemos. Cuando usamos los comandos git merge o git checkout estamos cambiando de rama o creando un nuevo commit, no borrando ramas ni commits (recuerda que puedes borrar commits con git reset y ramas con git branch -d).

Git es muy inteligente y puede resolver algunos conflictos automáticamente: cambios, nuevas líneas, entre otros. Pero algunas veces no sabe cómo resolver estas diferencias, por ejemplo, cuando dos ramas diferentes hacen cambios distintos a una misma línea.

Esto lo conocemos como conflicto y lo podemos resolver manualmente, solo debemos hacer el merge, ir a nuestro editor de código y elegir si queremos quedarnos con alguna de estas dos versiones o algo diferente. Algunos editores de código como VSCode nos ayudan a resolver estos conflictos sin necesidad de borrar o escribir líneas de texto, basta con hundir un botón y guardar el archivo.

Recuerda que siempre debemos crear un nuevo commit para aplicar los cambios del merge. Si Git puede resolver el conflicto hará commit automáticamente. Pero, en caso de no pueda resolverlo, debemos solucionarlo y hacer el commit.

Los archivos con conflictos por el comando git merge entran en un nuevo estado que conocemos como Unmerged. Funcionan muy parecido a los archivos en estado Unstaged, algo así como un estado intermedio entre Untracked y Unstaged, solo debemos ejecutar git add para pasarlos al área de staging y git commit para aplicar los cambios en el repositorio.


---Apuntes---
--> Generar conflicto 
>> git checkout cabecera
	>> Git nunca borra nada
	>> git merge master
		Traer lo de master a cabecera
	>> Modificar html y css
	>> git commit -am "mensaje"
>> git checkout master
	>> Modificar html y css mismas líneas que cabecera
	>> Agregar párrafo adicional 
	>> git commit -am "mensaje"
>> git checkout cabecera
>> git checkout master
	>> git merge cabecera
	>> CONFLICTOS!!!
	>> git log
	>> Estado raro master ! merging -> el merge no se completo
	>> En VISUAL STUDIO CODE
	<<<<<< HEAD Current change : Cambio actual
	>>>>>> cabecera Incoming Change : Cambio entrante
	>> Elegimos los cambios que necesitemos y listo
	>> Guardamos cambios
	>> git status
	>> git commit -am "mensaje"
>> git checkout cabecera
>> git checkout master

Los merge funcionan en una u otra dirección 

🎲

## 18. Cambios en GitHub: de master a main

El escritor Argentino Julio Cortázar afirma que las palabras tienen color y peso. Por otro lado, los sinónimos existen por definición, pero no expresan lo mismo. Feo no es lo mismo que desagradable, ni aromático es lo mismo que oloroso.

Por lo anterior podemos afirmar que los sinónimos no expresan lo mismo, no tienen el mismo “color” ni el mismo “peso”.

Sí, esta lectura es parte del curso profesional de Git & GitHub. Quédate conmigo.

Desde el 1 de octubre de 2020 GitHub cambió el nombre de la rama principal: ya no es “master” -como aprenderás en el curso- sino main.

Este derivado de una profunda reflexión ocasionada por el movimiento #BlackLivesMatter.

La industria de la tecnología lleva muchos años usando términos como master, slave, blacklist o whitelist y esperamos pronto puedan ir desapareciendo.

Y sí, las palabras importan.

Por lo que de aquí en adelante cada vez que escuches a Freddy mencionar “master” debes saber que hace referencia a “main”

Puedes leer un poco más aquí: Cambios en GitHub: de master a main



or create a new repository on the command line

or push an existing repositoy from the command line

🎲

## 19. Uso de GitHub

GitHub es una plataforma que nos permite guardar repositorios de Git que podemos usar como servidores remotos y ejecutar algunos comandos de forma visual e interactiva (sin necesidad de la consola de comandos).

Luego de crear nuestra cuenta, podemos crear o importar repositorios, crear organizaciones y proyectos de trabajo, descubrir repositorios de otras personas, contribuir a esos proyectos, dar estrellas y muchas otras cosas.

El README.md es el archivo que veremos por defecto al entrar a un repositorio. Es una muy buena práctica configurarlo para describir el proyecto, los requerimientos y las instrucciones que debemos seguir para contribuir correctamente.

Para clonar un repositorio desde GitHub (o cualquier otro servidor remoto) debemos copiar la URL (por ahora, usando HTTPS) y ejecutar el comando git clone + la URL que acabamos de copiar. Esto descargara la versión de nuestro proyecto que se encuentra en GitHub.

Sin embargo, esto solo funciona para las personas que quieren empezar a contribuir en el proyecto. Si queremos conectar el repositorio de GitHub con nuestro repositorio local, el que creamos con git init, debemos ejecutar las siguientes instrucciones:

# Primero: Guardar la URL del repositorio de GitHub
# con el nombre de origin
git remote add origin URL

# Segundo: Verificar que la URL se haya guardado
# correctamente:
git remote
git remote -v

# Tercero: Traer la versión del repositorio remoto y
# hacer merge para crear un commit con los archivos
# de ambas partes. Podemos usar git fetch y git merge
# o solo el git pull con el flag --allow-unrelated-histories:
git pull origin master --allow-unrelated-histories

# Por último, ahora sí podemos hacer git push para guardar
# los cambios de nuestro repositorio local en GitHub:
git push origin master


---Apuntes---

-> Dentro de GitHub
>> Importar repositorio
	>> Sirve para traer repositorios de otros sistemas 
>> Crear un nuevo repositorio
	>> Repository name: hyperblog
	>> Description: Un blog increíble para el curso de 
	>> Public
	>> Initialize this repository with a README
	>> CREATE REPOSITORY
		>> Clone or download
			>> Clone with HTTPS
			>> Copiar URL

-> Dentro de Git
>> pwd
>> Agregar un origen remoto de nuestros archivos
>> git remote add origin https://github.com/freddier/hyperblog.
>> git remote
git remote -v
	>> v: verbal 
	>> fetch: traer cosas
	>> push: enviar cosas
>> ls -al
>> git push origin master -> NEL
	>> login GitHub
>> git pull origin master -> NEL
	>> Traerlo primero
>> git pull origin master --allow-unrelated-histories
	>> Fusiona lo remoto con lo que esta en local
	>> Control + shif + zz
>> ls -al
>> git status
>> git push origin master

-> Dentro de GitHub
>> Recargamos la web y podemos ver que todo se agregó
>> Podemos editar
	>> Preview changes
	>> Commit changes
		>> Cambie el titulo
		>> Porque puedo
		>> Commit directly to the master branch
		>> Commit changes
>> El status en este momento:
	>> Se tienen cambios en GitHub que no tenemos en local

-> En Git
>> git pull origin master
>> git log

-> En Git
>> git config -l

-> En GitHub
>> Podemos ver el historial de commits 

🎲

## 20. Cómo funcionan las llaves públicas y privadas

Las llaves públicas y privadas nos ayudan a cifrar y descifrar nuestros archivos de forma que los podamos compartir sin correr el riesgo de que sean interceptados por personas con malas intenciones.

La forma de hacerlo es la siguiente:

1. Ambas personas deben crear su llave pública y privada.
2. Ambas personas pueden compartir su llave pública a las otras partes (recuerda que esta llave es pública, no hay problema si la “interceptan”).
3. La persona que quiere compartir un mensaje puede usar la llave pública de la otra persona para cifrar los archivos y asegurarse que solo puedan ser descifrados con la llave privada de la persona con la que queremos compartir el mensaje.
4. El mensaje está cifrado y puede ser enviado a la otra persona sin problemas en caso de que los archivos sean interceptados.
5. La persona a la que enviamos el mensaje cifrado puede usar su llave privada para descifrar el mensaje y ver los archivos.

Puedes compartir tu llave pública pero nunca tu llave privada.

En la siguiente clase vamos a crear nuestras llaves para compartir archivos con GitHub sin correr el riesgo de que sean interceptados.



21. Configura tus llaves SSH en local

Primer paso: Generar tus llaves SSH. Recuerda que es muy buena idea proteger tu llave privada con una contraseña.

	ssh-keygen -t rsa -b 4096 -C "tu@email.com"

Segundo paso: Terminar de configurar nuestro sistema.

En Windows y Linux:

# Encender el "servidor" de llaves SSH de tu computadora:
	eval $(ssh-agent -s)

# Añadir tu llave SSH a este "servidor":
	ssh-add ruta-donde-guardaste-tu-llave-privada


En Mac:

# Encender el "servidor" de llaves SSH de tu computadora:
eval "$(ssh-agent -s)"

# Si usas una versión de OSX superior a Mac Sierra (v10.12)
# debes crear o modificar un archivo "config" en la carpeta
# de tu usuario con el siguiente contenido (ten cuidado con
# las mayúsculas):
Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ruta-donde-guardaste-tu-llave-privada

# Añadir tu llave SSH al "servidor" de llaves SSH de tu
# computadora (en caso de error puedes ejecutar este
# mismo comando pero sin el argumento -K):
	sh-add -K ruta-donde-guardaste-tu-llave-privada


---Apuntes---
Cuando te conectaste a GitHub pusiste tu usuario y contraseña y esto tiene dos problemas:
- Que siempre tienes que estar haciéndolo 
- Siendo una conexión segura HTTPS, el usuario y contraseña se estan guardando en el entorno local esto significa que si roban tu laptop o computadora, eres vulnerable a password cracking, a que crackeen la contraseña de tu repositorio y esto es muy problemático, porque si entran a tu código fuente pueden entrar a tu servidor o a tu mega proyecto, etc. 

Para evitar esto debemos agregarle una capa de seguridad mucho mas fuerte con llaves publicas y privadas.

Esto no solo aumenta la seguridad sino que además ya no tienes que volver a colocar tu usuario y contraseña.

>> IMAGEN DE FREDICITO :3

En el entorno local vamos a crear una llave privada y un publica y una vez creada le vamos a enviar la llave publica a GitHub a tu repositorio 


>> Abrir bash de git
>> Las llaves SSH no son por repositorio ni por proyecto si no por persona.
>> Nos ubicamos en ~ -> home
	>> Cambiar la configuración local de Git 
	>> Sabiendo nuestro usuario e Email de GitHub
>> git config -l  
	>> Puedo estar ubicado en cualquier lugar porque git esta instalado en todo el entorno local
>> Cambiar el Gmail
	>> git config --global user.email "ale.vrs@outlook.com"
>> git config -l

>> Crear llave SSH
>> ssh-keygen -t rsa -b 4096 -C "ale.vrs@outlook.com"
	>> key generation
	>> t especifica cual es el algoritmo que vamos a usar
	>> rsa es el algoritmo que vamos a usar
	>> -b 4096 indica que tan complejo va a ser la llave
	>> -C correo electrónico al que va a estar conectada la llave
	>> Solo le das enter
	>> passphrase: forma fancy de decir password con espacios
	>> Colocar contraseña: yo no le puse esa MMD xd
	>> Esto es la contraseña adicional de texto que le vas a poner a tu llave publica y privada 
	
	
>> Vamos a ver las llaves creadas
	>> Abrir carpeta users/usuario
		>> Carpeta .ssh
			>> id_rsa -> llave privada
			>> id_rsa.pub -> llave publica
				>> Abrir con VSC
	C:\Users\usuario\.ssh
				
>> Llevar clave publica a GitHub
	>> Copiar clave publica
	
>> Agregar llave al entorno
	>> Básicamente que el sistema operativo sepa que la llave exista 
	
>> En windows y Linux
>> Revisar que el servidor de llaves SSH esté prendido
	>> Esto básicamente es un programa que revisa que las llaves esten corriendo y que las conecte para hacer la conexión doble cuando nos conectemos a un servidor remoto en este caso a GitHub
	>> eval $(ssh-agent -s)
		>> Evalua que un comando se dispare
		>> Agent: Significa que el servidor SSH esta corriendo 
		>> PID: es process ID -> identificador del proceso
		>> 1243: numero que indica que el proceso esta corriendo y todo esta bien
		
>> Agregar llave al servidor y decirle al sistema que existe
	>> Ver ruta de creación 
	>> ~ -> Alt + 126
	>> cd ~/proyecto1/
	>> cd ~/.ssh/
	>> ls -al
	>> cd 
	
>> Agregar la llave que acabamos de crear
	>> ssh-add ~/.ssh/id_rsa
	>> Agregamos la llave privada
		>> ssh-add ~/.ssh/id_rsa
		
---Ahora en MAC---
>> En la terminal
>> ~
>> ssh-keygen -t rsa -b 4096 -C "ale.vrs@outlook.com"
>> enter
>> guardar en la carpeta por defecto, enter
>> password: yo no le puse esa MMD xd


>> Agregar la contraseña
>> cd .ssh/
>> ls -al
	>> known_hosts
>> cat id_rsa.pub
>> cat known_hosts

>> Evaluar si esta corriendo el SSH
>> eval "$(ssh-agent -s)"
>> ls -al
	>> .ssh
>> cd .ssh/
>> ls -al
	>> Al no existir el archivo config toca crearlo

>> Crear config
	>> vim config
		>> Esc + i
		>> Host * 
			AddKeysToAgent yes
			UseKeychain yes
			IdentityFile ~/.ssh/id_rsa
		>> Esc + Shiff + zz
		>> Este archivo no debe tener ninguna extensión
>> ls -al
>> cat config
>> cd
>> ssh-add -K ~/.ssh/id_rsa
	>> K: key change o algo así xd
	>> De llegar a dar error solo quita -K



Nota: Cifrar disco usando BitLocker 

OJO: Si agregan una contraseña cuando les pide el ‘passphrase’ esto hará que siempre que hagan pull/push les pida esa misma contraseña.
Vengo de clases adelante y es muy tedioso que te pida eso cada instante, recomiendo poner una contraseña fácil o directamente no poner nada ya que con la configuración de la llave SSH es seguro de por sí.
Pero en el caso que si pusieron y quieren cambiarla o directamente eliminarla les comparto el siguiente comando:

ssh-keygen -f ~/.ssh/id_rsa -p
Con esto modificarán la contraseña o no poner nada directamente.
Saludos. 😄


22. Conexión a GitHub con SSH

Luego de crear nuestras llaves SSH podemos entregarle la llave pública a GitHub para comunicarnos de forma segura y sin necesidad de escribir nuestro usuario y contraseña todo el tiempo.

Para esto debes entrar a la Configuración de Llaves SSH en GitHub, crear una nueva llave con el nombre que le quieras dar y el contenido de la llave pública de tu computadora.

Ahora podemos actualizar la URL que guardamos en nuestro repositorio remoto, solo que, en vez de guardar la URL con HTTPS, vamos a usar la URL con SSH:

git remote set-url origin url-ssh-del-repositorio-en-github


---Apuntes---
Cada persona y cada computadora debe tener una llave única.

>> Copiar llave publica 
>> Ir al perfil de GitHub
	>> Settings 
		>> SSH and GPG Keys
			>> new SSH Key
				>> Title: Laptop de educación de Platzi
				>> Key: Pegar llave
				>> Add SSH key
				
>> Colocar contraseña
>> Your repositories
	>> Hyperblog
		>> Code -> Clone or download
			>> Use SSH -> Copiar

>> En consola dentro del proyecto
>> cd proyecto1/
>> git remote -v
	>> Vamos a cambiar esa url
	>> origin es un standar de la industria y perfectamente se puede colocar otro nombre
>> git remote set-url origin url-copiada-de-GitHub-SSH
>> git remote -v

>> Verificar que funciona
>> Hacer cambios en blogpost.html
>> Vemos que dentro de GitHub->hyperblog no se reflejan los cambios
>> Antes de hacer un commit debemos traernos la ultima version del servidor GitHub 
>> git pull
	>> yes	
>> git pull origin master
	>> origin es el nombre del repositorio remoto y lo vamos a fusionar con la rama actual master
>> git status 
>> git diff
>> git commit -am "Una versión del HiperBlog"

>> Ahora, antes de enviar los cambios al repositorio remoto debemos hacer un git pull. En caso de que hayan cambiado cosas y así no tener conflictos.
>> git pull origin master 
>> git push origin master

>> Verificamos en GitHub
>> Your repositories
	>> hyperblog
		>> blogpost.html -> vemos los cambios
			>> History



23. Tags y versiones en Git y GitHub

Los tags o etiquetas nos permiten asignar versiones a los commits con cambios más importantes o significativos de nuestro proyecto.

Comandos para trabajar con etiquetas:

	- Crear un nuevo tag y asignarlo a un commit: git tag -a nombre-del-tag id-del-commit.
	- Borrar un tag en el repositorio local: git tag -d nombre-del-tag.
	- Listar los tags de nuestro repositorio local: git tag o git show-ref --tags.
	- Publicar un tag en el repositorio remoto: git push origin --tags.
	- Borrar un tag del repositorio remoto: git tag -d nombre-del-tag y git push origin :refs/tags/nombre-del-tag.
			

---Apuntes---

>> Revisar la historia del proyecto
>> git log
>> git log --all
>> git log --all --graph
>> git log --all --graph --decorate --oneline
	>> Historial completo desde que arranco el proyecto
>> alias arbolito="git log --all --graph --decorate --oneline"
	>> Crear Alias
>> arbolito

>> Crear Tags
>> git tag -a v0.1 -m "Resultado de las primeras clases del curso" 1b567158
	>> Debes copiar el hash código commit que arrojó el comando anterior en el punto que queremos que sea el final de la versión final a crear llamada tags
	>> -a: add agregar
>> git tag
>> git show-ref --tags
	>> Saber a que hast o a que commit está conectado un tag
	>> Nos muestra el tag llamado v0.1 que está asignado a un commit
>> history

>> Enviar tags a GitHub
>> git pull origin master 
	>> Primero hacer git pull antes de enviar algo a GitHub
>> git push origin --tags

>> Revisamos en GitHub
>> Your repositories
>> hyperblogs
>> master >> branch >> tag
	
>> Eliminar Tags desde Consola en Local
>> git tag
>> git tag -d v0.1 
	>> -d: delete
>> git status
>> git pull origin master
>> git push origin --tags
>> git tag

>> Eliminar de GitHub desde consola 
>> git push origin :refs/tags/v0.1
	>> Sintaxis interna que borra esa referencia allá en el origen conectado con nuestra referencia de cuando borramos el tag

>> Desapareció de GitHub



--Para un alias permanente--
Para un proyecto:
>> git config alias.arbolito "log --all --graph --decorate --oneline"

Global:
git config --global alias.arbolito "log --all --graph --decorate --oneline"

Para correrlo:
git arbolito



Comando que permite guardar alias solo para git. con esto se puede ejecutar cada que se escribe git arbolito

git config --global alias.arbolito "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"



24. Manejo de ramas en GitHub

Puedes trabajar con ramas que nunca envías a GitHub, así como pueden haber ramas importantes en GitHub que nunca usas en el repositorio local. Lo importante es que aprendas a manejarlas para trabajar profesionalmente.

	- Crear una rama en el repositorio local: git branch nombre-de-la-rama o git checkout -b nombre-de-la-rama.
	- Publicar una rama local al repositorio remoto: git push origin nombre-de-la-rama.

Recuerda que podemos ver gráficamente nuestro entorno y flujo de trabajo local con Git usando el comando gitk.


---Apuntes---
>> Comando importantes de ramas
>> git checkout cabecera
>> git checkout master
>> git branch
>> git arbolito

>> Comando para manejar ramas
>> git show-branch
>> git show-branch --all
	>> Muestra las ramas existentes
	>> Muestra mas o menos la historia mas reciente de cada rama
>> gitk
	>> Software que muestra la historia de manera visual 

>> Agregar la historia de las ramas a GitHub
>> git pull origin master
>> git checkout cabecera
	>> git push origin cabecera
	>> Revisamos GitHub

>> Crear Ramas nuevas
>> git checkout master
>> git branch header
>> git branch footer
>> git branch

>> Enviar todo a GitHub
>> git push origin header
>> git push origin footer
	>> En este caso como las ramas no existen aún en GitHub no se hace un pull para traer los cambios que se le pudieron hacer a estas ramas. 
	>> El push para subir la rama cabecera no necesitaba un pull previo porque dicha rama no estaba en el repositorio remoto.
	>> En otros casos se hace pull porque las ramas ya estan en GitHub y se necesita hacer un pull para traer posibles cambios hechos por otros desarrolladores sobre estas ramas.


https://www.hostinger.co/tutoriales/renombrar-rama-git



25. Configurar múltiples colaboradores en un repositorio de GitHub

Por defecto, cualquier persona puede clonar o descargar tu proyecto desde GitHub, pero no pueden crear commits, ni ramas, ni nada.

Existen varias formas de solucionar esto para poder aceptar contribuciones. Una de ellas es añadir a cada persona de nuestro equipo como colaborador de nuestro repositorio.

Solo debemos entrar a la configuración de colaboradores de nuestro proyecto (Repositorio > Settings > Collaborators) y añadir el email o username de los nuevos colaboradores.


---Apuntes--- 

>> git config -l
>> Necesitas otra cuenta en GitHub para hacer pruebas

>> En GitHub 
>> Your profile
	>> Clic en la imagen de perfil
	>> Emails

>> Nueva carpeta en el Home
>> mkdir cursos
>> cd cursos/
>> mkdir proyecto1
	>> La diferencia entre este usuario y el resto, es que este usuario que colaborará con el proyecto no hará un git init porque solo se quiere traer el repositorio.

>> https://github.com/freddier/hyperblog/
>> https://github.com/Alexander-VR/hyperblogs/
>> Visitar Hiperblog con otro usuario y clonar archivo
>> Hiperblog 
	>> Clone or download 
		>> Copiar URL HTTPS


>> Dar acceso para que pueda hacer push
>> Dar acceso al nuevo colaborador del proyecto en GitHub
>> Your repositories
	>> hyperblogs
		>> Settings
			>> Manage access
				>> Add people
					>> se puede usar el correo o el user name
					>> Copy invite link
					>> Revisar Correo y Aceptar invitación
					

>> En git
>> cd proyecto1
	>> git clone https://github.com/freddier/hyperblog.gi
	>> Este repositorio al ser publico no pide usuario ni contraseña
	>> ls -al
	>> vim historia.txt
		>> Anita Platzi tiene 41 años y nació en Internet
	>> git status
	>> git commit -am "Mi primer commit, que emoción!!!"
	>> git pull origin master
	>> git log
	>> git log --graph
	>> git push origin master
		>> Colocar usuario(correo) y contraseña
	
>> Verificar en GitHub
	>> hyperblog
		>> Revisar archivo historia.txt
		

>> Ahora en la cuenta original del dueño del proyecto
>> Traernos los cambios que hizo el otro usuario
>> En master
>> git log
>> git pull origin master
>> git log --stat

>> Ahora debemos dividir el trabajo en ramas y al final hacer un merge a master cuando todo esté listo



26. Flujo de trabajo profesional: Haciendo merge de ramas de desarrollo a master

>> En el header agregamos un logo
>> Descargamos una imagen
>> Guardar en:
	>> proyecto1
		>> imágenes -> dragon.png

Las mejores practicas dicen que no se debe agregar imágenes a GitHub, pero en esta ocasión lo vamos a hacer.

En el master solo se envía lo que se esta seguro que esta listo para producción, es una buena practica.

>> Enviar logo al repositorio local
>> cd proyecto1
>> git checkout header
>> git arbolito
>> git add imágenes/dragon.png
>> git status
>> git commit -am "Logo del header"

>> Enviar logo al repositorio remoto
>> git pull origin header
>> git push origin header

>> Verificamos en GitHub
>> Branch Header
>> Control + r
	>> Imágenes -> dragon.png
	
Problema con las imágenes en GitHub:
La imagen es pesada, significa que siempre que se hagan cambios voy a traerme este cambio también y entre mas binarios le agregue al archivo mas pesado va a ser mi repositorio. Si cambio la imagen de una u otra manera, ese cambio va a ser percibido.

>> Modificar imagen y enviarla a GitHub
>> Buscar imagen
>> Clic derecho editar con Paint 3D 
>> Agregar carita =)
>> Guardar
>> git status 
>> git diff
	>> Muestra  que es un archivo binary y no puede mostrar las diferencias y eso es un problema.
>> git commit -am "logo mejorado"
>> git pull origin header
>> git push origin header

>> Revisamos GitHub
>> Branch header
	>> imágenes -> dragon.png
	>> No me muestra los cambios porque los binarios en ocasiones GitHub no actualiza su version en cache
	>> Si copiamos el link de donde está alojada la imagen en otra pestaña me salen todas las actualizaciones y cambios que se le hicieron, eso quiere decir que todo esta ok.

>> Hacer cambios en Hyperblog y CSS -> branch header
>> git status
>> git commit -am "Color de fondo, logo y nuevo y mejor color de header"
>> git status

>> Veamos como va el otro desarrollador en su rama Footer
>> git checkout footer
>> 


>> Trabajo del desarrollador rama Footer en otra maquina
>> proyecto1 -> hyperblog
>> branch master
>> Traer de internet rama footer
	>> git pull origin footer
>> Empezar a trabajar en la rama footer
	>> git checkout footer
	>> git status
	>> git branch
	>> ls -al
	>> vi blogpost.html y CSS-> estilos.css
		>> Hacer cambios
		
>> Revisemos nuestro trabajo en el navegador
>> Agregar UTF-8 para corregir ñ y tildes 

>> Enviamos cambios al repositorio local
>> git status
>> git commit -am "Footer terminado"
>> clear

>> cd ..
>> pwd
>> cd hyperblog/
>> pwd
>> git status
>> git pull origin footer
>> git push origin footer


>> El dueño del proyecto revisa GitHub

>> Revisamos cada rama y su estado en la web
>> git checkout master
>> git checkout header
>> git checkout footer
	>> Esto esta desactualizado
	>> git pull origin footer
	
>> Fusionar ramas
>> git checkout master
>> git merge header
	>> Esc + i -> para agregar el nuevo logo, color de fondo y header final -> Esc + shift + zz
>> git checkout master
	>> Revisamos html en la web

>> Enviar esto a internet
>> git pull origin master
>> git push origin master
		

>> Ahora hacer un merge en master usando el footer 



--Instalar VS Code en Ubuntu--
>> Como un paquete Snap
>> Los snaps son paquetes de software autónomos que incluyen el binario de todas las dependencias necesarias para ejecutar la aplicación. Los paquetes Snap son fáciles de actualizar y seguros.
>> Para instalar VS Code solo tendremos que abrir una terminal (Ctrl+Alt+T)
	>> sudo snap install --classic code

>> Como paquete .deb utilizando apt
	>> Repositorios oficiales de Microsoft
	>> sudo apt update; sudo apt install software-properties-common apt-transport-https wget
	>> wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
	>> sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
	>> sudo apt install code
	>> sudo apt update; sudo apt upgrade


--Limpiar cache APT Ubuntu--
sudo apt clean


---Virtual box pantalla completa---
>> Iniciar maquina virtual
>> Dispositivos
	>> Insertar imagen de CD de las "Guest Additions"
	>> Ejecutar (run)
	>> Contraseña
		>> En consola enter 
>> Abrir una terminal
	>> reboot
	
>> Una vez reiniciado ubuntu
>> Clic derecho
>> Configuración de pantalla
	>> Resolución Elegir resolución 


---Resolver error Guest Additions---
C:\Program Files\Oracle\VirtualBox\VBoxGuestAdditions.iso
>> Archivo -> cerrar -> apagar la maquina -> aceptar
>> En Interfaz de Virtual Box
>> Ubuntu
>> Almacenamiento 
	>> Unidad optica
	>> Eliminar disco de la unidad virtual
>> Iniciar nuevamente la maquina ubuntu


---Solución Reproducción de Video Ubuntu---
>> sudo apt install vlc

también
>> Settings de Firefox
>> General
	>> Digital Rights management (DRM) Content
	>> Contenido sujeto a administración de derechos de autor(DRM)
	>> Activar

además
>> Revisar la Configuración ded la Protección contra rastreo de Firefox
>> Icono de escudo en la pagina que estoy visitando
>> deshabilitar para esta sesión 



27. Flujo de trabajo profesional con Pull requests

En un entorno profesional normalmente se bloquea la rama master, y para enviar código a dicha rama pasa por un code review y luego de su aprobación se unen códigos con los llamados merge request.

Para realizar pruebas enviamos el código a servidores que normalmente los llamamos staging develop (servidores de pruebas) luego de que se realizan las pruebas pertinentes tanto de código como de la aplicación estos pasan a el servidor de producción con el ya antes mencionado merge request.


---Aportes de compañeros---
DevOps

El término “DevOps” es una combinación de las palabras “development” (desarrollo) y “operations” (operaciones), DevOps incluye sistemas de seguridad, maneras de trabajar en colaboración, análisis de datos, entre otras características.

DevOps describe los enfoques para agilizar los procesos con los que una idea (como una nueva función de software, una solicitud de mejora o una corrección de errores) pasa del desarrollo a la implementación, en un entorno de producción en que puede generar valor para el usuario.


---Apuntes---
En la clase anterior decidimos hacer merge directamente al master de la rama header y de la rama footer.

Pero en un entorno profesional se bloquea la rama master, la idea es que nadie pueda hacer merge al master simplemente porque sí  y que en el proceso antes haya un code review.

La forma en la funciona en el mundo real, en el mundo de la programación profesional es la siguiente:

>> Grafico
>> Imagina que tienes una rama master, la rama principal. Lo mas importante de esta rama es que es desde aquí que se envía todo al servidor remoto, al servidor real de producción, donde se alojara la versión final.

>> A veces tenemos que hacer pruebas en entornos que se parezcan al de producción sin que afecte a los usuarios.
Esos tipos de servidores se llaman servidores de desarrollo o servidores de staging. No confundir con staging, el area intermedia antes de enviar todo al repositorio local con un commit.
Son distintos una cosa es staging para el desarrollo y otra es staging dentro de git.

>> Staging en los servidores de desarrollo son ramas que es lo que está justo antes de master y justo aquí está el servidor de pruebas y se parece tanto como sea posible al servidor real.

>> Esto funciona de la siguiente manera:
>> Creamos una rama especial donde se va a tener lo que sea que se esta desarrollando que es la rama de feature o la rama de característica en nuestro caso creamos una para el header y otra para el footer y se desarrollo en el area local normal de toda la vida y luego envían la ultima version de esa rama a staging para hacerle un merge a la ultima version de estaging.
>> En teoría staging y master siempre deberían estar actualizados y esto es trabajo del líder de equipo pero asumiendo que estan actualizados esto se llamaría normalmente merge pero resulta que el merge no es la forma correcta de hacerlo porque en un entorno profesional hay que revisar el código, entonces esto va a un lugar intermedio que se conoce como pull request, un pull request es básicamente un estado intermedio antes de enviar el merge.
>> Lo que el pull request me permite es que otros miembros del equipo puedan ver los cambios que tu hiciste y si les gusta aprobarlos y al aprobarlos se auto ejecuta el merge en staging.
>> Igualmente una vez tu pruebas en staging lo que quieres hacer es fusionar los cambios con la rama maestra entonces haces también un pull request.
>> El pull request no es una característica de git sino de GitHub.

>> El pull request es importante porque le permite a personas que no son colaboradores trabajar y apoyar en una rama.

>> La persona que hace todo lo antes descrito son los lideres de equipo o un perfil muy especial llamado DevOps que es un administrador del entorno de desarrollo que hace que toda la vida del programador sea mucho mas fácil y que los equipos de trabajo trabajen de una manera mas efectiva.



28. Utilizando Pull Requests en GitHub

>> Tenemos 2 problemas por tildes
>> Así que crearemos una rama especial para solucionar estos problemas
>> Jefe!!
>> Rama Master
	>> git pull origin master
	>> git branch fix-typo
	>> git branch
>> Rama fix-typo
	>> git checkout fix-typo
	>> Corregir blogpost.html
		>> párrafo: increíble
	>> git status
	>> git diff
	>> Enviar cambios al repositorio local
		>> git commit -am "Tildes y typos arreglados en el post"
	>> Enviar cambios a GitHub 
		>> git push origin fix-typo 
>> Revisamos en GitHub
	>> Branch Fix-typo
	>> Ahora GitHub me muestra que hay una diferencia entre fix-typo y master
		>> fix-typo (less than a minute ago)	
	>> Repositorio -> hyperblog
		>> Fusionar/Comparar con Master de GitHub (Manual)
			>> New pull request
				>> Base: Master <- Compare: Fix-typo
	>> Comparar Master con Fix-typo (Automatico)
		>> Repositorio -> hyperblog
			>> Compare & pull request
				>> Write: No debimos pasar este error a master.
				>> Reviewers: AleVel: personas que pueden revisar esto
				>> Create pull request
		>> Labels: Crear etiquetas
		>> Projects: Formas de agrupar repositorios dentro de GitHub 
		>> Milestone: Significa que se tenia un objetivo y se logró 
		>> Esto se vuelve útil en el proceso de DevOps, en el proceso de crear un sistema a través del cual nuestros programadores puedan trabajar mejor 

>> El pull request no ejecuta el merge de por sí, simplemente describe lo que está pasando 


>> Colaborador!!!
>> En GitHub
>> Repositorio -> hyperblog
	>> Pull request
		>> Dismiss 
		>> Tildes y typos arreglado en el post
			>> Freddier pide tu revision de este pull request 
			>> Freddy quiere fusionar un commit hacia master de su rama fix-typo
			>> Commits
			>> Files changed
			>> Review changes
				>> Write: En vez de usar tildes directas, usa entidades HTML
				>> Request changes
				>> Submit review


>> Freddy: Jefe
>> Notificación new
>> Tildes y tipos arreglados en el post
>> Aún no podemos hacer merge porque el colaborador está pidiendo cambios 
>> En consola Rama fix-typo
	>> git pull origin fix-typo
	>> Abrir blogpost.html
		>> párrafo: p&aacute;rrafo
		>> increíbles: incre&iacute;bles
	>> git status
	>> git commit -am "Cambio a entidades HTML en vez de tildes"
	>> git push origin fix-typo
>> Revisamos en GitHub
>> hyperblog
	>> Rama fix-typo
	>> blogpost
	>> Retrocedo
		>> View #1
		>> files changed 
	>> Conversation
		>> Write: Cambios hechos, por favor hazme el merge
		>> Comment


>> Colaborador!!!
>> hyperblog
	>> Pull requests
		>> Tildes y typos arreglados en el post
			>> View changes
			>> Review changes
				>> Excelente. Eso era!
				>> Approve
				>> Submit review			
>> Ahora debemos ejecutar el merge
>> Fusionar con master la rama fix-typo
>> Esto lo puede hacer tanto el colaborador como el jefe del proyecto
>> Esto lo hará el colaborador en esta ocasión 
>> Merge pull request 
>> Confirm merge

>> Puedo borrar el branch usado para corregir este error
>> Delete branch: lo elimina de GitHub 

>> Revisamos hyperblog -> master
>> todo bien


>> Freddy: Jefe!!!!
>> Dentro de Git - branch fix-typo
>> git pull origin fix-typo
	>> no se puede encontrar porque la rama fue borrada
>> git checkout master
>> git pull origin master
>> git log
>> git arbolito

>> los git request de lado de git no existen, solo existen en GitHub 


--Referencias--
https://platzi.com/blog/que-es-devops/
https://platzi.com/servidores/



---Instalar Edge en Ubuntu---
Método 1
1. Instalar Microsoft Edge en el escritorio Ubuntu 20.04 LTS

https://www.microsoftedgeinsider.com/en-us/

2. Instalar programa para instalar

sudo apt install gdebi

gdebi

gdebi-gtk

archivo -> abrir -> Esperamos -> instalar paquete



29. Creando un Fork, contribuyendo a un repositorio

---Apuntes---

>> Convertir a un proyecto Open source
>> Dueño 
>> Colaborador que le gusta el proyecto y que quiere aportar

>> GitHub - Dueño
>> Eliminar Colaborador
>> Repositorio
>> hyperblog
>> settings
>> Manage access
	>> x en collaborators
	>> Ahora solo puede clonar el repositorio pero no puede hacer push de ningún tipo, no puede crear ramas ni tags
	>> Tambien puede copiar el proyecto y decirnos quiero hacer estos cambios por favor fusiónelo 
	
	
>> GitHub - Ex Colaborador
>> No tengo repositorios pero quiero aportar a un proyecto
>> https://github.com/freddier/hyperblog
>> hyperblog
	>> Watch -> All Activity (Unwatch)
	>> Star (Unstar)
	>> Fork: 
		>> Tenedor, es cuando se tienen dos caminos y se puede elegir entre cualquiera de esos dos 
		>> En este caso hacer un fork es tomar una copia del estado actual del proyecto y clonarlo y lo clono como un proyecto mío. Característica única de GitHub.
	>> Fork
		>> 30 Commits
			>> Retrocedo 
		>> 1 release
			>> Retrocedo
		>> Contributors
>> Hacer cambios en el proyecto
>> GitHub - Ex Colaborador
>> Desde el repositorio hyperblog clonado por el ex colaborador con un Fork que no es el del dueño del proyecto
>> Code -> Clone
	>> Copiar llave SSH

>> Git - Ex Colaborador
>> cd cursos/old_projects
>> git clone URL SSH
>> ls -al
>> cd hyperblog/
>> ls -al
>> git status
>> Corregir errores -> vi blogpost.html
>> Agregamos datos -> vi historia.txt -> Contribuyo a este proyecto open source
>> git status
>> git diff
>> git commit -am "Tildes con entidades y un mensaje de contribución"
>> git status
>> git push -> Como solo tengo un lugar que es el origin y el master no necesito colocar git push origin master

>> En GitHub - Ex colaborador
>> Vemos los cambios 
>> Crear pull request y merge
>> hyperblog
	>> Pull requests
	>> new pull request
		>> Escoge las dos ramas para saber que cambió y empezar un nuevo pull request
		>> compare across forks: muestras las diferencias entre el master original y mi copia 
		>> base reposito: fredider/hyperblog
		>> base: master  <--  
		>> head repository alex/hyperblog
		>> compare master
		>> Split : Unified
		>> Create pull request
			>> Write: Me encanta este proyecto pero mas me encanta mi novia 
			>> Check en : Allow edits form maintainers 
			>> Create pull request
>> freddier/hyperblog
>> Ahora debemos esperar a que el dueño haga los cambios


>> GitHub -> Freddier
>> gitgub.com -> home
>> Notificaciones
	>> Click freddier/hyperblog : Alguien le hizo un pull request
	>> Ale quiere fusionar 1 commit de mi rama master desde su rama master
	>> Commits
	>> Pull requests
	>> Tildes con entidades y un mensaje de contribución 
	>> Files changed
		>> Viewed: Hacer check para ocultar o Mostrar los 2 cambios hechos
	>> Review changes
	>> Write: ok
	>> Approve
	>> Submit review 
>> Merge pull request
	>> confirm merge
>> freddier/hyperblog
	>> Commits -> branch master
	
>> git
>> En master
>> git status
>> Hacer cambios en blogpost.html
	>> Hyperblog 2.0 es un blog del futuro
>> git status
>> git commit -am "Cambio de titulo"
>> git pull origin master
>> git arbolito
>> git push origin master 
>> En GitHub 
>> Control r
>> freddier/hyperblog
	>> Branch master
	>> Revisar
 
>> Como el hyperblog de Freddy está mas adelantado que el hyperblog de Alex XD debemos traernos esos cambios 

>> GitHub - Ex Colaborador
>> alexPlatzi/hyperblog
>> branch master
	>> This branch is 3 commits behind freddier:master -> Compare
	>> No hay nada que comparar pero
	>> switching the base
	>> Podemos hacer un pull request pero.. lo haremos por consola así que copiemos la URL SSH
>> freddier/hyperblog
>> Branch Master
	>> Clone or download
		>> Use SSH
>> git 
>> Crearemos otra fuente para hacer pull
>> cd hyperblog
>> branch master
>> git remote -v
>> Hacer una rama que traiga los cambios de master de Freddier
>> git remote add upstream URL SSH
	>> UPSTREAM es el nombre al igual que origin y puede ser cualquier nombre
	>> git remote -v
>> git pull upstream master
	>> Nos trajimos todo de master remoto
>> git status
>> git commit -am "Fusion"
>> git push origin master

>> en GitHub 
>> hyperblog
>> alexplatzi/hyperblog
	>> This branch is even with freddier master
	>> blogspost.html



30. Haciendo deployment a un servidor	

En esta clase veremos como hacer deploy de nuestra aplicación utilizando un servidor.

No te preocupes si no has comprado un servidor, no es necesario, puedes instalar un servidor local en tu computadora para realizar pruebas y testear tu aplicación.

En Platzi tenemos una carrera de servidores que te va a ayudar a automatizar mucho más estas tareas: platzi.com/servidores

------------------------------
Cursos a tomar:
https://platzi.com/servidores/


---Apuntes---
Freddie menciona que normalmente la rama master es la que se envía al servidor de producción, depende del flujo de trabajo de cada persona. Ejemplo:
>> Hay grupos de trabajo que lo que hacen es colocar tags a la rama que se envía a producción y eso se envía a producción.

La forma de enviar a producción es similar a como hemos venido trabajando 

En GitHub:
>> freddier/hyperblog 
>> Sabiendo que se tienen varios archivos …

>> Ahora lo que vamos a hacer es ingresar a una URL en la web freddier.com Este es un servidor que Freddie compró hace algún tiempo pero tu puedes tener y usar tu propio servidor. 

>> Para entender como hacer estos servidores
>> Curso de Administración de servidores 
>> Curso de DevOps 

Aqui asumimos que ya sabes como montar un servidor en Linux y en ese servidor voy a entrar a la carpeta donde tenemos los archivos.

En Git:
>> cd /var/www/freddier.com/html/
>> ls -al
>> Archivos index.html y un test.html
	>> cat index.html: Solo es un test del sistema
	>> cat text.html: Es una prueba
	
En la Web:
>> Si ingreso a freddier.com/test.html
	>> texto: Es una prueba
>> Todo lo anterior es un servidor en enginex que Freddie configuró en un proveedor de cloud que había consumido antes. No se estresen por eso!!!	

En GitHub
>> Traer a local el repositorio de GitHub
>> Code -> Clone -> Copiar SSH

En Git
>> git clone URL SSH
>> ls -al

En la web
>> www.freddier.com/hyperblog/blogpost.html
>> Nos muestra la web creada con html y CSS

En GitHub
>> Hacer cambios en blogpost -> edit
>> <h1> Aqu&iacute; inicia la historia de un gran proyecto </h1>
>> Commit changes
	>> Cambio del título visible para probar un deploy
	>> Commit directly to the master branch
	>> Commit changes
>> Home hyperblog: Vemos los cambios


En Git:
Traemos los cambios en local donde estan los archivos que estan abiertos en el navegador para poder ver los cambios
>> cd hyperblog/
>> ls -al
>> git status
	>> Your branch is up to date with 'origin/master'
>> git pull origin master
>> Ahora ya vemos los cambios en la web
>> ls -al

Esta es la base mas sencilla para hacer un Deploiment
Esta no es una buena practica para hacer Deploiment, esto solo es una muestra pequeña porque alguien podría tener acceso al archivo .git y a toda nuestra base de datos de cambios a través de esto, entonces tenemos que proteger el .git . Si usas apache hay unas formas, o enginext hay otras. Esto lo aprendes en la carrera de administración de servidores

Tambien hay formas mas avanzadas de hacer esto, hay una pagina que se llama travis-ci.org que es como un GitHub que lo que hace es conectar automáticamente tus ramas de GitHub con tus servidores. Tu le colocas permisos de tu servidor, permisos de GitHub y cuando le haces push a una rama ejemplo llamada deploiment el atumaticamente detecta esto y lo va a mandar.

Por ejemplo: Si tienes código que tiene que ser construido como un JavaScript que tiene que tener procesos o un CSS, automáticamente puede disparar esos procesos.

Travis cuesta dinero a menos que lo estés usando para proyectos open source, pero si tu quieres instalar uno tienes Jenkins.io esto es otro sistema que te permite hacer esto y este se instala y es increíblemente poderoso pero es muy complejo y esto lo enseñan en cursos de integración continua. El curso de GitLab te enseña a profundidad estas cosas



31. Hazme un pull request

Aviso importante del Team Platzi

¡Muchas gracias por tu participación en este reto! Hasta agosto de 2020 hemos procesado 1.269 pull requests en el repositorio del curso. Ahora hemos decidido cerrar este experimento, por lo que no seguiremos aprobando nuevos PRs. ¡Pero no te desanimes! Aún así te animamos a completar y enviar tu solución a este desafío para poner en práctica todo lo que has aprendido.

Queremos que uses las habilidades ya aprendidas para aplicarlas en esta clase. Haz un fork de el repositorio de GitHub y realiza las tareas que te indicaremos en esta clase. Ojo, debes seguir las reglas e instrucciones que se dieron en el video.

Regla a seguir:

Dentro del ID “post” luego de “suscribete y dale like” agrega otra línea o párrafo con tu nombre o tu nombre de usuario en Platzi.
¡Suerte! Y #NuncaParesDeAprender

---Apuntes---

Desafío Ver clase 29
>> Ir a hyperblog en freddier/hyperblog
>> Hacer un fork
>> Estrella y un Watch
>> Hacer un pull request
	>> Reglas:
		>> En blogpost
			>> Dentro del Id="post"
				>> Debajo de suscríbete y dale like
				>> Agregar otro párrafo con tu nombre o id de usuario de platzi
		>> Pull request
				


32. Ignorar archivos en el repositorio con .gitignore

No todos los archivos que agregas a un proyecto deberían ir a un repositorio, por ejemplo cuando tienes un archivo donde están tus contraseñas que comúnmente tienen la extensión .env o cuando te estás conectando a una base de datos; son archivos que nadie debe ver.

---Apuntes---

No todos los archivos que agregas a un proyecto deberían ir a un repositorio.
	-> Archivos donde estan las contraseñas
	-> Codigo de ipi
	-> Base de datos 

Git tiene algo llamado git ignore y lo puedes ver en otros proyectos open source de GitHub.

Una buena practica es evitar que los archivos binarios del contenido sean parte de un repositorio, algunos archivos binarios como el logito que pusimos de Space X puede que pasen pero la gran mayoría no

Entonces, digamos que quiero agregar una imagen justo en el centro de mi blogposts, vamos a guardar esta imagen proyecto1/imágenes equipo.jpg 

En git
>> Abrimos el blogpost agregamos la imagen
	>> <p><img src="imágenes/equipo.jpg" width="100%"/></p>
	>> También:
	>> <p><img src="https://i.imgur.com/Gdp3Nlr.png" alt="" width="50%"></p>
>> git status
>> Crear nuevo archivo para ignorar cosas
	>> cd proyecto1/.gitignore
		>> .gitignore: es una lista de los archivos que vamos a ignorar y la sintaxis es similar a si estuvieras buscando un archivo en algún lugar * significa todo tipo de archivos
		>> *.jpg
		>> Con esto va a ignorar el 100% de los jpg
>> git status 
>> git add .gitignore
>> git status
>> git commit -am "Agregué una imagen al blog"
>> git status
>> git pull origin master
>> git push origin master


En GitHub 
>> Vemos los cambios

Subir imágenes a algún lado
>> imgur
>> ftp
>> conter delivery network 
>> rzing

Buscar inspiración en otros proyectos
>> laravel/laravel
	>> archivo .gitignore
>> Vuejs/vue
>> TryGhost / Ghost
>> arduino/Arduino


---Desafio---
Intenta agregar la imagen a algún lugar externo 
>> imgur.com -> subir gratis imágenes
>> De esta manera tienes un lugar externo desde donde la imagen funciona y sin necesidad de tenerlo en el repositorio, así sabes como referenciar archivos de otro lado en tu propio sistema.



33. Readme.md es una excelente práctica

README.md es una excelente práctica en tus proyectos, md significa Markdown, que es una especie de código que te permite cambiar la manera en que se ve un archivo de texto.

Lo interesante de Markdown es que funciona en muchas páginas, por ejemplo la edición en Wikipedia; es un lenguaje intermedio que no es HTML, no es texto plano, es una manera de crear excelentes texto formateados.

https://pandao.github.io/editor.md/en.html

---Apuntes---
Markdown: https://www.markdowntutorial.com/lesson/1/
https://www.markdowntutorial.com/es/conclusion/

Negrita: **Negrita**
Cursiva: _Cursiva_
Encabezados: #Encabezados# -> hasta 6#
Links: (Links) -> [Links]
Imagen: ![Imagen] -> !(Imagen)
Frases: > "Frases o párrafos"
	   >
	   > "algo mas"
Lista: * Milk
	  	* Eggs
	  	* XD
	  1. Algo
	  2. Otro

-----MARKDOWN-----
**Bold2**
_Italics_
#Header - 6#
[Search](Link)

[Place][referenceName]
[referencName]: link.com

![lmageName](link)

![Black cat][black]
[black]: https://cat.png

> "Phrase"
> space
Paragraph

* List
   * Secondary list
1. One List
--- empty 
.   Empty space
--- empty 
.   > Phrase 

Paragraph One..
--- 2 empty space 
Paragraph Two..
--- 2 empty space
Paragraph Three..

Los .. son espacios vacíos (No enter)
The .. are empty space (Not enter)


La forma de aprender readme.md es inspirarnos en proyectos open source.
Readme.md existe porque queremos contarle al mundo de que es un repositorio.

Ver como está construido un Readme.md
>> Ingresar en un repositorio
>> readme.md 
	>> edit -> lapicito 
	>> puedes ver como está construido 
	
Markdown: Es como un lenguaje intermedio que no es HTML no es un texto plano 	


Editemos nuestro README.md
>> Abrirlo en VSC o usar un editor online -> M editor.md

# Hyperblog 💚 green heart https://emojipedia.org/green-heart/
Un blog increíble para el[ curso de Git y Github](https://platzi.com/cursos/git-github/ " curso de Git y Github") de [Platzi](https://platzi.com/ "Platzi")
> El curso de Git y Github de Platzi es lo que me hacía falta para triplicar mi salario y lanzarme a la industria del tejido de lana sintética con Machine Learning
> - niñita

## En este curso vemos de todo
* Todos los comandos de Git
* El flujo de trabajo en Github
* El verdadero amor por las buenas prácticas
* Trucos muy locos del profesor
* Las personalidades múltiples de Freddy
* Creado por el increíble Platzi Team
* Incluye ejemplos en Windows, Linux y Mac
* Disponible para todas las edades

Y como un amable recordatorio: **Este readme.md es un chiste**.  Diseñado para el ejemplo. Si llegas acá NO TE LO TOMES EN SERIO y mejor ve [**a ver el curso**](https://platzi.com/cursos/git-github/ "a ver el curso").

>> En git
>> git pull origin master
>> git status
>> git commit -am "README modificado para explicar bien el proyecto a futuros estudiantes"

>> git push origin master



34. Tu sitio web público con GitHub Pages

GitHub tiene un servicio de hosting gratis llamado GitHub Pages, tu puedes tener un repositorio donde el contenido del repositorio se vaya a GitHub y se vea online.

Publica tu página en GitHub Pages y compártelo con la comunidad en el área de discusiones de la clase, ¡te esperamos!

---Apuntes---
Publicar una pagina:
>> pages.github.com
>> Solo necesitas un repositorio hosteado 

>> Crear un repositorio nuevo que tenga tu nombre de usuario
En GitHub
>> home -> New
>> Create a new repository
>> Ewner: freddier / Repository name: freddier
>> Description: ejemplo de un Github page
>> Publico
>> Create repository
>> el repositorio se llama: https://github.com/freddier/freddier
>> SSH -> copiar


En Git
>> home -> cd
>> ls -al
>> git clone URL-SSH
>> ls -al
>> cd freddier/
>> ls -al
Crear archivo index.html
>> vim index.html
	>> <h1>Este es un sitio web con GitHub Pages</h1>
	   <p>Y fue creado con amor para el curso de Git y GitHub de Platzi green heath </p>
	   <p><img src="url de ingur"></p>
>> git status
>> git add .
>> git commit -am "Mi primer diseño de pagina en GitHub"
>> git remote -v
	>> Conectado a Freddier/freddier.git
>> git push origin master

En github 
>> Configurar Repo para que cargue github page
>> freddier/freddier
	>> Corrijamos la ruta o url para que cargue en la raiz 
	>> Settings del repo freddier
	>> Repository name:
		>> freddier.github.io -> rename
		>> Save
	>> Settings
	>> Bajamos
		>> GitHub Pages
			>> Pages settings now has its own dedicated tab! Check it out here!
			>> Source -> branch master 
			>> Save		
			>> Clic en URl
>> Revisamos repositorio 
>> todavia: freddier.github.io

>> Settings
	>> GitHub Pages
		>> Pages settings now has its own dedicated tab! Check it out here!		
		>> freddier.github.io/index.html
		
Ahora hacer lo mismo pero con hyperblog
>> settings
	>> GitHub Pages
		>> Pages settings now has its own dedicated tab! Check it out here!
		>> Source -> None: branch master 
		>> SAVE
	>> Esperar y picarle al link y agregar a la ruta:
		>> hyperblog/blogpost.html
	


35. Git Rebase: reorganizando el trabajo realizado

El comando rebase es una mala práctica, nunca se debe usar, pero para efectos del curso te lo vamos a enseñar para que hagas tus propios experimentos. Con rebase puedes recoger todos los cambios confirmados en una rama y ponerlos sobre otra.

# Cambiamos a la rama que queremos traer los cambios
	git checkout experiment
# Aplicamos rebase para traer los cambios de la rama que queremos 
	git rebase master


---Apuntes---
Esto es una mala practica enviándolo a repositorios remotos solo se debería hacer en local.
En general la historia en los repositorios remotos debería mantenerse intacta, rebase es solo para repositorios locales porque rebase re escribe la historia del repositorio.

En Git
>> Rama master
>> Abrimos historia.txt
	>> Editamos: Master 1
>> git commit -am "Master 1"
>> git arbolito
Crear rama
>> git branch experimento
>> git checkout experimento
>> Editamos: Experimento 1 -> guardamos cambios 
>> git commit -am "Exp 1"
>> git arbolito
>> Sigamos editando: Experimento 2 -> guardamos cambios
>> git commit -am "Exp 2"
>> git checkout master
>> git checkout experimento
Pegar branches a la rama master -> Traer cambios existentes en master a la rama experimentos
>> git checkout experimento
>> git rebase master
Branch master
>> git checkout master
>> Editemos historia.txt: Master 2
>> git commit -am "Master 2"
Branch experimento
>> git arbolito
>> git rebase master
	>> Se trajo todo de master
Branch master
>> git checkout master
>> git rebase experimento
>> git arbolito
>> git pull origin master
>> git push origin master


Primero se le hace rebase a la rama que voy a borrar de la historia y luego se le hacer rebase a la rama principal o sino se entra en un conflicto extraño 


En GitHub 
>> Revisamos historia.txt -> history

En Git
>> git branch -D experimento
>> git arbolito

Esto es un rebase, es la forma de hacer cambios silenciosos en otras ramas y volver a pegar la historia de esa rama a una rama anterior haciéndole un rebase 
Pero:
No queda historia
No se sabe realmente quien hizo cambios 
Y en ocasiones la rama master avanzo mucho puede crear conflictos 



36. Git Stash: Guardar cambios en memoria y recuperarlos después

Cuando necesitamos regresar en el tiempo porque borramos alguna línea de código pero no queremos pasarnos a otra rama porque nos daría un error ya que debemos pasar ese “mal cambio” que hicimos a stage, podemos usar git stash para regresar el cambio anterior que hicimos.

git stash es típico cuando estamos cambios que no merecen una rama o no merecen un rebase si no simplemente estamos probando algo y luego quieres volver rápidamente a tu versión anterior la cual es la correcta.


---Apuntes---
>> gitk
Branch Master
>> Abrimos blogpost.html y nos equivocamos adrede 
>> git status
>> git branch
>> git stash
	>> Volvió al estado anterior a los errores 
	>> Los cambios erróneos se guardaron en un lugar temporal
	>> git stash list
		>> Lista todo los cambios 
		>> WIP: Work in progress 
Branch footer
>> git checkout footer
>> Vemos en el navegador que todo esta bien en esta rama
Branch master
>> git stash pop
	>> Vuelve al estado donde habían errores
	>> Control z
Guardar cambios y ponerlos en una rama
>> Hacer cambios a la cabecera hyperblog.html
	>> Your first option in blogs</span>
>> git stash
>> git stash list
>> git stash branch english-version 
	>> Todos los cambios se movieron a otra rama
Branch English-version
>> git branch
>> git status
>> git commit -am "I speak english now"
>> git status
>> git branch
>> git checkout master
>> git stash list
Hacer cambios y no guardarlos
>> Cambios error en blogpost.html y historia.txt
>> git stash
	>> Todo se arregló solito al ultimo commit
>> git stash list
>> git stash drop
	>> Eliminar esos cambios 
	
Stash es una forma útil de tener el temporal cambios y poder moverte entre ramas y luego poder recuperarlos.



37. Git Clean: limpiar tu proyecto de archivos no deseados

A veces creamos archivos cuando estamos realizando nuestro proyecto que realmente no forman parte de nuestro directorio de trabajo, que no se deberían agregar y lo sabemos.

- Para saber qué archivos vamos a borrar tecleamos git clean --dry-run
- Para borrar todos los archivos listados (que no son carpetas) tecleamos git clean -f


---Apuntes---
Replicar varios archivos para la prueba (historia y css)
>> git status
>> Git sabe cual es la estructura de tu directorio de trabajo y si tienes archivos que no has agregado y en vez de agregarlos los quieres quitar eliminar usar un comando llamado.
>> git clean --dry-run
	>> Saber que archivos se van a borrar 
	>> dry-run: ejecución en seco 
>> git clean -f
	>> borra todo menos las carpetas que deben ser borradas manualmente y las imágenes porque git las está ignorando



38. Git cherry-pick: traer commits viejos al head de un branch

Existe un mundo alternativo en el cual vamos avanzando en una rama pero necesitamos en master uno de esos avances de la rama, para eso utilizamos el comando git cherry-pick IDCommit.

cherry-pick es una mala práctica porque significa que estamos reconstruyendo la historia, usa cherry-pick con sabiduría. Si no sabes lo que estás haciendo ten mucho cuidado.

---Apuntes---
Abrimos README.md
>> * Creado por el increíble platzi team 
>> git stash
>> git stash branch readme-mejorado
Branch readme-mejorado
>> git commit -am "Créditos al team platzi"
>> git status
>> git arbolito
>> git log --oneline
>> Editamos README.md
	>> * Incluye ejemplos en Windows, Linux y Mac 
>> git commit -am "Ejemplos en Windows, Linux y Mac"
>> git log --oneline
>> Editamos README.md
	>> * Disponible para todas las edades
>> git commit -am "Diverso y atractivo para todos"
>> git log --oneline
	>> Copiar commit
Branch master
>> git checkout master
>> Traer de readme mejorado una sola línea de texto
>> git cherry-pick dca2a24
>> git status
>> git commit -am "Una sola línea"
>> git log --oneline
>> git pull origin master
>> git push origin master
Revisamos GitHub 
Fusionar ambas ramas
Branch master
>> git merge readme-mejorado
>> Corregir conflicto
	>> Accept both changes
	>> Esto fusiona ambas cosas
>> git status
>> git commit -am "Readme mejorado"
>> git pull origin master
>> git push origin master



39. Reconstruir commits en Git con amend

A veces hacemos un commit, pero resulta que no queríamos mandarlo porque faltaba algo más. Utilizamos git commit --amend, amend en inglés es remendar y lo que hará es que los cambios que hicimos nos los agregará al commit anterior.

---Apuntes---
Poner el color de fondo de hecho con amor por platzi y cambiar tu blog de cabecera por tu blog de confianza

Abrimos blogpost.html
>> Tu blog de confianza</span>
>> git status
>> git commit -am "Cambio al tagline y color del footer"
Como nos olvidamos de cambiar el color del footer
Abrimos estilos.css
>> #footer
{
	background: #37488b;
}
>> git add css/estilos.css
>> git commit --amend
	>> amend: remendar
	>> Hace que los cambios anteriores se peguen a los cambios recientes y no va a crear un commit nuevo.
	>> :)
>> git status
>> git arbolito
>> git log --stat



40. Git Reset y Reflog: úsese en caso de emergencia

¿Qué pasa cuando todo se rompe y no sabemos qué está pasando? Con git reset HashDelHEAD nos devolveremos al estado en que el proyecto funcionaba.

	- git reset --soft HashDelHEAD te mantiene lo que tengas en staging ahí.
	- git reset --hard HashDelHEAD resetea absolutamente todo incluyendo lo que tengas en staging.
git reset es una mala práctica, no deberías usarlo en ningún momento; debe ser nuestro último recurso.


---Apuntes--- 
Que pasa cuando todo se rompe?
Hagamos la simulación

En Git
Branch master
>> Borrar blogpost
>> git commit -am "Bladkfsafs amo Platzi"
Branch Cabecera
>> git checkout cabecera
>> git merge master
>> cd ..

Al volver a Git
Branch cabecera
>> cd proyecto1/
>> git log
>> gitk
Branch master
>> git checkout master
>> git branch -D cabecera
>> git log --oneline
Volver al lugar correcto
>> git reflog
	>> Aquí se ve todo, tanto el hash como el HEAD
	>> Tratas de buscar cual fue el ultimo HEAD donde todo era correcto
>> Copiamos el HEAD@4 // no
>> Vemos la carpeta
>> git reset --hard HEAD@{4} // no
	>> Trae la posición a donde estuvimos antes
>> git reset HEAD@{4} // no
>> git status
>> git reflog
>> Copiamos el hash del punto en donde todo estaba bien
>> git reset --hard c894560
>> git arbolito
>> git branch 
>> git pull origin master
>> git push origin master
Reviso GitHub



41. Buscar en archivos y commits de Git con Grep y log

A medida que nuestro proyecto se hace grande vamos a querer buscar ciertas cosas.

Por ejemplo: ¿Cuántas veces en nuestro proyecto utilizamos la palabra color?

Para buscar utilizamos el comando git grep color y nos buscará en todo el proyecto los archivos en donde está la palabra color.

	- Con git grep -n color nos saldrá un output el cual nos dirá en qué línea está lo que estamos buscando.
	- Con git grep -c color nos saldrá un output el cual nos dirá cuántas veces se repite esa palabra y en qué archivo.
	- Si queremos buscar cuántas veces utilizamos un atributo de HTML lo hacemos con git grep -c "<p>"


--Apuntes--
Branch master
Buscar color - la - platzi
>> git grep color
>> git grep la
Saber la línea donde se usó
>> git grep -n color
>> git grep -n platzi
Contar la cantidad de veces que aparece una palabra 
>> git grep -c la
>> git grep -c Platzi
Buscar cuantas veces se usó la etiqueta p
>> git grep -c "<p>"

Buscar en los commits
Buscar cuantas veces usé la palabra cabecera
>> git log -S "cabecera"

grep para los archivos
log para los commits



42. Comandos y recursos colaborativos en Git y GitHub

Hay una serie de comando que uno repite constantemente y yo te enseñe alias a nivel global pero también hay alias internamente dentro de git.

Te voy a mostrar una serie de comandos que escribió Harry Robert para manejar su equipo de una manera mas colaborativa y como guardalos no como un camando global de tu consola si no como comando específicos dentro de git

Comandos:
>> git shortlog
Diseñado para ver cuantos commits ha hecho cada miembro del equipo 
>> git shortlog -sn
Muestra las personas que hicieron commits
>> git shortlog -sn --all
Muestra las personas y el numero de todos los commits que realizaron incluido los borrados
>> git shortlog -sn --all --no-merges
No incluye los merges porque básicamente son trampa
>> git config --global alias.stats "shortlog -sn --all --no-merges"
Crear un comando global stats o estadísticas que se llama digitando la palabra stats
>> git stats
Este es un alias que creamos para acortar el comando y nos muestra las estadísticas de commits sin merges de cada uno de los miembros del repositorio donde estoy en este momento
>> git blame blogpost.html
Saber quien hizo que cosa (blame - culpa), nos muestra línea por línea quien hizo cada cosa
>> git blame -c blogpost.html
Muestra lo mismo pero con mejor indentación 
>> git blame --help
ver como funciona un comando por dentro, Cualquier comando, esto abre el navegador mostrando el manual 
>> git blame css/estilos.css -L35,53
Quien modifico que por ultima vez, desde la línea 35 hasta la línea 53
>> git blame css/estilos.css -L35,60 -c
agrega un poco mas de formato y lo muestra mas claro
>> git branch -r
Muestra las ramas remotas
>> git branch -a
Muestra todas las ramas. En blanco las locales y en rojo las remotas


En GitHub
>> Panel llamado Insights
En pulso muestra cuantos pull request se hicieron merge, cuantos pull request se han propuesto, que issues o problemas se han cerrado, básicamente reportar bugs y donde puede que estén y la historia de todas las configuraciones, muestra quienes son los contribuidores.
-> Revisamos un proyecto: TryGhost/Ghost
Pulse
Contributors
Community
Traffic
Alerts: Es privado y es cuando GitHub se da cuenta que hay un problema que hay que ponerle atención
etc



43. Tu futuro con Git y GitHub

¡Felicitaciones por terminar el Curso profesional de Git y GitHub!

Aprendimos cómo usar Git y GitHub, hacer merge request, investigar quién hizo qué a través de la línea de comandos, cómo utilizar GitHub Pages, cómo revertir cambios y mucho más. Ahora queda de tu parte experimentar, fallar, subir, borrar y por último hacer deploy de tu proyecto y compartirlo con la comunidad.

Recuerda resolver los ejercicios, completar el examen, darle 5 estrellas al profesor y compartir tu proyecto, notas, todas tus dudas y comentarios en la sección de discusiones.

Lecturas recomendadas

Curso Básico de Jenkins

https://platzi.com/jenkins/


Curso Microsoft Azure IaaS | Platzi

https://platzi.com/cursos/azure/


Curso de GitLab

https://platzi.com/gitlab/


Curso Profesional de DevOps

https://platzi.com/devops/


Curso de Azure Iaas

https://platzi.com/cursos/azure-iaas/






wQ4TKUrkQ8

mc3463257@gmail.com
$7kp22jbyP!7z@YB6$!W


Alt + 164 = ñ
Altgr + 4 = ~ en ubuntu



Aplicación que deje copiar el texto de una imagen.

David Behar
Angelo Paul Yenque Tume


#0a131e


