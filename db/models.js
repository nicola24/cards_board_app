const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/board', { useNewUrlParser: true });

const MemoSchema = new mongoose.Schema({
  title: String,
  description: { type: String, required: true },
  color: { type: String, enum: ['green', 'yellow', 'blue', 'orange', 'pink'], required: true },
  time: { type: Date, default: Date.now },
});

const Card = mongoose.model('Card', MemoSchema);

// find all memos
const getMemos = () => Card.find();

// create one meme
const createMemo = card => Card.create(card);

// delete one memo
const deleteMemo = (id, cb) => Card.findByIdAndDelete(id, cb);

// update one memo
const updateMemo = (id, {
  title: updateTitle,
  description: updateDescription,
  color: updateColor,
}, cb) => Card.findByIdAndUpdate(id, {
  title: updateTitle,
  description: updateDescription,
  color: updateColor,
}, cb);

module.exports = {
  getMemos,
  createMemo,
  deleteMemo,
  updateMemo,
};
