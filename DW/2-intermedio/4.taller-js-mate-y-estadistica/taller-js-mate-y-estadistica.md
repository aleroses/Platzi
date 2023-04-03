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
```
```

```
```

```
```