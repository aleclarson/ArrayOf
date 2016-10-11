
# ArrayOf v1.1.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

A [`Validator`](https://github.com/aleclarson/Validator) that passes only for
an `Array` whose values are all one of the given type(s).

```coffee
ArrayOf = require "ArrayOf"

NumberArray = ArrayOf Number

NumberArray.test []       # => true
NumberArray.test [ 0 ]    # => true
NumberArray.test [ null ] # => false

# Supports arrays of valid types!
StringBoolArray = ArrayOf [ String, Boolean ]

StringBoolArray.test [ "a", true ] # => true
StringBoolArray.test [ 1, true ]   # => false
```
