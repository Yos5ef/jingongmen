var express = require('express');
var router = express.Router();

var Sequelize = require('sequelize');
var userModel = require('../modules/userModel');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('home/home');
});

router.get('/home',function(req,res,next){
 loginbean = req.session.loginbean;
 var roles = '身份认证'
 if(loginbean.role == 2){
    roles = '审核中..';
 }
 res.render('home/index',{loginbean:loginbean.name,loginrole:roles});
});

router.get('/login',function(req,res,next){
	res.render('login');
});
router.get('/register',function(req,res,next){
	res.render('register');
})
router.get('/Certification',function(req,res,next){
	res.render('home/Certification');
})




router.post('/login', function(req, res, next) {
	userModel.findOne({
		where:req.body
	}).then(function(rs) {
		if (rs) {
			loginbean = {};
			loginbean = req.body;
			loginbean.id = rs.id;
			loginbean.role = rs.role;
			loginbean.nicheng = rs.nicheng;
			console.log(loginbean);
			req.session.loginbean = loginbean;
			res.redirect("/home");
		}else if(rs==null){
			res.send('账号或密码错误');
		}
	}).catch(function(err) {
		console.log(err);
	})
});

router.post('/register', function(req, res, next) {
	userModel.create(req.body).then(function(rs) {
			if (rs) {
				loginbean = {};
				loginbean = req.body;
				loginbean.id = rs.id;
			 	loginbean.role = rs.role;
				req.session.loginbean = loginbean;
				res.redirect("/home");
			}
		}).catch(function(err) {
			console.log(err);
			if (err.errors[0].path == 'nameuniq') {
				res.send('名称重复')
			} else if (err.errors[0].path == 'nichenguniq') {
				res.send('昵称重复')
			} else {
				res.send('数据库出错');
			}

		})
		// console.log(name);
		// res.render('index/index');

});


router.get('/logout',function(req,res,next){
	console.log(111);
	delete req.session.loginbean;
	res.redirect('/');
});

module.exports = router;
