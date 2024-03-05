console.log(tempData);


const crearCard = function(objeto){

    //Crear la card y luego la añadimos al wrapper container
    var card = document.createElement("div");
    card.classList.add("swiper-slide", "card");
    wrapperContainer.appendChild(card);

    // Creamos un div donde estara el contetnido de la card
    var content =  document.createElement("div");
    content.classList.add("card-content");
    card.appendChild(content)

    //Creacion del div de la imagen
    var divImage = document.createElement('div')
    divImage.classList.add("image")
    var imagenElement = document.createElement('img')
    imagenElement.src = objeto.poster;
    imagenElement.alt ="";
    divImage.appendChild(imagenElement)

    //creamos el div del texto name y añadimos el contenido
    var divText = document.createElement('div')
    divText.classList.add("name-profession")
    var nameElement = document.createElement('span');
    nameElement.classList.add("name")
    nameElement.textContent = objeto.title;

    //realizamos lo mismo pero con profesion
    var professionElement = document.createElement('span');
    professionElement.classList.add("profession");
    professionElement.textContent = objeto.duration;

    //aññadimos los elementos
    divText.appendChild(nameElement);
    divText.appendChild(professionElement);


    //creamos el div donde va el boton de ver
    var divBotonVer = document.createElement('div')
    divBotonVer.classList.add('button')
    var boton = document.createElement("button")
    boton.classList.add("aboutMe")
    boton.textContent = "Ver más";
    divBotonVer.appendChild(boton);

    //añadimos los 3 elementos al card container
    content.appendChild(divImage);
    content.appendChild(divText);
    content.appendChild(divBotonVer);
    
}
const wrapperContainer = document.getElementById("wrapper");

const ejecutarCards = tempData.map(pelicula => crearCard(pelicula));




var swiper = new Swiper(".mySwiper", {
    
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true, // Centra las diapositivas
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

