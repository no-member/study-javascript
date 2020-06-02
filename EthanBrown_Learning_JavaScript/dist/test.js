'use strict';

var setences = [{
  subject: 'JavaScript',
  verb: 'is',
  object: 'great'
}, {
  subject: 'Elephants',
  verb: 'are',
  object: 'large'
}];

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  console.log("".concat(subject, " ").concat(verb, " ").concat(object));
}

for (var _i = 0, _setences = setences; _i < _setences.length; _i++) {
  var s = _setences[_i];
  say(s);
}