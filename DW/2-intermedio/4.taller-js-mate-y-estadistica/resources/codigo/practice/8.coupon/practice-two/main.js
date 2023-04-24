const price = 250;
const coupon = document.querySelector('.coupon');
const btn = document.querySelector('.send');
const result = document.querySelector('.result');

const coupon_list = [];
coupon_list.push({
    name: 'one',
    discount: 50,
});
coupon_list.push({
    name: 'two',
    discount: 25,
});
coupon_list.push({
    name: 'three',
    discount: 12,
});

btn.addEventListener('click', calculate_discount);

function calculate_discount(){
    if(!coupon.value){
        result.innerText = 'Enter the coupon!!!';
        return
    }

    const find_coupon = coupon_list.find(item => item.name == coupon.value);

    if(!find_coupon){
        result.innerText = `The coupon isn't valid!!!`;
        return
    }
    
    result.innerText = `The price is: $${(100 - find_coupon.discount) * price / 100}.00`
}