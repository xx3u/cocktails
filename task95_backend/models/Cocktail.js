const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CocktailSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipe: {
    type: String,
    required: true
  },
  published: {
    type: Boolean,
    default: false
  },
  ingredients: [{
    name: {type: String},
    qty: {type: String},
    id: {type: String}
  }]
});

const Cocktail = mongoose.model('Cocktail', CocktailSchema);
module.exports = Cocktail;