import template from './tml.hbs'
import { Block } from '../../shared/lib/block'
import { type ChatItemProps } from './types'

import './style.scss'

export class ChatItem extends Block {
  constructor (props: ChatItemProps) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
