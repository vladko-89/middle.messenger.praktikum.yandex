import { type Button } from '../'
import { type MessageInput } from '../messageInput'

export interface FormMessagePropsType {
  buttonVoice: Button
  buttonpic: Button
  buttonSmile: Button
  buttonSend: Button
  input: MessageInput
  // eslint-disable-next-line @typescript-eslint/ban-types
  events: Record<string, Function>
}
