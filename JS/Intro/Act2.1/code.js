class App {
    constructor(descargas,puntuaciones,peso){
        this.descargas = descargas;
        this.puntuaciones = puntuaciones;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App encendida");
        } 
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }
    desinstaladar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("App desinstalada correctamente");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuaciones}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

app = new App("16k","5 estrellas","900MB");
app1 = new App("15k","4 estrellas","800MB");
app2 = new App("14k","3 estrellas","900MB");
app3 = new App("16k","5 estrellas","700MB");

document.write(`
    ${app.appInfo()} <br>
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
`)

//app.instalar()
//app.abrir()
//app.cerrar()
//app.desinstaladar()