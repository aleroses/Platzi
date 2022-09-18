# Curso de Introducción a la Terminal y Línea de Comandos
> **Enrique Devars** - [Frontend Developer en Platzi](https://platzi.com/profesores/codevars/)    
> **@codevars**

[Link curso](https://platzi.com/cursos/terminal/)

# 1. ¿Qué es la terminal?

Si algunas vez viste una película de hackers, seguro has visto la ventana negra que abren en sus computadores, dónde escriben muchas letras sin sentido. Esto se conoce como terminal, pero, te lo explicaremos más a detalle.

Beneficios:      
- Flexibilidad
- Velocidad
- No siempre cuentas con una interfaz gráfica

## La terminal 
La terminal es un programa que ejecuta líneas de comandos, que a su vez estas líneas de comando ejecutan acciones y aquí tienes que aprender dos conceptos: **terminal** y **shell**.

- Terminal:    
	Estamos muy acostumbrados a que en nuestra computadora inicie un sistema operativo que tenga un sistema de ventanas en el que podemos abrir carpetas y programas y podamos mover archivos a través de una interfaz gráfica.
	
	La terminal es una ventana más, es un programa, una interfaz que recibe un comando para luego pasárselo a la **shell** y que esta última la ejecute. Con este programa podemos hacer todo lo que el sistema de carpetas e interfaz gráfica del sistema operativo puede hacer, pero utilizando comandos.

- Shell (Línea de comandos): 
	Ahora la **terminal** no ejecuta líneas de código, solo la recibe, es la **shell** quien hace todo el proceso de tomar el comando, ir con el procesador y la memoria RAM y decirles “tomen, ejecuten esto”.

Si lo pensamos de otra forma, la **shell** nos proporciona una forma de comunicarnos con el procesador y la RAM sin tener que pasar por la interfaz gráfica.


## ¿Por qué usar la shell y no la interfaz gráfica?

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

Un comando puede ser 4 cosas
1. Un programa ejecutable.	
2. un comando de utilidad de la shell.
3. Una función de shell.
4. Un alias.

type cd
type mkdir
type ls
alias l="ls -lh"
l : los alias son temporales
help cd : muestra lo que puedes hacer
ls --help
man cd: manual de usuario de un comando
	q para salir
info cd : ver descripción de un comando
whatis cd : descripción corta
whatis alias : no funciona con todos
whatis ls	


### Emojis:  
<details>
  <summary>Haz click aquí para ver los emojis 👀</summary>

  <br/>

**🔥 Emojis:**        
- 🔥 ❄ ✨ 📌 🎲 🔍 🎉     
- 🤴🦁 🧔🐯  👀 👉 👈 ☝ 👇   
- 😊 👈👀 😌 😍      
- 🟥 ⬜ ⬛ ◼ ◻ 🔷 🔶 🔻 🔺 🔴 🟣       
- ✔ ➕ ↕ ↔ ⬅ ✅ ▶ ❌ ❗ ⬆ ⬇ ❓          
- 🧰 ⛓ 💡             
- 🔅 🔆 🌚 🌗      

</details>

🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲

## 7. Wildcards

Serie de caracteres especiales que nos permiten encontrar patrones o realizar busquedas mucho mas avanzadas usando ls.

touch file.txt doc.txt doc2.txt index.html datos1 datos123 ABC
ls
ls *.txt
ls datos*
ls datos?
ls datos???
ls *.html
ls [[:upper:]]* : busca en dos capaz 
ls -d [[:upper:]]* : d busca solo en el directorio actual
ls -d [[:lower:]]* : que inician minúscula
ls -d [[:lower:]]*/ : busca solo directorios
ls [ad]* : busca coincidencias que tengan a o d
ls [ai]*


Saber que shell estamos usando:
echo $0

estamos usando bash


## 8. Redirecciones: cómo funciona la shell

		shell				     1
						-> stdout
teclado ->	stdin -> comando ->			->  PC
		  0				-> stderr
							2

-> stdout(Salida estándar)
ls Pictures/
ls Pictures/ > misArchivos.txt 
	: guarda el nombre de todos los archivos
	: Se crea automáticamente sino existe
less misArchivos.txt
ls Downloads/ > misArchivos.txt
	: al hacer esto va a sobre Escribir el archivo anterior
less misArchivos.txt
ls Pictures/ >> misArchivos.txt
	: esta es la manera correcta de concatenar
ls sdfasf 2> error.txt
	: redirigir este error al archivo creado
head error.txt
ls asdad > output.txt 2>&1 
	: Trae un error
	: Se usa cuando no sabemos si el resultado será bueno o malo
head output.txt
ls Documents/ > output.txt 2>&1
less output.txt


-> stdin(Estándar en)
$ cat < peanuts.txt > banana.txt



## 9. Redirecciones: pipe operator

echo "Hola Platzi" : imprime hola platzi
less error.txt : 
less output.txt :
cat error.txt output.txt: 
	: concatena la salida de ambos archivos

Redirigir standar input
cat < error.txt :
	: Me muestra el contenido
	
Pipe operator: 
	Permite que el standar output se convierta en el standar input de otro comando
ls -lh | less
	Redirigio al comando less y poder hacer busquedas rapidas /buscarAlgo
ls -lh | less | tee output.txt 
	: Crear un archivo despues de verlo con less
	: tee hace lo mismo que > pero permmite guardarlo en un archivo
cat output.txt :
	: Me muestra lo mismo :3
ls -lh | tee output.txt | less
	: Generar el archivo primero y luego verlo con less
cat output.txt
	. me muestra el archivo
ls -lh Pictures | sort | tee pictures.txt | less
	: pasarlo por un filtro
	: sort lo va a ordenar
cat pictures.txt

sudo apt install cowsay

sudo apt install lolcat

cowsay "Hola"
	: muestra una vaquita diciendo hola
echo "Hola Platzi" | lolcat
	: muestra el texto en colores cada vez que se ejecute el comando
cowsay "Hola amigos" | lolcat

cowsay "Hola amigos" | lolcat | tee vaca.txt
	
cowsay -f dragon-and-cow "Gracias totales" | lolcat


9. Encadenando comandos: operadores de control

Ejecución de manera Síncrona
ls; mkdir holi; cal : calendario
	: No se muestra la carpeta holi porque primero se ejecuta ls, una vez mostró todo crea la carpeta y después muestra el calendario 


Ejecución de manera Asíncrona 
ls & date & cal

Ejecución de comandos de manera Condicional 
En Home:
mkdir test && cd text
	: Quiero que se cree el directorio test, si se crea correctamente que me dirija al interior de esa carpeta

cd aaaa && touch archivo.txt && echo "Archivo creado"
	: No se hizo ningún proceso porque desde la primera función no pasó nada.
	Ahora
cd aaaa || touch archivo.txt || echo "Archivo creado"
	: Con or o || se crea solamente el archivo porque se interpreta: cambia de directorio o crear el archivo, entonces solo crea el archivo y luego dice crear archivo o enviar mensaje y como ya se creo el archivo ya no crea el otro.
	
cd aaaa || touch archivo.txt && echo "Archivo creado"
	: En este caso si hace el echo porque debe crear el archivo y además imprimir el mensaje.


10. Cómo se manejan los permisos

Tipos de archivos

Atributos 	Tipo de archivo
-		Un archivo normal.
d		Un directorio.
l		Un link simbólico.
b		Un archivo de bloque especial. Son archivos que manejan la información de los bloques de datos como una USB.


Tipos de modo

Dueño		Grupo		World
 rwx		 r-x		 r-x
1 1 1		1 0 1		1 0 1

rwx: read write Execution



Modo octal

Dueño		Grupo		World
 rwx		 r-x		 r-x
1 1 1		1 0 1		1 0 1
  ?		  ?		  ?
  7		  5		  5

Modo octal
Octal		Binario	Permisos
0		000		---
1		001		--x
2 		010		-w-
3		011		-wx
4		100		r--
5		101		r-x
6		110		rw-
7		111		rwx

Modo simbólico

Simbolo 	Significado
u		Solo para el usuario
g		Solo para el gurpo
o		Solo para otros (es el worls)
a		Aplica para todos.


Acceder a varias carpetas del disco C:
/mnt/c/Users/usuario/


wsl : Windows Subsysten for Linux


sudo chmod u+x index.html
	: para darle permisos
	: u agrega permisos al usuario
sudo chmod o+x index.html

sudo chmod a-x index.html
	: quitarle permisos a todos

chmod 777 index.html
	: un numero por cada grupo 
	: puede variar depende los permisos que le demos


11. Modificando permisos en la terminal

mkdir sandbox
cd sandbox/
> mitexto.txt
cat > mitexto.txt
	: Escribir Hola amigos 
		Desde Platzi
control d

clear
cat mitexto.txt
ls -l
-> muestra los permisos
-> Usuario Grupos Otros
chmod 755 mitexto.txt: change mode
ls -l
chmod u-r mitexto.txt
	: el - significa que va a quitar ese permiso
	: le quita read al usuario
ls -l
cat mitexto.txt
chmod u+r mitexto.txt
ls -l
cat mitexto.txt

ls -l
chmod u-x,go+w mitexto.txt
	: al usuario - ejecutar y al grupo y a otro write
ls -l

Cambiar de usuario
whoami : Quien soy yo
: ubuntu
id : otorga el id del usuario (1000)

Cambiarme a usuario Root
su root: swit user cambiarnos de usuario 
	: contraseña
whoami
	: root
pwd
cd
	: me lleva al home del root
	
cd home/ubuntu/sandbox
touch rootfile
su ubuntu
pwd
ls -l
rm rootfile
	: y no se puede borrar porque no soy el dueño de ese archivo
sudo rm rootfile
	: esto solo funciona para root
	: contraseña

cambiar contraseña
passwd :
	: contraseña
	: new password	


-> Por defecto Usuario Root no tiene contraseña así que:
. sudo su root
	contraseña de usuario actual
. sudo psswd
	new password
	retype new password

Contraseña root: ubunturoot


-rw-r--r-- 1 ubuntu ubuntu 58 Jul 15 18:17 mitexto.txt


12. Variables de entorno

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