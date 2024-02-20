# Tags

## Etiqueta `<figure>`

La etiqueta `<figure>` en HTML se utiliza para encapsular contenido multimedia, como imágenes, gráficos, ilustraciones, diagramas, videos, entre otros, junto con su respectiva leyenda o descripción. Proporciona una forma semántica de agrupar y asociar estos elementos visuales con su texto descriptivo.

La estructura básica de la etiqueta `<figure>` es la siguiente:

```html
<figure>
  <!-- Contenido multimedia -->
  <img src="imagen.jpg" alt="Descripción de la imagen">
  
  <!-- Leyenda o descripción -->
  <figcaption>Descripción de la imagen</figcaption>
</figure>
```

Aquí tienes una explicación de los elementos que componen la etiqueta `<figure>`:

- `<figure>`: Es el elemento principal que envuelve el contenido multimedia y su leyenda. Se utiliza para indicar que el contenido dentro de él forma un grupo coherente.

- `<img>` (o cualquier otro contenido multimedia): Es el elemento que representa el contenido multimedia, como una imagen. Puede ser reemplazado por otros elementos, como `<video>`, `<audio>`, etc.

- `src`: Es el atributo que especifica la ruta o la URL de la imagen o contenido multimedia.

- `alt`: Es el atributo que proporciona un texto alternativo que se muestra si la imagen o el contenido multimedia no se pueden cargar o no están disponibles. También es utilizado por lectores de pantalla para usuarios con discapacidades visuales.

- `<figcaption>`: Es el elemento que se utiliza para agregar la leyenda o descripción del contenido multimedia. Proporciona información adicional sobre el contenido.

Es importante destacar que la etiqueta `<figure>` no tiene un efecto visual directo en el diseño de la página. Su propósito principal es estructurar semánticamente el contenido multimedia y su descripción asociada, lo que puede ser útil para la accesibilidad y la optimización para motores de búsqueda. Sin embargo, el estilo y la apariencia visual de la etiqueta `<figure>` se pueden personalizar mediante CSS para adaptarse al diseño de tu página web.

## Etiqueta `<picture>`

La etiqueta `<picture>` en HTML se utiliza para proporcionar una solución flexible y adaptable al mostrar imágenes en una página web. Permite especificar múltiples fuentes de imagen y definir diferentes versiones de una imagen para adaptarse a diferentes tamaños de pantalla, densidades de píxeles y condiciones de visualización.

La estructura básica de la etiqueta `<picture>` es la siguiente:

```html
<picture>
  <!-- Fuente de imagen para pantallas de alta resolución -->
  <source srcset="imagen-hd.jpg" media="(min-width: 1200px)">
  
  <!-- Fuente de imagen predeterminada -->
  <source srcset="imagen.jpg">
  
  <!-- Imagen principal -->
  <img src="imagen.jpg" alt="Descripción de la imagen">
</picture>
```

Aquí tienes una explicación de los elementos que componen la etiqueta `<picture>`:

- `<picture>`: Es el elemento principal que envuelve las fuentes de imagen y la imagen principal. Se utiliza para definir opciones de visualización de imágenes en función de diferentes condiciones.

- `<source>`: Es el elemento utilizado para definir una fuente de imagen alternativa y sus atributos asociados, como `srcset` y `media`. Puedes incluir múltiples elementos `<source>` para proporcionar diferentes opciones de imagen basadas en condiciones específicas.

- `srcset`: Es el atributo que especifica la ruta o la URL de la imagen. Puedes proporcionar varias rutas separadas por comas y especificar diferentes versiones de la imagen en función de las necesidades de visualización.

- `media`: Es el atributo utilizado para especificar la consulta de medios CSS que determina cuándo se debe aplicar la fuente de imagen. En el ejemplo anterior, se muestra una imagen de alta resolución solo cuando la pantalla tiene un ancho mínimo de 1200 píxeles.

- `<img>`: Es el elemento que representa la imagen principal que se mostrará si ninguna de las fuentes de imagen especificadas en los elementos `<source>` es compatible o se cumple ninguna de las condiciones.

- `alt`: Es el atributo que proporciona un texto alternativo que se muestra si la imagen no se puede cargar o no está disponible. También es utilizado por lectores de pantalla para usuarios con discapacidades visuales.

La etiqueta `<picture>` es especialmente útil cuando se necesita adaptar y entregar diferentes versiones de una imagen según la capacidad de visualización del dispositivo o la resolución de la pantalla. Esto permite una experiencia de usuario mejorada y optimizada para diferentes dispositivos y condiciones de visualización.

## Etiqueta `<link>`

En HTML, la etiqueta `<link>` se utiliza para establecer enlaces entre un documento HTML y otros recursos externos, como hojas de estilo CSS, fuentes tipográficas, archivos JavaScript y más. Su función principal es indicar al navegador cómo debe manejar o interpretar esos recursos relacionados.

La etiqueta `<link>` se coloca dentro de la sección `<head>` del documento HTML y no tiene una etiqueta de cierre. Utiliza atributos para especificar la relación entre el documento actual y el recurso enlazado, así como la ubicación del recurso.

Algunos de los atributos más comunes utilizados con la etiqueta `<link>` son:

- `href`: Especifica la ubicación o URL del recurso externo al que se está enlazando.
- `rel`: Indica la relación entre el documento actual y el recurso enlazado. Por ejemplo, `stylesheet` para hojas de estilo CSS, `icon` para el favicon, `preconnect` para conexiones previas a un dominio, `canonical` para indicar la URL canónica de una página cuando existen múltiples URL que apuntan al mismo contenido, `prev` y `next` utilizados en paginación para indicar la página anterior y siguiente, respectivamente, `nofollow` indica que los motores de búsqueda no deben seguir el enlace.
- `type`: Define el tipo MIME del recurso enlazado, como `text/css` para hojas de estilo CSS, `image/png` para imágenes PNG, etc.
- `media`: Se utiliza para especificar el tipo de medio o dispositivo en el que se debe aplicar el recurso. Por ejemplo, `screen` para pantallas de visualización, `print` para impresión, entre otros.

Aquí tienes un ejemplo de cómo se vería una etiqueta `<link>` para enlazar una hoja de estilo CSS:

```html
<link rel="stylesheet" type="text/css" href="estilos.css">
```

En este caso, el archivo "estilos.css" se encuentra en el mismo directorio que el documento HTML actual, pero puedes ajustar la ruta en el atributo `href` según la ubicación del archivo CSS.

La etiqueta `<link>` es una parte esencial de HTML para establecer conexiones con recursos externos y mejorar la apariencia y funcionalidad de un sitio web.

### Logo usando el atributo `rel` 

Para colocar un logo en el título de una página web, puedes utilizar la etiqueta HTML `<link>` con el atributo `rel="icon"`. Aquí te muestro cómo hacerlo:

1. Prepara el logo: Antes de comenzar, asegúrate de tener el logo en un formato adecuado, como PNG o ICO, y en un tamaño apropiado para ser utilizado como favicon (generalmente, 16x16 píxeles o 32x32 píxeles).

2. Guarda el logo: Guarda el archivo del logo en la raíz de tu sitio web o en una carpeta específica, y asegúrate de recordar la ubicación.

3. Agrega el código HTML: Abre el archivo HTML de tu página web en un editor de texto y agrega la siguiente línea dentro de la etiqueta `<head>`:

```html
<link rel="icon" type="image/png" href="ruta/al/logo.png">
```

Reemplaza `"ruta/al/logo.png"` con la ruta relativa o absoluta hacia el archivo de tu logo.

4. Guarda y carga la página: Guarda los cambios en el archivo HTML y carga la página web en tu navegador. Ahora deberías ver el logo como el favicon en la pestaña del navegador y en la barra de direcciones.

Recuerda que los navegadores pueden almacenar en caché el favicon, por lo que es posible que tarde un poco en actualizarse después de realizar cambios. También ten en cuenta que algunos navegadores pueden ignorar el favicon personalizado si no cumple con ciertos requisitos de tamaño y formato.

## Etiqueta `form`

La etiqueta `<form>` es un elemento HTML utilizado para crear un formulario en una página web. Proporciona una estructura para recopilar y enviar datos del usuario al servidor. Los formularios son una parte fundamental de la interacción entre el sitio web y el usuario, y se utilizan comúnmente para enviar información de registro, comentarios, realizar búsquedas y más.

Los elementos que se pueden utilizar dentro de la etiqueta `<form>` son los siguientes:

1. `<input>`: Se utiliza para crear campos de entrada de datos, como texto, contraseñas, casillas de verificación, botones de radio, archivos adjuntos, etc.

2. `<textarea>`: Permite crear un área de texto de múltiples líneas para que los usuarios ingresen texto largo o comentarios.

3. `<select>`: Crea una lista desplegable de opciones, de la cual los usuarios pueden seleccionar una o varias.

4. `<button>`: Permite agregar botones dentro del formulario, que pueden usarse para enviar el formulario o realizar acciones específicas mediante JavaScript.

5. `<fieldset>`: Ayuda a agrupar y organizar elementos relacionados dentro del formulario. Puede contener etiquetas `<legend>` para proporcionar un título o descripción para el grupo de elementos.

6. `<label>`: Proporciona una etiqueta descriptiva para un elemento de formulario. Ayuda a asociar el texto explicativo con el campo de entrada correspondiente.

7. `<datalist>`: Define una lista de opciones predefinidas para un campo de entrada de texto. Los usuarios pueden seleccionar una opción de la lista o ingresar su propio valor.

8. `<optgroup>`: Se utiliza para agrupar opciones relacionadas dentro de un elemento `<select>`. Ayuda a organizar y estructurar las opciones dentro del menú desplegable.

Aparte de los elementos, también existen atributos específicos que se pueden utilizar con la etiqueta `<form>`:

- `action`: Especifica la URL o la ruta donde se enviarán los datos del formulario para su procesamiento en el servidor.
- `method`: Indica el método HTTP que se utilizará para enviar los datos del formulario al servidor, como GET o POST.
- `target`: Define el destino para mostrar la respuesta del servidor después de enviar el formulario, como una nueva ventana (`_blank`) o la misma ventana (`_self`).
- `enctype`: Especifica el tipo de codificación utilizada para enviar los datos del formulario al servidor, como `application/x-www-form-urlencoded` o `multipart/form-data`.

Además, cada elemento de formulario mencionado anteriormente también tiene sus propios atributos específicos, que se pueden utilizar para personalizar su comportamiento y apariencia. Algunos ejemplos comunes son `name`, `value`, `required`, `placeholder`, `disabled`, `readonly`, entre otros. Estos atributos permiten controlar la validación del formulario, establecer valores predeterminados, proporcionar ayuda contextual y mucho más.

Recuerda que la etiqueta `<form>` y sus elementos son solo una parte de la construcción de formularios en HTML. Para un funcionamiento completo, generalmente se requiere el uso de lenguajes de programación en el lado del servidor, como PHP, para procesar y gestionar los datos enviados por el formulario.