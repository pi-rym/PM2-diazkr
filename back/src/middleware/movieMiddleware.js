const validateProduct = (req, res, next) => {

    const { title,date, genere,duration,poster } = req.body

    if(![ title,date, genere,duration,poster ].every(Boolean)) return res.status(400).json({message: "Faltan datos por completar"})

    next()

}

module.exports = validateProduct;