# GRUB Config

Buscar un GRUB theme, este es el que elegí [CyberRe](https://www.gnome-look.org/p/1420727).

Entra en la parte que dice `file` y luego:

- Descarga
- Descomprime
- Revisa el archivo `theme.txt`

En tu PC busca la ruta:

```bash
# Ruta
/boot/grub
# Mueve la carpeta descargada a la carpeta grub
mv /home/ghost/Download/name-theme .

# Copia la ruta actual
pwd
# En esta ruta debe estar el archivo theme.txt
/boot/grub/name-theme
# En mi caso se ve algo así
/boot/grub/CyberRe_1.0.0/CyberRe

ahora:
sudo vim /etc/default/grub
```

📌 Nota importante: La ruta no debe tener espacios, en caso de tenerlos renombra las carpetas para que no tengan espacios: `CyberRe_1.0.0`

Si no sabes usar VIM ver [[vim]] o [Vim](https://github.com/aleroses/Platzi/blob/master/DW/2-intermedio/vim/vim.md)

```bash
# Vim escribimos
GRUB_THEME=/boot/grub/themes/name-theme/theme.txt

# Queda algo así
❯ cat /etc/default/grub 
# If you change this file, run 'update-grub' afterwards to update
# /boot/grub/grub.cfg.
# For full documentation of the options in this file, see:
#   info -f grub -n 'Simple configuration'

GRUB_DEFAULT=0
GRUB_TIMEOUT_STYLE=hidden
GRUB_TIMEOUT=10
GRUB_DISTRIBUTOR=`lsb_release -i -s 2> /dev/null || echo Debian`
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
GRUB_CMDLINE_LINUX=""
GRUB_THEME=/boot/grub/CyberRe_1.0.0/CyberRe/theme.txt 👈👀
```

Para culminar:

```bash
# Actualizar grub
sudo update-grub
```

[Instalar tema en GRUB (fácil)](https://www.youtube.com/watch?v=U0qpwOLzLYs)