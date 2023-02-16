var frutas = ["Manzana", "Pera", "Uva"]

for (i = 0; i < frutas.length; i++){
    
    function algo(lista){
        console.log(lista[i]);
    }
    
    algo(frutas);
}


/* Otra solución */ 
var frutas = ["Manzana", "Pera", "Uva"]

function algo(lista){
    for(i=0; i < frutas.length; i++){
        console.log(lista[i]);
    }
}

algo(frutas);