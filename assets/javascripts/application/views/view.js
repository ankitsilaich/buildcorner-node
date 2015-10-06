define(['backbone','jquery'],function(Backbone,$){
 var View = Backbone.View.extend({
   el: 'body',
   initialize:function(){
     this.render();
   },
   render: function(){
    $(this.el).html("<p>we have to test this page</p>");
  }


 });


return View;

});
