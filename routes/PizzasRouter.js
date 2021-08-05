var express = require('express');
var router = express.Router();

const PizzasController = require('../controllers/PizzasController');

/* GET home page. */
router.get('/', PizzasController.index);
router.get('/pizzas/:id', PizzasController.show);
router.get('/busca', PizzasController.search);
router.get('/create', PizzasController.create);
router.post('/create', PizzasController.store);



module.exports = router;
