function solution(json1, json2) {
    var json1 = json1 || {name: 'Mr. Michi', food: 'Pescado'}
    var json2 = json2 || {age: 12, color: 'Blanco'}
    var data = {...json1, ...json2}

    console.log(data);
}

solution({name: 'Mr. Bigotes', food: 'Pollito'}/* , { age: 12, color: 'Blanco'} */);

// Solución:  
export function solution(
    json1 = {
        name: "Mr. Michi",
        food: "Pescado",
    },
    json2 = {
        age: 12,
        color: "Blanco",
    }
) {
/* return {...json1, ...json2}; */
console.log({...json1, ...json2});
}

solution({
    name: "Bigotes",
    food: "Pollito"
})