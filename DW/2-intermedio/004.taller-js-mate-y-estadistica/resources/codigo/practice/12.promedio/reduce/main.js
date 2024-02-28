const numbers = [1, 2, 3, 4];

const rta = numbers.reduce((sum, element) => sum + element, 0);

console.log(rta);

// otro ejemplo 
const ventasPrimerTrimestre =  [ 10, 20, 30 ];

function getMedia(array){
	const initialValue = 0;
	const sumWithInitial = array.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue
);

	return sumWithInitial  / array.length;
};

getMedia(ventasPrimerTrimestre);