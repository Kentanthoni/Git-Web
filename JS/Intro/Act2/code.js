class Cells {
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    pressionarBotonEncendido(){
        if (this.encendido == false){
            alert("Celular encendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("reniciando celular");
        } else {
            alert("El celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.rdc}`);
    }
    grabarVideo(){
        alert(`Grabando video en una resolucion de: ${this.rdc}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Rdp: <b>${this.rdp}</b></br>
        Rdc: <b>${this.rdc}</b></br>
        Ram: <b>${this.ram}</b></br>
        `;
    }
}
class CellsAdvanced extends Cells{
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.rdce = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Iniciando reconocimiento facial");
    }
    infoAdvanced(){
        return this.mobileInfo() + `Rdce: <b>${this.rdce}</b></br>`;
    }
}

//cell1 = new Cells("rojo","150g","5","full hd","2GB");
//cell2 = new Cells("negro","160g","6","hd","1GB");
//cell3 = new Cells("blanco","170g","7","full hd","2GB");

//cell1.pressionarBotonEncendido();
//cell1.tomarFoto();
//cell1.grabarVideo();
//cell1.reiniciar();
//cell1.pressionarBotonEncendido();

cell1 = new CellsAdvanced("rojo","130g","5","4k","3GB","full hd");
cell2 = new CellsAdvanced("negro","140g","6","4k","4GB","full hd");

document.write(`
    ${cell1.infoAdvanced()}<br>
    ${cell2.infoAdvanced()}<br>
    `);

