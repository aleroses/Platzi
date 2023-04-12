// find moda 

let number_list = [20,20,30,30,10,10,10,10,10,80,80,80,80];

function moda(list){
    let new_list = {};

    for(let i=0; i<list.length; i++){
        let item = list[i];
        
        new_list[item] ? new_list[item] += 1 : new_list[item] = 1;
    }

    console.log('Array original:', number_list);
    // Cantidad de números que se repiten
    console.log('Objeto:', new_list);

    // Conversión de Objeto a Array de arrays
    let array_list = Object.entries(new_list)
    console.log('Array de arrays:', array_list);

    let sort_by_value = sort_two_dimensional_list(array_list, 1);
    console.log('Ordenar por valores:', sort_by_value);

    let find_moda = sort_by_value[sort_by_value.length - 1]
    console.log('Array de la moda:', find_moda);
    let found_moda = find_moda[0];
    console.log('Moda:', found_moda);
    return
}

moda(number_list)

function sort_two_dimensional_list(unordered_list, i){
    function sort_list(a, b){
        return a[i] - b[i];
    }

    let sorted_list = unordered_list.sort(sort_list);
    return sorted_list;
}

























/* let number_list = [20,20,30,30,10,10,10,10,10,80,80,80,80];

function moda(list){
    let new_list = {};

    for(let i=0; i<list.length; i++){
        let item = list[i];

        new_list[item] ? new_list[item] += 1 : new_list[item] = 1;
    }
    console.log('Array', number_list);
    console.log('Objeto', new_list);

    // De objeto a array de arrays 
    let array_list = Object.entries(new_list);
    console.log('Array de arrays', array_list);

    let sort_by_value = sort_two_dimensional_list(array_list, 1);
    console.log('Ordenado por valor',sort_by_value);

    let find_moda = sort_by_value[sort_by_value.length - 1];
    console.log('Find moda', find_moda);
    let found_mode = find_moda[0];
    console.log('Found moda', found_mode);
}

moda(number_list);

function sort_two_dimensional_list(unordered_list, i){
    function sort_list(a,b){
        return a[i] - b[i];
    }

    let sorted_list = unordered_list.sort(sort_list);
    return sorted_list;
} */

