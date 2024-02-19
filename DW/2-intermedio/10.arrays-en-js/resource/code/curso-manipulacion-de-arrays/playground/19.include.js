//  Retornar un array solo con las palabras que cumplan con la condición

function filter_by_term(array, term) {
    return array.filter(x => x.includes(term));
}

filter_by_term(["ana", "santi", "nico", "anastasia"], "ana");
filter_by_term(["ana", "santi", "nico", "anastasia"], "xyz");