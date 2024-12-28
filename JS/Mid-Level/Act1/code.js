let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto}, el ancho es: ${ancho}`);

if (comprar) {
    alert("compra realizda exitosamente");
} else {
    alert("compra cancelada")
}

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocol: <b>${protocol}</b></b><br>`;
html += `Hostname: <b>${pathname}</b></b><br>`;
html += `Pathname: <b>${pathname}</b></b><br>`;
html += `URL: <b>${pathname}</b></b><br>`;

document.write(html);