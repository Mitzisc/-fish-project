
console.log('llamando a express')
/* eslint-disable prettier/prettier */
const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
