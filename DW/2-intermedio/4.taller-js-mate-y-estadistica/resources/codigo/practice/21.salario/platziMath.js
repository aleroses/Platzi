/* 
- promedio or mediana aritmética +++ / lenght
    - 1, 2, 3 rpt: 6/3
- mediana 
	- 450, 500, 600 rpt: 500
	- 100, 200, 300, 400 rpt: 200+300/2
- moda: valor que se repite mas veces (cualquier dato)
- promedio ponderado or media aritmética ponderada  
    - define el peso de cada elemento en nuestro conjunto de números: 
        - n = número; 
        - p = peso;
    - [(n1*p1) + (n2*p2) + (n3*p3)] / (p1 + p2 + p3)
*/

const PlatziMath = {};

// Par e Impar 
const number_list = [60,50,10,40,20,30];

PlatziMath.even_and_odd = function (array){
    // true is par and false is impar:
    return array.length % 2 == 0 ? true : false;
}

// Promedio: 1, 2, 3 rpt: 6/3  
PlatziMath.average = function(array){
    return array.reduce((a, b) => a + b) / array.length;
}

// Mediana: 
// 450, 500, 600 rpt: 500
// 100, 200, 300, 400 rpt: 200+300/2
PlatziMath.median = function(array){
    if(PlatziMath.even_and_odd(array)){
        let left_number = array[(array.length / 2) -1 ];
        let right_number = array[array.length / 2];
        return (left_number + right_number) / 2;
    }else{
        return array[Math.floor(array.length / 2)];
    }
}

// Lista ordenada 
PlatziMath.sort_list = function(array){
    return array.sort((a, b) => a - b);
}

// Lista Bidimensional ordenada 
/* const two_list = [
    {number: 5},
    {number: 1},
    {number: 4},
    {number: 2},
    {number: 3},
]

PlatziMath.two_dimensional_list = function(array){
    console.log(Object.entries(array));
} */

PlatziMath.sort_list(number_list);
PlatziMath.even_and_odd(number_list);
PlatziMath.average(number_list);
PlatziMath.median(number_list);
/* PlatziMath.two_dimensional_list(two_list); */












/* const PlatziMath = {};

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

calcularMediana([10,20,30,40,50,60]);


PlatziMath.calcularPromedio = function calcularPromedio(lista){
    function sumarElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
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
 */

/* console.log(PlatziMath); */