const numbers = [1, 2, 3, 4];
let suma_acumulada = 0;

let add = numbers.reduce((suma, item) => suma + item, suma_acumulada);

console.log('Promedio con reduce:', add / numbers.length);

// Otra forma de sumar todo y dividir entre dos (Promedio)
/* let contador = 0;

for(let i=0; i< numbers.length; i++){
    console.log(contador)
    contador = numbers[i] + contador;

}
console.log('Promedio con for:', contador / numbers.length); */

// otro ejemplo con reduce:  

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
