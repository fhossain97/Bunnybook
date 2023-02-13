import ChatNav from "./ChatNav"
import Chat from "./Chat"


const messengerStyle = {
  chatcontainer: `border-8 border-solid border-blue-700 w-[100%] h-[100vh]`,
  sectioncontainer : `border-8 border-red-600 w-[100%] h-[100%]`
}


const ChatBox = () => {
  return (
    <div className={messengerStyle.chatcontainer}>
     <section className={messengerStyle.sectioncontainer}>
      <ChatNav />
      <Chat />
      
      </section> 
    </div>
  )
}

export default ChatBox

//link for assisstance - https://www.section.io/engineering-education/creating-a-simple-chat-app-in-react-using-the-chat-engine-api/
