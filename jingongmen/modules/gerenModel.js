var Sequelize = require('sequelize');
var sequelize = require('./modelhead')();
var gerenModel = sequelize.define('renzhengs',{
	id:{
		type:Sequelize.BIGINT,
		primaryKey:true
	},
	name:Sequelize.STRING,
	idnumber:Sequelize.STRING,
	phone:Sequelize.STRING,
	Email:Sequelize.STRING,
	address:Sequelize.STRING,
	filename:Sequelize.STRING,
	filepath:Sequelize.STRING,
	createtime:Sequelize.DATE,
	updtime:Sequelize.DATE,
	role:Sequelize.INTEGER
},{
	timestamps:false
});


module.exports = gerenModel;