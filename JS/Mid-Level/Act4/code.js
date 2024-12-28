const materiasHTML = document.querySelector("materias");

const materias = [
    {
        nombre: "Fisica",
        nota: 3,
    },{
        nombre: "Calculo",
        nota: 4,
    },{
        nombre: "Quimica",
        nota: 5,
    },{
        nombre: "Ingles",
        nota: 3,
    },{
        nombre: "Redes",
        nota: 5,
    }
];

const obtenerMateria = (id)=>{
    return new Promise((resolve,reyect)=>{
        materia = materias[id];
        if (materia == undefined) reyect("La materia no existe");
        else setTimeout(()=>{resolve(materia)}, Math.random()*400) ;
    }) 
}

const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();