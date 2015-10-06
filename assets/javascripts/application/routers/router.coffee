define ['backbone'] , (Backbone) ->
  class Router extends Backbone.Router
    routes : 
      '' : 'index'
      'about' : 'about'
    index : () ->
      require ['views/view'], (View) ->
        new View
      console.log("ankit") 
    about : () ->
      require ['views/view'], (View) ->
        new View 
  Router
