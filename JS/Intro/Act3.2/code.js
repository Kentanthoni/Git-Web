let materias = {
        fisica: ["pedro","juan","pepe","maria","jan"],
        quimica: ["pablo","maria","jan"],
        logica: ["pina","juan","pepe"],
        programacion: ["peter","pepe","maria","jan"]
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if (alumno.length >= 21){
        document.write(`Lo siento ${alumno}, las clases de ${materia} estan llenas </br>`);
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                quimica: materias[`quimica`],
                logica: materias[`logica`],
                programacion: materias[`programacion`]
        }
    } 
    else if (materia == "quimica") {
            materias = {
                fisica: materias[`fisica`],
                quimica: personas,
                logica: materias[`logica`],
                programacion: materias[`programacion`]
        }
    }
    else if (materia == "logica") {
        materias = {
            fisica: materias[`fisica`],
            quimica: materias[`quimica`],
            logica: personas,
            programacion: materias[`programacion`]
        }
    }
    else if (materia == "programacion") {
        materias = {
            fisica: materias[`fisica`],
            quimica: materias[`quimica`],
            logica: materias[`logica`],
            programacion: personas
        }
    }
    document.write(`${alumno} te has inscrito correctamente a ${materia}`)
}
}

document.write(materias[`fisica`] + "</br>");
inscribir("pablito","fisica");
document.write("</br>" + materias[`fisica`]);