define ['backbone','jquery'] , (Backbone,$) ->
  View =   Backbone.View.extend (
    el : 'body',
    initialize:  ->
     this.render()
     this.loadCss('../../stylesheets/base/reset.css')
     this.loadCss('../../stylesheets/base/font-awesome.css')
    render: ->
    events:
      'click #toggleDefaultNav': 'toggleLeftSideBar'

    toggleLeftSideBar : (e) ->
      console.log "hide small bar"
      e.preventDefault();
      $('.sidebar-left').toggleClass('sidebar-collapsed')
      $('.logo').toggleClass('logo-collapsed')
      $('.header-section').toggleClass('header-collapsed')
    loadCss : (url) ->
      $("head").append("<link  href='"+ url+ "' type='text/css' rel='stylesheet' />");
  )
  View
