/* Solución 01 */  

function algo(parametro){
    if (parametro === "Free"){
        console.log("Solo puedes tomar los cursos gratis");
        return
    }
    if (parametro === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return
    }
    if (parametro == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return
    }
    if (parametro == "ExpertDuo") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return
    }
    console.warn("Esta suscripción no existe")
}

algo("ExpertDuo");


/* Solución 02 */   

/* let sub = prompt("Ingrese subscripción: ");

const objeto = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}


//objeto.Free
//objeto['Free']
//objeto[variable]

function algo(parametro){
    for (key in parametro){
        if (key === sub){
            console.log(parametro[sub])
            return
        }
    }
    console.warn('Subscripcion erronea...')
}

algo(objeto) */



/* Solución 03 */   

/* let sub = prompt("Ingrese subscripción: ");

const objeto = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}


function algo(parametro){
    if (objeto[parametro]){
        console.log(objeto[parametro])
        return
    }
    console.warn('error')
}

algo(sub)
 */



/* PRACTICA */  

let user = prompt('Ingresa tu subscripción... ');

const objeto = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

function algo(parametro){
    if(objeto[user]){
        console.log(objeto[user]);
        return
    }
    console.warn('error...')
}

algo(user);