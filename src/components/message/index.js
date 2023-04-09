import Handlebars from 'handlebars';
import tml from 'bundle-text:./tml.hbs';

import './style.scss'



export const Message = (text, owner) => {
  return Handlebars.compile(tml)({text: text, owner: owner});
}