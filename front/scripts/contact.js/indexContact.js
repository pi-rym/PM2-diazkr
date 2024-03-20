const {callInputs} = require("./createObject");
const {clearInputs} = require("./clearInputs")

const axios = require("axios")

const btnCreate = document.querySelector(".boton-create");
const btnDelete = document.querySelector(".boton-limpiar")

const postMovie = async () => {
    try {
        const objeto = callInputs();
        const postEnvioMovie = await axios.post('http://localhost:3000/movies',objeto)
        return postEnvioMovie.data;

        
    } catch (error) {
        throw new Error('Error en el proceso de crear la película')
    }
}

btnCreate.addEventListener("click", () => {
    postMovie().then((data) => {
        document.querySelector(".creacion-exitosa").innerHTML= "Se ha creado la pelicula! Chechala en Home"
    }).catch((error) => {
        document.querySelector(".creacion-exitosa").innerHTML= error.message
    });
});


btnDelete.addEventListener("click", () => {
    clearInputs()
});
