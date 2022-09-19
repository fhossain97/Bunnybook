import React from 'react'
import '../Sidebar/Sidebar.css'
import {Users} from '../../seeds/Seeds'


const CloseFriends = ({user}) => {
  return (
    <div>
    <li className="sbfriend">
        <img className="sbfriendpic" src={user.profilePicture} alt="" />
        <span className="sbfriendname">{user.username}</span>
    </li>

    </div>
  )
}

export default CloseFriends