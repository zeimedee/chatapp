import React,{useContext} from 'react'
import {ChatContext} from '../context/chatContext'
import TextBubble from './textBubble'
import TextBox from './textbox'

function ChatWindow() {
    const {msgs} = useContext(ChatContext)
    return (
        <div className='view'>
            <div className='chatbox'>
                <div className='chats'>
                    {/* <TextBubble 
                        msgType='rxTextBubble'
                        msg='chats bubble will grow along with text'
                    /> */}
                    {
                        msgs.map((i)=>{
                            return <TextBubble 
                                msgType='txTextBubble'
                                msg={i}
                            />
                        })
                    }
                    

                </div>
                <TextBox />
            </div>
        </div>
    )
}

export default ChatWindow
