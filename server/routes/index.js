/* eslint-disable prettier/prettier */

// Importando el router de Home
import home from './home';

const express = require('express');

const router = express.Router();

/* GET home page. */
router.use('/', home);

module.exports = router;
