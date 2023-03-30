/* var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal); */


const fruits = () => {
    if (true) {
    /* Var: function scope: alcance de la f.*/
        var fruit1 = 'Apple';
        var fruit1 = 'dog';
        fruit1 = 'Orange';
        console.log(fruit1);
    /* Let: block scope */
        let fruit2 = 'Kiwi'; 
        /* let fruit2 = 'Banana'; */
        fruit2 = 'Uva';
        console.log(fruit2);
    /* Const: block scope */
        const fruit3 = 'Banana'; 
        /* const fruit3 = 'Pera'; */
        /* fruit3 = 'Sandia'; */
        console.log(fruit3);
    }
    /* Var: Su alcance es global */
    console.log(fruit1);
    /* Let y Const: Su alcance no es global: Error */
    console.log(fruit2);
    console.log(fruit3);
} 
fruit1 = 'xd';

fruits();




function fun() {
    var ap = 'granda';
    return nombre + ap;
}



fun();
var nombre = 'diego';