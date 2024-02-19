# Curso de Diseño para Developers
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
1. Empezar nuestro Diseño por dispositivos móviles. Esto garantiza partir desde el contenido básico hasta el contenido mas completo.

2. Separa las capas de contenido y funcionalidad. Esto garantiza que el usuario tendrá acceso a todo el contenido de nuestra página sin tener que ejecutar alguna acción.

3. Usa sistemas de grillas y columnas. Las columnas son una referencia sobre nuestro layout total y sirve para ir mirando el ancho de nuestra página, de esta manera es mucho mas fácil adaptar los contenidos.

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

Estas metodologías no solo aplican al diseño sino también al código.  
**Mejora progresiva aplicada:** Código - Diseño
> ![Mejora Progresiva aplicada](https://i.postimg.cc/HkSzMVNF/4-mejora-aplicada.jpg)


---
## 5. Accesibilidad y diseño
> "El poder de la Web está en su universalidad. El acceso de todas las personas independientemente de la
discapacidad es un aspecto esencial."  
**Tim Berners-Lee, W3C Director.**

La accesibilidad es necesaria para permitir que cualquier persona independientemente de sus capacidades pueda acceder a la información necesaria sin dificultades.

### Tips básicos de accesibilidad.
1. **HTML estructurado correctamente**  
Para que los lectores de pantalla puedan proporcionar un detalle acertado al usuario, la semántica en el HTML es importante, además, esto ayuda a la pagina en el SEO. Utiliza los encabezados (h1-h6) de manera ordenada para organizar la estructura del contenido (HTML5 semántico), esto garantiza que las personas que navegan usando el teclado puedan saber que tan importante es un titulo con relación a otro. Permitiendo agrupar diferentes categorías, grupos de información, etc.  

2. **Tamaños de fuente accesibles**  
Al utilizar tamaños de fuente demasiado pequeños hacemos que personas con problemas de vista no puedan acceder a toda la información de manera adecuada.

3. **Contrastes adecuados**  
Si se utilizan los colores incorrectos puede llevar a que la información, texto o imágenes no sean visibles por ciertas personas. Por ende debemos colocar contrastes altos para diferenciar un fondo de un contenido.  

4. **Evitar categorización únicamente por colores**  
Ya vimos en **proximidad** que podemos agrupar categorías por colores, iconos, etc y esto es algo que funciona y se ve bien, pero no es accesible para todos los públicos. Si vas a hacer agrupaciones por colores debes ofrecer una alternativa ya sea con bordes, iconos o títulos de categoría para que todas las personas puedan acceder a ese tipo de agrupaciones de información. 

5. **Diseña teniendo en cuenta los estados “focus” y “active” (HTML)**  
Estos bordes o subrayados proporcionan ayuda visual para que el usuario sepa en que parte de la página se encuentra.

6. **Añadir etiquetas y textos descriptivos a los campos de formularios, videos e imágenes**  
Esto es importante para las personas que estan navegando con el tab, ya que sin esto no van a tener acceso a todos los títulos. Por eso debemos añadir etiquetas descriptivas, algo llamado aria-label. Además se debe garantizar a los usuarios que cuando haya un error en un formulario no solo se muestre un borde color verde o rojo, sinó que muestre un mensaje que pueda ser leído por un lector de pantalla.
    > El atributo [aria-label](https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) se utiliza para definir una cadena que etiqueta el elemento actual. Úselo en los casos en que no haya una etiqueta de texto visible en pantalla. Si hay texto visible etiquetando el elemento, utilice aria-labelledby en su lugar. ARIA (Accessible Rich Internet Applications)

7. **Escribe contenido descriptivo que pueda reemplazar videos e imágenes**  
Siempre es mejor mantener texto descriptivo por fuera de videos o de las imágenes, de esta manera los usuarios que están navegando por medio de un lector de pantalla puedan escuchar la interpretación de los elementos mostrados ([etiqueta alt](https://blog.hubspot.es/marketing/texto-alternativo) describe una imagen). 

8. **Evitar animaciones que bloqueen contenido**  
Pasa cuando tenemos páginas en las que debemos hacer clic para ejecutar una animación y esto muestre un texto. Esto quiere decir que el texto está bloqueado por una animación, lo cual no es buena practica. Provocando que aquellos que no tengan acceso a un mouse no obtengan la misma cantidad de información que uno que si lo tiene. Además, no es buena practica que los usuarios vean muchos flashes cuando acceden a una página.

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

> 💡 A Seymour se le ocurrió cambiar su marca de ‘hamburguesas al
vapor’ a ‘steam burger’

> ✔ Después de cambiar su marca y actualizar su logo, Seymour considera crear una página web en donde sus clientes puedan consultar el menú de su restaurante, hacer reservaciones, pedir domicilios y consultar promociones.  

> ⚙ Con su idea de negocio definida. Seymour decide contactarte para hacer su página web.

---

> ![Brief Steam Burger](https://i.postimg.cc/Y2dcNDn2/6-briefthree.png)

--- 
> ![Logo](https://i.postimg.cc/XJnhPwBj/6-steam-logo.jpg) 


## Steam Burger.

> Steam Burger es un restaurante tradicional de comidas rápidas con 10 años de antigüedad en el mercado y sin presencia digital. El restaurante tiene productos sólidos y de alta calidad, pero necesita atraer nueva clientela para expandirse y abrir otras sucursales que compitan con otras cadenas de comidas rápidas en la ciudad.

### Objetivos.

- Atraer nueva clientela usando redes sociales y página web.
- Dar a conocer su menú y promociones por el canal virtual.
- Ofrecer servicios como domicilios y pagos en línea.

### Público objetivo.

> Steam burger ya tiene una clientela tradicional conformada por los vecinos de sectores aledaños a su restaurante, pero necesita posicionar su marca en redes sociales antes de abrir más sucursales. Para alcanzar este objetivo es necesario crear una estrategia enfocada en usuarios con mayor actividad en redes sociales como Instagram y tiktok. Es decir jóvenes entre 18 y 30 años.

### Competencia.

- Sierra nevada hamburguesas. https://sierranevada.co/
- La hamburguesería. https://www.lahamburgueseria.com/

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
> ![wireframe móvil de alta calidad / fidelidad](https://i.postimg.cc/J0THvNdZ/9-wireframe-alta-fidelidad.jpg)
> ![wireframe web de alta calidad / fidelidad](https://i.postimg.cc/rFTKhhVB/9-wireframe-alta-calidad.jpg)

Tener en cuenta:  
En UX no tenemos capas de color o estilos de fuente, ya que esto lo ve UI. Solo tenemos espaciados para demarcar las secciones.

Con estos wireframe podemos empezar a hacer pruebas de usuario
- Grabar a una persona interactuando con las hojas en físico  
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

Estas referencias ayudan a extraer estilos de fuentes, colores de fondo, la manera en la que se toman las fotografías, etc.

En búsqueda de inspiración:
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

> ![Teoría del color](https://i.postimg.cc/1RBTb2mw/12-teoria-color.jpg)

La idea es utilizar estos colores y la teoría de la psicología del color para seleccionar los colores de la web o aplicación a crear, dependiendo del problema que soluciones.

### Color para web.
- Utiliza color [RGB y hexadecimales](https://platzi.com/comentario/1398200/), nunca cmyk. 
- Crea un código de color consistente. Ejemplo: Al colocar botones que pertenecen a una misma categoría (comprar), es conveniente usar un mismo color para todos estos.
- Menos es más. El exceso de color hace que los usuarios no se puedan enfocar en una acción a la vez. Agrupar por categorías y manejar una paleta de colores reducida.
- Asegúrate de que tu elección de color sea accesible. Que funcionen bien con texto y colores de fondo con suficiente contraste.
- Define una paleta de color. Una paleta de colores es un grupo de colores que van a ser usados en nuestra aplicación. Esta se debe definir antes de empezar a diseñar, para así restringir las posibilidades que tenemos al usar colores y lograr una app balanceada.

**Crea esquemas de color que funcionan:**  
- [Generador de paleta de colores](https://colors.muz.li/) 
- [Paletas de color](https://color.adobe.com/create/color-wheel)
- [Revisa el contraste](https://paletton.com/#uid=14p0u0kh9qJ7dHUc6vHlZm0r3gG)
- [Mas colores](https://flatuicolors.com/)


---
## 13. Paletas de color

### Colores primarios, secundarios y terciarios
**Colores primarios:**
- 🟡Amarillo 🔵Azul 🔴Rojo  

**Colores secundarios:**
- Resultan de la combinación de los colores primarios.
- 🟢Verde 🟣Morado 🟠Naranja

**Colores terciarios:**
- Resultan de la mezcla entre un color primario + un color secundario adyacente (es decir, su vecino contiguo en el círculo cromático)
- 🟡Amarillo + 🟠Naranja = amarillo-anaranjado. 
- 🔴Rojo + 🟠Naranja = rojo-anaranjado.
- 🔴Rojo + 🟣Morado = rojo-morado.
- 🔵Azul + 🟣Morado = azul-morado.
- 🔵Azul + 🟢Verde = azul-verdoso.
- 🟡Amarillo + 🟢Verde = amarillo-verdoso.  

> <img src="https://i.postimg.cc/VLfWqfvN/13-p-s-t.jpg" width=60%>

### Tipos de paletas
**Combinación monocromática:**  
Diferentes tonos de un mismo color. (Un color + diferente opacidad). Por ejemplo, un azul y todos los rangos más claros u oscuros consiguientes.
> ![monocromatica](https://i.postimg.cc/L43bF4bt/13-paleta-monocromatica.webp)

**Combinación análoga:**  
Resulta de combinar un color primario con uno secundario y uno terciario que estén seguidos en el circulo cromático (primario + secundario + terciario). Ejemplo, el rojo, naranja y amarillo-anaranjado son análogos.
> ![analoga](https://i.postimg.cc/5NqgFPV8/13-paleta-analoga.webp)

**Combinación complementaria:**  
Consiste en combinar un color primario con un color secundario que no estén seguidos en el circulo cromático (Primario + secundario). Estos colores están opuestos en el circulo.
> ![complementaria](https://i.postimg.cc/cJppDD5X/13-paleta-complementaria.webp)

**Combinación tríadica:**  
Se trata de combinar tres colores que estén en el circulo cromático de manera que formen un triángulo dentro del circulo y puede ser primario, secundario o terciario. Para usar una triada de forma exitosa, los colores deben estar equilibrados ,y se debería usar uno dominante y los otros dos para acentuar.
> ![tríadica](https://i.postimg.cc/bY5tmWxQ/13-paleta-triada.webp)

**Combinación tétrada:** Combinamos 4 colores elegidos al formar un rectángulo dentro del circulo cromático. Se eligen dos primarios y dos secundarios.
> ![tetra](https://i.postimg.cc/zX0KnvdG/13-paleta-tetrada.webp)

> **Nota:**  
Una vez tengas los colores seleccionados debes definir las variables de color.



```
$color-white: #fff;
$color-black: #000;
$color-primary: #ffd000;
$color-secondary: #181d20;
$color-terciary: #ff5252;
$color-cuaternary: #181d20;
```


---
## 14. Tipografía

### Tips para el uso eficiente de tipografías.
- Mantén el número de fuentes al mínimo (max. dos).
- Trata de usar fuentes estándar. Usa [Google Fonts.](https://fonts.google.com/)
- Limita la cantidad de texto. Las webs no son libros, están pensadas para consultarlas lo mas rápido posible.
- Elige tipografías que sean legibles en diferentes tamaños.
- Mantén altos de línea espaciados.
- Asegúrate de tener suficiente contraste.
- Evita usar animaciones intermitentes.

### Reglas de combinación de tipografía:
### **Serif**

Personalidad | Fuentes | Combina con | Usos
-------------|---------|-------------|----
Tradicional. | Droid Serif. | Sans serif. | Logos.
Sofisticada. | Georgia. | Script. | Textos de párrafo.
Confiable. | Merriweather. | Display. | Títulos.
Práctica. | Playfair Display. | | Impresos.
Formal. | Times. | | 

### **Sans Serif**

Personalidad | Fuentes | Combina con | Usos
-------------|---------|-------------|----
Moderna. | Droid Serif. | Serif | Logos.
Limpia. | Lato. | Script. | Textos de párrafo.
Humanista. | Open Sans. | Slab Serif. | Títulos.
Geométrica. | Roboto. | | Textos pequeños.
Universal. | Verdana. | | 

### **Script**

Personalidad | Fuentes | Combina con | Usos
-------------|---------|-------------|----
Elegante. | Courgette. | Serif | Logos.
Clásica. | Lobster. | Sans serif. | Títulos.
Formal. | Merienda. | | Invitaciones.
Sofisticada. | Pacífico. | |
Estilizada. | Satisfy. | | 

No se recomienda para párrafos largos, solo para textos cortos que deseemos destacar.

### Implementando Style guide
**¿Qué es un style guide?**
> La primera función de un style guide es saber las dudas principales que surgen en los equipos de diseño y desarrollo de apps. En pocas palabras, es un documento que describe los principios de una compañía y cómo deben aplicarse, incluyendo:

- Patrones
- Estilos
- Componentes
- Prácticas
- Colores
- Tipografías
- Lo que está permitido
- Lo que no está permitido

**¿Para qué sirve?**
> Un style guide de apps sirve para que todos los equipos involucrados en la construcción de la app estén alineados en cuanto al estilo y las reglas que tendrá.

> Con su uso correcto, ahorrará tiempo cuando el equipo de diseño establezca reglas respecto a detalles como tamaño de las fuentes, colores de los botones, etcétera. Así, el equipo de desarrollo se apegará a esas reglas y habrá menos ajustes en el proceso final de cambios.  
[Mas info sobre Style guide](https://www.domestika.org/es/blog/3533-que-es-y-para-que-sirve-el-style-guide-de-apps)

> ![Style guide](https://i.postimg.cc/FKkv4hDx/14-styleguide.jpg)  
*En la clase mencionan los style guide en el minuto 3:51*


- [Curso Tipografía](https://platzi.com/cursos/diseno-tipografia/)


---
## 15. Layout y sistemas de grillas

### ¿Qué es una grilla?
> Es un sistema de columnas creado por nosotros de acuerdo a las necesidades para ajustar nuestros elementos y componentes.  
La mejor herramienta de CSS para crear una grilla es **Grid**.

**BreakPoints Configuración estándar (Tipos de pantalla).**  
- $xs: 360px. Para móviles pequeños.
- $s: 440px. Para móviles con la pantalla más grande.
- $m: 768px. Para tablets.
- $l: 1280px. Para Ordenadores pantalla normal.
- $xl: 1440px. Monitores de alta calidad.

#### Recomendaciones:
**Usar Sass**
> Sass es un pre-procesador de CSS, ayuda a escribir CSS de una manera más rápida y más fácil.  
Sass permite crear un Mixin, este nos va a permitir modificar los estilos de acuerdo al Breakpoint en el que estemos.

**Configuración de variables dependiendo de los breakpoints.**  
- columns. Es el número de columnas que vamos a tener.
    - móvil: 4 - tablet: 12 - desktop: 12
- column-gap: Es el espacio entre las columnas.
    - móvil: 6.67% - tablet: 2.27% - 2.19%

**Definir clase Grid**  
> Esto sirve para configurar cada uno de los elementos contenedores donde vamos a incluir nuestros componentes.

**Finalmente**  
Añadimos un display grid, que nos permite que toda esta configuración surta efecto. 
- grip-column-gap: para la distancia entre columnas.
- grid-template-column: nos permite tener esta estructura.
- grid-column: 1/5 define el tamaño de un componente, donde 1 es la columna donde empieza, y 5 es la columna donde termina.


[Extensión: CSS Grid Overlay](https://chrome.google.com/webstore/detail/css-grid-overlay/hajfilceeneohkmcakehndmaeonhlack?hl=en)  
[Curso de Preprocesadores CSS](https://platzi.com/cursos/preprocesadores/)


---
## 16. Sistemas de componentes UI

Una de las metodologías que podemos usar es separar las funcionalidades por componentes.

Nos referimos por sistema de componentes al conjunto de:
- Botones: Primarios o Secundarios
- Quote: Cita o frase que caracteriza al producto.
- Products
- Reto
- Contact Box
- Navigation
- Hero
- Cards
- Banners
- Títulos
- Párrafos
- Menus

> ![button](https://i.postimg.cc/kgZ06Czh/16-button-quote.jpg)
> ![products](https://i.postimg.cc/zBY47jJC/16-product.jpg)
> ![reto](https://i.postimg.cc/h4d08dvr/16-reto.jpg)
> ![contact-box](https://i.postimg.cc/gkMFp8Dp/16-contact-box.jpg)
> ![navigation](https://i.postimg.cc/Cxzyx5Pq/16-navigation.jpg)
> ![hero](https://i.postimg.cc/QMTRcPrN/16-hero.jpg)

Este conjunto de componentes son los que vamos a usar para crear nuestra aplicación. Esos componentes funcionan como una librería.

Puedes usar cualquier tecnología que prefieras (**React**). Lo importante es encapsular las funcionalidades en componentes. 

Cada componente tendrá su propio css y funcionalidad dentro de su propia función.

Así podremos importar esas características a cualquier pantalla de nuestra aplicación, reutilizando el código y hacer más eficiente nuestra aplicación.

### Importante
> Agregar todos los componentes a un **style guide** y mas importante aún es que funcionen por si mismos sin estar amarrados a ninguna página. El tener los componentes en un style guide nos garantiza que en el momento que los queramos incluir en cualquier parte de nuestra aplicación no se va a romper porque ya tiene definidos todos los estilos de una manera encapsulada.

### Separar por componentes
En la clase de Wireframe creamos bocetos de algunos componentes, que luego dividimos en unidades de funcionalidad.

La idea es crear a partir del wireframe todos los componentes y funcionalidades, y después le añadimos la capa visual.

---
### Hero
O mejor dicho una Hero Image, es un término que se emplea en el campo del diseño web para referirse a un banner de gran tamaño que se coloca de manera visible en una página web, a menudo en la página de inicio donde ocupa gran parte del layout.

### Quote
Hamburguesas de pura carne con el toque secreto.

### Recordatorio de profe ✨[SamantaMartinez](https://platzi.com/comentario/1430643/)
> El styleguide es una página en donde podemos ver todos nuestros componentes y estilos básicos, los que vamos a reutilizar en nuestra aplicación. 

> El styleguide se conforma de componentes y cada componente tiene su hoja de estilos css. En pocas palabras el styleguide viene siendo como una página de muestrario de todos los componentes que tenemos a nuestra disposición para usar en nuestra página. 

> La ventaja de tener un styleguide es que cada vez que queramos añadir elementos a nuestra aplicación no vamos a tener que diseñar de cero, sino que podemos partir de elementos que ya existen.


- [material.io/design](https://material.io/design)


---
## 17. Themes y customizaciones

### ¿Qué es un theme? 
> Es una capa de color y estilos que se añade por encima de nuestra aplicación y nos permite tener distintas variaciones sin hacer cambios drásticos en nuestro código. 

> Los themes se manejan en archivos diferentes donde tenemos configurada la presentación visual de toda la aplicación (dark theme - light theme). Teniendo más themes podremos tener más presentaciones visuales. [Ejemplo Android10](https://www.android.com/android-10/)

### Añadir un Theme
> Podemos hacerlo por medio de variables de css o variables de Sass. Las variables de Sass son más sencillas.

> Para cambiar el theme de nuestra app, debemos crear un archivo de scss por cada theme o paleta de color alternativa, pudiéndose intercambiar una por otra desde un archivo principal (base.scss) donde se configuran todos los archivos importados, sin tener que cambiar toda la programación de la aplicación. Simplemente con cambiar el nombre de un archivo por otro se realiza el cambio de theme.

Así como manejamos los colores, podemos manejar diferentes tipografías, fondos e iconos.

**Recomendación:**
- Leer sobre CSS Variables, también llamada propiedad personalizada.


---
## 18. Imágenes para web

### Formatos de imágenes para web

JPG: 
- Indicado para fotografías o imágenes con degradados.
- Es ligero pero sin tanta calidad

PNG: 
- Indicado para imágenes decorativas que requieran un fondo transparente.

SVG: 
- Indicado para iconos y animaciones de baja complejidad. Es vectorial y permite editar sus propiedades con CSS.
- Usados en iconos y animaciones.
- Se puede convertir a código.

GIF: 
- No recomendado para animaciones de larga duración debido a su peso.


### Elegir imágenes para mi diseño.
- Elige imágenes que aporten al contenido.
- Utiliza imágenes en las que tu público objetivo se vea reflejado.
- Elige imágenes consistentes con tu paleta de colores.
- Cuidado con las licencias. 😅

### Rendimiento y accesibilidad.
- Evita exportar imágenes con texto incrustado.
- Exporta las imágenes al tamaño del contenedor final.
- Considera el uso de estrategias como ‘[Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)’.
- Asegúrate de añadir ‘alt text’ a las imágenes que tengan un fin comunicativo.

Páginas para buscar imágenes:
- [Pixabay](https://pixabay.com/es/)
- [MorgueFile](https://morguefile.com/)
- [Picjumbo](https://picjumbo.com/)
- [Pexels](https://www.pexels.com/)
- [Freepik](https://www.freepik.es/)
- [Pinterest](https://co.pinterest.com/)
- [Unsplash](https://unsplash.com/)
- [Adobe](https://stock.adobe.com/co/)
- [Shutterstock](https://www.shutterstock.com/es)
- [Istockphoto](https://www.istockphoto.com/es)


---
## 19. Gráficos en movimiento para web

### Formatos de gráficos en movimiento:
CSS animado:
- Indicado para animaciones sencillas y transiciones.
- No es un formato de vídeo.
- Creado con propiedades de CSS
    - transition
    - translate 

SVG animado: 
- Indicado para animaciones de elementos vectoriales (de baja complejidad).
- No es un formato de vídeo.
- Formato vectorial para hacer ilustraciones.
- Creado con propiedades de CSS o SVG.
- Permite añadir etiquetas u opciones para animar usando JS con Canva.

JS (Canvas, WebGL): 
- Indicado para animaciones complejas como animaciones de datos o gráficas 3D. 
- Existen librerías en JS como D3.

Videos: 
- Indicado para filmaciones o animaciones de alta complejidad y corta duración. 
- Siempre preguntarnos: ¿realmente necesito este video o esto podría ser una imagen? ya que, son pesados y ralentizan la carga del sitio.

### Elegir gráficos en movimiento
- Elegir animaciones que aporten al contenido. No sobrecargar con muchas animaciones.
- Procurar que no se reproduzcan automáticamente y si lo hacen, que no tengan sonido.
- Evita que tus animaciones tengan flashes. Los brillos continuos molestan y pueden ser dañinas.
- Si tus animaciones aportan contenido, añade subtítulos o transcripciones para que las pueda leer un lector de pantallas.
- Evita que las animaciones bloqueen la lectura básica del contenido. Ten en cuenta que el lector de pantallas no podrá acceder a ese contenido.
- Recuerda que las animaciones y los videos ralentizan la carga de la página. Se aplica nuevamente el menos es más.


✨ Una página que tarda en cargar, constantemente pierde usuarios. La importancia de no sobrecargar contenido.

### Librerías de animaciones para CSS

- Hover
- CSShake
- Anijs
- CSS Wand
- Animate Components
- Keyframes
- AniCollection
- SpinKit Loader
- Animejs
- Animate CSS


---
## 20. Resultado final

### Brief
> Ver Clase 6. Brief y requerimientos técnicos  

Conformador por:
- Objetivos
- Público objetivo
- Competencias
- Distribución
- Cronograma

Esta es nuestra hoja de ruta para empezar a traducir los requerimientos en un producto visual final.

### Site map
> Ver Clase 8. Diagramas de flujo  

Traducimos el Brief y los objetivos en la estructura de una página:
- Home
    - Menú
        - Categorías
            - Hamburguesas
            - Acompañamientos
            - Bebidas
            - Postres
        - Promociones
    - Pedido
        - Resumen del pedido
        - Datos de envío
        - Confirmación
    - Contacto
        - Sucursales
    - Otras páginas
        - Instagram
        - TikTok
        - Facebook
        - Plataforma de pagos

### User Flow
Mapeamos una de las tareas mas comunes de los usuarios que es hacer un pedido en línea. Se pueden crear tantos como sea necesario.

### Wireframe
> Ver Clase 9. Wireframes y componentes  

- De baja fidelidad a mano para modificarlos rápidamente
- De alta fidelidad (desktop, mobile, etc.)

### Styleguide
> Ver Clase 14. Tipografía donde se hace referencia al Styleguide

Probamos diseño con diferentes colores, tipografías etc. (con ayuda de nuestro Style Guide)

### Sistemas de componentes UI
>  Ver Clase 16. Sistemas de componentes UI

Creamos componentes en módulos separados para facilitar la reutilización y con variables CSS para cambiar la paleta de colores fácilmente.

### Diseño Final de Página
Es similar al wireframe pero no es exactamente igual. Hubieron cosas que funcionaban y otras que no, por lo que fueron cambiadas.

[Apuntes Resumen](https://static.platzi.com/media/public/uploads/apuntesdisenoprograma_139d88e4-e2d8-4439-82e3-caef7a5777c1.pdf)


---

**Ignorar**
> alt + 60 <>  
> alt + 62 >  
> Code Blocks (Indented style) -> alt + 96 ``` 


> <span style="color:red">some *red* text</span>.  
> <p>Some Markdown text with <span style="color:red">some <em>red</em> text</span>.</p>  

