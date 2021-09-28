import Chat from './Chat';

const chat = new Chat(document.querySelector('.chat'), 'wss://ahjws.herokuapp.com//ws');
chat.init();
