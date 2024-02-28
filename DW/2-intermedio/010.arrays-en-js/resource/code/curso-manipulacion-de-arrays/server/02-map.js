const letters = ['a', 'b', 'c'];

const new_letters = [];
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    new_letters.push(element + element)
}

console.log(letters);
console.log(new_letters);

const new_letters_one = letters.map(item => item + item)
console.log(new_letters_one);
