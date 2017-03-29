'use strict'

const isFilled = require('./isFilled')
const minLength = require('./minLength')
const maxLength = require('./maxLength')
const length = require('./length')
const email = require('./email')

/**
 *
 * @type {{isRequired: isRequired, minLength: minLength}}
 */
module.exports = {
  isFilled,
  minLength,
  maxLength,
  length,
  email
}
