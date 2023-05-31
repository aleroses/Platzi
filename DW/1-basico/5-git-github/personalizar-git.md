# Personalize Git Bash 
1. Descargar PowerShell de Microsoft store 

> Para evitar conflictos debe desactivar el antivirus  


## Instalación de OH My Posh  

Entramos a [Oh My Posh: instalación para windows](https://ohmyposh.dev/docs/installation/windows)

Open a PowerShell prompt and run the following command:
```shell
winget install JanDeDobbeleer.OhMyPosh -s winget
```

Entramos a [Prompt](https://ohmyposh.dev/docs/installation/prompt) en la misma página. 

![](https://i.postimg.cc/GtGG7bPD/elegir-bash.png)

Buscamos en la terminal Git  Bash
```shell
ls .bashrc
```

De mostrar el siguiente mensaje: 
```shell
ls: cannot access '.bashrc': No such file or directory
```

debes crear el archivo
```shell
touch .bashrc
```

Luego editamos el archivo con nano: 
```shell
nano .bashrc
eval "$(oh-my-posh init bash)"
```
- ctrl + o 
- enter 
- ctrl + x

```shell
exec bash 
```

## Añadimos fuentes 

Ingresamos a [Fonts](https://ohmyposh.dev/docs/installation/fonts) en la misma página y luego en [Nerd Fonts](https://www.nerdfonts.com/) y luego en [Downloads](https://www.nerdfonts.com/font-downloads). 

- Buscamos:  Hack Nerd Font, descargar y descomprimir.
- En el buscador de Windows: Configuración de fuentes 
- Arrastramos las fuentes dentro del recuadro de las fuentes: No arrastrar la license.md ni el readme.md

## Dentro de Git Bash 
- Clic derecho sobre el nombre de usuario de la parte superior de la ventana y elegir Options 
- Text: Select: hack NFM
- Aceptar 
- Apply + Save

## Cambiar theme 

Entramos en [Customize](https://ohmyposh.dev/docs/installation/customize) y bajamos hasta Config syntax. 

```shell
nano .bashrc
```
Borramos el contenido y pegamos esto: 

```shell
eval "$(oh-my-posh init bash --config ~/jandedobbeleer.omp.json)"
```

Antes de guardar nos vamos a... 
- Buscamos en el buscador de windows 
- Editar las variables de entorno
	- Variables de entorno 
	- POSH_THEMES-PATH: C:/user/xd/AppData/local....etc
	- Doble clic y copiar 
	- Cancelar para salir 

```shell
eval "$(oh-my-posh init bash --config ~/PEGAMOS AQUÍ 👀jandedobbeleer.omp.json)"
```

```shell
eval "$(oh-my-posh init bash --config ~/C:\user\xd\AppData\Local\Programs\oh-my-posh\themesjandedobbeleer.omp.json)"
```

Borramos hasta ~/AppData y cambiamos \ por /
```shell
eval "$(oh-my-posh init bash --config ~/AppData/Local/Programs/oh-my-posh/themes/jandedobbeleer.omp.json)"
```

Ahora cambiamos el theme **jandedobbeleer** por el que quieras, para esto nos vamos a [themes](https://ohmyposh.dev/docs/themes).


clean-detailed
```shell
eval "$(oh-my-posh init bash --config ~/AppData/Local/Programs/oh-my-posh/themes/clean-detailed.omp.json)"
```

- ctrl + o 
- enter 
- ctrl + x
- exec bash 

Podemos cambiar el color de la terminal 
- Clic derecho en la part superior de nuestro nombre de usuario 
- Options 
- Theme 
- Apply y Save

## Cambios theme a futuro 

```shell
nano .bashrc
```

Aquí reemplazamos el theme: clean-detailed anterior por el que mas te guste. 

- ctrl + o 
- enter 
- ctrl + x

Por ultimo corremos el siguiente comando para actualizar cambios:  
- exec bash 

## Resultado 

![](https://i.postimg.cc/C5LLdqSJ/theme-clean-detailed.png)

[Ver Tutorial](https://www.youtube.com/watch?v=Bkaox81ppds)