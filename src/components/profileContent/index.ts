import template from './tml.hbs'
import { type ProfilePropsType } from './types'
import './style.scss'
import { Block } from '../../shared'

export class ProfileContent extends Block {
  constructor (props: ProfilePropsType) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
