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

Se puede dar doble clic sobre un elemento numérico y con las flechas subir y bajar el número.

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

Respecto a los colores de Material Design , para poder ver la combinación de colores que se pueden aplicar a una página, en la sección mencionada de Material Design recordar dar un clic sostenido a cada uno para visualizar la línea de colores de esta forma:

Entrar a la paleta de colores y dirigirse a la sección de Material Design

![](https://i.postimg.cc/sxpFcqdq/5-material-design1.png)

Clic sostenido sobre la línea de colores que desee visualizar

![](https://i.postimg.cc/VvPpdgrR/5-material-design2.png)

## 6. Manejo de sombras en DevTools

A quienes no les aparezcan los tres puntitos para editar las sombras hagan esto:

1. Agreguen el estilo **box-shadow**.
2. Seleccionen la opción: **0 0 black**
3. Les aparecerán dos cuadritos superpuestos los cuales sacan un diálogo que dice: **"Open shadow editor"**
4. Hacen clic ahí y listo.
5. Aplica lo mismo para: text-shadow

![open shadow editor](https://i.postimg.cc/xjz8b17p/6-open-shadow.png)

## 7. Animaciones en DevTools

- Customize and control DevTools (3 puntos)
- More tools / Animations

[Página para probar animaciones](https://animate.style/)

Enlaces de bibliotecas de animaciones y efectos CSS:

- [Hover](https://ianlunn.github.io/Hover/)
- [CSShake](https://elrumordelaluz.github.io/csshake/)
- [Anijs](https://anijs.github.io/)
- [CSS Wand](https://www.csswand.dev/?ref=producthunt)
- [Animate Components](https://animate-components.surge.sh/)
- [Keyframes](https://keyframes.app/)
- [AniCollection](https://anicollection.github.io/#/)
- [SpinKit Loader](https://tobiasahlin.com/spinkit/)
- [Animejs](https://animejs.com/)

### Dato

Si cuando ingresan a **animate.css** y les aparece que no están habilitadas las animaciones en su sistema operativo, solo tienen que ir a Configuración de accesibilidad y Activar las animaciones.

## 8. ¿Cómo medir el código que no ocupamos?

- Customize and control DevTools (3 puntos)
- More tools / Coverage

![Coverage](https://i.postimg.cc/tCk9458V/8-coverage1.png)

Para empezar a usar esta herramienta solo das **Click the record button ⚫...**

En esta parte puedes limpiar todo o recargar la página para ver más detalles de los archivos cargados.

En la parte de **Usage Visualization** tenemos barras de carga en rojo y blanco, lo cual indica el **porcentaje de código no utilizado**, también expresado en bytes, de cada uno de los archivos, respecto del peso total de los mismos que está justamente en la columna que está a la izquierda, cuyo nombre es **Total Bytes**.

![](https://i.postimg.cc/c4C8ZrbZ/8-coverage2.png)

Para ver el código solo basta dar clic en alguno de los elementos en el apartado **URL**.

## 9. JavaScript y el DOM

Para obtener un elemento del DOM lo seleccionamos desde **Elements** en los DevTools de navegador y después vamos a la consola y escribimos `$0` esto nos traerá ese elemento previamente seleccionado.

Para empezar a manipular elementos y para agregarles JavaScript podemos usar estas dos formas:

1. `getElementById()` = para llamar a un ID.
2. Vamos al elemento, damos clic derecho, nos saldrá un menú vamos a donde dice (copy) y después donde dice **Copy JS-PATH**
    Obtendremos algo parecido:
    `document.querySelector("Body > header")`    

![Copy JS path](https://i.postimg.cc/k5rgzyZ6/9-copy-js-path.png)

Posteriormente, con el elemento que obtengamos le podremos añadir funciones con JavaScript.

## 10. DevTools como editor (IDE)

- Sources
- Workspace: Add folder
- Seleccionar toda la carpeta
- Allow

También puedes agregar la carpeta desde tu explorador de archivos, arrastrándola hasta **Workspace**. Además puedes usar Ctrl + P para hacer busquedas rapidas de tus archivos.

![Workspace](https://i.postimg.cc/65jBk4YX/10-workspace.png)

**OJO:** El css permite ser modificado desde el inspector de elementos también, mientras que el HTML y el JavaScript, solo permite ser modificado desde la pestaña **Sources**. Los cambios que hagas en el CSS del lado del inspector de elementos, se guardarán automáticamente en el archivo CSS local. Los cambios que hagas y guardes desde la pestaña **Sources**, se guardarán automáticamente en los archivos locales.

⚠️ Es importante tener cuidado al modificar archivos locales importantes, ya que los cambios se guardarán automáticamente y podrían afectar el funcionamiento de tu aplicación web. Siempre es recomendable hacer una copia de seguridad de tus archivos antes de realizar cambios importantes.

[Edit and save files in a workspace](https://developer.chrome.com/docs/devtools/workspaces)

## 11. Simular una ventana móvil

El **Device Mode** es útil para saber de manera aproximada cuál será el aspecto y el rendimiento de tu página en un dispositivo móvil.

Device Mode es el nombre de un conjunto variado de funciones en Chrome DevTools que te ayudan a simular dispositivos móviles. Estas funciones incluyen:

- Simulación del viewport de un dispositivo móvil
- Limitación de la red
- Limitación de la CPU
- Simulación de la ubicación geográfica
- Configuración de la orientación

![device-toolbar.png](https://i.postimg.cc/gcHnSK5t/11-device-mode.png)

- [Responsive](https://responsively.app/)
- [Polypane](https://polypane.app/)

## 12. Manejo de sensores

 **Performance ⚙️** nos da algunas opciones como:
 - **Network** que permiten manipular la velocidad del internet.
 - **CPU** nos permite hacer pruebas simulando diferentes dispositivos con poder de cómputo más o menos potentes.

![](https://i.postimg.cc/sXyh6fYb/12-performance-network.png)

A pesar de que Dev Tools nos da estas herramientas, se recomienda comprar dispositivos no tan caros para poder probar nuestras páginas.

Otra herramienta que nos ofrece Dev Tools es emular los sensores del dispositivo(geolocation, orietation, touch). Puedes acceder en la siguiente ruta:

- Customize and control DevTools (3 puntos)
- More tools / Sensors

![](https://i.postimg.cc/x1Y9hkJf/12-sensors.png)

Para saber las posiciones de orientación de un celular necesitamos escuchar el evento [DeviceOrientationEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent).

Usa la [API](https://developer.mozilla.org/es/docs/WebAPI/Using_geolocation#:~:text=La%20API%20de%20geolocalizaci%C3%B3n%20permite,para%20proporcionar%20informaci%C3%B3n%20de%20ubicaci%C3%B3n) de Geolocalización que tiene HTML5

## Funcionalidades útiles de Chrome devtools no cubiertas en el curso

En este post te voy a mostrar algunas funcionalidades que posee Chrome DevTools y que no fueron cubiertas en el curso.

### 💻 **Variables $1 al $4**

En el curso vimos como podemos usar **$0** para acceder al actual elemento seleccionado en **Elements**, pero adicionalmente existen otros _shortcuts_ como **$1**, **$2**, **$3**, **$4**. En estas variables el devtools guardará los últimos 4 elementos que selecciones en el tab **Elements**.

### 🔍 **Shortcuts para querySelector y querySelectorAll**

Imagina que quieres saber cuantos botones hay en tu HTML, puedes usar `querySelectorAll` para averiguarlo:

```js
var buttons = document.querySelectorAll('button');
console.log(buttons.length)
// muestra el total de elementos
```

Gracias a los DevTools puedes rápidamente reemplazar esta función por el doble dólar **`$$`**

```js
var buttons = $$('button');
console.log(buttons.length)
// muestra el total de elementos
```

Otro ejemplo:

![](https://i.postimg.cc/wBDHRyVS/vs-query-Selector-All.png)

Tener en cuenta que **`$$`** al ser una utilidad del DevTools retornará un arreglo, mientras que `querySelectorAll` retorna un **NodeList**. Pueden comprobarlo con el siguiente código:

```js
var buttons = $$('button');
Array.isArray(buttons) // retorna true

// 
var buttons = document.querySelectorAll('button');
console.log(buttons) // retorna false
```

Para el caso de `querySelector`, su alias es **`$`** y también es una función a la que debemos pasarle un selector, ambas funciones retornan un elemento del DOM y no hay un cambio en el tipo de dato como en `querySelectorAll`

**Tener en cuenta que al ser variables globales pueden ser reemplazadas fácilmente, por ejemplo si tienes jQuery en tu HTML el **`$`** será jQuery y no querySelector**

### ✏️ **Copiar una variable**

Vamos a suponer que tenemos una función que tras realizar una llamada **http** retorna un objeto que representa la información de un usuario.

```js
function fetchUser() {
   var user = {
  	id: 1,
	name: 'Eduardo',
	age: 33,
	country: 'Peru',
	salary: 100
   };
  return user;
}
```

Ahora imagina que necesitas todo ese objeto para pegarlo en otra herramienta y hacer algún proceso con esa información, lo normal sería hacer un `console.log` al objeto, seleccionarlo y copiarlo. !Aburrido! 

DevTools te ahorra ese proceso con su función **copy**

```js
function fetchUser() {
   var user = {
  	id: 1,
	name: 'Eduardo',
	age: 33,
	country: 'Peru',
	salary: 100
   };
  
  copy(user) // ahora tienes este objeto en tu porta papeles
  return user;
}
```

Listo, cuando ejecutes la función podrás hacer `Ctrl/cmd + V` y pegar el objeto en cualquier lado.

### 🕵️ **Seleccionar elementos vía código con inspect**

Buscar y seleccionar un elemento es muy simple con DevTools, simplemente haces clic en el icono de la flecha con el cuadradito (`Ctrl + Shift + C`) y luego vas al HTML y haces clic sobre el elemento que deseas, fácil. Pero hay una manera _fancy_ de hacerlo desde código gracias al método **inspect**.  
Este método acepta como parámetro un elemento del DOM.

```js
var button = document.querySelector('#my-button');
inspect(button);
```

Al ejecutarse la función inspect automáticamente, el DevTools cambiará al tab **Elements** y te mostrará el elemento que corresponda al selector **my-button**.

### 👀 **Monitorear una función**

¿Heredaste un código larguísimo y difícil de entender? ¿Las funciones y variables tienen nombres de letras como **x**, **z**? ¿Estás leyendo esto con voz de vendedor de teleferia? No te preocupes, con la función **monitor** DevTools te avisará cuando alguna función de tu código ha sido llamada.

En el siguiente código veremos a una función que retorna un simple objeto

```js
function fetchUser() {
   var user = {
    id: 1,
    name: 'Eduardo',
    age: 33,
    country: 'Peru',
    salary: 100
   };
  return user;
}
```

Si deseo que los DevTools me avise cada vez que se ha ejecutado la función solo debo hacer lo siguiente:

```js
monitor(fetchUser);
// Ejecutamos la función
fetchUser();
// Nos aparecerá el siguiente mensaje:
// function fetchUser called
```

### 📷 **Tomar screenshots**

Quieres pasarle un screenshot a alguien de un elemento del DOM específico. Pues simple, selecciono el elemento del DOM usando el DevTools, y luego presiono `Ctrl + Shift + P` se abrirá un modal con un listado de comandos de acciones del DevTools, escribimos “capture node screenshot” y automáticamente se guardará la imagen del nodo seleccionado. Adicionalmente, se puede generar screenshot de toda la pantalla o incluso dar la opción de seleccionar una parte en específico.

![](https://i.postimg.cc/KvZsbKw0/capture-node-screenshot.png)

Algo así:

![](https://i.postimg.cc/J7BBhPVn/devtools-capture-screenshot.gif)


👈👀
👇
📌