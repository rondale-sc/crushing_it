var IndexRoute = Ember.Route.extend({
  model: function() {
    var store = this.get('store');
    return store.findAll('key');
  }
});

export default IndexRoute;
