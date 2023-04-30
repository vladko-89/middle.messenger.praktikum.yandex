import { PageError } from '../../shared'
import { Button } from '../../components'

const button = new Button({
  tag: 'button',
  text: 'Back',
  class: 'reset',
  type: 'button'
})

export const page404 = new PageError({
  code: 404,
  button
})
