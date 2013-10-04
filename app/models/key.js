App.Key = DS.Model.extend({
  keycode: DS.attr("number"),
  primary: DS.attr("string"),
  side: DS.attr("string"),
  alt: DS.attr("string")
});
