const letters = ['a', 'b', 'c'];

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log(element);    
}

letters.forEach((item, index) => console.log(item, index));

