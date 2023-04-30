
import { Title, Input, Button, Form } from '../../components'
import { validateConfig, PageWithForm, getString } from '../../shared'

const title = new Title({ tag: 'h2', title: 'Change Password' })

const buttons = [
  new Button({
    tag: 'button',
    text: 'Apply',
    class: 'submit',
    type: 'submit'
  }),
  new Button({
    tag: 'button',
    text: 'Cancel',
    class: 'reset',
    type: 'reset'
  })
]

const password = new Input({
  type: 'password',
  placeholder: 'Password',
  name: 'password',
  class: 'input-form',
  validateConfig: getString({ required: true, minlength: 2, pattern: validateConfig.password })
})

const newPassword = new Input({
  type: 'password',
  placeholder: 'New Password',
  name: 'new_password',
  class: 'input-form',
  validateConfig: getString({ required: true, minlength: 2, pattern: validateConfig.password })
})

const inputs = [
  password,
  newPassword
]

const form = new Form({
  class: 'form',
  auth: false,
  title,
  inputs,
  buttons,
  events: {
  }
})

export const changePassword = new PageWithForm({ form })
