'use strict'

const {TEXTAREA} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * TextArea Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(TEXTAREA, params, validators)
