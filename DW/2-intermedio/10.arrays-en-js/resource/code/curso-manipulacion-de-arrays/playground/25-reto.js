function count_words(array) {
    console.log(array.join(' ').split(' ').length);
    /* return array.join(' ').split(' ').length; */
}

count_words([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated"
]); // 20
count_words([]); // 1 ???


// Una mejor forma y que no devuelve 1!!!
function words(array) {
    // Divide cada frase y la vuelve a unir luego hace un conteo 
    return array.flatMap(w => w.split(' ')).length;
}

words([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated"
]); // 20
words([]); // 0