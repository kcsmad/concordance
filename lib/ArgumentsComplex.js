'use strict'

const constants = require('./constants')
const Complex = require('./Complex')

class ArgumentsComplex extends Complex {
  compare (expected) {
    const result = super.compare(expected)

    // Calling code may decide that Arguments can be compared to Arrays
    if (result === constants.UNEQUAL && expected instanceof Complex && expected.tag === 'Array') {
      return constants.AMBIGUOUS
    }

    return result
  }
}
module.exports = ArgumentsComplex