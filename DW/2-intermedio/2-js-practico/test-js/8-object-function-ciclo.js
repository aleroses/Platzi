var car = {
    brand: "Totoya",
    model: "Corolla",
    year: 2020,
}



/* EJEMPLO DE COMPAÑERO */
let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

function readObject(object){
    for (let key in object) {
        console.log(key, ":", object[key]);
    }
}

readObject(myCar);


//PRACTICANDO

let car = {
    brand: "Ford",
    model: "Mustang",
    year: 1969,
}

function readObject(object){
    for (let key in object){
        console.log(key, ":", object[key]);
    }
}

readObject(car);