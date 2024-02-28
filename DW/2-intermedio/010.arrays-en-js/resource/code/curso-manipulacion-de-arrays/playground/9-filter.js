// Obtener las que tienen 4 o mas letras 

// Metodo 01
/* const words = ['amor', 'sol', 'piedra', 'día'];
const new_words = words.filter(word => word.length >= 4);

console.log({words, new_words}); */


// Metodo 02
const words = ['amor', 'sol', 'piedra', 'día'];

function filter_by_length(array){
    return array.filter(word => word.length >= 4)
}

filter_by_length(words);