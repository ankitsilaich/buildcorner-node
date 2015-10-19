
define ['backbone'] , (Backbone) ->
  class Router extends Backbone.Router
    routes :
      '' : 'index'
      'about' : 'about'
      'login' : 'login'
    initialize : () ->
      require ['views/header'], (View) ->
        new View

    index : () ->
      console.log('index page initialized');
      require ['views/index'], (View) ->
        new View
      console.log("ankit")
    about : () ->
      require ['views/view'], (View) ->
        new View
    login : () ->
      require ['views/login'], (View) ->
        new View

  Router
