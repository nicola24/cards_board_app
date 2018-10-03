const express = require('express');

const db = require('../../db/models');

const router = express.Router();

// GET => fetch all the memos
router.route('/getmemos').get((req, res, next) => {
  db.getMemos().then((memos) => {
    res.send(memos);
  }).catch((err) => {
    next(err);
  });
});

// POST => create a new memo
router.route('/creatememo').post((req, res, next) => {
  db.createMemo(req.body).then(() => {
    res.send();
  }).catch((err) => {
    next(err);
  });
});

// DELETE => delete a memo
router.route('/deletememo').delete((req, res, next) => {
  db.deleteMemo(req.body.id, (err) => {
    if (err) next(err);
    res.send();
  });
});

// POST => update an existing memo
router.route('/updatememo').post((req, res, next) => {
  db.updateMemo(req.body.id, req.body.update, (err) => {
    if (err) next(err);
    res.send();
  });
});

module.exports = router;
