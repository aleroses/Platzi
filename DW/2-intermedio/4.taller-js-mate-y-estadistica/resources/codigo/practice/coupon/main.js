let input_price = document.querySelector(".price");
let input_coupon = document.querySelector(".coupon");
let btn = document.querySelector(".buy");
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


btn.addEventListener('click', calculate_discount);

function calculate_discount(){
    let price = Number(input_price.value);
    let coupon = input_coupon.value;

    if(!price || !coupon){
        pay.innerText = "Check the price and coupon of the item!!!"
        return
    }

    let discount_data;
    function find_coupon(item){
        return item.name == coupon;
    }

    successful_coupon = coupon_list.find(find_coupon);
    if(successful_coupon){
        discount_data = successful_coupon.discount;
    }else {
        pay.innerText = "This coupon isn't valid...";
        return
    }

    pay.innerText = `The price is: ${price * (100 - discount_data) / 100}`;
    return;
};