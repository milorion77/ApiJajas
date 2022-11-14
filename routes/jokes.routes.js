const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jajas/", JokeController.muestraTodasLasJajas);
    app.get("/api/jajas/:id", JokeController.muestraUnJajas);
    app.post("/api/jajas/new",JokeController.creaJajas );
    app.put("/api/jajas/update/:id", JokeController.actualizaJajas );
    app.delete("/api/jajas/delete/:id", JokeController.borrarJajas );
};