
const Movie = require("../models/Movie")

const traerMovies = async () =>{

    try {
        const movies = await Movie.find();
        return movies;
        
    } catch (error) {
        throw new Error(error);
    }    
    
}

let listaMovies = [];


const postMoviesServices = async ({title,year,director,duration,genre,rate,poster})=>{

    const newMovie = {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
    }

    listaMovies.push(newMovie);

}



module.exports={
    traerMovies,
    postMoviesServices 
}

