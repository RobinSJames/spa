import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required.'
})

extend('email', email)

extend('min', {
  validate(value, args) {
    return value.length >= args.length
  },
  params: ['length'],
  message: '{_field_} field must have a minimum of {length} characters'
})
