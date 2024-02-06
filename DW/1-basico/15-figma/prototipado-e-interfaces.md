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

Lo primero que debemos hacer es descargar la aplicación desktop de Figma desde la página oficial, allí podremos encontrar los instaladores de la aplicación para los sistemas operativos  
MacOSX y Windows.

**Podemos descargar Figma desde su página oficial:**  
[Figma downloads](https://www.figma.com/downloads/)

Figma funciona en web, pero es recomendable usar la versión Desktop, ya que está optimizada para el desarrollo eficaz de nuestras interfaces y para que siempre tengamos la última versión actualizada.

**¿Como empezar a usar Figma?**

- Crear una cuenta asociada a la cuenta de google
- Nombre de equipo (Si no tienes un equipo, entonces tu nombre o un nombre de pruebas)
- Crear y nombrar un proyecto

Al crear un nuevo archivo, Figma nos despliega 2 opciones para crear nuestro proyecto, que son:

```
* Archivos de diseño / Design Files: 👈👀
Es un espacio detrabajo vectorial, pensado para la creacion de interfaces como tal.

* Archivos de Figjam / Figjam Files: 👈👀
Es un tablero digital interactivo que permite 
crear sesiones de co-creacion con otras personas y esta enfocado al proceso de ideacion.
```

En este curso trabajaremos la creación de “Archivos de diseño / Design Files”.

La estructura de los archivos en figma va asociado a un proyecto y a un equipo. Lo que podemos traducir en que necesariamente, debemos crear un Equipo y un proyecto.

```
[Equipo] -> [Proyecto] -> [Archivos del proyecto]
```

### Páginas en Figma

Son básicamente todo el espacio en dos dimensiones que existe y que captura todas las capas de tu espacio de trabajo.

### ¿Que son los layers / capas?

Son todos los diferentes objetos que van a componer mi interfaz como los son los bloques que contienen texto, vectores, imágenes, y también pueden tener grupos o frames y todo dentro de una página.

### Punto de partida

Nuestro punto de partida será siempre crear un frame o espacio de trabajo y lo podemos crear únicamente pulsando `F` o `A` directamente en la interfaz desktop de Figma. Una vez presiones alguna de las dos teclas, figma pregunta por el tamaño del dispositivo.

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

**¿Qué es un estilo?**

Son propiedades globales de los elementos que pueden  
ser reutilizables a lo largo de varios archivos o proyectos.

- [Texto Lorem ipsum](https://www.lipsum.com/)
- [Plugin Lorem ipsum](https://www.figma.com/community/plugin/736000994034548392/lorem-ipsum)

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

## **7.** Redes de Vectores

Cuando hablamos de redes de vectores, hablamos de un concepto muy importante en el mundo digital en general, ya que lo común es diseñar en píxeles, pero esto produce piezas digitales en baja resolución. Pero figma está diseñado en vectores los que significa que aunque se modifique el tamaño de la pieza, esta no perderá su resolución, son operaciones no destructivas.

### Construyendo vectores

- Tecla p (pen) para crear un vector libre
- Clic en cualquier lugar del frame o área de trabajo y empezará a crear vectores unidos por puntos
- Tecla Esc para salir del modo de creación de vectores
- En figma, un punto puede alojar una cantidad infinita de trazos que salgan desde ese punto
- Cuando seleccionas y mueves dicho punto, todos los trazos se mueven con él

### Operaciones booleanas

Son las operaciones en las que tomamos figuras en las que mezclamos o restamos una figura o un segmento y dependiendo de los movimientos que se hagan entre forma y fondo.

Con los vectores, vamos a crear los iconos que permiten navegar desde y hacia  
la nota.

## **8.** Colores en Figma

**_Seleccion de colores_**  
Como estamos trabajando sobre un espacio de digital, en lo que estamos  
trabajando realmente es sobre luz, y la luz esta compuesta solamente  
sobre tres colores: Rojo, azul y verde. Todos los colores que vemos son  
una combinacion de esos tres colores, el negro es la ausencia de esos  
colores y el blanco son todos los colores al mismo tiempo.

**_Seleccionar un color_**  
La manera mas facil de seleccionar un color, es tomar una figura, un texto  
o un objeto que tenga una propiedad de relleno y oprimir la tecla (i) y  
desplazarnos hasta el menu de herramientas y seleccionar el color que se  
desea, en algunos casos el conocido fill.

- Objeto seleccionado
- Panel de propiedades
    - Fill
    - Stroke
    - Effects
        - Detalle
- Herramienta “eye dropper”(i)

**_Gradientes_**  
Es un espacio de trabajo de trabajo que no tiene un solo colo solido sino que  
tiene diferentes puntos en los que varia el color en transicion de colores.  
Esto es mucho mas natural para el ojo humano ya que este tipo de tranciosiones  
se pueden apreciar en la naturaleza, como por ejemplo un atardecer o tambien en  
alguna obra de arte que contenga este tipo de gradientes.

**_Creando un gradiente_**

- Objeto seleccionado
- Panel de proiedades
    - Fill
    - Stroke
- Seleccionar gradiente
    - Linear
    - Radial
    - Angular
    - Diamond

Crearemos la paleta de colores de nuestra aplicacion de notas, que si esta muy basada  
en tonos grises ya que no queremos llamar demasiado la atencion pero si deberia tener  
algunas caracteristicas:

- 3 grises para informacion
- 4 colores de resalte para diferentes estados (informacion, advertencia y exito).
- Todos organizados como estilos en nuestro archivo y aplicados a la nota creada.



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
- Ctrl + D: Duplicar el ultimo objeto duplicado

quiza Alt en lugar de ctrl
Ctrl + Shift: Ajustar al centro