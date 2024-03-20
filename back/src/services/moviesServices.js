
const Movie = require("../models/Movie")

const traerMovies = async () =>{

    try {
        const movies = await Movie.find();
        return movies;
        
    } catch (error) {
        throw new Error(error);
    }    
    
}



const postMoviesServices = async (objectMovie)=>{

    try{
        const newMovie = await Movie.create(objectMovie)
        return newMovie;
    } catch(error){
        throw Error('Error en el proceso de crear la pelicula')
    }


}



module.exports={
    traerMovies,
    postMoviesServices 
}

