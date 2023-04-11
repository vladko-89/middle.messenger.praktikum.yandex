import Handlebars from 'handlebars';
import tml from 'bundle-text:./tml.hbs';
import { Button } from '../../components';
import './style.scss'


export const ErrorPage = (code) => {
  
    if (code === '404' ) {
        return Handlebars.compile(tml)(  {
            code: code,
            button: Button('Back', 'reset')
            
            } )
    } else{
        return Handlebars.compile(tml)(  {
            code: code,
            server: true
        
    } )
    }
        
}
