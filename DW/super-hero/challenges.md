# Challenges
## 1. Explica este código JavaScript 😎

```js
// primera función
function sumar(a, b) {
  return a + b;
}

// segunda función
const sumar = (a, b) => {
  return a + b;
};
```

```js
// Con una función como la primera es posible hacer esto:

console.log(suma(3,5)); //8
function sumar(a, b){
	return a + b;
}  

// Podemos llamar a la función antes de su declaración, característica que se denomina hoisting.

// Con una función de flecha esto no es posible:

  console.log(sumar(3,5)); // ReferenceError: cant access lexical declaration sumar before initialization

const sumar = (a, b) => {
	return a + b;
}  
```
