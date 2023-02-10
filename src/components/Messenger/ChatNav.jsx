import React from 'react'

const navchatstyle = {
    navcontainer: `border-solid border-4 border-purple-500 w-[100%] h-[100%]`,
    headernav: `border-solid border-4 border-green-500 w-[100%] h-[100%]`
}

const ChatNav = () => {
  return (
    <div className={navchatstyle.navcontainer}>
    <h1 className={navchatstyle.headernav}>Messenger</h1>
    
    </div>
  )
}

export default ChatNav