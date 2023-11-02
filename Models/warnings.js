const mongoose = require('mongoose')

const warnings = new mongoose.Schema ({
    name: String,
    warnings: { type: Number, default: 1 },
    timestamp: { type: Date, default: Date.now, expires: 28800 },
  
})

module.exports = mongoose.model('warnings', warnings)