'use strict'

const {MULTI_SELECT} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Multi select Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(MULTI_SELECT, params, validators)
