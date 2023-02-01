import React from "react";
import "./Profile.css";
import Posts from "../Post/Posts";
import LeftBar from '../LeftBar/LeftBar'
import RightBar from "../RightBar/RightBar";

// import Status from "../../pages/Status";

const Profile = ({ posts, updatePostState, user }) => {
  return (
    <div className="profileindv">
      <LeftBar />
     
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

        </div>
      </div>
      <RightBar />
    </div>
  );
};

export default Profile;
