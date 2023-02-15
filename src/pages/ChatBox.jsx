import ChatNav from '../components/Messenger/ChatNav'
import Chat from "../components/Messenger/Chat"

import {auth} from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth"



const ChatBox = () => {
const [userLogged] = useAuthState(auth)

  return (
    <div >
     <section >
      <ChatNav />
      {userLogged? <Chat />:null}
      </section> 
    </div>
  )
}

export default ChatBox

//link for assisstance - https://www.section.io/engineering-education/creating-a-simple-chat-app-in-react-using-the-chat-engine-api/
