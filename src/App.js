import { useState } from 'react'
import './App.css';
import {ChatContext} from './context/chatContext'
import ChatWindow from './components/chatwindow'

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
