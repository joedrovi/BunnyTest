var express = require('express'); 
var logger= require('morgan');
var cookieParser = require('cookie-parser'); 
var cors = require('cors');
var indexRouter = require('./server/routes/index'); 

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));





require('./server/routes')(app);


module.exports = app;