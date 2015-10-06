require.config
  baseUrl: '/javascripts/application/',
  paths: 
    "jquery": "../jquery.min",
    "text": "../text",
    "underscore": "../underscore",
    "backbone": "../backbone",
    "libraries" : "../libraries"

require ['libraries','routers/router','assets'], (libraries,Router,Buildcorner) ->
  router = new Router
  Buildcorner.router = router 
  Backbone.history.start({pushState : true})
