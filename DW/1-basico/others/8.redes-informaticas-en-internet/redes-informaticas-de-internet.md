Curso de Redes Informáticas de Internet
----Quetzally Meza----

1. Qué aprenderás sobre redes

Como fue que surgieron las redes computacionales 
Que son
Los tipo
Usos
Modelos principales 
Protocolos de cada capa 
Ejemplo practico 


2. Antecedentes de las redes computacionales

Jose Eduardo Miranda Valderrama

Antecedentes de las redes computacionales

“Los humanos tenemos la necesidad de comunicarnos”, por eso se crearon los teléfonos, las cartas, se utiliza el arte, etc.

Señales de humo/fuego/luz : Un inicio rudimentario por el cuál se hacían comunicaciones a larga distancia. Era inefectivo.

Servicio postal o correo : Un mensaje más detallado, enviando gracias al buzón y al servicio de un punto a otro. Su mayor defecto era cuando las comunicaciones requerían ser urgentes, como en casos de enfermedad o asuntos diplomáticos, ya que este medio podía demorar días en transmitir un mensaje.

Telégrafo : En sus inicios, al rededor de 1800, era conocido como telégrafo óptico. Tenía aspas de madera cuyas posiciones indicaba una letra o número. Esto evolucionó hasta llegar al telégrafo moderno, el cuál utilizaba el código Morse (que realizaba combinaciones de pulsaciones). Se utilizó principalmente para mensajes cortos, y esto era su problema, a pesar de solucionar la transmisión rápida de mensajes.

Teléfono : Se logra transmitir voz de un punto a otro. Al inicio pocos tenían acceso a esta tecnología pero poco a poco se volvió accesible.
Teléfono de disco - Teléfono fijo - Teléfono inalámbrico - Teléfono móvil (1G, 2G, 3G, 4G y pronto 5G)

Radio : Utiliza señales de radio para transmitir, desde un nodo central a varios nodos receptores. A medida que nos alejamos se pierde la comunicación, ya que existe un limitante.

Televisión : Por cable o por antena satelital.

Las señales pueden ser transmitidas por cable o de manera inalámbrica.
En USA, ARPA conduce le proyecto ARPANET al rededor de 1973 junto con unas universidades donde crearon protocolos de comunicación para que pudieran comunicarse computadoras de un punto a otro, inicialmente eran 4 nodos. Son antecesores del internet, por eso se dice que “fue la primera versión del internet”.


3. ¿Qué son las redes computacionales?

Computadoras autónomas interconectadas mediante una sola tecnología.


4. Importancia de las redes computacionales

Andrea Lorena Davila Gomez

¿Por qué son importantes las redes de datos? Hoy en día las utilizamos más que nunca para estar conectados y se puede ver su uso en los siguientes escenarios:

Militar, sistemas gubernamentales y diversas instituciones: En este tipo de instituciones se maneja información confidencial que hay que cuidar, por lo tanto, las redes que manejan en estas instituciones
son mas robustas que las que manejas en tu casa.

Hogar: se tiene solo un dispositivo para conectarte a internet de alguna manera o a través de los datos de tu celular y la protección es relativamente baja, por lo regular ninguna cuenta con un firewall que le ayude a las personas a proteger sus datos

Centros de datos: son lugares donde se almacenan grandes cantidades de datos que son relevantes y es importante que esta información tenga alta disponibilidad, que sea guardada de forma segura
para que solo puedan tener acceso a ella las personas autorizadas.

Escuelas y oficinas: Hoy en día es muy raro ver que no hagan uso de las redes y el internet, quizás en las escuelas primarias aun no se ha masificado su uso.
En las oficinas de trabajo está en juego la información sensible de la empresa por lo que las redes de estos sitios deben contar con niveles de acceso para los usuarios y determinar el acceso a internet.


5. De bits y bytes	

Hola, en esta clase te daré un repaso de lo que son los bits y los bytes. Uno de los conceptos clave, no solo en redes, sino en todas las ramas de la tecnología es el bit. El bit es la unidad mínima de información que se usa en informática, este puede tener dos estados: uno o cero y comúnmente están asociados a que un dispositivo se encuentre apagado o encendido. Esto proviene del funcionamiento del transistor.

Comprender el funcionamiento de los bits nos permitirá realizar conteos u operaciones matemáticas en un sistema que entienden las computadoras: el sistema binario. Este sistema nos permite codificar valores como números, letras o imágenes por series de unos y ceros. Estas series de unos y ceros después serán decodificadas para ser interpretadas en una forma más sencilla y menos abstracta.

Estas series de unos y ceros se podrían agrupar en diferentes longitudes, pero el estándar de agrupación es de una longitud de ocho valores, dando nacimiento a un nuevo concepto: el byte. El byte es una agrupación de ocho bits y con él podemos hacer diferentes combinaciones, activando o desactivando sus bits para obtener múltiples valores numéricos.

1 bit 
8 bits = 1 byte

Formas de trabajar con los bits hay muchas, pero algunos conceptos importantes de estos son los siguientes:

Bit más significativo
Los bits dentro de un byte poseen diferentes valores que van incrementando de acuerdo a su posición. El bit dentro de un byte con el valor más alto se le conoce como el bit más significativo o Most Significant Bit (MSB) por sus siglas en inglés. Este suele ser por convención el bit del extremo izquierdo.


MSB
El 1 es el MSB -> (1) 0 1 1 0 0 0 0 


Valores de los bits en un byte
De nada nos sirve saber cuál es el bit más significativo si no sabemos cuál es el valor de cada uno de estos bits. Ya que un bit solo puede tener dos valores, uno o cero, la forma de contar será a través de potencias de dos. El valor más pequeño estará en el extremo derecho comenzando con dos a la cero y terminando con el bit más significativo con el valor de dos a la siete.

<<<< 2 elevado a la 2 < 2 elevado a la 1 < 2 elevado a la 0

 1  0  1  1  0 0 0 0
128 64 32 16 8 4 2 1

Valor total de un byte
Para conocer el valor total de un byte solo se necesita hacer la suma de los bits que tiene activos (que están en uno) para determinar su valor. Si sumas todos los valores dentro de un byte te darás cuenta de que el valor máximo que puede tener es de 255.

 1  0  1  1  0 0 0 0
128    32 16 

Valor de este byte = 128 + 32 + 16 = 176

¡Excelente! Con estos conceptos básicos ya tienes el dominio básico sobre los bits y bytes. En la siguiente clase veremos la clasificación de las redes computacionales.


6. Clasificación de las redes computacionales

En esta clase se hace mención a WAN como Wireless Area Network, sin embargo debería ser Wide Area Network.


Mauricio Osorio Reyes

Resumen: Clasificación de las redes computacionales

Existen 2 divisiones principales:
- Por la tecnología de transmisión
- Por la escala o tamaño a la que pueda llegar a tener

Para la tecnología de transmisión existen 3 maneras de clasificarlo:
- Conexiones 1 a 1 (Unicast)
- Conexiones 1 a varios (Multicast)
- Conexiones 1 a todos (Broadcast)

Enlaces de difusión (Broadcast)
- Todas las máquinas en la red comparten el canal de comunicación
- Los paquetes que envía una máquina la reciben todas las demás
- Se usa un campo verificador para saber a quién pertenece o si enviar a todos los destinos

Multicast (Uno a varios)
- Algunos sistemas permiten enviar sólo a un subconjunto

Unicast (Enlaces punto apunto)
- Conecta pares individuales de máquinas
- Puede visitar máquinas intermedias entre su origen y destino

Clasificación por escala (PAN, LAN, WAN, MAN)
- PAN: Redes de uso personal (celular, smartwatch, audífonos…)
- LAN: Redes de área local (redes de una cas, escuela, oficina…)
- MAN: redes de área metropolitana(ciudades, espacio entre locales …)
- WAN: Red de área amplia (países o zonas similarmente amplias)


Resumen: Clasificación de las redes computacionales

Existen 2 divisiones principales:
- Por la tecnología de transmisión
- Por la escala o tamaño a la que pueda llegar a tener

Para la tecnología de transmisión existen 3 maneras de clasificarlo:
- Conexiones 1 a 1 (Unicast)
- Conexiones 1 a varios (Multicast)
- Conexiones 1 a todos (Broadcast)

Enlaces de difusión (Broadcast)
- Todas las máquinas en la red comparten el canal de comunicación
- Los paquetes que envía una máquina la reciben todas las demás
- Se usa un campo verificador para saber a quién pertenece o si enviar a todos los destinos

Multicast (Uno a varios)
- Algunos sistemas permiten enviar sólo a un subconjunto

Unicast (Enlaces punto apunto)
- Conecta pares individuales de máquinas
- Puede visitar máquinas intermedias entre su origen y destino

Clasificación por escala (PAN, LAN, WAN, MAN)
- PAN: Redes de uso personal (celular, smartwatch, audífonos…)
- LAN: Redes de área local (redes de una casa, escuela, oficina…)
- MAN: redes de área metropolitana(ciudades)
- WAN: Red de área amplia (países o continentes)


7. Protocolos de red

Mauricio Osorio Reyes

Resumen: Protocolos de red
- La mayoría de redes utilizan una pila de capas para organizarse, cada una se construye a partir de la que tiene debajo
- Cada capa proporciona servicios a la capa superior y oculta detalles de cómo implementa sus propios servicios a la capa inferior
- Los protocolos de red son las reglas que permiten la comunicación y transmisión de información
- Existen dos modelos de comunicación principales divididos en capas y cada capa cuenta con ciertos protocolos

Jerarquía de protocolos
- La jerarquía de los protocolos y su organización en capas, reduce la complejidad del diseño de una red y permite la correcta transmisión de datos.


8. Modelo TCP/IP

Mauricio Osorio Reyes

Resumen: Modelo TCP/IP
1 Es uno de los modelos más antiguos
2 Se hizo para estandarizar la comunicación y evitar errores
3 Cuenta con 4 ramas principales


Capa de interfaz de red
- Nivel más bajo
- La comunicación se da mediante pulsaciones eléctricas 
- Lo importante es la manera en la que están conectadas las cosas

Tiene protocolos como:
ARP
Ethernet
NDP
L2TP

Este protocolo no se encarga de establecer la comunicación entre 2 puntos, únicamente de transmitir en el medio físico

Capa de internet
- Se encarga de realizar la comunicación entre 2 puntos

Tiene protocolos como:
IP
ICMP
IPSEC
IGMP

Capa de transporte
- Sus protocolos principales son: TCP y UDP

TCP:
- Es confiable
- Esta orientado a la conexión
- Se espera que siempre exista la conexión entre 2 computadoras
- Importa la confiabilidad sobre la rapidez

Un ejemplo claro es la transferencia de archivos

UDP:
- No es confiable
- No esta orientado a la conexión
- No se “preocupa” si llegaron o no los datos

Capa de aplicación
Tiene protocolos como:
- FTP
- SSH (Es para las conexiones seguras)
- SMTP
- DHCP (Es una manera de establecer una conexión y verificar que todo ocurrió correctamente)
- DNS (Domain Name System)

¿Qué es un nombre de dominio?
Al entrar en una pagina DNS se encarga de transformar los nombre de dominio a una IP y viceversa


9. Identificando las redes

https://www.internetsociety.org/deploy360/ipv6/

Resumiendo:
IPv4: Consta de 4 octetos de 8 bits cada uno, ósea se multiplicamos 8 x 4 es igual a 32 bits, por eso decimos que un IP V4 tiene 32 bits, como sigue:

Dirección IP -> 127.0.0.1 -> Localhost
              son 4 octetos -> 4 bytes = 8 x 4 = 32 bits

IPV4 -> IPV6 no estandarizado 

 1   1  1  1 1 1 1 1  = 8 bits = 1 byte
128 64 32 16 8 4 2 1  = 255
Recuerda: suma los que tienen 1 pero no los que tienen 0

255.255.255.255 -> Solo puede ir del 0 a un máximo de 255


10. Clases de redes

https://www.icann.org/es

Recuerda que no puedes utilizar las IP que tú quieras, existe un instituto llamado ICANN https://www.icann.org/es que regula el uso de las IP’s a nivel mundial.

ICANN = "Internet Corporation for Assigned Names and Numbers";

CLASE     DIRECCIONES DISPONIBLES      APLICACIÓN 
	        DESDE    -  HASTA
  A	   0.0.0.0	    127.255.255.255   Redes grandes
  B	   128.0.0.0   191.255.255.255   Redes medianas
  C	   192.0.0.0   223.255.255.255   Redes pequeñas
  D	   224.0.0.0   239.255.255.255	 Multicast
  E	   240.0.0.0   255.255.255.255   Investigación 
                     
En estos rangos se tienen diferentes clases de IP’s y según el uso que se le vaya a dar es el lugar donde entraría o la clase donde entraría esa IP.


11. Modelo OSI

Mauricio Osorio Reyes

Resumen: Modelo OSI (Open System Interconection )
Lo utilizamos para explicar y entender una comunicación entre un host y su destino en una red LAN,MAN o WAN.

Además ayuda a categorizar los protocolos

1ra Capa: Física
- Se encarga de los medios de comunicación (Cableado, electricidad … )

2da capa: Enlace de datos
- Se le añade un nivel lógico
- La capa que convertía la información a bits le pasa la información a la capa 2 del enlace de datos

en esta capa:
- Se envían los datos que se convirtieron a bits
- Se le añade información sobre el direccionamiento físico
- llega a la capa de red

3ra capa: Red
- Se hace la definición de ruta y el direccionamiento de información
(Ruta: Camino que va a tomar la información a través de la red )

4ta capa: Transporte
- Se añade la información de la conexión punto a punto y la confiabilidad (Se encuentran protocolos como TCP)

5ta capa: Sesión
- Se establece la comunicación entre dos host

6ta capa: Presentación
- Formatea los datos (para transferirlos a la capa 7)

7ma capa: Aplicación
- Con la que tiene contacto directo el usuario

Adicional:
Se dice no oficialmente que la capa 8 somos los usuarios por lo que al decir “error de la capa 8” se quiere decir “error del usuario”


12. Capa Física

Mauricio Osorio Reyes

Resumen : Capa física
Como su nombre lo indica se refiere a aspectos físicos (Hardware)
- Tipo de cableado
- Confiabilidad
- Transmisión
…

Se trata de transmitir electricidad
**- Nos debemos preocupar por: **
- Los medios de comunicación
- La señalización
- Transmisión binaria a través de un canal
Ejemplo: Si se envía un bit con un 1 se reciba como un 1 o si se envía un 0 que se reciba como un 0

Encontramos protocolos como:
- RS-232
- RJ45 (Cable de cobre que conectas al modem para el internet)
- V34
- 100BASE-TX
- SDH 
- DSL
- 80211 (muy importante)
…


13. El cable de par trenzado

En la clase anterior viste elementos de la capa física y en esta lectura profundizaremos aún más en uno que es fundamental: el cable de par trenzado.

Este es el medio por el cual se transmite información entre dos dispositivos físicos de una red. Fue inventado en 1881 por Alexander Graham Bell y contiene dos conductores eléctricos que están fabricados normalmente de cobre.

Está diseñado para evitar la interferencia externa de señales y la diafonía de otros cables a su alrededor. Al ser un dispositivo físico este se ve limitado en sus propiedades de transmisión por la distancia. El rango en el cual se ve afectada la transmisión de información es de 100 metros.

Categorías del cable de par trenzado
Existen diferentes categorías de cables de par trenzado. Estas categorías están divididas principalmente en las velocidades de transferencia que pueden realizar, su ancho de banda y el blindaje que posee alrededor el cable para asegurar una mejor comunicación. Puedes ver más información en la siguiente tabla:

CATEGORÍA	BLINDAJE	   MAX. VELOCIDAD DE	    	MAX. ANCHO DE 
				   TRANSFERENCIA (100M)	BANDA
Cat 3		Sin blindaje  	10 Mbps			16 MHz
Cat 5		Sin blindaje  	10/100 Mbps		100 MHz
Cat 5e	Sin blindaje	1000 Mbps / 1 Gbps	100 MHz
Cat 6		Sin blindaje	1000 Mbps / 10 Gbps	>250 MHz
		o blindado		
Cat 6a	Blindado		10000 Mbps / 10 Gbps	500 MHz
Cat 7		Blindado		10000 Mbps / 10 Gbps	600 MHz
Cat 8		Blindado		25 Gbps / 40 Gbps	2000 MHz
					(Solo a 30 m)

Las categorías que se usan normalmente para crear cables de red Ethernet son de la categoría 5 a la categoría 6 por su costo y manipulación. Los cables de categorías superiores se usan en otro tipo de infraestructuras, además de que su costo es mucho más elevado.

Para conectar dos dispositivos físicos en la red es necesario que al final de estos cables se inserte un conector RJ-45. Este conector cubrirá los 4 pares trenzados de cables asignando un pin a cada filamento, en total 8 pines numerados de la siguiente forma:

imagen.png -> Revisar pdf

	cobre		8
7	cobre		
	cobre		6
5	cobre		
	cobre		4
3	cobre		
	cobre		2
1	cobre		

Crear la conexión de pines en un conector RJ-45
Existen diferentes estándares que se pueden seguir para configurar el orden de los cables dentro de un conector RJ-45, los más comunes son el estándar T568A y T568B, el estándar más común de usar es el T568A. La única diferencia entre estos dos estándares es la posición de los cables verdes y naranjas cómo se ve a continuación:


		----	 Par 2  ----
 Par 3	|	 Par 1	|	 Par 4
|	|	|	|	|	|	|	|
+	-	+	-	+	-	+	-	
1	2	3	4	5	6	7	8
VB	V	NB	A	AB	N	CB	C

--> Norma T568A

		----	 Par 3  ----
 Par 2	|	 Par 1	|	 Par 4
|	|	|	|	|	|	|	|
+	-	+	-	+	-	+	-	
3	6	1	4	5	2	7	8
NB	N	VB	A	AB	V	CB	C

--> Norma T568B

-----CABLES-----			-----DISTRIBUCIÓN-----
VB: Verde-Blanco			Par 1 + Azul-blanco
V: Verde					 - Azul
NB: Naranja-Blanco		Par 2 + Naranja-blanco
A: Azul 					 - Naranja
AB: Azul-Blanco			Par 3 + Verde-blanco
N: Naranja					 - Verde
CB: Café-Blanco			Par 4	 + Café-blanco
C: Café 					 - Café 

Una vez tienes configurados los pines dentro de tu conector, lo siguiente es sellar los cables con los pines a través de una herramienta especial llamada pinza ponchadora.

Sin embargo, la información que sabemos hasta ahora no es suficiente para que nuestro cable de red funcione, para ello debemos saber si los dispositivos son del mismo tipo, por ejemplo de un PC a otro PC. Si estos son diferentes (de un PC a un router) se usa una configuración diferente en cada extremo. Dependiendo del caso usaremos un cable directo o un cable cruzado.

Cable directo
Este cable se utiliza cuando queremos conectar un dispositivo de la red a un dispositivo de enrutamiento, como puede ser el caso de nuestra computadora al router de nuestra casa. Como puedes notar ambos dispositivos son diferentes.

La configuración de pines debe ser la misma en ambos extremos del cable, por lo que su dirección no cambia, ya sea que uses el estándar T568A o el T568B. En la siguiente imagen puedes ver un ejemplo más claro:

		Extremo 1
1	2	3	4	5	6	7	8
VB	V	NB	A	AB	N	CB	C
		Estándar T568A
		

		Extremo 2
1	2	3	4	5	6	7	8
VB	V	NB	A	AB	N	CB	C
		Estándar T568A


Cable cruzado
Este cable se utiliza cuando queremos conectar dos dispositivos similares, como dos computadoras, dos routers o dos hubs. Se llama cruzado pues la dirección cambia de un extremo a otro.

La configuración de pines debe ser diferente en ambos extremos del cable y es aquí donde vemos la utilidad de que existan dos estándares diferentes. En un extremo usaremos el estándar T568A y en el otro el T568B. En la siguiente imagen puedes ver un ejemplo más claro:


		Extremo 1
1	2	3	4	5	6	7	8
VB	V	NB	A	AB	N	CB	C
		Estándar T568A


		Extremo 2
3	6	1	4	5	2	7	8
NB	N	VB	A	AB	V	CB	C
		Estándar T568B


Ahora ya sabes de qué está hecho un cable de red y la importancia que tiene dentro de la capa física, incluso si quisieras podrías crear uno. Dejaremos eso para otra ocasión, y continuaremos explorando las diferentes capas de red.

¡Nos vemos en la siguiente clase!


14. Capa de enlace de datos

Resumen: Capa de enlace de datos
- Su principal propósito es el direccionamiento (aquí se encuentran protocolos como MAC)
- Para evitar que la información que pasa de la capa 1 a la capa 3 tenga errores es que se divide la información en tramos (Si es confiable mandara un mensaje de confirmación)
- La capa de enlace de datos también se tiene que preocupar por el control de acceso
- Esta capa al tener por ejemplo un emisor que envía mucha información y un receptor que recibe muy poca información evita que el receptor se inunde de información.
(Se encuentran protocolos como: Ethernet, 802.11, MAC …)


15. Direccionamiento Mac

En clases anteriores aprendiste cómo se pueden identificar dispositivos dentro de una red a través de la dirección IP, sin embargo, esta no es la única forma.

Cuando queremos mandar información a través de una red que comparte recursos se envía a través de un paquete. Este paquete tiene definido un receptor específico, y solo este receptor debe procesar el paquete para que el envío de información no se vea comprometido.

Para recuperar los paquetes que se envían a través de la red se debe realizar un proceso conocido como demultiplexación, que consiste en separar los diferentes paquetes que viajan en la red para que los procese el receptor. Este proceso de demultiplexación requiere una dirección para llevarse a cabo.

La IEEE desarrolló un esquema de direccionamiento, donde a cada dirección se le asignan 48 bits, denominado como dirección de control de acceso al medio (dirección MAC). La razón por la que las direcciones tienen 48 bits es debido a que se originó junto con la tecnología Ethernet. Esta dirección MAC o también conocida como dirección Ethernet, es asignada por la IEEE a cada pieza de hardware de interfaz de red que existe, es decir, a cada dispositivo que se puede conectar a una red.

Lo mejor de tener un identificador de red para cada dispositivo de manera física es que la IEEE en vez de asignar de manera individual una dirección MAC a cada dispositivo, lo que hizo fue dividir la dirección en dos bloques.

El primer bloque de la dirección consta de 24 bits (3 bytes) que son el identificador único de la organización (OUI). En pocas palabras este identificador sirve para conocer quién es el fabricante de la tarjeta de red.

El segundo bloque cuenta igual con 24 bits que corresponde al controlador de interfaz de red (NIC), mejor conocido como tarjeta o interfaz de red. Este último bloque es asignado por la IEEE cuando se fabrica el dispositivo.

La forma en la que está constituida esta dirección puede verse en el siguiente diagrama:

	3 bytes					3 bytes
Identificador único de	Identificador del controlador
  organización (OUI)			   de red (NIC)
	

Al contrario de las direcciones IP que son representadas a través de una notación decimal en un conjunto de 4 bytes. Las direcciones MAC se representan a través de 6 bloques de 8 bits cada uno en el sistema hexadecimal. Por ejemplo AA:AA:AA:BB:BB:BB, donde los bloques con la letra “A” representan el espacio del OUI y los bloques con “B” identifican al NIC.

Con esto tienes los conocimientos necesarios para describir lo que es una dirección MAC y cómo es que está asociada a todos los dispositivos conectados de manera única a una red. ¡Nos vemos en la siguiente clase



---Apuntes---
Para ver la MAC, IP y otros datos:

Windows:
-> ipconfig
o para ver todo
-> ipconfig /all

Linux:
El conocido:
-> ifconfig
El moderno: ip address
-> ip a

Ej:
-> ip a s eth0
Donde eth0 es el nombre de la interfaz; “s” es show.

Nota: este comando funcionará siempre, ya que no requiere instalación como en algunos casos lo requiere ifconfig.

MacOS:
-> ifconfig | grep "inet " | grep -v 127.0.0.1
Este comando se encarga de eliminar el localhost 127.0.0.1 que es el bucle de retroalimentación y siempre aparece sin importar qué máquina estés usando. Ifconfig sólo dará mucha más información pero puede ser innecesaria.


16. Capa de red

Se dedica la definición de ruta y direccionamiento de los paquetes.

En la capa 1 la electricidad de convertía en bits luego en la capa 2 convertía estos bits en tramos y en la capa 3 estas tramas serán convertidas en paquetes porque así es como la información tiene que viajar a través de la red, en forma de paquetes 

Hay rutas estáticas y definidas de manera dinámica 

Cuando diseñes esta capa tienes que preocuparte por temas de congestionamiento de paquetes, es decir que pueden haber problemas en una conexión de una red a otra o dentro de una misma red al enviar los paquetes, puede que el receptor no pueda aceptar tantos paquetes o no pueda aceptar nada, puede que los protocolos de un punto a otros no sean compatibles y todos estos problemas deben ser solucionados aquí.

La manera en que esta capa es diseñada debe buscar una solución a todos estos problemas.

Protocolos
- IP: busca direccionar a distintas computadoras dentro de internet 
- ARP
- IPsec
- ICMP
- IGMP
- OSPF
Son los protocolos que dan vida a internet 


17. Capa de transporte

Es la capa 4, aquí hay una división importante ya que las 3 primeras habían trabajado como un bloque 

Resumen: Capa de transporte
- Se tienen verdaderas conexiones de extremo a extremo (de un host a otro)
- Tiene como objetivo las conexiones punto a punto y la confiabilidad
- La confiabilidad tiene 2 protocolos principales, uno esta orientado a la confiabilidad y el otro no:
	-> TCP: Hace una confirmación al enviar archivos
	-> UDP: solo envía los datos
- Una de las tareas principales es que la capa de arriba envía la información y busca que la misma se transmita correctamente a la capa de abajo.
- Se encuentran los siguientes protocolos: SSL y TLS
	-> Hablan de la seguridad de la conexión (Encriptado, viajar por un canal seguro …)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
18. Capa de sesión

Resumen : Capa de sesión
- Su objetivo es la comunicación entre hosts
- Establece una sesión de un punto a otro
- Al diseñarla se tiene que tomar en cuenta el control de la transmisión (¿Quién envía? ¿Quién recibe? )

Tokens:
- Solo se usan una vez
- Se utilizan para acceder
- Solo tu la puedes conocer
- Es única para ti

Sincronización:
- Esto se refiere a que esta capa tiene que ser diseñada de tal manera de que al enviar un mensaje, y este sea interrumpido, pueda recuperarse de esta interrupción y continuar desde donde se quedo.

Protocolos: 
- Establecer sesión con TSP
- SIP
- RTP
- RPC


19. Capa de presentación

Resumen: Capa de presentación.
- Su objetivo es la representación de datos

Protocolos:
- HTML
- DOC
- JPEG
- MP3

En esta capa se formatean los unos y ceros (de acuerdo al protocolo que corresponde al formato del archivo) y se acumulan de una forma que sea entendible para nosotros como humanos



20. Instalación de Wireshark

Wireshark es un programa que nos sirve para capturar el tráfico de nuestra red y poder inspeccionar los diferentes paquetes que viajan por ella. Su instalación es bastante sencilla por lo que a continuación te explico cómo puedes instalarlo en cada uno de los diferentes sistemas operativos.

Windows y macOS
Wireshark tiene su propio ejecutable de instalación rápida para cada uno de estos sistemas, por lo que sólo tendrás que dar clic en instalar para que funcione correctamente. Solo debes dar clic en este enlace (https://www.wireshark.org/download.html) para descargar dependiendo de tu sistema operativo.

Ubuntu/Debian
Para instalar Wireshark en Ubuntu primero asegúrate de actualizar tus repositorios con:

sudo apt update

Una vez termine el comando de ejecutarse, instala Wireshark como cualquier otro programa desde la terminal con:

sudo apt install wireshark

Después solo búscalo en el menú e inicia la aplicación.

Si al momento de querer capturar tráfico no te permite continuar debido a un error en los permisos de ejecución, entonces puedes correr Wireshark directo desde la terminal como superusuario con:

sudo wireshark

Esto se debe a que Wireshark usa tu tarjeta de red con permisos de administrador para poder escanear el tráfico.

¡Listo! Con esto ya cuentas con Wireshark. Nos vemos en la siguiente clase para utilizarlo en la capa de aplicación.


21. Capa de aplicación

Ultima capa del modelo OSI

Tenemos el contacto directo con el usuario final
Su objetivo es el procesamiento de red a aplicación 

Protocolos:
- Telnet -> Tiene problemas de seguridad
- FTP -> Añade aspectos de seguridad
- EMAIL -> POP y SMTP (usado en la actualidad)
- DNS -> Protocolo de nombres de dominio dedicado a traducir los nombres de dominio a una IP 
- WWW/HTTP -> Usado en el mundo de la web (wireshark)
- Transferencia de archivos


https://wiki.wireshark.org/SampleCaptures
Descargar:
-> http.cap A simple HTTP request and response


22. Comparación entre ambos modelos

- A pesar de tener mas o menos capas ambos tratan de cumplir las mismas funcionalidades 
- En TCP/IP una misma capa se encarga de cumplir varias funciones 
- OSI hace buena diferenciación entre servicios, interfaces y protocolos
- TCP/IP no fue bien planeado

 MODELO TCP/IP				MODELO OSI
PROTOCOLOS				CAPAS DE APLICACIÓN
- Aplicación 			- Aplicación 
- Transporte			- Presentación
REDES					- Sesión
- Internet 			- Transporte
- Acceso a red			CAPAS DE FLUJO DE DATOS
					- Transporte
					- Red
					- Enlace de datos
					- Física


23. Conoce los dispositivos de redes y cómo funcionan

Resumen: Conoce los dispositivos de redes y cómo funcionan

Hub y switch
- Se inventaron hace muchos años (desde los inicios de las redes computacionales)
- Solo funcionaba como repetidor o distribuidor de una red
- Aquí llegaban todos los paquetes y luego se distribuían a las maquinas

Modem:
- Provee internet
- Convierte señales análogas a eléctricas y viceversa
- Puede ser acompañado de repetidores de señal

Firewall:
- Puede ser lógico
- Protege el modem o subida de internet
- Con señales externas este puede decidir si pueden pasar, debe ser bloqueada o alguna acción correspondiente

Balanceador de trafico.
- Distribuye todo el trafico de red que se esta recibiendo mediante ciertas técnicas.
(Se tienen dos esquemas: activo-activo y activo-pasivo)

Activo-activo:
- Tienen “n” numero de servidores y distribuyen el trafico por igual en estos servidores

Activo-pasivo:
- Tiene un clúster activo (el que esta trabajando) y un clúster pasivo.
Cuando el clúster principal se sobrecarga se lleva la carga al clúster pasivo


24. Creando arquitecturas de redes

instalarse Packet Tracer


Hacer diagramas de redes de forma online:
https://app.diagrams.net/
https://creately.com/lp/network-diagram-software-online/
https://online.visual-paradigm.com/diagrams/solutions/free-network-diagram-software/
https://www.smartdraw.com/network-diagram/network-diagram-software.htm


25. Ejemplo de una red empresarial




Resumen:
https://www.notion.so/Redes-Inform-ticas-de-Internet-5b5046dd4c864d97bc52f9ccad7fbffb


Mauricio Osorio Reyes




---EXAMEN----

1. ¿Cuál es el dispositivo de red envía los paquetes solo al dispositivo receptor correspondiente?
-> Switch

2. ¿Qué es un protocolo de red?
-> Son reglas que permiten la comunicación y transmisión de la información

3. ¿Cuáles son los dos identificadores principales de la dirección MAC?
-> Identificador único de organización (OUI) y el Identificador del controlador de red (NIC)

4. ¿Cuál es la capa donde se realiza el direccionamiento físico?
-> Capa de enlace de datos 

5. El modelo OSI cuenta con __ capas
-> 7

6. ¿Cuáles son las capas del modelo TCP/IP?
-> Capa de red, capa de internet, capa de transporte y capa de aplicación.

7. Si un protocolo de transferencia de archivos está activo, ¿En que capa se encuentra?
-> no es Transporte no es Sesión Es capa de aplicación 

8. ¿Cuál es el nombre de la primera red que se creó entre universidades?
-> ARPANET

9. ¿Para qué nos sirve la dirección IP?
-> Identificar un dispositivo en una red

10. según su clasificación, ¿Cuál es la red más grande?
-> Internet

11. ¿En qué capa las tramas se convierten en paquetes?
-> C

12. ¿En qué capa las tramas se convierten en paquetes?
-> Capa de red

13. ¿Cuál es la diferencia entre el estándar de configuración T568A y T568B?
-> La posición de los cables verdes y naranjas

14. ¿Cuál es el dispositivo que sirve para proteger de manera física la red?
-> Firewall

15. ¿Qué clase de red es la que cuanta con mayor disponibilidad de red?
-> C

16. ¿De qué se encarga la capa física?
-> Los medios de transmisión físicos y sus señales 

17. El bit más significativo por convención se encuentra siempre al extremo derecho del byte.
-> Falso

18. El bit más significativo por convención se encuentra siempre al extremo derecho del byte.
-> Falso

19. ¿Qué es una red computacional?
-> Computadoras autónomas interconectadas mediante una sola tecnología

20. ¿En qué capa se representan y encriptan los datos?
-> Capa de presentación

21. ¿Cuál es la capa que se encarga de la conexión punto a punto y la confiabilidad del envío de la información?
-> Capa de transporte

22. La comunicación entre dispositivos se realiza en la capa de:
-> Sesión 







