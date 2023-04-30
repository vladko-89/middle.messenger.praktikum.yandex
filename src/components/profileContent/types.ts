import { type Title, type Button, type ProfileContentItem, type Avatar } from '..'

export interface ProfilePropsType {
  title: Title
  avatar: Avatar
  buttons: Button[]
  content: ProfileContentItem[]

}
