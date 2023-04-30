
import template from './tml.hbs'
import {
  Title,
  Avatar,
  Button,
  ProfileContent,
  ProfileContentItem
} from '../../components'
import { Block } from '../../shared'
import { type ProfilePropsType } from './types'

const title = new Title({ tag: 'h2', title: 'Profile' })

const buttons = [
  new Button({
    tag: 'button',
    text: 'Change Avatar',
    class: 'submit',
    type: 'button'
  }),
  new Button({
    tag: 'button',
    text: 'Change Profile',
    class: 'submit',
    type: 'button'
  }),
  new Button({
    tag: 'button',
    text: 'Change Password',
    class: 'submit',
    type: 'button'
  })
]

const content = [
  new ProfileContentItem({
    key: 'Name',
    value: 'Vladislav'
  }),
  new ProfileContentItem({
    key: 'Surname',
    value: 'Ukhanov'
  }),
  new ProfileContentItem({
    key: 'Email',
    value: 'vladko@yandex.ru'
  }),
  new ProfileContentItem({
    key: 'Phone',
    value: '8-800-555-35-35'
  })
]

const avatar = new Avatar({})

const profile = new ProfileContent({
  title,
  avatar,
  content,
  buttons

})

class ProfilePage extends Block {
  constructor (props: ProfilePropsType) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}

export const profilePage = new ProfilePage({ profile })
