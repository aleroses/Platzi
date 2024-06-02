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

- **Ctrl + Shift + C**, para activar el selector
- **Ctrl + F**, para hacer búsquedas dentro de **Elements**, este comando también sirve para buscar palabras dentro de una página web

## 4. Editando CSS

Para agregar una declaración CSS a un elemento, use la pestaña Estilos cuando desee cambiar o agregar declaraciones CSS a un elemento.

- Haga clic derecho en el elemento a modificar a continuación y seleccione Inspeccionar.
- Haga clic en la etiqueta, clase o Id cerca de la parte superior de la pestaña Estilos.
- Escribe `background-color` o el estilo deseado y presiona Enter.
- Escribe en este caso como ejemplo `honeydewy` presiona Enter, te debe quedar algo así `background-color: honeydewy`. En el Árbol DOM, puede ver que se aplicó una declaración de estilo en línea al elemento.

Se puede dar doble click sobre un elemento numérico y con las flechas subir y bajar el numero.

También podemos ver cómo se comporta un elemento cuando se activa una _pseudo-class_ desde el apartado `:hov` y también modificarla.

En la sub-sección **Computed** podemos ver todos los estilos que estrictamente solo se está aplicando a ese elemento seleccionado y podemos ver el modelo de caja también.

### Dato

Una vez que realizamos los cambios en los estilos para depurar, es común olvidar cuáles fueron todos los cambios que se realizaron en los estilos, para ello podemos acceder a la herramienta **changes** y observar estos cambios:

- Customize and control DevTools (3 puntos)
- More tools / Changes

### Shortcuts

También tenemos shortcuts para aumentar o disminuir el tamaño de los elementos:

- **Shift + flecha arriba o flecha abajo** = modificas 10px el tamaño. 
- **Ctrl + flecha arriba o flecha abajo** = modificas 100px el tamaño. 
- **Alt + flecha arriba o flecha abajo** = modificas 0.1px el tamaño.

## 5. Colores en DevTools

Para abrir el Selector de colores, encuentra una declaración de CSS en el panel Styles que defina un color (como color: blue). A la derecha del valor de la declaración se encuentra un cuadrado pequeño de color. El color del cuadrado coincide con el valor de la declaración. Haz clic en este pequeño cuadrado para abrir el Selector de colores.

```css
element.style {👇
  background: 🟪 darkslateblue;
}
```

Recordar:

Respecto a los colores de Material Design , para poder ver la combinación de colores que se pueden aplicar a una pagina, en la sección mencionada de Material Design recordar dar un click sostenido a cada uno para visualizar la linea de colores de esta forma :

Entrar a la paleta de colores y dirigirse a la sección de Material Design

![](https://i.postimg.cc/sxpFcqdq/5-material-design1.png)

Click sostenido sobre la linea de colores que desee visualizar

![](https://i.postimg.cc/VvPpdgrR/5-material-design2.png)






Bikatti
👈👀
👇
📌