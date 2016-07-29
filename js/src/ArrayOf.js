var Validator, formatType, isType, wrongType;

formatType = require("formatType");

Validator = require("Validator");

wrongType = require("wrongType");

isType = require("isType");

module.exports = Validator.Type("ArrayOf", {
  init: function(type) {
    return this.type = type;
  },
  name: function() {
    return "array of " + formatType(this.type);
  },
  test: function(array) {
    var i, index, len, value;
    if (!Array.isArray(array)) {
      return false;
    }
    for (index = i = 0, len = array.length; i < len; index = ++i) {
      value = array[index];
      if (!isType(value, this.type)) {
        return false;
      }
    }
    return true;
  },
  assert: function(array, key) {
    var i, index, len, value;
    if (key == null) {
      key = "array";
    }
    if (!Array.isArray(array)) {
      return wrongType(Array, key);
    }
    for (index = i = 0, len = array.length; i < len; index = ++i) {
      value = array[index];
      if (isType(value, this.type)) {
        continue;
      }
      return wrongType(this.type, key + ("[" + index + "]"));
    }
  }
});

//# sourceMappingURL=map/ArrayOf.map
