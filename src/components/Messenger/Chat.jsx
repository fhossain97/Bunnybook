
import {useState, useEffect, useRef} from 'react'
import Message from './Message'
import { messagedb } from '../../firebase'
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';




const Chat = () => {

const [messages, setMessages] =useState([])
const scroll = useRef()

useEffect(() => {
const q =  query(collection(messagedb, 'bbmessages'), orderBy('time'))
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let messages = []
    querySnapshot.forEach((d) => {
messages.push({...d.data(), id: d.id})
    })
    setMessages(messages)
 console.log(messages)
})
return () => unsubscribe()
}, [])



  return (
    <>
    <div>
this is the message
     
{messages && messages.map((message) => {

   return <Message key={message.id} message={message}  />
})

}

    </div>
    <span ref={scroll}></span>
    </>
  )
}

export default Chat