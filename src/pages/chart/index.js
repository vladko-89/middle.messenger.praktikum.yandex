import Handlebars from 'handlebars';
import tml from 'bundle-text:./tml.hbs';
import { Message, ChartItem } from '../../components';

import './style.scss'

const messages = [
  {
    owner: true,
    text: "Hi",
  },
  {
    
    text: "Hello, how are you?",
  },
  {
    owner: true,
    text: "Thank you. Of course. Just a moment, please. Thank you. Of course. Just a moment, pleaseThank you. Of course. Just a moment, pleaseThank you. Of course. Just a moment, pleaseThank you. Of course. Just a moment, pleaseThank you. Of course. Just a moment, please",
  },

  {

    text: "Hi",
  },

  {
    owner: true,
    text: "Hi",
  },
  {
    
    text: "Hello, how are you?",
  },
  {
    owner: true,
    text: "Thank you. Of course. Just a moment, please.",
  },

  {

    text: "Hi",
  },
];

const chatList = [
  {
    name: "Андрей",
    message: "Thank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of coursehank you. Of course",
    date: "11:00",
    current: true,
  },
  {
    name: "Андрей",
    message: "Thank you. Of course",
    date: "11:00",
    current: false,
  },
  {
    name: "Андрей",
    message: "Thank you. Of course",
    date: "11:00",
    current: false,
  },
  {
    name: "Андрей",
    message: "Thank you. Of course",
    date: "11:00",
    current: false,
  },
  {
    name: "Андрей",
    message: "Thank you. Of course",
    date: "11:00",
    current: false,
  },
  {
    name: "Андрей",
    message: "Thank you. Of course",
    date: "11:00",
    current: false,
  },
  {
    name: "Андрей",
    message: "Thank you. Of course",
    date: "11:00",
    current: false,
  },
  {
    name: "Андрей",
    message: "Thank you. Of course",
    date: "11:00",
    current: false,
  },
  {
    name: "Андрей",
    message: "Thank you. Of course",
    date: "11:00",
    current: false,
  },
  {
    name: "Андрей",
    message: "Thank you. Of course",
    date: "11:00",
    current: false,
  },
  {
    name: "Андрей",
    message: "Thank you. Of course",
    date: "11:00",
    current: false,
  },
  {
    name: "Андрей",
    message: "Thank you. Of course",
    date: "11:00",
    current: false,
  },
];

export const ChartPage = () => {
  return Handlebars.compile(tml)(
    {
      messages: messages.reduce((res, cur) => res += Message(cur.text, cur.owner), ``),
      list: chatList.reduce((res, cur) => res += ChartItem(cur), ``)
    }
  );
}