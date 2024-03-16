const {Router} = require('express');

const testMovies = require('../controllers/moviesController')
const validateProduct = require("../middleware/movieMiddleware")

const moviesRouter = Router();


moviesRouter.get("/", testMovies)


module.exports = moviesRouter;

