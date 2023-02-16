//arrays
//objetos
//condicional


/* 
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
} 
*/

var suscripcion = [
    {cuenta: "Free", beneficio: "Solo puedes tomar los cursos gratis"},
    {cuenta: "Basic", beneficio: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {cuenta: "Expert", beneficio: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {cuenta: "ExpertPlus", beneficio: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
];

var suscFilter = suscripcion.filter(function(filtrados){
    return filtrados.cuenta === "Basic";
});

console.log(suscFilter);


//Obtenemos: 

/* 
0: {cuenta: 'Basic', beneficio: 'Puedes tomar casi todos los cursos de Platzi durante un mes'}
length: 1
*/