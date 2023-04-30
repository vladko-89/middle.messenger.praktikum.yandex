import template from './tml.hbs'
import './style.scss'
import { Block } from '../../shared/lib/block'
import { Button } from '../button'
import { MessageInput } from '../messageInput'
import { Submitter, FormValidator } from '../../shared'
import { type FormMessagePropsType } from './types'

const buttonVoice = new Button({
  type: 'button',
  class: 'chat__button chat__button_voice',
  text: '',
  tag: 'button'
})

const buttonpic = new Button({
  type: 'button',
  class: 'chat__button chat__button_pic',
  text: '',
  tag: 'button'
})

const buttonSmile = new Button({
  type: 'button',
  class: 'chat__button chat__button_smile',
  text: '',
  tag: 'button'
})

const buttonSend = new Button({
  type: 'submit',
  class: 'chat__button_send',
  text: '',
  tag: 'button'
})

const input = new MessageInput({})

export class FormMessage extends Block {
  submitter
  validator
  form
  constructor (props: FormMessagePropsType) {
    super(props)
    this.form = this.getContent()!
    this.submitter = new Submitter(this.form)
    this.validator = new FormValidator(this.form, 'message')
  }

  _handleSubmit (e: Event) {
    this.submitter.submit(e)
  }

  _addEvents () {
    this.getContent()!.addEventListener('submit', this._handleSubmit)
    super._addEvents()
  }

  render () {
    return this.compile(template, this.props)
  }
}

export const formMessage = new FormMessage({
  buttonVoice,
  buttonpic,
  buttonSmile,
  input,
  buttonSend,
  events: {}
})
