import { serverTimestamp } from 'firebase/firestore'
import {useState} from 'react'
import {auth, messagedb} from '../../firebase'
import {addDoc, collection} from 'firebase/firestore'
import './Chat.css'


const Send = ({scroll}) => {

const [send, setSend] = useState('')

const handleChange = (e) => {
    setSend(e.target.value );
}

const handleSubmit = async (e) => {
    e.preventDefault();
if (send === '') {
    console.log('Please enter message')
    return
}

const {uid, displayName} = auth.currentUser
await addDoc(collection(messagedb, 'bbmessages'), {
    text: send,
    name: displayName,
    uid,
    time: serverTimestamp()
})
setSend('')
scroll.current.scrollIntoView({behavior: 'smooth'})

  };

  return (
    <div className="topbar">
		<form className="formfield" onSubmit = {handleSubmit}>
        <input 
        type='text'
        value={send}
        onChange = {handleChange}
        className='sendinput' 
        placeholder='Send a message'
        />
        <button type='submit' className='sendbtn'>Send</button>
		</form>
        </div>
    


  )
}

export default Send