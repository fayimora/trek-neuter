var App = window.App = Ember.Application.create();

require('controllers/*');
require('models/models');
require('routes/*');
require('views/*');

App.IndexRoute = Ember.Route.extend({
  redirect: function () {
    this.transitionTo('posts');
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditting: false,

  doneEditting: function () {
    this.set('isEditting', false);
  },
  edit: function () {
    this.set('isEditting', true);
  }
});


Ember.Handlebars.registerBoundHelper('date', function (date) {
  return moment(date).fromNow();
});

var showdown = new Showdown.converter();
Ember.Handlebars.registerBoundHelper('markdown', function (text) {
  return new Ember.Handlebars.SafeString(showdown.makeHtml(text));
});

