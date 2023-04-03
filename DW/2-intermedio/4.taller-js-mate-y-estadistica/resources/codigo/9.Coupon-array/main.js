let input_price = document.querySelector('.price');
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

    let discount;
    function isCouponInArray(couponElement){ // {name, discount}
        return couponElement.name == coupon;        
    }
    
    const couponInArray = couponList.find(isCouponInArray); //.filter

    // if(couponInArray.length > 0)
    if(couponInArray){
        discount = couponInArray.discount; // {}
        // discount = couponInArray[0].discount;
    }else {
        pay.innerHTML = "The coupon isn't value"  
        return;
    };

    console.log({
        coupon,
        discount,
        couponInArray,
        couponList,
    })

    pay.innerHTML = `The price is: $${price * (100 - discount) / 100}.00 🤠`;
    return;
}