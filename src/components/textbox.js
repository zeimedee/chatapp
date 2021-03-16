import React,{useContext,useRef,useEffect} from 'react'
import {ChatContext} from '../context/chatContext'

function TextBox() {
    const {text,setText,setMsgs,msgs} = useContext(ChatContext);
    const chat = useRef();

    const handelClick =(e)=>{
        e.preventDefault();
        if(text === ''){

        }else{
            setMsgs(msgs => msgs.concat(text));
            setText('');
            chat.current.focus();
        }
        
    }

    useEffect(() => {
        chat.current.focus();
    }, [])

    return (
        <div className='textbox'>
            <textarea 
            ref={chat}
            type='text'
            value={text} 
            onChange={ (e)=>{setText(e.target.value)} }

            ></textarea>
            <button onClick={handelClick}>send</button>     
        </div>
    )
}

export default TextBox
