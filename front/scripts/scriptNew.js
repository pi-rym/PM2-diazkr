
const cardsContainer = document.getElementById("cardsContainer");

const crearCardNew = function(objeto){

    //Crear la card y luego la añadimos al wrapper container
    var card = document.createElement("div");
    card.classList.add("p-2","g-col-6","card-new","d-flex","flex-column","align-items-center");


    card.innerHTML = `
            <img src="${objeto.linkUrl}" class="card-img-top imagen-new" alt="...">
            <div class="card-body p-2">
                <h5 class="card-title">${objeto.title}</h5>
                <p class="card-text small">Estreno: ${objeto.date}</p>
                <a href="#" class="btn btn-news btn-sm""> Ver más</a>
            </div>
            
        `
        
        cardsContainer.appendChild(card);
    
}

const ejecutarCards = newData.map(pelicula => crearCardNew(pelicula));
