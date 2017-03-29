'use strict'

const {SUBMIT} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Submit Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(SUBMIT, params, validators)
