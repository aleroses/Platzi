3. Creando una USB booteable con Ubuntu

Descargar Rufus y Ubuntu
-> Añadir iso usando Rufus 


4. Instalando Ubuntu directamente en nuestro equipo

Configuraciones en Windows previas

Desfragmentar disco 
- Seleccionar Windows C
	- Optimize
	
Crea y formatea particiones de disco 
- Disk 0
	- Windows C -> Shrink Volume (hacer mas pequeño)
	- Enter the amount of space to shrink in MB (153 600)
	- Shrink
	
Ubuntu requiere de 20 a 30 gb de espacio de tener la posibilidad usar mas espacios. De manera profesional de 120 a 150 gb

150 * 1024 = 153 600



Reiniciar PC
Abrir bios 
- F2 F1 F10 F12 SUPR
- ASUS F2
- Boot
	- Opciones de arranque: UEFI Kingston Data Traveler
- Avvio protetto
	- Secure Boot Enable: Deshabilitado 
- Guardar y salir 



Seleccionar 
Ubuntu
- Idioma
- Instalar Ubuntu
- Spanish (Latin America) -> continuar
- Instalación normal
	- Descargar actualizaciones al instalar Ubuntu
	- Instalar programas de terceros para hardware de gráficos y de wifi
	- Continuar
- Instalar Ubuntu junto a Windows Boot Manager
- Instalar ahora 
- ¿desea escribir los cambios en los discos? -> Continuar
- Seleccionar ciudad
- Usuario
- Algunas cosas mas
- Reiniciar ahora
- Sacar usb

- Seleccionar ubuntu


9. Extensiones y personalización de Visual Studio Code

- Prettier - Code formatter
- Live server
- Color Highlight
- Bracket Pair Colorizer
- Path intellisense
- Auto Rename Tag
- Material Icon Theme
- Indent-rainbow
- Theme : Atom One Dark Theme

Cambiar tema:
- View
	- Command Palette:  >theme


Activar Auto Save:
- File
	- Auto Save


10. Comandos básicos de la terminal

- mkdir nuevo : Crear carpetas
- touch escrito.txt : Crear archivos 
- cp escrito.txt copia_escrito.txt : Crear copias de archivos
- mv escrito.txt Nuevo/ : Mover a otra carpeta
- rm copia_escrito.txt : Eliminar archivos
- rm -r Nuevo/ : Eliminar de manera definitiva


11. Instalación de Node.js

Consola:
- sudo apt install nodejs
- node -v
- sudo apt remove nodejs  -A> Eliminar nodejs

Otra forma:
Instalar con nvm
- Google : nvm: node version manager
- GitHub - nvm-sh/nvm:Node Version Manager - Posix
- Git install
- Installing and Updating
	- Install & Update Script
		- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/installnsh | bash
		- instalar curl
			- sudo apt install curl
		- copiar en la terminal primer comando copiado de google

Cerrar y abrir la terminal 
- nvm install --lts : Descarga la ultima version 
- node -v


https://nodejs.org/en/
https://github.com/nvm-sh/nvm#manual-install


12. Tu primer proyecto con React

https://es.reactjs.org/

https://platzi.com/cursos/react/


En Google:
- React js
- React - Una biblioteca de JavaScript para construir interfaces
	- Comenzar
	- Crear una nueva aplicación React
		- Create React App
			- npx create-react-app my-app
			- Pegar en consola
			- npx create-react-app mi-primera-app

En consola
- ls
- cd mi-primera-app
	- ls -l
	- code .
	
Visual Studio Code
- App.js
- Abrir terminal
	- npm start
	- Editamos archivo App.js
		- <p> -> Esto 
			Edit <code>src/App.js</code> and save...
		  </p>
		- <p> -> Por eso
			Hola Platzi!
		  </p>

Ver en el navegador el Hola Platzi!









EXAMEN 

Estas son tus respuestas
1. Mal
¿Qué es GNU/Linux?
El nombre de un sistema operativo.
CAMBIAR

2. Si queremos probar un sistema operativo sin instalarlo en nuestra computadora, podemos:
Instalarlo en una máquina virtual.
CAMBIAR

3. ¿Qué software podemos usar para crear una *USB booteable*?
Rufus
CAMBIAR

4. ¿Qué opción es súper importante que desactivemos en el BIOS para poder instalar Ubuntu?
Secure boot
CAMBIAR

5. ¿Qué versión de Google Chrome viene con características experimentales?
Google Chrome Canary
CAMBIAR

6. ¿Qué son las DevTools?
Son herramientas que nos ayudan a inspeccionar los elementos de una página web.
CAMBIAR

7. ¿Qué extensión nos permite actualizar los cambios de nuestra página web de manera automática?
Liver Server
CAMBIAR

8. ¿Qué comando nos sirve para instalar paquetes en Ubuntu?
sudo apt install package_name
CAMBIAR

9. ¿Qué utilidad nos ayuda a manejar diferentes versiones de Node?
nvm
CAMBIAR

10. ¿Qué es Git?
Es un sistema de control de versiones.











