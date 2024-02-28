const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

function solution(array, id){
    const output = array.find(item => item.id == id);

    console.log(output ? output.name : false);
    return output ? output.name : false;
}

solution(users, 456);
solution(users, 999);




/* 
Juanita Alcaparra
false 
*/
