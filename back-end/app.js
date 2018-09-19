/* IMPORTS */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');
const appMiddlewares = require('./middlewares/appMiddlewares');

//ROTAS
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const usuariosRouter = require('./routes/usuarios');

const app = express();
const config = require('./config');

//conexao do banco de dados
mongoose.connect('mongodb://localhost:27017/nextbeer', { useNewUrlParser: true });

//inicia uma configuração default 
mongoose.connection.on('connected', ()=>{
	config.configureDefaultUser();
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//inicialização das rotas que acessam os metodos HTTP(get,post,put,delete)
// aqui vai ter uma rota para direcionar para cada caso de uso e seus controllers
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/usuarios', usuariosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
