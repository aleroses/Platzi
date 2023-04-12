# Taller Práctico de JavaScript: Matemáticas y Estadística Básica


## 1. ¿Ya tomaste el Curso Práctico de JavaScript?

## Course Topics   
1. Math on JS
2. Percentage and discounts
3. Basic statistics:
	- mode
	- median
	- average
4. Salary analysis


## 2. Fórmulas matemáticas en JavaScript

- Perímetro del cuadrado: 
	- Lado * 4
- Área del cuadrado: 
	- Lado * Lado
- Perímetro del triángulo: 
	- L * L * L
- Área del triángulo:  
	- (Base * Altura) / 2

### Ejemplo:  

```js
// Cuadrado 
console.group('Cuadrado');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

// Otra forma  
function calcularCuadrado(lado){
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
};

console.groupEnd('Cuadrado');

// Triangulo 
console.group('Triangulo'); 
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2, 
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});

// Otra forma
function calcularTriangulo(lado1, lado2, base, altura){
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

console.groupEnd('Triangulo'); 
```

## 3. Math en JavaScript

- Perímetro del círculo (Circunferencia y Diámetro )
	- Diámetro * PI 
- Área del círculo 
	- Radio al 2do * PI 

### Ejemplo:  

```js
console.group('Circle'); 
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});

// Otra forma
function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI.toFixed(3),
        area: radioAlCuadrado * Math.PI.toFixed(3),
    }
}

console.groupEnd('Circle'); 
```


## 4. Reto: altura de un triángulo

Requisitos:   
- Sabiendo lo que miden los 3 lados, encontrar la altura. 
- Debe ser un triángulo isósceles no equilátero (2 lados iguales y 1 diferente).

![Formula|300](https://i.postimg.cc/pTjDs2nZ/4-formula-triangulo.png)

### Teorema de Pitágoras:   
El cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.   

![Teorema de P|300](https://i.postimg.cc/CKDhJNgW/4-teorema-de-pitagoras.png)

![Teorema de P|300](https://i.postimg.cc/T3B2rsZV/4-teorema-de-pitagoras-2.png)  

#### Hipotenusa:    
El lado del triángulo rectángulo al frente del ángulo de 90 grados.

![Hipo|300](https://i.postimg.cc/1tr9134B/4-hipotenusa.png)   
![Hipo|300](https://i.postimg.cc/vBsQKV8D/4-hipotenusa2.png)

![Formula|300](https://i.postimg.cc/rmMDrbrh/4-formula-hipotenusa.png)

### Ejemplo: Triangulo isosceles - Altura

```js
console.group('Triangulo'); 

function calcularAlturaTriangulo(lados, base){
    if (lados == base){
        console.warn('Este no es un Triángulo isosceles');
    } else {
        // h = raiz cuadrada(lado1**2 - (b**2)/4)
        return Math.sqrt((lados ** 2) - ((base ** 2)) / 4);
    }
}

console.groupEnd('Triangulo'); 
```


### Reto: Triangulo Escaleno - Altura  

- Sabiendo lo que miden los 3 lados, encuentra la altura. 
- Debe ser un triángulo escaleno (todos los lados diferentes).

#### Altura de un Triángulo Escaleno – Fórmulas y Ejercicios

La altura de un triángulo es la distancia perpendicular desde la base hasta el vértice opuesto. Podemos calcular la altura de un triángulo escaleno usando fórmulas diferentes dependiendo en la información que tengamos disponible. Por ejemplo, **podemos calcular la altura si es que conocemos las longitudes de todos los lados**.

##### Fórmula de la altura de un triángulo escaleno

🔥 Altura de un triángulo escaleno si es que conocemos todos sus lados:   

Cuando conocemos las longitudes de todos los lados del triángulo, podemos calcular la altura usando una fórmula que es derivada de la fórmula de Herón, la cual es usada para calcular el área:

![Formula Triangulo Escaleno: Sabiendo lados](https://i.postimg.cc/9fjCfCcw/4-formula-altura-triangulo-escaleno-sabiendo-lados.png)

en donde,

- a = base, b, c son las longitudes de los lados del triángulo
- S es el semi perímetro, el cual es igual a S = (a+b+c) / 2​
- h es la altura perpendicular a la base

![Triangulo Escaleno](https://i.postimg.cc/C5DV0Q9s/4-triangulo-escaleno.png)

#### EJERCICIO 1

Un triángulo escaleno tiene lados de longitudes 6 m, 8 m y 10 m, en donde la base mide 6 m ¿Cuál es la longitud de su altura?

```js
// Triangulo Escaleno 
console.group('Triangulo Escaleno'); 
// Formula:  
// Altura de un triángulo escaleno si es que conocemos todos sus lados: 

// h = 2/a raiz cuadrada(S (S - a)(S - b)(S - c))
// en donde, 
// a = base, b, c son las longitudes de los lados del triángulo
// S es el semiperímetro, el cual es igual a S = (a + b + c) / 2
// h es la altura perpendiculas a la base

function calcularTrianguloEscaleno(base, ladob, ladoc){ // 6, 10, 8
    if (base != ladob && base != ladoc && ladob != ladoc){
        const semi = (base + ladob + ladoc) / 2;
        const h = (Math.sqrt(semi * ((semi - base) * (semi - ladob) * (semi - ladoc))) * 2) / base ;

        console.log({
            base,
            ladob,
            ladoc,
            semi,
        });
        return "La altura (height) es: " + h;
    } else {
        console.warn('Algo salio mal!!');
    }
}

console.groupEnd('Triangulo Escaleno'); 
```


[Documentación Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)   
[Teoría: Altura de un triangulo escaleno](https://www.neurochispas.com/wiki/altura-de-un-triangulo-escaleno/)


## 5. Calcula la Altura de un Triángulo Escaleno

En este desafío debes calcular la altura sin decimales de un triángulo escaleno (todos sus lados son distintos) o `false` en caso de que los parámetros recibidos no cumplan los requisitos del triángulo escaleno.

Input

```js
trianguloEscaleno(16,8,10)
trianguloEscaleno(6,6,6)
```

Output

```js
4
false
```

Solución de Platzi   
```js
export function solution(lado1, lado2, lado3) {
  if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    return false;
  }
  
  const S = (lado1 + lado2 + lado3) / 2;
  const S1 = S - lado1;
  const S2 = S - lado2;
  const S3 = S - lado3;

  const H = (2 / lado1) * Math.sqrt(S * S1 * S2 * S3);
  const result = Math.floor(H);

  return result;
}
```


## 6. Cómo calcular porcentajes

Regla de 3: 

### Ejemplo 01

- Precio: $100
- Descuento: 15% 
- Pago: 85%

|$100        |100% |
|------------|-----|
|x = `$85`  |85%  |

x = (85% `*` $100) / 100%   

**También:**   
x = 100 `*` 0.85

### Ejemplo 02

- Precio: $120
- Descuento: 15% 
- Pago: 85%

|$120        |100% |
|------------|-----|
|x = `$102`  |85%  |

x = (85% `*` $120) / 100%   

**También:**   
x = 120 `*` 0.85


## 7. Calculando descuentos con JavaScript 

Solución personal:   

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percentages</title>
</head>
<body>
    <h1>Calculadora de Porcentajes</h1>
    
    <label for="number-total">Ingresa un número</label>
    <input id="number-total" class="number-total" type="number"><br>
    
    <label for="porcentaje">Ingresa el Porcentaje %</label>
    <input id="porcentaje"  class="porcentaje" type="number"><br>

    <button class="enviar">Enviar</button>

    <h2>Resultados</h2> 
    <p class="result"></p>


    <script src="./main.js"></script>
</body>
</html>
```

```js
const number_total = document.querySelector('.number-total');
const porcentaje = document.querySelector('.porcentaje');
const enviar = document.querySelector('.enviar')
let calculo;
const result = document.querySelector('.result');

enviar.addEventListener('click', calculoPorcentaje);

function calculoPorcentaje(){
    if(porcentaje.value < 100 && number_total.value > 0){
        calculo = (Number(number_total.value) * parseInt(porcentaje.value)) / 100;
        result.innerText = `El ${porcentaje.value}% de ${number_total.value} es: ` + calculo;
    
    
        console.log('click XDXDXD' + result);
    } else{
        result.innerText = "Hey!! algo no anda bien...";
    }
};
```


## 8. Cupones de descuento

Solución personal:    
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coupon</title>
</head>
<body>
    <h1>Get a discount with your coupon 🔥😃</h1>

    <p>This item is $12, 345.00 🎃</p>

    <label for="coupon">Enter your coupon!! 👇</label><br>
    <input type="text" class="coupon" id="coupon"><br>
    <button class="buy">Buy now!</button>

    <p class="pay"></p>

    <script src="./main.js"></script>
</body>
</html>
```

```js
const coupon = document.querySelector('.coupon');
const buy = document.querySelector('.buy');
const pay = document.querySelector('.pay');

const coupon_list = {
    coupon_one: 'white',
    coupon_two: 'purple',
    coupon_three: 'black'
};

buy.addEventListener('click', discount);

function discount(){
    for(let item in coupon_list){
        if(coupon.value === coupon_list[item]){
            pay.innerText = coupon.value + coupon_list[item];
            if(coupon.value === 'white'){   
                pay.innerText = `Congratulation 😎 You have a 50% of Discount: $${12345 * 0.5}`;
            } else if (coupon.value === 'purple'){
                pay.innerText = `Congratulation 😎 You have a 25% of Discount: $${12345 * 0.75}`;
            }else {
                pay.innerText = `Congratulations 😎 You have a 12% Discount: $${12345 * 0.88}`;
            }
        }else if (coupon.value != "white" && coupon.value != "purple" && coupon.value != "black") {
            pay.innerText = `Try again 🤠`;
        }
        console.log(item, ":", coupon_list[item]);
    }
}


// Otra forma sin objeto y sin for in
/* function discount(){
    if (coupon.value != "white" && coupon.value != "purple" && coupon.value != "black"){
        pay.innerText = `Try again 🤠`;
    }else {
        if(coupon.value === 'white'){   
            pay.innerText = `Congratulation 😎 You have a 50% of Discount: $${12345 * 0.5}`;
        } else if (coupon.value === 'purple'){
            pay.innerText = `Congratulation 😎 You have a 25% of Discount: $${12345 * 0.75}`;
        }else {
            pay.innerText = `Congratulations 😎 You have a 12% Discount: $${12345 * 0.88}`;
        }
    }
} */
```


## 9. Método find vs. método filter

### Método 01: 
```html
<body>
    <h1>Get a discount with your coupon 🔥😃</h1>

    <label for="price">This item is ... 🎃</label><br>
    <input type="number" class="price" id="price"><br>

    <label for="coupon">Enter your coupon!! 👇</label><br>
    <input type="text" class="coupon" id="coupon"><br>
    <button class="buy">Buy now!</button>

    <p class="pay"></p>

    <script src="./main.js"></script>
</body>
```

```js
let input_price = document.querySelector('.price');
let input_coupon = document.querySelector('.coupon');
let btn_buy = document.querySelector('.buy');
let pay = document.querySelector('.pay');

let coupon_list = {
    'ale': 50,
    'ivo': 25,
    'levi': 12,
};

btn_buy.addEventListener('click', calculate_discount);

function calculate_discount(){  
    let price = Number(input_price.value);
    let coupon = input_coupon.value;

    if(!price || !coupon){ // Or
        pay.innerText = 'Check the price and coupon of the item!!!';
        return;
    }

    let descount;
    if(coupon_list[coupon]){
        descount = coupon_list[coupon];
    }else {
        pay.innerText = "This coupon isn't value...";
        return;
    };

    pay.innerHTML = `The price is: $${price * (100 - descount) / 100}.00 🤠`;
    return;
}
```

### Método 02: 
```js
let input_price = document.querySelector(".price");
let input_coupon = document.querySelector(".coupon");
let btn_buy = document.querySelector(".buy");
let pay = document.querySelector(".pay");

let coupon_list = [];
coupon_list.push({
    name: 'ale',
    discount: 50,
});

coupon_list.push({
    name: 'ivo',
    discount: 25,
});

coupon_list.push({
    name: 'levi',
    discount: 12,
});

btn_buy.addEventListener('click', calculate_discount);

function calculate_discount(){
    let price = Number(input_price.value);
    let coupon = input_coupon.value;

    if(!price || !coupon){
        pay.innerText = 'Check the price and coupon of the item!!!';
        return
    }

    let discount_data;

    function find_coupon(item){ // ale or x
        console.log(item, item.name, item.name == coupon); //👈👀
        return item.name == coupon;
    }

	// let successful_coupon = coupon_list.filter(find_coupon);👈👀
    let successful_coupon = coupon_list.find(find_coupon);

	// if(successful_coupon.length > 0) //👈👀
    if(successful_coupon){
        discount_data = successful_coupon.discount;
        // discount_data = successful_coupon[0].discount;
    }else{
        pay.innerText = "This coupon isn't valid"
        return
    }

    pay.innerText = `The price is: $${price * (100 - discount_data) / 100}.00 🤠`;
}

console.log(coupon_list);

// console.log(item, item.name, item.name == coupon);👈👀
// Si encuentra algo arroja:  
//{name: 'ale', discount: 50} 'ale' true

// Si no encuentra nada arroja:  
// {name: 'ale', discount: 50} 'ale' false
// {name: 'ivo', discount: 25} 'ivo' false
// {name: 'levi', discount: 12} 'levi' false
```

### Explicación con otros ejemplos: 

Encontrar datos con Objetos: Comparamos el key y de encontrar coincidencias devolvemos el valor.    
```js
let coupon = "ale";

let coupon_list = {
    'ale': 50,
    'ivo': 25,
    'levi': 12,
};

console.log(coupon_list[coupon]);
// 50
```

Encontrar datos con Array de Objetos: método .find   
```js
let coupon = "levi";

let coupon_list = [];
coupon_list.push({
    name: 'ale',
    discount: 50,
});

coupon_list.push({
    name: 'ivo',
    discount: 25,
});

coupon_list.push({
    name: 'levi',
    discount: 12,
});

function find_coupon(item){ // Parametro item 
    console.log(item.name == coupon);
    return item.name == coupon;
} 

// Argumento coupon_list
successful_coupon = coupon_list.find(find_coupon);
console.log(successful_coupon);
// false
// false
// true
// { name: 'levi', discount: 12 }
```

Encontrar datos con Array de Objetos: filter   
```js
let coupon = "levi";

let coupon_list = [];
coupon_list.push({
    name: 'ale',
    discount: 50,
});

coupon_list.push({
    name: 'ivo',
    discount: 25,
});

coupon_list.push({
    name: 'levi',
    discount: 12,
});


function find_coupon(item){ // Parametro item 
    console.log(item.name == coupon);
    return item.name == coupon;
} 

// Argumento coupon_list
successful_coupon = coupon_list.filter(find_coupon);
console.log(successful_coupon);
// false
// false
// true
// [ { name: 'levi', discount: 12 } ]
```

Cabe mencionar dos puntos importantes aquí:  

1.  El método `filter` itera por **todos** los elementos de un arreglo, mientras que `find` regresa el primer elemento que cumpla con la condición. Por lo tanto, si sólo se está buscando un elemento, el método más óptimo es `find`, ya que, apenas encuentre al elemento, dejará de iterar por los demás.
2.  Aprender [manipulación de arreglos](https://platzi.com/cursos/arrays/) ayuda mucho a mejorar como desarrollador. Te hace más profesional y con conocimientos sobre el tema. Les recomiendo mucho que tomen el [curso de Manipulación de Arrays en JavaScript](https://platzi.com/cursos/arrays/) y comprendan y practiquen cada método.

- [Documentación Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Documentación Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


## 10. Encuentra el ID

En este desafío vas a recibir un array de objetos. Cada objeto representa a un usuario. Debes encontrar al usuario con cierto ID y retornar su nombre. En caso de no existir, debes retornar false.

Input

```js
const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

solution(users, 456);
solution(users, 999);
```

Output

```js
Juanita Alcaparra
false
```


Solución personal: No tan bien...  
```js
const users = [];
users.push({ 
    id: 123, 
    name: 'Juanito Alcachofa' 
});

users.push({ 
    id: 456, 
    name: 'Juanita Alcaparra' 
});


function solution(user) {
    if (user.name == 'Juanita Alcaparra') {
        console.log(user.name);
        return
    }
    console.log(user.name == 'Juanita Alcaparra');
    return
}

users.find(solution); 
// false
// Juanita Alcaparra
```

Solución de la Comunidad:      
```js
function solution(users, id) {
    const user = users.find(userx => userx.id == id)
    return console.log(user?.name || false);
}

solution(users, 456); // Juanita Alcaparra
solution(users, 999); // false
```

Solución de Platzi:      
```js
export function solution(users, id) {
  const userWithID = users.find(user => user.id == id);

  if (userWithID) {
    return userWithID.name;
  } else {
    return false;
  }
}

solution(users, 456); // Juanita Alcaparra
solution(users, 999); // false
```

Ejemplo de Callback: 
```js
const numbers = [2, 5, 7, 1, 9, 8, 4];

const filteredNumbers = numbers.filter(function(number){
    return number >= 5;
});

console.log(numbers, filteredNumbers);
// [ 5, 7, 9, 8 ]
```


## 11. Qué es promedio, moda y mediana 

### Promedio

El nombre técnico es **media aritmética** y se calcula sumando todos los valores y luego dividiendo esa suma por la cantidad de valores.

(500 + 300 + 600) / 3 = 466.67

#### Ejemplo

```js
const ventasPrimerTrimestre =  [ 10, 20, 30 ];

function getMedia(array){
	const initialValue = 0;
	const sumWithInitial = array.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue
);

	return sumWithInitial  / array.length;
};

getMedia(ventasPrimerTrimestre);
```

El método reduce usa dos parámetros que son acumulativos: suma y el elemento que esté en un array.
- 1ra iteración: ((sum 0; + elemento 1;) y un 0 + 1) que sale de sum + elemento, este se va a retornar al final de las iteraciones. 
- 2da iteración: ((sum 1 + elemento que pasa a ser 2) y un 3) que sale de la suma. 
- 3ra iteración: ((sum 3 + elemento 3) y un 6)) de la suma. 
- 4ta iteración: ((suma 6 + elemento 4) y un 10. 
```js
// Otro ejemplo con reduce 
const numbers = [1, 2, 3, 4];

const rta = numbers.reduce((sum, element) => sum + element, 0);

console.log(rta);
```

> Si quieres saber más sobre el método reduce de arrays en JavaScript, puedes ver esta [clase](https://platzi.com/clases/2461-arrays/40876-reduce/) del curso de manipulación de Array dado por el buen Nico y/o ver este video de la Cocina del Código del el tío [Sacha en youtube](https://www.youtube.com/watch?v=tP8JiVUiyDo)

### La mediana

Es el valor que se ubica en la mitad de la lista de valores, cuando la lista es impar.   

450, `500`, 600

Cuando la lista es par, entonces se toman los dos valores centrales, se suman y se divide entre dos.

sueldo1, `sueldo2, sueldo3`/`2`, sueldo4

### La moda

Consiste en encontrar el valor que se repite mayor cantidad de veces en una lista de valores.

1, **10**, `14`, 3, 24, `14`, **10**, 35, 13, `14`      
10 = 2 veces     
14 = 3 veces   

> La moda no solo se puede trabajar con números, sino que aplica también para cualquier tipo de dato.


## 12. Calculando el promedio  

### Solución con for: 
```js
const numbers = [1, 2, 3, 4];
let contador = 0;

for(let i=0; i < numbers.length; i++){
    console.log(contador)
    contador = numbers[i] + contador;

}
console.log('Promedio con for:', contador / numbers.length);
```

### Solución con el método reduce: 
```js
const numbers = [1, 2, 3, 4];
let suma_acumulada = 0;

let add = numbers.reduce((suma, item) => suma + item, suma_acumulada);

console.log('Promedio con reduce:', add / numbers.length);
```


## 13. Método reduce  

Ejemplo de Platzi:    
```js
function calcularPromedio(lista){
    function sumarElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

calcularPromedio([1, 2, 3, 4]);
```


### Lecturas recomendadas

- [Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Arrow function expressions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

#### Clases relacionadas

[Métodos - Curso de TypeScript: Programación Orientada a Objetos y Asincronismo](https://platzi.com/clases/2880-typescript-poo/47254-metodos/)


## 14. Calculando la mediana en una lista impar

Encontrar si un número es par o impar:   
```js
let esPar = (lista) => (lista.length % 2) == 0 ? true : false;
console.log(esPar([1, 2, 3, 4])); // True
```

También podría quedar así: 
```js
let esPar = lista => lista.length % 2 === 0;
console.log(esPar([1,2,3,4]));
```

### Math.round()

Obtiene el siguiente numero mas cercano( si es >.5 redondea hacia arriba, si es <.5 redonda hacia abajo)

```js
Math.round(2.5) // output: 3
Math.round(2.49) // output: 2
```

### Math.floor()

Obtiene el numero entero anterior mas cercano (redondear hacia abajo).

```js
Math.floor(2.99) // output: 2
Math.floor(2.5) // output: 2
Math.floor(2.49) // output: 2
```

### Math.ceil()

Obtiene el numero entero siguiente mas cercano (redondear hacia arriba).

```js
Math.ceil(2.5) // output: 3
Math.ceil(2.49) // output: 3
Math.ceil(2.1) // output: 3
```

### Primera parte 

Calcular la mediana impar

```js
function esPar(lista){
    return !(lista.length % 2); // 0 = false
}

function calcularMediana(lista){
    const listaEsPar = esPar(lista); // true or false
    console.log(listaEsPar, "xd");

    if(listaEsPar){
        
    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    };
}

calcularMediana([10,20,30]);
```


## 15. Calculando la mediana en una lista par

### Segunda parte: 
```js
function esPar(lista){
    return !(lista.length % 2);
}

/* function esImpar(lista){
    return lista.length % 2;
} */

function calcularMediana(lista){
    const listaEsPar = esPar(lista);

    if(listaEsPar){
        const mitad01ListaPar = lista[(lista.length / 2) - 1];
        const mitad02ListaPar = lista[lista.length / 2];
        
        const listaMitades = [mitad01ListaPar, mitad02ListaPar];

        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    };
}

calcularMediana([10,20,30,40,50,60]);

function calcularPromedio(lista){
    function sumarElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}
```


Solución personal:  
```js
const arr = [5,2,1,4,3,6];

/* function esPar(array){
    // true: par  false: impar
    return array.length % 2 == 0 ? true : false; 
}
esPar(arr); */

function median(){
    // true: par  false: impar
    if(arr.length % 2 == 0){
        let left_index = arr[(arr.length / 2) - 1];
        let right_index = arr[arr.length / 2];
        let index_list = [left_index, right_index];

        let average = index_list.reduce((suma, indice) => suma + indice);

        let median_is = average / index_list.length; //2
        
        console.log(`Pair list ${arr} The Median is: ${median_is}`, average);
        return
    }else{
        let index = Math.floor(arr.length / 2);
        let median_is = arr[index];
        console.log(`Odd list ${arr} The Median is: ${median_is}`);
        return
    }
}

median(arr.sort())
```


## 16. Método sort

Algoritmos de ordenamiento: 
- Quicksort + Insertion sort.
- Bubble sort, Merge sort, Binary tree sort...

Sort funciona de la siguiente manera: 
```js
function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulad, nuevoValr){
        if(valorAcumulad > nuevoValr){
            return 1;
        }else if(valorAcumulad == nuevoValr){
            return 0;
        }else if(valorAcumulad < nuevoValr){
            return -1;
        }
    }

    const lista = listaDesordenada.sort(ordenarListaSort)
    console.log(lista);
    return lista;
}

ordenarLista([5,3,4,8,9,4,2,1,7]);
```

Calculamos la mediana de una lista desordenada. 
```js
function esPar(lista){
    return !(lista.length % 2);
}
/* function esImpar(lista){
    return lista.length % 2;
} */
function calcularMediana(listaDesordenada){
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if(listaEsPar){
        const mitad01ListaPar = lista[(lista.length / 2) - 1];
        const mitad02ListaPar = lista[lista.length / 2];
        
        const listaMitades = [mitad01ListaPar, mitad02ListaPar];

        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    };
}
calcularMediana([10,20,30,40,50,60]);

function calcularPromedio(lista){
    function sumarElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

// Metodo sort: ordenar listas 
function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulad, nuevoValr){
        return valorAcumulad - nuevoValr;
        // return 5 - 10 = -5 No lo mueve
        // return 5 - 5 = 0 No lo mueve 
        // return 10 - 5 = 5 Lo mueve de posición  
    }

    const lista = listaDesordenada.sort(ordenarListaSort)
    return lista;
}

// Otra forma: arrow function 
/* const lista = listaDesordenada.sort((a, b) => a -b); */
```

[Documentación sort](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

#### Lecturas recomendadas: Algoritmos con JS:  
- [Curso de Estructuras de Datos con JavaScript - Platzi](https://platzi.com/cursos/estructuras-datos/)
- [Curso de Introducción a los Algoritmos de Ordenamiento - Platzi](https://platzi.com/cursos/ordenamiento/)
- [Curso de Complejidad Algorítmica con JavaScript - Platzi](https://platzi.com/cursos/complejidad-js/)


## 17. Calculando la moda: objetos a partir de arrays  

Solución personal previa:  
```js
let number = 14;
let number_list = [1, 10, 14, 3, 24, 14, 10, 35, 13, 14];

function find_number(item){
    return item == number;
}

successful_number = number_list.filter(find_number);
console.log(`Encontramos ${successful_number.length} coincidencias`, successful_number);
// Encontramos 3 coincidencias [ 14, 14, 14 ]
```

Solución Platzi:  Guardar la cantidad de veces que aparece un número

```js
function calcularModa(lista){
    const listaCount = {};

    for(let i = 0; i<lista.length; i++){
        const elemento = lista[i];
        console.log(elemento);

        if(listaCount[elemento]){ // si está + 1
            listaCount[elemento] += 1;
        }else{ // si no está = 1
            listaCount[elemento] = 1;
        }
        console.log(listaCount);
    }
    console.log(listaCount);
}

calcularModa([8,2,3,4,8,1,'a','abc',8,13,'abc','abc'])
// 8
// { '8': 1 }
// 2
// { '2': 1, '8': 1 }
// 3
// { '2': 1, '3': 1, '8': 1 }
// 4
// { '2': 1, '3': 1, '4': 1, '8': 1 }
// 8
// { '2': 1, '3': 1, '4': 1, '8': 2 }
// 1
// { '1': 1, '2': 1, '3': 1, '4': 1, '8': 2 }
// a
// { '1': 1, '2': 1, '3': 1, '4': 1, '8': 2, a: 1 }
// abc
// { '1': 1, '2': 1, '3': 1, '4': 1, '8': 2, a: 1, abc: 1 }
// 8
// { '1': 1, '2': 1, '3': 1, '4': 1, '8': 3, a: 1, abc: 1 }
// 13
// { '1': 1, '2': 1, '3': 1, '4': 1, '8': 3, '13': 1, a: 1, abc: 1 }
// abc
// { '1': 1, '2': 1, '3': 1, '4': 1, '8': 3, '13': 1, a: 1, abc: 2 }
// abc
// { '1': 1, '2': 1, '3': 1, '4': 1, '8': 3, '13': 1, a: 1, abc: 3 }
// { '1': 1, '2': 1, '3': 1, '4': 1, '8': 3, '13': 1, a: 1, abc: 3 }
```

Solución de la comunidad: 
```js
const arr2 = [1, 2, 6, 6, 3, 4, 5, 4, 5, 1, 2, 4, 4];

const histogram = array => {
    const obj = new Object();
    array.forEach(element => !obj[element] ? obj[element] = 1 : obj[element]++);
    return obj;
};
console.log(histogram(arr2));
// { '1': 2, '2': 2, '3': 1, '4': 4, '5': 2, '6': 2 }
```


## 18. Calculando la moda: arrays a partir de objetos


```js
const obj = {a:1,b:2,c:3}
Object.keys(obj)
// ['a', 'b', 'c']
Object.values(obj)
// [1, 2, 3]
Object.entries(obj)
//
```

Solución Platzi:  
```js
function calcularModa(lista){
    const listaCount = {};

    for(let i = 0; i<lista.length; i++){
        const elemento = lista[i];

        if(listaCount[elemento]){ // si está + 1
            listaCount[elemento] += 1;
        }else{ // si no está = 1
            listaCount[elemento] = 1;
        }
    }
    
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length -1];
    const moda = listaMaxNumber[0];
    

    /* console.log(listaCount, listaArray, listaOrdenada, listaMaxNumber); */
    console.log('La moda es:', listaMaxNumber[0]);
    return moda;
}

calcularModa([8,2,3,8,8,8,8,1,4,8,1,'a',1,'abc',8,1,13,'abc','abc'])

function ordenarListaBidimensional(listaDesordenada, i){
    function ordenarListaSort(valorAcumulad, nuevoValr){
        return valorAcumulad[1] - nuevoValr[1];
    }

    const lista = listaDesordenada.sort(ordenarListaSort)
    return lista;
}
```

Lo mismo pero quizá se entienda mejor:  
```js
let number_list = [20,20,30,30,10,10,10,10,10,80,80,80,80];

function moda(list){
    let new_list = {};

    for(let i=0; i<list.length; i++){
        let item = list[i];

        new_list[item] ? new_list[item] += 1 : new_list[item] = 1;
    }
    console.log('Array', number_list);
    console.log('Objeto', new_list);

    // De objeto a array de arrays 
    let array_list = Object.entries(new_list);
    console.log('Array de arrays', array_list);

    let sort_by_value = sort_two_dimensional_list(array_list, 1);
    console.log('Ordenado por valor',sort_by_value);

    let find_moda = sort_by_value[sort_by_value.length - 1];
    console.log('Find moda', find_moda);
    let found_mode = find_moda[0];
    console.log('Found moda', found_mode);
}

moda(number_list);

function sort_two_dimensional_list(unordered_list, i){
    function sort_list(a,b){
        return a[i] - b[i];
    }

    let sorted_list = unordered_list.sort(sort_list);
    return sorted_list;
}
```


## 19. Transforma objetos en arrays

En este desafío debes convertir las llaves y valores de un objeto en propiedades (`id` y `name`) de un objeto dentro de un array.

Input

```js
const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra',
};

solution(obj);
```

Output

```js
[
  {
    id: "123",
    name: 'Juanito Alcachofa',
  },
  {
    id: "456",
    name: 'Juanita Alcaparra',
  },
]
```

Solution comunidad 01:  
```js
const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

function solution(obj) {
    const array = [];
    const objEntries = Object.entries(obj);
    for (let i = 0; i < objEntries.length; i++) {
        array.push({
            id: objEntries[i][0],
            name: objEntries[i][1],
    });
    }
    return console.log(array);;
}

solution(obj);
// 
// [
//    { id: '123', name: 'Juanito Alcachofa' },
//    { id: '456', name: 'Juanita Alcaparra' }
// ]
```

Solution comunidad 02:  
```js
const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

function solution(obj) {
    return Object.entries(obj).map(value => {
        return { id: value[0], name: value[1]}})
}

solution(obj); 
```

Ejemplo hecho por ChatGPT     
Usando JavaScript transforma un objeto con varias claves y valores en un array de varios objetos.

¡Claro! Puedes usar el método Object.entries() para convertir un objeto en una matriz de pares clave-valor, y luego usar el método Array.map() para transformar cada par clave-valor en un objeto. Aquí te dejo un ejemplo:

```js
const objeto = {
  clave1: "valor1",
  clave2: "valor2",
  clave3: "valor3"
};

const arrayDeObjetos = Object.entries(objeto).map(([clave, valor]) => ({ clave, valor }));

console.log(arrayDeObjetos);
// Output: [
//   { clave: "clave1", valor: "valor1" },
//   { clave: "clave2", valor: "valor2" },
//   { clave: "clave3", valor: "valor3" }
// ]
```

En el ejemplo anterior, Object.entries(objeto) devuelve una matriz de pares clave-valor, que se mapea en un array de objetos usando la función de devolución de llamada proporcionada en Array.map(). La función de devolución de llamada toma cada par clave-valor como un argumento y devuelve un objeto con las claves "clave" y "valor".

Solución hecha por ChatGPT    

```js
function solution(obj) {
  return Object.entries(obj).map(([id, name]) => ({ id, name }));
}

const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra',
};

const result = solution(obj);

console.log(result);
// Output:
// [
//   {
//     id: "123",
//     name: 'Juanito Alcachofa',
//   },
//   {
//     id: "456",
//     name: 'Juanita Alcaparra',
//   },
// ]
```

En el ejemplo anterior, la función solution toma un objeto como argumento, usa Object.entries() para convertirlo en una matriz de pares clave-valor, y luego usa Array.map() para transformar cada par clave-valor en un objeto con propiedades id y name. El resultado es un array de objetos con el formato solicitado en el output.

Mas explicación:    
En el código que te proporcioné, se utiliza una función llamada `solution` que toma como argumento un objeto `obj`. A continuación, se usa la función `Object.entries()` para convertir el objeto `obj` en una matriz de pares clave-valor.

La función `Object.entries()` devuelve una matriz en la que cada elemento es otro array de dos elementos: el primer elemento es la clave (en este caso, un número representado como una cadena) y el segundo elemento es el valor correspondiente (en este caso, un nombre representado como una cadena).

A continuación, se usa la función `Array.map()` para transformar cada elemento de la matriz resultante en un objeto con dos propiedades: `id` y `name`. La función de devolución de llamada proporcionada a `Array.map()` toma como argumento cada elemento de la matriz, que es también un array de dos elementos, y utiliza la sintaxis de desestructuración para asignar el primer elemento del array (la clave) a la propiedad `id` del objeto resultante, y el segundo elemento del array (el valor) a la propiedad `name` del objeto resultante.

Finalmente, la función `solution` devuelve un nuevo array de objetos que tiene el formato requerido, con cada objeto que representa un par clave-valor del objeto original.

```js

```

```js

```

```js

```

```js

```
