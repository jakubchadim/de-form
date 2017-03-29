'use strict'

const {CHECKBOX_LIST} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Checkbox list Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(CHECKBOX_LIST, params, validators)
