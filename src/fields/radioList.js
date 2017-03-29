'use strict'

const {RADIO_LIST} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Radio list Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(RADIO_LIST, params, validators)
