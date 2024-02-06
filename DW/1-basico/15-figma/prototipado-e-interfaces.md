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
- Constraints
- Opacidad
- Relleno (Color, Gradient, Imagen)

Organizar los objetos

- (alt / option) Calcular la distancia de un objeto
- Guías inteligentes
- Smart selection
- Padding entre elementos
- Mostrar / Ocultar
- Escalar con v o con k

> Restricciones - Constraints

Todos los elementos contenidos dentro de un frame son objetos “hijos” del contenedor  
que los soporta. Asi pues, sus restricciones funcionan con base en el comportamiento de  
su “padre”.

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