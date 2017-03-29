'use strict'

const {createValidation} = require('../utils')

const isValid = (maxLength, value) => {
  let length = 0
  if (typeof value === 'object') {
    length = Object.keys(value).length
  } else if (value) {
    length = value.length
  }
  return length <= maxLength
}

/**
 * Validate max length
 *
 * @param message
 * @param maxLength
 * @return {Function}
 */
const maxLength = (message, maxLength) => createValidation(message, isValid.bind(null, maxLength))

module.exports = maxLength
