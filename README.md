
# ArrayOf 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

A [`Validator`](https://github.com/aleclarson/Validator) that passes only for
an `Array` whose values are all one of the given type(s).

```coffee
ArrayOf = require "ArrayOf"

NumberArray = ArrayOf Number

StringBoolArray = ArrayOf [ String, Boolean ]
```
