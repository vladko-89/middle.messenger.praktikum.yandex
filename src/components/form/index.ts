import template from './tml.hbs'
import { type FormPropsType } from './types'
import './style.scss'
import { Block, Submitter, type ISubmitter, FormValidator } from '../../shared'

export class Form extends Block {
  submitter: ISubmitter
  validator
  form
  constructor (props: FormPropsType) {
    super(props)
    this.form = this.getContent()!
    this.submitter = new Submitter(this.form)
    this.validator = new FormValidator(this.form, 'form')
  }

  _handleSubmit (e: Event) {
    this.submitter.submit(e)
    this.validator.isValidForm()
  }

  _addEvents () {
    this.getContent()!.addEventListener('submit', this._handleSubmit)
    super._addEvents()
  }

  _removeEvents () {
    this.getContent()!.removeEventListener('submit', this._handleSubmit)
    super._removeEvents()
  }

  render () {
    return this.compile(template, this.props)
  }
}
