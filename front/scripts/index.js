

const wrapperContainer = document.getElementById("wrapper");

const crearCard = function(objeto){

    //Crear la card y luego la añadimos al wrapper container
    var card = document.createElement("div");
    card.classList.add("swiper-slide", "card");


    card.innerHTML = `
            <div class="card-content">
                <div class="image">
                    <img src="${objeto.poster}" alt="">
                </div>

                <div class="name-profession">
                    <span class="name">${objeto.title}</span>
                    <span class="profession"> ${objeto.duration}</span>
                </div>

                <div class="button">
                    <button class="aboutMe">Ver más</button>
                </div>
            </div>
        `
        
        wrapperContainer.appendChild(card);
    
}


//const ejecutarCards = tempData.map(pelicula => crearCard(pelicula));


//Creamos la función que va a iterar sobre los elementos de la lista, que son objetos
const funcionIteradora = function(list){


    list.forEach(objetoMovie =>crearCard(objetoMovie));
    list.forEach(objetoMovie =>crearCard(objetoMovie)); //**LUEGO BORRAR */
    list.forEach(objetoMovie =>crearCard(objetoMovie)); //**LUEGO BORRAR */
}


// acá hacemos el get del array de objetos y luego llamamos a la función que itera

// ACÁ SE PUEDE USAR array.forEach(crearCard) y tambien funciona
const getObject = function(){
    $.get('https://students-api.2.us-1.fl0.io/movies', array => funcionIteradora(array));
}


getObject();








var swiper = new Swiper(".mySwiper", {
    
    spaceBetween: 30,
    loop: false, //true
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

