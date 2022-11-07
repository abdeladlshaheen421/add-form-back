const Food = require('./../Models/Food');

module.exports.createFood = async (req, res) => {
  let food = new Food({
    nameEn: req.body.nameEn,
    nameAr: req.body.nameAr,
    category: req.body.category,
    refuse: req.body.refuse,
    water: req.body.water,
    energy: req.body.energy,
    protein: req.body.protein,
    fat: req.body.fat,
    ash: req.body.ash,
    fiber: req.body.fiber,
    carbohydrate: req.body.carbohydrate,
    sodium: req.body.sodium,
    potassium: req.body.potassium,
    calcium: req.body.calcium,
    phosphorus: req.body.phosphorus,
    magnesium: req.body.magnesium,
    iron: req.body.iron,
    zinc: req.body.zinc,
    copper: req.body.copper,
    vitaminA: req.body.vitaminA,
    vitaminC: req.body.vitaminC,
    thiamin: req.body.thiamin,
    riboflavin: req.body.riboflavin,
  });

  let result = await food.save();
  res.status(201).send({ message: 'food item created', result });
};
