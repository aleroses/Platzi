let input_price = document.querySelector('.price');
let input_coupon = document.querySelector('.coupon');
let btn_buy = document.querySelector('.buy');
let pay = document.querySelector('.pay');

let coupon_list = {
    'ale': 50,
    'ivo': 25,
    'levi': 12,
};

btn_buy.addEventListener('click', calculate_discount);

function calculate_discount(){  
    let price = Number(input_price.value);
    let coupon = input_coupon.value;

    if(!price || !coupon){ // Or
        pay.innerText = 'Check the price and coupon of the item!!!';
        return;
    }

    let descount;
    if(coupon_list[coupon]){
        descount = coupon_list[coupon];
    }else {
        pay.innerText = "This coupon isn't value...";
        return;
    };

    pay.innerHTML = `The price is: $${price * (100 - descount) / 100}.00 🤠`;
    return;
}







/* const inputPrice = document.querySelector('.price');
const inputCoupon = document.querySelector('.coupon');
const btn = document.querySelector('.buy');
const pay = document.querySelector('.pay');

btn.addEventListener('click', calcularPrecioConDescuento);

const couponObj = {
    'ale': 50,
    'ivo': 25,
    'levi': 12,
}

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if (!price || !coupon){ //Or
        pay.innerText = 'no sirve';
        return
    }

    let discount;

    if(couponObj[coupon]){
        discount = couponObj[coupon];
    }else {
        pay.innerText = 'El cupón no es válido';
        return
    }

    const newPrice = (price * (100 - discount)) / 100;

    pay.innerText = 'El nuevo precio es: ' + newPrice;  
}
 */