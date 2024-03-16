
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

