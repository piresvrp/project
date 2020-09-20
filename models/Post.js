const db = require('./connectdb')


const Post = db.sequelize.define('Postagens', {
	titulo: {
		type: db.Sequelize.STRING	
	},
	conteudo: {
		type: db.Sequelize.TEXT
	}
})

//ost.sync({force: true})
module.exports = Post;

