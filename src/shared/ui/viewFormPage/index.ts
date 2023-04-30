import template from './tml.hbs'
import { Block } from '../../'

export class PageWithForm extends Block {
  render () {
    return this.compile(template, this.props)
  }
}
