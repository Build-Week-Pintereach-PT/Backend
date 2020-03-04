const router = require('express').Router()
const db = require('../boards/board-model')

/************************/
/******** CREATE ********/
/************************/

router.post('/', (req, res) => {

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
            .json({ error: 'We ran into an error retrieving the actions' })
        })
})

router.get('/user/:id', (req, res) => {
    db.findBoardByUser(req.params.id)
  
        .then(actions => {
            res.status(200)
            .json(actions)})
    
        .catch(error => {
            res.status(500)
            .json({ error: 'We ran into an error retrieving the boards' })
        })
})



/************************/
/******** UPDATE ********/
/************************/

router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
  
        .then(() => {
            res.status(200)
            .json({ message: 'Board updated successfully' })})
    
        .catch(error => {
            console.log(error)
            res.status(500)
            .json({ error: 'We ran into an error updating the board' })
        })
})



/************************/
/******** DELETE ********/
/************************/

router.delete('/:id', (req, res) => {
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