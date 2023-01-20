const express = require('express')
const router =  express.Router()
const Biker = require('../models/biker')


router.post('/bikers', (req, res, next) => {
    Biker.create(req.body.biker)
        .then(biker => {
            res.status(201).json({ biker: biker })
        })
        .catch(next)
})

router.get('/bikers', (req, res, next) => {
    Biker.find()
            .then((bikers) => {
                return bikers.map((biker) => biker)
            })
            .then((bikers) => {
                res.status(200).json({ bikers: bikers })
            })
            .catch(next)
})

router.get('/bikers/:id', (req, res, next) => {
    Biker.findById(req.params.id)
        .then(biker => {res.status(200).json({ biker: biker })
        })
        .catch(next)

})           


router.patch('/bikers/:id', (req, res, next) => {
    Biker.findById(req.params.id)
    .then((biker) => {
        return biker.updateOne(req.body.biker)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.delete('/bikers/:id', (req, res, next) => {
    Biker.findById(req.params.id)
        .then(handle404)
        .then(biker => {
            return biker.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router