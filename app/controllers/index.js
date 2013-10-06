var Index = Ember.ArrayController.extend({
  mainKeys: function(){
    return this.content.filterBy('additional',false);
  }.property(),

  additionalKeys: function(){
    return this.content.filterBy('additional',true);
  }.property()
});

export default Index;
