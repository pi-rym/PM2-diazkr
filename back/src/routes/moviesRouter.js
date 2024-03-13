const {Router} = require('express');
const testMovies = require('../controllers/moviesController')

const moviesRouter = Router();


moviesRouter.get("/", testMovies)


module.exports = moviesRouter;

