import Handlebars from 'handlebars';
import tml from 'bundle-text:./tml.hbs';
import './style.scss';



export const Button = (text, className) => {
  
  return Handlebars.compile(tml)({text: text, class: className});
}