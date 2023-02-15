
import {useState, useEffect, useRef} from 'react'
import Message from './Message'
import { messagedb } from '../../firebase'
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import Send from './Send';

const style = {
  main: `flex flex-col p-[10px]`,
};



const Chat = () => {

const [message, setMessage] =useState([])
const scroll = useRef()

useEffect(() => {
const eachMessage =  query(collection(messagedb, 'bbmessages'), orderBy('time'))
const unsubscribe = onSnapshot(eachMessage, (querySnapshot) => {
    let message = []
    querySnapshot.forEach((d) => {
message.push({...d.data(), id: d.id})
    })
    setMessage(message)
 console.log(message)
})
return () => unsubscribe()
}, [])



  return (
    <>
    <div className={style.main}>

     
{message && message.map((message) => {

   return <Message key={message.id} message={message}  />
})

}

    </div>
    <Send scroll={scroll}/>
    <span ref={scroll}></span>
    </>
  )
}

export default Chat