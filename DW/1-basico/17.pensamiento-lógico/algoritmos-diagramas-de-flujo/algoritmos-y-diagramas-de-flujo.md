# Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo

## **1.** ¿Qué es una operación matemática?

Una operación matemática es un proceso. El objetivo del proceso es obtener un resultado. Dicho resultado se obtiene con base en entradas, que serían los números a sumar. Por ejemplo; si sumamos 8 + 6, 8 y 6 serían las entradas y 14 sería el resultado.

Además, las operaciones matemáticas tienen un tercer componente, este es conocido como símbolo, su función es indicar que se necesita hacer para llegar al objetivo.

### ¿Por qué son importantes las operaciones matemáticas en programación?

Para responder a la pregunta ¿Por qué son importantes las operaciones matemáticas en programación? Debemos recordar que El **desarrollo de software** más halla de la escritura de código es la resolución de problemas cotidianos a través del software y en muchas ocasiones se necesitan las matemáticas de forma literal para solucionar algún problema o para crear algún producto que le facilite la vida a las personas.

### ¿Existe código para las matemáticas?

La respuesta a esta pregunta es sí. Las matemáticas juegan un gran papel al codificar. Por ello, es importante conocer la simbología que representa a las operaciones a la hora de programar, aunque esto depende del lenguaje de programación.

### ¿Cómo se usa una operación matemática en programación?

En programación las operaciones matemáticas se usan de forma muy similar a como se usan en la vida cotidiana, aunque en el mundo de la programación se encuentran una serie de componentes y símbolos que pueden ayudar a agregar complejidad.

### ¿Qué es el pensamiento lógico?

El pensamiento lógico es la habilidad que tenemos para resolver diferentes problemas con las herramientas que tengamos a la mano. La lógica nos ayuda a buscar soluciones óptimas a problemas simples y complejos, por lo que es útil profesionalmente y también para la vida.

### Reto

Tomando en cuenta que las operaciones matemáticas básicas son suma, resta, multiplicación y división; elige 3 de estas 4 y realiza operaciones a mano, en las que practiques diferentes combinaciones de números y obtengas diferentes resultados. Además, debes hacer al menos 3 operaciones de cada una que elijas.

Por ejemplo; 3 sumas, 3 multiplicaciones y 3 divisiones.

## **2.** Propiedades y orden de las operaciones

Las propiedades matemáticas se usan para simplificar expresiones algebraicas. El tener un buen entendimiento de estas propiedades facilita la resolución de los problemas matemáticos. Dentro de las matemáticas existen 4 propiedades, estas son:

- [Propiedad conmutativa](https://en.wikipedia.org/wiki/Commutative_property)
- [Propiedad asociativa](https://en.wikipedia.org/wiki/Associative_property)
- [Propiedad distributiva](https://en.wikipedia.org/wiki/Distributive_property)
- [Propiedad de identidad](https://es.wikipedia.org/wiki/Identidad_(matem%C3%A1tica))

Las propiedades y el orden de las operaciones son reglas matemáticas que se utilizan para determinar cómo se deben realizar las operaciones en una expresión matemática. Las propiedades matemáticas se usan para simplificar expresiones algebraicas. El tener un buen entendimiento de estas propiedades facilita la resolución de los problemas matemáticos. Dentro de las matemáticas existen 4 propiedades, estas son: Propiedad conmutativa, Propiedad asociativa, Propiedad distributiva y Propiedad de identidad.

### ¿Qué es la Propiedad Conmutativa?

La propiedad conmutativa es una propiedad matemática que se aplica a las operaciones de adición y multiplicación. Esta propiedad nos enseña que en una suma o multiplicación, el orden de los factores o números, no altera el resultado.

Su enunciado nos dice:

> _"El orden de los factores no altera el producto"._

Ejemplo de la Propiedad Conmutativa:

```js
9 + 7 = 16 👈👀 7 + 9 = 16

8 * 5 = 40 👈👀 5 * 8 = 40
```

En ambos ejemplos, vemos que aunque invirtamos los números, el resultado siempre será el mismo. Cabe destacar que esto aplicaría igualmente si fuesen más de dos números en la operación. No importa la cantidad.

### ¿Qué es la Propiedad Asociativa?

Su enunciado nos dice:

> _"Cuando se suman o multiplican tres o más números, la operación es la misma sin importar el modo en el que los números son agrupados"._

Debemos tomar en cuenta que en matemáticas llamamos agrupación a números dentro de un paréntesis. Por ejemplo, si fuese:

```js
(3 + 7) + 5
```

Los números agrupados son 3 y 7. Al estar agrupados, siempre se debe realizar primero la operación de dentro de los paréntesis y luego el resto. En este caso sumaríamos primero el 3 con el 7, y el resultado que es 10, se sumaría con el 5.

Ahora que sabes esto, puedes entender que sin importar cómo agrupemos los números, siempre el resultado será el mismo siempre y cuando sea suma o multiplicación. Por ejemplo:

```js
3 * 2 * 5 = 30
(3 * 2) * 5 = 30
3 * (2 * 5) = 30
```

Es importante tomar en cuenta que esta propiedad también aplica a operaciones con muchos más números, no tienen que ser solo 3 necesariamente.

### ¿Qué es la Propiedad Distributiva?

Su enunciado nos dice:

> _"La suma de dos números multiplicada por un tercer número, es igual a la suma de cada sumando multiplicado por el tercer número"._

Este enunciado puede ser el más confuso, pero la propiedad en realidad es muy fácil de entender. La mejor forma es con un ejemplo. Digamos que tenemos la siguiente operación:

```js
8 * (4 + 15)
8 * 19
152
```

Lo que nos indica la propiedad, es que podemos realizar esa misma operación de la siguiente forma:

```js
(8 * 4) + (8 * 15)
32 + 120
152
```

Dicho de otra forma, en este ejemplo concluimos que lo que nos indica el enunciado, es que multiplicar 8 por la suma de 4 + 15, es lo mismo que sumar las multiplicaciones de 8 * 4 y 8 * 15.

### ¿Qué es la Propiedad de Identidad?

La propiedad de identidad es una propiedad matemática que se aplica a las operaciones de adición y multiplicación.

La propiedad de identidad es una propiedad matemática que se aplica a las operaciones de adición y multiplicación. Esta propiedad tiene una particularidad, y es que se subdivide en 2 "sub-propiedades". Una para la suma y otra para multiplicación.

#### Propiedad de identidad en la Suma

La propiedad de identidad en la suma se refiere al hecho de que el cero es el elemento neutro de la adición.

El enunciado de esta propiedad dice:

> _"La suma de cualquier número y cero da como resultado el mismo número"._

En realidad esta propiedad la aplicamos sin darnos cuenta. En pocas palabras, nos dice que:

```js
4 + 0 = 4
```

Es decir, si sumamos un número con el 0, no cambia nada.

#### Propiedad de identidad en la Multiplicación

La propiedad de identidad en la multiplicación se refiere al hecho de que el uno es el elemento neutro de la multiplicación.

El enunciado de esta propiedad dice:

> _"El producto de cualquier número y uno da como resultado ese mismo número"._

Al igual que la anterior, la aplicamos sin darnos cuenta. Simplemente nos dice que:

```js
4 * 1 = 4
```

Dicho de otra forma, al multiplicar cualquier número con 1, nos dará como resultado ese mismo número.

### Reto

Para que mejores tu lógica, te invito a que realices ejercicios con todas las propiedades que has aprendido hoy. Utiliza diferentes números, agrupaciones y cuéntanos en los comentarios como te fue, o si tienes cualquier duda.

¡Para que complementes la información vista en esta clase te invitamos a visitar el curso de [Fundamentos de Matemáticas](https://platzi.com/cursos/fundamentos-matematicas/)!

##  Quiz

1. El orden de los factores NO altera el producto.
	- Propiedad conmutativa
2. El producto de cualquier número y 1 siempre da como resultado el mismo número
	- Propiedad de identidad
3. ¿Qué propiedad usarías para resolver el siguiente problema: `15 x (2 + 7)` ?
	- Propiedad distributiva

## **3.** ¿Qué es el sistema binario?

El **sistema binario** es un sistema de numeración distinto al que conocemos, que es el decimal. A diferencia del sistema tradicional o decimal (que se compone por los números 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9), el binario únicamente se compone por 1 - 0.

```js
// Sistema decimal
0 1 2 3 4 5 6 7 8 9

// Sistema binario
1 0
```

### ¿Por qué es importante el sistema binario?

Todas las computadoras (a excepción de las cuánticas), funcionan haciendo uso del sistema binario. Dentro de una computadora, el 1 representa una señal de corriente y el 0 la ausencia de la misma.

Básicamente, el 1 y 0 funcionan como un verdadero y falso. Solo tenemos dos opciones, o hay corriente, o no hay. Por lo tanto, el sistema binario es suficiente para las computadoras.

### ¿Cómo funcionaría en un ejemplo?

A pesar de que el sistema binario solo tiene dos números, las computadoras juntan varios de estos para crear una secuencia. Por ejemplo:

1011101

En este caso, cada 1 representa una señal eléctrica y cada 0 representa cada vez que no hubo una señal eléctrica. A ese grupo de números, le llamamos secuencia. Podemos ver de mejor forma cómo se vería este proceso en un gráfico. 

![senales electricas](https://static.platzi.com/media/articlases/Images/Screenshot%202022-08-07%20000606.jpg)

## **4.** Conversión entre binario y decimal

Los procesos de conversión entre binario y decimal, se hacen utilizando 2 de las [operaciones aritméticas](https://en.wikipedia.org/wiki/Operation_(mathematics)) más utilizadas en el día a día, estas son **multiplicación y división.**

### ¿Como convertir un número decimal a binario?

Para convertir un número **decimal** a **binario**, hay que realizar una serie de divisiones continuas entre 2 y escribir los distintos resultados de las divisiones en orden inverso al que se obtuvieron. Como se puede ver en la siguiente imagen.

![Inkedconversion-de-decimal-a-binario.jpg](https://static.platzi.com/media/articlases/Images/Inkedconversion-de-decimal-a-binario.jpg)

En el proceso de conversión, se debe coger el número decimal que se desea convertir y dividirlo hasta que el divisor (2), sea mayor al dividendo (El número que se desea dividir).

### Convirtiendo un número binario en un número decimal

Una de las formas en la que se puede convertir un número binario a un número decimal es a través de los siguientes pasos:

En este ejemplo vamos a partir del mismo número con el que se hizo la conversión anterior, este es el **11100**. Recordemos que la representación de este número binario en el sistema decimal es el 28.

1. Se cogen los decimales del número binario de derecha a izquierda, se colocan en forma vertical y cada dígito se multiplica x2.

```js
| Números | Operador | Multiplicador | 
| --------| -------- | ------------- |
| 0       | *        | 2             |
| 0       | *        | 2             |
| 1       | *        | 2             |
| 1       | *        | 2             |
| 1       | *        | 2             |
```

2. Cada una de las unidades del sistema binario será la potencia del 2 que le pertenece.

```js
| Números | Operador | Multiplicador | 
| ------- | -------- | ------------- |
| 0       | *        | 2 ^ 0         |
| 0       | *        | 2 ^ 1         |
| 1       | *        | 2 ^ 2         |
| 1       | *        | 2 ^ 3         |
| 1       | *        | 2 ^ 4         |
```

3. Se hacen las operaciones de las potencias.

```js
| Números | Operador | Multiplicador | OP |
| ------- | -------- | ------------- | -- |
| 0       | *        | 2 ^ 0         | 1  |
| 0       | *        | 2 ^ 1         | 2  |
| 1       | *        | 2 ^ 2         | 4  |
| 1       | *        | 2 ^ 3         | 8  |
| 1       | *        | 2 ^ 4         | 16 |
```

4. Los resultados de la potencia se multiplican por el decimal que lo compone

```js
| Números | Operador | Multiplicador | OP | Productos | 
| ------- | -------- | ------------- | -- | --------- | 
| 0       | *        | 2 ^ 0         | 1  | 0         | 
| 0       | *        | 2 ^ 1         | 2  | 0         | 
| 1       | *        | 2 ^ 2         | 4  | 4         | 
| 1       | *        | 2 ^ 3         | 8  | 8         |
| 1       | *        | 2 ^ 4         | 16 | 16        |
```

En este caso se están multiplicando las columnas, números y multiplicación.

1. Se suman los productos de las multiplicaciones y el resultado es el número decimal equivalente al binario que se está convirtiendo.

```js
| Números | Operador | Multiplicador | OP | Productos | 
| ------- | -------- | ------------- | -- | --------- |
| 0       | *        | 2 ^ 0         | 1  | 0         |
| 0       | *        | 2 ^ 1         | 2  | 0         |
| 1       | *        | 2 ^ 2         | 4  | 4         |
| 1       | *        | 2 ^ 3         | 8  | 8         |
| 1       | *        | 2 ^ 4         | 16 | 16        |
|         |          |               |    | **28**    |
```

### Reto de la clase

Escoge dos números del sistema decimal y pásalos al sistema binario. Una vez logres hacerlo, escoge dos números del sistema binario y pásalos a decimal.

### Otra explicación 

- [BINARIO. ¿Cómo pasar de decimal a binario y viceversa?](https://www.youtube.com/watch?v=bScw3CNb_fM)
- [Sistemas numéricos: Binario, Decimal y Hexadecimal](https://www.youtube.com/watch?v=g9-MRBBcvdg)

## **5.** Suma y resta de binarios

La **suma** y **resta** de **binarios** se ejecutan aplicando una serie de reglas, que nos dan los distintos resultados de operar los dos números que componen este sistema (0 y 1).

### Suma de números binarios

Para sumar números binarios se tienen que seguir las reglas proyectadas en la siguiente tabla:

```js
| Reglas | Resultados    | 
| ------ | ------------- | 
| 0 + 0  | 0             | 
| 0 + 1  | 1             | 
| 1 + 0  | 1             | 
| 1 + 1  | 0 y acarreo 1 |
```

Una vez se tienen claras estas reglas, se procede de la misma forma en la que se opera cuando se suman números del sistema decimal, es decir, se comienzan a operar los números de derecha a izquierda. Ejemplo:

```js
  1 1 0
+ 0 0 1
---------
  1 1 1
```

El resultado de sumar los números binarios 110 y 001 es 111. Esto se debe a que las reglas nos dicen que 0 +1 = 1 y que 1 + 0 = 1.

### Resta de números binarios

Para rectar números binarios se tienen que seguir las reglas proyectadas en la siguiente tabla:

```js
| Reglas | Resultados    | 
| ------ | ----------    | 
| 0 - 0  | 0             | 
| 0 - 1  | 1 y acarreo 1 | 
| 1 - 0  | 1             | 
| 1 - 1  | 0             |
```

En la resta de número binario, la resta 0 - 1 se resuelve de forma idéntica a como se resuelve en el sistema decimal. Esto concité en tomar una unidad del decimal que sigue: 0 - 1 = 1 y se acarrea 1.

![Restar binarios](https://i.postimg.cc/9FxN0DR7/5-restar-binarios.png)

- [Calculadora de binarios](https://es.planetcalc.com/911/)
- [Sumas y Restas con Binarios](https://sites.google.com/a/educacion.navarra.es/tecnologia-y-tic/home/los-sistemas-de-numeracion-en-informatica/suma-y-resta-binaria)

## **6.** Multiplicación y división de binarios

La multiplicación de binarios se realiza teniendo en cuenta dos reglas, la primera regla dice. **Todo número multiplicado por cero es igual a cero y la segunda, que uno por uno, es igual a uno.**

Las divisiones de números binarios se pueden realizar contestando la siguiente pregunta. **¿Es el divisor menor que el dividendo?**, si la respuesta es que no, se coloca un 0 en el cociente y se baja el siguiente dígito del dividendo. Si la respuesta es que si, se realiza una resta.

### Multiplicación de números binarios

La multiplicación en el sistema binario se puede hacer de la misma forma a la que se hace en el sistema decimal, esto consiste en multiplicar el **multiplicando** por cada uno de los dígitos del **multiplicador** y luego se realiza la suma de los productos.

Al momento de ejecutar la operación, se debe seguir las siguientes reglas:

```js
| Reglas | Resultados | 
| ------ | ---------- | 
| 0 * 0  | 0          | 
| 0 * 1  | 0          | 
| 1 * 0  | 0          | 
| 1 * 1  | 1          |
```

**Veamos un ejemplo en la siguiente imagen:**

```js
  1 1 0
*   1 0
--------
  0 0 0
1 1 0
--------
1 1 0 0


| 512 | 256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | -- | -- | -- | - | - | - | - |
| 0   | 0   | 0   | 0  | 0  | 0  | 1 | 1 | 0 | 0 |

8 + 4 = 12
```

En el ejemplo proyectado en la imagen anterior, se realizó una multiplicación de binarios, entre el número 110 y 10, este dio como resultado el número 1100.

### División de números binarios

De las operaciones aritméticas, es en la división es donde encontramos la mayor variación o la mayor diferencia entre como se hace esta operación en el sistema decimal y como se hace en el sistema binario.

**Veamos un ejemplo en la siguiente imagen para comprender esto de mejor manera:**

```js
     0 1 0 1 1
   ------------
10 | 1 0 1 1 0
     1 0
     -----
     0 0 1 1
         1 0
         ----
         0 1 0
           1 0
           ----
           0 0 

Dividendo 10110
Divisor      10
Cociente  1 0 1 1

10 <= 1 = No = 0
10 <= 10 = Si = 1
10 <= 11 = Si = 1 

| 512 | 256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | -- | -- | -- | - | - | - | - |
| 0   | 0   | 0   | 0  | 0  | 0  | 1 | 0 | 1 | 1 |

8 + 2 + 1 = 11
```

**El ejercicio proyectado en la imagen anterior se resolvió siguiendo los siguientes pasos:**

1. Se identificó el dividendo y el divisor

**Dividendo:** 10111 **divisor:** 0

2. Se respondió a la pregunta, **¿Es el divisor menor o igual que el dividendo?**, cuando la respuesta fue que no, se colocó un 0 en el cociente y sé bajo el siguiente dígito del dividendo. Cuando la respuesta fue, que es mayor o que es igual, se realizó una resta.

Este segundo paso se realizó de forma **iterativa** hasta terminar de bajar todos los números del **dividendo**.

Al final del proceso se obtuvo en él cociente el número 010100, por lo que el resultado de dividir **10110 entre 10 es 1011**, esto se debe a que el primer cero que aparece en el cociente se ignora.

## Quiz 

1. Multiplica `111` por `101` en sistema binario.

	- 100011

2. ¿A cuál sistema de numeración pertenece el número 3?

	- Al sistema decimal.

3. Las operaciones matemáticas en sistema binario funcionan exactamente igual que en el sistema decimal.

	- Falso

4. Convierte el número 41 a sistema binario:

	- 101001

5. Divide 110 por 10 en sistema binario.

	- 11

## **7.** ¿Qué son las tablas de verdad?

Las tablas de verdad son una herramienta que nos ayudan a determinar cuáles son las condiciones necesarias para que sea verdadero o válido un enunciado propuesto. Estas se usan como respaldo para tomar decisiones a partir de un resultado dado.

### Conociendo los tipos de tablas de verdad

Existen 3 tipos de tablas de verdad, estas son; **negación, conjunción y disyunción**, a continuación conoceremos más acerca de su funcionamiento.

#### Tabla de verdad de negación

Esta tabla se caracteriza por ser la más simple de todas, debido a que es la que menos actores tiene.

La forma en la que esta funciona es devolviendo el valor opuesto de la proposición considerada, es decir; si una afirmación es verdadera, la negación de esta va a hacer falsa o viceversa, si se tiene que la condición es falsa al negarse se va a tener un resultado verdadero.

|A  |-A |
|---|---|
|V  |F  |
|F  |V  |

Con binarios:

|p  |~p |
|---|---|
|1  |0  |
|0  |1  |

#### Tabla de verdad de conjunción

La conjunción se puede ver como la unión de dos valores. La forma en la que esta funciona es que algo es verdad cuando ambas partes involucradas son verdaderas y cuando las partes son diferentes, el resultado es falso.
  
|A  |B  |A^B|
|---|---|---|
|V  |V  |V  |
|V  |F  |F  |
|F  |V  |F  |
|F  |F  |F  |

Con binarios:

|p  |q  |p^q|
|---|---|---|
|1  |1  |1  |
|1  |0  |0  |
|0  |1  |0  |
|0  |0  |0  |

#### Tabla de verdad de disyunción

##### Disyunción débil

En la disyunción algo será verdadero cuando por lo menos una de las proposiciones es verdadera, de lo contrario será falsa.

|A  |B  |A∨B|
|---|---|---|
|V  |V  |V  |
|V  |F  |V  |
|F  |V  |V  |
|F  |F  |F  |

Con binarios:

|p  |q  |p∨q|
|---|---|---|
|1  |1  |1  |
|1  |0  |1  |
|0  |1  |1  |
|0  |0  |0  |

##### Disyunción fuerte

**Una disyunción Fuerte** solamente es verdadera cuando ambas proposiciones tienen valores diferentes y es falsa si las dos proposiciones son ambas verdaderas o ambas falsas.

|A  |B  |A∨B|
|---|---|---|
|V  |V  |F  |
|V  |F  |V  |
|F  |V  |V  |
|F  |F  |F  |

Con binarios:

|p  |q  |p🔺q|
|---|---|---|
|1  |1  |0  |
|1  |0  |1  |
|0  |1  |1  |
|0  |0  |0  |
