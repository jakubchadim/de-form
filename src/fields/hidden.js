'use strict'

const {HIDDEN} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Text Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(HIDDEN, params, validators)
