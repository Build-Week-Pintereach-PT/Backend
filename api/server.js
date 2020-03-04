const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// server
const server = express();

// imports
const userRouter = require('../users/user-router')
const boardRouter = require('../boards/board-router')
const articleRouter = require('../articles/article-router')

// global middlewares
server.use(helmet());
server.use(express.json());
server.use(cors());

// routes
server.use('/api/user', userRouter)
server.use('/api/boards', boardRouter)
server.use('/api/articles', articleRouter)

// sanity check
server.get('/', (req, res) => {
  res.send('<h2>I am alive and well!</h2>');
});

module.exports = server;
