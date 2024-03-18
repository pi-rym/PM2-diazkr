const {Router} = require('express');

const {getMovies, postMoviesController} = require('../controllers/moviesController')
const validateMovie = require("../middleware/movieMiddleware")

const moviesRouter = Router();


moviesRouter.get("/", getMovies)
moviesRouter.post("/", validateMovie, postMoviesController)


module.exports = moviesRouter;

