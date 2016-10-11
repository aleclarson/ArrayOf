
getType = require "getType"

ArrayOf = require ".."

describe "ArrayOf()", ->

  it "creates a Validator with the given type", ->

    Foo = ArrayOf String

    expect Foo.type
      .toBe String

    expect getType Foo
      .toBe ArrayOf

  describe ".test()", ->

    it "returns false when the value is not an Array", ->

      Foo = ArrayOf String

      expect Foo.test null
        .toBe no

    it "returns false when an array item is not the given type", ->

      Foo = ArrayOf String

      expect Foo.test [ 0 ]
        .toBe no

    it "returns true if everything looks good", ->

      Foo = ArrayOf String

      expect Foo.test [ "1", "2" ]
        .toBe yes

    it "can test against an array of valid types", ->

      Foo = ArrayOf [ String, Boolean ]

      expect Foo.test [ "foo", yes, "", no ]
        .toBe yes

      expect Foo.test [ "foo", yes, 1 ]
        .toBe no

    it "can test against any Validator", ->

      Foo = ArrayOf ArrayOf String

      expect Foo.test []
        .toBe yes

      expect Foo.test [[]]
        .toBe yes

      expect Foo.test [["string"]]
        .toBe yes

      expect Foo.test [[1]]
        .toBe no

      expect Foo.test [1]
        .toBe no

      expect Foo.test 1
        .toBe no
