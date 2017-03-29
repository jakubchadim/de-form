'use strict'

const {isEmail} = require('validator')
const {createValidation} = require('../utils')

/**
 * Validate email
 *
 * @param message
 * @return {Function}
 */
const email = message => createValidation(message, value => isEmail(value))

module.exports = email
