import template from './tml.hbs'
import { Block } from '../../shared/lib/block'
import { type ItemPropsType } from './types'
import './style.scss'

export class ProfileContentItem extends Block {
  constructor (props: ItemPropsType) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
