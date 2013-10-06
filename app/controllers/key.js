var Key = Ember.ObjectController.extend({
  keyClass: function(){
    var classes = 'k' + this.get('keyCode') + " " + this.get('htmlClass');

    if (this.get('pressed')) {
      classes = classes + ' pressed'
    }

    return classes;
  }.property('keyCode','htmlClass', 'pressed')
});

export default Key;
