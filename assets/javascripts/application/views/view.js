define(['backbone','jquery','../models/person','text!/javascripts/application/templates/test.html','handlebars'],function(Backbone,$,Person,testHTML,Handlebars){
 var View = Backbone.View.extend({
   el: 'body',
   events : {
     'click .customizebutton' : "test"
   },
   initialize:function(){
     this.render();
   },
   render: function(){
    var user  = new Person();
    user.set({'name':'ankit','email':'ankit@gmail.com'});
    console.log(user.toJSON());
    var template = Handlebars.compile(testHTML);
    var personHTML = template(user.toJSON());
    $(this.el).html(personHTML);
    // $(this.el).html("<p class='customizebutton'>we have to test this page</p>");
    this.basicUnderscoreFunctions();
  },
  test : function () {
    alert ("paragraph clicked")
  },
  basicUnderscoreFunctions : function(){
    var Scores = [95, 82, 98, 78, 65];
    var hasPassed = _(Scores).all(function (value){if(value>50){console.log(value); return value>80; }});
    console.log(hasPassed);
  }
});
return View;

});
