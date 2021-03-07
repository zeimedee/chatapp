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
                    />
                    <TextBubble 
                        msgType='rxTextBubble'
                    />
                    <TextBubble 
                        msgType='txTextBubble'
                    />
                    <TextBubble 
                        msgType='txTextBubble'
                    />
                </div>
                <TextBox />
            </div>
        </div>
    )
}

export default ChatWindow
