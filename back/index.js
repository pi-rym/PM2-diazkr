const app = require('./src/server');

const dbConnection = require("./src/config/dbConnection")

dbConnection()
.then(()=>{
    app.listen(3000,()=>{console.log("Estamos escuchando desde el puerto 3000")});
}).catch((err)=>console.log('tenemos un problmas con la conexión a la base de datos', err.message))

    