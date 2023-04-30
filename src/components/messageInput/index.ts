import template from './tml.hbs'
import './style.scss'
import { Block } from '../../shared/lib/block'

export class MessageInput extends Block {
  render () {
    return this.compile(template, this.props)
  }
}
