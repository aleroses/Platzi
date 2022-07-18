# Curso de Diseño para Developers 💚
> Samanta Martínez - Senior Web Engineer en Huge
---
## Fundamentos de Diseño
## 1. Todo lo que aprenderás sobre diseño para programadores

[Slides del curso](https://static.platzi.com/media/public/uploads/slidesdisenoparaprogram_80421720-f8bc-4435-9886-a145e6adbb5a.pdf)

[Proyecto del curso](https://github.com/mssroboto/diseno-para-programadores)

Apuntes de compañeros:
* [Notion link](https://www.notion.so/Curso-de-dise-o-para-programadores-782abd76857e42c497dd20e5ab0abd96)
* [Notion link](https://gem-music-ca4.notion.site/Dise-o-para-Developers-33c4174d68374004b09fda7510fbad38)
* [Notion link](https://steep-bridge-4be.notion.site/Dise-o-para-Developers-91d44b866b0d4b41a3b228a4a80d6b2b)


Ver otro apuntes: [Link en GitHub](https://github.com/ValenciaJCamilo/Platzi)


---
## 2. El proceso creativo
Proceso  | Creativo
---------|----------
🔎 1.Preparación. | Investigar, Recopilar.
🧬 2.Incubación. | Experimentar, Sintetizar
💡 3.Iluminación. | Idear, Imaginar.
✔ 4.Evaluación.  | Criticar, Replantear.
⚙ 5.Implementación. | Construir, Trabajar.
--

### Ejemplo:
> 🔎 Olga necesita hacer un pastel de
cumpleaños. Antes de empezar,
hace una lista de insumos y busca
recetas.  

> 🧬 Después de investigar, Olga se da
cuenta de que todas las recetas
de pasteles requieren horno,
entonces busca recetas de
postres que no lo requieran.  

> 💡 Tras considerar varias opciones, a
Olga se le ocurre preparar un
cheesecake frío de fresa.  

> ✔ Antes de empezar a cocinar, Olga
revisa si tiene todo lo necesario y
se da cuenta de que no tiene
suficientes fresas, pero sí
arándanos. Entonces replantea
su idea y decide preparar un
cheesecake de arándanos.  

> ⚙ Una vez tiene todo listo, Olga
prepara un delicioso
cheesecake de arándanos.


---
## 3. Conceptos básicos de diseño

**1. Balance/Equilibrio:** Estructura y estabilidad de una composición en donde la posición de cada elemento está dada por su peso visual  
> **a. Simétrico:** se da cuando los elementos se disponen simétricamente a ambos lados de los ejes, horizontal o vertical.  
> **b. Asimétrico:** se da cuando los elementos no mantienen simetría por forma, pero sí por peso visual.  
![Balance](https://i.postimg.cc/sfqrXZGR/equilibrio.png)
Un diseñador debe ser capaz de intuir cuando un diseño no tiene el equilibrio adecuado, para corregirlo.

**2. Contraste:** Es la diferencia de intensidad, tono o color entre dos o más elementos diferentes. Por ejemplo, si tiene un texto dorado brillante sobre un fondo negro, se ha utilizado el contraste para hacer que el mensaje destaque. Ayuda a señalar un concepto marcado por la diferencia entre 2 elementos distintos (claro obscuro, grande pequeño).   
> ![Contraste](https://i.postimg.cc/XYcSQHHV/contraste.jpg)
Página para revisar el nivel de contraste:
[Contrast-ratio link](https://contrast-ratio.com/)   

**3. Alineación:** Crear rutas visuales entre elementos que queramos señalar o mostrar al usuario
> ![Alineación](https://i.postimg.cc/fyGng6Qb/alineaci-n.png)

**4. Proximidad:** Agrupar elementos, usando colores, iconos, etc. 
> ![Proximidad](https://i.postimg.cc/mgGW3fSX/proximidad.png)

**5. Repetición:** Usada para generar concepto de marca. Se usan los mismos colores o las iniciales de sus logotipos.
> ![Repetición](https://i.postimg.cc/4N48hpnS/repetition.jpg)

**6. Espacio:** Se refiere al aprovechamiento del espacio, la forma en la que se le da uso.
> ![Espacio](https://i.postimg.cc/qR62VMb0/espacio.webp)

**Resumen:** 
> ![Resumen](https://i.postimg.cc/3Rc9ggG6/1-6resumen.webp)


---
## 4. Diseño responsivo (Responsive design)

Es una metodología de diseño que nos permite adaptar nuestros diseños a diferentes tamaños de pantalla.  

Diseños responsivos: versión mobile - desktop:
[Media Queries](https://mediaqueri.es/)

### Como garantizar que nuestro diseño sea responsive
1. Empezar nuestro Diseño por dispositivos móviles. Esto garantiza partir desde el contenido basico hasta el contenido mas completo.

2. Separa las capas de contenido y funcionalidad. Esto garantiza que el usuario tendrá acceso a todo el contenido de nuestra página sin tener que ejecutar alguna acción.

3. Usa sistemas de grillas y columnas. Las columnas son una referencia sobre nuestro layout total y sirve para ir mirando el ancho de nuestra página, de esta manera es mucho mas facil adaptar los contenidos.

### Metodologías para hacer responsive design
**Mejora progresiva (Progressive enhancement):**  
Consiste en partir de una base sólida a la que se van añadiendo mejoras dependiendo de factores como tamaño de pantalla o sistema
operativo. Esta es la mejor practica.
> ![Mejora Progresiva](https://i.postimg.cc/XYfDmjpv/4-mejora-progresiva.png)

**Degradación agraciada (Graceful degradation):**  
Consiste en partir de una versión completa a la
que se le van removiendo capas de complejidad
para garantizar su funcionamiento en todos los
tamaños de pantalla y sistemas operativos.
> ![Degradacion-agraciada](https://i.postimg.cc/LXj8cZKW/4-degradaci-n-agraciada.png)

Estas metodologías no solo aplican al diseño sinó tambien al código.  
**Mejora progresiva aplicada:** Código - Diseño
> ![Mejora Progresiva aplicada](https://i.postimg.cc/HkSzMVNF/4-mejora-aplicada.jpg)


---
## 5. Accesibilidad y diseño
> "El poder de la Web está en su universalidad. El acceso de todas las personas independientemente de la
discapacidad es un aspecto esencial."  
**Tim Berners-Lee, W3C Director.**

La accesibilidad es necesaria para permitir que cualquier persona independientemente de sus capacidades pueda acceder a la informacion necesaria sin dificultades.

### Tips básicos de accesibilidad.
1. **HTML estructurado correctamente**  
Para que los lectores de pantalla puedan proporcionar un detalle acertado al usuario, la semantica en el HTML es importante, ademas, esto ayuda a la pagina en el SEO. Utiliza los encabezados (h1-h6) de manera ordenada para organizar la estructura del contenido (HTML5 semántico), esto garantiza que las personas que navegan usando el teclado puedan saber que tan importante es un titulo con relación a otro. Permitiendo agrupar diferentes categorias, grupos de información, etc.  

2. **Tamaños de fuente accesibles**  
Al utilizar tamaños de fuente demasiado pequeños hacemos que personas con problemas de vista no puedan acceder a toda la informacion de manera adecuada.

3. **Contrastes adecuados**  
Si se utilizan los colores incorrectos puede llevar a que la informacion, texto o imagenes no sean visibles por ciertas personas. Por ende debemos colocar contrastes altos para diferenciar un fondo de un contenido.  

4. **Evitar categorización unicamente por colores**  
Ya vimos en **proximidad** que podemos agrupar categorias por colores, iconos, etc y esto es algo que funciona y se ve bien, pero no es accesible para todos los publicos. Si vas a hacer agrupaciones por colores debes ofrecer una alternativa ya sea con bordes, iconos o titulos de categoria para que todas las personas puedan acceder a ese tipo de agrupaciones de información. 

5. **Diseña teniendo en cuenta los estados “focus” y “active” (HTML)**  
Estos bordes o subrayados proporcionan ayuda visual para que el usuario sepa en que parte de la página se encuentra.

6. **Añadir etiquetas y textos descriptivos a los campos de formularios, videos e imagenes**  
Esto es importante para las personas que estan navegando con el tab, ya que sin esto no van a tener acceso a todos los titulos. Por eso debemos añadir etiquetas descriptivas, algo llamado aria-label. Ademas se debe garantizar a los usuarios que cuando haya un error en un formulario no solo se muestre un borde color verde o rojo, sinó que muestre un mensaje que pueda ser leído por un lector de pantalla.
    > El atributo [aria-label](https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) se utiliza para definir una cadena que etiqueta el elemento actual. Úselo en los casos en que no haya una etiqueta de texto visible en pantalla. Si hay texto visible etiquetando el elemento, utilice aria-labelledby en su lugar. ARIA (Accessible Rich Internet Applications)

7. **Escribe contenido descriptivo que pueda reemplazar videos e imágenes**
Siempre es mejor mantener texto descriptivo por fuera de videos o de las imagenes, de esta manera los usuarios que están navegando por medio de un lector de pantalla puedan escuchar la interpretación de los elementos mostrados ([etiqueta alt](https://blog.hubspot.es/marketing/texto-alternativo) describe una imagen). 

8. **Evitar animaciones que bloqueen contenido**  
Pasa cuando tenemos páginas en las que debemos hacer clic para ejecutar una animación y esto muestre un texto. Esto quiere decir que el texto está bloqueado por una animación, lo cual no es buena practica. Provocando que aquellos que no tengan acceso a un mouse no obtengan la misma cantidad de informacion que uno que si lo tiene. Además, no es buena practica que los usuarios vean muchos flashes cuando acceden a una página.

- [Tips Accesibilidad](https://web.dev/accessibility/)  
- [Estándar internacional Pautas de accesibilidad](https://www.w3.org/WAI/standards-guidelines/wcag/)

---
## 6. Brief y requerimientos técnicos 

> El brief es la hoja de ruta para empezar a diseñar.
Es el resultado de las conversaciones con el cliente e incluye datos sobre marca, objetivos y requerimientos de un proyecto.

> Este documento tiene la finalidad de ayudar a detectar las necesidades particulares de cada cliente y permitir alinear nuestros servicios de la mejor manera, así podremos ofrecerles un servicio o producto personalizado a sus requerimientos.

### Contenido del brief
Las secciones más comunes de un brief son:
- Descripción del cliente o empresa.
- Objetivos o retos.
- Target o audiencia.
- Competencia o referentes.
- Distribución.

> [Brief para la creación de un sitio web: pasos a seguir](https://www.marketerosagencia.com/blog/diseno-web/brief-creacion-sitio-web/)

### Creación del brief -> Ejemplo:
> 🔎 Seymour tiene un restaurante de hamburguesas desde hace 10 años pero está perdiendo clientela debido al aumento de la competencia.
 
> 🧬 Seymour se dio cuenta de que su marca estaba desactualizada y ya no estaba llamando la atención de su público objetivo: las personas entre 18 y 35 años.  

> 💡 A seymour se le ocurrió cambiar su marca de ‘hamburguesas al
vapor’ a ‘steam burger’

> ✔ Después de cambiar su marca y actualizar su logo, Seymour considera crear una página web en donde sus clientes puedan consultar el menú de su restaurante, hacer reservaciones, pedir domicilios y consultar promociones.  

> ⚙ Con su idea de negocio definida. Seymour decide contactarte para hacer su página web.

---

> <img src="https://i.postimg.cc/wjhRfHQ5/6-brief.png" width=50%>
> <img src="https://i.postimg.cc/0NPMh3VT/6-brieftwo.png" width=50%>

--- 
> ![Logo](https://i.postimg.cc/XJnhPwBj/6-steam-logo.jpg)  

## Steam Burger.

> Steam Burger es un restaurante tradicional de comidas rápidas con 10 años de antigüedad en el mercado y sin presencia digital. El restaurante tiene productos sólidos y de alta calidad, pero necesita atraer nueva clientela para expandirse y abrir otras sucursales que compitan con otras cadenas de comidas rápidas en la ciudad.

### Objetivos.

- Atraer nueva clientela usando redes sociales y página web.
- Dar a conocer su menú y promociones por el canal virtual.
- Ofrecer servicios como domicilios y pagos en línea.

### Público objetivo.

> Steam burger ya tiene una clientela tradicional conformada por los vecinos de sectores aledaños a su restaurante, pero necesita posicionar su marca en redes sociales antes de abrir más sucursales. Para alcanzar este objetivo es necesario crear una estrategia enfocada en usuarios con mayor actividad en redes sociales como instagram y tiktok. Es decir jóvenes entre 18 y 30 años.

### Competencia.

- Sierra nevada hamburguesas. https://sierranevada.co/
- La hamburgueseria. https://www.lahamburgueseria.com/

### Distribución.

- Página web.
- Redes sociales (Instagram, TikTok, Facebook).

### Cronograma.

- Definición de objetivos. 1 de Junio de 2020.
- Contenido y diagramas de navegación. 8 de Junio de 2020.
- Wireframes. 15 de Junio de 2020.
- Línea gráfica. 22 de Junio de 2020.
- Propuestas de diseño. 29 de Junio de 2020.
- Desarrollo web y pruebas. 17 de Julio de 2020.
- Demo y entrega final. 20 de Julio de 2020.


**Tipos de letra:**  
- Títulos: Arial Black 18
- Párrafos: Arial 12


---
## Diseño y experiencia de usuario (UX)
## 7. Definición de diseño UX (Experiencia de usuario)

> "Si queremos que a nuestros usuarios les guste nuestro software, deberíamos diseñarlo para que se comporte como una buena persona: respetuoso, generoso y colaborador."  
**Alan Cooper, diseñador de software y programador.**

✨ **UX** se centra en crear un producto **útil** y **amigable** para los usuarios.

### Etapas del diseño UX.
1. **Investigación:** Recopilamos información para saber el comportamiento de los usuarios y saber como manejan aplicaciones similares. Es bueno apoyarse de aplicaciones ya existentes para crear un buen diseño UX.

2. **Análisis:** Clasificamos la información obtenida, agrupamos y definimos los objetivos a nivel de usuario.

3. **Diseño:** Se crean prototipos, flujos de usuario, etc los cuales nos van a permitir visualizar el resultado y saber cuales son las mejores practicas para nuestros usuarios finales. 

3. **Pruebas de usuario:** Se realizan en papel o con prototipos interactivos, pero no como un producto final. Esto permite hacer ajustes a nuestro diseño antes de pasar a una etapa de desarrollo.  

Lo primero que vamos a hacer en diseño UX es crear un **user flow**.  
El user flow o flujo de usuario determina los diferentes pasos que realizará un usuario al acceder a nuestra web y realizar una acción concreta, ya sea comprar o dejar sus datos.


---
## 8. Diagramas de flujo
En los DF lo que hacemos es traducir los requerimientos de nuestro Brief a elementos tangibles.

Objetivo. | Requerimiento.
----------|--------------
Dar a conocer sus productos. | Menú y promociones.
Hacer pedidos online. | Pedidos.
Dar a conocer su marca. | Contacto y sucursales.
Aumentar la presencia en línea. | Redes sociales.

### SiteMap
Son un diagrama de arriba hacia abajo que muestra la jerarquía de tu sitio web. 
> ![sitemap](https://i.postimg.cc/d0s4s2Yh/8-sitemap.jpg)

### User Flow
Diagrama gráfico que representa todos los pasos que el usuario debe realizar hasta lograr el objetivo final planteado para esa página.  

> ![user flow](https://i.postimg.cc/Jh4kFKNz/8-userflow.jpg)

**Nota:** Aquí podemos contar cuantas pantallas o componentes tenemos que desarrollar. Además, nos sirve de guía al momento de crear los wireframes.


---
## 9. Wireframes y componentes

### Wireframe:
> La principal finalidad del wireframe es permitir la visualización de los contenidos que aparecerán en cada pantalla y reflejar las funcionalidades que estarán presentes. Establecen la jerarquía de la información y sirven como herramienta de comunicación entre desarrollo, diseño y cliente.

> Conocido como un esquema de página o plano de pantalla, es una guía visual que representa el esqueleto o estructura visual de un sitio web.   

**Wireframe de baja calidad / fidelidad**
> ![wireframe de baja calidad / fidelidad](https://i.postimg.cc/wvnfhzFC/9-bosquejo.jpg)  

**Wireframe de alta calidad / fidelidad**
> ![wireframe movil de alta calidad / fidelidad](https://i.postimg.cc/J0THvNdZ/9-wireframe-alta-fidelidad.jpg)
> ![wireframe web de alta calidad / fidelidad](https://i.postimg.cc/rFTKhhVB/9-wireframe-alta-calidad.jpg)

Tener en cuenta:  
En UX no tenemos capas de color o estilos de fuente, ya que esto lo ve UI. Solo tenemos espaciados para demarcar las secciones.

Con estos wireframe podemos empezar a hacer pruebas de usuario
- Grabar a una persona interactuando con las hojas en fisico  
- [Ver curso Arquitectura de la información](https://platzi.com/cursos/arquitectura-informacion/)  
- [Ver cursos UX](https://platzi.com/diseno-ux/)

**Softwares más populares para diseñar wireframes son:**
- Adobe XD. (Curso en platzi)
- InVision Studio.
- Sketch.(Curso en platzi)
- Figma (Curso en platzi) (Mi favorito)

Página de Microsoft que utiliza Inteligencia Artificial para transformar tu diseño hecho a mano en código HTML:
[Transforma tu diseño](https://sketch2code.azurewebsites.net/)


---
## Diseño de interfaz de usuario (UI)
## 10. Definición de diseño UI

> Es el resultado de definir la forma, función, utilidad, ergonomía, imagen de marca y otros aspectos que afectan a la apariencia externa de las interfaces de usuario en sistemas de todo tipo.

> ![Diferencias UX - UI](https://i.postimg.cc/W4L7ndbN/10-diferencias-ux-ui.jpg)

> ![Diferencias UX - UI](https://i.postimg.cc/XJp7Yctx/10-diferencia-ux-ui.jpg)

Cuando trabajamos con los dos diseños al mismo tiempo garantizamos que nuestra aplicación sea atractiva, agradable y funcional para todos los usuarios. No debemos quitarle importancia a ninguno de los dos.


---
## 11. Moodboard y línea gráfica

### Moodboard
> Un moodboard es una colección de referencias visuales que se usa como fuente de inspiración para un diseño.

> Un Moodboard nos ayuda a mostrar y comunicar de manera visual un estado de ánimo, un proyecto, una idea, un concepto, un estilo, etc.

> ![moodboard](https://i.postimg.cc/s2SrXjcQ/11-pinterest-moodboard.jpg)

Estas referencias ayudan a extraer estilos de fuentes, colores de fondo, la manera en la que se toman las fotografias, etc.

En busqueda de inspiración:
- [Pinterest](https://www.pinterest.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)


---
## 12. Teoría del color

### Psicología del color.
> Es un área de estudio que se dedica a investigar la forma en la que el cerebro percibe los colores y los asocia a conceptos y sentimientos.

### Colores asociados a sentimientos:
- 🔴 Rojo: **Pasión**, deportes, comida, entretenimiento. 
- 🟠 Naranja: **Diversión**, arte, comida, eventos.
- 🟡 Amarillo: **Felicidad**, comida, compras, ocio.
- 🟢 Verde claro: **Armonía**, ambiente, comida, educación.
- 🟢 Verde oscuro: **Seguridad**. Agro, bancos, inmobiliarias.
- 🔵 Azul claro (celeste): **Sabiduría**, productos de niños, salud, tecnología.
- 🔵 Azul oscuro: **Confianza**, finanzas, salud, seguros.
- 🟣 Malva: **Misterio**, religión, productos alternativos.
- 🔴 Rosa: **Amor**, belleza, moda, productos niños.
- 🟤 Marrón (café): **Estabilidad**, agro, legal, construcción.
- ⚫ Gris: **Neutral**, todas las industrias.
- ⚫ Negro: **Elegancia**, todas las industrias.

> ![teoria del color](https://i.postimg.cc/1RBTb2mw/12-teoria-color.jpg)

La idea es utilizar estos colores y la teoría de la psicología del color para seleccionar los colores de la web o aplicación a crear, dependiendo del problema que soluciones.

### Color para web.
- Utiliza color RGB y hexadecimales, nunca cmyk.
- Crea un código de color consistente. Ejemplo: Al colocar botones que pertencen a una misma categoría (comprar), es conveniente usar un mismo color para todos estos.
- Menos es más. El exceso de color hace que los usuarios no se puedan enfocar en una acción a la vez. Agrupar por categorias y manejar una paleta de colores reducida.
- Asegurate de que tu elección de color sea accesible. Que funcinen bien con texto y colores de fondo con suficiente contraste.
- Define una paleta de color. Una paleta de colores es un grupo de colores que van a ser usados en nuestra aplicación. Esta se debe definir antes de empezar a diseñar, para así restringir las posibilidades que tenemos al usar colores y lograr una app balanceada.

**Crea esquemas de color que funcionan:**  
- [Generador de paleta de colores](https://colors.muz.li/) 
- [Paletas de color](https://color.adobe.com/create/color-wheel)
- [Revisa el contraste](https://paletton.com/#uid=14p0u0kh9qJ7dHUc6vHlZm0r3gG)
- [Mas colores](https://flatuicolors.com/)


---






<span style="color:red">some *red* text</span>.  
<p>Some Markdown text with <span style="color:red">some <em>r   ed</em> text</span>.</p>  


jenny katherine arevalo rivera   
Arauco Yajayra  
José Enrique Pérez Aquino