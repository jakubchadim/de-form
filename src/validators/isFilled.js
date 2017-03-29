'use strict'

const {createValidation} = require('../utils')

const validate = value => {
  if (typeof value === 'object') {
    // Array or object
    return value.length === undefined ? !!Object.keys(value).length : !!value.length
  }
  return !!value
}

const isFilled = message => createValidation(message, validate)

module.exports = isFilled
