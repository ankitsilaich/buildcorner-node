/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  morgan = require('morgan'),
  compression = require('compression'),
  // routes = require('./routes'),
  // api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  config = require('./config');

var app = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000); // port definiton here server will run on localhost:3000
app.set('views', _dir.VIEWS_PATH); // views folder declaration path will be root+ views i.e. /views
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use(methodOverride('X-HTTP-Method-Override'))

app.use(express.static(_dir.PUBLIC_ASSETS));
app.use(require(_dir.CONTROLLER_DIR));
//app.use(require(_dir.MIDDLEWARE_DIR + '/browser_support'));
    var env = process.env.NODE_ENV || 'development';

    // development only
    if (env === 'development') {
      app.use(errorHandler());
    }

    // production only
    if (env === 'production') {
      // TODO
    }

    module.exports = {
      init: function() {
        http.createServer(app).listen(app.get('port'), function() {
          console.log('Express server listening on port ' + app.get('port'));
        });
      }
    }
