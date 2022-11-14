const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlenght: [10, "Este campo debe tener al menos 10 caracteres"]
    },
    
    punchine: {
        type: String,
        minlenght: [3, "Este campo debe tener al menos 3 caracteres"]
    }
}, { timestamps: true, versionKey: false});

const Broma = mongoose.model("broma", JokeSchema);

module.exports = Broma;