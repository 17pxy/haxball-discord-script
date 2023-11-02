const mongoose = require('mongoose')

const syncDiscord = new mongoose.Schema ({
    userID: String,
    uses: { type: Number, default: 0 },
    code: { type: String, required: true },
    timestamp: { type: Date, default: Date.now, expires: 30 },
  
})

module.exports = mongoose.model('syncDiscord', syncDiscord)