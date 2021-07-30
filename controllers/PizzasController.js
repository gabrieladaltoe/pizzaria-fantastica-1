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
	}

	/*
	search: (req,res)=>{
		
	}*/
}