/* 
let esPar = (lista) => (lista.length % 2) == 0 ? true : false;
console.log(esPar([1, 2, 3, 4])); */


/* let esPar = lista => lista.length % 2 == 0;
console.log(esPar([1,2,3,4])); */



// Otra forma

function esPar(lista){
    return !(lista.length % 2);
}

function calcularMediana(lista){
    const listaEsPar = esPar(lista);
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

// Math.floor(10.6) // 10
// Math.ceil(10.2) // 11