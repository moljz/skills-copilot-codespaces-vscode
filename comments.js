// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import controller
const controller = require('../controllers/comments');

// Import middleware
const auth = require('../middleware/auth');

// Import validator
const { validateComment } = require('../validator/comments');

// @route   POST /api/comments
// @desc    Create a comment
// @access  Private
router.post('/', auth, validateComment, controller.createComment);

// @route   GET /api/comments/:id
// @desc    Get a comment
// @access  Private
router.get('/:id', auth, controller.getComment);

// @route   PUT /api/comments/:id
// @desc    Update a comment
// @access  Private
router.put('/:id', auth, validateComment, controller.updateComment);

// @route   DELETE /api/comments/:id
// @desc    Delete a comment
// @access  Private
router.delete('/:id', auth, controller.deleteComment);

// @route   GET /api/comments
// @desc    Get all comments
// @access  Private
router.get('/', auth, controller.getComments);

module.exports = router;