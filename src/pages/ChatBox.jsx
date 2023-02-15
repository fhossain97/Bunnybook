import ChatNav from "../components/Messenger/ChatNav";
import Chat from "../components/Messenger/Chat";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatBox = () => {
  const [chatUser] = useAuthState(auth);

  return (
    <div className="messenger p-4 bg-white h-[100%]">
      <section>
        <ChatNav />
        {chatUser ? <Chat /> : null}
      </section>
    </div>
  );
};

export default ChatBox;

// message styling -https://devsenv.com/tutorials/how-to-design-a-beautiful-messenger-application-chat-ui-using-tailwind-css
