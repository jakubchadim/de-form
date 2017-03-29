'use strict'

const {UPLOAD} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Upload Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(UPLOAD, params, validators)
