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