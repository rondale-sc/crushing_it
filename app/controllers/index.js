var Index = Ember.ArrayController.extend({
  crushingString: "Totes Crushing It! ",
  pressedCount: 0,
  mainKeys: function(){
    return this.content.filterBy('additional',false);
  }.property(),

  additionalKeys: function(){
    return this.content.filterBy('additional',true);
  }.property(),

  totalCrushings: function(){
    return parseInt((this.get('pressedCount') / this.crushingString.length), 10)
  }.property('pressedCount'),

  output: function(){
    var pressedCount = this.get('pressedCount'), remainder, output;

    if (pressedCount === 0) {
      remainder = 0;
    } else {
      remainder = pressedCount % this.crushingString.length;
    }

    output = this.crushingString.slice(0, remainder);

    return output;
  }.property('pressedCount')
});

export default Index;
