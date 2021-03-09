import { useState } from 'react'
import './App.css';
import {ChatContext} from './context/chatContext'
import ChatWindow from './components/chatwindow'
import TextBubble from './components/textBubble';
import TextBox from './components/textbox';

function App() {
  const [text,setText] = useState('');
  const [msgs,setMsgs] = useState([]);
  return (
    <ChatContext.Provider value={{text,setText,msgs,setMsgs}}>
      <ChatWindow />
    </ChatContext.Provider>
          
  );
}

export default App;
