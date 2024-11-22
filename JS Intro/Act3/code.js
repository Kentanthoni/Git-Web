let cant = prompt("Cantidad de alumnos");
let students = [];

for (i = 0; i < cant; i++) {
    students[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const takeAsist = (name, p)=>{
    let present = prompt(name);
    if (present == "p" || present == "P") {
        students[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (student in students) {
    takeAsist(students[student][0],student);
    }
}

for (student in students) {
    let result = `${students[student][0]}:<br>
    ________Asistencias: ${students[student][1]}:<br>
    ________Ausencias: ${30 - parseInt(students[student][1])}`;
    if (30- students[student][1] > 18) {
    result+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
    } else {
    result+= "<br><br>"
    } 
    document.write(result)
}
