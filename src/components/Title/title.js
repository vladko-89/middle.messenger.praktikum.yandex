import Handlebars from 'handlebars';
import tml from 'bundle-text:./tml.hbs';
import './title.scss'



export const Title = (title) => {
  return Handlebars.compile(tml)({title: title});
}