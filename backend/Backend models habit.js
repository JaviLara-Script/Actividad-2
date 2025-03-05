const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  progress: { type: Number, default: 0 },
  userId: { type: String, required: true },
});

module.exports = mongoose.model('Habit', HabitSchema);
