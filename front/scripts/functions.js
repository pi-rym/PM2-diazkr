

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
                    <span class="profession"> Director: ${objeto.director}</span>
                </div>

                <div class="button">
                    <button class="aboutMe">Ver más</button>
                </div>
            </div>
        `
        
        wrapperContainer.appendChild(card);
    
}

module.exports=crearCard;