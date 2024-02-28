// MI SOLUCIÓN  
function* getId(){
    const cats = ["one", "two", "three", "four"];
    let counter = 1;

    for (let id of cats){
        yield `${counter++} ${id}`;
    }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);


// SOLUCIÓN PROPUESTA
/* function* getId() {
    let lastId = 1;
    while (true) {
        yield lastId++;
    }
}

const id = getId()
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value); */

// SOLUCIÓN COMPAÑERO
/* export function* getId() {
    while (true) {
        yield Math.random().toString(36).substring(5).toUpperCase();
    }
}

const id = getId()
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value); */





/* export function* getId() {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 1; i > 0; i++){
        for (const letter in arr) {
        yield i + arr[letter];
        }
    }
}

const id = getId()
console.log(id.next().value);
console.log(id.next().value); */