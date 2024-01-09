# Curso de Prework: Configuración de Entorno de Desarrollo en Windows
> Ricardo Celis

## **1.** Qué es el navegador?

Funciona gracias a https  
- HTML
- CSS
- JS

Versiones de Google Chrome
- Canary
- **Dev**
- Stable

Edge y sus DevTools

Navegador Firefox Developer Edition

Ver extensiones para Google Chrome [[vsc-chrome]]

## **2.** Descarga e instala un navegador web: Chrome Dev

[Enlace de Descarga](https://www.google.com/intl/es_us/chrome/dev/)

## **3.** Manejo básico de las DevTools

Podemos entrar a los settings de Chrome y cambiar el idioma: No olvides darle a **Relaunch** para efectuar cambios.

[Chrome settings](chrome://settings/languages)

Podemos instalar extensiones útiles: 

- Toggle JavaScript 
- Dev tools
- Lighthouse

[Chrome web store](https://chromewebstore.google.com/?hl=es)

## **4.** Instalando nuestro editor de texto

[Visual Studio Code](https://code.visualstudio.com/)  

## **3.** Extensiones Visual studio code

- Prettier - Code formatter
- Color Highlight
- Live server
- Path intellisense
- Auto rename tag
- Material Icon theme

Ver mas extensiones [[ext-vsc-chrome#Extensiones vsc]]


## 4. Cómo usar Live Server en proyectos reales de HTML y CSS

En vsc:     
Clic derecho sobre html - Run Live Server   


## 5. ¿Qué es Windows Subsystem for Linux?

El Subsistema de Windows para Linux permite a los desarrolladores ejecutar un entorno de GNU/Linux, incluida la mayoría de herramientas de línea de comandos, utilidades y aplicaciones, directamente en Windows, sin modificar y sin la sobrecarga de una máquina virtual tradicional o una configuración de arranque dual.

[Fuente](https://learn.microsoft.com/es-es/windows/wsl/about)

Verificar w10: CMD: `winver`     
Versión 2004 (Compilation SO 19041, 450) mínimo   


## 6. Instalación de Windows Subsystem for Linux

Seguir pasos:     
[Documentación](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

Power Shell:     
Clic derecho ejecutar como administrador
`wsl --install`

![Powershell](https://i.postimg.cc/g2dYkFxJ/1-wsl-install.png)

> Si ejecutar Power Shell sin ser Administrador te dará el siguiente error: 
**La operación solicitada requiere elevación**   


## 7. Instalar Ubuntu tienda Microsoft

![Ubuntu](https://i.postimg.cc/jSbsdW8P/7-canonical-ubuntu.png)   
Reiniciar pc  

![Config Ubuntu](https://i.postimg.cc/Y2ncK9V2/7-config.png)

UNIX username: Ubuntu
Ubuntu

🔥 **Configuración de Ubuntu 22.04.1 LTS**     
Usar las flechas y luego enter   

![Idioma](https://i.postimg.cc/JtwZdFyB/7-config-ubuntu-22lts.png)    
Done

![Password](https://i.postimg.cc/MTFy1Hq5/7-config-ubuntu-22lts-password.png)     
Done

![Montaje](https://i.postimg.cc/Y0LQR7SH/7-montaje.png)     
Done

![Completed](https://i.postimg.cc/xCCvkMDq/7-completed.png)    
Done


📌 Error:     
- Paso 01: https://answers.microsoft.com/en-us/insider/forum/all/how-to-enable-the-windows-subsystem-for-linux/16e8f2e8-4a6a-4325-a89a-fd28c7841775  
	- **Habilitar el modo de desarrollador en Windows 10** 
	- Características de windows 
	- Reiniciar 
- Paso 02: https://www.youtube.com/watch?v=7P039GotVyY
	- `0x80370102` The virtual machine could not be started because a required feature is not installed.
	- https://made4geek.com/error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed-wsl-2-code-example/


## 8. Configuración de Ubuntu en WSL

- pwd: muestra posición actual con posiciones anteriores
- cd : change directory, retrocede al Home
	- cd ..: retrocede una posición 
	- cd /
	- cd ~
	- cd /home/Ubuntu: me lleva a esa posición
	- cd ../..
	- cd mnt: Cambiar de disco o partición    
		Desde aquí puedo cambiar al disco C o D
	- cd d
- ls: muestra solo posición actual


Para acceder al disco c
- cd /
- pwd
- ls
- cd mnt
- ls
- cd c
- ls
- cd Users
- ls
- cd usuario/Desktop
- ls

📌 alt + 126 = ~


Crear carpeta de trabajo:       
- cd ~    
	Todos los proyectos deben estar dentro de ubuntu
- sudo mkdir personalProjects    
	sudo otorga permisos admin
- ls    
- mkdir proyectoDemoCursoPrework    
	Crea una carpeta
- ls   
- touch index.html    
	Crea un archivo
- ls   
- mv index.html proyectoDemoCursoPrework   
	Primero coloca el archivo a mover y luego la carpeta destino
- ls
- mv proyectoDemoCursoPrework personalProjects
- ls
- cd personalProjects
- ls
- cd proyectoDemoCursoPrework
- code .
- code .


## 9. Instalación de VirtualBox

[Descargar VirtualBox](https://www.virtualbox.org/wiki/Downloads)      
Windows hosts 


## 10. Instalando Ubuntu en una máquina virtual

[Descargar Ubuntu](https://releases.ubuntu.com/)

Ver nota de Obsidian [[1-virtual-box#Instalación]]


## 11. Comandos básicos de la terminal e instalación de Node.js

Abrir Ubuntu Terminal      
- cd ~
- ls
- cd personalProjects
- ls
- cd proyectoDemoCursoPrework
- ls
- code .

Hacer algunas cosas en html y activar el server
con click derecho

- cat index.html 
	Muestra el contenido de los archivos
- man cat
	Para revisar el manual de uso de cat
- q para salir

- cd ~    
- sudo apt-get update      
	Gestor de paquetes para instalar
	Contraseña   
	Cargar   
- sudo apt-get update   
- sudo apt-get upgrade    
	Para aplicar las actualizaciones
- y

Instalar algo nuevo   
- sudo apt install nodejs
	- Y
- node -v
- sudo apt install npm
	- y


## 12. Cómo configurar tu primer proyecto en React.js

- clear     
	Limpiar terminal
- cd personalProjects
- ls
- npx create-react-app test    
	Instala archivos y elimina el instalador
- cd test
- npm start

Abrir otra terminal    
Si queremos detener la ejecución del live server : control c
- code .

Entramos a la carpeta dentro de Visual     
-> src -> App.js -> Editamos -> Guardar control s

Volvemos a encender el server

Dentro de VS - Terminal -> new terminal
- npm start

En caso algún error en la terminal de Linux:    
- sudo chown -R ubuntu ~/personalProjects


## 13. Instalando Git

Para borrar necesitas estar en su ubicación exacta

Borrar un repositorio / directorio      
- rm nombreArchivo.extension 

Borrar carpeta vacía    
- rm -d nombreCarpetaVacia

Borrar directorio con contenido    
- cd ..
- rm -rf test
- ls

Si revisamos nuestro Visual la carpeta ya no estará 
Así que el paso que sigue es:   
- File
- close folder

🔥 Instalar Git   
- cd ..
- clear
- git --version

En caso no tenerlo instalado:   
- sudo apt-get update
- instala
- sudo apt-get upgrade
- sudo apt install git

Ver notas en Obsidian de la instalación:     
[[git-github#5. Instalando Git en Linux]]

Crear cuenta [GitHub](https://github.com/)


## 14. Vinculando nuestra llave SSH en GitHub

En la terminal    
- clear
- ssh-keygen -t rsa -b 4096 -C correo GitHub    
	Enter
	Contraseña de Ubuntu
- eval "$(ssh-agent -s)"     
	Ver agente corriendo
- clear  
- ssh-copy-id `GitHub-email`
- /usr/bin/ssh-copy-id: INFO: 
	Source of key(s) to be installed: "/home/ubuntu/.ssh/id_rsa.pub"
- cd ~/.ssh
- ls
- cat id_rsa.pub

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDTkPJTn4inOyC8oRKMNFi73M/CIqExdruf9h5KiH0UvdzNAfjzohJDLJ6cdgx6rDtJVEa7AEoDB08r5xMcmwrVPJeDP6Robldc3053WxtO2w9zgoFtm41/rDMNT6uP6sjh6bI7kgz1hLRGbZ0sWNKZH/vnagVLSXoVRY/R1RFAe/cfrTJRg5j8e4b3nw/mGlsOX3PN7GwmBpVM4M7dzka/oPJiwSV6/jVy1m3JtSgvOn7xoupmSRh3kG1mM1KFsURwVa6iaBUuo0rPb60oOZgwyD5awnKOVRw5gNzNpl7noqdrlWP4YHmQT3g5eTAsxU4pDF6qlVBLGo+mS82voTo9XIeFzd9S+G6bmtdb0J+W83D/qdTCQyP9hh/JAdJFiQM5LyjnVFYPRXu+kkGEl54VlRd3ZY8j+9JrHzmNWoR44cjz1+WilrqfDHMgcyqRdSHA2+vL8ad1u1i9LmHe8ZhYF5BB7yfLXuYBKJ6UaPwI1c0rsBJDrp5qdQByUhV0URLPPNk4c3/4WdEHIy+H1RQkxfJIWAtaDbemZYjwDkz7zfmtW11nH0AaysvEvT/sV081r5gGmyl1ACOnzPYsWt16jypUaq9lzbJD6zG75EyZK4F/7mxjJQg0T14jbaZ4Ubxlzit8wUv4qe7tHwJtGcJQgTyOKrfr0pcK9Ux5f7UDqQ== ale.VRs@outlook.com

- Copiar clave

Vamos a GitHub   
- Entrar en avatar o foto de cuenta
- Settings
- SSH and GPG keys
- New SSH key
- Copiar key / llave 
- Title: Llave curso Prework
- Add SSH key
- No me pidio contraseña :v

Ver apuntes de Git y GitHub    
[[git-github#22. Conexión a GitHub con SSH]]


## 15. Subiendo nuestro primer repositorio

En la terminal ver nombre de proyecto:  
- ls
- cd personalProjects
- ls

En GitHub    
- Repositories - New
- Repository name -> proyectoDemoCursoPrework
- Description -> Repositorio para pruebas de configuración SSH 
- Creating repository

En la terminal    
- Copiar las instrucciones que aparecen en GitHub   
- echo "# proyectoDemoCursoPrework" >> README.md
- ls
- cd proyectoDemoCursoPrework
- echo "# proyectoDemoCursoPrework" >> README.md
- ls
- git init
- git add .
- git commit -m "first commit"
- clear
- git config --global user.email "ale.VRs@outlook.com"
- git config --global user.name ubuntu : al final usuario
- git config --edit --global

Control + x

- git commit -m "first commit"
- git remote add origin https://github.com/Alexander-VR/proyectoDemoCursoPrework.git
- git push -u origin master : (main) eso no XD     
	correo GitHub
	contraseña: 8l@ck D06 L3d

Refresh en la web GitHub   
- index.html

En la terminal   
- code .    
	Hacer pequeños cambios en el html
	Control + s
- clear
- git add .
- git commit :
	Esto no es recomendado   
	Control + x
- git commit -m "cambios agregados"
- git push -u origin master
	Correo
	Contraseña

Actualizar GitHub y ver los cambios     
- Entramos en index.html
- Hay dos commit

Ver resumen de Git y GitHub en Obsidian    
[[git-github#19. Uso de GitHub]]