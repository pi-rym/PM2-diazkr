const {Repository} = require("../services/moviesServices")

const repository = new Repository();


const createMovie = async(req,res) =>{

    try {
        await repository.createMovie(req.body)

        res.status(200).json({message:"Pelicula creada exitosamente"})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const testMovies = async (req,res) =>{

    try {
        const movies = await repository.traerMovie();
        
        res.status(200).json(movies);
        
    } catch (error) {

        res.status(500).json({error:error.message})
    }

   
}

module.exports = {
    createMovie,
    testMovies
}





/*

const {traerMovies} = require("../services/moviesServices")


const testMovies = async (req,res) =>{

    try {
        const movies = await traerMovies();
        
        res.status(200).json(movies);

        
    } catch (error) {

        res.status(500).json({error:error.message})
    }

   
}

module.exports = testMovies;

*/