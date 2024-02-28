/* 
- promedio or mediana aritmética +++ / lenght
    - 1, 2, 3 rpt: 6/3
- mediana 
	- 450, 500, 600 rpt: 500
	- 100, 200, 300, 400 rpt: 200+300/2
- moda: valor que se repite mas veces (cualquier dato)
- promedio ponderado or media aritmética ponderada  
    - define el peso de cada elemento en nuestro conjunto de números: 
        - n = número; 
        - p = peso;
    - [(n1*p1) + (n2*p2) + (n3*p3)] / (p1 + p2 + p3)
*/


// console.log(salarios);

// 1. Saber si un trabajador está en la lista
// 2. Calcular la media de sus salaries
//  2.1 Sacar lista de trabajos
//  2.2 Sacar lista de salaries
//  2.2 Sacar mediana
// 3. Calcular la proyección del siguiente sueldo
//  3.1 Crear array con la lista de % de incremento
//  3.2 Calcular mediana de % de incrementos
//  3.3 Multiplicar ultimo salario * la mediana
//  3.4 Sumar ultimo salario al resultado anterior


function find_person(x){
    return salarios.find(person => person.name == x);
}

function mean_of_salaries(name){
    return PlatziMath.median((find_person(name).trabajos).map(x => x.salario));
    // 950
}

function projection_of_the_next_salary(name){
    const salaries = (find_person(name).trabajos).map(x => x.salario);
    const growth_percentages = [];

    for (let i = 1; i < salaries.length; i++) {
        const growth = salaries[i] - salaries[i - 1];
        growth_percentages.push(growth * 1 / salaries[i - 1]);
    }
    console.log(growth_percentages);
    
    const median = PlatziMath.median(growth_percentages);
    const next_salary = (median * salaries[salaries.length - 1]) + salaries[salaries.length - 1];
    
    return next_salary; // 1488.09
}

find_person('Juanita');
mean_of_salaries('Juanita')
projection_of_the_next_salary('Juanita')


// ANÁLISIS EMPRESARIAL 
// 4. Crea un Object de empresas con los sueldos de cada año
//  4.1 Objeto de empresas
//  4.2 Objeto de años por cada empresa
//  4.3 Array de sueldos de cada año
// companies workers company 

const companies = {};

for (workers of salarios){
    for(company of workers.trabajos){
        if(!companies[company.empresa]){
            companies[company.empresa] = {}
        }
        if(!companies[company.empresa][company.year]){
            companies[company.empresa][company.year] = []
        }
        companies[company.empresa][company.year].push(company.salario);
    }
}

console.log(companies);


// 26. SALARIOS EMPRESARIALES   
// 5. De los datos extraidos en la clase anterior
//  5.1 Verificar si la compañia y año existen 
//  5.2 Sacar mediana salarial por año 

function median_salary_by_year(company, year){
    if(!companies[company]){
        console.warn('The company isnt in the list');
    }else if(!companies[company][year]){
        console.warn('This year isnt in the list');
    }else{
        return PlatziMath.median(companies[company][year])
    }
}

median_salary_by_year('Daily Planet', 2021) // 2500


// 6. Proyección de salarios por empresa
//  6.1 Verificar si el nombre de la empresa existe
//  6.2 Obtener los keys (años) de la compañia en un array
//  6.3 Sacar mediana de los sueldo por cada año 
//  6.4 Crear array con la lista de % de incremento
//  6.5 Calcular mediana de % de incrementos
//  6.6 Multiplicar ultimo media salarial * la mediana de incremento
//  6.7 Sumar ultimo salario al resultado anterior


function salary_projection_by_company(company){
    if(!companies[company]){
        return 'This company isnt in the data!!!'
    }else {
        const years = Object.keys(companies[company])
        const median_annual_salary = years.map(year => median_salary_by_year(company, year));
        console.log(median_annual_salary); 
        // [850, 1000, 1000, 1400, 1450, 1000]
        const growth_percentages = [];

        for(let i=1; i < median_annual_salary.length; i++){
            const growth = median_annual_salary[i] - median_annual_salary[i - 1];
            growth_percentages.push(growth * 1 / median_annual_salary[i - 1]);
        }

        const median_growth = PlatziMath.median(growth_percentages);
        const next_salary = (median_growth * median_annual_salary[median_annual_salary.length - 1]) + median_annual_salary[median_annual_salary.length - 1];
        return next_salary;
    }
}

salary_projection_by_company('MarketerosCOL') //1052.631
salary_projection_by_company('Industrias Mokepon') // 1488.09




// Top 10% de salarios: length is 100%, 10% is x
// 7.1 Sacar la media de los sueldos de cada persona 
// 7.2 Sacar la mediana de las medianas de los sueldos d/c persona
// 8.1 Obtener la cantidad de personas dentro del top 10
// 8.2 Obtener el resto 
// 8.3 Ordenamos la lista de medianas 
// 8.4 Extraemos los montos dentro del top 
// 8.5 Sacamos mediana 

function overall_median(){ // mediana general
    const medians_list = salarios.map(person => mean_of_salaries(person.name));
    const median = PlatziMath.median(medians_list);

    return median;
}

function top_ten_salaries(){
    const median_list = salarios.map(person => mean_of_salaries(person.name));
    const top_ten = 10 * median_list.length / 100; // length / 10
    const the_rest = median_list.length - top_ten;
    
    const sorted_median = PlatziMath.sort_list(median_list);
    const top = median_list.slice(the_rest, sorted_median.length);
    const median = PlatziMath.median(top);

    return median; // [3900, 4275]
}

overall_median();
top_ten_salaries();





// Ctrl + K Ctrl + C - Añadir línea comentario.
// Ctrl + K Ctrl + U - Eliminar línea comentario.
