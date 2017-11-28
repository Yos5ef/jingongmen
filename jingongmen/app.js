var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/index');
var users = require('./routes/users');
var info = require('./routes/info.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser({uploadDir:'./uploadtemp'}));//设置上传临时文件夹



var openPage = ['/','/login','/favicon.ico','/logout','/register','/home','/Certification','/info/certification'];

app.use(function(req, res, next) {
  	var url = req.originalUrl;
  	if(openPage.indexOf(url)>-1){
  		next();
 	 }else{
	  	if(req.session.loginbean){
	  		next();
	  	}else{
	  		res.redirect('/');
	  	}
  	}
});


// app.use('/users', users);



var session = require('express-session');
app.use(session({
	secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
	cookie: {
		maxAge: 60 * 1000
	}, //cookie生存周期60秒
	resave: true, //cookie之间的请求规则,假设每次登陆，就算会话存在也重新保存一次
	saveUninitialized: true //强制保存未初始化的会话到存储器
})); //这些是写在app.js里面的


app.use('/', users);
app.use('/info',info);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
