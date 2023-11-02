const mongoose = require('mongoose')

const claimCoins = new mongoose.Schema ({
    name: String,
    claimedCoins: { type: Boolean, default: true },
    timestamp: { type: Date, default: Date.now, expires: 10 },
  
})

module.exports = mongoose.model('claimCoins', claimCoins)