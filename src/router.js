const express = require('express');
const router = express.Router();
const { createCartao, getAllCartoes } = require('./controllers/CartaoController');

router.post('/', createCartao);
router.get('/', getAllCartoes);

module.exports = router;
