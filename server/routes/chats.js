var express = require('express');
var router = express.Router();
var Chat = require('../models/chat')

/* GET chats listing. */
router.get('/', (req, res) => {
  Chat.find({}, (err, chats) => {
    if (err) return res.status(500).json({err});
    res.status(200).json(chats);
  });
});

/* POST message. */
router.post('/', (req, res) => {
  Chat.create({id: req.body.id, name: req.body.name, message: req.body.message}, (err, chat) => {
    if (err) return res.status(500).json({err});
    res.status(200).json(chat);
  });
});

/* PUT chat. */
router.put('/:id', (req, res) => {
  Chat.findOneAndUpdate({id: parseInt(req.params.id)}, {name: req.body.name, message: req.body.message}, {new: true}, (err, chat) => {
    if (err) return res.status(500).json({err});
    res.status(200).json(chat);
  });
});

/* DELETE chat. */
router.delete('/:id', (req, res) => {
  Chat.findOneAndRemove({id: parseInt(req.params.id)}, (err, chat) => {
    if (err) return res.status(500).json({err});
    res.status(200).json(chat);
  });
});

module.exports = router;
