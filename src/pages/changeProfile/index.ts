import { Title, Input, Button, Form } from '../../components'
import { validateConfig, PageWithForm, getString } from '../../shared'

const title = new Title({ tag: 'h2', title: 'Change Profile' })

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

const nickName = new Input({
  type: 'text',
  placeholder: 'Nickname',
  name: 'display_name',
  class: 'input-form',
  validateConfig: getString({ required: true, minlength: 2, pattern: validateConfig.login })
})

const login = new Input({
  type: 'text',
  placeholder: 'Login',
  name: 'login',
  class: 'input-form',
  validateConfig: getString({ required: true, minlength: 2, pattern: validateConfig.login })
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
  nickName,
  email,
  login,
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

export const changeProfilePage = new PageWithForm({ form })
