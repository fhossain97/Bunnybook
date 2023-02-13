const messagestyle = {
message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
bunny: `absolute mt-[-4rem] text-gray-600 text-xs`
}

const Message = ({message}) => {
 
  return (
    <div>

<div className={messagestyle.message}>
    <p className={messagestyle.bunny}>Mushu and Meeshu</p>

    <p>{message.text}</p>
    
</div>

    </div>
  )
}

export default Message