import React from 'react'

function TextBubble(props) {
    return (
        <div className='bubble'>
            <div className={props.msgType}>
                    {props.msg}
            </div>
            
        </div>
    )
}

export default TextBubble
