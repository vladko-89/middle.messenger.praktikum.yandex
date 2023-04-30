import template from './tml.hbs'
import { Message, ChatItem, formMessage } from '../../components'
import { Block } from '../../shared'
import { type ChatPageProps } from './types'
import avatar from './assets/avatar-icon.svg'

import './style.scss'

const messages = [
  new Message({
    owner: true,
    text: 'Hi'
  }),
  new Message({

    text: 'Hello, how are you?'
  }),
  new Message({
    owner: true,
    text: 'Thank you. Of course. Just a moment, please. Thank you. Of course. Just a moment, pleaseThank you. Of course. Just a moment, pleaseThank you. Of course. Just a moment, pleaseThank you. Of course. Just a moment, pleaseThank you. Of course. Just a moment, please'
  }),

  new Message({

    text: 'Hi'
  }),

  new Message({
    owner: true,
    text: 'Hi'
  }),
  new Message({

    text: 'Hello, how are you?'
  }),
  new Message({
    owner: true,
    text: 'Thank you. Of course. Just a moment, please.'
  })
]

const chatList = [
  new ChatItem({
    name: 'Андрей',
    message: 'Thank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of course',
    date: '11:00',
    current: true,
    avatar
  }),
  new ChatItem({
    name: 'Андрей',
    message: 'Thank you. Of course',
    date: '11:00',
    current: false,
    count: 10,
    avatar
  }),
  new ChatItem({
    name: 'Андрей',
    message: 'Thank you. Of course',
    date: '11:00',
    current: false,
    avatar
  }),
  new ChatItem({
    name: 'Андрей',
    message: 'Thank you. Of course',
    date: '11:00',
    current: false,
    avatar
  })

]

class ChatPage extends Block {
  constructor (props: ChatPageProps) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}

export const chatPage = new ChatPage({
  list: chatList,
  messages,
  formMessage
})
