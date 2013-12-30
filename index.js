var check = require('validator').check;

// Get all methods in validator library.
var methods = Object.keys(check().constructor.prototype);

// chainable validation functions.
function validate(first) {
  var checks = [first];
  var f = function(x) {
    try {
      var instance = check(x);
      for (var i = 0; i < checks.length; i++) {
        instance[checks[i].method].apply(instance, checks[i].args);
      }
      return true;
    } catch (e) {
      return false;
    }
  };
  methods.forEach(function(method) {
    f[method] = function() {
      checks.push({method: method, args: arguments});
      return f;
    };
  });
  return f;
}

methods.forEach(function(method) {
  exports[method] = function() {
    return validate({method: method, args: arguments});
  };  
});