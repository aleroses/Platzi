# Customize WSL
## Oh My Posh

- Entramos a [Oh My Posh](https://ohmyposh.dev/) Get Started 
- Entramos en la pestaña Linux 
- Desde una terminal Linux copiamos el comando: 
	- `set $TERM=xterm-256color`
	- `$TERM` 
		- Mensaje: `xterm-256color: command not found`

## Nerd Font 

- Entramos en la pestaña Fonts y volvemos a ingresar a Nerd Fonts 
- Entramos a:  The best developer fonts - Download 

Para saber si tu equipo es de 32 o 64 bits corre el siguiente comando: 
- uname -m

## Instalamos UNZIP 
- sudo apt install zip
- zip -v
- sudo apt install unzip
- unzip -v

## Instalamos Oh My Posh 

 sudo curl -s https://ohmyposh.dev/install.sh





- sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
- git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

[tutorial](https://www.youtube.com/watch?v=235G6X5EAvM)