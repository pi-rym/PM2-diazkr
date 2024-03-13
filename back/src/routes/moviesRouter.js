const {Router} = require('express');
const {testMovies, createMovie} = require('../controllers/moviesController')

//const testMovies = require('../controllers/moviesController')
const validateProduct = require("../middleware/movieMiddleware")

const moviesRouter = Router();


moviesRouter.get("/", testMovies)

moviesRouter.post("/",validateProduct, createMovie)


module.exports = moviesRouter;

