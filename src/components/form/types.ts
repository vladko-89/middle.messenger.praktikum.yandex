import { type Title, type Button, type Input } from '../'

export interface FormPropsType {
  class: string
  title: Title
  buttons: Button[]
  auth?: boolean
  inputs: Input[]
  // eslint-disable-next-line @typescript-eslint/ban-types
  events: Record<string, Function>
}
