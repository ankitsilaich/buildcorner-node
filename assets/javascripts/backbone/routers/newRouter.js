define(['backbone'],function(Backbone){
  
  var Router = Backbone.Router.extend({
    
    
    routes : {
      '' : 'index',
      'abouttest' : 'about'
    },
    index : function () {
      require(['views/view'],function(aboutView){
        new aboutView();
        
      })
    },
    about : function () {
     require(['views/view'],function(aboutView){
       new aboutView();
       
     })
    }
    
    
    
    
    
    
  });
  
  return Router;
  
});