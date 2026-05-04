const express = require('express');
const router = express.Router();

// GET /api/test
router.get('/', (req, res) => {
  res.json({ success: true, message: 'API is working!' });
});

module.exports = router;
