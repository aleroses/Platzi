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
	- L x L x L
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
const alturaTriangulo = 5.65;

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

### Practice:  

Este código lo encuentras en resources/codigo/practice/2.mate.  
```html
<!-- index.html -->
<body>
    <header>
        <h1>Calculator</h1>
    </header>
    <main class="square">
        <h2>Square</h2>
        <section>
            <label for="side">Enter a side</label><br>
            <input type="number" id="side" class="side"><br>
            <button class="send-one">Send</button>
        </section>
        <section>
            <h3>Perimeter of the square</h3>
            <p class="result-one"></p>  
        </section>
        <section>
            <h3>Area of the square</h3>
            <p class="result-two"></p>
        </section>
    </main>

    <main class="isosceles">
        <h2>Triangle: Isosceles</h2>
        <section>
            <label for="side-triangle">Enter the sides (a, b) and the base</label>
            <input type="number" placeholder="side a, b" id="side-triangle" class="sides">
            <input type="number" placeholder="base" id="side-triangle" class="base"><br>
            <button class="send-three">Send</button>
        </section>
        <section>
            <h3>Perimeter of the triangle</h3>
            <p class="result-tri-one"></p>
        </section>
        <section>
            <h3>Area of the triangle</h3>
            <p class="result-tri-two"></p>
        </section>
    </main>

    <script src="./square_triangle.js"></script>
</body>
```

```js
// SQUARE
// Perimeter of the square
const side = document.querySelector('.side');
const send = document.querySelector('.send-one');
const result_one = document.querySelector('.result-one')

send.addEventListener('click', calculate_perimeter);

function calculate_perimeter(){
    result_one.innerText = 'The Perimeter of the square is: '+ Number(side.value) * 4;
}

// Area of the square
const result_two = document.querySelector('.result-two');

send.addEventListener('click', calculate_area);

function calculate_area(){
    result_two.innerText = 'The Area of the square is: '+ Math.pow(Number(side.value), 2);
}

// TRIANGLE: ISOSCELES 
// Perimeter of the triangle 
const sides = document.querySelector('.sides')
const base = document.querySelector('.base')
const send_tri = document.querySelector('.send-three');
const result_three = document.querySelector('.result-tri-one');

send_tri.addEventListener('click', calculate_perimeter_triangle);

function calculate_perimeter_triangle(){
    result_three.innerText = 'The Perimeter of the triangle isosceles is: ' + (Number(sides.value) + Number(sides.value) + Number(base.value));
}

// Area of the triangle 
const result_four = document.querySelector('.result-tri-two');

send_tri.addEventListener('click', calculate_area_triangle);

function calculate_area_triangle(){
    // h=sqrt(pow(ab, 2)-pow(base/2, 2))
    const height = Math.sqrt(Math.pow(Number(sides.value), 2) - ((Math.pow(Number(base.value), 2) / 4))).toFixed(2);

    result_four.innerText = `The Area of the triangle isosceles is: ${(Number(base.value) * height) / 2}`;
}
```

- [Formula Altura de un triángulo Isósceles](https://www.neurochispas.com/wiki/altura-del-triangulo-isosceles/#:~:text=La%20altura%20de%20un%20tri%C3%A1ngulo,uno%20de%20los%20lados%20congruentes.)
- [Calculadora de Triángulos Isósceles](https://es.numberempire.com/isosceles_triangle_calculator.php)

## 3. Math en JavaScript

- Perímetro del círculo (Circunferencia y Diámetro )
	- Diámetro * PI 
- Área del círculo 
	- Radio al 2do * PI 

![Circle|250](https://i.postimg.cc/nr2XpGbh/3-circle.png)

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

### Practice:  

Este código lo encuentras en resources/codigo/practice/3.circle

```html
<body>
    <header>
        <h1>Calculator</h1>
    </header>
    <main>
        <h2>Circle</h2>
        <section>
            <label for="radius">Enter the radius</label><br>
            <input type="number" id="radius" class="radius"><br>
            <button class="send">Send</button>
        </section>
        <section>
            <h3>Circumference of the circle</h3>
            <p class="result"></p>
        </section>
        <section>
            <h3>Area of the circle</h3>
            <p class="result-area"></p>
        </section>
        <section>
            <h3>Circle Diameter</h3>
            <p class="result-diameter"></p>
        </section>
    </main>

    <script src="./circle.js"></script>
</body>
```

```js
// Circle
const radius = document.querySelector('.radius');
const btn = document.querySelector('.send')
const result = document.querySelector('.result');

// Circumference: 2.pi.r
btn.addEventListener('click', calculate_perimeter);

function calculate_perimeter(){
    result.innerText = `The result is: ${(2 * Math.PI * Number(radius.value)).toFixed(3)}`;
}

// Area: pi.r2
const result_area = document.querySelector('.result-area');

btn.addEventListener('click', calculate_area);

function calculate_area(){
    result_area.innerText = `The result is: ${(Math.PI * Math.pow(Number(radius.value), 2)).toFixed(3)}`
}

// Diameter: 
const result_diameter = document.querySelector('.result-diameter');

btn.addEventListener('click', calculate_diameter);

function calculate_diameter(){
    result_diameter.innerText = `The result is: ${2 * Number(radius.value)}`;
}
```

- [Calculadora de Circles + formulas](https://www.mathepower.com/es/circulo.php)

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

### Practice:  

Este código lo encuentras en resources/codigo/practice/4.escaleno

```html
<body>
    <header>
        <h1>Scalene Triangle</h1>
    </header>
    <main>
        <section>
            <h2>Enter data:</h2>
            <input type="text" placeholder="side a" class="side-a"><br>
            <input type="text" placeholder="side b" class="side-b"><br>
            <input type="text" placeholder="base" class="base"><br>
            <button class="send">Send</button>
        </section>
        <section>
            <h3>Height</h3>
            <p class="result"></p>
        </section>
    </main>
    
    <script src="./height.js"></script>
</body>
```

```js
const side_a = document.querySelector('.side-a');
const side_b = document.querySelector('.side-b');
const base = document.querySelector('.base');
const btn = document.querySelector('.send');
const result = document.querySelector('.result');

btn.addEventListener('click', calculate_height);

function calculate_height(){
    const semi_perimeter = (Number(base.value) + Number(side_a.value) + Number(side_b.value)) / 2;
    console.log(semi_perimeter);

    result.innerText = `The result is: ${(2 / Number(base.value)) * Math.sqrt(semi_perimeter*(semi_perimeter - Number(base.value)) * (semi_perimeter - Number(side_a.value)) * (semi_perimeter - Number(side_b.value)))}`;
}
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


### Practice:  

Este código lo encuentras en resources/codigo/practice/8.coupon/practice-two

```html
<body>
    <h1>Discount calculation</h1>
    <p>The price of the product is: $250.00</p>
    <input type="text" placeholder="Enter the coupon" class="coupon"><br>
    <button class="send">Send</button>
    <p class="result"></p>

    <script src="main.js"></script>
</body>
```

```js
const price = 250;
const coupon = document.querySelector('.coupon');
const btn = document.querySelector('.send');
const result = document.querySelector('.result');

const coupon_list = [];
coupon_list.push({
    name: 'one',
    discount: 50,
});
coupon_list.push({
    name: 'two',
    discount: 25,
});
coupon_list.push({
    name: 'three',
    discount: 12,
});

btn.addEventListener('click', calculate_discount);

function calculate_discount(){
    if(!coupon.value){
        result.innerText = 'Enter the coupon!!!';
        return
    }

    const find_coupon = coupon_list.find(item => item.name == coupon.value);

    if(!find_coupon){
        result.innerText = `The coupon isn't valid!!!`;
        return
    }
    
    result.innerText = `The price is: $${(100 - find_coupon.discount) * price / 100}.00`
}
```


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

Encontrar si una lista de números es par o impar:   
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
    console.log(promedio); // 35
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


### Practice:  

Este código lo encuentras en resources/codigo/practice/14.mediana/practice-two.  

```js
/* 
- promedio or mediana aritmética +++ / lenght
    - 1, 2, 3 rpt: 6/3
- mediana 
	- 450, 500, 600 rpt: 500
	- 100, 200, 300, 400 rpt: 200+300/2
- moda: valor que se repite mas veces (cualquier dato)
*/

const array = [5,2,1,4,3];
const what_is_it = array.length % 2 == 0;
// true is par (even) and false is impar (odd)

const sorted_array = array.sort();

const mediana = what_is_it 
    ? (sorted_array[((sorted_array.length / 2) - 1)] + sorted_array[(sorted_array.length / 2)]) / 2 
    : sorted_array[Math.floor(sorted_array.length / 2)];

console.log(sorted_array, 'is', mediana);
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
// [['a', 1], ['b', 2], ['c', 3]]
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

### Practice:  

Este código lo encuentras en resources/codigo/practice/17.moda/practice-two   

#### Pasos: 
1. Crear un objeto para contabilizar los números y la cantidad de veces que se repiten.  
2. Convertir objeto en un array de arrays. 
3. Ordenar array de arrays usando su valor (índice 1)

```js
// moda: valor que se repite mas veces (cualquier dato)
const array = [1, 10, 14, 3, 24, 14, 10, 35, 13, 14];
const number_counter = {};
let array_list;
let values;

function moda(array){
    for (let i=0; i<array.length; i++) {
        const item = array[i];
    
        number_counter[item] ? number_counter[item] += 1 : number_counter[item] = 1;
    
        array_list = Object.entries(number_counter);
        values = array_list.sort((a, b) => a[1] - b[1]);
    }
}

moda(array);

console.log(number_counter);
// { '1': 1, '3': 1, '10': 2, '13': 1, '14': 3, '24': 1, '35': 1 }
console.log(array_list);
/* [
    [ '1', 1 ],
    [ '3', 1 ],
    [ '10', 2 ],
    [ '13', 1 ],
    [ '14', 3 ],
    [ '24', 1 ],
    [ '35', 1 ]
] */
console.log(values);
/* 
[
    [ '1', 1 ],
    [ '3', 1 ],
    [ '13', 1 ],
    [ '24', 1 ],
    [ '35', 1 ],
    [ '10', 2 ],
    [ '14', 3 ]
]
*/

// Cambiar el número para ver los valores anteriores (1, 2, 3) 
console.log(values[values.length - 1]);
// [ '14', 3 ]
console.log(sorted_array[sorted_array.length - 1][0]);
// 14
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

### Ejemplo hecho por ChatGPT     
Usando JavaScript transforma un objeto con varias claves y valores en un array de varios objetos.

#### Solución 01
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

#### Solución 02

```js
const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra',
};

function solution(obj) {
  return Object.entries(obj).map(([id, name]) => ({ id, name }));
}

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

### Practice:  

Este código lo encuentras en resources/codigo/practice/19.objetos-to-arrays   
```js
const objeto = {
    1: '🥑',
    2: '🍉',
    3: '🍇',
};

function solution(o){
    console.log(Object.entries(o).map(([id, name]) => ({id, name})));
}

solution(objeto);
```


## 20. Reto: calcula otros tipos de promedio

En las clases prácticas de este taller aprendimos a calcular el promedio (media aritmética), la mediana y la moda con JavaScript. En este reto debes encontrar la fórmula de algún otro tipo de promedio, trabajar con alguno de sus casos de uso útiles y traducirlo a código JavaScript.

Responde las siguientes preguntas en los comentarios:

-   ¿Cuál tipo de promedio elegiste para trabajar?
-   ¿Qué casos de uso tiene tu tipo de promedio?
-   ¿Cómo traduces su fórmula a código JavaScript?

Espero tu solución en la sección de aportes.

### Solución al promedio ponderado

Elegí trabajar con la media aritmética ponderada. Este es un promedio muy similar a la media aritmética, pero nos permite definir también el peso, importancia o relevancia de cada elemento en nuestro conjunto de números.

Un caso de uso de la media ponderada es el cálculo de notas académicas cuando cada materia o asignatura otorga diferentes “créditos”.

Esta es su fórmula:

> `[(N1*C1) + (N2*C2) + (N3*C3)] / (C1 + C2 + C3)`

`N` = Note   
`C` = Credit 

En español: multiplicar cada número del conjunto por su respectivo crédito, sumar todos los resultados y dividirlo entre la suma de todos los créditos.

> Recuerda que no tienen que ser únicamente 3 números, pueden ser lo que desees, esto solo fue un ejemplo.

Ahora sí, vamos paso a paso implementando el promedio ponderado en JavaScript:

-   **Definir el conjunto de números junto al peso de cada elemento**

Para esto vamos a crear un array de objetos llamado `notes`. Cada objeto tendrá tres valores: `course` con el nombre de la materia (aunque en realidad no lo utilizaremos 😅), `note` con la nota de la materia y `credit` con los créditos de la materia.

```js
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];
```

Ahora vamos paso a paso construyendo nuestra máquina para sacar promedios ponderados.

-   **Multiplicar cada número de la lista por su peso**

Vamos a usar de nuevo el método `map` de los arrays. Crearemos un nuevo arreglo de solo números a partir de multiplicar cada nota con sus créditos.

```js
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});
```

-   **Sumar todos los elementos del arreglo de elementos multiplicados por su peso**

Vamos a usar de nuevo el método `reduce` de los arrays.

Crearemos una nueva variable `sumOfNotesWithCredit` que tenga como resultado la suma de todos los elementos del arreglo `notesWithCredit`. Recuerda que la función `reduce` recibe una función con dos parámetros: el valor acumulado (que para evitar errores debemos inicializar con 0) y el nuevo elemento de los arrays.

```js
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
```

-   **Sumar todos los pesos (créditos)**

Sí, otra vez `map` y `reduce`. Vamos a crear un nuevo arreglo `credits` únicamente con los créditos de cada materia y otra nueva variable `sumOfCredits` que recorra el arreglo `credits` y sume sus elementos.

```js
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
```

-   **Hacer la división entre ambas “sumas”**

Lo último que nos falta es dividir nuestra variable `sumOfNotesWithCredit` sobre la variable `sumOfCredits`.

```js
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
```

En este caso, el promedio ponderado de una nota de 10 con créditos de 2, otra nota de 8 con un crédito de 5 y una última nota de 7 con créditos de 5 nos da como resultado `7.916`.

La media aritmética sin tener en cuenta el peso de cada nota habría sido `8.333`.

```js
// Media aritmética ponderada  

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

let notesWithCredit = notes.map(a => a.note * a.credit);
console.log(notesWithCredit);
// [ 20, 40, 35 ]

// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
let sumOfNotesWithCredit = notesWithCredit.reduce((a, b) => a + b);
console.log(sumOfNotesWithCredit);
// 95


let credits = notes.map(a => a.credit);
console.log(credits);
// [ 2, 5, 5 ]

let sumOfCredits = credits.reduce((a, b) => a + b);
console.log(sumOfCredits);
// 12

let promedioPonderado = sumOfNotesWithCredit/ sumOfCredits;
console.log(promedioPonderado); 
// 7.916666666666667


// TAMBIÉN: 
let dividend = notes.map(a => a.note * a.credit).reduce((a, b) => a + b);
console.log(dividend);

let divisor = notes.map((a) => a.credit).reduce((a, b) => a + b);
console.log(divisor);

let quotient = (dividend / divisor).toFixed(2);
console.log(quotient);
```

---

Espero que este último ejercicio te haya ayudado a interiorizar un poco más el uso de los métodos de los arrays para obtener diferentes resultados con ellos.  
Te espero en la siguiente clase.  
**¡Nunca pares de aprender!** 💚

### Una explicación que me gusta mas hecha por ChatGPT: 

Supongamos que un estudiante ha obtenido las siguientes calificaciones en un curso:

|Elemento|	Calificación|
|--------|--------------|
|Examen 1|	8/10        |
|Examen 2|	7/10        |
|Examen 3|	9/10        |
|Trabajo en equipo|	19/20|

Cada uno de estos elementos tiene un peso diferente en la calificación final del curso. Supongamos que el peso de cada elemento es el siguiente:

|Elemento| Peso|
|--------|------|
|Examen 1|	20%|
|Examen 2|	20%|
|Examen 3|	30%|
|Trabajo en equipo|	30%|

Para calcular la calificación promedio ponderada del curso, se deben seguir los siguientes pasos:

1. Convertir las calificaciones en porcentajes. Para ello, se divide cada calificación por el total posible de puntos y se multiplica por 100. Por ejemplo, la calificación del Examen 1 se convierte en (8/10) x 100 = 80%.

2. Multiplicar cada calificación por su peso. Por ejemplo, el Examen 1 tiene un peso del 20%, por lo que se multiplica la calificación (80%) por el peso (20%) para obtener 16%.

3. Sumar los productos de cada calificación y su peso. En este caso, la suma de los productos sería:

|Elemento         |	Calificación |	Total de Puntos | Peso | Calificación en %	|Peso en %|	Producto de calificación y peso|
|-----------------|--------------|------------------|------|--------------------|---------|--------------------------------|
|Examen 1         |	8/10         |	10              | 20%  | 80.00%             | 20.00%  |	16.00%|
|Examen 2         |	7/10         |	10              | 20%  | 70.00%             | 20.00%  |	14.00%|
|Examen 3         |	9/10         |	10              | 30%  | 90.00%             | 30.00%  |	27.00%|
|Trabajo en equipo|	19/20        |	20	            | 30%  | 95.00%             | 30.00%  |	28.50%|
|Total	          |-             |	-               | 100% |-                   |-        |	85.50%|

4. Dividir la suma de los productos por el total de pesos. En este caso, la calificación promedio ponderada del curso se calcula de la siguiente manera:
Calificación promedio ponderada = (Suma de los productos de calificación y peso) / (Total de pesos) = 85.50% / 100% = 0.8550

Convertir el resultado a una escala de 0 a 100. Para ello, se multiplica el resultado por 100. En este caso, la calificación promedio ponderada del curso es de 85.50 x 100 = 8550/100 = 85.50.
Entonces, la calificación promedio ponderada del curso es de 85.50 en una escala de 0 a 100, lo que se corresponde con una calificación de "B+" según la escala de calificaciones típica en los Estados Unidos.

```js
let data = [
    {
        test: 1,
        goal: 10,
        note: 8,
        weight: 0.2,
    },
    {
        test: 2,
        goal: 10,
        note: 7,
        weight: 0.2,
    },
    {
        test: 3,
        goal: 10,
        note: 9,
        weight: 0.3,
    },
    {
        teamwork: 1,
        goal: 20,
        note: 19,
        weight: 0.3,
    }
]

// Calculate dividend
let step_one = data.map(a => ((a.note * 100) / a.goal) * a.weight / 100);
console.log(step_one);
// [ 0.16, 0.14, 0.27, 0.285 ]

let step_two = step_one.reduce((a, b) => a + b);
console.log(step_two);
// 0.855

// Calculate divisor
let step_three = data.map(a => a.weight).reduce((a, b) => a + b);
console.log(step_three);
// 1

// Calculate quotient (cociente)
let quotient = step_two / step_three;
console.log(quotient);
// 0.855
```


## 21. PlatziMath: clases y métodos estáticos

index.html 
```js
<body>
    <h1>Calculate Salaries</h1>
    <p>Open the console: Control + Shift + I</p>

    <script src="platziMath.js"></script>
    <script src="salarios.js"></script>
</body>
```

platziMath.js
```js
const PlatziMath = {}; 👈👀

PlatziMath.esPar = function esPar(lista){
    return !(lista.length % 2);
}

PlatziMath.esImpar = function esImpar(lista){
    return lista.length % 2;
}

PlatziMath.calcularMediana = function calcularMediana(lista){
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

/* calcularMediana([10,20,30,40,50,60]); */


PlatziMath.calcularPromedio = function calcularPromedio(lista){
    function sumarElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

/* console.log(PlatziMath); */
```

salarios.js
```js
console.log(PlatziMath);
```

Abrimos index.html y revisamos la consola: 
```js
{esPar: ƒ, esImpar: ƒ, calcularMediana: ƒ, calcularPromedio: ƒ}
calcularMediana: ƒ calcularMediana(lista)
calcularPromedio: ƒ calcularPromedio(lista)
esImpar: ƒ esImpar(lista)
esPar: ƒ esPar(lista)
[[Prototype]]: Object
```


## 22. Cómo estructurar información en proyectos de software

### ¿Qué es un análisis salarial?

💡 Son las encuestas que recopilan información sobre la remuneración de los empleados, incluidos los salarios y las prestaciones. Estas se llevan a cabo para determinar los niveles salariales para categorías específicas de puestos de trabajo, y generalmente se llevan a cabo por región, sector o clasificación de puestos de empleo con fines de comparación.

### Análisis salarial

Estudio y revisión del salario de una persona o de un grupo de personas. Con este estudio se pueden hacer comparaciones en el tiempo, proyecciones a futuro, etc. Se puede hacer a nivel individual, empresarial de un país, etc.  
.

#### Puntos a tener en cuenta para la organización de la información en objetos y/o arrays:

-   Definir cómo organizaremos la información: qué va a ser un objeto y qué va a ser un array para ordenar cada dato que tengamos.
-   Determinar si es una persona, una empresa o un país.
-   Podemos crear un arreglo de objetos con los distintos salarios que ha tenido la persona. Esto lo lograríamos creando objetos por cada año con el salario que tuvo y la empresa en la que estuvo.
-   Podemos crear un arreglo de personas por país.
-   En algún momento tendremos que filtrar nuestro arreglo de personas por país para identificar el lugar en donde trabajaron, y así poder hacer nuestros, análisis, proyecciones, etc.


## 23. Análisis salarial con JavaScript

index.html
```html
<body>
    <h1>Calculate Salaries</h1>
    <p>Open the console: Control + Shift + I</p>

    <script src="platziMath.js"></script>
    <script src="salarios.js"></script>
    <script src="./analisis.js"></script>
</body>
```

platziMath.js  
```js
const PlatziMath = {};

PlatziMath.esPar = function esPar(lista){
    return !(lista.length % 2);
}

PlatziMath.esImpar = function esImpar(lista){
    return lista.length % 2;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada){
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if(listaEsPar){
        const mitad01ListaPar = lista[(lista.length / 2) - 1];
        const mitad02ListaPar = lista[lista.length / 2];
        
        const listaMitades = [mitad01ListaPar, mitad02ListaPar];

        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
        return medianaListaPar;
    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    };
}

/* calcularMediana([10,20,30,40,50,60]); */


PlatziMath.calcularPromedio = function calcularPromedio(lista){
    function sumarElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarElementos);

    const promedio = sumaLista / lista.length;
    /* console.log(promedio); */
    return promedio;
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
    }
    
    // const lista = listaDesordenada.sort((a,b) => a-b);
    const lista = listaDesordenada.sort(ordenarListaSort);
    
    return lista;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }
    
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

/* console.log(PlatziMath); */
```

salarios.js
```js
const salarios = [];
salarios.push({
  name: 'Juanita',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 250, },
    { year: 2019, empresa: 'Freelance', salario: 250, },
    { year: 2020, empresa: 'Industrias Mokepon', salario: 850, },
    { year: 2021, empresa: 'Industrias Mokepon', salario: 1050, },
    { year: 2022, empresa: 'Industrias Mokepon', salario: 1250, },
    { year: 2023, empresa: 'Industrias Mokepon', salario: 1250, },
    
    // { year: 2024, salario: 1250, },
  ],
});
salarios.push({
  name: 'Alex',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 450, },
    { year: 2019, empresa: 'Freelance', salario: 550, },
    { year: 2020, empresa: 'Freelance', salario: 400, },
    { year: 2021, empresa: 'Industrias Mokepon', salario: 1050, },
    { year: 2022, empresa: 'Industrias Mokepon', salario: 1250, },
    { year: 2023, empresa: 'Industrias Mokepon', salario: 1250, },
  ],
});
salarios.push({
  name: 'Nath',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 600, },
    { year: 2019, empresa: 'Freelance', salario: 625, },
    { year: 2020, empresa: 'Freelance', salario: 575, },
    { year: 2021, empresa: 'MarketerosCOL', salario: 1000, },
    { year: 2022, empresa: 'MarketerosCOL', salario: 1000, },
    { year: 2023, empresa: 'MarketerosCOL', salario: 1100, },
  ],
});
salarios.push({
  name: 'Julia',
  trabajos: [
    { year: 2018, empresa: 'MarketerosCOL', salario: 1000, },
    { year: 2019, empresa: 'MarketerosCOL', salario: 2000, },
    { year: 2020, empresa: 'MarketerosCOL', salario: 2000, },
    { year: 2021, empresa: 'MarketerosCOL', salario: 2000, },
    { year: 2022, empresa: 'MarketerosCOL', salario: 2000, },
    { year: 2023, empresa: 'MarketerosCOL', salario: 2000, },
  ],
});
salarios.push({
  name: 'Jonatan',
  trabajos: [
    { year: 2019, empresa: 'MarketerosCOL', salario: 1000, },
    { year: 2020, empresa: 'MarketerosCOL', salario: 1000, },
    { year: 2021, empresa: 'MarketerosCOL', salario: 800, },
    { year: 2022, empresa: 'MarketerosCOL', salario: 900, },
    { year: 2023, empresa: 'MarketerosCOL', salario: 1000, },
  ],
});
salarios.push({
  name: 'Armando',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 750, },
    { year: 2019, empresa: 'Freelance', salario: 750, },
    { year: 2020, empresa: 'Freelance', salario: 750, },
    { year: 2021, empresa: 'Freelance', salario: 850, },
    { year: 2022, empresa: 'Freelance', salario: 850, },
    { year: 2023, empresa: 'Freelance', salario: 850, },
  ],
});
salarios.push({
  name: 'Dilan',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 500, },
    { year: 2019, empresa: 'Freelance', salario: 500, },
    { year: 2020, empresa: 'Freelance', salario: 600, },
    { year: 2021, empresa: 'Mokepon', salario: 1100, },
    { year: 2022, empresa: 'Mokepon', salario: 1100, },
    { year: 2023, empresa: 'Mokepon', salario: 1100, },
  ],
});
salarios.push({
  name: 'Zamir',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 400, },
    { year: 2019, empresa: 'Freelance', salario: 500, },
    { year: 2020, empresa: 'Freelance', salario: 500, },
    { year: 2021, empresa: 'Mokepon', salario: 1100, },
    { year: 2022, empresa: 'Mokepon', salario: 1100, },
    { year: 2023, empresa: 'Mokepon', salario: 1200, },
  ],
});
salarios.push({
  name: 'Daniela',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 500, },
    { year: 2019, empresa: 'Freelance', salario: 500, },
    { year: 2020, empresa: 'Freelance', salario: 500, },
    { year: 2021, empresa: 'Freelance', salario: 550, },
    { year: 2022, empresa: 'Freelance', salario: 550, },
    { year: 2023, empresa: 'MarketerosCOL', salario: 850, },
  ],
});
salarios.push({
  name: 'Daniel',
  trabajos: [
    { year: 2020, empresa: 'Freelance', salario: 150, },
    { year: 2021, empresa: 'Freelance', salario: 450, },
    { year: 2022, empresa: 'Freelance', salario: 550, },
    { year: 2023, empresa: 'Freelance', salario: 650, },
  ],
});
salarios.push({
  name: 'Rigoberto',
  trabajos: [
    { year: 2018, empresa: 'MarketerosCOL', salario: 700, },
    { year: 2019, empresa: 'MarketerosCOL', salario: 700, },
    { year: 2020, empresa: 'MarketerosCOL', salario: 700, },
    { year: 2021, empresa: 'MarketerosCOL', salario: 750, },
    { year: 2022, empresa: 'MarketerosCOL', salario: 750, },
    { year: 2023, empresa: 'MarketerosCOL', salario: 750, },
  ],
});
salarios.push({
  name: 'Alicia',
  trabajos: [
    { year: 2018, empresa: 'Inversionify', salario: 300, },
    { year: 2019, empresa: 'Inversionify', salario: 1700, },
    { year: 2020, empresa: 'Inversionify', salario: 2700, },
    { year: 2021, empresa: 'Inversionify', salario: 3750, },
    { year: 2022, empresa: 'Freelance', salario: 1550, },
    { year: 2023, empresa: 'Freelance', salario: 350, },
  ],
});
salarios.push({
  name: 'Teodoro',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 600, },
    { year: 2019, empresa: 'Freelance', salario: 700, },
    { year: 2020, empresa: 'Inversionify', salario: 1700, },
    { year: 2021, empresa: 'Inversionify', salario: 1750, },
    { year: 2022, empresa: 'Freelance', salario: 800, },
    { year: 2023, empresa: 'Freelance', salario: 850, },
  ],
});
salarios.push({
  name: 'Bruce',
  trabajos: [
    { year: 2018, empresa: 'Wayne Enterprises', salario: 4600, },
    { year: 2019, empresa: 'Wayne Enterprises', salario: 4700, },
    { year: 2020, empresa: 'Wayne Enterprises', salario: 3700, },
    { year: 2021, empresa: 'Wayne Enterprises', salario: 4150, },
    { year: 2022, empresa: 'Wayne Enterprises', salario: 4400, },
    { year: 2023, empresa: 'Wayne Enterprises', salario: 3850, },
  ],
});
salarios.push({
  name: 'Alfred',
  trabajos: [
    { year: 2018, empresa: 'Wayne Enterprises', salario: 2000, },
    { year: 2019, empresa: 'Wayne Enterprises', salario: 2000, },
    { year: 2020, empresa: 'Wayne Enterprises', salario: 1500, },
    { year: 2021, empresa: 'Wayne Enterprises', salario: 1500, },
    { year: 2022, empresa: 'Wayne Enterprises', salario: 2000, },
    { year: 2023, empresa: 'Wayne Enterprises', salario: 1500, },
  ],
});
salarios.push({
  name: 'Clark Kent',
  trabajos: [
    { year: 2018, empresa: 'Daily Planet', salario: 1000, },
    { year: 2019, empresa: 'Daily Planet', salario: 1500, },
    { year: 2020, empresa: 'Daily Planet', salario: 1000, },
    { year: 2021, empresa: 'Daily Planet', salario: 1500, },
    { year: 2022, empresa: 'Daily Planet', salario: 2000, },
    { year: 2023, empresa: 'Daily Planet', salario: 1500, },
  ],
});
salarios.push({
  name: 'Lois Lane',
  trabajos: [
    { year: 2018, empresa: 'Daily Planet', salario: 2000, },
    { year: 2019, empresa: 'Daily Planet', salario: 2500, },
    { year: 2020, empresa: 'Daily Planet', salario: 2000, },
    { year: 2021, empresa: 'Daily Planet', salario: 2500, },
    { year: 2022, empresa: 'Daily Planet', salario: 2500, },
    { year: 2023, empresa: 'Daily Planet', salario: 2500, },
  ],
});
salarios.push({
  name: 'Jimmy Olsen',
  trabajos: [
    { year: 2018, empresa: 'Daily Planet', salario: 1500, },
    { year: 2019, empresa: 'Daily Planet', salario: 2000, },
    { year: 2020, empresa: 'Daily Planet', salario: 2000, },
    { year: 2021, empresa: 'Daily Planet', salario: 2500, },
    { year: 2022, empresa: 'Daily Planet', salario: 2500, },
    { year: 2023, empresa: 'Daily Planet', salario: 1500, },
  ],
});
salarios.push({
  name: 'Perry White',
  trabajos: [
    { year: 2018, empresa: 'Daily Planet', salario: 3500, },
    { year: 2019, empresa: 'Daily Planet', salario: 3700, },
    { year: 2020, empresa: 'Daily Planet', salario: 3800, },
    { year: 2021, empresa: 'Daily Planet', salario: 4000, },
    { year: 2022, empresa: 'Daily Planet', salario: 4050, },
    { year: 2023, empresa: 'Daily Planet', salario: 4050, },
  ],
});
salarios.push({
  name: 'Lex Luthor',
  trabajos: [
    { year: 2018, empresa: 'LexCorp', salario: 5000, },
    { year: 2019, empresa: 'LexCorp', salario: 5300, },
    { year: 2020, empresa: 'LexCorp', salario: 4000, },
    { year: 2021, empresa: 'LexCorp', salario: 3000, },
    { year: 2022, empresa: 'LexCorp', salario: 3500, },
    { year: 2023, empresa: 'LexCorp', salario: 3050, },
  ],
});
```

analisis.js  
```js
console.log(salarios);

// Análisis personal para Juanita
function encontrarPersona(personaEnBusqueda){
    return salarios.find(persona => persona.name == personaEnBusqueda); 
    // {name: 'Juanita', trabajos: Array(6)}
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    console.log(trabajos);
    // 0: {year: 2018, empresa: 'Freelance', salario: 250}
    // 1: {year: 2019, empresa: 'Freelance', salario: 250}
    // 2: {year: 2020, empresa: 'Industrias Mokepon', salario: 850}
    // 3: {year: 2021, empresa: 'Industrias Mokepon', salario: 1050}
    // 4: {year: 2022, empresa: 'Industrias Mokepon', salario: 1250}
    // 5: {year: 2023, empresa: 'Industrias Mokepon', salario: 1250}
    
    const salarios = trabajos.map(elemento => elemento.salario);
    console.log(salarios);
    // [250, 250, 850, 1050, 1250, 1250]

    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    console.log(medianaSalarios);
    // 850 + 1050 / 2 = 950

    return medianaSalarios;
}

medianaPorPersona('Juanita');
```

Aportes:  
- [Código](https://github.com/NekoShooter/matJs/tree/master/graficoSalarial)
- [Web](https://nekoshooter.github.io/matJs/graficoSalarial/analisisSalarial.html)

![Math](https://i.postimg.cc/tCXY6hYg/23-mates.gif)


## 24. Proyección salarial personal

```js
console.log(salarios);

// Análisis personal para Juanita

function encontrarPersona(personaEnBusqueda){
    return salarios.find(persona => persona.name == personaEnBusqueda); 
    // {name: 'Juanita', trabajos: Array(6)}
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    console.log(trabajos);
    // 0: {year: 2018, empresa: 'Freelance', salario: 250}
    // 1: {year: 2019, empresa: 'Freelance', salario: 250}
    // 2: {year: 2020, empresa: 'Industrias Mokepon', salario: 850}
    // 3: {year: 2021, empresa: 'Industrias Mokepon', salario: 1050}
    // 4: {year: 2022, empresa: 'Industrias Mokepon', salario: 1250}
    // 5: {year: 2023, empresa: 'Industrias Mokepon', salario: 1250}
    
    const salarios = trabajos.map(elemento => elemento.salario);
    console.log(salarios);
    // [250, 250, 850, 1050, 1250, 1250]

    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    console.log(medianaSalarios);
    // 850 + 1050 / 2 = 950

    return medianaSalarios;
}

/* medianaPorPersona('Juanita'); */

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
		// 850 - 250 = 600; 600 * 1 / 250 = 2.4;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    /* console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento}); */

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}

/* proyeccionPorPersona('Juanita') */
```

### Practice:  

Este código lo encuentras en resources/codigo/practice/21.salario

salarios.js 
```js
// 1. Saber si un trabajador está en la lista
// 2. Calcular la media de sus salaries
//  2.1 Sacar lista de trabajos
//  2.2 Sacar lista de salaries
//  2.2 Sacar mediana
// 3. Calcular la proyección del siguiente sueldo
//  3.1 Crear array con la lista de % de incremento
//  3.2 Calcular mediana de % de incrementos
//  3.3 Multiplicar ultimo salario * la mediana
//  3.4 Sumar ultimo salario al resultado anterior

function find_person(x){
    return salarios.find(person => person.name == x);
}

function mean_of_salaries(name){
    return PlatziMath.median((find_person(name).trabajos).map(x => x.salario));
    // 950
}

function projection_of_the_next_salary(name){
    const salaries = (find_person(name).trabajos).map(x => x.salario);
    const growth_percentages = [];

    for (let i = 1; i < salaries.length; i++) {
        const growth = salaries[i] - salaries[i - 1];
        growth_percentages.push(growth * 1 / salaries[i - 1]);
    }
    
    const median = PlatziMath.median(growth_percentages);
    const next_salary = (median * salaries[salaries.length - 1]) + salaries[salaries.length - 1];
    
    console.log(next_salary); // 1544. 11
}

find_person('Juanita');
mean_of_salaries('Juanita')
projection_of_the_next_salary('Juanita')
```

## 25. Reestructurando información sobre la marcha

```js
console.log(salarios);

// Análisis personal para Juanita

function encontrarPersona(personaEnBusqueda){
    return salarios.find(persona => persona.name == personaEnBusqueda); 
    // {name: 'Juanita', trabajos: Array(6)}
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    console.log(trabajos);
    // 0: {year: 2018, empresa: 'Freelance', salario: 250}
    // 1: {year: 2019, empresa: 'Freelance', salario: 250}
    // 2: {year: 2020, empresa: 'Industrias Mokepon', salario: 850}
    // 3: {year: 2021, empresa: 'Industrias Mokepon', salario: 1050}
    // 4: {year: 2022, empresa: 'Industrias Mokepon', salario: 1250}
    // 5: {year: 2023, empresa: 'Industrias Mokepon', salario: 1250}
    
    const salarios = trabajos.map(elemento => elemento.salario);
    console.log(salarios);
    // [250, 250, 850, 1050, 1250, 1250]

    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    console.log(medianaSalarios);
    // 850 + 1050 / 2 = 950

    return medianaSalarios;
}

/* medianaPorPersona('Juanita'); */

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    /* console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento}); */

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}

/* proyeccionPorPersona('Juanita') */

// ANÁLISIS EMPRESARIAL  
const empresas = {};

for(persona of salarios){
    for(trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }
        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
console.log(empresas);
 
/* 
console.log({empresas});
Daily Planet: 
    2018: (4) [1000, 2000, 1500, 3500]
    2019: (4) [1500, 2500, 2000, 3700]
    2020: (4) [1000, 2000, 2000, 3800]
    2021: (4) [1500, 2500, 2500, 4000]
    2022: (4) [2000, 2500, 2500, 4050]
    2023: (4) [1500, 2500, 1500, 4050] 
*/
```

### Practice:  

Este código lo encuentras en resources/codigo/practice/21.salario

```js
// ANÁLISIS EMPRESARIAL 
// 4. Crea un Object de empresas con los sueldos de cada año
//  4.1 Objeto de empresas
//  4.2 Objeto de años por cada empresa
//  4.3 Array de sueldos de cada año
// companies workers company 

const companies = {};

for (workers of salarios){
    for(company of workers.trabajos){
        if(!companies[company.empresa]){
            companies[company.empresa] = {}
        }
        if(!companies[company.empresa][company.year]){
            companies[company.empresa][company.year] = []
        }
        companies[company.empresa][company.year].push(company.salario);
    }
}
console.log(companies);
```

## 26. Salarios empresariales 


```js
// Nota: Esto continua después del código clase 25
// 26. SALARIOS EMPRESARIALES 
function medianaEmpresaYear(nombre, year){
    if(!empresas[nombre]){
        console.warn('La empresa no existe: ');
    }else if(!empresas[nombre][year]){
        console.warn('La empresa no dio salarios ese año');
    }else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

/* 
Probar:   
medianaEmpresaYear('Freelance', 2018); 
medianaEmpresaYear('Industrias Mokepon', 2019);
medianaEmpresaYear('Industrias Mokepon', 2020);
medianaEmpresaYear('Industrias Mokepon', 2021);
medianaEmpresaYear('Industrias Mokepon', 2022);
medianaEmpresaYear('NASA', 2021);
medianaEmpresaYear('Daily Planet', 2021);
*/
```

### Practice:  

Este código lo encuentras en resources/codigo/practice/21.salario

```js
// ANÁLISIS EMPRESARIAL 
// companies workers company 

const companies = {};

for (workers of salarios){
    for(company of workers.trabajos){
        if(!companies[company.empresa]){
            companies[company.empresa] = {}
        }
        if(!companies[company.empresa][company.year]){
            companies[company.empresa][company.year] = []
        }
        companies[company.empresa][company.year].push(company.salario);
    }
}

console.log(companies);


// 26. SALARIOS EMPRESARIALES   
// 5. De los datos extraidos en la clase anterior
//  5.1 Verificar si la compañia y año existen 
//  5.2 Sacar mediana salarial por año 

function median_salary_by_year(company, year){
    if(!companies[company]){
        console.warn('The company isnt in the list');
    }else if(!companies[company][year]){
        console.warn('This year isnt in the list');
    }else{
        return PlatziMath.median(companies[company][year])
    }
}

median_salary_by_year('Daily Planet', 2018)
```


## 27. Proyección de salarios por empresas

```js
// Nota: Esto continua después del código clase 26
function proyeccionPorEmpresa(nombre){
    if (!empresas[nombre]) {
        console.warn('La empresa no existe!');
    } else{
        const empresaYears = Object.keys(empresas[nombre]);
        console.log('Test 01: ', empresaYears);
        // ['2018', '2019', '2020', '2021', '2022', '2023']

        const listaMedianaYears = empresaYears.map(year => medianaEmpresaYear(nombre, year));
        console.log('Test 02', listaMedianaYears);
        // [500, 525, 500, 550, 800, 750]

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;
    
        return nuevaMediana;
    }
}

/* 
proyeccionPorEmpresa('Industrias Mokepon') //1488.095
proyeccionPorEmpresa('MarketerosCOL') //1052.631
proyeccionPorEmpresa('Freelance') //787.5

// Revisar 
empresas['MarketerosCOL'];
medianaEmpresaYear('MarketerosCOL', 2021);
medianaEmpresaYear('MarketerosCOL', 2022);
*/
```

### Practice:  
Este código lo encuentras en resources/codigo/practice/21.salario

```js
function salary_projection_by_company(company){
    if(!companies[company]){
        return 'This company isnt in the data!!!'
    }else {
        const years = Object.keys(companies[company])
        const median_annual_salary = years.map(year => median_salary_by_year(company, year));
        console.log(median_annual_salary); 
        // [850, 1000, 1000, 1400, 1450, 1000]
        const growth_percentages = [];

        for(let i=1; i < median_annual_salary.length; i++){
            const growth = median_annual_salary[i] - median_annual_salary[i - 1];
            growth_percentages.push(growth * 1 / median_annual_salary[i - 1]);
        }
        console.log('xxdxdd', growth_percentages);
        const median_growth = PlatziMath.median(growth_percentages);
        const next_salary = (median_growth * median_annual_salary[median_annual_salary.length - 1]) + median_annual_salary[median_annual_salary.length - 1]
        console.log(median_growth, next_salary);
    }
}

salary_projection_by_company('MarketerosCOL') //1052.631
salary_projection_by_company('Industrias Mokepon') // 1488.09
```

## 28. Top 10% de salarios

El método `slice()` en JavaScript se utiliza para extraer una parte de una matriz (array) existente y devolver una nueva matriz con los elementos seleccionados. El método toma dos argumentos: el índice de inicio y el índice de finalización (opcional). 

El índice de inicio especifica el punto de partida de la extracción, mientras que el índice de finalización (opcional) especifica el punto final de la extracción (el índice en la nueva matriz donde la extracción debe detenerse, sin incluir el elemento con ese índice). Si no se proporciona el segundo argumento, se extraerán todos los elementos desde el índice de inicio hasta el final de la matriz.

El método slice() no modifica la matriz original, sino que devuelve una nueva matriz con los elementos seleccionados. Aquí hay un ejemplo de cómo se puede utilizar el método slice() en JavaScript:

```js
const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]
```

En este ejemplo, la matriz original contiene los números del 1 al 5. Usando el método slice(), se crea una nueva matriz que contiene los elementos desde el índice 1 hasta el índice 4 (sin incluir el elemento con el índice 4). La nueva matriz se almacena en la variable slicedArray y se imprime en la consola el resultado.


```js
// Nota: Esto continua después del código clase 27
// Análisis general  
function medianaGeneral(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    /* const medianaPorCadaNombre = nombres.map(nombre => medianaPorPersona); */
    
    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
}

/* medianaGeneral(); */

function medianaTop10(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    // slice - splice
    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length)

    /* console.log(top10);
    console.log({medianasOrdenadas}); */
    const medianaTop10 = PlatziMath.calcularMediana(top10);
    return medianaTop10;
};

/* medianaTop10() */
/* medianaGeneral() */
```

### Practice:  
Este código lo encuentras en resources/codigo/practice/21.salario  

```js
// Top 10% de salarios: length is 100%, 10% is x
// 7.1 Sacar la media de los sueldos de cada persona 
// 7.2 Sacar la mediana de las medianas de los sueldos d/c persona
// 8.1 Obtener la cantidad de personas dentro del top 10
// 8.2 Obtener el resto 
// 8.3 Ordenamos la lista de medianas 
// 8.4 Extraemos los montos dentro del top 
// 8.5 Sacamos mediana 

function overall_median(){ // mediana general
    const medians_list = salarios.map(person => mean_of_salaries(person.name));
    const median = PlatziMath.median(medians_list);

    return median;
}

function top_ten_salaries(){
    const median_list = salarios.map(person => mean_of_salaries(person.name));
    const top_ten = 10 * median_list.length / 100; // length / 10
    const the_rest = median_list.length - top_ten;
    
    const sorted_median = PlatziMath.sort_list(median_list);
    const top = median_list.slice(the_rest, sorted_median.length);
    const median = PlatziMath.median(top);

    return median; // [3900, 4275]
}

overall_median();
top_ten_salaries();
```

## 29. Reto: extiende tu análisis salarial

En este módulo pusimos en práctica todo lo que aprendimos en las clases pasadas para calcular la mediana de salarios de tu país (aunque por ahora son solo datos ficticios).

Para completar este reto debes dejar volar tu imaginación y usar todas las herramientas que aprendiste para **expandir tu análisis salarial**.

### ¿Cómo? Como quieras

Puedes calcular la mediana de ingresos no fijos, capacidad de ahorro, capacidad de endeudamiento, recolección de impuestos, diferencia salarial, relación entre formalidad/informalidad y pobreza/riqueza…

El reto es de tema libre. Escoge la pregunta que prefieras, incluso mejor si has vivido una situación parecida alguna vez, resuélvela y muéstranos tu solución en los comentarios.

Para lograrlo solo debes seguir los siguientes pasos:

-   Plantea muy detalladamente el problema/análisis/cálculo/hipótesis que quieres resolver.
-   Encuentra las fórmulas necesarias para resolver el dilema que seleccionaste.
-   Define las variables y funciones para resolver tus fórmulas.
-   Presenta los resultados de tu informe en una página web dinámica usando HTML, CSS y JavaScript.
-   Organiza y documenta tu código para que sea más fácil de leer y entender.
-   Publícalo en tu repositorio de GitHub y muéstranos el link en la sección de comentarios.

Te recomiendo que inicies con una pregunta sencilla. Pon un tiempo límite generoso, desarrolla tu proyecto hasta el final y publica tus resultados en la sección de comentarios.

Luego vuelve a empezar con una pregunta más compleja. Y así sucesivamente hasta que tu estudio de salarios sea el proyecto del que más orgullosa te puedas sentir.

Estoy seguro de que los siguientes Platzi Lives serán una gran fuente de inspiración:

-   [Qué está pasando en Colombia y por qué hay protestas](https://www.youtube.com/watch?v=1oiTB_4tcx0)
-   [Qué está pasando en Colombia en el 2021](https://www.youtube.com/watch?v=8LjOG7FSL_Q)
-   [Por qué hay protestas en Chile](https://www.youtube.com/watch?v=8LjOG7FSL_Q)
-   [Qué es la Economía Naranja (y qué no)](https://www.youtube.com/watch?v=fs31Woz8f80)
-   [La economía de un programador](https://www.youtube.com/watch?v=8LjOG7FSL_Q)
-   [Cuánto ganarán los programadores en el 2020 y 2021](https://www.youtube.com/watch?v=sauDgFSUmsM)
-   [Los próximos 4 años de la industria Tech en Latinoamérica](https://www.youtube.com/watch?v=UKNv_z5OvCY)
-   [¿Eres de izquierda o de derecha?](https://www.youtube.com/watch?v=NE0di4Aqa_Q)
-   [Qué es la Bolsa de Valores](https://www.youtube.com/watch?v=WQFXlJTU1To)
-   [Cómo prepararte para una recesión económica](https://www.youtube.com/watch?v=JCMYjez93pk)
-   [Por qué hay crisis económica y en qué invertir](https://www.youtube.com/watch?v=ZrYD4aLqo7w)

### Complementos

Si sigues adelante con la [Escuela de Desarrollo Web](https://platzi.com/web), vas a aprender muchas más herramientas de JavaScript para consultar datos desde el backend y manipular el DOM aún más intensamente.

También puedes complementar tu ruta de aprendizaje con la [Escuela de Data Science e Inteligencia Artificial](https://platzi.com/datos). Ahí aprenderás a muchísima, muchísima más profundidad cómo limpiar, consultar y presentar informes a partir de un análisis de datos.

Además, en la [Escuela de Finanzas e Inversiones](https://platzi.com/escuela/escuela-finanzas/) puedes iniciar tu educación, planeación y evaluación financiera para todo tipo de proyectos, ya sea con fines personales, emprendedores o incluso inversionistas.

---

Espero ver tus retos en la sección de comentarios.

**¡Nunca pares de aprender!** 💚


## 30. Toma el Taller Práctico de JavaScript: Videojuegos


## Examen 📌
<details>
	<summary>Haz clic para ver los resultados 👀</summary>
	<br/>

1. Necesitas analizar la riqueza / pobreza general de tu país. Debes evitar que el aumento excesivo de sueldo de una sola persona altere los resultados de tu análisis. ¿Qué herramienta estadística usarías?
	- Promedio
	- Media Aritmética
	- Moda
	- 📌Mediana

2. ¿Cuál método o propiedad de los arrays en JavaScript es el correcto para extraer los elementos 1, 2 y 3 del siguiente array: [“Natalia”, “Juanita”, “Luisa”, “Tatiana”]?
	- .forEach
	- 📌.splice
	- .reduce
	- .push
	- .map

3. ¿Para qué nos sirve el método .splice de los arrays?
	- Para crear un nuevo array a partir de iterar por cada elemento del array inicial.
	- 📌Para cortar alguna cantidad de elementos dentro de un array.
	- Para iterar por cada elemento de un array y dar como resultado algún valor.

4. Necesitas encontrar al primer elemento de un array que cumpla X condición. ¿Qué método usarías?
	- 📌.find
	- .map
	- .slice
	- .sort
	- .reduce

5. ¿Cuál es la diferencia entre el método .map y .forEach de los arrays?
	- 📌El método .map crea un nuevo arreglo a partir de las iteraciones a otra lista. El método .forEach solo recorre cada posición de un arreglo, pero no crea uno nuevo a partir del original.
	- El método .forEach crea un nuevo arreglo a partir de las iteraciones a otra lista. El método .map solo recorre cada posición de un arreglo, pero no crea uno nuevo a partir del original.
	- Ambos métodos son exactamente iguales.
	- El método .map nos permite trabajar en arrays bidimensionales. El método .forEach solo en arrays "normales".

6. Necesitas duplicar el valor de cada elemento de tu array. ¿Qué método usarías?
	- .sort
	- .filter
	- .reduce
	- .slice
	- 📌.map

7. ¿Qué métodos de JavaScript nos permite agrupar y colapsar mensajes en la consola?
	- console.logGroup() y console.logGroupEnd()
	- 📌 console.group('Tema') y console.groupEnd('Tema')
	- console.group('Tema') y console.endGroup('Tema')
	- console.table('Tema')

8. ¿Cuál es la diferencia entre el método .find y .filter de los arrays?
	- El método .filter devuelve el primer elemento que cumpla con nuestra validación. El método .find devuelve un nuevo array con todos los elementos que cumplan la validación.
	- 📌El método .find devuelve el primer elemento que cumpla con nuestra validación. El método .filter devuelve un nuevo array con todos los elementos que cumplan la validación.

9. Tienes una lista de números. Quieres obtener la suma de todos ellos. ¿Cuál método de los arrays está especialmente diseñado para esto?
	- .forEach
	- .map
	- .filter
	- 📌.reduce

10. ¿Cómo funciona el método .sort de los arrays?
	- Ejecuta una función por cada elemento del array. En cada iteración recibimos 2 parámetros (e.j. a y b). El primero representa al valor acumulado y el segundo a cada elemento del array. En el return de la función debemos devolver un número positivo (si `b` es mayor que `a`), negativo (si `b` es menor que `a`) o 0 (si son iguales).
	- 📌Ejecuta una función por cada elemento del array. En cada iteración recibimos 2 parámetros (e.j. a y b). Ambos representan a diferentes elementos del array. En el return de la función debemos devolver un número positivo (para mover a `a` después de `b`), negativo (para mover a `a` antes que a `b`) o 0 (dejar todo igual).
	- Ejecuta una función por cada elemento del array. En cada iteración recibimos 2 parámetros (e.j. a y b). El primero representa al primer valor del array y el segundo al array completo. En el return de la función debemos indicar si `a` es mayor a `b.length` para saber si reubicamos ese elemento a la primera o última posición del array. 

11. ¿Cuál de las siguientes herramientas estadísticas soporta emojis (no solo números, sino cualquier elemento o cosa)?
	- Mediana
	- Media Aritmética
	- Promedio
	- 📌 Moda

12. ¿Cuál de las siguientes herramientas estadísticas se calcula ligeramente diferente dependiendo de si la lista es par o impar?
	- Promedio
	- Moda
	- 📌Mediana
	- Media Aritmética

13. ¿Cómo calculamos la mitad de la cantidad de elementos de una lista impar?
	-  📌lista.length / 2
	- lista[lista.length * 50%]
	- Number(lista) / 2
	- lista[lista / 2]

14. ¿Para qué sirve el método .reduce de los arrays?
	-  📌Para reducir nuestro array a 1 solo valor ejecutando un cálculo por cada elemento.
	- Para ejecutar un cálculo por cada elemento de nuestro array.
	- Para reducir la cantidad de elementos de nuestro array ejecutando un cálculo por cada iteración.
</details>

```js

```


```js

```
