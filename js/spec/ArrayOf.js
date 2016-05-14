var ArrayOf;

ArrayOf = require("../src/ArrayOf");

describe("ArrayOf()", function() {
  it("creates a Validator with the given type", function() {
    var Foo, Validator;
    Foo = ArrayOf(String);
    expect(Foo.type).toBe(String);
    Validator = require("Validator");
    return expect(Object.getPrototypeOf(Foo)).toBe(Validator.prototype);
  });
  return describe(".test()", function() {
    it("returns false when the value is not an Array", function() {
      var Foo;
      Foo = ArrayOf(String);
      return expect(Foo.test(null)).toBe(false);
    });
    it("returns false when an array item is not the given type", function() {
      var Foo;
      Foo = ArrayOf(String);
      return expect(Foo.test([0])).toBe(false);
    });
    it("returns true if everything looks good", function() {
      var Foo;
      Foo = ArrayOf(String);
      return expect(Foo.test(["1", "2"])).toBe(true);
    });
    return it("works with arrays of types", function() {
      var Foo;
      Foo = ArrayOf([String, Boolean]);
      expect(Foo.test(["foo", true, "", false])).toBe(true);
      return expect(Foo.test(["foo", true, 1])).toBe(false);
    });
  });
});

//# sourceMappingURL=../../map/spec/ArrayOf.map
