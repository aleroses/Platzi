console.log(salarios);

// Análisis personal para Juanita

function encontrarPersona(personaEnBusqueda){
    return salarios.find(persona => persona.name == personaEnBusqueda); 
    // {name: 'Juanita', trabajos: Array(6)}
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    console.log(trabajos);
    // 0: {year: 2018, empresa: 'Freelance', salario: 250}
    // 1: {year: 2019, empresa: 'Freelance', salario: 250}
    // 2: {year: 2020, empresa: 'Industrias Mokepon', salario: 850}
    // 3: {year: 2021, empresa: 'Industrias Mokepon', salario: 1050}
    // 4: {year: 2022, empresa: 'Industrias Mokepon', salario: 1250}
    // 5: {year: 2023, empresa: 'Industrias Mokepon', salario: 1250}
    
    const salarios = trabajos.map(elemento => elemento.salario);
    console.log(salarios);
    // [250, 250, 850, 1050, 1250, 1250]

    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    console.log(medianaSalarios);
    // 850 + 1050 / 2 = 950

    return medianaSalarios;
}

/* medianaPorPersona('Juanita'); */

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    /* console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento}); */

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}

/* proyeccionPorPersona('Juanita') */

// ANÁLISIS EMPRESARIAL  
const empresas = {};

for(persona of salarios){
    for(trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }
        
        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }        

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log({empresas});
/* Daily Planet: 
    2018: (4) [1000, 2000, 1500, 3500]
    2019: (4) [1500, 2500, 2000, 3700]
    2020: (4) [1000, 2000, 2000, 3800]
    2021: (4) [1500, 2500, 2500, 4000]
    2022: (4) [2000, 2500, 2500, 4050]
    2023: (4) [1500, 2500, 1500, 4050] 
*/