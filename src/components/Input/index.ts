import template from './tml.hbs'
import { Block } from '../../shared/lib/block'
import { type InputPropsType } from './types'
import './style.scss'

export class Input extends Block {
  constructor (props: InputPropsType) {
    super(props)
  }

  _showInputError (errorMessage: string): void {
    const errorItem = this.getContent()!.querySelector('.error')

    if (errorItem) {
      errorItem.textContent = errorMessage
    }
  }

  _hideInputError () {
    const errorItem = this.getContent()!.querySelector('.error')

    if (errorItem) {
      errorItem.textContent = ''
    }
  }

  isValid () {
    if (!this.getContent()!.querySelector('input')!.validity.valid) {
      this._showInputError(this.getContent()!.querySelector('input')!.validationMessage)
    } else {
      this._hideInputError()
    }
  }

  _addEvents () {
    super._addEvents()
    this.getContent()!.querySelector('input')?.addEventListener('focus', () => {
      this.isValid()
    })
    this.getContent()!.querySelector('input')?.addEventListener('blur', () => {
      this.isValid()
    })
  }

  render () {
    return this.compile(template, this.props)
  }
}
