/* peso / (altura * altura) */
/* IMC = peso /(altura x altura)*/

const patients = [
    { 
        name:'Dalton',
        age:25,
        weight:110,
        height:185,
    },
    { 
        name:'Bruno',
        age:21,
        weight:70,
        height:160,
    },
    { 
        name:'Fernanda',
        age:18,
        weight:65,
        height:155,
    },
]

function patientsNames(patients){ 
    return`
        O(a) paciente ${patients.name} possui o IMC de: 
        ${( patients.weight / (patients.height /100)).toFixed(2)}
    `
}
for(let patient of patients){ 
    let printPatients = patientsNames(patient)
    alert(printPatients)
}