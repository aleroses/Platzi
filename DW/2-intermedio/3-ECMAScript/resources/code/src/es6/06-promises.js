/* const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!');
        } else {
            reject('Whoooooops!');
        }
    })
}

anotherFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err)); */

/* const promesa = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            //true o false
            resolve("Se ha resuelto la promesa")
        } else {
            reject("Se ha rechazado la promesa")
        }
    })
}

promesa()
  .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
  .catch(error => console.log(error)) //En caso que se ejecute reject */

const promesas = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("This was resolved");
        }else {
            reject("This wasn't resolved");
        }
    })
}

promesas() 
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));