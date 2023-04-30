
import template from './template.hbs'
import { type TitlePropsType } from './types'
import './title.scss'
import { Block } from '../../shared/lib/block'

export class Title extends Block {
  constructor (props: TitlePropsType) {
    super(props)
    console.log(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
