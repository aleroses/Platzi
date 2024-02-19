Curso de Introducción a la Web: Historia y Funcionamiento de Internet
---Diego De Granda---

1. Bienvenida al desarrollo web


2. ¿Cómo empezó todo?

Los problemas que se intentaban resolver con las máquinas y computadoras era el Cálculo.
⠀
El Ábaco es considerado como la primera computadora. El uso del Ábaco consiste en conteos decimales.
⠀
Aparecieron las máquinas mecánicas no eléctricas que ayudaban a hacer cálculos con mayor complejidad.
⠀
Luego aparecieron las computadoras humanas, consistía en que las personas eran las encargadas de cálculos manualmente.
⠀
En los años 40, aparecieron las máquinas que se podían programar, estuvieron muy presentes durante la guerra, pero existía el problema de la falta de almacenamiento de datos, así que aparecieron las tarjetas perforadas que tenían como principal función el de guardar información.
⠀
Posteriormente nació el Maquine Code (Lenguaje de Máquina), para realizar los cálculos utilizando el sistema binario. Esto presentaba un gran nivel de dificultad así que nacieron los lenguajes de programación.
⠀
Entre los primeros lenguajes se encontraban Fortran, Cobol, Basic, C, Pascal y C++.
⠀
Maquine Code es considerado como un lenguaje de bajo nivel.


https://es.wikipedia.org/wiki/Historia_de_los_lenguajes_de_programaci%C3%B3n

https://platzi.com/cursos/historia-programacion/


3. Inputs y outputs

La interacción que tenemos con las computadoras son las entradas y salidas.
⠀

Entrada(input) → Proceso → Salida(output)
⠀
- La entrada o input son la información que ingresamos a la computadora, esto puede ser a través de dispositivos de entrada como: Escáner, Micrófono, Webcam, Mouse, Teclado, etc.
- El Proceso consiste en los cálculos que hará la computadora tomando como base la información ingresada.
- La salida o output son la información que devuelve la computadora y esta información puede ser visualizada a través de dispositivos de salida como: Impresora, Proyector, Parlante, Monitor, etc.
⠀
Todo lo que la computadora hace son cálculos de alto nivel.


4. Binario

Machine Code es un lenguaje binario. El sistema binario es básicamente un sistema de conteo.

La computadora solo entiende en ceros y unos.

⠀

Ejemplo: Número 70 a binario
128 64 32 16 8 4 2 1 → estos números son usados como referencia para convertir un número decimal a binario.
⠀
128 → 0 (128 > 70, el dígito es 0)
64 → 1 (64 < 70, el dígito es 1 y utilizamos el resto 70 - 64 = 6)
32 → 0 (32 > 6, el dígito es 0)
16 → 0 (16 > 6, el dígito es 0 )
8 → 0 (8 > 6, el dígito es 0 )
4 → 1 (4 < 6, el dígito es 1 y utilizamos el resto 6 - 4 = 2)
2 → 1 (2 = 2, el dígito es 1, como el resto llegó a ser 0, el resto de dígitos es 0)
1 → 0 (1 > 0, el dígito es 0)
⠀
El resultado es 70(decimal) → 01000110(binario)
⠀

Ejemplo: Número 151 a binario
128 64 32 16 8 4 2 1 → estos números son usados como referencia para convertir un número decimal a binario.
⠀
128 → 1 (128 < 151, el dígito es 1 y utilizamos el resto 151 - 128 = 23)
64 → 0 (64 > 23, el dígito es 0)
32 → 0 (32 > 23, el dígito es 0)
16 → 1 (16 < 23, el dígito es 1 y utilizamos el resto 23 - 16 = 7)
8 → 0 (8 > 7, el dígito es 0 )
4 → 1 (4 < 7, el dígito es 1 y utilizamos el resto 7 - 4 = 3)
2 → 1 (2 < 3, el dígito es 1 y utilizamos el resto 3 - 2 = 1)
1 → 1 (1 = 1, el dígito es 1)
⠀
El resultado es 151(decimal) → 10010111(binario)


METODO 1 DE BINARIO A DECIMAL
-> Tenemos el 70, primero debemos escribir del 128 al 1 y luego ir rellenando espacios con 1 o 0 comenzando por el 128 (70 es muy pequeño para entrar aquí), pasamos al siguiente (64 es menor para mi 70, coloco un 1 y me sobran 6), el 32 es demasiado para mi 6 así que coloco un 0, continuamos hasta llegar al numero deseado total, colocando 0s donde no vaya nada.

	1	0	0	0	1	1	0 ==> Binario 
128	64	32	16	8	4	2	1 
Sumamos solo los 1 para comprobar ==> 64+4+2 = 70
Desde el 1 solo se van duplicando las cifras, puedes colocar tantos como quieras: 128 -> 256 -> 512 según la conversión a hacer

METODO 2 DE BINARIO A DECIMAL
-> Dividiendo entre 2 hasta llegar a cociente 1, luego escribimos desde el ultimo cociente hasta el resto de la primera división:

70	/	2	---> División 1
 0 <-		35	/	2	---> División 2
 		 1 <-		17	/	2	---> División 3
 		 		 1 <-		8	/	2	---> División 4
 		 		 		0 <-		4	/	2	---> División 5
 		 		 				0 <-		2	/	2	---> División 6
 		 		 						0 <-		1 <-	De Aquí hacia arriba  		 		 						
1	0	0	0	1	1	0


5. Bits y bytes

La computadora entiende todo en base a un sistema binario compuesto por bits y bytes.
⠀
Bit = Cada dígito del sistema binario.
Byte = La combinación de 8 bits.
⠀
Transistores: La forma en que la computadora entiende los unos y ceros.
- Funciona con 2 estados: ON-OFF; True-False; 0-1


6. ASCII

https://www.ascii-code.com/

ASCII es la forma en la que se le asigna un valor numérico a una letra, numero o carácter especial.

Se le asigna un valor numérico para que posteriormente la computadora le asigne un valor binario y pueda interpretar de que letra, numero o carácter se trata



A	B	C	D	E	F	G	H	I	J	K
65	66	67	68	69	70	71	72	73	74	75

L	M	N	O	P	Q	R	S	T	U	V
76	77	78	79	80	81	82	83	84	85	86

W	X	Y	Z
87	88	89	90



Traducir de Codigo ASCII

161 72 111 108 97 33

DEC	BINARIO	SYMBOL
161	10100001	¡
72	01001000	h
111 	01101111	o
108 	01101100	l
97	01100001	a
33	00100001	!

¡hola!

33	/	2
 1		16	/	2
 		 0		8	/	2
 		 		0		4	/	2
 		 				0		2	/	2
 		 						0		1
33 = 100001



Primero ingresamos un !Hola! a la computadora luego esta lo transforma a código ASCII y luego a código binario

!Hola! pesa 6 bytes o 48 bits


7. UNICODE

https://unicode-table.com/en/#basic-latin

Pese a que fue muy innovador ASCII solo se enfocaba en el alfabeto común y dejaba de lado ciertos alfabetos o caracteres especiales.
Aquí es donde surge UNICODE, en este se encuentran todos los caracteres especiales incluidos los emojis y distintos alfabetos, UNICODE cuenta con mas de 1 millón de caracteres en su lista


8. RGB

RGB
Es un formato de colores.
Cada pixel dentro de una imagen está compuesta por 3 sub pixeles: Rojo (Red), Verde (Green) y Azul (Blue) con un tono de 0 a 255.
⠀
Ejemplos:
- Negro (0, 0, 0)
- Blanco (255, 255, 255)
- Rojo (255, 0, 0)
⠀
Combinando tonalidades se pueden formar colores específicos.
⠀
Ejemplos:
- Plum Purple (178, 80, 228)
R: 178 = 10110010
G: 80  = 01010000
B: 228⠀= 11100100

Cada pixel representa un cálculo de la computadora.


En resumen: la computadora solo interpreta números binarios, ella siempre realiza la siguiente transformación:

Números => Binario
Letras => Números (según ASCII) => binario
Caracteres especiales => numero (Según Unicode) => Binario
Imagen => Numero (RGB) =>Binario
Música => Números (según las ondas) => Binario.

Es decir que todo lo que realizamos en la computadora consiste en números binarios.


9. ¿De donde viene el internet?

El internet viene directamente de los cables que nosotros tenemos en la casa y ciudad que hacen posible que tengamos internet.

La mayoría de estos cables se encuentran en el mar porque van directamente de una parte del mundo a otra.

Internet es una abreviación de Internetworking y se creó en los años 70s para referirse a los cables físicos y las computadoras que se conectan entre sí.

El internet nace de un proyecto llamado ARPANET (Advanced Research Projects Agency NETwork) en los 70’s y es la forma de cómo podemos conectar ciertas universidades para conectarlas entre sí e intercambiar información.


https://www.submarinecablemap.com/



El internet nace de una experimento del gobierno Estadounidense llamado ARPANET con el fin de descentralizar sus comunicaciones en medio de la guerra fría, comienzan conectando 4 computadoras de universidades vía fibra óptica y el experimento evoluciona hasta conectar a computadoras vía satélite con la evolución del experimento se establecen reglas y protocolos donde nace el arroba y HTTP


10. Protocolos

Protocolos
TCP/IP Transmission Control Protocol / Internet Protocol
Es un protocolo de transmisión, el cual se divide en 5 etapas:

Es la forma de como se genera la información y al momento de enviarla a través de internet llegue a su destino a través de encabezados, divide la información a través de paquetes y con internet cada uno de estos toma el camino mas rápido para llegar a una dirección.
 
Aplicación		HTTP/FTP
Transporte		TCP, UDP
Red			IP, ROUTERS
Enlace de datos	ETHERNET, SWITCHES
Físico		CABLES


11. ISP

ISP (Internet Service Provider)
Son los proveedores de Internet, son intermediarios con toda la infraestructura que nos da acceso a internet, otorgándonos una IP Address.


En resumen, el ISP esa cosa a la cual llamas bien enojado cuando te va lento el internet jaja, es el que se encargan de conectarte a ti y de mantener la infraestructura de la red.

Y el IP es como que ese “numero telefónico” que tienes, y los DNS… bueno, en la siguiente clase:D!


12. DNS

DNS (Domain Name System)
Se crean para poder identificar a quien tenemos que contactar sin poner la dirección IP.
Ejemplo: 172.217.7.23 es la IP de Google, en vez de escribir la dirección IP podemos ingresar a la dirección a través del dominio de Google
⠀
El DNS hace que sea mas fácil tener interacción con otro equipo.


13. El primer desarrollador web

El primer desarrollador Web
⠀
Utilizamos la Web para crear y compartir información.
⠀
Hubo un primer desarrollador Web, su nombre es Tim Berners-Lee.
- Hizo la propuesta de W3, la cual es una forma de globalizar la información y poderla linkear.
- Todo lo generó a través de una computadora NEXT.
- Escribió las 3 tecnologías fundamentales para el desarrollo Web:
	- HTML: Lenguaje de marcado para la Web.
	- URL: Dirección a la que nos conectamos.
	- HTTP: Forma para comunicarnos a través de peticiones
- Construyó el primer servidor Web.
- Construyó el primer navegador.


http://info.cern.ch/hypertext/WWW/TheProject.html

14. W3C

W3C (World Wide Web Consortium)
Trabajan los estándares, los cuales son las tecnologías que se trabajan en la Web. La W3C se encarga de realizar las mejoras en la Web, modificaciones, generar propuestas, etc.
Existen muchas empresas que trabajan para mejorar la Web, junto a W3C

https://www.w3.org/Consortium/Member/List


15. Web browser

Han existido muchos navegadores, por ejemplo:

MOSAIC: Implementó lo primeros gráficos en los navegadores, este navegador ya no existe.
NetScape: Gracias a este navegador tenemos ahora JavaScript.
Google Chrome: Mejoró las interacciones con las páginas e inició con el desarrollo de las aplicaciones Web.


16. Evolución del protocolo HTTP

HTTP (Hypertext Transfer Protocol)
HTTP son reglas de comunicación.
Para este protocolo existen HTTP Request y HTTP Response, los cuales se encarga del procesamiento de las solicitudes.
⠀
Existen métodos dentro de HTTP:
- GET: Solicita datos (platzi.com)
- POST: Envía datos (login).
- PUT: Crea o reemplaza datos (modificar).
- DELETE: Borra datos específicos.
⠀
HTTPS (Hypertext Transfer Protocol Secure).- Es la parte de seguridad en la conexión, las peticiones van encriptadas.


17. Estándares web

Estándares Web
Nacen a causa de la “Guerra de los Navegadores”, no existía una regla sobre a que dirección iba la Web, los navegadores implementaban sus propios estándares.

Estándares:
- HTML: Arquitectura de la información, texto, actualmente HTML5.
- CSS: Manejo de estilos, colores, diseño.
- JavaScript: Interactividad, aplicaciones Web.
- WebAssembly: Es un estándar que nació en diciembre del 2019, es un compilador.


18. ¿Dónde estamos ahora?

¿Dónde estamos ahora?
Hay 4000 millones de dispositivos conectados a la Web, estos dispositivos no solo son computadoras, ahora cualquier equipo puede llegar a conectarse a la Web.

Actualmente existen patrones de diseño para la Web para diversos dispositivos, como buenas prácticas se debería empezar por el diseño mobile first.

Internet of Things (Internet de las cosas).- Son objetos inteligentes conectados a internet, ej. un refrigerador, automóvil, etc.

Machine Learning y Artificial Intelligence (Aprendizaje Automático e Inteligencia Artificial).- Son tecnologías que están creciendo actualmente y ambas están siendo aplicadas en muchos proyectos.

5G.- Gracias a esta tecnología incrementaremos el número de dispositivos conectados.


19. DOM

DOM (Document Object Model)
DOM es un árbol que se genera con la información de las etiquetas HTML.
Proporciona una representación estructural del documento, permitiendo la modificación de su contenido o su presentación visual.
Con JS ya podremos generar interactividad a través del DOM.

Document
html
	head
		style
		attribute: type
	
	body
		din
		attribute: id


20. CSSOM

CSSOM (CSS Object Model)
CSSOM genera algo similar al DOM, genera un árbol con los estilos.
Permite leer y modificar el estilo de CSS de forma dinámica.


21. Render tree

Render Tree
Genera un árbol juntando los objetos DOM + CSSOM.
Pasa directamente en el navegador, el cuál interpreta toda la información.


22. Layout

Layout
Identifica en que parte de la pantalla irá parte del proyecto.
El navegador forma la maquetación del proyecto.
Se genera los contenedores de información en base al render tree.


23. Paint

Paint
Paint o pintado es poner los detalles finales para que el proyecto se pueda ver como queríamos al principio, cada contenedor es como una caja en la cual solo queda ponerle color o diseño dinámico.
Es la parte final, así que después de esto podríamos interactuar con la página.


24. JavaScript engine

JS Engine es un motor que entiende al lenguaje JavaScript y puede convertirlo a Machine Code para que el navegador sepa que función se debe realizar.


25. Cierre del curso







Christian Juan Tambo Coaquira
Francisco Marcos Lombardi
Gabriela Rincon Ramirez









38 / 2
 0	19 / 2
 	 1	9 / 2
 	 	1   4 / 2
 	 	    0	   2 / 2
 	 	    	    0	  1
 	 	    	    
 	 	    	    
 	 	    	    
 	 	    	    
 	 	    	    
Estas son tus respuestas
Puedes revisar y cambiar las respuestas. Al terminar presiona “Calificar respuestas” para enviar las preguntas y conocer tu puntuación.

1. ¿Para qué servían las tarjetas perforadas?
No es Para almacenar información en estas tarjetas que después se podía consultar.
-> Para almacenar información e ingresar instrucciones a una computadora

CAMBIAR
2. ¿Cómo convierte una computadora texto en unos y ceros?
Las computadoras convierten texto y otros datos en binarios utilizando un valor asignado de códigos como ASCII y Unicode.
CAMBIAR

3. ¿Cuáles son periféricos de salida?
Monitor, bocinas, audífonos e impresora.
CAMBIAR

4. ¿Cuáles son periféricos de entrada?
Teclado, micrófono, cámara, mouse, escáner.
CAMBIAR

5. En binario ¿cómo se representaría el número 38?
00100110
CAMBIAR

6. En binario ¿cómo se representaría el string “hola”?
01101000 01101111 01101100 01100001
CAMBIAR

7. ¿Cuántos bits tiene un byte?
Un byte tiene 8 bits.
CAMBIAR

8. ¿Cómo se forma un pixel?
Un Pixel se forma por la combinación de tonos de 3 sub-píxeles que son rojo, verde y azul (RGB).
CAMBIAR

9. ¿Cómo representamos el color rojo en RGB?
(255,0,0)
CAMBIAR

10. ¿Qué es ISP?
Proveedor de servicios de Internet (Internet Service Provider).
CAMBIAR

11. MAL
¿Cuáles fueron las tres tecnologías que dieron nacimiento a la web como la conocemos hoy en día?
no -> HTML, CSS y JS.
no -> HTML IP DNS
CAMBIAR

12. ¿Quién creó el primer navegador?
Tim Berners-Lee
CAMBIAR

13. ¿Qué significa WWW?
World Wide Web
CAMBIAR

14. ¿Cuál es el protocolo que utilizamos para poder enviar y recibir peticiones en la web?
HTTP
CAMBIAR

15. MAL
¿Cuáles son todas las partes de un Critical Rendering Path?
1. DOM 2. CSSOM 3. Render Tree (4. JS Engine) 5. Layout 6. Paint
CAMBIAR
https://vanessamarely.medium.com/crp-critical-render-path-o-ruta-de-acceso-de-representaci%C3%B3n-cr%C3%ADtica-1f2ca78d2645

16. ¿En qué paso del Critical Rendering Path, se combina el DOM y el CSSOM?
Render Tree
CAMBIAR

17. ¿En qué paso del Critical Rendering Path comenzamos a crear la estructura del proyecto sin diseño?
Layout
CAMBIAR

18. HTML y CSS son dos de los principales estándares web.
Verdadero 	 	    	