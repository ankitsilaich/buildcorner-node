define ['backbone'] , (Backbone) ->
  class Person extends Backbone.Model
    defaults:
      'name' : 'sahil',
      'email' : 'ssolanki@gmail.com'

    initialize: () ->
      console.log('Person initialized');

      @on 'change', ->
        if @hasChanged 'name'
          console.log('name has been changed');
        if @hasChanged 'email'
          console.log('email has been changed');            
  Person
