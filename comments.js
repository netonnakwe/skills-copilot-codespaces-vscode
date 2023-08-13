// Create web server using express
const express = require('express');
const router = express.Router();

// Importing the comments controller
const commentsController = require('../controllers/comments_controller');

// Create route for creating comment
router.post('/create', commentsController.create);

// Create route for deleting comment
router.get('/destroy/:id', commentsController.destroy);

// Exporting the router
module.exports = router;