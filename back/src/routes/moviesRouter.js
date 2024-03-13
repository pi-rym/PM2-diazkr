const {Router} = require('express');
// const {testMovies, createMovie} = require('../controllers/moviesController')

const testMovies = require('../controllers/moviesController')

const moviesRouter = Router();


moviesRouter.get("/", testMovies)

//moviesRouter.post("/", createMovie)


module.exports = moviesRouter;

