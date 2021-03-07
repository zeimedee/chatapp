import React from 'react'
import TextBubble from './textBubble'
import TextBox from './textbox'

function ChatWindow() {
    return (
        <div className='view'>
            <div className='chatbox'>
                <div className='chats'>
                    <TextBubble 
                        msgType='rxTextBubble'
                        msg='chats bubble will grow along with text'
                    />
                    <TextBubble 
                        msgType='txTextBubble'
                        msg='chats are really some way bi like that, it will be and awesome looking ui after im done with chat'
                    />

                </div>
                <TextBox />
            </div>
        </div>
    )
}

export default ChatWindow
