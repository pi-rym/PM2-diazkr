const {Schema, model} = require('mongoose'); 

const movieSchema = new Schema({
    title: {
        type:String,
        require:true, 
        unique:true,
    },
    year: {
        type:Number,
        require:true
    },
    director: {
        type:String,
        require:true
    },
    duration: {
        type:Number,
        require:true
    },
    genre: {
        type: Array,
        require:true
    },
    rate: {
        type: Number,
        require:true
    },
    poster: {
        type: String,
        require:true
    }
})

const Movie = model('Movie', movieSchema)

module.exports = Movie;