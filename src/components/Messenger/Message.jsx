import { auth } from "../../firebase";

const messagestyle = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  bunny: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `text-white flex-row-reverse text-end float-right rounded-bl-full bg-gradient-to-r from-blue-300 to-blue-600`,
  received: `text-white float-left rounded-br-full bg-gradient-to-b from-yellow-300 to-blue-600`,
};

const Message = ({ message }) => {
  const messageSwitch =
    message.uid === auth.currentUser.uid
      ? `${messagestyle.sent}`
      : `${messagestyle.received}`;

  return (
    <div>
      <div className={`${messagestyle.message} ${messageSwitch}`}>
        <p className={messagestyle.bunny}>{message.name}</p>

        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
