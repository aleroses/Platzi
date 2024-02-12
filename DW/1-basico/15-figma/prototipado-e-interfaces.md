# Curso de Figma: Prototipado e Interfaces 

> Inicio: 05/02/2024  
> Final: 02/2024

## **1.** ¿Para qué sirve Figma y por qué elegirlo?

### 2013 resuelve estos problemas:

- Acceso a los archivos correctos
- Versiones diferentes / actualización
- Comunicación entre involucrados
- Visibilidad sobre el proceso / complejidades

### Como producto

- Editor en línea de vectores que siempre se mantiene actualizado
- Accesible desde cualquier equipo con una pantalla e internet
- Facilita diferentes procesos de co-creación con resultados visuales

## **2.** Interfaz en Figma

Lo primero que debemos hacer es descargar la aplicación desktop de Figma desde la página oficial, allí podremos encontrar los instaladores de la aplicación para los sistemas operativos MacOSX y Windows.

**Podemos descargar Figma desde su página oficial:**  
[Figma downloads](https://www.figma.com/downloads/)

Figma funciona en web, pero es recomendable usar la versión Desktop, ya que está optimizada para el desarrollo eficaz de nuestras interfaces y para que siempre tengamos la última versión actualizada.

### ¿Como empezar a usar Figma?

- Crear una cuenta asociada a la cuenta de google
- Nombre de equipo (Si no tienes un equipo, entonces tu nombre o un nombre de pruebas)
- Crear y nombrar un proyecto

Al crear un nuevo archivo, Figma nos despliega 2 opciones para crear nuestro proyecto, que son:

```
* Archivos de diseño / Design Files: 👈👀
Es un espacio detrabajo vectorial, pensado para la creación de interfaces como tal.

* Archivos de Figjam / Figjam Files: 👈👀
Es un tablero digital interactivo que permite crear sesiones de co-creacion con otras personas y esta enfocado al proceso de ideacion.
```

Actualmente puedes crear un nuevo proyecto desde el siguiente icono:

![](https://i.postimg.cc/YCcyg19J/2-create-new-design.png)

En este curso trabajaremos la creación de “Archivos de diseño / Design Files”.

La estructura de los archivos en figma va asociado a un proyecto y a un equipo. Lo que podemos traducir en que necesariamente, debemos crear un Equipo y un proyecto.

```
[Equipo]
[Proyecto] 
[Archivos]
[Páginas]
```

### Páginas en Figma

Son básicamente todo el espacio en dos dimensiones que existe y que captura todas las capas de tu espacio de trabajo.

![](https://i.postimg.cc/yN4gsGkD/2-pages.png)

### ¿Que son los layers / capas?

Son todos los diferentes objetos que van a componer mi interfaz como los son los bloques que contienen texto, vectores, imágenes, y también pueden tener grupos o frames y todo dentro de una página.

![](https://i.postimg.cc/bY5q7FCk/2-frames.png)

### Punto de partida

Nuestro punto de partida será siempre crear un frame o espacio de trabajo y lo podemos crear únicamente pulsando `F` o `A` directamente en la interfaz desktop de Figma. Una vez presiones alguna de las dos teclas, figma pregunta por el tamaño del dispositivo.

![](https://i.postimg.cc/s27ngbmq/2-device-size.png)

### Atajos vistos

```bash
# Crear Frame
F
```

## Quiz: Introducción 

1. ¿Dónde se puede usar Figma?

	- En Chrome y otros navegadores

2. ¿Se puede colaborar con varios diseñadores en tiempo real en Figma?

	- Sí

3. ¿Cuál es el principal enfoque de Figma?

	- Diseño de interfaces

## **3.** Configuración de guías y retículas

### Creando retículas (grids)

Son artefactos muy poderosos porque nos van a permitir ser consistentes a lo largo de nuestro diseño.

Retícula recomendada para este proyecto y para Android es:  

* 4 columnas 
* 16 puntos de densidad (dp) gutter (canaleta) es decir de espacio entre columnas  
* 16 puntos de densidad (dp) margen a la derecha e izquierda.

### Creando guías

Las guías no son espacios que se aplican sobre todo el frame en particular. Es una  
sola línea que se puede sacar desde los bordes de la interfaz o también podemos usar  
el shortcut del teclado `shift + r` la cual podemos deslizar con el mouse hasta la zona en el frame donde queremos usarla

Vamos a crear nuestro primer espacio de trabajo  

**_Debe contener:_**

- Un frame
- Una retícula en columnas aplicadas
- Dos guías para ubicar un texto

![](https://i.postimg.cc/3xRkHb2T/3-frame-grid.png)

### Atajos vistos

```bash
# Mostrar u ocultar guías
Shift + R
```

## **4.** Creación de textos y estilos

Un objeto de texto tiene diferentes propiedades

- Texto
    - Fuente
    - Espaciado
    - Alineación
- Color

**Atajos para la creación y de edición de texto**

- `ctrl o cmd + B`: Bold o negrita
- `ctrl o cmd + I`: Italic o cursiva
- `ctrl o cmd + U`: Underline o subrayado

### ¿Qué es un estilo?

Son propiedades globales de los elementos que pueden ser reutilizables a lo largo de varios archivos o proyectos.

- [Texto Lorem ipsum](https://www.lipsum.com/)
- [Plugin Lorem ipsum](https://www.figma.com/community/plugin/736000994034548392/lorem-ipsum)

Podemos definir la fuente, tamaño, alineación, espaciado, etc desde la sección texto:

![](https://i.postimg.cc/T3mvF7Yc/4-text-settings.png)

### Crear estilo de texto

Esto permitirá dar estilos de manera estandarizada a nuevos textos.

![](https://i.postimg.cc/wT8q5qRw/4-create-text-style.png)

#### Ejemplo de uso: 

Creamos un texto, pero este tiene un estilo totalmente diferente al que queremos. En este caso queremos un texto que tenga las mismas características que nuestro estilo de texto creado previamente.

Para que aparezcan todas las opciones de texto le das al icono Detach style.

![](https://i.postimg.cc/2SFrWVWY/4-detach-style.png)

Puedes probar con algunos estilos nuevos y al final dejarlo con el estilo predefinido.

![](https://i.postimg.cc/jS4jtWgm/4-apply-text-style.png)

### Atajos vistos

```bash
# Crear un Texto
T + Clic

# Bold o negrita
Ctrl + B

# Italic o cursiva
Ctrl + I

# Underline o subrayado
Ctrl + U

# Mostrar u Ocultar el Layout Grid
Shift + G

# Mostrar espacio entre objetos
Clic en objeto + Alt + Mover mouse

# Cerrar Figma
Ctrl + Q
```

## **5.** Figuras e imágenes en Figma

Las figuras, efectos e imágenes son otros elementos que son complementarios al texto para que la interfaz cobre vida. Estos elementos nos ayudan a complementar el mensaje y la experiencia que se está creando.

### Crear tu primera figura

Para crear nuestra primera figura podemos acceder a los siguientes atajos del teclado:

- r - Rectángulo
- o - Óvalo
- i - Línea

Cada uno de esos elementos tiene sus propiedades.

### Propiedades de una figura

Las propiedades de una figura afectan el estado y forma. Todas las figuras tienen:

- Alineación
- Tamaño
- Posición
- Rotación
- Radio de bordes
- Constraints (Restricciones)
- Opacidad
- Relleno (Color, Gradient, Imagen)

### Organizar los objetos

- (alt / option) Calcular la distancia de un objeto
- Guías inteligentes
- Smart selection
- Padding entre elementos
- Mostrar / Ocultar
- Escalar con v o con k

Todos los elementos contenidos dentro de un frame son objetos “hijos” del contenedor que los soporta. Así pues, sus restricciones funcionan con base en el comportamiento de su “padre”.

### Creando figuras

En el panel derecho tenemos opciones para cambiar la posición en X y en Y de los objetos, cambiar su ancho y alto, cambiar el ángulo y cambiar los bordes de estos.

![](https://i.postimg.cc/W19WmbWC/5-rectangle.png)

Nota que dentro de cada figura hay unos pequeños círculos que permiten cambiar los bordes y crear nuevas figuras.

![](https://i.postimg.cc/QdWfWBnM/5-circle.png)

#### Definiendo constraints

Creamos un nuevo frame y dentro un rectángulo, al hacer esto podemos notar que en la sección de Constraints tenemos que la posición de ese objeto creado siempre será a la izquierda y arriba.

![](https://i.postimg.cc/ZK696cm2/5-constraint-1.png)

Eso quiere decir que si el frame contenedor cambia de tamaño, el objeto hijo (rectángulo) siempre mantendrá esa misma posición. 

![](https://i.postimg.cc/ydhyNSjS/5-constraint-2.png)

Esto se puede modificar si cambiamos las restricciones o contraints. Ahora le decimos que se ajuste a la izquierda y derecha, por último dejamos que se ajuste en la parte superior como venía por defecto.

![](https://i.postimg.cc/s27Pg042/5-constraint-modified.png)

### Rellenar figuras con imágenes

Las figuras o formas no solo pueden ser rellenadas con algún color, también se les puede agregar imágenes

![](https://i.postimg.cc/P53FBMWx/5-image-filler.png)

Una vez tenemos la figura como la imagen de arriba, buscamos alguna imagen en internet y la copiamos, luego sobre la figura pegamos usando `Ctrl + V`.

![](https://i.postimg.cc/SR1CKfWK/5-image-beatles.png)

### Atajos vistos

```bash
# Crear cuadros perfectos
R + Clic + Arrastrar + Shift

# Crear circulos perfectos
O + Clic + Arrastrar + Shift

# Crear líneas perfectos (45°)
L + Clic + Arrastrar + Shift

# Pegar imagenes sobre figuras
Ctrl + V
```

#bcb3ff

## **6.** Efectos en Figma

Cuando hablamos de los efectos dentro de las capas de figma, hacemos referencia a la visibilidad de las capas y los objetos que ya tenemos. Algunos efectos muy comunes son las sombras y el desenfoque, y hay maneras muy creativas de crear y combinar estos efectos para lograr interacciones mucho más interesantes.

### Creando Efecto

- Selecciona elemento
- Panel de propiedades
    - Effects
        - Inner Shadow
        - Drop Shadow (por defecto)
        - Layer Blur
        - Backgroud Blur

Crearemos una imagen tipo polaroid, para lo cual debemos tener:

- Un rectángulo con relleno blanco
- Otro rectángulo con la imagen
- Una sombra aplicada
- Todo lo anterior sobre el frame de la nota que ya hemos avanzado en las clases pasadas

#### Ejemplo

Usando la imagen que rellenamos dentro de una figura en la clase anterior, creamos un rectángulo de las mismas medidas.

Le damos algunos efectos para lograr un estilo polaroid.

![](https://i.postimg.cc/hjZYNrg0/6-effect.png)

Luego sobreponemos las dos figuras, seleccionamos la fotografía, presionamos `Shift` y desde una de sus esquinas, arrastramos hacia abajo para disminuir el tamaño de la imagen y al mismo tiempo lograr centrarla:

![](https://i.postimg.cc/3JpZ5THq/6-polaroid-effect.png)

Si la imagen te queda por debajo, puedes re-posicionarla desde la sección Layers del lado izquierdo, solo debes arrastrar y colocarla en la posición deseada (ve imagen arriba).

##### Agrupando elementos

Ahora los dos objetos sobrepuestos deberían comportarse como uno solo, podríamos usar `Ctrl + G` para crear un grupo, pero se recomienda crear un nuevo frame que los contenga, para eso seleccionamos ambos elementos y usamos `Ctrl + Alt + G`.

Una vez aquí podemos hacer doble clic sobre el nuevo frame y renombrarlo.

![](https://i.postimg.cc/MKbBx097/6-creating-frames.png)

### Atajos vistos

```bash
# Crear un Grupo
Ctrl + G

# Crear un Frame
Ctrl + Alt + G
```

## **7.** Redes de Vectores

Cuando hablamos de redes de vectores, hablamos de un concepto muy importante en el mundo digital en general, ya que lo común es diseñar en píxeles, pero esto produce piezas digitales en baja resolución. 

Figma está diseñado en vectores los que significa que aunque se modifique el tamaño de la pieza, esta no perderá su resolución, son operaciones no destructivas.

### Construyendo vectores

- Tecla `P` (pen) para crear un vector libre
- Clic en cualquier lugar del frame o área de trabajo y empezará a crear vectores unidos por puntos
- Tecla Esc para salir del modo de creación de vectores
- En figma, un punto puede alojar una cantidad infinita de trazos que salgan desde ese punto
- Cuando seleccionas y mueves dicho punto, todos los trazos se mueven con él

### Operaciones booleanas

Son las operaciones en las que tomamos figuras en las que mezclamos o restamos una figura o un segmento y dependiendo de los movimientos que se hagan entre forma y fondo.

Con los vectores, vamos a crear los iconos que permiten navegar desde y hacia  
la nota.

### Interfaz de Notas

Primero estandaricemos la grilla de columnas que usaremos el resto del curso.

Aplicamos los mismos parámetros vistos en la clase 3 y creamos el nuevo estilo de grillas.

![](https://i.postimg.cc/qv8wSrxM/7-standardize-grids.png)

Ahora hacemos lo mismo con la sombra creada clases atrás.

![](https://i.postimg.cc/Dz24x3zG/7-standardize-shade.png)

#### Truncar texto

Esto permite mostrar solo el texto que está dentro del tamaño de su contenedor, en caso de haber demasiado texto, este se oculta. Puedes mostrar más o menos texto aumentando la altura del contenedor.

![](https://i.postimg.cc/L60Myr3W/7-truncate-text.png)


### Crear vectores

Primero creemos el icono de volver usando la herramienta Pen (P), para esto creamos un frame de w24 x h32 y creamos un Layout Grid de 4 (grid).
 
![](https://i.postimg.cc/3xVD28fJ/7-icon-back.png)

Ahora crearemos el botón de opciones, en este casó creamos un frame de w32 x h32, además de un Layout Grid de 4 (grid).

Creamos 3 círculos y los seleccionamos para darles la propiedad booleana `Union Selection`, luego alineamos los círculos en el centro del frame y por último los envolvemos en un círculo más grande. Como esto queda encima de los otros elementos podemos usar Clic derecho y enviarlo al fondo.

![](https://i.postimg.cc/8zYpzDTR/7-icon-options.png)

### Resultado

![](https://i.postimg.cc/d07c5thh/7-result.png)

### Atajos vistos

```bash
# Dibujar Verctores
P
```
- [Practicar el uso de la Pluma](https://bezier.method.ac/)
-  [Boolean method](https://boolean.method.ac/)

## **8.** Colores en Figma

### Selección de colores

Al trabajar sobre un espacio digital, en lo que estamos trabajando realmente es sobre luz, y la luz está compuesta solamente sobre tres colores: Rojo, azul y verde. 

Todos los colores que vemos son una combinación de esos tres colores, el negro es la ausencia de esos colores y el blanco son todos los colores al mismo tiempo.

### Seleccionar un color

La manera más fácil de seleccionar un color, es tomar una figura, un texto o un objeto que tenga una propiedad de relleno y oprimir la tecla (i) y desplazarnos hasta el menú de herramientas y seleccionar el color que se desea, en algunos casos el conocido fill.

- Objeto seleccionado
- Panel de propiedades
    - Fill
    - Colores hexadecimales (Seleccionar el color de muestra)
    - Elegir el nuevo color o
    - Herramienta “eye dropper”(i) para elegir un color en el entorno

Si quieres extraer un color de alguna imagen, debes seleccionar el objeto a ser rellenado, presionar `i` luego pincha en el color elegido.

![](https://i.postimg.cc/2jQt4WV3/8-select-color.png)

Luego de seleccionar los colores, puedes darles un nombre.

![](https://i.postimg.cc/jSvFnY35/8-name-colors.png)

También puedes agruparlos.

![](https://i.postimg.cc/rF6QYwR3/8-add-new-folder.png)

### Gradientes

Es un espacio de trabajo que no tiene un solo color sólido, sino que tiene diferentes puntos en los que varía el color en transición de colores.  

Esto es mucho más natural para el ojo humano, ya que este tipo de transiciones se pueden apreciar en la naturaleza, como por ejemplo un atardecer o también en alguna obra de arte que contenga este tipo de gradientes.

### Creando un gradiente

- Objeto seleccionado
- Panel de propiedades
    - Fill
	- Seleccionar icono gradiente
	    - Linear
	    - Radial
	    - Angular
	    - Diamond

Crearemos la paleta de colores de nuestra aplicación de notas, que está muy basada en tonos grises, ya que no queremos llamar demasiado la atención, pero sí debería tener algunas características:

- 3 grises para información
- 4 colores de resalte para diferentes estados (información, advertencia y éxito).
- Todos organizados como estilos en nuestro archivo y aplicados a la nota creada.

📌 Recuerda que puedes asignar un nombre a cada color creado y luego agrupar todos estos colores.

![Agrupar colores](https://i.postimg.cc/sg6JRYg6/8-grouping-colors.png)

### Aplicando estilos de colores

Ahora, para aplicar los estilos creados, primero seleccionamos la parte donde aplicaremos cambios...

![](https://i.postimg.cc/25vykYxq/8-change-color.png)

### Resultados 

Debería mostrar solo colores previamente almacenados.

![](https://i.postimg.cc/43ZyxM2B/8-result.png)

### Páginas para buscar colores 

- [Color Hunt](https://colorhunt.co/)
- [coolors](https://coolors.co/)
- [Adobe color](https://color.adobe.com/pt/create/color-wheel)

- [Colores elegidos](https://colorhunt.co/palette/1f2544474f7a81689dffd0ec)

![](https://i.postimg.cc/vBqLYPc4/8-my-colors.png)

## Quiz: Básicos

1. ¿Qué son las operaciones booleanas en Figma?

	- Agregar o restar figuras entre sí dependiendo de sus movimientos relativos

2. ¿Cuál es la ventaja de trabajar con vectores en lugar de píxeles?

	- Evitar la pérdida de resolución en las imágenes

3. ¿Cuál es el propósito de crear un estilo en diseño gráfico?

	- Para hacer el texto reutilizable y evitar ediciones accidentales

## **9.** Importar y exportar

Algo muy importante al momento de trabajar en proyectos digitales y con archivos que quedan disponibles en línea, es la capacidad que tenemos de importar y exportar diferentes elementos sobre nuestra interfaz, ya sea porque queremos agregar fotografías o porque queremos exportar elementos independientes o frames particulares a otros espacios de trabajo.

### ¿Como importar?

- Drag and drop
    - En archivos
    - En proyectos
- cmd + shift + k - Abre el explorador para seleccionar múltiples archivos
- Copy / Paste desde:
    - Sketch
    - Illustrator
    - Otros archivos de figma

Una forma interesante de importar una imagen y a la vez rellenar una figura es la siguiente:

- Crea la figura a rellenar (círculo, cuadrado)
- Presiona `Ctrl + Shift + K`
- Selecciona la imagen a usar
- Pincha dentro del objeto a rellenar

### ¿Qué se puede exportar?

Al momento de exportar, Figma permite exportar en tres formatos principales:

- PNG
- JPEG
- SVG
- PDF - Pero no es muy recomendado

![](https://i.postimg.cc/7hh0NNd8/9-export.png)

### Compartir un archivo

Para compartir un archivo, siempre debemos tener claro a quién vamos a compartir y a quién le estamos compartiendo nuestro proyecto y también cuál es el nivel de permisos que le vamos a otorgar a esa persona o personas para que acceda a toda la información que existe sobre el espacio de trabajo. 

Existen dos tipos de permisos:

- Permisos de edición
    - Solo vista
    - Edición total
- Vista solo de prototipo

![](https://i.postimg.cc/tChCM6jL/9-share.png)

- [Imagenes](https://unsplash.com/es)
- [Plugin para imágenes: Unsplash](https://www.figma.com/community/plugin/738454987945972471)
- [Plugin: Figma to HTML and CSS](https://www.figma.com/community/plugin/1128731099343788397)
- [Plugin: Figma to Code](https://www.figma.com/community/plugin/857346721138427857)

### Atajos vistos

```bash
# Abrir explorador de archivos
Ctrl + Shift + K
```

## **10.** Cómo crear guías de estilo

Las guías de estilo son propiedades reutilizables que nos permiten estandarizar todas las decisiones de diseño que hemos tomado a lo largo de la creación de la interfaz.

Creando estilos

- Seleccionar elemento
    - Dentro de fill / propiedades
    - Seleccionar los 4 puntos
    - Simbolon +
    - Nombrar estilo
    - “Crear estilo”

### Tamaños de fuentes

Los tamaños de texto recomendados pueden variar dependiendo del diseño y la plataforma en la que se utilice el texto. Sin embargo, a continuación te proporcionaré algunos tamaños de texto comúnmente utilizados para diferentes elementos:

1. Títulos principales (H1): 24px a 48px o más, dependiendo del diseño y la legibilidad deseada. Los títulos principales suelen ser grandes y llamativos para captar la atención del lector.

2. Subtítulos (H2): 18px a 30px. Los subtítulos son utilizados para separar secciones o subtemas dentro del contenido y suelen ser un poco más pequeños que los títulos principales.

3. Encabezados (H3-H6): 14px a 24px. Los encabezados se utilizan para organizar y jerarquizar el contenido en secciones más pequeñas. A medida que se disminuye el número (H4, H5, H6), el tamaño del texto suele ser más pequeño.

4. Párrafos de texto principal: 14px a 18px. Este tamaño de texto es adecuado para el contenido principal del cuerpo de texto, como párrafos descriptivos o informativos.

5. Texto en cajas de destacado o citas: 12px a 16px. Si tienes elementos destacados o citas dentro de tu contenido, puedes optar por un tamaño de texto ligeramente más pequeño para diferenciarlo del texto principal.

Es importante recordar que estos son solo rangos generales y que puedes ajustar los tamaños de texto según tus necesidades y preferencias específicas. Además, debes considerar la legibilidad en diferentes dispositivos y pantallas, así como el contraste entre el texto y el fondo para garantizar una buena experiencia de lectura. Por lo tanto, siempre es recomendable probar y ajustar el tamaño del texto en función del diseño y la retroalimentación de los usuarios.

### Mi guía de estilos 

Para la creación de esta guía, se nombraron todos los colores, grillas, textos, etc.

![Guide](https://i.postimg.cc/bJhY3HGP/10-my-guide.png)

Estos son los datos:

![](https://i.postimg.cc/hGBbrBc9/10-name-of-styles.png)

[Obtén iconos](https://fonts.google.com/icons?selected=Material+Icons+Round:cancel:&icon.query=x&icon.platform=web&icon.style=Rounded)

[Figma diseñado por Platzi](https://www.figma.com/file/bt4PeoSUlwjOop6LtltoxS/Platzi?type=design&node-id=0-1&mode=design&t=6HDZNb2els5JQwvI-0)

## **11.** Auto-Layout

Esta herramienta no solo permite estandarizar nuestros objetos, también permite ver como van a escalar en diferentes interfaces manteniendo consistencia entre los elementos mismos, esto se llama Auto Layout.

### Box model

El box model esta compuesto por:

- Content: Es el contenido de nuestro objeto (texto, figura, imagen)
- Padding: El área de padding es el espacio entre el contenido del elemento y su borde (border).
- Border: La propiedad border permite definir en una única regla todos los bordes de los elementos seleccionados.
- Margin: La propiedad margin establece el margen para los cuatro lados desde el borde.

![boxmodel](https://i.postimg.cc/s2Nwmp5m/11-box-model.jpg)

### Propiedades del Auto-layout

- Mantiene patrones de distancia simétricos entre sus elementos
- Son frames, no grupos
    - Tienen una alineación vertical u horizontal
- Las propiedades de los elementos se modifican desde adentro, pero tienen comportamientos globales

### Creando Auto-layout

- Seleccionar los elementos
- `Shift + A`
- Definir alineación del frame
- Default depende de los elementos existentes

### Editando Auto-layout

- Ocultar / mostrar elementos
    - Esto los “elimina” de la alineación
- Re-organización con:
    - Drag
    - Flechas
    - Iconos

### ¿Para qué sirve el Auto-layout?

**Consistencia**

- Los componentes de una interfaz van a existir dentro de un box model, independiente de la tecnología que se use para codificarlos
- Replicar dicho “Box model” sobre una interfaz es un gran lugar para empezar a comunicarse mejor con los programadores

### Hagamos un ejemplo

Dato importante: Debes fijarte que tanto el Frame y los objetos dentro de él, tengan `Layer` como `Normal` de lo contrario no podrás aplicar los cambios deseados a los objetos internos.

![](https://i.postimg.cc/wTj3JxPC/11-layer-normal.png)

Ahora, desde el apartado Frame puedes cambiar el comportamiento de cada elemento interno del frame para que cuando el Frame crezca este se adapte a las necesidades requeridas.

![](https://i.postimg.cc/FRWFV8Y9/11-frame.png)

Recuerda que para hacer cambios debes seleccionar cada elemento y aplicar los cambios por separado.

En el ejemplo visto en clase:

- Elemento 1:
	- Ancho: Fill
	- Alto: Fixed
- Elemento 2:
	- Ancho: Fixed
	- Alto: Fill
- Elemento 3:
	- Ancho: Fixed
	- Alto: Fixed
- Elemento 4:
	- Ancho: Fill
	- Alto: Fill

### Aplicado a nuestro proyecto

Para este ejemplo se le aplicó al texto central un `Fill Container` para que se ajuste a los costados en caso de que el Frame crezca. 

![](https://i.postimg.cc/Ls9LnXfX/11-auto-layout-header.png)

También aplicamos un Auto layout al resto del contenido. Puedes ajustarlo para que cada vez que la información de este aumente, todo el contenido se ajuste adecuadamente.

![](https://i.postimg.cc/HWthvS48/11-auto-layout-body.png)

### Atajos vistos

```bash
# Crear un Auto Layout
Shift + A

# Remove auto Layout
Shift + Alt + A

# Añadir padding en los 4 lados
Ctrl + Clic
```

## **12.** Los 15 mejores atajos para trabajar en Figma

```bash
# Visualización
# Visualización 100%
Shift + 0

# Visualización global
Shift + 1

# Visualizar frame seleccionado
Shift + 2

# Mostrar siguiente frame
N

# Navegar en reversa sobre los frames
Shift + N

# Figuras
# Crear un óvalo libremente
O

# Crear un rectángulo
R

# Insertar texto después de hacer clic sobre el area de trabajo
T

# Crear una línea
L

# Crear vectores lineales de forma libre
P

# Lápiz para dibujar vectores
Shift + P

# Colapsar capas (panel izquierdo)
Alt + L

# Mostrar u ocultar reglas o guías
Shift + R

# Oculta o muestra los menus de herramientas y frames (teclado español)
Ctrl + |

# Abrir buscador para recordar cualquier opción de figma
Ctrl + ,

# Permite escalar libremente el frame
V

# Ajustar o escalar el contenido según el frame vaya creciendo
K

# Copiar propiedades 👈👀🔥
Ctrl + Alt + C

# Pegar propiedades 👈👀🔥
Ctrl + Alt + V
```

![Shortcuts](https://i.postimg.cc/zf3Q42R7/13-shortcuts.png)

Si algún comando no te funciona, revisa dentro de figma la configuración del teclado. Puedes cambiarlo a latinoamericano y revisar los comandos que podemos usar.

![Keyboard](https://i.postimg.cc/wMRhVhMD/13-change-keyboard.png)

## **13.** Creación de componentes reutilizables: clase teórica

Los componentes en Figma son elementos reutilizables que ayudan a:

- Estandarizar patrones de diseño
- Reducir errores y tiempo de ajustes

### Creando componentes

Pueden crearse a partir de:

- Frames
- Grupos
- Capas

```
(cmd + shift + k)
(ctrl + alt + k) 👈👀 En windows
```

### Creando instancias

Para crear una instancia podemos usar:

- option + arrastrar componente
- (cmd c) + (cmd v)
- Drag desde vista de “Assets”

### Relación padre hijo

- Propiedades del master component se traducen en todas las instancias
- Cambios sobre las instancias se llaman “overrides” y existen para:
    - Texto
    - Fill
    - Stroke
    - Effectos

### No se pueden cambiar:

- Tamaño
- Posición
- Rotación
- Constrains
- Jerarquía de capas

_Pero las instancias pueden rebelarse_ 👈👀

- (cmd + option + B) para separar una instancia de su maestro
- Click derecho y “Reset Instance” para cancelar todos los  
    overrides que tiene una instancia y revertir al maestro.

### Nombrando y organizando componentes

Al momento de organizar tus componentes es muy importante tener en cuenta donde se están posicionando dentro del espacio de trabajo y como se están nombrando para encontrarlos más fácilmente.

### Organizando los componentes

- Para menos de 7 componentes, nombres independientes funcionan
- Para más, es importante crear frames y/o páginas para ordenarlos

### Nombrar los componentes

- Podemos usar “/” para crear jerarquías internas
    - Esto nos permite usar el swap entre instancias desde las  
        propiedades:

```
Boton/alerta
Boton/carga
```

### Componentes compuestos (Componentes que existen dentro de otros componentes)

Las interfaces más complejas utilizan componentes dentro de otros componentes para replicar la consistencia a lo largo de todo un mismo sistema.

Las instancias permiten darle flexibilidad a los componentes más complejos, por lo que es clave diferenciar sus diferentes estados.

### Variantes

Figma ha agregado una funcionalidad muy importante, las variantes, que básicamente son diferentes versiones del mismo componente que aplica bajo parámetros similares pero que visualmente tienen un cambio significativo.

### Propiedades de componentes

Son características de los componentes que nos permiten su manipulación y personalización sea mucho más fácil desde el panel de propiedades

## **14.** Creación de componentes reutilizables: clase práctica

Crear los componentes base de un checklist:

```
(ctrl + Alt + k) 👈👀 En windows
```

Cuando se quiere crear un componente que tiene más de 1 opción debes seleccionar los elementos e irte al icono:

💠 `Create component set`

### Trabajemos sobre nuestro proyecto

Para esta clase trabajaremos con algunos emojis que podemos usar libremente, para esto entra al siguiente enlace:

[Platzi Notas](https://www.figma.com/community/file/1156912716415678519)

Dale clic a `Open in Figma`, una vez aquí selecciona el que dice Emoji. Selecciona todo el contenido (emojis) usando `Ctrl + A` y luego copia usando `Ctrl + C`.

![](https://i.postimg.cc/Ls3Zvddn/14-emoji.png)

Ahora ve a tu proyecto y crea una nueva página con el mismo nombre (Emoji) y pega el contenido.

![](https://i.postimg.cc/jd1mkkVX/14-emoji-copy.png)

Hecho esto, ya puedes usar los emojis, solo ve al apartado `Assets`, busca el nombre del emoji que deseas usar y arrástralo a tu área de trabajo.

![](https://i.postimg.cc/Dyb0NHJf/14-emoji-assets.png)

#### Crea componentes

Creamos un frame usando `Shift + A` le damos las propiedades requeridas y luego lo convertimos en un componente usando `Ctrl + Alt + K`.

![](https://i.postimg.cc/Pf1FMzTL/14-first-component.png)

Ahora, para probar este componente, solo selecciónalo y presiona `Alt` y arrastra a la posición deseada.

Si quieres cambiar el icono, solo selecciónalo, despliega `Objects 100` y selecciona el icono deseado.

![](https://i.postimg.cc/BQKbJfXz/14-change-emoji.png)

![](https://i.postimg.cc/L88B8VZw/14-change-icon.png)

Si cambias algo del componente original, todas las instancias se verán afectadas.

📌 Las copias de cualquier componente original se les conoce como instancias, una referencia a la Programación Orientada a Objetos.

Otro componente:

Creamos una línea vertical y un texto. En caso de que el texto aumente de tamaño, la línea debe ajustarse.

![](https://i.postimg.cc/Hk8SZYY6/14-component-with-line.png)

**Posibles errores al crear este componente:** Es probable que al querer crear un frame que contenga una línea y un texto, estos no te permitan darles gap, por lo que puedes probar primero creando el texto, luego la línea y después creas el frame, por último inviertes el orden desde la sección izquierda (Layers) 👈👀

![](https://i.postimg.cc/tCkKFCrw/14-text-line-error.png)
![](https://i.postimg.cc/Zq4v2HPC/14-text-line-solution.png)


#### Crear un componente con variante (true - false)

Una vez creado el componente que tiene más de una opción (dos versiones del mismo componente) debes seleccionarlos: 

![group](https://i.postimg.cc/c4X1Cz0j/14-group.png)

Una vez seleccionados, debes dar clic en el icono 💠 en la parte superior justo en el centro y elegir `create component set`.

![create component set](https://i.postimg.cc/J7d944hQ/14-create-component-set.png)

Ahora podemos irnos a `Properties` (panel derecho) y **cambiar los nombres** tanto del componente general como de cada variante, en el caso de la imagen de abajo le coloqué `false` y `true`.

![14.component-1.png](https://i.postimg.cc/439v5V36/14-component-1.png)

Una vez hecho esto, si se quiere usar ese componente, se debe seleccionar una de las dos variantes.

![14.component+alt.png](https://i.postimg.cc/Fsv9s4cN/14-component-alt.png)

 Luego debes usar `Alt` y arrastrar el elemento seleccionado. Con esto ya aparece el botón de activar o desactivar (true o false)

![14.completed.png](https://i.postimg.cc/HxpG5Q0x/14-completed.png)

📌 Recuerda que puedes hacer Auto Layout dentro de otro Auto Layout

![](https://i.postimg.cc/9M3Nq1SX/14-layout-within-autolayout.png)

Usando el comando `Shift + O` podemos mostrar nuestro trabajo en un esquema.

![](https://i.postimg.cc/rFzb3dSk/14-outlines.png)

#### Cambio automatizado de iconos (emojis)

Si tenemos un componente el cual cambia constante de iconos, es mejor definir esto como una propiedad de ese componente para hacerlos fácilmente manipulables:

![](https://i.postimg.cc/kG5WVXTZ/14-swap-property-1.png)

Le damos un nombre`\`:

![](https://i.postimg.cc/JzwVQyjb/14-swap-property-name.png)

Ahora podemos reemplazarlo con cualquier otro icono que hayamos creado o definido. En este caso pasamos de False a True. Nota que no necesitamos entrar y seleccionar el icono. Podemos hacer el cambio desde fuera.

![14-swap-property-change.png](https://i.postimg.cc/sgqLz1VT/14-swap-property-change.png)

Volvamos a practicar usando los iconos usados en clase:

![](https://i.postimg.cc/wvqyjYVh/14-sp-select-icon.png)

Le damos un nombre: `Emoji\`

![](https://i.postimg.cc/vZy6NnVq/14-sp-name.png)

Nos dirigimos al lugar donde usamos ese icono.

![](https://i.postimg.cc/zXFf3cy7/14-sp-apply.png)

Seleccionamos lo necesario hasta llegar a los iconos que necesitamos:

![](https://i.postimg.cc/sgD3xPGZ/14-sp-apply-2.png)

Aplicamos el icono que deseemos. 

![](https://i.postimg.cc/0Q9zt1Kz/14-sp-select.png)

#### Cambiar texto

Volvamos el contenido del texto en una propiedad. Para esto seleccionamos el texto de interés.

![](https://i.postimg.cc/bN9hTx91/14-sp-text-1.png)

Le damos un nombre.

![](https://i.postimg.cc/5tChG8M4/14-sw-text-2.png)

Ahora podemos cambiar el texto desde las propiedades. Solo dirígete al lugar en donde usaste una instancia del texto original.

![](https://i.postimg.cc/VvWzdpfH/14-sp-text-3.png)

#### Añadir o quitar iconos

![](https://i.postimg.cc/1tjR0Yf3/14-sp-check-show.png)

Dirígete al lugar donde usaste ese icono, crea más contenido y quítale iconos desde el panel derecho.

![](https://i.postimg.cc/V66nLTxf/14-sp-show-2.png)

### Muestras

Antes:

![sample](https://i.postimg.cc/gJ7XcKF1/14-sample.png)

Después:

![sample 2](https://i.postimg.cc/YqD0YqK9/14-sample2.png)

### Atajos vistos

```bash
# Crear Componente
Ctrl + Alt + K

# Separar Componente
Ctrl + Alt + B

# Duplicar selección
Ctrl + D

# Ver un Outline
Shift + O
```

## **15.** Playground: Practica la creación de componentes reutilizables

Imagen de lo que se hizo hasta ahora...

## Quiz: Combo

1. ¿Cuáles son los dos tipos de permisos que Figma ofrece para compartir archivos?

	- Solo visualización y Edición total

2. ¿Cuáles son los elementos del Box Model en programación de interfaces?

	- Contenido, Padding, Borde y Margen

3. ¿Cuál es el propósito principal de Auto Layout en el diseño de interfaces?

	- Mantener automáticamente las proporciones y la consistencia visual al agregar o modificar elementos

4. ¿Qué función tiene la tecla P en Figma?

	- Permite crear vectores en cualquier parte de la pantalla.

5. ¿Qué permite la opción de compartir solo la vista de prototipo en Figma?

	- Mostrar la interacción y movimiento de la interfaz sin revelar todos los artboards, frames y espacios de trabajo

## **16.** Prototipado simple: interacción de scroll

En esta clase veremos como prototipar con Figma y como plasmar nuestras ideas de las pantallas estáticas a una realidad un poco más tangible para los usuarios.

### Para que prototipamos?

- Para alcanzar una versión más real de nuestra intención de código
- Para probar conceptos y experimentar ideas nuevas
- Para aprender sobre las decisiones que hemos tomado

### ¿Que necesitamos para prototipar?

Crear los parámetros de la interacción:

- Como se visualiza
- Cuando empieza
- Cuando termina

### Interacciones de scroll (Desplazamiento)

Necesitamos:

- Un frame con algo de contenido más alto que el dispositivo original.
- Un frame con algo de contenido más largo que su contenedor.

### Posiciones fijas en el scroll

Se utiliza para delimitar elementos “Pegajosos” dentro de una interfaz, como un top bar o un fab button. (Menu fixed por ejemplo)

### Trabajemos sobre nuestro proyecto

Añadimos más contenido, pero dejamos el 640 de height, la misma altura de siempre, con el fin de poder hacer scroll vertical.

![](https://i.postimg.cc/7hG5VCgV/16-scroll-vertical.png)

📌 `Clic content`, oculta el contenido que está por fuera de un frame padre.

Ahora, para visualizar como se vería en un dispositivo real, seleccionamos el frame y hacemos lo siguiente:

![](https://i.postimg.cc/fL62zrff/16-present.png)

Esto muestra...

![](https://i.postimg.cc/DZSPHPLk/16-mobile-view.png)

Ahora hagamos un scroll horizontal:

Para hacer esto, crea un frame con varias imágenes y posiciónalo justo donde está la única imagen que tenemos. 

La estructura que seguí es la siguiente:

![](https://i.postimg.cc/T2qVZwnd/16-structure.png)

Luego nos vamos al `Prototype` y seleccionamos `Overflow: Horizontal`

![](https://i.postimg.cc/rFyjG1x5/16-scroll-horizontal.png)

Nuevamente, seleccionamos el Frame padre `Android Small 2` y le picamos al icono ▶ Present.

![](https://i.postimg.cc/GhCtgqSB/16-mobile-result.png)


### Atajos vistos

```bash
# Reemplazar contenido
Ctrl + Shift + R
```

## **17.** Prototipado simple: conexión de diferentes frames

### Conectando frames

_Posición Inicial_

- Seleccionar modo “Prototype”
- Seleccionar el elemento de origen
    - El objeto desde el que va a empezar la interacción: Ejemplo,  
        el botón que se va a presionar o el carrusel que se va a desplazar
- Arrastrar hasta el frame de destino

### Parámetros de trigger

- None
- On tap
- While hovering / Pressing
- Mouse enter / Leave
- Touch down / Up

### Parámetros de acciones

- None
- Navigate to
- Open overlay
- Swap with
- Back
- Close overlay
- Open link

### Parámetros de animación

- Instant
- Dissolve
- Smart animate
- Move in / Out
- Push
- Slide in / Out
- Direccion
- Tipo de animacion
    - Ease In / Out
    - Ease In and Out
    - Lineal
- Duración en milisegundos
- Overflow Behavior (Scrolling)

### Configuracion de prototipo

- Dispositivo
- Modelo
- Fondo
- Frame inicial

> “Si una imagen vale más que mil palabras, un prototipo vale más de mil reuniones”

### Tipos de prototipos más utilizados

- Carruseles horizontales
- Interacciones con hover
- Bottom sheets
- Confirmaciones

### Trabajemos sobre nuestro proyecto

Para crear una conexión, primero posiciónate en el apartado `Prototype`, estando aquí selecciona el objeto que al hacerle `Tap` te va a llevar hacia otra ventana o página. Esto te mostrará un icono ➕ que te permitirá hacer la conexión entre dos ventanas.

![](https://i.postimg.cc/ryDt8B0Z/17-connection.png)

Una vez conectes el objeto al que se le va a hacer `Tap` con la siguiente página, se te abrirá una ventana donde podrás configurar algunas opciones de animación.

![](https://i.postimg.cc/cLDKY3Hh/17-configuration.png)

Ahora conectemos el icono de volver con el Frame `Android Small 1`.

![](https://i.postimg.cc/NjF4mrT4/17-configuration-back.png)

Para ver como se ve, pincha en el icono de la izquierda superior.

Ahora conectemos los tres puntos de `más opciones`.

![](https://i.postimg.cc/x1ZJX6K0/17-bottom-sheet.png)

📌 Para cambiar alguna configuración solo pincha en ⤵ la flecha que conecta la ventana de la que quieres modificar su interacción.

## **18.** Prototipado avanzado: smart animate y componentes Interactivos

### Prototipado con Smart animate

¿Cómo se mueve un elemento en la vida real?

Se desplaza desde un punto A un punto B, tomando velocidad al principio y desacelerando al final.

¿Qué necesitamos para hacer un smart animate?

- Dos frames con la misma cantidad de frames y sus nombres correspondientes.
    - Uno será el punto A
    - Y el otro será el punto B
- Definir una interacción que cause el trigger de la animación

### Parámetros del trigger

- None
- On tap / drag
- While hovering / pressing
- key / Gamepad
- Mouse enter / Leave
- Touch down / Up

### La clave está en el ritmo

¿Cómo quitamos elementos de una interfaz?

- Un elemento desaparece cuando su opacidad se mueve desde 100% a 0%
- También puede desaparecer con movimiento, sacándolo del frame
- Combinando ambos

### Recomendaciones

- Nombra muy bien tus capas: Esto te ayudará a identificar fácilmente los diferentes objetos que se están moviendo a lo largo de los frames
- El tiempo máximo de respuesta a una acción / trigger debe ser de 400 milisegundos “Doherty Threshold”

### Trabajemos sobre nuestro proyecto

Para hacer un smart anime necesitamos los siguientes componentes.

![](https://i.postimg.cc/xTSLX5zS/18-smart-anime.png)

Esto lo configuraremos de tal manera que parezca una barra que va desapareciendo, recuerda colocarle 400 ms. 👈👀

![](https://i.postimg.cc/tC7r9y8M/18-configuration-copy.png)

Ahora conectaremos la pantalla que dará interactividad y la configuramos como `After delay`, recuerda colocarle 1 ms. 👈👀

![](https://i.postimg.cc/BbLfxPQ1/18-after-delay.png)

Ahora haremos que esta última pantalla se disuelva sobre la segunda. Recuerda que al usar `After delay` debes colocarle 1 ms y no 100 ms como en la imagen. 👈👀

![](https://i.postimg.cc/jd7qJ257/18-after-delay-back.png)

### Atajos vistos

```bash
# Vista prototipada: Actualizar
R

# Separar Componentes
Ctrl + Alt + B
```

#bcb3ff 

## Quiz: Prototipado

1. ¿Cuál es el objetivo de conectar frames en Figma al crear prototipos?

	- Permitir variar el contenido en distintas pantallas

2. ¿Cuál es la función utilizada para realizar la transición entre pantallas?

	- afterDelay

3. ¿Qué debemos hacer para comenzar a conectar frames en Figma?

	- Identificar el origen y fin de las interacciones, seleccionar el modo Prototype y elegir el elemento de origen

4. ¿Cuáles son las dos formas de crear prototipos en Figma?

	- Usar scroll y conectar frames

## **19.** Cómo agregar comentarios a los diseños

### Comentarios en Figma

Es la manera como pediremos retroalimentación de otras personas sobre nuestro espacio de trabajo.

Esto ayuda a incentivar la co-creación de productos con diferentes actores, sin necesidad de que todos editen, pero si permitiendo sus puntos de vista en hilos.

### Agregar un comentario

- Presionamos la tecla c ©
- Clic sobre el lugar donde queremos dejar el comentario
- Escribimos el comentario
- Clic en “Post”

### Involucrando a tu equipo

- @ + nombre
- @ + correo
- Replicas
- Marcar como resueltos

### ¿Por qué involucrar al resto del equipo en el proceso?

No tenemos todas las respuestas, por eso es importante involucrar a personas que tiene criterio para dar feedback.

### Trabajemos sobre nuestro proyecto

Solo presiona `C` y da clic sobre el área en la que quieres dejar un comentario. Si agregas `@ejemplo@mail.com` el propietario recibirá un correo donde podrá ver el comentario que le dejaste en figma.

![](https://i.postimg.cc/2ys12Mqw/19-comment.png)

### Atajos vistos

```bash
# Crear un comentario
C + Click
```

## **20.** Historial de versiones en Figma

Figma mantiene un historial de versiones en la cual se crea cuando se inicia un nuevo proyecto, y guarda automáticamente una nueva versión desde el primer momento en que se crea hasta la última edición.

_En cualquier momento podemos volver a un punto, por medio de:_

- Autoguardado que hace Figma
- Versiones manuales que el usuario puede documentar

### ¿Cómo guardar una versión específica de mi trabajo?

- (cmd + Option + s)
- Agregar un título
- Agregar una descripción
- “Save”

### ¿Cómo restaurar una versión del archivo?

- “Show version history”
- Seleccionar versión
- “Restore this version”

### ¿Esto para qué sirve?

- Identificar en donde se cometieron errores en el sistema
- Recuperar contexto o versiones previamente exploradas

### Trabajemos sobre nuestro proyecto

![](https://i.postimg.cc/dVYKCx8w/20-version.png)

Esto te muestra el historial.

![](https://i.postimg.cc/C1x9FybL/20-history.png)

Para crear una nueva versión de tu proyecto presiona `Ctrl + Alt + S` 

![](https://i.postimg.cc/nz1VWtpF/20-create-version.png)

📌 Si le das clic a alguna de esas versiones, te llevará a la versión exacta de ese momento, también te permitirá cambiarle de nombre, editar, duplicar o copiar el link.

### Atajos vistos

```bash
# Crear una nueva versión
Ctrl + Alt + S
```

## **21.** Librerías de estilos y componentes

### ¿Por qué trabajar con estilos y componentes?

- Estilos: Hacen referencia a parámetros versátiles de una marca
- Componentes: Hacen referencia a las diferentes partes que componen el sistema de una interfaz

### Repasando: estilos

Una librería de estilos contiene:

- Colores
- Textos
- Efectos
- Grillas

### Repasando: Componentes

Una librería de componentes contiene:

- Componentes
- Átomos
- Moléculas
- Organismos

### ¿Cómo publicar una librería?

> Dropdown -> Publish styles and components

### ¿Cómo publicar cambios en una librería?

Cada vez que hagas cambios en los estilos o componentes maestros, Figma te pedirá que publiques una nueva versión que actualice estos cambios

### ¿Cómo actualizar una librería?

- Hacer click en “Review”
- Luego en “Update”

### Trabajemos sobre nuestro proyecto

![](https://i.postimg.cc/QdtBWm14/21-publish.png)

## Quiz: Co-Creando

1. ¿Cuáles son los niveles de una librería de componentes?

	- Átomos, moléculas y organismos

2. ¿Qué función proporcionan los comentarios dinámicos en Figma?

	- Se vinculan a los frames y los acompañan al moverse

3. ¿Cómo se pueden gestionar y restaurar versiones anteriores de un archivo en Figma?

	- Mediante la opción 'Show version history', seleccionando la versión deseada y eligiendo entre nombrar, restaurar o duplicar la versión.

## **22.** FigJam

Es un tablero en línea que permite a un grupo de personas alinearse en un solo espacio, y esa es su característica principal: Alineación interactiva.

Cualquier miembro del equipo de trabajo puede acceder sobre un solo link y dejar comentarios sobre el tema en particular que se está trabajando. Es un excelente lugar para tener discusiones que pueden persistir en el tiempo.

FigJam tiene plantillas para casi todo, desde plantillas para visualizar flujos de trabajo, expresiones regulares o manera de compartir la información con tu equipo de trabajo.

### Grandes Features

- Emotes
- Stamps & Stickers
- Cursor chat
- Llamadas por audio

Crear un “FigJam File”

### Trabajemos sobre nuestro proyecto

![](https://i.postimg.cc/CMb75hsP/22-figjam.png)
![](https://i.postimg.cc/CMb75hsP/22-figjam.png)


### Atajos vistos

```bash

```

#bcb3ff 

## **23.** Uso de plugins en Figma

Los plugins son básicamente, pequeños segmentos de código que cualquier persona puede desarrollar y publicar para la comunidad de Figma, y que nos permiten extender las habilidades de diseño y prototipado para obtener resultados más profesionales y/o diseñar de forma más eficiente.

### Tipos de plugins

- Eficiencia
- Organización
- Manipulación de vectores
- Animación
- & muchas más …

### 5 plugins recomendados:

- _Autoflow_: Es un plugin que permite conectar mis frames con flechas  
    para mostrarle a otras personas donde empieza mi flujo y donde termina.
    
- _Magial graphics_: Es un plugin que permite crear diferentes figuras y diseñar casi que ilustraciones desde cero.
    
- _Feather Icons_: Es una librería de Iconos y es un repositorio de iconos minimalistas
    
- _Mapsicle_: Es un generador de mapas en línea en la cual podemos tomar un mapa de un lugar en especial y agregarlo a nuestro diseño
    
- _Stark_: Es una plugin que nos ayuda a la accesibilidad y las reglas de diseño para crear parámetros de accesibilidad.

## **24.** Community: proyectos open-source y perfiles

Es la comunidad de diseñadores que comparten sus ideas, creaciones y todo lo que están desarrollando.

Tienes acceso a un repositorio de archivos y proyectos reutilizables y co-creados por la comunidad.

### Tipos de plantillas

- Plantillas de interfaz
- Sistemas de diseño
- Presentaciones
- Recursos para workshop
- Mockups de dispositivos
- Juegos de mesa
- y mucho mas …

### Proyectos favoritos

- Ant Design System
- Base Gallery
- Contra Wireframe Kit
- Figma Design Principles
- Figma for Education: Beca
- Marvie
- Modern Device Mockup Kit
- Sitemap

- [Friends of Figma | Figma:](https://friends.figma.com/)  
- [Ant Design Open Source | Figma Community:](https://www.figma.com/community/file/831698976089873405)  
- [Base Gallery | Figma Community:](https://www.figma.com/community/file/805195278314519508)
- [Contra wireframe kit | Figma Community:](https://www.figma.com/community/file/833515051385038928)  
- [Figma Design Principles | Figma Community:](https://www.figma.com/community/file/817913152610525667)  
- [Marvie✨ IOS UI Kit Dark theme | Figma Community:](https://www.figma.com/community/file/827876058453173134)  
- [Sitemap | Figma:](https://www.figma.com/templates/sitemap-generator/)

## Quiz: Superpoderes

1. ¿Qué se puede hacer en Figma si tienes habilidades de programación?

	- Crear tus propios plugins y enviarlos al programa abierto de Figma para su aprobación

2. ¿Qué es FigJam?

	- Una plataforma colaborativa para la creación de tableros y diseño de ideas. 

3. ¿Cuál es el objetivo principal de la utilización de plugins en Figma para mejorar la accesibilidad?

	- Revisar el contraste de los colores en su diseño.

## **25.** Proyecto final del curso de Figma

Prototipo de [Web movies](https://www.figma.com/proto/L7ObBBXcFj9cFHGMAflE4E/Cine-experience?page-id=101%3A4405&node-id=101-4525&starting-point-node-id=103%3A5003&scaling=scale-down)

## Shortcut

**apuntes de comandos básicos de Figma**

- F/A: para entrar a la herramienta Frame
- V: para entrar a la herramienta Move
- T: para entrar a la herramienta Text
- ctrl o cmd + B: Bold o Negrita
- ctrl o cmd + I: Italic o cursiva
- ctrl o cmd + U: Underline o subrayado
- scroll: mover hacia arriba o abajo
- shift + scroll: mover a izquierda o derecha
- ctrl o cmd + scroll: acercar o alejar
- Shift + R: Activar y desactivar la regla
- Seleccionar + Alt: Ver espacios entre elementos
- Ctrl + Alt + G: Agrupa como un nuevo frame
- Shift + G: Pasar de modo edición al modo vista 
- P: Crear vectores
- Alt + Arrastrar: Duplicar objetos 
- Ctrl + D: Duplicar el último objeto duplicado
- Seleccionar un objeto + i: Copiar un color y rellenarlo en el objeto seleccionado
- Seleccionar color creado + Shift: Agrupar Estilos de colores + click derecho: Add new folder
- Ctrl + Shift + K: abrir administrador de archivos
- Shift + A: Agrupar como frame
- Ctrl + Click: padding global
- Shift + O: 

quiza Alt en lugar de ctrl
Ctrl + Shift: Ajustar al centro

## Examen 📌
<details>
	<summary>Haz clic para ver los resultados 👀</summary>
	<br/>

1. La diferencia entre un prototipo hecho con dissolve y uno hecho con Smart Animate consiste en que:

	- ✅ Smart Animate toma en cuenta el cambio de propiedades entre pantallas y las anima

2. Las librerías en Figma están compuestas por:

	- ✅ Componentes y Estilos

3. ¿Cuál de estas NO es una modalidad de color?

	- ✅ PSA

4. La siguiente acción NO puede realizarse con los comentarios en Figma:

a

Marcar como "resuelto"

b

✅ Duplicar el comentario

c

❌ Marcar como "no leído"

d

Borrar el comentario

e

Copiar link al comentario

5. ¿Qué atajo se usa para crear una figura de círculo?

	- ✅ Pulsando la tecla "O"

6. Para crear un prototipo que haga scroll, es necesario que:

	- ✅ Existan elementos dentro del frame cuya posición se encuentre por fuera de los límites visibles del mismo

7. Cuando se aplica un estilo de texto sobre una capa de texto sin estilo asignado, ¿qué parámetros se modificarán?

	- ✅ Solo las propiedades del texto

8. La siguiente funcionalidad no hace parte de FigJam

	- ✅ Rellenar objetos con imágenes

9. Para publicar un archivo a la comunidad de Figma, debo hacerlo desde:

	- ✅ El botón de "Share" dentro del archivo

10. Este es el plugin utilizado para revisar contrastes y accesibilidad de los elementos diseñado en Figma

	- ✅ Stark

11. ¿Cuál es la herramienta que se usa para crear vectores libres con diferentes puntos de anclaje?

	- ✅ Pen (P)

12. ¿Cuáles son los 3 modos de Figma?

	- ✅ Diseño, prototipado y código.

13. El comando para seleccionar un color de manera rápida es:

	- ✅ I (i)

14. El comando: command + shift + K, se usa para:

a

Alinear un componente.

b

✅ Importar una imagen.

c

Exportar una imagen.

d

❌ Crear un componente.

15. Un componente se define como:

	- ✅ Una estructura reutilizable que permite replicarse en instancias.

16. Cuando agrego una grilla dentro de un frame, automáticamente Figma creará:

	- ✅ Una grilla de 8 puntos

17. Cuando varios objetos se organizan usando Auto-Layout, todos ellos ahora componen un nuevo:

	- ✅ Frame

18. Para crear o aplicar un estilo re-utilizable deben seleccionarse:

a

❌ Todas las capas con el estilo que se está re-utilizando

b

✅ Todos los vértices de un frame

c

Las 3 propiedades de la capa (modo, opacidad y visualización)

d

Los 4 puntos sobre la propiedad que deseamos re-utilizar

19. ¿Qué comando se utiliza para guardar una versión manual sobre el historial de un archivo en Figma?

	- ✅ Command (CTRL) + Option (ALT) + S

20. Cuando se agrega un efecto sobre una figura plana, automáticamente Figma creará:

	- ✅ Una sombra tipo "Drop shadow"

<details>