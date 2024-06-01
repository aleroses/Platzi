# Curso de Debugging con Chrome DevTools

> 31-05-2024

## 1. Introducción del curso e historia de Debugging Dev Tools

### ¿Por qué Debugging?

El debugging nos ayuda a solucionar problemas que tengas con el software, ese problema debemos encontrarlo y solucionarlo, este proceso se le llama **debugging.**

> Debugging es el proceso de encontrar y resolver defectos o problemas dentro de un programa (software) que impide el funcionamiento correcto del programa o sistema.

[Recurso oficial:](https://developers.google.com/web/tools/chrome-devtools)

## 2. Introducción a DevTools

Las dev tools son herramientas de desarrollo que vienen en todos los navegadores. No todas son iguales por lo que hay tools muy particulares dependiendo del navegador.

```bash
# Abrir DevTools
Ctrl + Shift + I
```

Elements: HTML
Styles: CSS
Sources: Archivos que se descargan al navegador una vez el proyecto empieza a cargar.

### Instalar Firefox Developer Edition en Linux Mint

[Descargar Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).

Para instalar Firefox 127.0 Beta 9 en Linux Mint a partir del archivo `firefox-127.0b9.tar.bz2`, sigue estos pasos:

```bash
cd ~/Descargas

# Extraer el archivo
tar xjf firefox-127.0b9.tar.bz2

# Mover Firefox al directorio opt
sudo mv firefox /opt/firefox127
# Esto mantendrá el sistema organizado.

# Crear un enlace simbólico
sudo ln -s /opt/firefox127/firefox /usr/bin/firefox127

# Ejecutar Firefox
firefox127
```

**Crear un acceso directo (opcional)**:

Para crear un acceso directo en el menú de aplicaciones:

- Crea un archivo de escritorio usando un editor de texto como `nano` o `gedit`:
	```bash
	sudo nano /usr/share/applications/firefox127.desktop
	```

- Añade el siguiente contenido al archivo:
     ```plaintext
     [Desktop Entry]
     Name=Firefox Beta 127
     Comment=Web Browser
     Exec=/opt/firefox127/firefox
     Icon=/opt/firefox127/browser/chrome/icons/default/default128.png
     Terminal=false
     Type=Application
     Categories=Network;WebBrowser;
     ```

   - Guarda el archivo y cierra el editor. Para guardar y salir de `nano`, sigue estos pasos:
	- **Guardar**: `Ctrl + O`, luego `Enter`
	- **Salir**: `Ctrl + X`

Ahora deberías tener Firefox 127.0 Beta 9 instalado y listo para usar en tu sistema Linux Mint.

- [Atajos para DevTools Chrome](https://developers.google.com/web/tools/chrome-devtools/shortcuts)
- [Atajos para DevTools Firefox](All keyboard shortcuts[¶](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#all-keyboard-shortcuts "Link to this heading"))

## 3. Editando HTML

Podemos ver el HTML de una página web en la sección de **Elements** del DevTools. Aquí podremos manipular el HTML o usar el selector y al tocar en algo en específico dentro de la página en **Elements** se colocará en la línea de código html que sea ese elemento seleccionado.

Para modificar textos dentro de etiquetas das doble clic, y también en las etiquetas. 

> Los tres puntos a la derecha nos dejan arrastrar todo ese bloque de código hacia otros lugares.

```html
Elements
... 👈👀 <div class="icon" role="presentation" alt=""></div>
```

### Shortcuts

- **Ctrl + Shift + c**, para activar el selector
- **Ctrl + f**, para hacer búsquedas dentro de **Elements**, este comando también sirve para buscar palabras dentro de una página web


Bikatti
👈👀
👇
📌