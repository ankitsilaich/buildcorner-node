
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  morgan = require('morgan'),
  // routes = require('./routes'),
  // api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  config = require('./config');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000); // port definiton here server will run on localhost:3000
app.set('views', __dirname + '/views'); // views folder declaration path will be root+ views i.e. /views
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(methodOverride('X-HTTP-Method-Override'))

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));
app.use(require(_dir.MIDDLEWARE_DIR+'/browser_support'));
var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}


http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
