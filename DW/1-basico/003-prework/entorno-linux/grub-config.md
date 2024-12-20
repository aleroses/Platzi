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
/boot/grub/CyberRe 1.0.0/CyberRe

ahora:
sudo vim /etc/default/grub
```






Escribimos:
GRUB_THEME=/boot/grub/themes/name-theme/theme.txt

/boot/grub/CyberRe 1.0.0/CyberRe/theme.txt

CyberRe\ 1.0.0/


Por ultimo actualizar grub
sudo update-grub

[Instalar tema en GRUB (fácil)](https://www.youtube.com/watch?v=U0qpwOLzLYs)