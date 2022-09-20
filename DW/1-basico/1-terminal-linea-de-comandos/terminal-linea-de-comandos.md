# Curso de Introducción a la Terminal y Línea de Comandos
> **Enrique Devars** - [Frontend Developer en Platzi](https://platzi.com/profesores/codevars/)    
> **@codevars**

[Link curso](https://platzi.com/cursos/terminal/)

## 1. ¿Qué es la terminal?

Si algunas vez viste una película de hackers, seguro has visto la ventana negra que abren en sus computadores, dónde escriben muchas letras sin sentido. Esto se conoce como terminal, pero, te lo explicaremos más a detalle.

Beneficios:      
- Flexibilidad
- Velocidad
- No siempre cuentas con una interfaz gráfica

### La terminal 
La terminal es un programa que ejecuta líneas de comandos, que a su vez estas líneas de comando ejecutan acciones y aquí tienes que aprender dos conceptos: **terminal** y **shell**.

- Terminal:    
	Estamos muy acostumbrados a que en nuestra computadora inicie un sistema operativo que tenga un sistema de ventanas en el que podemos abrir carpetas y programas y podamos mover archivos a través de una interfaz gráfica.
	
	La terminal es una ventana más, es un programa, una interfaz que recibe un comando para luego pasárselo a la **shell** y que esta última la ejecute. Con este programa podemos hacer todo lo que el sistema de carpetas e interfaz gráfica del sistema operativo puede hacer, pero utilizando comandos.

- Shell (Línea de comandos): 
	Ahora la **terminal** no ejecuta líneas de código, solo la recibe, es la **shell** quien hace todo el proceso de tomar el comando, ir con el procesador y la memoria RAM y decirles “tomen, ejecuten esto”.

Si lo pensamos de otra forma, la **shell** nos proporciona una forma de comunicarnos con el procesador y la RAM sin tener que pasar por la interfaz gráfica.


### ¿Por qué usar la shell y no la interfaz gráfica?

Al final del día, la interfaz gráfica, como lo es el sistema de ventanas, es un programa más y como programa que es ocupa espacio en la memoria. De hecho, si estás en Windows 10 y abres el administrador de tareas en la pestaña Procesos, en el grupo Procesos de Windows, encontrarás uno llamado Explorador de Windows.

![Administrador de tareas](https://i.postimg.cc/XJSwyrc3/1-adm-de-tareas.png)

Este programa no es todo el sistema de ventanas, pero si es todo el sistema de ficheros y como podemos ver ocupa espacio en CPU y en memoria RAM.

La **terminal** es mucho menos pesada que el sistema de ventanas y el sistema de ficheros porque te comunicas directamente con los recursos del sistema operativo sin pasar por la interfaz gráfica.

Además hay casos en los que no cuentas con una interfaz gráfica o también puede dañarse y tendrás que resolver utilizando la terminal de comandos.


Tipos de Shells
- Bourne Shel
- **Bash Shell**
- **Z Shell**
- C Shell
- Korn Shell
- Fish Shell
- PowerShell

Un comando es:     
Un programa que se puede ejecutar desde la terminal. Este puede recibir parámetros y opciones. 



**NOTA:** Para este curso necesitarás estar usando un sistema operativo basado en Linux o tener instalado Windows Subsystem for Linux en windows.

Si no sabes como instalarlo, en el [Curso de Prework en Windows](https://platzi.com/cursos/prework-windows/) tienes más detalles.


✨ [Herramienta](https://linuxjourney.com/) para aprender, reforzar y convertirte en un Master en la terminal

🔥 Comandos básicos de Linux  

1.  comando pwd
2.  comando cd
3.  comando ls
4.  comando cat
5.  comando cp
6.  comando mv
7.  comando mkdir
8.  comando rmdir
9.  comando rm
10.  comando touch
11.  comando locate
12.  comando find
13.  comando grep
14.  comando sudo
15.  comando df
16.  comando du
17.  comando head
18.  comando tail
19.  comando diff
20.  comando tar
21.  comando chmod
22.  comando chown
23.  comando jobs
24.  comando kill
25.  comando ping
26.  comando wget
27.  comando uname
28.  comando top
29.  comando history
30.  comando man
31.  comando echo
32.  comando zip, unzip
33.  comando hostname
34.  comando useradd, userdel


Otros apuntes    
- [Notion](https://www.notion.so/Introducci-n-a-la-Terminal-y-L-nea-de-Comandos-5ed377c3c79e4313b0796b679cb1dc73)
- [GitHub](https://github.com/francomanca93/terminal-y-linea-de-comandos/blob/master/apuntes.md)
- [Notion](https://aluminum-kick-a4f.notion.site/Terminal-de0cbfe5f508435bbfb608952b408579)


- [Slides del curso](https://static.platzi.com/media/public/uploads/slides-introduccion-termina-linea-comandos_32871700-429d-41ca-a5a5-dc0bf402c4c6.pdf)

🎲

## 2. Opcional: Instalar WSL - usa Linux dentro de Windows

Hola, para este punto de tu ruta de aprendizaje quizás ya tengas una terminal basada en Unix instalada en tu computadora.

Si utilizas Linux de forma nativa o macOS como tu sistema operativo por defecto, ya tienes una terminal en tu computadora, así que puedes saltarte esta clase.

Si utilizas Windows 10 u 11 necesitarás instalar **WSL (Windows Subsystem for Linux)**, una de las herramientas más poderosas que usarás en tu día a día si quieres usar una terminal de Linux desde Windows. Si todavía no has instalado WSL es momento de que sigas cada uno de los siguientes pasos.

### Instalar WSL y Ubuntu

**WSL** es la base con la que haremos que alguna distribución de Linux pueda correr dentro de nuestra computadora con Windows 10 u 11.

Una vez que se tenga instalada esta herramienta podrás instalar una gran variedad de distribuciones de Linux como Ubuntu o Debian.

Para nuestro caso instalaremos **Ubuntu 20.04 LTS** (también puedes instalar la versión 22.04 LTS), pero puedes escoger cualquier otra por la que tengas preferencia y ya sepas utilizar.

Para instalar estas dos herramientas toma las siguientes 3 clases del **Curso de Prework: Configuración de Entorno de Desarrollo en Windows**:

1.  [¿Qué es Windows Subsystem for Linux?](https://platzi.com/clases/2042-prework-windows/32465-que-es-windows-subsystem-for-linux/)
2.  [Instalación de Windows Subsystem for Linux](https://platzi.com/clases/2042-prework-windows/32489-instalacion-de-windows-subsystem-for-linux/)
3.  [Configuración de Ubuntu en WSL](https://platzi.com/clases/2042-prework-windows/32934-configuracion-de-ubuntu-en-wsl/)

Sigue paso a paso las instrucciones de estas clases para que tengas con éxito la instalación de WSL y Ubuntu en tu computadora.

De igual forma te comparto la [documentación oficial de Microsoft](https://docs.microsoft.com/es-mx/windows/wsl/install-win10) de este proceso y te invito a que dejes en los comentarios cualquier duda o inconveniente con el que te hayas topado al instalarlas para que podamos apoyarte.

📌 Tambien puedes usar Git

🎲

## 3. Aprendiendo a caminar en la terminal

### Sistema de archivos
En los sistemas operativos organizamos los archivos en una estructura de carpetas en forma de árbol jerárquico. Este árbol cambia dependiendo de los diferentes sistemas operativos (no tanto en Linux y Mac).

El sistema operativo con el que trabajaremos es Linux, por lo tanto usaremos su estructura. Observa el siguiente esquema:

![Sistema de archivos](https://i.postimg.cc/26FYYCpk/3-sistema-archivos.png)

La carpeta con el símbolo “/” es la raíz, ahí es donde comienza todo el sistema de ficheros (el equivalente en Windows podría ser el fichero “C:\”). Dentro de esta carpeta hay varios ficheros, el que nos importa en este momento es el “Home”.

La carpeta “Home” contiene una carpeta por cada usuario del sistema y ya dentro de cada una de estas carpetas, estarán las carpetas que conocemos de toda la vida como imágenes, documentos, música, etc.


### Cómo entender la información al inicio de la terminal

Cuando abrimos la terminal vamos a ver algo como esto:

```css
johnlennon@DESKTOP-3R804MK:~$
```

Todo esto parece un mensaje encriptado, pero es más sencillo de lo que parece, vamos por partes:

-   **johnlennon** es el nombre del usuario que está activo. En tu caso aparecerá el nombre del usuario que esté activo en tu computadora.
-   **DESKTOP-3R804MK** es el nombre que el sistema operativo le dio a la computadora. En este caso se usa Windows y ese es el nombre que en la instalación Windows le asignó al dispositivo. Si usas Linux aparecerá el nombre del PC que hayas colocado en la instalación.
-   **~** es la carpeta en la que te encuentras y ahora es cuando empiezan las confusiones porque en el esquema no estaba una carpeta con ese símbolo. Más adelante verás como todo tiene sentido.
-   Por último, **$** significa que somos un usuario normal y no un root o un supe usuario. Más adelante hablaremos más acerca de esto.


### Algunos comandos:
- `ls`: Lista archivos
	- Las carpetas y archivos son de diferente color
	- `ls -l`: -long info de archivos
	- `ls -lh`: Lectura human muestra cuanto pesa cada archivo y mas datos
- `cd`: Changing directory 
	- Necesita nombre de la carpeta a ingresar
	- `cd`: Nos lleva al home ~
	- `cd ~`: Nos lleva al home
	- `cd /`: Lleva a la raíz donde están todas las carpetas del sistema operativo
	- `cd .`: Indica la carpeta actual
	- `cd ..`: Retrocede una carpeta 
	- `cd ../..` : Retrocede dos carpetas
	- `cd Pictures`: Ejemplo de acceso a carpetas
	- `cd /home/codevars/Documents/Dev`
- `clear`: Limpia la terminal
	- `control + l`: Otra forma de limpiar terminal 
- `pwd`: Print working directory muestra la ruta
- `file`: describe tipo de archivo
	- `file archivoCualquiera`
	- `file ./Pictures/screenshot.png`


![Anatomía de un comando](https://i.postimg.cc/wMbDJJrf/3-anatomia.webp)


Operadores de rutas relativas: `. y ..`    
- Un `.` nos señala el directorio actual
- Dos `..` indica un directorio hacia atrás 


📌 Con el tabulador 🔁 autocompleta coincidencias en archivos
📌 Presiona las flechas ⬆ ⬇ para ver los comando usados recientemente. 

- Home: Carpeta donde encontramos al usuario
- User: Dentro existen subcarpetas con diferentes contenidos
- ~ : Referencia al Home o root

✨ ~ Home:  alt + 126
✨ ^ = alt  + 94

🎲

## 4. Manipulando archivos y directorios

- `ls` 
	- `ls -la`: Muestra todos los archivos incluyendo ocultos
	- `ls -lSh`: Size mayúscula, tamaño, talla ordena de mayor a menor tamaño
	- `ls -lr`: Ordena por abecedario al revés 
- `tree`: Despliega todos los archivos en forma de árbol 
	- `tree -L 2`: Levels niveles, profundiza en 2 niveles
	- `tree -L 1`: Parecido al ls
- `mkdir`: Make directory crear carpetas
	- `mkdir newDirectory`:
	- `mkdir "Mi Directorio"`: Nombra carpetas con espacios 
	- `mkdir dir1 dir2 dir3`: Crea varias carpetas de una sola vez
- `touch`: Crear archivos
	- `touch miArchivo`
	- `touch file1 file2 file3`
- `cp`: Copy, copiar archivos
	- `cp file1 file_bk`: Copia archivo en la misma carpeta, solo se le puso otro nombre, primero el archivo a copiar luego el nombre
- `mv`: Mover archivos  
	- `mv file_bk ..`: Mover hacia atrás 
	- `mv file_bk fileCopy`: Renombrar el archivo, primero archivo a renombrar y luego el nuevo nombre 
	- `mv dir1 dir2`: Carpeta dir1 se mueve a carpeta dir2
- `rm`: Remove remover
	- `rm fileCopy` : Eliminar archivos 
	- `rm -i miArchivo` : Eliminar interactivo
		- `yes`
	- `rm -ri dir1`: Recursive interactiva elimina dir1
	- `rm -rf dir1`: Force elimina cualquier cosa, no se recomienda
	- `rm -r dir2 dir3 dir_cp miDirectorio 'Mi Directorio'`: Eliminar varios archivos  

🎲

## 5. Explorando el contenido de nuestros archivos

- `head`: Cabecera muestra el contenido de un archivo
	- `head nameAchivo.js`: Muestra 10 primeras líneas
	- `head nameAchivo.js -n 15` : Numero, 15 primeras líneas
- `tail`: Cola, Muestra las ultimas líneas
	- `tail nameAchivo.js` : Muestra ultimas 10 líneas
	- `tail nameAchivo.js -n 20` : 20 ultimas
- `less`: Muestra todo el contenido del archivo
	- `less nameAchivo.js`  
		- Sirve con scroll y flechas
	- `/palabraClave`: Permite hacer búsquedas
	- Q quit para salir
- `cat nameArchivo`
- `xdg-open nombreArc.js`: Abrir en la aplicación predeterminada (ubuntu)
- `control + C`: Para cerrar este proceso  
- `cdlus Documents/Dev` : Abre la carpeta❓ 
- `nautilus nombre carpeta/nombre carpeta`: Abre la carpeta
- `code nameArchivo`: Abre archivo en VSC
- `explorer.exe .`: Abrir carpeta en windows


✨ Para los que usamos WSL:      
- `wslview ejemplo.tipoArchivo` ( abrir un archivo )  
- `wslview nombreDirectorio` ( abrir un directorio )


[Comentario sobre Control + C y Control + Z](https://platzi.com/comentario/2496553/)

🎲

## 6. ¿Qué es un comando?

Un **comando** es un mensaje enviado al ordenador que provoca una respuesta en este sistema y se comporta como una orden, pues informa al dispositivo informático que debe ejecutar una acción según la indicación que pueda enviarse.

Cada sistema operativo incorpora un determinado número de comandos básicos, que permiten ejecutar las tareas más simples con órdenes directas. A continuación conocerás todo lo relacionado con sistemas operativos basados en UNIX y sus comandos básicos en la terminal.

Un comando puede ser 4 cosas         
1. Un programa ejecutable. Se encuentran en `/usr/bin/`	
2. Un comando de utilidad de la shell. Este es un programa en sí, que puede tener funciones. Ejemplo `cd`
3. Una función de shell. Son funciones de shell externas al comando de utilidad. Ejemplo `mkdir`
4. Un alias. Un ejemplo es `ls`



- `type`: Muestra qué tipo de comando es
	- `type cd`
	- `type mkdir`
	- `type ls`
- 🔥`alias`: Nos permite crear comandos. Son temporales, se borran al cerrar la terminal
	- `alias l="ls -lh"`. l es el nuevo nombre (alias) asignado para ls -lh
	- `l`
- `help`: Permite consultar un poco de documentación de un comando
	- `help cd` : Muestra lo que puedes hacer con cd
	- `ls --help`: Funciona igual
- `man`: Muestra el manual de usuario de un comando 
	- `man cd` 
	- q para salir
- `info`: Ver la descripción de un comando
	- `info cd` 
- `whatis`: Muestra una descripción corta pero no funciona con todos
	- `whatis cd`  
	- `whatis alias` 
	- `whatis ls`	

Para verificar que shell están utilizando, lo pueden hacer con:   

```bash
echo $0
```

Tengan en cuenta que no se puede utilizar espacios en el alias ya que tomaría la separación como parámetros

Forma incorrecta:

```bash
$ alias lista_larga = "ls -lSh"
```

Forma correcta:

```bash
$ alias lista_larga="ls -lSh"
```

El comando `unalias`, es una herramienta disponible en sistemas operativos del tipo Unix, como lo es GNU/Linux, e integrada en la mayoría de las Shells desarrolladas para ellos. Este comando **nos permite eliminar un alias que hayamos establecido, pero de forma temporal**.

Si por accidente te loggeaste con otro usuario en Linux o simplemente se te olvido como tu nombre de usuario, puedes usar el comando:

```bash
$ whoami
daniel
```

📌 Dos -- se usa en palabras completas
📌 Un - es para letras

💡 En este artículo están los comandos que más usarás en programación 🙊

-   [41 comandos de la terminal que debes conocer](https://platzi.com/blog/41-comandos-terminal/)

🎁 Y con un regalo al final del blog:


❄ Lecturas recomendadas    

- [Curso de Programación en Bash Shell](https://platzi.com/clases/bash-shell/)
- [41 comandos de la terminal que debes conocer](https://platzi.com/blog/41-comandos-terminal/)

🎲

## 7. Wildcards

Las wildcards o comodines son una serie de caracteres especiales que nos permiten encontrar patrones o realizar búsquedas más avanzadas. Es aplicable para archivos y directorios.

Las wildcards te sirven para realizar seccionamiento de archivos o directorios, además de `ls` los wildcards también pueden usarse con cualquier comando que realice la manipulación de archivos como `mv`, `cp` y `rm`.


### Tipos de wildcards

#### Buscar todo (*)
El asterisco te ayuda a buscar toda la información dentro de una carpeta, pero puedes limitar su uso. Si por ejemplo quieres buscar los archivos que tengan una extensión “.png”, escribes:

🔥 Creamos algunos archivos para el ejemplo: 
- `touch file.txt doc.txt doc2.txt index.html datos1 datos123 ABC`

🔥 Método 1
- `ls *.txt`
- `ls *.html`
- `ls datos*`

🔥 Método 2
- `ls datos?`: Busca todos los archivos que tengan este nombre pero un solo caracter al final "datos❓"
- `ls datos???` Busca archivos con tres caracteres al final

🔥 Método 3
- `ls [[:upper:]]*` : Superior o mayúsculas busca en dos capaz 
- `ls -d [[:upper:]]*` : d busca solo directorios con mayúsculas
- `ls -d [[:lower:]]*`: Busca carpetas y archivos con minúsculas
- `ls -d [[:lower:]]*/`: Busca solo directorios
- `ls [ad]*` : busca coincidencias que tengan a o d
- `ls [ai]*`

Para buscar por números podemos usar

```
[:alnum:]
[:digit:]
```

Para encontrar **_archivos_** o directorios con **_números_** también se puede usar:

```
ls *[0-9]*
```

💡 Documento que muestra todas las posibles **combinaciones cuando usamos el doble corchete** (como el `[[:lower:]]`): [Character Classes and Bracket Expressions](https://www.gnu.org/software/grep/manual/html_node/Character-Classes-and-Bracket-Expressions.html)


✨ Saber que shell estamos usando:    
`echo $0`


- [Lista de comandos](https://static.platzi.com/media/public/uploads/command-line-cheat-sheet_f2552bde-3bb0-4b1c-a1a7-dbd40095fa4f.pdf)

🎲

## 8. Redirecciones: cómo funciona la shell

Para entender qué son las redirecciones vamos a aprender cómo manejar entradas y salidas a través de operadores especiales.

### Qué son las entradas y salidas de la terminal

En la consola nosotros generamos una entrada cuando escribimos y una salida casi siempre que ejecutamos un comando.

A las entradas típicamente se les suele llamar **Standard Input** y a las salidas **Standard Output**, además se les suele abreviar como **stdin** y **stdout** respectivamente.

#### Qué son file descriptors

Los file descriptors son números que identifican un recurso. Funciona asociando un número con una acción, archivo o programa, en el caso de la shell tenemos 3 file descriptors:

![File descriptors](https://i.postimg.cc/tTqWzkWP/8-file-descriptors.png)   
El 1 es **Standard Output** y El 2 es **Standard Error**.

Lo que sucede aquí es que le diste un **Standard Input** 0 (el comando) y obtuviste un **Standard Output** 1 pero también puedes obtener un **Standard Error** 2 cuando el comando está mal escrito o no existe.

### Cómo usar el operador de redirección (>)

A veces queremos guardar la información de una salida porque nos puede interesar almacenar lo que esa salida contiene. Veamos el siguiente ejemplo, si utilizas el comando:

Si quieres que el **Standard Output** o  **Standard Error** no vaya a la consola sino hacia un archivo, entonces puedes usar el operador **>** seguido del nombre del archivo en el que quieres guardar la salida.

```bash 
ls -l > output.txt
```

🔥 Revisamos una carpeta cualquiera  
- `ls Pictures/`
	- Puedes revisar estando fuera de esta carpeta
- `ls Pictures > misArchivos.txt `
	- Debes ejecutar estando fuera de Pictures 📌
	- Si misArchivos.txt no existe se crea automáticamente para
	- guardar el nombre de todos los archivos
	- `less misArchivos.txt`: Revisamos el contenido
- `ls Downloads/ > misArchivos.txt`
	- Al hacer esto va a sobre escribir el contenido anterior
	- `less misArchivos.txt`


### Cómo concatenar (>>)
Suponiendo que ya creaste el archivo misArchivos.txt y ahora también quieres guardar la información de otra carpeta, entonces lo que necesitas hacer es concatenar el contenido del documento con el de la nueva salida, para eso ejecutas:

```shell
ls -l >> output.txt
```

- `ls Pictures/ >> misArchivos.txt` 📌
	- Esta es la manera correcta de concatenar
	- `less misArchivos.txt` Ahora tenemos ambos contenidos (Downloads y Pictures)


### Redirección de errores (2>|2>&1)

El operador de redirección por defecto solo redirecciona el file descriptor 1 (es decir, el **Standard Output**). Pero, ¿qué tal si queremos redirigir un error? Pues tenemos que especificar que queremos el **Standard Error**, que tiene el file descriptor 2.

Vamos a generar un error ejecutando un comando que saldrá mal para redirigirlo a un archivo llamado “error.txt”.

- `ls sdfasf 2> error.txt` 👀 2 Standard Error
	- Redirigir este error al archivo creado
	- `head error.txt`: Veremos el contenido del error

También podemos especificar que no importa lo que pase si me da un **Standard Output** o un **Standard Error**, igual tiene que guardar la salida en un archivo. Esto lo hacemos así:

- `ls asdad > output.txt 2>&1`
	- Trae un error
	- Se usa cuando no sabemos si el resultado será bueno o malo
	- `head output.txt`
- `ls Documents/ > output.txt 2>&1`
	- Traer contenido correcto
	- `less output.txt`

En la primera ejecución del comando, se ejecuta correctamente y guarda el **Standard Output**, pero en la segunda ejecución, el comando falla y guarda el **Standard Error**.

✨ La orden `2>&1` significa que debe redirigir el file descriptor 2 y el file descriptor 1.


📌 El standard input es la forma en la que capturamos información de un comando, ya sea por medio de pipes, redirección, teclado, etc. Se identifica con el descriptor de archivo “0”. Ejemplo. vemos lo que hay dentro del archivo animals.txt

![Standard input](https://i.postimg.cc/wMkVkXXP/8-standard-input.png)

Lo que sucedió fue que tomamos toda la información que se encuentra en el archivo “animals” en este caso los nombres de animales escritos de forma aleatoria y al redireccionar el archivo al comando sort, este ordena la lista alfabéticamente.


🔥 La siguiente tabla detalla todas las posibles formas de direccionamiento y los símbolos que se utilizan para lograrlo.

| Símbolo       | Descripción         |
|---------------|------------------------------------------------------------------------------------------|
|**_>_**        | Redirecciona **stdout** hacía un archivo. Lo crea si no existe, si existe lo sobrescribe.|
| **_>_**       | `ls -l > lista.txt` (La salida del comando se envía a un archivo en vez de la terminal.)  |
| **_>>_**      | Redirecciona **stdout** hacía un archivo. Lo crea si no existe, si existe concatena la salida al final de este.|
| **_>>_**      | `ps -ef >> procesos.txt` (Concatena al archivo procesos.txt la salida del comando.)        |
| **_<_**       | Redirecciona **stdin** desde un archivo. El contenido de un archivo es la entrada o input del comando.         |
| **_<_**       | `mail user < texto.txt` (El cuerpo del correo a enviar proviene desde un archivo, en vez del teclado).           |
| **_2>  2>>_** | Redirecciona **stderr** hacía un archivo. Crea (>) o concatena (>>) la salida de errores a un archivo. (ver ejemplos)|
| **_1>&2_**    | Redirecciona **stdout** hacía donde **stderr** apunte. (ver ejemplos)                     |
| **_2>&1_**    | Redirecciona **stderr** hacía donde **stdout** apunte. (ver ejemplos)                     |
| **OTROS REDIRECCIONAMIENTOS QUE NO UTILIZAN FDs**| |
| **_<<_**      | Conocido como **HERE-DOCUMENT** o **HereDoc** (ver ejemplos)                              |
| **_<<<_**     | Conocido como **HERE-STRING** (ver ejemplos)                                              |
| **❕**         | El símbolo `❕` (pipe) es un tipo de redireccionamiento ya que la salida (**stdout**) de un comando es la entrada (**stdin**) de otro.|
| **❕**         | `ls /etc ❕ grep services` (La salida del comando a la izquierda de _❕_ se convierte en la entrada del comando a la derecha.)|
| **_tee_**     | El comando `tee` redirecciona la salida (**stdout**) a ambos, un archivo y a la terminal. |
| **_tee_**     | `ps -ef ❕ tee procesos.txt` (La salida de `ps` se muestra en la terminal y al mismo tiempo se redirecciona al archivo _procesos.txt_. Con la opción _-a_ (`tee -a`) concatena al archivo.)|

- [Revisar cuadro](https://www.linuxtotal.com.mx/index.php?cont=redireccionamiento-en-linux)

📌 el ❕ en realidad es un | solo que la tabla en markdown me daba error así que lo cambie por un emoji😅


- [Ejercicios, ejemplos y tests para practicar el STANDAR INPUT, STANDAR OUTPUT y STANDAR ERROR:  ](https://linuxjourney.com/lesson/stdout-standard-out-redirect)

🎲

## 9. Redirecciones: pipe operator

**_Pipe operator_** es un operador que permite tomar la salida de un comando y pasarla como entrada de otro comando. 

🔥 Aprendamos algunos comandos extras:    
- `echo "Hola Platzi"` : Imprime hola Platzi
	- Genera un standard output de cualquier cosa que le escribamos
- `less error.txt` 
- `less output.txt`
- `cat error.txt output.txt`: 
	- Concatena la salida de ambos archivos solo de manera visual en la terminal

🔥 Redirigir standard input
- `cat < error.txt` : No se usa mucho
	- Me muestra el contenido
	- Este comando es lo mismo que `cat error.txt`
	
### Pipe operator     
Permite que el standard output se convierta en el standard input de otro comando     

- `ls -lh | less`
	- Redirige al comando `less` permitiendo hacer búsquedas rápidas `/buscarAlgo`
- `ls -lh | tee output.txt | less`
	- Lista el contenido
	- Crea un archivo y para después verlo con less
	- Tee hace lo mismo que > permite guardar algo en un archivo
	- `cat output.txt`
		- Muestra el archivo creado
- `ls -lh Pictures | sort | tee pictures.txt | less`
	- Lista todo el contenido de Pictures
	- Sort lo va a ordenar
	- Tee mete todo en pictures.txt
	- Less me muestra todo en pantalla para hacer búsquedas con `/`
	- `cat pictures.txt`

🔥 Instalar Cowsay y Lolcat
- `sudo apt install cowsay`
- `sudo apt install lolcat`

Jugar usando Cowsay (Vaquera)
- `cowsay "Hola"`
	- 	: muestra una vaquita diciendo hola
- `echo "Hola Platzi" | lolcat`
	- 	: muestra el texto en colores cada vez que se ejecute el comando
- `cowsay "Hola amigos" | lolcat`
- `cowsay "Hola amigos" | lolcat | tee vaca.txt`
- `cowsay -f dragon-and-cow "Gracias totales" | lolcat`



📌 `cat rocket | lolcat`

🎲

## 10. Encadenando comandos: operadores de control

Los operadores de control son símbolos reservados por la terminal que nos permiten encadenar comandos.

Si usas constantemente la tecla enter para ejecutar varios comandos, puedes evitarlo si usas el operador **;** que separa los comandos que estamos ejecutando.


### Comandos en la misma línea ( ; & y || )
🔥 Ejecución de manera Síncrona    
Esto hace referencia al acceso inmediato, en tiempo real a la información.   

- `ls; mkdir holi; cal`: calendario
	- Muestra el contenido de la carpeta
	- Crea una carpeta llamada holi
	- Finalmente ejecuta el comando cal (Calendario)
	- El comando ls no muestra la carpeta holi porque primero se ejecuta ls, una vez mostró todo crea la carpeta y después muestra el calendario 


🔥 Ejecución de manera Asíncrona     
Se refiere a que no se da de manera simultanea   

- `ls & date & cal`   
	- Usa diferentes hilos para cumplir con esta tarea 


🔥 Ejecución de comandos de manera **Condicional** 

En Home:    
- `mkdir test && cd text`
	- Crea el directorio test, solo si se crea correctamente que me dirija al interior de esa carpeta
	- `pwd`
- `cd aaaa && touch archivo.txt && echo "Archivo creado"`
	- No se hizo ningún proceso porque desde la primera función no pasó nada.

Ahora:   
- `cd aaaa || touch archivo.txt || echo "Archivo creado"`
	- Con or o || se crea solamente el archivo.txt porque se interpreta así: 
		- Cambia de directorio o crear el archivo, entonces solo crea el archivo y luego dice crear archivo o enviar mensaje y como ya se creo el archivo ya no crea el otro.
- `cd aaa || echo "Cambio de directorio"`
	- Solo ejecuta el ultimo comando

Combinando operadores de control (condicionales)
- `cd aaaa || touch archivo.txt && echo "Archivo creado"`
	- No puede entrar en la carpeta pero si crea el archivo e imprime el mensaje

📌 `&&` = haz esto **y** esto
📌 `||` = haz esto **o** esto


El comando `date` imprime por consola la fecha actual.


❄ Si esto último se te es un poco complicado te invito a que tomes el [Curso de Pensamiento Lógico.](https://platzi.com/cursos/pensamiento-logico/)

🎲

## 11. Cómo se manejan los permisos

Los permisos son las capacidades que tiene cada usuario dentro del sistema operativo, no todos los usuarios pueden hacer todas las acciones sobre ciertos archivos y carpetas.

Cuando listamos archivos utilizando el comando `ls -l` la primera columna que nos aparece es la de permisos.

🔥 Tipos de archivos

| Atributos |	Tipo de archivo |
|-----------|-------------------|
| -         | Un archivo normal.|
| d		    | Un directorio.    |
| l		    | Un link simbólico.|
| b		    | Un archivo de bloque especial. Son archivos que manejan la información de los bloques de datos como una USB.|


🔥 Tipos de modo

| Dueño	  | Grupo	| World  |
|---------|---------|--------|
| rwx	  | r-x     | r-x    |
| 1 1 1	  | 1 0 1   | 1 0 1  |

✨ rwx: read - write - Execution


🔥 Permisos de usuario

Los siguientes caracteres se leen de 3 en 3, por cada uno de los tipos de usuario.

- Owner / Dueño
	El dueño del archivo, si no se ha cambiado, es quien lo creo y tiene mayor jerarquía sobre los otros 3. Le corresponden los primeros 3 caracteres de los permisos.

- Group
	Se puede crear grupos de usuarios para darle a todos o varios los mismos permisos. A estos usuarios le corresponden el cuarto, quinto y sexto caracter de los permisos de usuarios y tienen mayor jerarquía que el último.

- World
	También llamado “otros”, es cualquier otro usuario que no pertenezca a un grupo de usuario y tampoco sea el dueño, este tiene la menor jerarquía.

![Permisos](https://i.postimg.cc/5yy15TNT/11-permisos.png)

![Permisos](https://i.postimg.cc/fWjsLkd3/11-owner-group-world.webp)

🔥 Modo octal

| Dueño	| Grupo  | World |
|-------|--------|-------|
| rwx	| r-x    | r-x   |
| 1 1 1	| 1 0 1	 | 1 0 1 |
| 4+2+1 | 4+0+1  | 4+0+1 |
| 7		| 5		 | 5     |

Representamos con un cero si el usuario no tiene el permiso y con un uno si el usuario si lo tiene, pongamos de ejemplo el permiso r-x:


| Octal | Binario | Permisos |
|-------|---------|----------|
| 0		| 000	  | ---      |
| 1		| 001	  | --x      |
| 2 	| 010     |	-w-      |
| 3		| 011	  | -wx      |
| 4		| 100	  | r--      |
| 5		| 101	  | r-x      |
| 6		| 110	  | rw-      |
| 7		| 111	  | rwx      |


🔥 Modo simbólico

| Símbolo | Significado                  |
|---------|------------------------------|
| u       | Solo para el usuario         |
| g       | Solo para el grupo           |
| o       | Solo para otros (es el world)|
| a       | Aplica para todos.           |


🔥 Diferencia de permisos entre archivos y directorios 

| Permiso | Archivo | Directorio | 
|---------|---------|------------|
| r       |Permite abrir y leer un archivo.| Permite listar el contenido de un directorio solo si el permiso de ejecución (x) también está activo. |
| w       |Permite escribir en un archivo; sin embargo, este atributo no permite cambiar el nombre de los archivos o eliminarlos. La capacidad de eliminar o cambiar el nombre de los archivos está determinado por los atributos del directorio.| Permite que los archivos dentro de un directorio sean creados, eliminados y renombrados si también se establece el atributo de ejecución.|
| x       |Permite que un archivo sea tratado como un programa y pueda ser ejecutado.| Permite entrar al directorio.|


[Diferencias de permisos](https://static.platzi.com/media/public/uploads/diferencia-de-permisos-entre-archivos-y-directorios_2f436ae8-2c28-408d-a7cf-c22e9426b5a2.pdf)

✨ Acceder a los discos C y D con wsl : Windows Subsysten for Linux:
- `/mnt/c/Users/usuario/`
- `/mnt/d/`


❄ Comandos para cambiar permisos:     
- `sudo chmod u+x index.html`
	- Dar permisos con +
	- u agrega permisos al usuario
	- `sudo chmod o+x index.html`
- `sudo chmod a-x index.html`
	- Quitar permisos a todos con -
- `chmod 777 index.html`
	- Un numero por cada grupo 
	- Puede variar depende los permisos que le demos


🟣 `chown`: Cambia quien es el propietario del archivo.     
🟣 `chgrp`: Cambia quien es el grupo de usuarios que pueda acceder al archivo.    
🟣 `sudo`: Super usuario - root: Este usuario puede leer y escribir cualquier archivo del sistema, y ejecutar algunos archivos. y también hay otras operaciones que están reservadas para el.



### Aporte - Generador de permisos de linux.

Inspirado en la tabla que se muestra en el curso, decidí hacer una pequeña aplicación que nos permite generar los permisos del sistema de Linux en formato “Octal”.

- [El link de la aplicación:](https://josenoriegaa.github.io/linux-file-system-permission-generator/index.html)  
- [El link del repositorio:](https://github.com/JoseNoriegaa/linux-file-system-permission-generator)

❄ Recomendaciones:      
- [Explicación: Binario, Decimal y Hexadecimal](https://www.youtube.com/watch?v=g9-MRBBcvdg)
- [Pasar de decimal a binario y viceversa](https://www.youtube.com/watch?v=bScw3CNb_fM)

🎲

## 12. Modificando permisos en la terminal

Con el comando `chmod` podemos cambiar los permisos de los archivos de dos formas, una es usando los símbolos (rwx) y otra es con el sistema octal.

### Cambiar los permisos de un archivo (chmod)

Es bastante sencillo cambiar los permisos de forma simbólica. Para esto, hay que escribir después del comando `chmod` el símbolo del usuario, luego el operador y por último el permiso que quieres agregar o quitar.

- `mkdir sandbox`: Carpeta de pruebas
- `cd sandbox/`
- `> mitexto.txt`: Otra forma de crear un archivo
- `cat > mitexto.txt`: Permite escribir
	- Hola amigos 
	- Desde Platzi
	- `Control d`: para dejar de escribir
- `cat mitexto.txt`
- `ls -l`
	- Muestra los permisos
	- Usuario Grupos Otros
	- `-rw-r--r-- 1 ubuntu 25 Sep 20 01:57 mitexto.md`

🔥 Método 1: Ampliar permisos        
- `chmod 755 mitexto.txt`: Change mode
	- Usuario: rwx = 7
	- Grupo: r-x = 5
	- Otros: r-x = 5
- `ls -l`
	- Se modificó a ⬇
	- `-rwxr-xr-x 1 ubuntu 25 Sep 20 01:57 mitexto.md`

🔥 Método 2: Quitar permisos        
- `chmod u-r mitexto.txt`
	- `u-r`: Al usuario se le quita permisos de lectura (read)
- `ls -l`
	- `--wxr-xr-x 1 ubuntu 25 Sep 20 01:57 mitexto.md`
- `cat mitexto.txt`
	- No nos permite ver (leer) el contenido 

🔥 Método 3: Dar permisos     
- `chmod u+r mitexto.txt`
- `ls -l`
- `cat mitexto.txt`

🔥 Método 4: Quitar y Dar permisos     
- `chmod u-x,go+w mitexto.txt`
	- Usuario: quitar ejecución 
	- Grupo y otros: Añadir escritura
	- Los permisos deben estar escritos sin espacios📌
- `ls -l`

### Cambiar de usuario
- `whoami` : Ver quien soy yo
	- ubuntu
- `id`: Otorga el id del usuario (1000 or 500)

🔥 Cambiar al usuario Root
- `su root`: switch user - cambiar de usuario 
	- contraseña
- `whoami`
	- root
- `pwd`
- `cd`
	- Lleva al home del root
- `cd home/ubuntu/sandbox`
- `touch rootfile`
- `su ubuntu`: Regresamos al usuario ubuntu
- `pwd`
- `ls -l`
- `rm rootfile`
	- No se puede borrar porque no soy el dueño de ese archivo
	- En realidad en WSL si me dejo borrar :v
- `sudo rm rootfile`
	- Esto solo funciona para root, solo me da permisos para hacer cambios en el nombre del root
	- Contraseña

✨ Cambiar contraseña de cualquier usuario
- `passwd` :
	- Contraseña old
	- New password	


✨ Por defecto Usuario Root no tiene contraseña así que:
- `sudo su root`
	contraseña de usuario actual
- `sudo psswd`
	new password
	retype new password



-rw-r--r-- 1 ubuntu ubuntu 58 Jul 15 18:17 mitexto.txt



### Emojis:  
<details>
  <summary>Haz click aquí para ver los emojis 👀</summary>

  <br/>

**🔥 Emojis:**        
- 🔥 ❄ ✨ 📌 🎲 🔍 🎉     
- 🤴🦁 🧔🐯  👀 👉 👈 ☝ 👇   
- 😊 👈👀 😌 😍  😅     
- 🟥 ⬜ ⬛ ◼ ◻ 🔷 🔶 🔻 🔺 🔴 🟣       
- ✔ ➕ ↕ ↔ ⬅ ✅ ▶ ❌ ❗ ⬆ ⬇ ❓          
- 🧰 ⛓ 💡             
- 🔅 🔆 🌚 🌗      

</details>

🎲🎲🎲🎲🎲🎲

🎲

## 13. Variables de entorno

link simbolico:
. ln -s Documents/Dev Desarrollo
	:  es como un acceso directo
. ls -l 
. cd Desarrollo
. rm Desarrollo


Variables de entorno:
. printenv
. echo $HOME	
. cd Documents/Dev/
. cd $HOME
. echo $PATH

. ls -la
. code .bashrc

Si esto no funciona hacerlo desde la terminal de VSC


13. Comandos de Búsqueda

. which cd 
	: ayuda a encontrar la ruta de los binarios
. which code
. which obs
	: obs programa para grabar pantalla

. find ./ -name file
	: busca todos los archivos que se llamen file
. find ./ -name *.txt | less
. find ./ -type d -name Docuemnts
	: f que busque files y d busca directorios
. find ./ -type f -name *.log
. find ./ -size 20M
	: encuentra archivos por tamaño
 

14. Su majestad: grep

. ls
	movies.csv
. grep Towers movies.csv
	: encontrar todas las películas con la palabra Towers dentro de el archivo movies.csv
. grep the movies.csv
. grep -i the movies.csv
	: ignore case sensitive para que también tome en cuenta las mayúsculas 
. grep -i the movies.csv | less
. grep -c the movies.csv
	. cuenta las veces/filas en las que aparece la palabra the
. grep -ci the movies.csv
	: también cuenta las mayúsculas
. grep -vi towers movies.csv
	: encontrar las películas que no coincidan 
. grep -vi towers movies.csv > sintowers.txt
. ls
. cat sintowers.txt
. wc movies.csv
	: work count sirve para contar cuantas palabras hay
	: 1 cuantas líneas tiene | cuantas letras | nro bits
. wc -l movies.csv
	: cuenta las lineas
. wc -w movies.csv
	: cuenta las palabras
.wc -c movies.csv
	: cuenta los bits


15. Utilidades de red

. ifconfig
. ping www.google.com
	: control c parar
. curl www.google.com
	: trae un archivo en formato texto a través de la red
. curl www.google.com > index.html
. less index.html
. rm index.html
. wget www.google.com
	: trae desde internet
	: descarga el archivo directamente en la pc
cat index.html
. rm index.html
. traceroute www.google.com
	: muestra todas la computadoras que intervienen en el camino para llegar hasta google
. netstat -i
	: muestra los dispositivos de red


16. Comprimiendo archivos

. mkdir ToCompress
. cd ToCompress/
. touch file1 file2 file3
. cd ..
. tree ToCompress/

-> Comprimir
. tar -cvf ToCompress.tar ToCompress 
	: c comprimir v muestra todo lo que estuvo comprimiendo f file
	: 1ero va el nombre del comprimido y luego el nombre de la carpeta a comprimir
. ls
. tar -cvzf ToCompress.tar.gz ToCompress 
	: z gi zip comprime en ese formato 
. ls

-> Descomprimir
. rm -r ToCompress
	: r recursiva
. tar -xzvf ToCompress.tar.gz
	: xz descomprimir
. ls

-> Comprimir
. zip -r ToCompressInZip.zip ToCompress
	: r recursiva
. ls

-> Descomprimir
rm -r ToCompress
. unzip ToCompressInZip.zip
	: A
	
	
	
17. Manejo de procesos

. ps
	: muestra los procesos que están corriendo en la terminal
. cat & ls
. ps
. cat & ls
. ps
	: copiar id
. kill 20425
. ps ax 
	: Si el proceso está en segundo plano y se requiere detener o es un proceso que está colgado y se debe detener
. kill -9 20425
. ps
. top 
	: muestra procesos que están usando mas recursos
	: tecla h : filtrar
	: salir con q
	: u para filtar : ubuntu
	: q para salir de esa vista
. kill 20167 
	: matar procesos si se quedan atascados 
	
	
usar htop
sudo apt install htop



18. Procesos en foreground y background

Como viste en la clase de procesos podemos correr de manera asíncrona comandos, y si estos no se completan quedarán activos dentro de los procesos de la terminal.

Cuando un proceso está en ejecución sin que sea mostrado en la terminal se dice que se está ejecutando en el background. Si se muestra la ejecución del comando dentro de la terminal se dice que está en el foreground. En esta clase aprenderás a cómo mover los procesos del background al foreground a tu voluntad, incluso a cómo suspenderlos.

¿Te acuerdas del truco que aprendimos para tener un editor de texto supe sencillo en la terminal? Lo usaremos en esta ocasión. Imagina que queremos una nota desde la terminal y para eso usamos:


cat > mi_nota.txt


En nuestra terminal se verá el prompt esperando a que ingresemos texto.

Podemos escribir algo y después terminar el input del texto con CTRL+D, pero en esta ocasión no haremos eso. Lo que queremos hacer será suspender el proceso, esto lo podemos hacer con CTRL+Z. El resultado que nos mostrará la terminal deberá ser uno donde nos indique la suspensión del comando cat.

Ahora hemos movido nuestro comando exitosamente al background de la terminal. Para consultar todos los procesos que tenemos en background podemos hacerlo con el comando jobs.

A la izquierda aparece el número del trabajo ( ⚠ ️.cuidado que no es lo mismo que el process ID). Si queremos traer la ejecución de nuevo a la terminal, es decir, al foreground; debemos usar el comando fg y especificar qué número de trabajo queremos continuar. Para nuestro caso será el 1.


fg 1


En caso de que estés usando ZSH como shell el formato para llamar el trabajo sería con un porcentaje. ZSH tiende a interpretar algunas cosas incluyendo las wildcards de manera diferente.


fg %1


Una vez enviado al foreground veremos como se activa la ejecución del comando en la terminal y podremos seguir escribiendo nuestra nota. Recuerda que una vez terminemos de escribir presionamos CTRL+D para terminar el input y guardar.

Cuando se guarda nuestra nota nos daremos cuenta de que el proceso por fin termina y si usamos jobs no nos mostrará ningún trabajo en background.

 -- Otras formas de enviar al background --

Existen otras formas de enviar comandos al background. La primera es usando el operador de control & al final de un comando. Este operador nos permite enviar de manera directa un proceso al background una vez ejecutado. Por ejemplo:


cat > mi_nota.txt &


La segunda forma es con el comando bg. Este sirve de manera similar que fg solo que en vez de traerlo al foreground este lleva un trabajo al background. Por ejemplo:


bg 1


Bien, la pregunta ahora es ¿Cómo usamos bg? Imagina que abrimos algún programa de interfaz gráfica desde la terminal. En mi caso abriré el navegador Google Chrome. Para hacerlo desde la terminal solo ejecuta:


google-chrome-stable


Y verás como se ejecuta pero no nos deja hacer ninguna otra tarea ya que la ventana del navegador está abierta:

Para suspender el proceso como ya sabes lo hacemos con CTRL+Z y si revisamos con jobs veremos como el proceso se encuentra en pausa. En este caso la ventana del navegador que se abrió no nos dejará interactuar ni escribir en ella.

Como se ve en la imagen el navegador tiene el número de trabajo 1. Para dejar nuestro navegador corriendo y al mismo tiempo seguir trabajando en la terminal tenemos que reactivar este proceso y a la vez mandarlo al background. Para ello ejecutamos:


bg 1


Con esto podremos ver como nuestro proceso de Google Chrome sigue corriendo en el background dejando la terminal disponible para nosotros.

¡Genial! Con esto ya sabes cómo mover procesos dentro de la terminal del foreground al background. Esto es muy útil cuando solo tenemos una terminal y necesitamos ejecutar varios comandos en paralelo. ¡Te espero en la siguiente clase!



19. Editores de texto en la terminal

. vim 
	: vi moderno
	: :q salir
. vim index.html
	: tecla i
	: insert
<div> Hola alumnos </div>
Escribir un titulo
	: tecla esc
	: normal
/titulo ENTER
	: para salir mueve el cursor y
	: tecla esc

Para eliminar una línea
. modo normal
. ir al inicio de la línea o en cualquier lado
. presionar tecla dd 

Guardar archivo:
. modo inserción 
	: asddfasfsa
. modo normal
. :w

Guardar y salir
. :wq

. cat index.html
. vim ejemplo.py
. i
. print("Hola mundo")
. tecla esc
. :wq
. :wp! : fuerza la salida
. cat ejemplo.py



20. Personalizar la terminal de comandos

-> https://www.edevars.com/blog/personalizar-terminal

. Instalar emulador
	: sudo apt install tilix

. Instalar zsh para Ubuntu / Debian
	: sudo apt install zsh

. Verificar la version 
	: zsh --version
	
. Volverla nuestra shell por defecto
	: chsh -s $(which zsh) 

. Abrir Tilix: reiniciar pc
	: 0
	
. Personalizar : https://ohmyz.sh/
	: sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"


-> Pagina official de tema a instalar: 
https://github.com/romkatv/powerlevel10k#oh-my-zsh

-> Oh My Zsh

. Instalar tema Powerlevel10k
	: git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

. Configuración
	: vim .zshrc
	: i insertar
	: comentar tema: #ZSH_THEME="robbysussell"	
	: colocar: ZSH_THEME="powerlevel10k/powerlevel10k"
	: esc + wq!

. Fuentes : Descargar
	: MesloLGS NF Regular.ttf
	: guardar las 4 fuentes
	: buscar las descargar
	: abrir con fuentes
	: instalar
	
: Modificar en Tilix
	: Entrar a tilix
	: profiles
	: edit profiles
	: default: cambiar fuente : mesloLgs

: Recargar:
	: zsh
	: luce como diamante : y
	: Raimbow (3)
	: UNICODE
	: reloj no




Datos para instalar Git:
. sudo apt-get update
	: Actualizaciones del SO
. sudo apt-get upgrade
. sudo apt-get install git
	: instalar git
. git --version
	: verificar la instalación 



Cambiar la shell de bash a zsh y viceversa:
. chsh -s /bin/bash
. chsh -s /bin/zsh



Para acceder a la configuracion inicial por si no te gusta algo o bien quieres cambiar el aspecto del prompt solo basta con ejecutar en la terminal
. USER :~$ p10k configure


21. Nunca pares de hackear

Libros recomendados
. Linux Basics for Hackers
. The Linux command line

Para búsqueda
. Grep
. Regular Expression

Para Linux
. Linux
. Vi and Vim Editors


## Notas / Aportes
<details>
	<summary>Haz clic para ver a los contribuidores 👀</summary>
	<br/>
	
**🔥 Team:**    
- Gabriel Missael Barco
- Emmanuel Rodríguez Ramírez

</details>




4.
¿Con cuál comando copiamos un directorio y su contenido? (Esto hace parte de uno de los retos que te dejé)
cp mi_directorio ruta_destino


Si queremos correr una serie de comandos de manera asíncrona lo hacemos con el operador:


17.
Para buscar todas las imágenes png dentro de nuestra computadora podemos ejecutar:


19.
¿Qué comando nos ayuda consultar la disponibilidad de un equipo en una red?
traceroute