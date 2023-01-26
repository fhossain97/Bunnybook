import React from 'react'
import './Sidebar.css'
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School} from "@mui/icons-material";
import CloseFriends from '../CloseFriends/CloseFriends';
import {Users} from '../../seeds/Seeds'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sbwrapper">
<ul className="sblist">
<li className="sblistitem">
<RssFeed className="sbicon"/>
<span className="sblistitemtext">Feed</span>
</li>
<li className="sblistitem">
<Chat className="sbicon"/>
<span className="sblistitemtext">Messenger Chats</span>
</li>
<li className="sblistitem">
<PlayCircleFilledOutlined className="sbicon"/>
<span className="sblistitemtext">Videos</span>
</li>
<li className="sblistitem">
<Group className="sbicon"/>
<span className="sblistitemtext">Groups</span>
</li>
<li className="sblistitem">
<Bookmark className="sbicon"/>
<span className="sblistitemtext">Bookmarks</span>
</li>
<li className="sblistitem">
<HelpOutline className="sbicon"/>
<span className="sblistitemtext">Inquiries</span>
</li>
<li className="sblistitem">
<WorkOutline className="sbicon"/>
<span className="sblistitemtext">Jobs</span>
</li>
<li className="sblistitem">
<Event className="sbicon"/>
<span className="sblistitemtext">Calendar Events</span>
</li>
<li className="sblistitem">
<School className="sbicon"/>
<span className="sblistitemtext">Learning Courses</span>
</li>
</ul>
<button className="sbbutton">
    More Options
</button>
<hr className="sbhr"/>
<ul className="sbfriendlist">
{Users.map(user=>(
    <CloseFriends user={user} key={user.id}/>
  ))
  }

 
</ul>
        </div>
    </div>
  )
}

export default Sidebar