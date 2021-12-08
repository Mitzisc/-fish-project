/*var winston = require('winston');         
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console,{'timestamp':true,'colorize':true});
winston.log('info','hola');*/


const express = require('express');
const { add } = require('winston');
const router = express.Router();

console.log('como lo recibe el usuario');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
