# Audiocurso de Accesibilidad Web: Casos de Estudio

## 1. ¿Quién es Eva Ferreira? ¿Qué veremos en este curso?

**Capa de invisibilidad con JavaScript y CSS: Take on me por _Eva Ferreira_**

- [Meetup.js Argentina: Take on me - Eva Ferreira](https://youtu.be/pAgDRCQLwQs)
- [Nordic.js 2019: Eva Ferreira - Take on me, web browsers!](https://youtu.be/kPEdQU-LEB4)
- [FrontRunners 2019: Eva Ferreira - "Take on Me, Web Browsers!"](https://youtu.be/11DHJISR3b8)
- [JSConf Budapest 2019: Eva Ferreira - Take on me, web browsers!](https://youtu.be/d4gSor3KyIw)

## 2. ¿Cómo vender accesibilidad?

- Discapacidades permanentes (15% del mundo)
- Temporal (semanas/meses)
- Situacional (momentáneamente).

## 3. ¿Mi marca es accesible? Contraste, colores y fuentes

- Tamaño de fuente: mínimo 16px/18px. Siempre que el usuario pueda hacer zoom al sitio.
- Jerarquizar el texto (títulos, subtitulo y pocos párrafos).
- Fuente: san-serif **(diferencia entre la letra a y la o)**.
- Alto contraste entre fondo y color de letra. Verificar la luminosidad entre ellos.
- Texto decorativo (no leíble) no necesita ser accesible.
- Agregar icono y texto al indicar errores. No solo por indicación de colores.

## 4. Tips para flujos de navegación accesibles

- Skip-navigation o Skip-to-main-content → botón semi-invisibles para facilitar navegación con teclado.
- Skip-to-search → pasar directamente al formulario de búsqueda dentro del sitio.
- Skip-to-footer → ir de un salto (tecla Tab) directo al pie de página de ese sitio.
- Skip-to-accesibility-information → informar cómo funciona la accesibilidad en el sitio.

Info:

- [Surfeadores de teclado](https://static.platzi.com/media/public/uploads/clase-4-script_4890012a-40c2-4fb2-983a-24d4ef20b2b2.pdf)
- [Web aim](https://webaim.org/techniques/css/invisiblecontent/)

## 5. Twitter vs. Facebook: textos alternativos en imágenes

Los lectores de pantallas leen los textos en voz alta diciendo: **etiqueta + texto**.

En el caso de las imágenes, se lee en voz alta el **“texto alternativo”** (atributo **“alt”** de la etiqueta **img** en HTML). **Siempre poner la etiqueta “alt” en cada imagen del sitio.**

Excepcionalmente no hace falta completar el atributo “alt” (`alt=""`) cuando la imagen está acompañada por una descripción de esa imagen (por ejemplo en un pie de foto) o es una imagen decorativa.

NOTA: No hay que explicar que es una imagen _(ejemplo: “imagen de gatito”)_ porque el lector de pantalla ya mencionará la etiqueta “imagen” al llegar a ella.

**Imágenes funcionales con acciones:** escribir la acción y no la descripción de la imagen. Por ejemplo al hacer clic en el logo de la empresa nos dirige hacia la página principal (home) del sitio.

## 6. Semántica: la web 3.0 original

Años atrás existía el rol de “WebMaster” (quien realizaba el 100% del sitio) en la era de la Web 2.0

En la **Web 3.0** (hoy) se utiliza HTML 5, CSS 3, etc.

**Elementos semánticos** = etiquetas que informan su utilidad _(ejemplo: article, footer, nav,_ etc._)_ en vez de etiquetas genéricas _(por ejemplo: div, span,_ etc._)_. Ayudan a los lectores de pantalla o los buscadores (Google, Bing u otra) porque expresan mejor el contenido del sitio.

HUMOR: Enfermedad _“DIVitis”_ es una estructuras “div” una dentro de otra y otra, y otra. (jajajaja!!!)

Los atributos **“aria”** _(**ARIA**=Accessible Rich Internet Applications)_ tiene:

1. Roles: ayudan a agregar semántica a los elementos que no tienen una etiqueta específica en HTML.
2. Atributos: agregar descripciones adicionales a los elementos. Especial para lectores de pantalla.

NOTA: hay que evitar usar excesivamente atributos “aria” a las etiquetas innecesariamente.

## Otros apuntes

[Notas](https://docs.google.com/document/d/1KeMnNaJnbblMd1F3X6BM9Cq7iz1U9MaG24Nib_BdBaU/edit#heading=h.af2fcrphgifu)