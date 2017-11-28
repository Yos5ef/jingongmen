var Sequelize = require('sequelize');
var sequelize = require('./modelhead')();
var usersModel = sequelize.define('users',{
	id:{
		type:Sequelize.BIGINT,
		primaryKey:true
	},
	name:Sequelize.STRING,
	pwd:Sequelize.STRING,
	nicheng:Sequelize.STRING,
	createtime:Sequelize.DATE,
	updtime:Sequelize.DATE,
	role:Sequelize.INTEGER
},{
	timestamps:false
});


module.exports = usersModel;