import template from './tml.hbs'
import { Block } from '../../shared'
import { type MassageProps } from './types'

import './style.scss'

export class Message extends Block {
  constructor (props: MassageProps) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
