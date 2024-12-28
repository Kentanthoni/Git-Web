const obtenerInfo = (materia)=>{
    materias = {
        fisica: ["pedro","juan","pepe","maria","jan"],
        quimica: ["pablo","maria","jan"],
        logica: ["pina","juan","pepe"],
        programacion: ["peter","pepe","maria","jan"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
} 

const mostrarInfo = (materia)=>{
    let informacion = obtenerInfo(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`Alumnos presentes en ${informacion[1]}: <b> ${alumnos} </b><br>
            El profesor de la asignatura es: <b>${profesor}</b></br></br>
            `);
    }    
}

const cantClases = (alumno)=>{
    let informacion = obtenerInfo();
    let clasesPresentes = [];
    let cantTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `${alumno} esta en: <b> ${cantTotal} </b> clases </br>
    Esta cursando las clases: <b>${clasesPresentes}</b></br></br>
    `;
}

mostrarInfo("fisica");
mostrarInfo("quimica");
mostrarInfo("logica");
mostrarInfo("programacion");

document.write(cantClases("pepe"));
document.write(cantClases("juan"));