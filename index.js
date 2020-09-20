const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express();
const connection = require("./models/connectdb")
const Post = require('./models/Post')


//Config
	//Engine


	app.engine('handlebars', handlebars({defaultLayout: 'main'}))
	app.set('view engine', 'handlebars');

	app.use(bodyParser.urlencoded({extended: false}))
	app.use(bodyParser.json())


	app.get('/', function(req, res){
		Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
			console.log(posts)
			res.render('home', {posts: posts})
		})
	})

	//router cadastras
	app.get('/cad', function(req, res){
		res.render('formulario');
	})


	app.post('/add', function(req, res){
		Post.create({			
			titulo: req.body.titulo,
			conteudo: req.body.conteudo
		}).then(function(){
			res.redirect('/')
		}).catch(function(erro){
			res.send("Houve um erro" + erro)
		})


	})


app.listen('8087', function(){
	console.log("Runnig my Server")
})
