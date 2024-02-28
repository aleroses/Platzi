function calc_sum(array){
    console.log(array.reduce((sum, item) => sum + item, 0)); 
}

calc_sum([1, 1, 1]);
calc_sum([2, 4, 8]);
calc_sum([]);