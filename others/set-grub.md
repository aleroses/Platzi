Buscar un GRUB theme
- Descargar
- Descomprimir
- theme.txt

Buscar:
- /boot/grub

Mover del lugar de descarga a la carpeta grub
mv /home/ghost/Download/name-theme .

Copiar la ruta actual
pwd
/boot/grub/name-theme
/boot/grub/CyberRe 1.0.0/CyberRe

ahora:
sudo vim /etc/default/grub

Escribimos:
GRUB_THEME=/boot/grub/themes/name-theme/theme.txt

/boot/grub/CyberRe 1.0.0/CyberRe/theme.txt

CyberRe\ 1.0.0/


Por ultimo actualizar grub
sudo update-grub