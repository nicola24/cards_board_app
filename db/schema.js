const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/board');

const CardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  color: { type: String, enum: ['green', 'yellow', 'blue', 'orange', 'pink'], required: true },
  time: { type: Date, default: Date.now },
});

const Card = mongoose.model('Card', CardSchema);

// find all cards
const getCards = () => Card.find();

// create one card
const createCard = card => Card.create(card);

// delete one card
const deleteCard = (id, cb) => Card.findByIdAndDelete(id, cb);

// update one card
const updateCard = (id, {
  title: updateTitle,
  description: updateDescription,
  color: updateColor,
}, cb) => Card.findByIdAndUpdate(id, {
  title: updateTitle,
  description: updateDescription,
  color: updateColor,
}, cb);

module.exports = {
  getCards,
  createCard,
  deleteCard,
  updateCard,
};
