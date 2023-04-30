import { Title, Input, Button, Form } from '../../components'
import { validateConfig, PageWithForm, getString } from '../../shared'

const title = new Title({ tag: 'h2', title: 'Sign In' })
const buttons = [
  new Button({
    tag: 'button',
    text: 'Sign In',
    class: 'submit',
    type: 'submit'
  })
]

const login = new Input({
  type: 'text',
  placeholder: 'Login',
  name: 'login',
  class: 'input-form',
  validateConfig: getString({ required: true, minlength: 2, pattern: validateConfig.login })
})

const password = new Input({
  type: 'password',
  placeholder: 'Password',
  name: 'password',
  class: 'input-form',
  validateConfig: getString({ required: true, minlength: 2, pattern: validateConfig.password })
})

const inputs = [
  login,
  password
]

const form = new Form({
  class: 'form',
  auth: true,
  title,
  inputs,
  buttons,
  events: {

  }
})

export const authPage = new PageWithForm({ form })
