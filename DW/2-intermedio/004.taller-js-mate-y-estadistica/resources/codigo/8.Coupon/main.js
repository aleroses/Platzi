const coupon = document.querySelector('.coupon');
const buy = document.querySelector('.buy');
const pay = document.querySelector('.pay');

const coupon_list = {
    coupon_one: 'white',
    coupon_two: 'purple',
    coupon_three: 'black'
};

buy.addEventListener('click', discount);

function discount(){
    for(let item in coupon_list){
        if(coupon.value === coupon_list[item]){
            pay.innerText = coupon.value + coupon_list[item];
            if(coupon.value === 'white'){   
                pay.innerText = `Congratulation 😎 You have a 50% of Discount: $${12345 * 0.5}`;
            } else if (coupon.value === 'purple'){
                pay.innerText = `Congratulation 😎 You have a 25% of Discount: $${12345 * 0.75}`;
            }else {
                pay.innerText = `Congratulations 😎 You have a 12% Discount: $${12345 * 0.88}`;
            }
        }else if (coupon.value != "white" && coupon.value != "purple" && coupon.value != "black") {
            pay.innerText = `Try again 🤠`;
        }
        console.log(item, ":", coupon_list[item]);
    }
}


// Otra forma sin objeto y sin for in
/* function discount(){
    if (coupon.value != "white" && coupon.value != "purple" && coupon.value != "black"){
        pay.innerText = `Try again 🤠`;
    }else {
        if(coupon.value === 'white'){   
            pay.innerText = `Congratulation 😎 You have a 50% of Discount: $${12345 * 0.5}`;
        } else if (coupon.value === 'purple'){
            pay.innerText = `Congratulation 😎 You have a 25% of Discount: $${12345 * 0.75}`;
        }else {
            pay.innerText = `Congratulations 😎 You have a 12% Discount: $${12345 * 0.88}`;
        }
    }
} */












/* const discount_list = {
    discount_one: 50,
    discount_two: 25,
    discount_three: 12,
} */