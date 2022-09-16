import React from 'react'
import '../Rightbar/Rightbar.css'

const OnlineFriends = ({user}) => {
  return (
    <li className="rbfriend">
    <div className="profileimgcontainer">
    <img className="profilepic" src={user.profilePicture} alt="" />
    <span className="online"></span>
    </div>
    <span className="rbusername">{user.username}</span>
  </li>
  )
}

export default OnlineFriends