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
    var i, index, len, type, value;
    if (!Array.isArray(array)) {
      return false;
    }
    type = this.type;
    for (index = i = 0, len = array.length; i < len; index = ++i) {
      value = array[index];
      if (!isType(value, type)) {
        return false;
      }
    }
    return true;
  },
  assert: function(array, key) {
    var error, i, index, len, meta, type, value;
    if (key == null) {
      key = "array";
    }
    if (!Array.isArray(array)) {
      error = wrongType(Array, key);
      meta = {
        key: key,
        value: array,
        type: Array
      };
      return {
        error: error,
        meta: meta
      };
    }
    type = this.type;
    for (index = i = 0, len = array.length; i < len; index = ++i) {
      value = array[index];
      if (isType(value, type)) {
        continue;
      }
      key += "[" + index + "]";
      error = wrongType(type, key);
      meta = {
        key: key,
        value: value,
        type: type
      };
      return {
        error: error,
        meta: meta
      };
    }
  }
});

//# sourceMappingURL=../../map/src/ArrayOf.map
