const elements = [1,1,2,2];
const otherElements = [3,3,4,4]

const fusion = elements.concat(otherElements);
console.log(fusion);

// Para clonar sin dejar una referencia en memoria anterior debemos usar: algo = [...elements];

// Otra forma de concatenar: spread operator solo para arrays 
const fusion_two = [...elements, ...otherElements]
console.log(fusion_two);

// Otro ejemplo 
const fusion_three = [...elements, 'random'];
console.log(fusion_three);

// Agregar elementos al array original 
elements.push(...otherElements);
console.log(elements);

// Unir sin repetir valores
const array_one = ["Java","JavaScript", 'PHP'];
const array_two = ["C#", "PHP" , "Java"];

const merged_arrays = [...new Set([...array_one, ...array_two])]

console.log(merged_arrays)
// ['Java', 'JavaScript', 'PHP', 'C#']