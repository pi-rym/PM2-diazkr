const {clearSelection} = require("./multipleSelect")
const {clearRateSelection} = require("./selectRate")


const clearInputs = ()=>{

    document.querySelector(".title-input").value = "";
    document.querySelector(".year-input").value = "";
    document.querySelector(".director-input").value = "";
    document.querySelector(".url-input").value = "";
    document.querySelector(".duration-input").value = "";


    document.querySelector(".mensaje-title").innerHTML="";
    document.querySelector(".mensaje-year").innerHTML="";
    document.querySelector(".mensaje-director").innerHTML="";
    document.querySelector(".mensaje-duration").innerHTML="";
    document.querySelector(".mensaje-genre").innerHTML="";
    document.querySelector(".mensaje-rate").innerHTML="";
    document.querySelector(".mensaje-url").innerHTML="";




    clearSelection()
    clearRateSelection()
    document.querySelector(".creacion-exitosa").innerHTML ="";

}

module.exports = {
    clearInputs
}