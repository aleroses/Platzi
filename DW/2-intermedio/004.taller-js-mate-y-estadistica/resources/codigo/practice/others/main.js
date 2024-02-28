// Encontrar datos con Objetos 
/* let coupon = "ale";

let coupon_list = {
    'ale': 50,
    'ivo': 25,
    'levi': 12,
};

console.log(coupon_list[coupon]); */


// Encontrar datos con Array de Objetos: find 
/* let coupon = "levi";

let coupon_list = [];
coupon_list.push({
    name: 'ale',
    discount: 50,
});

coupon_list.push({
    name: 'ivo',
    discount: 25,
});

coupon_list.push({
    name: 'levi',
    discount: 12,
});


function find_coupon(item){ // Parametro item 
    console.log(item.name == coupon);
    return item.name == coupon;
} 

// Argumento coupon_list
successful_coupon = coupon_list.find(find_coupon);
console.log(successful_coupon);
 */


// Encontrar datos con Array de Objetos: filter 
let coupon = "levi";

let coupon_list = [];
coupon_list.push({
    name: 'ale',
    discount: 50,
});

coupon_list.push({
    name: 'ivo',
    discount: 25,
});

coupon_list.push({
    name: 'levi',
    discount: 12,
});


function find_coupon(item){ // Parametro item 
    console.log(item.name == coupon);
    return item.name == coupon;
} 

// Argumento coupon_list
successful_coupon = coupon_list.filter(find_coupon);
console.log(successful_coupon);





// Otro ejemplo 
/* function isPrime(element) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
        return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, no encontrado
console.log([4, 5, 8, 12].find(isPrime)); // 5 */