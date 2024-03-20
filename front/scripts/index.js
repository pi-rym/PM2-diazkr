const axios = require('axios');
const crearCard = require("./functions");

const funcionIteradora = function(list){
    list.forEach(objetoMovie =>crearCard(objetoMovie));
}

const getObject = async () => {
    try {

        const listaPeliculasMayor = await axios.get('http://localhost:3000/movies')
        const listaPeliculas = listaPeliculasMayor.data

        funcionIteradora(listaPeliculas)
        
    } catch (error) {
        console.error("Hay un error del tipo", error.response.status)
    }
}

getObject();











var swiper = new Swiper(".mySwiper", {
    
    spaceBetween: 30,
    //loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    //centeredSlides: true, // Centra las diapositivas
    breakpoints: {
        // Configuración cuando el ancho de la pantalla es igual o mayor a 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        // Configuración cuando el ancho de la pantalla es igual o mayor a 1024px
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
    },
});

