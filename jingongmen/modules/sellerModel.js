var Sequelize = require('sequelize');
var sequelize = require('./modelHead')();
var sellerModel = sequelize.define('sellers',{
	id:{
		type:Sequelize.BIGINT,
		primaryKey:true
	},
	uid:Sequelize.BIGINT,
	shopname:Sequelize.STRING,
	idnumber:Sequelize.STRING,
	idphoto:Sequelize.STRING,
	idphotopath:Sequelize.STRING,
	address:Sequelize.STRING,
	email:Sequelize.STRING,
	shoptype:Sequelize.STRING,
	createtime:Sequelize.DATE,
	updtime:Sequelize.DATE,
	status:Sequelize.INTEGER
},{
	timestamps:false
});


module.exports = sellerModel;