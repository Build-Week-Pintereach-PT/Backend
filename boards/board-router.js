const router = require('express').Router()
const db = require('../boards/board-model')
const middleAuth = require('../auth/authenticate-middleware')

/************************/
/******** CREATE ********/
/************************/

router.post('/', middleAuth, (req, res) => {

    db.addBoard(req.body)
  
        .then(id => {
            res.status(201)
            .json(id)})
    
        .catch(error => {
            console.log(error)
            res.status(500)
            .json({ error: 'We ran into an error creating the board' })
        })
  })



/**********************/
/******** READ ********/
/**********************/

router.get('/', (req, res) => {
    db.find()
  
        .then(actions => {
            res.status(200)
            .json(actions)})
    
        .catch(error => {
            console.log(error)
            res.status(500)
            .json({ error: 'We ran into an error retrieving the boards' })
        })
})

router.get('/user/:id', (req, res) => {
    db.findBoardByUser(req.params.id)
  
        .then(actions => {
            res.status(200)
            .json(actions)})
    
        .catch(error => {
            res.status(500)
            .json({ error: 'We ran into an error retrieving the board' })
        })
})



/************************/
/******** UPDATE ********/
/************************/

router.put('/:id', middleAuth, (req, res) => {
    db.update(req.params.id, req.body)
  
        .then(() => {
            res.status(200)
            .json({ message: 'Board updated successfully' })})
    
        .catch(error => {
            console.log(error)
            res.status(500)
            .json(error.message)
        })
})



/************************/
/******** DELETE ********/
/************************/

router.delete('/:id', middleAuth, (req, res) => {
    db.remove(req.params.id)
  
        .then(() => {
            res.status(200)
            .json({ message: 'Board deleted successfully' })})
    
        .catch(error => {
            res.status(500)
            .json({ error: 'We ran into an error removing the board' })
        })
})
  
module.exports = router