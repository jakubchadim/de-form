'use strict'

const {EMAIL} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Email Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(EMAIL, params, validators)
