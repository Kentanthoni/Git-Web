const name = document.getElementById("name");
const email = document.getElementById("email");
const subjectme = document.getElementById("subject");
const btn = document.getElementById("btn-send");
const result = document.querySelector(".result")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let error = validarCampos();
    if (error[0]) {
        result.innerHTML = error[1];
        result.classList.add("red");
    } else {
        result.innerHTML = "Request submitted succesfully";
        result.classList.add("green");
        result.classList.remove("red");
    }
})

const validarCampos = ()=>{
    let error = [];
    if (name.value.length < 5 || name.value.length > 40) {
        error[0] = true;
        error[1] = "The name is invalid"
        return error;
    } else if ( email.value.length < 5 ||
                email.value.length > 40 ||
                email.value.indexOf("@") == -1 ||
                email.value.indexOf(".") == -1 ) {
        error[0] = true;
        error[1] = "The email is invalid";
        return error;
    } else if (materia.value < 4 || materia.value > 40 ) {
        error[0] = true;
        error[1] = "The subject don't exist";
    }
    error[0] = false;
    return error;
}
