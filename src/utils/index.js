'use strict'

const {TYPE, FIELD_VALIDATIONS, REQUIRED, REQUIRED_MESSAGE} = require('../constants/internal')

const createField = (type, params, validations = [], internal = {}) => {
  let Field = Object.assign({},
    params,
    {
      [FIELD_VALIDATIONS]: validations,
      [TYPE]: type,
      [REQUIRED]: false,
      getType () {
        return this[TYPE]
      }
    },
    internal
  )

  /**
   * Set field required
   *
   * @param {String|Boolean} [arg]
   */
  Field.isRequired = setRequired.bind(null, Field)
  return Field
}

/**
 * Set field required
 *
 * @param {Object} field
 * @param {String|Boolean} [arg]
 */
const setRequired = (field, arg) => {
  if (typeof arg === 'boolean') {
    field[REQUIRED] = arg
    return field
  }

  if (arg === undefined) {
    field[REQUIRED] = true
    return field
  }

  field[REQUIRED] = true
  field[REQUIRED_MESSAGE] = arg
  return field
}

const createValidation = (message, isValid) => (...args) => {
  try {
    if (isValid(...args)) {
      return null
    }
  } catch (e) {}
  return message
}

/**
 * Iterate through array of validation functions. Call each function with value and values param
 *
 * @param field
 * @param value
 * @param values
 * @return {Object}
 */
const commonValidator = (field, value, values) => field[FIELD_VALIDATIONS].map(validator => validator(value, values)).filter(e => e)

const mapObject = (object, cb) => Object.keys(object).map(key => cb(object[key], key))

module.exports = {
  createField,
  createValidation,
  commonValidator,
  mapObject
}
