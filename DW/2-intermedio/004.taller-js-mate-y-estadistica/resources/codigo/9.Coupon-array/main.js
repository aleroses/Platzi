let input_price = document.querySelector(".price");
let input_coupon = document.querySelector(".coupon");
let btn_buy = document.querySelector(".buy");
let pay = document.querySelector(".pay");

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

btn_buy.addEventListener('click', calculate_discount);

function calculate_discount(){
    let price = Number(input_price.value);
    let coupon = input_coupon.value;

    if(!price || !coupon){
        pay.innerText = 'Check the price and coupon of the item!!!';
        return
    }

    let discount_data;

    function find_coupon(item){ // ale or x
        console.log(item, item.name, item.name == coupon);//👈👀
        return item.name == coupon;
    }

    let successful_coupon = coupon_list.find(find_coupon);

    if(successful_coupon){
        discount_data = successful_coupon.discount;
    }else{
        pay.innerText = "This coupon isn't valid"
        return
    }

    pay.innerText = `The price is: $${price * (100 - discount_data) / 100}.00`
}

console.log(coupon_list);
















/* let input_price = document.querySelector('.price');
let input_coupon = document.querySelector('.coupon');
let btn_buy = document.querySelector('.buy');
let pay = document.querySelector('.pay');

const couponList = [];
couponList.push({
    name: 'ale',
    discount: 50,
});
couponList.push({
    name: 'ivo',
    discount: 40,
});
couponList.push({
    name: 'levi',
    discount: 30,
});
couponList.push({
    name: 'vovi',
    discount: 20,
});

btn_buy.addEventListener('click', calculate_discount);

function calculate_discount(){  
    let price = Number(input_price.value);
    let coupon = input_coupon.value;

    if(!price || !coupon){ // Or
        pay.innerText = 'Check the price and coupon of the item!!!';
        return;
    }

    let discount_data;
    function isCouponInArray(couponElement){ // {name, discount}
        console.log(couponElement);
        console.log(couponElement.name == coupon);
        return couponElement.name == coupon;
    }
    
    const couponInArray = couponList.find(isCouponInArray); //.filter

    // if(couponInArray.length > 0)
    if(couponInArray){
        discount_data = couponInArray.discount; // {}
        // discount = couponInArray[0].discount;
    }else {
        pay.innerHTML = "The coupon isn't value"  
        return;
    };

    console.log({
        coupon,
        discount_data,
        couponInArray,
        couponList,
    })

    pay.innerHTML = `The price is: $${price * (100 - discount_data) / 100}.00 🤠`;
    return;
} */