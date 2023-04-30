
import template from './tml.hbs'
import { type ButtonPropsType } from './types'
import './style.scss'
import { Block } from '../../shared/lib/block'

export class Button extends Block {
  constructor (props: ButtonPropsType) {
    super(props)
  }

  _addEvents () {
    this.getContent()!.addEventListener('click', this.props.events?.click)
    super._addEvents()
  }

  render () {
    return this.compile(template, this.props)
  }
}
