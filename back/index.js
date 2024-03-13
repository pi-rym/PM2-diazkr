const app = require('./src/server');

//Darle la capacidad de recibir solicitudes

//Usanso el método listen
app.listen(3000,()=>{
    console.log("Estamos escuchando desde el puerto 3000");
});