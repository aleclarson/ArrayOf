
formatType = require "formatType"
Validator = require "Validator"
wrongType = require "wrongType"
isType = require "isType"

ArrayOf = Validator.Type "ArrayOf",

  init: (type) ->
    @type = type
    return

  name: ->
    "array of " + formatType @type

  test: (array) ->
    return no if not Array.isArray array
    for value, index in array
      return no if not isType value, @type
    return yes

  assert: (array, key = "array") ->

    unless Array.isArray array
      return wrongType Array, key

    for value, index in array
      continue if isType value, @type
      return wrongType @type, key + "[#{index}]"
    return

module.exports = ArrayOf
