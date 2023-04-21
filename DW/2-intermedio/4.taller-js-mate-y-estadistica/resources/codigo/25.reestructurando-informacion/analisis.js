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
/* 
Mokepon: {
    2018: [salario, salario, salario]
    2019: 
}
*/


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

// 26. SALARIOS EMPRESARIALES 
function medianaEmpresaYear(nombre, year){
    if(!empresas[nombre]){
        console.warn('La empresa no existe: ');
    }else if(!empresas[nombre][year]){
        console.warn('La empresa no dio salarios ese año');
    }else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

/* 
Probar:   
medianaEmpresaYear('Freelance', 2018); 
medianaEmpresaYear('Industrias Mokepon', 2019);
medianaEmpresaYear('Industrias Mokepon', 2020);
medianaEmpresaYear('Industrias Mokepon', 2021);
medianaEmpresaYear('Industrias Mokepon', 2022);
medianaEmpresaYear('NASA', 2021);
medianaEmpresaYear('Daily Planet', 2021);
*/

// 27. Proyección de salarios por empresas 

function proyeccionPorEmpresa(nombre){
    if (!empresas[nombre]) {
        console.warn('La empresa no existe!');
    } else{
        const empresaYears = Object.keys(empresas[nombre]);
        console.log('Test 01: ', empresaYears);
        // ['2018', '2019', '2020', '2021', '2022', '2023']

        const listaMedianaYears = empresaYears.map(year => medianaEmpresaYear(nombre, year));
        console.log('Test 02', listaMedianaYears);
        // [500, 525, 500, 550, 800, 750]

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;
    
        return nuevaMediana;
    }
}


/* 
proyeccionPorEmpresa('Industrias Mokepon') //1488.095
proyeccionPorEmpresa('MarketerosCOL') //1052.631
proyeccionPorEmpresa('Freelance') //787.5

// Revisar 
empresas['MarketerosCOL'];
medianaEmpresaYear('MarketerosCOL', 2021);
medianaEmpresaYear('MarketerosCOL', 2022);
*/