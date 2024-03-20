const { arrayGenre } = require("./multipleSelect");
const { obtenerRate } = require("./selectRate");
const {validateInputs} = require("./validation")

const callInputs = function(){
    const titleInput = document.querySelector(".title-input").value.trim();
    const yearInput = document.querySelector(".year-input").value.trim();
    const directorInput = document.querySelector(".director-input").value.trim();
    const durationInput = document.querySelector(".duration-input").value.trim();
    const genreInput = arrayGenre();
    const rateInput = obtenerRate();
    const urlInput = document.querySelector(".url-input").value;

    if (!validateInputs(titleInput, yearInput,directorInput,durationInput,genreInput,urlInput)) {
        return null;
    }

    // Si todas las validaciones son exitosas, se crea el objeto
    const objeto = {
        title: titleInput,
        year: yearInput,
        director: directorInput,
        duration: durationInput,
        genre: genreInput,
        rate: rateInput,
        poster: urlInput
    };

    return objeto;
};


module.exports={
    callInputs
}