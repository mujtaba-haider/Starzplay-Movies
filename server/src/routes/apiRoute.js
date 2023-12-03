const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/getMovies', movieController.getMovies);

module.exports = router;