require.config({
  baseUrl: '/javascripts/backbone/',
  paths: {
    "jquery": "../jquery.min",
    "text": "../text",
    "underscore": "../underscore",
    "backbone": "../backbone"
  }
});

require(['backbone','routers/newRouter'], function(Backbone,appRouter) {

    new appRouter();
    Backbone.history.start({pushState:true});
  // new appView();
});
