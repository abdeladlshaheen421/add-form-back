const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  nameEn: { type: String },
  nameAr: { type: String },
  category: { type: String },
  refuse: { type: Number },
  water: { type: Number },
  energy: { type: Number },
  protein: { type: Number },
  fat: { type: Number },
  ash: { type: Number },
  fiber: { type: Number },
  carbohydrate: { type: Number },
  sodium: { type: Number },
  potassium: { type: Number },
  calcium: { type: Number },
  phosphorus: { type: Number },
  magnesium: { type: Number },
  iron: { type: Number },
  zinc: { type: Number },
  copper: { type: Number },
  vitaminA: { type: Number },
  vitaminC: { type: Number },
  thiamin: { type: Number },
  riboflavin: { type: Number },
});

module.exports = mongoose.model('food', foodSchema);
