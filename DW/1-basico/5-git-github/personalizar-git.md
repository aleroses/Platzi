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

📌 Nota: Como podemos ver en la imagen debemos revisar si tenemos alguno de los archivos mostrados, tales como:

- `~/.bashrc`
- `~/.profile`
- `~/.bash_profile`

Buscamos en la terminal Git  Bash

```shell
# Importante ubicarnos en ~
cd ~ 👈👀
# Revisamos
ls -al

# También
ls .bashrc
```

En mi caso tengo el archivo `.bash_profile`.

```shell
-rw-r--r-- ghost   4 Feb 18 21:27  .bash_profile
```

En caso no tengas ninguno de estos puedes crearlo: 

```shell
touch .bashrc

# También puedes crear el archivo 
touch .profile
# o
touch .bash_profile
```

Creado el archivo podemos editarlo usando nano:

```shell
cd ~
nano .bash_profile

# Por el momento pegamos esto
eval "$(oh-my-posh init bash)"

# Guardamos
- ctrl + o 
# Damos enter
- enter
# Salimos
- ctrl + x
```

Para ejecutar los cambios realizados ingresamos el siguiente comando:

```shell
exec bash
```

## Añadimos fuentes 

Ingresamos a [Fonts](https://ohmyposh.dev/docs/installation/fonts) en la misma página y luego en [Nerd Fonts](https://www.nerdfonts.com/) y luego en [Downloads](https://www.nerdfonts.com/font-downloads). 

- Buscamos:  
	- Hack Nerd Font
	- Descargar 
	- Descomprimir en Hack
- En el buscador de Windows: 
	- Configuración de fuentes 
- Arrastramos todas las fuentes dentro del recuadro de las fuentes: 
	- 📌 No arrastrar la `license.md` ni el `readme.md`

## Dentro de Git Bash

- Clic derecho sobre el nombre de usuario de la parte superior de la ventana:
	- Options
	- Text
		- Select: Busca cualquiera de estos dos
			- Hack NFM 
			- Hack Nerd Font Mono
	- Apply + Save (Ok)
	- Apply + Save 

## Cambiar theme 

Entramos en [Customize](https://ohmyposh.dev/docs/installation/customize) y bajamos hasta `Config syntax`. 

```shell
nano .bash_profile
```

Borramos el contenido y pegamos esto: 

```shell
eval "$(oh-my-posh init bash --config ~/jandedobbeleer.omp.json)"
```

Antes de guardar nos vamos al buscador de windows:

- Editar las variables de entorno
	- Variables de entorno 
	- `POSH_THEMES-PATH:` Doble clic y copiar.
		- C:/user/ghostone/AppData/local....etc
	- Cancelar para salir 

Ahora editamos pegando la ruta anterior (ver referencia abajo):

```shell
eval "$(oh-my-posh init bash --config ~/🔥PEGAMOS AQUÍ 👈👀jandedobbeleer.omp.json)"
```

Queda así: 

```shell
eval "$(oh-my-posh init bash --config ~/C:\user\ghostone\AppData\Local\Programs\oh-my-posh\themesjandedobbeleer.omp.json)"
```

Como la virgulilla `~` representa la ruta de nuestro usuario podemos borrar `C:\user\ghostone\` hasta `~\AppData` además debemos cambiar el `\` por `/`.

```shell
eval "$(oh-my-posh init bash --config ~/AppData/Local/Programs/oh-my-posh/themes/jandedobbeleer.omp.json)"
```

Ahora cambiamos el theme **jandedobbeleer** por el que quieras, para esto nos vamos a [themes](https://ohmyposh.dev/docs/themes).

clean-detailed 👈👀

```shell
eval "$(oh-my-posh init bash --config ~/AppData/Local/Programs/oh-my-posh/themes/clean-detailed.omp.json)"

# Guardar
- ctrl + o
- enter
# Salir de Nano
- ctrl + x

# Ejecutamos los cambios
exec bash 
```

Otras opciones a clean-detailed pueden ser:

- bubbles
- bubblesextra
- json
- tokyonight_storm
- wholespace

Podemos cambiar el color de la terminal 

- Clic derecho en la parte superior de nuestro nombre de usuario 
- Options 
- Theme 
- Apply y Save

## Cambios theme a futuro 

```shell
cd ~
nano .bash_profile
```

Aquí reemplazamos el theme: clean-detailed anterior por el que mas te guste. 

```shell
eval "$(oh-my-posh init bash --config ~/AppData/Local/Programs/oh-my-posh/themes/bubblesextra.omp.json)"

# Guardar
- ctrl + o
- enter
# Salir de Nano
- ctrl + x

# Ejecutamos los cambios
exec bash 
```

## Resultado 

![](https://i.postimg.cc/C5LLdqSJ/theme-clean-detailed.png)

[Ver Tutorial](https://www.youtube.com/watch?v=Bkaox81ppds)