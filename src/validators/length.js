'use strict'

const {createValidation} = require('../utils')

const isValid = (_length, value) => {
  let length = 0
  if (typeof value === 'object') {
    length = Object.keys(value).length
  } else if (value) {
    length = value.length
  }
  return length === _length
}

/**
 * Validate length
 *
 * @param message
 * @param length
 * @return {Function}
 */
const length = (message, length) => createValidation(message, isValid.bind(null, length))

module.exports = length
