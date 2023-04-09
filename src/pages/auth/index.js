import Handlebars from 'handlebars';
import tml from 'bundle-text:./auth.hbs';
import { Title, Input, Button } from '../../components';


export const RegisterPage = (path) => {
  
    return Handlebars.compile(tml)(  {
      
      title: Title(path === '/' ? 'Sign Up' : 'Sign In'),
      inputs: path === '/' 
      ? 
        [
        Input('text', 'Name', 'first_name'),
        Input('text', 'Surname', 'second_name'),
        Input('number', 'Phone', 'phone'),
        Input('email', 'E-mail', 'email'),
        Input('text', 'Login', 'login'),
        Input('password', 'Password', 'password'),
        ] 
      : 
        [
        Input('text', 'Login', 'login'),
        Input('password', 'Password', 'password'),
        ],
      button: path === '/' ? Button('Sign Up', 'submit') : Button('Sign In', 'submit'),
      auth: path === '/' ? false : true
    } )
}