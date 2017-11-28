var Sequelize = require('sequelize');
var seqConn = null;
var sequelize = function(){
	if(seqConn == null){
		console.log('创建链接');
		seqConn = new Sequelize('canyin','root','',{
		host:'127.0.0.1',
		dialect:'mysql'
		});
	}
	return seqConn;
}

module.exports = sequelize;