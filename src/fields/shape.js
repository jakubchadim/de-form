'use strict'

const {SHAPE} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Shape of fields
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(SHAPE, params, validators)
