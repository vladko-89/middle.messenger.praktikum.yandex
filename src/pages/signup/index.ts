import { Title, Input, Button, Form } from '../../components'
import { validateConfig, PageWithForm, getString } from '../../shared'

const title = new Title({ tag: 'h2', title: 'Sign Up' })
const buttons = [
  new Button({
    tag: 'button',
    text: 'Sign Up',
    class: 'submit',
    type: 'submit'
  })
]

const name = new Input({
  type: 'text',
  placeholder: 'Name',
  name: 'first_name',
  class: 'input-form',
  validateConfig: getString({ required: true, minlength: 2, pattern: validateConfig.name })
})

const surname = new Input({
  type: 'text',
  placeholder: 'Surname',
  name: 'second_name',
  class: 'input-form',
  validateConfig: getString({ required: true, minlength: 2, pattern: validateConfig.name })
})

const email = new Input({
  type: 'email',
  placeholder: 'Email',
  name: 'email',
  class: 'input-form',
  validateConfig: getString({ required: true, minlength: 2, pattern: validateConfig.email })
})

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

const phone = new Input({
  type: 'number',
  placeholder: 'Phone',
  name: 'phone',
  class: 'input-form',
  validateConfig: getString({ required: true, minlength: 2, pattern: validateConfig.phone })
})

const inputs = [
  name,
  surname,
  email,
  login,
  password,
  phone

]

const form = new Form({
  class: 'form',
  title,
  inputs,
  buttons,
  events: {
  }
})

export const registerPage = new PageWithForm({ form })
