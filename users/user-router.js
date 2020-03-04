const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { jwtSecret } = require('../config/secret')

const db = require('../users/user-model')



/************************/
/******** CREATE ********/
/************************/

router.post('/register', (req, res) => {
  let user = req.body

  db.addUser({...user, password: bcrypt.hashSync(user.password,8)})
  .then(newUser => {
    res.status(201)
    .json(newUser)
  })
  .catch(err => {
    res.status(500)
    .json(err)
  })
})

router.post('/login', (req, res) => {
  let { username, password } = req.body

  db.findBy(username)
    .then(user => {

      if(user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user)
        res.status(200)
        .json({ message: ({ token }) })

      } else {
        res.status(401)
        .json({ authentication : "FAILED...I've got my eyes on you." })
      }
    })
    .catch(err => {
      res.status(500)
      .json(err)
    })
})



/**********************/
/******** READ ********/
/**********************/

router.get('/', (req, res) => {
  db.find()
      .then(users => {
          res.status(200)
          .json(users)
      })
      .catch(err => {
          console.log(err)
          res.status(500)
          .json({message: 'Unable to get users'})
      })
})

router.get('/:id', (req, res) => {
  db.findById(req.params.id)

      .then(actions => {
          res.status(200)
          .json(actions)})
  
      .catch(error => {
          console.log(error)
          res.status(500)
          .json({ error: 'We ran into an error retrieving the actions' })
      })
})




function signToken(user) {
  const payload = { user }
  const options = { expiresIn: '1d' }
  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router