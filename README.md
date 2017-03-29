# de-form
Create form by definitions

### Example
```javascript
import {createForm, Fields, Validators} from 'de-form'

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
```

Now we can call many actions on form object

```javascript
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
```

## Fields

### Props

Each field has own properties. For example Label, Placeholder etc... Properties can be used in renderer.

```javascript
const props = {
  label: 'Text field',
  placeholder: 'Enter something...'
}

Fields.Text(props)
```

### Validations

Fields can receive array of validation functions.

```javascript
const validations = [
  Validations.minLength('Min. length is 5.', 5)
]

Fields.Text(null, validations)
```

##### email(errorMessage)

##### isFilled(errorMessage)

##### length(errorMessage, length)

##### minLength(errorMessage, minLength)

##### maxLength(errorMessage, maxLength)

#### Custom validation

You can also write custom validations. Validation function returns error message or null.

```javascript
const customValidation = (value, values) => {
  return value !== 'Some value' ? 'Error' : null
}

Fields.Text(null, [
  customValidation
])
```

### Field Types

##### ArrayOf(field)

##### Shape({fields})

##### Text([props, validations])

##### Textarea([props, validations])

##### Email([props, validations])

##### Password([props, validations])

##### Checkbox([props, validations])

##### CheckboxList([props, validations])

##### Select([props, validations])

##### MultiSelect([props, validations])

##### Upload([props, validations])

##### MultiUpload([props, validations])

##### RadioList([props, validations])

##### Submit([props, validations])

##### Button([props, validations])

##### Hidden([props, validations])