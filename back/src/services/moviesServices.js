
const axios = require('axios');


//Acá creamos la clase movie y podemos añador pelis

/*
class Movie {
    constructor(title,date, genere,duration,poster){
        this.title = title;
        this.date = date;
        this.genere = genere;
        this.duration = duration;
        this.poster = poster;
    }
}

class Repository{

    constructor(){
        this.lista = [];
    }

    createMovie({title,date, genere,duration,poster}){
        const nuevaMovie = new Movie(title,date,genere,duration,poster);
        
        this.lista.push(nuevaMovie);
    }

    traerMovie(){
        return this.lista;
    }

    
}

module.exports = {
    Repository,
    Movie
};

*/





const traerMovies = async () =>{

    try {
        //Lo comentado es para usar la API
        const movies = await axios.get("https://students-api.up.railway.app/movies")
        return movies.data;
        
    } catch (error) {

        throw new Error(error);
    }    
    
}



module.exports={
    traerMovies,
}

