const promesas = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve("This was resolved");
        }else {
            reject("This wasn't resolved");
        }
    })
}

promesas() 
    .then(respuesta => console.log(respuesta + ', then...'))
    .catch(error => console.log(error + ', catch...' ))
    .finally(() => console.log('Finally'));