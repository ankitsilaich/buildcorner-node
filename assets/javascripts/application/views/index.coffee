define ['backbone','jquery','handlebars'] , (Backbone,$,Handlebars) ->
  View =  Backbone.View.extend  ->
    el : 'body',
    initialize: ()->
     this.render()
    render: ()->
     $(this.el).html("<p class='customizebutton'>we have to test this page</p>");
     console.log('index from server');
  View
