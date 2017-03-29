'use strict'

const {CHECKBOX} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Checkbox Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(CHECKBOX, params, validators)
