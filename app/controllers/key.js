var Key = Ember.ObjectController.extend({
  keyClass: function(){
    return 'k' + this.content.get('keyCode') + " " + this.content.get('htmlClass')
  }.property()
});

export default Key;
