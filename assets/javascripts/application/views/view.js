define(['backbone','jquery'],function(Backbone,$){
 var View = Backbone.View.extend({
   el: 'body',
   events : {
     'click .customizebutton' : "test"
   },
   initialize:function(){
     this.render();
   },
   render: function(){
    $(this.el).html("<p class='customizebutton'>we have to test this page</p>");
  },
  test : function () {
    alert ("paragraph clicked")
  }


 });


return View;

});
