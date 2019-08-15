const express = require('express');

const PostsRouter = require('./hubs/posts-router.js');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

server.use('/api/posts', PostsRouter);

server.get('/', (req, res) => {
   res.send(console.log('yo'))
    .catch (error => {
        console.log(error);
        res.status(500).json({
            error: 'error'
        })   
    })
})


module.exports = server;