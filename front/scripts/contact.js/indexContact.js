const {callInputs} = require("./createObject");

const {clearInputs} = require("./clearInputs")

const btnCreate = document.querySelector(".boton-create");
const btnDelete = document.querySelector(".boton-limpiar")

btnCreate.addEventListener("click", () => {
    const objeto = callInputs();
    if (objeto) {
        document.querySelector(".creacion-exitosa").innerHTML = "Se ha creado la pelicula exitosamente! Checala en Home"
    }
});


const items = document.querySelectorAll(".item");
btnDelete.addEventListener("click", () => {
    clearInputs()
});
