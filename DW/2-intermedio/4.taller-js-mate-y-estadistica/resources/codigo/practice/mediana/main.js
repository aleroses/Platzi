const arr = [5,2,1,4,3,6];

/* function esPar(array){
    // true: par  false: impar
    return array.length % 2 == 0 ? true : false; 
}
esPar(arr); */

function median(){
    // true: par  false: impar
    if(arr.length % 2 == 0){
        let left_index = arr[(arr.length / 2) - 1];
        let right_index = arr[arr.length / 2];
        let index_list = [left_index, right_index];

        let average = index_list.reduce((suma, indice) => suma + indice);

        let median_is = average / index_list.length; //2
        
        console.log(`Pair list ${arr} The Median is: ${median_is}`, average);
        return
    }else{
        let index = Math.floor(arr.length / 2);
        let median_is = arr[index];
        console.log(`Odd list ${arr} The Median is: ${median_is}`);
        return
    }
}

median(arr.sort())