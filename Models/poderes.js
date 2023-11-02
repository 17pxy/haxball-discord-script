const mongoose = require('mongoose')

const poderes = new mongoose.Schema ({
    name: String,
    gigante: { type: Number, default: 0 },
    velocidad: { type: Number, default: 0 },
    comba: { type: Boolean, default: 0 },
    power: { type: Number, default: 0 },
    todosChiquitos: { type: Number, default: 0 }
})

module.exports = mongoose.model('poderes', poderes)