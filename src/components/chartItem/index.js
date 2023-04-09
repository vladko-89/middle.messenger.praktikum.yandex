import Handlebars from 'handlebars';
import tml from 'bundle-text:./tml.hbs';
import avatar from './assets/avatar-icon.svg'

import './style.scss'



export const ChartItem = (message) => {
  return Handlebars.compile(tml)({...message, className: message.current ? 'card_current' : '', avatar: avatar });
}