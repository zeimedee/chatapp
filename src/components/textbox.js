import React,{useContext} from 'react'
import {ChatContext} from '../context/chatContext'

function TextBox() {
    const {text,setText,setMsgs,msgs} = useContext(ChatContext);

    const handelClick =(e)=>{
        e.preventDefault();
        if(text === ''){

        }else{
            setMsgs(msgs => msgs.concat(text));
            setText('');
        }
        
    }
    return (
        <div className='textbox'>
            <textarea 
            type='text'
            value={text} 
            onChange={ (e)=>{setText(e.target.value)} }

            ></textarea>
            <button onClick={handelClick}>send</button>     
        </div>
    )
}

export default TextBox
