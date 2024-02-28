// Solución personal 
/* let number = 14;
let number_list = [1, 10, 14, 3, 24, 14, 10, 35, 13, 14];

function find_number(item){
    return item == number;
}

successful_number = number_list.filter(find_number);
console.log(`Encontramos ${successful_number.length} coincidencias`, successful_number); */

// Solución Platzi
/* function calcularModa(lista){
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
    console.log(listaCount, listaArray);
}

calcularModa([8,2,3,4,8,1,'a','abc',8,13,'abc','abc'])

function ordenarListaBidimensional(listaDesordenada){
    function ordenarListaSort(valorAcumulad, nuevoValr){
        return valorAcumulad - nuevoValr;
        // return 5 - 10 = -5 No lo mueve
        // return 5 - 5 = 0 No lo mueve 
        // return 10 - 5 = 5 Lo mueve de posición  
    }

    const lista = listaDesordenada.sort(ordenarListaSort)
    return lista;
}
 */


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
    

    console.log(/* listaCount, */ listaArray, /* listaOrdenada, */ /* listaMaxNumber */);
    /* console.log('La moda es:', listaMaxNumber[0], 'because se repite', listaMaxNumber[1]); */
    return moda;

}

calcularModa([5,6,7,5,5,7,4/* 1,4,8,1,'a',1,'abc','abc','abc' */])

function ordenarListaBidimensional(listaDesordenada, i){
    function ordenarListaSort(valorAcumulad, nuevoValr){
        console.log(valorAcumulad[0], valorAcumulad[1], ':',nuevoValr[0], nuevoValr[1], ':', valorAcumulad[1] - nuevoValr[1]);
        return valorAcumulad[i] - nuevoValr[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort)
    return lista;
}
















// Solución Comunidad
/* const arr2 = [1, 2, 6, 6, 3, 4, 5, 4, 5, 1, 2, 4, 4];

const histogram = array => {
    const obj = new Object();
    array.forEach(element => !obj[element] ? obj[element] = 1 : obj[element]++);
    return obj;
};
console.log(histogram(arr2)); */