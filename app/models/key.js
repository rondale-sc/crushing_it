var Key = DS.Model.extend({
  keycode: DS.attr("number"),
  primary: DS.attr("string"),
  side: DS.attr("string"),
  alt: DS.attr("string")
});

Key.FIXTURES = [
  {
    side: "f5",
    primary: "5",
    keycode: 59,
    alt: "%"
  }
];

export default Key;
