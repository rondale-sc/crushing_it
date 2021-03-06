var Key = DS.Model.extend({
  keyCode:   DS.attr("number"),
  primary:   DS.attr("string"),
  side:      DS.attr("string"),
  htmlClass: DS.attr("string"),
  alt:       DS.attr("string"),
  additional: DS.attr("boolean"),
  mousetrap: DS.attr("string"),

  mousetrapBinding: function(){
    var bind = this.get('mousetrap');
    if (!bind) { bind = this.get('primary'); }
    return bind.toLowerCase();
  }.property('mousetrap','primary')
});

Key.FIXTURES = [
  { id: 1,   side: "Power",     primary: "Esc",      keyCode: 27,    alt: "",       htmlClass: "f_key",            additional: false,  mousetrap: "esc" },
  { id: 2,   side: "F1",        primary: "1",        keyCode: 49,    alt: "!",      htmlClass: "key",              additional: false,  mousetrap: false},
  { id: 3,   side: "F2",        primary: "2",        keyCode: 50,    alt: "@",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 4,   side: "F3",        primary: "3",        keyCode: 51,    alt: "#",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 5,   side: "F4",        primary: "4",        keyCode: 52,    alt: "$",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 6,   side: "F5",        primary: "5",        keyCode: 53,    alt: "%",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 7,   side: "F6",        primary: "6",        keyCode: 54,    alt: "^",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 8,   side: "F7",        primary: "7",        keyCode: 55,    alt: "&",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 9,   side: "F8",        primary: "8",        keyCode: 56,    alt: "*",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 10,  side: "F9",        primary: "9",        keyCode: 57,    alt: "(",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 11,  side: "F10",       primary: "0",        keyCode: 48,    alt: ")",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 12,  side: "F11",       primary: "-",        keyCode: 189,   alt: "_",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 13,  side: "F12",       primary: "=",        keyCode: 187,   alt: "+",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 14,  side: "Ins",       primary: "\\",       keyCode: 220,   alt: "|",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 15,  side: "Del",       primary: "`",        keyCode: 192,   alt: "~",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 16,  side: "Caps",      primary: "Tab",      keyCode: 9,     alt: "",       htmlClass: "f_key",            additional: false,  mousetrap: "tab"},
  { id: 17,  side: "",          primary: "Q",        keyCode: 81,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 18,  side: "",          primary: "W",        keyCode: 87,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 19,  side: "",          primary: "E",        keyCode: 67,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 20,  side: "",          primary: "R",        keyCode: 82,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 21,  side: "",          primary: "T",        keyCode: 84,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 22,  side: "",          primary: "Y",        keyCode: 89,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 23,  side: "",          primary: "U",        keyCode: 85,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 24,  side: "PSc/SRq",   primary: "I",        keyCode: 73,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 25,  side: "ScrLk",     primary: "O",        keyCode: 79,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 26,  side: "Pus/Brk",   primary: "P",        keyCode: 80,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 27,  side: "↑",         primary: "[",        keyCode: 219,   alt: "{",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 28,  side: "",          primary: "]",        keyCode: 221,   alt: "}",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 29,  side: "BS Clear",  primary: "Delete",   keyCode: 8,     alt: "",       htmlClass: "f_key",            additional: false,  mousetrap: "backspace"},
  { id: 30,  side: "",          primary: "Control",  keyCode: 17,    alt: "",       htmlClass: "f_key",            additional: false,  mousetrap: "ctrl"},
  { id: 31,  side: "Vol_Dn",    primary: "A",        keyCode: 65,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 32,  side: "Vol_Up",    primary: "S",        keyCode: 83,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 33,  side: "Mute",      primary: "D",        keyCode: 68,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 34,  side: "Eject",     primary: "F",        keyCode: 70,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 35,  side: "",          primary: "G",        keyCode: 71,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 36,  side: "*",         primary: "H",        keyCode: 72,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 37,  side: "/",         primary: "J",        keyCode: 74,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 38,  side: "Home",      primary: "K",        keyCode: 75,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 39,  side: "PageUp",    primary: "L",        keyCode: 76,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 40,  side: "←",         primary: ";",        keyCode: 186,   alt: ":",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 41,  side: "→",         primary: "'",        keyCode: 222,   alt: "\"",     htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 42,  side: "Enter",     primary: "Return",   keyCode: 13,    alt: "",       htmlClass: "f_key",            additional: false,  mousetrap: "enter"},
  { id: 43,  side: "",          primary: "Shift",    keyCode: 16,    alt: "",       htmlClass: "left f_key",       additional: false,  mousetrap: "shift"},
  { id: 44,  side: "",          primary: "Z",        keyCode: 90,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 45,  side: "",          primary: "X",        keyCode: 88,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 46,  side: "",          primary: "C",        keyCode: 67,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 47,  side: "",          primary: "V",        keyCode: 86,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 48,  side: "",          primary: "B",        keyCode: 66,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 49,  side: "+",         primary: "N",        keyCode: 78,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 50,  side: "-",         primary: "M",        keyCode: 77,    alt: "",       htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 51,  side: "End",       primary: ",",        keyCode: 188,   alt: "<",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 52,  side: "PageDn",    primary: ".",        keyCode: 190,   alt: ">",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 53,  side: "↓",         primary: "/",        keyCode: 191,   alt: "?",      htmlClass: "key",              additional: false,  mousetrap: false },
  { id: 54,  side: "",          primary: "Shift",    keyCode: 16,    alt: "",       htmlClass: "right f_key",      additional: false,  mousetrap: "shift"},
  { id: 55,  side: "",          primary: "Fn",       keyCode: null,  alt: "",       htmlClass: "f_key",            additional: false,  mousetrap: false },
  { id: 56,  side: "",          primary: "Alt",      keyCode: 18,    alt: "Opt",    htmlClass: "left f_key",       additional: true,   mousetrap: "alt"},
  { id: 57,  side: "",          primary: "◇",        keyCode: 224,   alt: "⌘",      htmlClass: "k91 left f_key",   additional: true,   mousetrap: "command"},
  { id: 58,  side: "",          primary: "",         keyCode: 32,    alt: "",       htmlClass: "key",              additional: true,   mousetrap: "space" },
  { id: 59,  side: "Stop",      primary: "◇",        keyCode: 224,   alt: "⌘",      htmlClass: "k93 right f_key",  additional: true,   mousetrap: "command"},
  { id: 60,  side: "",          primary: "Alt",      keyCode: 18,    alt: "Opt",    htmlClass: "right f_key",      additional: true,   mousetrap: "alt"},
];

export default Key;
