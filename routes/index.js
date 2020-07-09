const express = require('express');
const controllers = require('../controllers');
const router = express.Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/api/posts', controllers.createPost);

router.get('/api/posts', controllers.getAllPosts);

router.get('/api/posts/:postId', controllers.getPostById);

router.put('/api/posts/:postId', controllers.updatePost);

router.delete('/api/posts/:postId', controllers.deletePost);

module.exports = router;
