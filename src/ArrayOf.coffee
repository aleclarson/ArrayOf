
formatType = require "formatType"
Validator = require "Validator"
wrongType = require "wrongType"
isType = require "isType"

module.exports = Validator.Type "ArrayOf",

  init: (type) ->
    @type = type

  name: ->
    "array of " + formatType @type

  test: (array) ->
    return no if not Array.isArray array
    { type } = this
    return no for value, index in array when not isType value, type
    return yes

  assert: (array, key = "array") ->

    unless Array.isArray array
      error = wrongType Array, key
      meta = { key, value: array, type: Array }
      return { error, meta }

    { type } = this
    for value, index in array
      continue if isType value, type
      key += "[" + index + "]"
      error = wrongType type, key
      meta = { key, value, type }
      return { error, meta }
    return
