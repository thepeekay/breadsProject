// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../Model/baker.js')
const bakerSeedData = require('../Model/baker_seed.js')

//Routes
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})


// export
module.exports = baker                    
