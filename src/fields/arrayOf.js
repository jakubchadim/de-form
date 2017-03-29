'use strict'

const {ARRAY_OF} = require('../constants/fields')
const {VALIDATOR, FIELD_VALIDATIONS} = require('../constants/internal')
const {createField} = require('../utils')

const validator = (field, value, values) => field[FIELD_VALIDATIONS].map(validator => validator(value, values)).filter(e => e)

/**
 * Array of fields
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(ARRAY_OF, params, validators, {[VALIDATOR]: validator})
