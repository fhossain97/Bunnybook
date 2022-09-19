import React from "react";
import "./Profile.css";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Home from '../../pages/Home/Home'
import Posts from "../Post/Posts";
import Rightbar from "../../components/Rightbar/Rightbar";
// import Status from "../../pages/Status";

const Profile = ({ posts, updatePostState, user }) => {
  return (
    <div className="profileindv">
      <Sidebar />
      <div className="proright">
        <div className="prorighttop">
            <div className="procover">
            <img src='/assets/cover/carrots.jpg' className='coverimg' alt=''/>
            <img src='/assets/friends/friend1.jpg' className='userimg' alt=''/>
            </div>
            <div className="proinfo">
                <h4 className="userinfoname">Farhana Hossain</h4>
                <p className="prodsc">Fluffy!</p>
            </div>
        </div>
        <div className="prorightbottom">
         {/*  */}
        <Posts posts={posts} updatePostState={updatePostState}  user={user} />
          <Rightbar profile/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
