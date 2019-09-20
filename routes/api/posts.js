const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Welcome to posts feed' });
});

module.exports = router;
