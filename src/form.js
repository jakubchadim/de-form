'use strict'

const {commonValidator} = require('./utils')
const {VALIDATOR, REQUIRED, REQUIRED_MESSAGE} = require('./constants/internal')
const {mapObject} = require('./utils')
const Validators = require('./validators')

class Form {

  constructor (fields) {
    this.fields = fields
  }

  /**
   * Validate values
   *
   * @param {object} values
   * @return {Boolean}
   */
  isValid (values) {
    const errors = this.getErrors(values)

    return !Object.keys(errors).length
  }

  /**
   * Validate values and return errors
   *
   * @param {object} values
   * @return {Object}
   */
  getErrors (values) {
    if (typeof values !== 'object') {
      throw new Error(`Validation expect Object but received ${typeof values}`)
    }

    let errors = {}

    mapObject(this.fields, (field, fieldName) => {
      const value = values[fieldName]

      if (!field[REQUIRED] && !value) {
        // Field is empty and not required
        return
      }

      let fieldErrors = []

      if (field[REQUIRED]) {
        const requiredValidator = Validators.isFilled(field[REQUIRED_MESSAGE] || 'Required field')
        const isNotFilled = requiredValidator(value)
        if (isNotFilled) {
          fieldErrors.push(isNotFilled)
        }
      }

      const validator = field[VALIDATOR] || commonValidator

      fieldErrors = [
        ...fieldErrors,
        ...validator(field, value, values)
      ]

      if (fieldErrors.length) {
        errors[fieldName] = fieldErrors
      }
    })

    return errors
  }

  /**
   * Return scheme
   *
   * @return {Array}
   */
  getScheme () {
    return Object.keys(this.fields)
  }

}

/**
 * Form factory
 *
 * @param {Object} fields
 * @return {Form}
 */
const createForm = fields => {
  if (typeof fields !== 'object') {
    throw new Error('Fields has to be object')
  }

  return new Form(fields)
}

/**
 *
 * @type {{createForm: Function.<Object>, Form: Form}}
 */
module.exports = {
  createForm,
  Form
}
