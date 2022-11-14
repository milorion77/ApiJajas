//Importa mi modelo a carpeta controllers
//Aqui van las acciones a realizar 
const Joke = require("../models/jokes.model");

//Regresa lista de objetos/documentos Estudiante
module.exports.muestraTodasLasJajas = (req, res) => {
    Joke.find()
        .then(todoJokes => res.json({Jokes: todoJokes}))
        .catch(err => res.json({message: "no estuvo gracioso, hubo un error", error: err}))
};

module.exports.muestraUnJajas = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(UnJoke=> res.json({Jokes: UnJoke}))
        .catch(err => res.json({message: "no estuvo gracioso, hubo un error", error: err}))
};

module.exports.creaJajas = (req, res) => {
    Joke.create(req.body)
        .then(nuevoJoke => res.json({Jokes: nuevoJoke}))
        .catch(err => res.json({message: "no estuvo gracioso, hubo un error", error: err}))
}

module.exports.actualizaJajas = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(JokeActualizado => res.json({Jokes: JokeActualizado}))
        .catch(err => res.json({message: "no estuvo gracioso, hubo un error", error: err}))
}

module.exports.borrarJajas = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "no estuvo gracioso, hubo un error", error: err}))
}