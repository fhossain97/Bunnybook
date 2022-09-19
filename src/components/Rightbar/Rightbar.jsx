import React from 'react'
import './Rightbar.css'
import {Users} from '../../seeds/Seeds'
import OnlineFriends from '../OnlineFriends/OnlineFriends'

const Rightbar = ({profile}) => {

  const HomeRb = () => {
return (
  <>
<div className="bdayContainer">
<img className="bdaypic" src="/assets/bday/bday.jpg" alt="bdaypic" />
<span className="bdaytext">
  <b>Miley Cyrus</b> and <b>3 other friends</b> have a birthday today
</span>
</div>
<img className="adpic" src="/assets/ad/ad.jpg" alt="adpic" />
<h4 className="rbtitle">Friends Online</h4>
<ul className="friendlist">
  {Users.map(user=>(
    <OnlineFriends user={user} key={user.id}/>
  ))
  }
</ul>
</>
)
  }

  const ProfileRb = () => {
    return (
     <> 
     <h4 className="userinfotitle">User Info Title</h4>
     <div className="infocontainer">
     <div className="infoitem">
     <span className="infokey">City:</span>
     <span className="infovalue">New 
     York</span>
     </div>
     <div className="infoitem">
     <span className="infokey">From:</span>
     <span className="infovalue">Bangladesh</span>
     </div>
     <div className="infoitem">
     <span className="infokey">Relationship Status:</span>
     <span className="infovalue">Forever Single</span>
     </div>
     </div>
     <h4 className="userfriends">User Friends</h4>
     <div className="friendsfollowing">
     <div className="friendfollowing">
      <img src="/assets/friends/friend5.jpg" alt="" className="imgfollowing" />
      <span className="following">Evelyn Chen</span>
     </div>
     <div className="friendfollowing">
      <img src="/assets/friends/friend6.jpg" alt="" className="imgfollowing" />
      <span className="following">Evelyn Chen</span>
     </div>
     <div className="friendfollowing">
      <img src="/assets/friends/friend8.jpg" alt="" className="imgfollowing" />
      <span className="following">Evelyn Chen</span>
     </div>
     </div>
     </>
    )
      }



  return (
    <div className="rightbar">
      <div className="rbwrapper">
      {profile ? <ProfileRb /> : <HomeRb />}
      </div>
    </div>
  )
}

export default Rightbar

