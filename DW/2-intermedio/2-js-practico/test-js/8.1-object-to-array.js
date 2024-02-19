const car = {
    brand: "Totoya",
    model: "Corolla",
    year: 2020,
}

// Object.values(car)
// const array = Object.values(car)

function imprimirElementos(objeto){

    const array = Object.values(objeto);

    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

imprimirElementos(car);