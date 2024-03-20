const { obtenerRate } = require("./selectRate");


const validateInputs = function(titleInput, yearInput,directorInput, durationInput, genreInput, urlInput) {
    let errorTitle = document.querySelector(".mensaje-title");
    let errorYear = document.querySelector(".mensaje-year");
    let errorDirector = document.querySelector(".mensaje-director");
    let errorDuration = document.querySelector(".mensaje-duration");
    let errorGenre = document.querySelector(".mensaje-genre");
    let errorRate = document.querySelector(".mensaje-rate");
    let errorUrl = document.querySelector(".mensaje-url");

    // validacion title
    if (titleInput === "") {
        errorTitle.innerHTML = "Ingrese un formato de título válido";
        return false;
    } else {
        errorTitle.innerHTML = "";
    }

    // Validación de año
    if (isNaN(yearInput) || yearInput.length !== 4 || yearInput < 1700 || yearInput > 2030) {
        errorYear.innerHTML = "Ingrese un año válido entre 1700 y 2030";
        return false;
    } else {
        errorYear.innerHTML = "";
    }

    // validacion director
    if (directorInput === "") {
        errorDirector.innerHTML = "Ingrese un formato de  director válido";
        return false;
    } else {
        errorDirector.innerHTML = "";
    }

    // validacion de duración 

    const durationPattern = /^(\d{1,2})h (\d{2})min$/;

    if (!durationPattern.test(durationInput)) {
        errorDuration.innerHTML = "Ingrese un formato de duración válido, ej: 2h 00min";
        return false;
    } else {
        errorDuration.innerHTML = "";
    }

    //Validación de genero
    if (genreInput.length === 0) {
        errorGenre.innerHTML = "Seleccione el género de la pelicula";
        return false;
    } else {
        errorGenre.innerHTML = "";
    }

    // //Validación de genero
    rateInput = obtenerRate();
    if (rateInput == null) {
        errorRate.innerHTML = "Seleccione el puntaje de la película";
        return false;
    } else {
        errorRate.innerHTML = "";
    }


    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;

    if (!urlPattern.test(urlInput)) {
        errorUrl.innerHTML = "Ingrese una URL válida";
        return false;
    } else {
        errorUrl.innerHTML = "";
    }



    return true;
};

module.exports={
    validateInputs
}