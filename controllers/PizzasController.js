const pizzas = require('../database/Pizzas.json')

module.exports = {
	index: (req, res)=>{
		res.render("index", {pizzas : pizzas});
	},
	show: (req,res)=>{

		const idPizza = req.params.id
		//res.send(req.params.id)
		//1. CARREGAR PIZZA DE ID PASSADO EM PIZZAS.FIND
		//2. RENDERIZAR A VIEW PIZZA PASSANDO A PIZZA ENCONTRADA
		//3. colocar ingredintes nome
		res.render("pizza", {pizzas})
	},

	/*
	search: (req,res)=>{
		pizzas.find(x => x == pizzas.nome)
	}*/
}