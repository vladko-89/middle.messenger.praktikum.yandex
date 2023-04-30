import { type Message, type ChatItem, type FormMessage } from '../../components'

export interface ChatPageProps {
  messages: Message[]
  list: ChatItem[]
  formMessage: FormMessage
}
