let free = false;

const validarCliente = (time)=>{
    let edad = prompt("Cuál es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Puedes pasar gratis porque eres la primer persona en entrar después de las 2:00 AM");
            free = true;
        } else {
            alert(`Puedes pasar pero debes pagar la entrada, son las ${time}:00 Hs`);
        }
    } else {
        alert("Eres menor de edad, no puedes pasar");
    }
}

validarCliente(11);
validarCliente(8);
validarCliente(3);
validarCliente(11);
