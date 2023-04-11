import Handlebars from 'handlebars';
import tml from 'bundle-text:./tml.hbs';
import './style.scss';



export const Input = (type, placeholder, name) => {
  return Handlebars.compile(tml)({type: type, placeholder: placeholder, name: name});
}