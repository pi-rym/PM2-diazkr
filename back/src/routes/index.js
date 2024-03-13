// Tenemos que crear un enrutador 

const {Router} = require("express");
const testController = require("../controllers/index")
const moviesRouter = require("./moviesRouter")

const router = Router(); 

//Tipo de soliciutd que vamos a recibir 
//  / significa que va a la raíz
router.get("/",testController);


//Enrutador se da cuenta que va a movies
router.use('/movies', moviesRouter);


module.exports = router;

