App.Router.map(function () {
  // put your routes here
  this.resource('posts', function () {
    this.resource('post', {path: ':post_id'});
  });
  this.resource('about');
});
