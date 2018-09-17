const express = require('express');
const bodyParser = require('body-parser');

const db = require('../db/schema');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('dist'));

// GET => fetch all the memos
app.get('/getmemos', (req, res, next) => {
  db.getCards().then((memos) => {
    res.send(memos);
  }).catch((err) => {
    next(err);
  });
});

// POST => create a new memo
app.post('/creatememo', (req, res, next) => {
  db.createCard(req.body).then(() => {
    res.send();
  }).catch((err) => {
    next(err);
  });
});

// DELETE => delete a memo
app.delete('/deletememo', (req, res, next) => {
  db.deleteCard(req.body.id, (err) => {
    if (err) next(err);
    res.send();
  });
});

// POST => update an existing memo
app.post('/updatememo', (req, res, next) => {
  db.updateCard(req.body.id, req.body.update, (err) => {
    if (err) next(err);
    res.send();
  });
});

app.listen(port, () => console.log(`*** App listening on port ${port}! ***`));
