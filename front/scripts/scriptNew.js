
const cardsContainer = document.getElementById("cardsContainer");

const crearCardNew = function(objeto){

    //Crear la card y luego la añadimos al wrapper container
    var card = document.createElement("div");
    card.classList.add("p-2","g-col-6","card-new");


    card.innerHTML = `
            <img src="${objeto.linkUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${objeto.title}</h5>
                <p class="card-text">Fecha estreno: ${objeto.date}</p>
                <a href="#" class="btn btn-primary"> Ver más</a>
            </div>
            
        `
        
        cardsContainer.appendChild(card);
    
}

const ejecutarCards = newData.map(pelicula => crearCardNew(pelicula));
