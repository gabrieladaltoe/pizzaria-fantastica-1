const pizzas = require('../database/Pizzas.json')

module.exports = {
	index: (req, res)=>{
		res.render("index", {pizzas : pizzas});
	},
	show: (req,res)=>{

		

		//let id = req.params.id
		let { id } = req.params
		//res.send(req.params.id)
		//1. CARREGAR PIZZA DE ID PASSADO EM PIZZAS.FIND
		//2. RENDERIZAR A VIEW PIZZA PASSANDO A PIZZA ENCONTRADA
		//3. colocar ingredintes nome

		let pizza = pizzas.find(pizza => pizza.id == id)



		let proximo = id
		let voltar = id

		if(id >= pizzas.length){
			proximo = false
		} else {
			proximo = parseInt(id) + 1
		}

		if(id < 1){
			voltar = false
		}else{
			voltar =  parseInt(id) - 1
		}



		res.render("pizza", {pizza, proximo, voltar})
	},

	search: (req, res) => {

		let busca = req.query.busca;

		console.log(busca)

		//GUARDAR BUSCA

		//busca.incluedes("cala") ou
		//pizza.incluedes("cala")

		let encontradas = pizzas.filter(p => p.nome == busca)


		res.render("index", {pizzas:encontradas})
		
		//REPRESENTAR NUM ARRAY "encontradas" SOMENTE PIZZAS encontradas Q CONTENHAM A STRING BUSCADA

		//retornar a view com as pizzas encontradas
		
	},
	create: (req, res) => {
		res.render("pizza-create")
	},
	store: (req, res) => {
		let novaPizza = {
			id:`${pizzas[pizzas.length - 1].id} + 1`,
			nome: req.body.nome,
			igredientes: req.body.ingredientes.split(","),
			preco: req.body.preco,
			img: "/img/calabresa.jpg",
			destaque: true
		}

		pizzas.push(novaPizza)

		res.render("index", {pizzas})
	
		/*
		File System

		const fs = require('fs');

		*/ 

	}

}