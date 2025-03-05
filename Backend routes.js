const express = require('express');
const { getHabits } = require('./controllers/habitsController');

const router = express.Router();

router.get('/habits', getHabits);

module.exports = router;
