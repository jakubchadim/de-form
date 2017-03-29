'use strict'

const {BUTTON} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Button Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(BUTTON, params, validators)
