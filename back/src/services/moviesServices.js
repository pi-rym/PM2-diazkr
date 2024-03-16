
const axios = require('axios');

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

