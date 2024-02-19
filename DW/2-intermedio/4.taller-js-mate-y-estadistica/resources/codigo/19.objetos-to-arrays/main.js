/* const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

function solution(obj) {
    const array = [];
    const objEntries = Object.entries(obj);
    for (let i = 0; i < objEntries.length; i++) {
        array.push({
            id: objEntries[i][0],
            name: objEntries[i][1],
    });
    }
    return console.log(array);;
}

solution(obj); */

const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

function solution(obj) {
    return Object.entries(obj).map(value => {
        return { id: value[0], name: value[1]}})
}

solution(obj); 