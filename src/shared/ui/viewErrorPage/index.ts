import template from './tml.hbs'
import { Block } from '../../'
import { type ViewErrorPageProps } from './types'
import './style.scss'

export class PageError extends Block {
  constructor (props: ViewErrorPageProps) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
