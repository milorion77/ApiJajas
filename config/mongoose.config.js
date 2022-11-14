//Esta carpeta esta destinanda para la conexion con la base de datos
const mongoose = require("mongoose");//con este comando queremod decir que vamos a estar utilizando mongoose 

mongoose.connect("mongodb://localhost/ElJajas", {//si no existe el nombre de la base de datos, este mismo me la crea
    useNewUrlParser: true,  
    useUnifiedTopology: true
}) 
    .then(() => console.log("MongoDB conectadeichon"))
    .catch(err => console.log("Algo salió mal con mongo", err ));
