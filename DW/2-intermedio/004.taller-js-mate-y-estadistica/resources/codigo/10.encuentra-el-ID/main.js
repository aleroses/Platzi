const users = [];
users.push({ 
    id: 123, 
    name: 'Juanito Alcachofa' 
});

users.push({ 
    id: 456, 
    name: 'Juanita Alcaparra' 
});

// Solución Personal no tan bien
function solution(user) {
    if (user.name == 'Juanita Alcaparra') {
        console.log(user.name);
        return
    }
    console.log(user.name == 'Juanita Alcaparra');
    return
}

users.find(solution); 

// Solución compañeros 
/* function solution(users, id){
    let user = users.find(x => x.id == id);
    return console.log(user?.name || false);
}

solution(users, 456);
solution(users, 333); */



// Ejemplo de callback
/* const numbers = [2, 5, 7, 1, 9, 8, 4];

const filteredNumbers = numbers.filter(function(number){
    return number >= 5;
});

console.log(numbers, filteredNumbers); */