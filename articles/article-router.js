const router = require('express').Router()
const db = require('../articles/article-model')

/************************/
/******** CREATE ********/
/************************/

router.post('/', (req, res) => {

    db.addArticle(req.body)
  
        .then(id => {
            res.status(201)
            .json(id)})
    
        .catch(error => {
            console.log(error)
            res.status(500)
            .json({ error: 'We ran into an error creating the Article' })
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
            .json({ error: 'We ran into an error retrieving the articles' })
        })
})

router.get('/board/:id', (req, res) => {
    db.findArticleByBoard(req.params.id)
  
        .then(actions => {
            res.status(200)
            .json(actions)})
    
        .catch(error => {
            console.log(error)
            res.status(500)
            .json({ error: 'We ran into an error retrieving the article' })
        })
})



/************************/
/******** UPDATE ********/
/************************/

router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
  
        .then(() => {
            res.status(200)
            .json({ message: 'Article updated successfully' })})
    
        .catch(error => {
            console.log(error)
            res.status(500)
            .json({ error: 'We ran into an error updating the article' })
        })
})



/************************/
/******** DELETE ********/
/************************/

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
  
        .then(() => {
            res.status(200)
            .json({ message: 'Article deleted successfully' })})
    
        .catch(error => {
            res.status(500)
            .json({ error: 'We ran into an error removing the article' })
        })
})
  
module.exports = router