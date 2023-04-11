import Handlebars from 'handlebars';
import tml from 'bundle-text:./tml.hbs';
import { Title, Input, Button } from '../../components';


export const ProfilePage = (path) => {
  
    return Handlebars.compile(tml)(  {
      
      title: Title(
        path === '/profile' ? 'Profile' : 
        path === '/edit-profile' ? 'Change Profile' : 
        'Change Password' 
      ),

      inputs: path === '/edit-profile' 
      ? 
        [
        Input('text', 'Name', 'first_name'),
        Input('text', 'Surname', 'second_name'),
        Input('number', 'Phone', 'phone'),
        Input('email', 'E-mail', 'email'),
        Input('text', 'Login', 'login'),
        Input('text', 'Nickname', 'display_name'),
        ] 
      : path === '/edit-password'

      ?
        [
        Input('password', 'Password', 'password'),
        ] 
      : 
        [
        Input('text', 'Name', 'first_name'),
        Input('text', 'Surname', 'second_name'),
        Input('number', 'Phone', 'phone'),
        Input('email', 'E-mail', 'email'),
        Input('text', 'Login', 'login'),
        Input('text', 'Nickname', 'display_name'),
        ],
      buttonSubmit: path === '/edit-profile' || path === '/edit-password' ? Button('Apply', 'submit') : Button('Change Profile', 'submit'),
      buttonReset: path === '/edit-profile' || path === '/edit-password' ?  Button('Cancel', 'reset') : Button('Change Password', 'submit'),
    } )
}
