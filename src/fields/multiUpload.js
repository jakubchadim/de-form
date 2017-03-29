'use strict'

const {MULTI_UPLOAD} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Multi upload Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(MULTI_UPLOAD, params, validators)
