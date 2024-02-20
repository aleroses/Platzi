Fundamentos de Ingeniería de Software
--Freddy Vega--

1. Cómo funcionan las computadoras y los teléfonos móviles

Aprende cómo es el proceso de enviar un email, todo su recorrido desde tu computadora, servidores y notificaciones hasta que llega al destinatario.

--Apuntes anncode--
alenux - alegnu

Todos los sitios tienen asignado una ip, lo cual les da su localización única en internet. Era muy dificil recordar esos números tan grandes de ip y así que decidieron darles nombres sencillos para recordar, por lo tanto hicieron los servidores DNS que una vez que pones el nombre sencillo éste lo tiene mapeado hacía la ip correspondiente y así es como localiza tu sitio.


--Apuntes José Guillermo--
¿Cómo funciona un email enviado desde un desktop hacia un móvil?

1. Se escribe el email en una página del navegador (Gmail, Outlook, etc).
2. Se hace click sobre el botón ENVIAR para mandar el mail.
3. Este click se traduce en una señal eléctrica que va desde el mouse o teclado hasta el CPU, y para ello requiere hacerlo a través de la tarjeta madre, que es una placa electrónica que comunica eléctricamente todo el computador entre sí.
4. Una vez dicha señal eléctrica se encuentre en el CPU, se interpreta mediante los drivers (software que interpreta las señales eléctricas de los periféricos) que viven en el sistema operativo (macOS, Linux, Windows, etc) y así se sabe que hacer con esa señal, en este caso se sabe que viene del navegador (Chrome, Firefox, etc).
5. Volviendo al usuario, cuando se encuentra en una página web, con lo que en realidad interactúa es con un conjunto de tecnologías (CSS, HTML, JavaScript) llamadas frontend. Un HTML posee uno o varios trozos de código en JavaScript que están preparados para hacer algo una vez la computadora ya le aviso que la señal eléctrica era para el (enviar el email si se hizo click en ENVIAR, por ejemplo), a estas acciones preparadas se les conoce como eventos.
6. Dicho evento ENVIAR se pone en marcha y utiliza una tecnología conocida como AJAX (Asynchronous JavaScript And XML), que le permite al navegador enviar datos al servidor (el email en este caso) sin que la página se recargue. AJAX es un API (Application Program Interface - conjunto de reglas y especificaciones para que aplicaciones/tecnologías se comuniquen entre sí) que entre sus múltiples funciones, encapsula los datos que deseamos enviar en un JSON (JavaScript Object Notation - manera de encapsular datos, mejor dicho, formato de archivo) siguiendo el protocolo REST (conjunto de técnicas para enviarle datos al servidor) a través de el “conducto” HTTP o HTTPS (Hypertext Transfer Protocol - protocolo de transferencia de hiper texto incluido en REST, la S en HTTPS es de Seguro y esto permite que solo el servidor/receptor final al cual estamos enviando los datos pueda interpretar la información, así nadie interceptará y vera dichos datos) que luego el servidor comprenderá.
7. Pero ¿a quién o a qué servidor se envía todo esto? pues para saberlo, se realiza una petición en el DNS (Domain Name System - sistema de nombres de dominio, que es una base de datos enrome descentralizada que interpreta las nomenclaturas o nombres como Google en una dirección IP). Los nombres se convierten en IP (Gmail.com -> 28.16.255.4 ::: Platzi.com -> 199.201.38.36). DNS es una base de datos gigantesca en la que todos los países y personas de internet colaboran. 
Saber ip en consola: ping google.com
8. Dicho sistema direcciona la información que el usuario envió al servidor de Microsoft (pues los dos usuarios, tanto el destinatario como el remitente básicamente no se envían nada, solo consultan el email en la base de datos de emails que vive en los servidores de Microsoft, en el caso de Outlook), quien recibe los datos en forma de señales eléctricas y el sistema operativo del servidor (generalmente Linux) junto con sus drivers transforma los datos que están encapsulados a un protocolo TCP/IP para poder conducirlos a través de puertos ethernet (estándar de redes de comunicación para computadores), que luego serán creados hacia el protocolo HTTP de nuevo para ser percibidos en ese mismo servidor por un “servidor HTTP” (software que trata finalmente la información, como Apache o Nginx) que correrá el código backend (conjunto de tecnologías que hacen funcionar a un servidor) que nosotros como programadores escribimos; PHP, Go, Java, etc.
9. El “servidor HTTP” ahora permite que los programas en el backend procesen la información recibida según corresponda. Los datos procesados son guardados en una base de datos para luego poder acceder a estos datos.
10. El email ahora si es enviado al dominio que sigue al @.
11. El email ahora va al servidor de mail del dominio que se envía, este lo envía a la base de datos del mail que corresponde (el que esta previo al @), es decir va a la bandeja del receptor.
12. La bandeja del receptor recibe una notificación
13. La bandeja envía una notificación a un servidor de notificaciones, el servidor de notificación avisa a nuestro celular que se ha recibido un email.
14. Fin.
Tratando de mejorar un poco un buen aporte de @carlosamarante, estoy bien con esto? suelo re escribir las cosas aunque las entienda, fijo mejor así las memorias 😃



2. Qué son Bits y Bytes

Conoce la diferencia entre los Bits y Bytes, su historia, construcción y adaptación a la computación y su uso universal.

--Apuntes anncode--
Binario: 0-1
Decimal: 0-9
Hexadecimal: 0 1 2 3 4 5 6 7 8 9 A B C D E F

Puedes realizar conversiones de valores entre estos










3. Cómo funcionan los circuitos electrónicos




4. Procesadores y arquitecturas de CPU

Vivimos en un mundo donde todo es un computador, como celulares, tablets, televisores, etc.

Existe una arquitectura para computadores de escritorio y laptops, estos internamente tienen:

- CPUs: su velocidad de mide en GHz y tienen Cores que son el número de instrucciones en paralelo que pueden hacer.
En este momento se hacen las CPUs en silicio y estas se calientan de acuerdo a la cantidad de procesos.

- BIOS, es un pequeño sistema que arranca el computador y comprueba la conexión del hardware.

- Disco duro, es donde se almacena el sistema operativo y los archivos que guardamos.

- Memoria RAM, los datos del sistema operativo se envían a la memoria que sirve como intermediario con la CPU, debido a que es una memoria de acceso rápido. Esta memoria solo funciona cuando hay electricidad.

- GPU, puede procesar en paralelo los pixeles de la pantalla y enviarlo en tiempo real para representarlos.


5. Qué es un system on a chip

La arquitectura rápida y compleja en un sistema tradicional podemos hoy tenerlo en un disposivo pequeño gracias a un system on a chip

Un system on a chip es una CPU que también tiene una memoria RAM y un disco duro en un chip.

También incluye chips especializados que permiten realizar algunos procesos necesarios por un dispositivo móvil.


6. Qué es la memoria RAM y cómo funcionan los discos duros

Sabemos que los archivos se almacenan en el disco duro y la hora de abrirlo, se cargan en memoria RAM, pero… ¿Cómo exactamente funciona eso?

Los discos duros antiguos funcionan como los vinilos antiguos: tienen un cabezal que va leyendo los datos que pasan por debajo de ella a medida que el disco gira a una velocidad constante.

Los discos duros son lentos porque deben posicionarse donde está el archivo almacenado y esto puede implicar que el brazo mecánico que mueve el cabezal se tome mucho tiempo en encontrar todos los pedazos de datos del archivo.

La memoria RAM es más rápida ya que puede acceder a los datos almacenados de manera instantánea.

Los discos duros de estado sólido no tienen el cabezal ni los discos que giran, sino que son más parecidos a las memorias RAM: funcionan electrónicamente. A pesar de eso guardan los datos en memorias flash, que son un poco más lentas que las RAM.

Los discos duros no son volátiles: guardan la información de manera persistente aunque se les quite el suministro de energía.

Además almacenan los archivos de manera secuencial: para almacenar un archivo, éste se parte en varios pedacitos y se guarda la posición de cada uno de estos pedacitos y su ubicación en el disco para poder leerlos secuencialmente.

Los sistemas de archivos son convenciones internas de los sistemas operativos para poder acceder a los archivos almacenados.

- En Linux existe ext3 o ext4
- En Windows existía FAT16 o FAT32 (File Allocation Table), que fue reemplazado por NTFS (New Technology File System)
- En Mac OSX el sistema de archivos se llamaba HFS (Hierarchical File System) pero ahora se llama AFS (Apple File System) en macOS Sierra
Cuando abrimos un archivo, el CPU se lo pide al disco duro y luego lo lleva a la memoria RAM para leerlo.

En la RAM están todos los programas y archivos que están en ejecución. Si abrimos un archivo con el Bloc de Notas, por ejemplo, ambos deben estar cargados en la RAM. Y el CPU puede acceder a la memoria RAM a través de un índice compartido, es decir, un índice que indica en qué posiciones de memoria se encuentran qué partes de un archivo o proceso.

Los datos viajan a través de un conjunto de cables paralelos llamado bus de datos, que comunica el CPU con el disco duro y la RAM para permitir la transferencia de datos.


7. GPUs, tarjetas de video y sonido

Sabemos cómo los archivos se cargan en memoria pero ¿Cómo veo en pantalla que el archivo se ha abierto?

Esto se logra gracias a la Graphic Processing Unit o GPU.

La CPU puede ejecutar cualquier proceso, incluido el dibujado en pantalla de ciertos datos. Pero no es ella quien se encarga, sino la GPU: tarjetas especialmente fabricadas para realizar estas tareas.

La comunicación entre la CPU y la GPU se realiza actualmente a través de un socket llamado PCI-Express.

Estas placas de vídeo tienen sus propias unidades o núcleos de procesamiento y su propia memoria RAM.

Lo que sucede es que la GPU divide la pantalla en una matriz y cada núcleo se encarga de dibujar una parte de esa matriz, para lograr una mejor performance.

Esto es mucho más rápido de lo que podría lograr la CPU sola ya que debería dibujar pixel por pixel ella sola.


8. Periféricos y sistemas de entrada de información

Los sistemas operativos normalmente tienen un núcleo llamado kernel, que es el principal elemento que los representa y es la primera parte del sistema operativo que se carga en la memoria RAM. El kernel del sistema operativo tiene acceso a todo en nuestra computadora: nuestros archivos, a nuestros periféricos, a los datos de las aplicaciones.

El kernel, inmediatamente después de ser cargado en RAM, se encarga de cargar los drivers: pequeñas piezas de software que permiten interpretar las señales eléctricas del hardware, para que el sistema operativo pueda comunicarse con ellos.

Luego tenemos otro set de drivers que pueden ser los controladores de arranque llamados drivers de aplicación. Cuanto más nos alejamos del kernel, menos privilegios tenemos. Los drivers de aplicación deben pedirle permisos a los drivers anteriores para poder acceder al hardware.

La última capa la representan las aplicaciones. Esta es la capa que menos permisos tiene, ya que las aplicaciones no deberían poder acceder al hardware directamente.


9. Arquitectura de la computación

En el inicio de la computación no existía un procesador y una memoria aparte. Las computadoras estaban más cerca de ser una máquina de escribir que una de las computadoras que conocemos ahora. Eran máquinas grandes y pesadas, que requerían ser trasladadas en aviones o camiones. El código binario se escribía en tarjetas perforadas: cuyas perforaciones (o falta de ellas) representaban los 1 y 0.

Hoy en día tenemos computadoras en nuestros propios bolsillos y las cargamos a todos lados, tenemos laptops cuyos monitores se pueden desacoplar y funcionan como tablets, tenemos microchips que sirven como una computadora común y corriente.

Ese salto evolutivo en la computación ocurre gracias a la estandarización de la arquitectura de las computadoras: decidimos que un Byte son 8 bits, que la CPU es la encargada de procesar, que la GPU representa datos visualmente, que 1024 Bytes son un KiloByte, y que 1024 KB son 1 MB, que exista un puerto común como el USB que nos permite conectar otros dispositivos externos.

Estandarizamos la transferencia de datos y los protocolos de comunicación. Hay un formato definido para cada tipo de imágenes, hay una forma de escribir HTML para que el navegador lo interprete y pueda mostrarnos elementos visuales en la pantalla. Definimos una forma para comprimir un archivo.


10. Introducción a las redes, protocolos e Internet

Aprende cómo tu computador se conecta a internet, qué es un switch, un router, un modem, un ISP, cómo el router sabe cuál es tu computador y de ahi, conectarse a internet.


11. Puertos y protocolos de red

Como funcionan y cuales son las direcciones IP, quien las asigna a nivel publico y como los router a través de DHCP asignan las privadas.
Cuantos rangos de ip tenemos disponibles y mencionan algunos puertos y para que se usan.


12. Qué es una dirección IP y el protocolo de Internet

IP es la sigla de Internet Protocol y una dirección IP es un número único con el cual una computadora o un dispositivo se identifica cuando está conectada a una red con el protocolo IP.

Cada dirección IP está compuesta por 4 números separados por puntos y son una forma de comprender números más grandes y complejos. Las direcciones IP tienen una estructura que las convierten en privadas o públicas y que además hacen parte de la máscara de red y el getaway.

Las direcciones IP permiten que cada computador o dispositivo pueda conectarse al exterior, es decir a Internet, esto a través de tecnologías como NAT o Network Address Translation.


13. Cables submarinos, antenas y satélites en Internet

La mayoría de personas imaginan que el acceso a Internet consiste en conexiones satelitales, lo cual es un error, pues los satélites están destinados sólo para áreas remotas. Internet funciona a partir de cables que atraviesan diferentes lugares del mundo.

Cuando usas tu computadora o dispositivo, este se conecta a un ISP o un prestador de servicios de Internet (ese a quién le pagas tu factura). De ahí, la conexión con diferentes puntos en el mundo a través de cables submarinos, que pueden ser de fibra óptica o cobre.

Estos cables pueden comenzar en una ciudad como Nueva York y terminar en Japón y aunque no parezca, la red de Internet un poco frágil pues los cables pueden romperse por diferentes causas, como las anclas de los barcos.


14. Qué es un dominio, DNS o Domain Name System

Como funciona internet, desde los nodos cables submarinos hasta la ultima milla. Como los operadores ISP filtran o restringen la velocidad de algunos contenidos.
Adicional como los sitios web usan redes CDN para distribuir contenido.


15. Cómo los ISP hacen Quality of Service o QoS


16. Cómo funciona la velocidad en internet

La mayoría de los ISPs (Internet Service Providers) nos venden ancho de banda en Mb y debemos tener claro qué significa, ya que existe una importante diferencia entre Megabits y MegaBytes.

Otro aspecto importante en el funcionamiento del internet es la velocidad. A menudo confundimos la velocidad con el ancho de banda por eso debemos tener en claro que la velocidad del internet se mide obteniendo el tiempo que le toma a la información viajar a través de un punto a otro en milisegundos, a esto se le conoce como ping o latencia.


17. Qué es el Modelo Cliente/Servidor

Las tecnologías utilizadas en aplicaciones web son:

Bases de datos, MySQL es una base de datos relacionales y MongoDB es una base de datos no relacional

Backend, existen muchos lenguajes que puedes usar cómo Python, Ruby, JavaScript

Servidores, existen tecnologías como NGINX, Apache, Node

Frontend, son las tecnologías que corren en el navegador, HTML, CSS y JavaScript

A un grupo de tecnologías se les conoce como Stack

Recuerda:

Si tuvieras un código en el Frontend que se conectara a una base de datos, esta seria visible para todos.


18. Cómo funciona realmente un sitio web

1.- Los protocolos se encargan de manejar todas las peticiones que hacen la páginas de internet desde tu navegador hacia los servidores DNS, éstos transforman la dirección de la página web en una dirección IP y tu navegador se conecta a esa IP.

2.- Una vez se tiene la dirección IP el navegador envía un HTTP request en donde envía información con las características del cliente y los requerimientos del mismo, es decir, Host requerido, página del sitio que necesita, tipo de navegador, versión del navegador, etc.

3.- El servidor envía los resultados por medio del mismo protocolo HTTP en forma de un HTTP Response en donde manda todo el HTML del sitio web así como otros datos que el navegador necesita.

4.- Por último se cargan los assets de nuestro sitio web y es aquí donde se descargan imágenes, sonidos, etc.


19. Internet es más grande de lo que crees

TCP/IP y UDP, Tipos de Wi-fi, Firewalls, Tethering, P2P, Redes Mesh, TOR, Multi-Wan, IPs fijas vs IPs dinámicas, VPNs, TTL, Paquetes, Syncs y Ack.
Todas estas son tecnologías que se utilizan día a día que debes conocer.


https://platzi.com/cursos/redes/
https://platzi.com/clases/avanzado-redes/
https://platzi.com/clases/seguridad-empresas/


20. Diferencias entre Windows, Linux, Mac, iOS y Android

Windows es el sistema operativo de propósito general más usado a nivel mundial, es un sistema operativo cerrado y se encuentra en la gran mayoría de computadoras para consumidores además utiliza un núcleo propietario perteneciente a Microsoft.

Linux es el sistema operativo más utilizado en servidores, es libre y su creador Linus Torvalds aún sigue desarrollando su núcleo destacado por su alto rendimiento y alta seguridad, tienen una licencia del tipo GNU-GPL que no solo permite redistribuir si no también garantiza que las personas que redistribuyen el código deban aportar a la licencia entre otras cosas.

FreeBSD es el sistema operativo en el que está basado Mac OS y muchos sistemas embebidos así como firewalls como pfsense y más, tiene una licencia del tipo BSD…


21. Permisos, niveles de procesos y privilegios de ejecución

Permisos, niveles de procesos y privilegios de ejecución
En la administración de archivos la capacidad de utilizar permisos te permite definir entre las siguientes características, los permisos existen en todos los sistemas operativos de diversas formas y se crean con las siguientes opciones:

Read ®: permisos de lectura.
Write (w): permisos de escritura.
Execute (x): permisos de ejecución.


https://platzi.com/blog/administracion-usuarios-servidores-linux/


22. Fundamentos de sistemas operativos móviles

Los sistemas operativos móviles difieren a los sistemas operativos normales en seguridad, el acceso y manejo de hardware especial para telecomunicaciones, y la forma en la que se aceptan y distribuyen sus aplicaciones.


23. Sistemas operativos embebidos e Internet of Things

Los sistemas embebidos son dispositivos que se encuentran en una gran variedad de lugares, estos son los sistemas de procesamiento que se utilizan en dispositivos diferentes a nuestros computadores, por ejemplo el microcontrolador que tiene programadas las secuencias de tu lavadora, el sistema embebido que tiene tu vehículo y que se encarga de coordinar tareas de seguridad básicas, entre otras cosas, el microcontrolador que tiene programadas las funciones de tu horno de microondas, el sistema de control de una estufa de inducción, la computadora embebida en un cajero automático, el sistema de navegación, estabilización y seguridad de un avión y muchos dispositivos más.

Los arduinos son una herramienta que permite crear prototipos de este tipo de sistemas, desde automatizar un horno antiguo hasta controlar una cámara por IoT, por esto son tan populares.

El Raspberry Pi es un dispositivo que contiene los mismos componentes que tiene un computador y cuesta sólo 35 USD, por esto y por sus entradas y salidas de propósito general (GPIO) es un sistema que vive y controla muchos proyectos desde sistemas retro de videojuegos hasta mini-clusters de cómputo, servidores multimedia DIY y más.


24. Cómo funciona .zip: Árboles binarios

¿Cómo funciona la compresión de un archivo sin perder ningún valor de ese archivo?

Los árboles binarios nos permiten comprimir sin perder información. En este caso, vamos a comprimir “amo leer panama papers”.

1. Debemos ver cuantas veces se repite cada letra
a = 5
m = 2
r = 2
s = 1
o = 1
  = 3
p = 3
l = 1
e = e
n = 1

2. La letra con más frecuencia va a estar en el primer punto de la rama. Cuando se encuentra es 1, y cuando no se encuentra es cero

3. Con esto debemos volver a construir nuestro mensaje siguiendo el árbol, esto quedaría

1 00001 0000001 01 00000001 001 001 000001 01 0001 1 0000000001 1 00001 1 01 0001 1 0001 001 000001 000000001

Aunque en este ejemplo no se reduce drásticamente el tamaño. Imagina párrafos más grandes u otro tipo de archivos.


25. Metadatos, cabeceras y extensiones de archivos

Tu aprendiste que .jpg significa la extensión de archivos de imagen, históricamente windows tenia muy pocos bytes para la extensión, por esto la extensión normalmente era de 3 dígitos.

Existen muchas otras extensiones como .html para páginas web, .mpg4 para vídeo.

Cuando abres los archivos vas a ver su codificación binaria o dependiendo del editor puedes verlo en hexadecimal.

Un sistema operativo lee los primeros bytes del archivo para entender a que archivo corresponde, esta información se llama cabecera.

Cada sistema operativo tiene una base de datos de que programa abre que tipo de archivo.

Cuando estas transmitiendo un archivo por Internet se especifica el tipo de archivo con mime types, el cual se transmite en la cabecera de un paquete http.


26. Cómo funciona el formato JPG

Asumamos que tenemos una foto de 600*800, si esto estuviera en un formato sin compresión, pesaría 840KB (solo representando un color por pixel).

Para tener una calidad de 32 bit la imagen debe pesar casi 1.9MB, así que podemos comprimir las imágenes y usar formatos como jpeg.

jpg lo que hace es aproximar áreas de color, si un color esta en áreas continuas, solo se declara la zona y el color de esa zona, de esta forma se pueden tener imágenes que pesan mucho menos.


--Nota de Freddy Vega--
El formato PNG funciona diferente a JPG. Y hay mejoras sobre el algoritmo JPG como JPEG2000.

Hay todo un mundo de formatos y estándares de compresión como:

DivX en video
gzip en el prótocolo HTTP
AAC vs. MP3 en sonido
MKV como un metaformato contenedor de otros formatos
PSD como un formato cerrado gráfico
¿Qué otros formatos especiales de compresión conoces o te intrigan?


27. Videos, contenedores, codecs y protocolos

En un vídeo hay muchos factores para comprimir, un vídeo es si es una serie de fotos vistas muy rápido. por ejemplo si un vídeo tiene 100 frames a 24 frames/segundo y si cada frame pesara 1.9MB el vídeo pesaría más de 100MB por 4 segundos de vídeo.

Por esto en los vídeos se utilizan varias formas de compresión

Contenedores: es el formato es que se guarda el vídeo como .avi, .mp4, .flv, .mpg, .webm
Codecs: es un algoritmo que comprime un vídeo y lo descomprime como divx, h.264, ogg, vp9
Protocolos: es la forma de transmitir los vídeos como RTMP
Keyframes: cada cierta cantidad de frame existe un frame que vuelve a definir todo el área.


28. Qué es una red neuronal

¿Sabes qué es una red neuronal? son la base de la inteligencia artificial. Y aunque pueda parecer un concepto un poco complejo de entender, en realidad se trata de imitar por medio de software en un computador la forma en que funciona nuestro propio cerebro.


29. ¿Qué es SQL y NoSQL?

Una pequeña muestra de lo que hay en el curso profesional de bases de datos. Suscríbete aquí: http://platzi.com/db

No todo en la vida es SQL. Hay bases de datos relacionales pero no siempre se necesita de tanto trabajo de fondo para ciertas tareas, así que hay bases de datos que no son relacionales… ¡y funcionan muy bien!

En este video, Freddy Vega nos explica las diferencias entre bases de datos SQL, MySQL y Redis, MongoDB.


30. Qué es un algoritmo


31. El poder de un Raspberry Pi

El Raspberry Pi, la revolucionaria computadora de 35 dólares que se lanzó hace 5 años, ha roto las barreras que le impedían a muchos desarrolladores, hobbistas y estudiantes realizar proyectos que involucran el uso de hardware. Pero ¿sabes qué es? ¿Por qué se volvió tan popular?

En este Platzi Live Ricardo Celis Santiago (@celismx), miembro del team Platzi, te explica para qué nace, cómo está hecho y además te muestra un par de proyectos increíbles hechos por usuarios de Raspberry Pi y que tú mismo podrías hacer. Cuéntanos en los comentarios si te interesa hacer algún proyecto y, de ser así, ¿cuál sería?


https://www.newark.com/buy-raspberry-pi?searchRef=SearchLookAhead


32. Principios de la ingeniería de software sostenible

¡Hola! Esta es una clase especial que forma parte del entrenamiento de la Escuela de Cloud Computing con Azure (https://platzi.com/azure/). Si es la primera vez que haces unos de estos laboratorios por favor realiza los siguientes pasos.

Crea una cuenta en Microsoft Learn y regístrate a los laboratorios.

Para ello solo tienes que seguir estos pasos:

1. Ingresa a la página de Microsoft Learn.

https://docs.microsoft.com/es-es/learn/

En parte superior derecha encontrarás un botón para iniciar sesión.

2. Inicia sesión en el portal. Lo podrás hacer con cualquier cuenta de Microsoft existente que tengas. En caso de que no tengas una da clic en el enlace para crear una.

3. Una vez inicies sesión, te pedirá llenar unos datos extra para completar tu perfil dentro de la plataforma.

4. Por último, regístrate al desafío de la Escuela de Cloud Computing con Azure.

https://docs.microsoft.com/es-mx/learn/challenges?id=2cceec57-42f9-4350-8b82-1fc4fe0034fa

5. ¡Listo! Ya tienes tu cuenta en Microsoft Learn vinculada a la Escuela de Azure de Platzi y puedes comenzar a realizar los laboratorios de práctica asociados a este curso.


Ingeniería de Software Sostenible

Si estás tomando la escuela de Cloud Computing con Azure te recomendamos hacer el siguiente módulo en Microsoft Learn donde podrás aprender los principios de la ingeniería de software sostenible.

La ingeniería de software sostenible es una disciplina emergente en la intersección de la climatología, el software, el hardware, los mercados de la electricidad y el diseño de centros de datos. Los principios de la ingeniería de software sostenible son un conjunto básico de competencias necesarias para definir, compilar y ejecutar aplicaciones de software sostenibles.

En este módulo, aprenderás a:

- Identificar los ocho principios de la ingeniería de software sostenible
- Entender las dos filosofías de la ingeniería de software sostenible

Para iniciar este módulo solo necesitas acceder al siguiente enlace.

https://docs.microsoft.com/es-es/learn/modules/sustainable-software-engineering-overview/?ns-enrollment-type=Collection&ns-enrollment-id=xgg5bxjg1owzm7


---Apuntes---
Resumen de los 8 principios de la ingeniería de software sostenible (disponible en los enlaces del material):
.

1. Carbon: Build applications that are carbon efficient.
2. Electricity: Build applications that are energy-efficient.
3. Carbon Intensity: Consume electricity with the lowest carbon intensity.
4. Embodied Carbon: Build applications that are hardware efficient.
5. Energy Proportionality: Maximize the energy efficiency of hardware.
6. Networking: Reduce the amount of data and distance it must travel across the network.
7. Demand Shaping: Build carbon-aware applications.
8. Optimization: Focus on step-by-step optimizations that increase the overall carbon efficiency.

Éstos son independientes de
- Dominio de aplicación
- Tipo o tamaño de la organización
- Proveedor de nube o (auto)servicio de host.
- Librería o lenguaje de programación



-------------Examen-------------------
Errores

1. Los primeros sectores de datos de un disco duro guardan
No es sistema operativo
-> Cabecera o indices 


2. ¿Qué es lo primero que carga un sistema operativo en RAM?
No es los driver
-> Los archivos

3. Qué es una IP?
No es el número único con el que se identifica un computador a nivel mundial
-> Es un número asignado para identificar los computadores en la red

4. Si un archivo tiene los permisos 750 que usuarios lo pueden editar
No es Administrador y usuario
-> Administrador

5. Para que una app móvil tenga acceso al hardware de tu dispositivo debo tener un
No es todas las apps pueden
-> Manifiesto de permisos

6. ¿Cuál es el sistema operativo por defecto de un Arduino?
No es Linux
-> Ninguno

7.Para tener una imagen con calidad de color de 32 bits, cada pixel debe ser representado con
No es 32 bytes
-> 4 Bytes

8. ¿Cuál de estos no es codec de vídeo?
No es divx
-> mp4

9. Quality of Service es
No es Como los ISP priorizan el tráfico para darte un mejor servicio
-> Como los ISP reforman el tráfico para degradar ciertas conexiones

10. Cuál de los siguientes sistemas operativos tiene un sistema de archivos
No es Android
-> 

11. ¿Qué rango de puertos de red requieren permisos de administrador en el sistema operativo para ser usados?
-> 1 - 1024

12. ¿Cuál no es una característica de discos duros?
-> Almacena los datos de forma temporal

13. Tu computadora personal puede ser un servidor en Internet
-> Verdadero 

14. ¿Qué es un driver?
-> Es el software que permite al sistema operativo interpretar las señales del hardware	

15. ¿Cuántos bits tiene un byte?
-> 8

16. ¿De qué forma fluyen dentro de un computador los ceros y uno?
-> Con pulsos eléctricos

17. ¿En dónde se almacena los archivos del sistema operativo?
-> Disco duro

18. El router asigna ips de forma automática usando el protocolo
-> DHCP

19. La velocidad de los procesadores se mide en
-> Hertz

20. ¿Qué es UNICODE?
-> El estándar que define la tabla entre caracteres y su equivalente en bytes

21. ¿Qué es lo primero que carga un sistema operativo en RAM?
-> Los driver

23. Un contenedor de vídeo es
-> El formato que agrupa el video y audio con un encoding

24. El router de internet de tu casa puede ser un servidor en Internet
-> Verdadero

25. El chip ideal para procesar la representación gráfica de datos en pantalla es
-> GPU

26. ¿Cuál es la IP que normalmente se refiere al mismo equipo o localhost?
-> 127.0.0.1

27. Un Raspberry Pi con wifi puede ser un servidor en Internet
-> Verdadero

28.Tu dispositivo móvil puede ser un servidor en Internet
-> Verdadero

29. ¿Qué es un System-on-a-Chip?
-> Un chip especial que agrupa CPU/GPU y otros chips de un dispositivo

30. ¿Qué es un DNS?
-> es un sistema que asocia los nombre de dominio con la IP del servidor 

31. Uno de los trabajos más importantes de la BIOS es identificar
-> El hardware y periféricos conectados 

32. Si compras una conexión de 100Mbps en teoría cuál es la máxima velocidad de descarga:
-> 12.5MB/s

33. 










Examen 2
Estas son tus respuestas
Puedes revisar y cambiar las respuestas. Al terminar presiona “Calificar respuestas” para enviar las preguntas y conocer tu puntuación.
1.
¿Cuántos bits utiliza una dirección ipv4?
32
CAMBIAR
2.
¿De qué forma fluyen dentro de un computador los ceros y unos?
Con pulsos eléctricos
CAMBIAR
3.
¿Cuántos bits tiene un byte?
8
CAMBIAR
4.
¿Qué es la CPU?
La unidad central de procesamiento
CAMBIAR
5.
El número 27 representado en binario es
11011
CAMBIAR
6.
¿Qué es UNICODE?
El estándar que define la tabla entre caracteres y su equivalente en bytes
CAMBIAR
7.
El procesador solo puede interpretar
Ceros y unos
CAMBIAR
8.
Uno de los trabajos más importantes de la BIOS es identificar
El hardware y periféricos conectados
CAMBIAR
9.
¿En dónde se almacena los archivos del sistema operativo?
Disco duro
CAMBIAR
10.
¿Qué sucede cuando borras un archivo?
Se elimina el índice de la cabecera del sistema de archivos

CAMBIAR
11.
¿Qué es una IP?
Es un número asignado para identificar los computadores en la red
CAMBIAR
12.
¿Cuál es la IP que normalmente se refiere al mismo equipo o localhost?
127.0.0.1
CAMBIAR
13.
El router asigna ips de forma automática usando el protocolo
DHCP 
CAMBIAR
14.
¿Qué rango de puertos de red requieren permisos de administrador en el sistema operativo para ser usados?
1 - 1024
CAMBIAR
15.
¿Qué es un DNS?
Es un sistema que asocia los nombre de dominio con la IP del servidor
CAMBIAR
16.
Si compras una conexión de 100Mbps en teoria cuál es la máxima velocidad de descarga:
~12.5MB/s
CAMBIAR
17.
Si un archivo tiene los permisos 750 que usuarios lo pueden editar
Administrador
CAMBIAR
18.
Para que una app móvil tenga acceso al hardware de tu dispositivo debe tener un
Manifiesto de permisos
CAMBIAR
19.
¿Cuál es el sistema operativo por defecto de un Arduino?
Ninguno
CAMBIAR
20.
¿Cómo un sistema operativo sabe que software usar para un tipo de archivo?
El sistema operativo lee la cabecera del archivo donde encuentra el tipo de archivo y tiene una base de datos que asocia las extensiones con un software
CAMBIAR
21.
Para tener una imagen con calidad de color de 32 bits, cada pixel debe ser representado con
4 Bytes
CAMBIAR
22.
¿Cuál de estos no es un codec de vídeo?
mp4
CAMBIAR
23.
Un contenedor de vídeos es
El formato que agrupa el video y audio con un encoding
CAMBIAR
24.
¿Qué es un System-on-a-Chip?
Un chip especial que agrupa CPU/GPU y otros chips de un dispositivo
CAMBIAR
25.
El tiempo que tarda un servidor en responder una petición se mide en
Milisegundos
CAMBIAR
26.
A nivel físico, la limitación de velocidad de una red depende de
La velocidad de la luz
CAMBIAR
27.
Tu dispositivo móvil puede ser un servidor en Internet
Verdadero
CAMBIAR
28.
El router de Internet de tu casa puede ser un servidor en Internet
Verdadero
CAMBIAR
29.
Cuál de los siguientes sistemas operativos tiene un sistema de archivos
Todos los anteriores
CAMBIAR
30.
Cuando ves algo como:
video/mp4
¿Qué estás viendo?
Un MIME type, una definición de tipo de archivo