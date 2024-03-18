
const {traerMovies, postMoviesServices } = require("../services/moviesServices")


const getMovies = async (req,res) =>{

    try {
        const movies = await traerMovies();
        
        res.status(200).json(movies);

        
    } catch (error) {

        res.status(500).json({error:error.message})
    }

   
}

const postMoviesController = async (req,res) =>{

    try {

        await postMoviesServices(req.body)
        res.status(200).json({message:"Pelicula agregada exitosamente"});

        
    } catch (error) {

        res.status(400).json({error:error.message})
    }

   
}

module.exports = {
    postMoviesController,
    getMovies
};

