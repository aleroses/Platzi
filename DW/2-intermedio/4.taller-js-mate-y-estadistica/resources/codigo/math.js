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

function calcularTriangulo(lado1, lado2, base, altura){
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

console.groupEnd('Triangulo'); 

// Circle 
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

function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI.toFixed(3),
        area: radioAlCuadrado * Math.PI.toFixed(3),
    }
}

console.groupEnd('Circle'); 


// Triangulo Isosceles  
console.group('Triangulo'); 

function calcularAlturaTriangulo(lados, base){
    if (lados == base){
        console.warn('Este no es un Triángulo isosceles');
    } else {
        // h = raiz cuadrada(lado1**2 - (b**2)/4)
        return /* altura */ Math.sqrt((lados ** 2) - ((base ** 2)) / 4);
    }
}


console.groupEnd('Triangulo'); 


// Triangulo Escaleno 
console.group('Triangulo Escaleno'); 
// Formula:  
// Altura de un triángulo escaleno si es que conocemos todos sus lados: 

// h = 2/a raiz cuadrada(S (S - a)(S -b)(S - c))
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
        return "La altura (height) es: " + Math.floor(h);
    } else {
        console.warn('Algo salio mal!!');
    }
}

console.groupEnd('Triangulo Escaleno'); 

// Solución de platzi al reto anterior

function solution(lado1, lado2, lado3) {
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

