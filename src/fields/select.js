'use strict'

const {SELECT} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Select Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(SELECT, params, validators)
