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
/* function ordenarLista(listaDesordenada){
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

ordenarLista([5,3,4,8,9,4,2,1,7]); */

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

/* ordenarLista([5,3,4,8,9,4,2,1,7]); */

// Otra forma: arrow function 
/* const lista = listaDesordenada.sort((a, b) => a -b); */