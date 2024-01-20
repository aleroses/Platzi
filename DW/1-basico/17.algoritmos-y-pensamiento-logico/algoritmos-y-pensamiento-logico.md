# Curso Básico de Algoritmos y Pensamiento Lógico

> --- Ana Belisa Martínez ---

1. La importancia de entrenar tu pensamiento lógico

¿Alguna vez has pensado cómo optimizar las tareas de tu vida diaria?

2. ¿Qué entiende una computadora?

Sistema binario

3. ¿Qué es el sistema binario?

Convertir 34 a binario:
34 / 2 = 17(queda 0)
17 / 2 = 8(queda 1)
8 / 2 = 4(queda 0)
4 / 2 = 2(queda 0)
2 / 2 = 1(queda 0)
1/ 2 = 0(queda 1)

34 = 100010

Operaciones Aritméticas 

Suma:
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10

  1 
10011000 +
00010101
---------
10101101

Multiplicación y División 

Reto: Traduce el año actual - tu edad para encontrar el año en que naciste

11111100101 -
      11001
-----------
11111001100

4. Metodología para construir un algoritmo: requerimientos y proceso mental

Algoritmos:
Es una serie de pasos ordenados para lograr un resultado, representa la ejecución de un proceso.

Siempre bajo la misma premiso, pasos ordenados para lograr un resultado.

Un algoritmo debe se:
. Preciso: se debe ir paso a paso en un orden lógico para que el resultado se pueda dar de la manera que esperamos. 

. Definido: todas las veces que se ejecuta el algoritmo debemos tener ese mismo resultado.

. Finito: tenemos un procesos de inicio y uno de finalización. 

Los algoritmos se pueden representar:
. Grafico: diagramas de flujo
. No Grafico: lenguajes de programación y metodología 

Metodología:
. Definir el problema
. Analizar el problema
. Diseñar el algoritmo
. Prueba de escritorio 

Ejemplo:
Calcular la hipotenusa de un triangulo rectángulo
-> Problema: Calcular
-> Analizar: De que se trata, de que está compuesto, usando el teorema de Pitágoras
-> Pasos para resolverlo:
	. Necesito el valor de los catetos
	. Elevar al cuadrado el valor de los catetos
	. Sumo los dos valores
	. Saco raíz cuadrada del resultado
	. Imprimo el valor de la hipotenusa
-> Prueba de escritorio:
	h^2 = 3^2 + 4^2
	
Reto:
Diseñar algoritmo para Freír un Huevo

-> Problema: Freír un huevo
-> Analizar: Cosas básicas de cocina, Ingredientes, insumos
-> Pasos: 
	. Necesito una hornilla libre y fósforos 
	. Necesitamos encender la hornilla de la cocina a fuego medio.
	. Colocamos la sartén en el fuego
	. Se le coloca una poca de aceite
	. Esperamos dos minutos máximo para que el aceite se caliente
	. partimos un huevo y lo colocamos en la sartén sin cascara.
	. Agregamos una pizca de sal 
	. Tiempo de cocción varia dependiendo el gusto
	. Apagamos la hornilla y movemos la sartén.
	. Servir
	
-> Probamos
	Usando los pasos anteriores, delicioso aun que le falto sal. 

5. ¿Qué son Bits y Bytes?

En el día a día solemos referirnos a la velocidad de internet, tamaños de archivos, capacidad de dispositivos de almacenamiento, dispositivos móviles y muchos elementos tecnológicos que están dados en términos de bits, bytes, gigabytes, megabytes, etc. Pero, ¿sabemos en realidad a qué estamos haciendo referencia?

Estos términos hacen referencia a medidas de almacenamiento de datos y parten inicialmente de un “bit”, que es la unidad de información más pequeña de una computadora que puede tener solo un estado: 1 o 0. De ahí en adelante seguimos hablando de bits, pero, en mayor medida, con mayor capacidad y mayor magnitud.

¿Qué es un bit?
En la clase de sistema binario estudiamos sobre verdaderos y falsos, cuando hay carga y cuando no hay carga, y aprendimos que esto lo representamos con 1 y 0.

En realidad, el término “bit” es el acrónimo de “binary digit”, que hace referencia a los dígitos binarios que le indican a nuestro ordenador que hay o no carga de corriente. Sin embargo, este es solo el punto de partida porque desde aquí, pero en cargas mayores, empezamos a expresar otras medidas más grandes e incluso más comunes.

¿Qué son bytes?
La definición de bytes concluye que un byte son el conjunto de 8 bits y que a su vez representan el valor de una letra. Sin embargo su valor y significado va más allá de eso, porque de estos 8 bits, 7 son de información y uno adicional es de control.

De esta manera, cuando hablamos de velocidad de internet, por ejemplo, podemos referirnos a 200 kilobits, pero hablar de 200 kilobytes será más adecuado porque esta última cantidad es 8 veces mayor a los primeros 200 kilobits.

6. ¿Qué son variables, constantes y tipos de datos?

Variables: valores que pueden cambiar

Constantes: Valores que no cambian 

Tipos de datos: 
. Numero
	Entero, Decimal
. Texto
	Cadenas, Caracteres
. Lógico
	True, False
	
7. Identifica las variables según los requerimientos de negocio

Es momento de identificar qué variables necesitarás para resolver las siguientes situaciones.

Cajero electrónico:
Qué variables necesito para llevar a cabo el funcionamiento de un cajero automático en el cual solo realizaré la acción de sacar dinero en efectivo.
	
var montoRetirar;
var montoCajero;
var cantidadBilletes;
var billetesEntregados;
var montoEntregado;


Usar un chat:
Qué variables debo tener en cuenta para hablar con un amigo a través de una aplicación de mensajería instantánea, teniendo en cuenta que solo le puedo enviar mensajes si está conectado a la aplicación.

var conectado;
var mensajeRecibido;
var mensajeEntregado;
var mensajeEnviado;

Pagar con tarjeta de crédito:
Estás en la caja de un supermercado y necesitas realizar el pago de tus productos usando una tarjeta de crédito porque es el único medio de pago que reciben. ¿Qué variables necesitas?

var saldoTarjeta;
var montoPagar;
var montoProducto;

Lavar la ropa:
Necesitas lavar tu ropa, pero debes tener en cuenta los diferentes factores que necesitarás para llevar a cabo esta tarea. ¿Tienes lavadora? ¿Lo harás a mano? ¿Qué necesitas?

var detergente;
var lavadora;
var manual;
var agua;
var electricidad;

Hablar por teléfono:
Es momento de llamar a un amigo por teléfono, debes tener en cuenta varios puntos importantes: ¿Tienes teléfono? ¿Está tu amigo disponible? ¿Qué necesitas para realizar esta llamada?

var movil;
var amigoDisponible;
var saldo;
var señal;
var batería;

8. Strings (texto) y concatenación

stringUno = "Yo soy una cadena de texto";

stringsDos = "Hola";

concatenación = stringDos + stringUno

Char vs String

´H´ - Carácter
'Hola' - Cadena

9. Números y operaciones matemáticas básicas

int, float, short, long

suma = valor + valor;
resta = valor - valor;
Multiplicación = valor * valor;
división = valor / valor;

El tipo de dato puede afectar el resultado

10. Operaciones matemáticas compuestas: paréntesis y orden de evaluación

5 - 3 * 2 + 4 - 4 / 2
primero la multi y luego la div

paréntesis primero

10. True y false: booleanos y tablas de la verdad

Composición:
Valor 1	Valor 2	Conectiva Lógica
  V		  F		   Resultado
  F		  V	        Resultado


Negación:
Una proposición que es verdadera es falsa.
P	-p
V	 F
F	 V

Conjunción
Es verdadera solo si ambas son verdaderas, y es falsa cuando al menos uno de los valores es falso.
P	  q		p^q
V and   V		 V
V and   F		 F
F and   V		 F
F and   F		 F

Disyunción inclusiva
Es verdadera cuando por lo menos una es verdadera; de lo contrario, será falsa.

p		q 	pvq
V 	or 	V	 V
V 	or 	F	 V
F	or 	V	 V
F	or 	F	 F

Disyunción exclusiva 
Es falsa si ambos componentes son verdaderos o falsos.
p		q 	pvq
V 	xor 	V	 F
V 	xor 	F	 V
F	xor 	V	 V
F	xor 	F	 F

Condicional 
Devuelve falso cuando el primer valor es verdadero y el segundo falso.
p		q 	pvq
V 	then 	V	 V
V 	then 	F	 F
F	then 	V	 V
F	then 	F	 V

Bicondicional
Es verdadera cuando ambas proposiciones son verdaderas o ambas falsas.
p		q 	pvq
V 	if 	V	 V
V 	if 	F	 F
F	if 	V	 F
F	if 	F	 V

11. Arrays y funciones sobre arrays

Conjunto de elementos del mismo tipo ordenados en fila

0 1 2 3 4 5 6 7 8 9
s f s f s f s f s f

12. ¿Cómo diseñar algoritmos con diagramas de flujo?

1 Inicio / Fin -> Circulo rectángulo
2 Línea de flujo -> Flechas
3 Entrada / Salida -> rectángulo inclinado
4 Proceso -> Rectángulo
5 Decisión -> Rombo

Pitágoras
1 inicio
3 a, b
4 (a^2 + b^2) 
4 h = Raíz a + b
1 fin

Reto: Representa el funcionamiento de un reloj.

13. Define el tipo de dato según los requerimientos de negocio

Es momento de aplicar lo aprendido y que identifiques cuántas variables y qué tipo de datos necesitarás para cada uno de los siguientes casos.

Ejercicio 1: Directorio telefónico
Necesitas almacenar tus contactos en una aplicación, para cada uno necesitas: nombre, número telefónico y correo electrónico.

var nombre = ""; string
var nroTelef; int
var e_mail = ""; string

Ejercicio 2: Generando facturas
En tu negocio necesitas emitir facturas que indiquen el nombre del cliente, número de identificación, teléfono, dirección, nombre del producto o servicio, cantidad, valor unitario, valor total por cada producto y valor total a pagar.

var nroFactura; int
var nomCliente = ""; string
var docIdentidad; int
var nroTelef; int
var dirección = ""; string
var nomProducto = ""; string
var cantidad; int
var valorUnd; float
var valorTotalProd; float
var valortotalPagar; float

Ejercicio 3: Control de paso vehicular
En la carretera necesitas controlar el paso de vehículos por una zona determinada. La condición es el pago del servicio; si este se realizó puede pasar, en caso contrario no podrá continuar.

var vahiculos; int
var pagoServicio = true; boolean

Ejercicio 4: Agenda personal
Debes controlar tus compromisos de cada día, para esto realiza una agenda digital que permita mostrar tus espacios de tiempo disponibles y al seleccionar un espacio disponible se solicita nombre, correo electrónico y motivo del agendamiento.

var horaDisponible; boolean
var nombre = ""; string
var e_mail = ""; string
var asunto = ""; string

Ejercicio 5: Sistema de parqueadero
En un parqueadero de bicicletas debes validar si un espacio está vacío, en caso que sea verdadero debes permitir parquear tu bicicleta y almacenar la fecha y hora en la cual fue parqueada para así generar el cobro por minutos. Al finalizar el uso del espacio, debes tomar la fecha y hora nuevamente para calcular cuánto pagarás, teniendo en cuenta que cada minuto que estuvo parqueada costó $1.

var vacio; boolean
var fecha = ""; string
var hora = ""; string
var segundos = int
var minutos; int
var costoMinuto = 1; int

14. If y Else: condicionales y comparaciones para proteger tus algoritmos

Estructuras de control
. Nos ayudan a construir el flujo de nuestras tareas
. If / Else - Switch - While - Do While - For

If / Else
Si algo se cumple pasa algo, sino, pasa otra cosa.

Operadores de comparación:

15. Switch y Case: condicionales en forma de casos
switch(num){
case 1:
	"El num es 1"
break;
case 2:
	"El num es 2"
break;
default:
	"El num es mayor a 3"
}

16. Excepciones y errores: Throw y Try Catch
Son eventos anormales que ocurren durante la ejecución. 

throw: La puedes invocar en el punto que desees.

Try … catch: intenta hacer x pero si falla haz y

finally: lo que sucede después del try y catch

try{
	Decir hola
	}catch(e){
		ups, no pude dcir hola
	}finally{
	¡Todo va a estar bien!
}

17. ¿Qué es un ciclo? While, For y Do While

Ciclo:
Es una estructura de control que ejecuta un bloque de instrucciones de manera repetida.

For:
for(x = 0; x <= 30; x++)

while(x <= 10)

do{
i = i + 1;
saludo
}while(i < 5);

do while se ejecuta al menos una vez

18. Diagrama de flujo con condicionales

19. Diagrama de flujo con ciclos

20. Diseña algoritmos para resolver problemas de tu vida diaria

Los algoritmos nos permiten hacer todo de la manera más optimizada, rápida y tomar decisiones ante diferentes situaciones de nuestra vida. Diseña un algoritmo para cada situación planteada en los siguientes ejercicios. Ten en cuenta las variables, las decisiones y las condiciones que harán de tu algoritmo la mejor solución:

Desplazamiento entre dos puntos:
Realiza un algoritmo que te permita ir de tu casa al supermercado más lejano en tu ciudad, ten en cuenta en qué vehículo irás, si hay semáforos, tiempo de ruta y cuál sería la más óptima para llegar en cuanto a tiempo y recursos.

r1 >= r2 && r1 >= r3;
r2 >= r1 && r2 >= r3;
r3 >= r1 && r3 >= r2;


1 2 3 
1 1 2
1 2 2
1 3 3

Pedir comida a domicilio:
Realiza un algoritmo para pedir comida a domicilio, ten en cuenta que debes buscar primero el medio de contacto hacia el lugar donde deseas ordenar.


Hacer mercado:
Realiza un algoritmo para ir a realizar el mercado que falta en tu casa, ten en cuenta primero determinar qué elementos te faltan, qué debes hacer paso a paso para llegar al supermercado, seleccionarlos, pagar y volver.


Poner a cargar tu celular:
Realiza un algoritmo para cargar tu celular, ten en cuenta si estás cerca de la energía, si tienes el cargador cerca y si tu celular necesita carga o no.

21. ¿Qué es una función?
Bloques de código que realizan una actividad específica

¿Para que sirven?
. Modularizar
. Optimizar
. Organizar 
. Encapsular 

function decriHola()
	return "hola";
	
	
Función con parámetro
function muestraNombre(nombre)
	return nombre;
	
function suma(valor1, valor2)
	return valor1 + valor2;

valor1 y valor2 son los parámetros de la función.

Argumentos
suma(3, 1)
3 y 1 son los argumentos, o sea, el valor que se le asignó a los parámetros al usar esa función.

Las funciones deben ser puntuales y ocuparse de una sola tarea.

22. Modularización de código

Necesitas tener tu código modularizado.
Deja que cada bloque haga una tarea particular.
Esto permitirá que sea escalable

Seguramente estará optimizado
Reutiliza y dinamiza
A nivel de funciones y archivo

23. Flujo de funciones para encapsular algoritmos

Ahora que ya has aprendido cómo se crean las funciones, te reto a resolver los siguientes ejercicios donde encontrarás requerimientos muy puntuales para que los conviertas en algoritmos y los pases a funciones que realicen la actividad.

24. Nomenclaturas de programación: camelCase, PascalCase, snake_case

Las nomenclaturas son formas de llamar a elementos, sentencias o acciones más específicas. En programación tenemos diferentes formas que a veces son aplicadas como “reglas” sobre las cuales llevamos uniformidad en el código y un estándar de trabajo especialmente dentro de equipos de desarrollo de software.

camelCase o CamelCase
Es una práctica de escritura que consiste en la unión de dos o más palabras sin espacios entre ellas, pero las diferencian una letra mayúscula inicial a partir de la segunda palabra, por ejemplo: miNombreEs.

Este nombre está dado porque forman con las letras mayúsculas iniciales la estructura de un camello que sube cuando hay un inicio de palabra y baja durante su definición.

PascalCase
Es similar a camelCase con una variación bastante simple: desde la primera letra de la frase se inicia con mayúscula cada palabra, sin embargo se mantiene la práctica de no tener espacios entre palabras y cada palabra siempre empieza con su primera letra mayúscula. Por ejemplo: MiNombreEs.

snake_case
La nomenclatura “serpiente” es definida de esta forma porque siempre la usamos sobre el piso, esto quiere decir que las letras siempre las minúsculas y las diferentes palabras que compongan el nombre o la definición que se desea dar están separadas por un guion bajo de esta forma: mi_nombre_es.

Te invito a la siguiente clase para que aprendas qué es recursividad y cómo entrenar nuestro pensamiento para pensar recursivamente.

25. ¿Qué es recursividad? Funciones que se llaman a sí mismas

Hay que tener precaución porque pueden ser infinitas

Lo mejor es condicionarlas y usarlas sabiamente

cuentaRegresiva(numero):
	numero -= 1;
	
	if numero > 0:
		muestra numero
		cuentaRegresiva(numero)
	else:
		muestra "Feliz año nuevo"

25. Convierte algoritmos con ciclos a funciones recursivas

Ejercicio 1
Escribe una función recursiva para un timer que cada 5 minutos se agregue 10 minutos más a su cuenta total.


function agregarMinutos(contador, suma)
{
	var contador = 0; 
	var suma = 0;
		
	if(contador >= 0)
	{
		contador = contador + 1; 
		agregarMinutos(contador, suma);
	}
	if(contador % 300 == 0) // 60 seg * 5 min = 300
	{
		suma = suma + 600; // 60 seg * 10 = 600 seg
		document.write(suma / 60 + " minutos");
	}
}

26. ¿Cómo desarrollar tu lógica de programación?

Programar es un arte más complejo que solo seguir instrucciones

Muchas personas piensan que aprender programación es tan simple como seguir una receta para preparar platillos de cocina, pero no se trata de seguir instrucciones y listo. ¡Es mucho más! ¡Creaste una nueva aplicación!

En la programación es muy raro que uno haga esto, luego aquello y ya está todo funcionando. En esta carrera es necesario inspirarnos, ser muy creativos y desarrollar ideas para encontrar una solución funcional.

Al trabajar en la resolución de un algoritmo desconocido será muy complicado encontrar una solución a la primera sin antes analizar el problema, lo que te llevará a inventar ese código que dará la solución al algoritmo que antes era desconocido para ti… pero ya no lo es más.

En este punto tal vez piensas que eso va a ser imposible para ti. Respira profundo, eso no pasa de la noche a la mañana. La lógica de programación es una habilidad que puedes desarrollar y entrenar.

¿Cómo se desarrolla la lógica de programación?

Puedes realizar juegos mentales, acertijos, resolver puzzles… hasta aprender matemáticas, sí, las matemáticas que no te gustaron en la secundaria (o el tan odiado -por algunos- libro de Álgebra de Baldor) son herramientas que te ayudarán con esta tarea.

Creo que apenas mencioné matemáticas te dejo de gustar la idea. Pero siempre hay formas más amigables como lo es resolver puzzles ¿No sabes cuáles o dónde encontrarlas? Si tienes un celular en la tienda de aplicación de tu teléfono, te aseguro que encontrarás muchísimas opciones.

En lo personal yo te sugeriría que buscarás algún Sudoku, pero si los números no son lo tuyo, te sugiero que pruebes Nonogram. Esta aplicación tiene varios tableros de rompecabezas y en ellos lo que tienes que hacer es colorear las celdas correctas de una cuadrícula, de acuerdo con los números a los lados de la misma, todo esto con el fin de revelar una imagen oculta.

¿Conoces más aplicaciones? ¿Cuál es tu favorita? Compártela en los comentarios de esta clase para que podamos conocer más y quizás descubrir nuestro siguiente juego de lógica favorito.

Si tienes algún otro método con el que disfrutes de desarrollar esta habilidad llamada lógica, también compártelo en los comentarios, nos encantaría saber cómo lo haces tú.

27. Resolviendo acertijos
Tu lógica de programación también se puede entrenar con acertijos

Acertijos
1. El camino del monje
Un monje parte al amanecer de su monasterio hasta la cima de una montaña, donde llega tras un camino de varias horas. Se queda a descansar, dormir y sale por la mañana 
de la montaña a la misma hora para regresar a su monasterio.

Es posible que no tardara lo mismo en ir que en volver y da igual que su velocidad no fuera constante o cuándo/cuántas veces pare a descansar: el monje pasó por algún punto del camino exactamente a la misma hora, pero con un día de diferencia. ¿Por qué?

2. La sucesión más difícil
¿Qué número sigue en esta sucesión numérica: 

1 - 2 - 4 - 5 - 8 - 1000     1001     1003     1004     1007
  1   2   1   3  1992     1        2        1        3


28. Diferencias entre lenguajes de programación

No te quedes con un lenguaje

Diferencias sintácticas

Finalización de líneas

Tipado: Definir de que tipo es cada variable

Indentación

Corchetes

La lógica es lo más importante

Curso de Prework

29. Cómo escribir código en cualquier lenguaje de programación

1. Descarga e instala tu lenguaje de programación
2. Escribe tus algoritmos con un editor de código
-> IDE (Entorno de desarrollo integrado)

https://replit.com/learn
C@%$@d0 @8u##1d0


29. Cómo programar en JavaScript, Python y PHP
Variables
En JavaScript encontrarás que var, let y const.
Si defines una variable usando “var” tendrás un alcance global, esto quiere decir que el valor de esa variable podrá ser accedido, alterado o bloqueado por procesos dentro del documento donde lo hayas definido.

“let” tiene un alcance más corto y solo estará disponible dentro del bloque de código donde fue definido, de esta manera puedes tener otra variable fuera de ese alcance incluso con el mismo nombre y valor pero no se cruzarán ni generarán conflicto alguno.

Con el uso de “const” hay un punto interesante porque estamos haciendo referencia a un valor que será de sólo lectura, es decir, que esta variable no podrá ser reasignada. Por lo tanto, debemos hacer un uso adecuado correspondiente a su naturaleza.

Para el caso de PHP, se define una variable usando el signo $ seguido del nombre que le des. Además, no es obligatorio definir variables antes de inicializarlas para poder usarlas (aunque ésta sea una buena práctica), por ejemplo:

En lugar de escribir:


$saludo;

$saludo = “Hola, soy un saludo”;

Puedes escribir:


$saludo = “Hola, soy un saludo”;

$numero = 8;

$nombre = “Juanito”;


Funciones
Para definir funciones hay una similitud muy marcada entre JavaScript y PHP porque su estructura base es simplemente escribir la palabra reservada “function” seguido por el nombre de la función y paréntesis que bien pueden estar vacíos si no recibe ningún valor o incluir los parámetros separados por comas.

Sin embargo, en PHP puedes definir el alcance de la función; si será pública, privada o estática, pero si no se lo indicas explícitamente, de manera automática se creará pública.

Con Python esta definición es distinta, pues solo utiliza “def”, seguido por el nombre de la función y los parámetros que recibe, al igual que los lenguajes anteriormente mencionados. Adicionalmente, un bloque de código no empieza por las típicas llaves, sino por dos puntos ( : ) que indican que debajo empiezan sus instrucciones a ejecutar.

Estructuras de control
Cómo ya has visto, cada lenguaje tiene su propia forma de escribir las cosas. No obstante, las estructuras de control son un punto en común. A pesar de que las instrucciones empiecen con llaves, con dos puntos o que las líneas de código terminen en punto y coma o no, la forma del contenido en las estructuras de control no cambia su lógica, suceden de la misma forma y ofrecen el mismo servicio en los tres lenguajes.

El condicional “if” en todos los casos evalúa una condición basada en operadores lógicos de comparación. Los ciclos también siguen con este mismo patrón porque incluso su definición cumple con la misma estructura y respetan la forma en la cual funciona. Es esta la magia de saber programación primero que un lenguaje específico.

El proceso de debugging
El muy conocido debugging o depuración es una actividad que realizamos cuando estamos probando un código en un punto muy específico del cual necesitamos ver un resultado o una salida en consola para conocer específicamente qué puede estar pasando en un punto crítico de nuestra aplicación.

Para realizar esta inspección, utilizamos normalmente alguna instrucción que nos muestre algo que definamos y dependiendo del lenguaje que utilicemos contamos diferentes herramientas.

En JavaScript existe el muy popular console.log() que dentro de sus paréntesis recibe el valor que va a mostrar justo cuando la ejecución de la aplicación llegue a donde está ubicado y mostrará este valor en consola. Sin embargo, no es el único método pues también se puede utilizar debugger para detener la ejecución de la aplicación justo en el punto donde lo hayamos ubicado.


console.log(“Quiero ver esto en consola”)

Con PHP hay varias formas y la que utilices dependerá del contexto en el cual quieres ver este mensaje o valor de referencia para la depuración además del tipo de dato que devolverá.

Se puede hacer uso de “echo” que es la forma más clásica de mostrar cadenas de texto en PHP. Sin embargo, no será útil si deseas mostrar valores de tipo objeto o algo más complejo, en este caso puedes usar var_dump para conocer el tipo de dato que devuelves o print_r para imprimir lo que sea que traiga.


echo “Quiero ver esto cuando el código pase por aquí”;

var_dump($soyunavariable);

print_r([“Hola”]);

Python, por supuesto, también ofrece herramientas para hacer esta actividad de depuración, como es el uso de la librería pdb, con la cual se pueden crear breakpoints sobre los cuales hacer pausas en la ejecución y probar esas fracciones de manera fácil y controlada.

Puedes igualmente usar el clásico “retorno de mensajes”, pero también tienes una herramienta que lo puede hacer por ti.

Métodos de arrays
Con todo lo que has aprendido, ya puedes entender que la programación es la base y los lenguajes solo son caminos sintácticos que pueden ayudarte en ciertos proyectos o necesidades muy específicas.

Los arrays son secuencias de valores contenidas en un mismo espacio y además comparten su mismo tipo, pero, además de ello, pueden ordenarse, medirse, accederse y realizar muchas acciones más.

En todos los lenguajes lo puedes hacer pero variará la sintaxis que debas usar para lograrlo, algunos métodos de arrays que encontrarás:

Upper para pasar a mayúsculas uno o varios valores de un array.

Lower para pasar a minúsculas uno o varios valores de un array.

Sort para ordenar los valores.

Length para conocer la cantidad de posiciones del array.

Ejemplo de UpperCase en JavaScript para pasar a mayúsculas toda una oración:


const cadenaMinuscula = 'espero que tengas un gran dia';

cadenaMinuscula.toUpperCase() //ESPERO QUE TENGAS UN GRAN DIA

Ejemplo de tolower en C para pasar a minúsculas toda una palabra:


cadena = 'MARIA';

resultado = tolower(cadena); // maria

Ejemplo de sort en PHP:


$frutas = array("limón", "piña", "naranja", "fresa");

sort($frutas); // fresa, limón, naranja, piña

Ejemplo de length en Python:


frase = “Quiero saber cuántos caracteres tengo”

len(frase) //37

Además, podrás encontrar muchas más en la documentación oficial del lenguaje que uses además de su implementación y sintaxis adecuada.
















