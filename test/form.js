'use strict'

const {createForm, Fields, Validators} = require('../index')

const ERROR_MESSAGES = {
  REQUIRED: 'Reqired field'
}
const MIN_USER_NAME_LENGTH = 3

// ===========  Fields declaration  ============ //

const name = Fields.Text({
  label: 'Name',
  placeholder: 'Peter'
}, [
  Validators.minLength(`Minimal length is ${MIN_USER_NAME_LENGTH}`, MIN_USER_NAME_LENGTH)
]).isRequired()

const age = Fields.Text({
  label: 'Age'
}, [
  Validators.Number('Age must be number')
]).isRequired()

const password = Fields.Text({
  label: 'Password'
}).isRequired(ERROR_MESSAGES.REQUIRED)

const child = Fields.Shape({
  name,
  age
})

const children = Fields.ArrayOf(child)

const send = Fields.Submit({
  label: 'Save'
})

// =========== Create form  ============ //

const Form = createForm({
  name,
  age,
  password,
  children,
  send
})

// ===========  Validate  ============ //

const values = {
  userName: 'Peter',
  age: 32,
  password: 'pw',
  childrens: [
    {
      name: 'Kid',
      age: 7
    }
  ]
}

console.log(Form.isValid(values))
console.log(Form.getErrors(values))
