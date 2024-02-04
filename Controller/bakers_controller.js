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

// Index: 
baker.get('/', (req, res) => {
    Baker.find()
        .populate(`breads`)
        .then(foundBakers => {
            res.send(foundBakers)
        })
}) 

// Show: 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})




// export
module.exports = baker                    
