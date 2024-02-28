/* 
let esPar = (lista) => (lista.length % 2) == 0 ? true : false;
console.log(esPar([1, 2, 3, 4])); */


/* let esPar = lista => lista.length % 2 == 0;
console.log(esPar([1,2,3,4])); */



// Calcular Mediana de números pares e impares 
function esPar(lista){
    return !(lista.length % 2);
}

/* function esImpar(lista){
    return lista.length % 2;
} */

function calcularMediana(lista){
    const listaEsPar = esPar(lista);
    console.log(listaEsPar, "xd");

    if(listaEsPar){
        /* const indexMitad01ListaPar = (lista.length / 2) - 1;
        const indexMitad02ListaPar = lista.length / 2; */
        const mitad01ListaPar = lista[(lista.length / 2) - 1];
        const mitad02ListaPar = lista[lista.length / 2];
        
        const listaMitades = [];
        listaMitades.push(lista[mitad01ListaPar]);
        listaMitades.push(lista[mitad02ListaPar]);

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

/* calcularPromedio([1, 2, 3, 4]); */

// Math.floor(10.6) // 10
// Math.ceil(10.2) // 11