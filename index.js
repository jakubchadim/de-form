
/**
 * Created by jakubchadim on 29.03.17.
 */

const {createForm, Form} = require('./src/form')
const Fields = require('./src/fields')
const Validators = require('./src/validators')
const FIELD_TYPES = require('./src/constants/fields')

/**
 *
 * @type {{default: Form, createForm: Function.<Object>, Fields: {ArrayOf: *, Button: *, Checkbox: *, CheckboxList: *, Email: *, Group: *, Hidden: *, MultiSelect: *, MultiUpload: *, Password: *, RadioList: *, Select: *, Submbit: *, Text: *, Textarea: *, Upload: *}, Validators: {isRequired: isRequired, minLength: minLength}}}
 */
module.exports = {
  default: Form,
  createForm: createForm,
  Fields,
  Validators,
  FIELD_TYPES
}
