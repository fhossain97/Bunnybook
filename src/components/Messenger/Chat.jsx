
import {useState, useEffect, useRef} from 'react'
import Message from './Message'
import { messagedb } from '../../firebase'
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';


const chatstyle = {
    chatmain: `border-5 border-orange-500 flex flex-col p-[10px] w-[75%] h-[100%]`
}

const Chat = () => {

const [messages, setMessages] =useState([])
const scroll = useRef()

useEffect(() => {
const q =  query(collection(messagedb, 'messages'), orderBy('time'))
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let messages = []
    querySnapshot.forEach((d) => {
messages.push({...d.data(), id: d.id})
    })
    setMessages(messages)
})
return () => unsubscribe()
}, [])



  return (
    <>
    <div className={chatstyle.chatmain}>

      fuckkkk my life
{messages && messages.map((message) => {

   return <Message key={message.id} message={message}/>
})

}

    </div>
    <span ref={scroll}></span>
    </>
  )
}

export default Chat