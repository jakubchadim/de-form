'use strict'

const {PASSWORD} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Password Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(PASSWORD, params, validators)
