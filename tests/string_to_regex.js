function regexToStringComponents (regex) {
  var stringPattern = regex.toString();
  var endingSlashIndex = null;
  var pattern = '';
  var modifiers = '';

  for (var i = 0; i < stringPattern.length; i++) {
    var key = stringPattern[i];
    if (i >= 1) {
      // if key is '\', escape it with another one
      if (key === '\\') {
        pattern += '\\';
      } else {
        // if the key is the ending back slash, save that index
        if (key === '/') {
          endingSlashIndex = i;
        } else {
          if (endingSlashIndex === null) {
            pattern += key;
          } else {
            modifiers += key;
          }
        }
      }
    }
  }

  return {
    pattern: pattern,
    modifiers: modifiers
  };
}
function regexFromString(data) {
  return !!data.modifiers ? new RegExp(data.pattern, data.modifiers) : new RegExp(data.pattern);
}

var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gi;
var data = regexToStringComponents(regex);
console.log('STRING COMPONENTS: ', data);
console.log('BACK TO REGEX: ', regexFromString(data));
