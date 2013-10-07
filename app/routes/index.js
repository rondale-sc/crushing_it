/* global Mousetrap */

var IndexRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').findAll('key');
  },

  afterModel: function(keys){
    var self = this;

    keys.forEach(function(key){
      var bind = key.get('mousetrapBinding');
      Mousetrap.bind(bind, function(e){ self.pressed(key); return false; }, 'keydown');
      Mousetrap.bind(bind, function(e){ self.unpressed(key); return false; }, 'keyup');
    });
  },
  pressed: function(key){
    key.set('pressed', true);
    this.updatePressedCount();
  },

  unpressed: function(key) {
    key.set('pressed', false);
  },

  updatePressedCount: function() {
    var controller = this.controllerFor('index');
    controller.incrementProperty('pressedCount');
  }
});

export default IndexRoute;
