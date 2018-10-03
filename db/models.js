const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/board', { useNewUrlParser: true });

const MemoSchema = new mongoose.Schema({
  title: String,
  description: { type: String, required: true },
  color: { type: String, enum: ['green', 'yellow', 'blue', 'orange', 'pink'], required: true },
  time: { type: Date, default: Date.now },
});

const Memo = mongoose.model('Memo', MemoSchema);

// find all memos
const getMemos = () => Memo.find();

// create one meme
const createMemo = card => Memo.create(card);

// delete one memo
const deleteMemo = (id, cb) => Memo.findByIdAndDelete(id, cb);

// update one memo
const updateMemo = (id, {
  title: updateTitle,
  description: updateDescription,
  color: updateColor,
}, cb) => Memo.findByIdAndUpdate(id, {
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
