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
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9lUflOcfsogKTqudWbF652aBpLsM9MKgQA&usqp=CAU' className='coverimg' alt=''/>
            <img src='https://images7.alphacoders.com/324/324176.jpg' className='userimg' alt=''/>
            </div>
            <div className="proinfo">
                <h4 className="userinfoname">Farhana Hossain</h4>
                <p className="prodsc">Fluffy!</p>
            </div>
        </div>

        {user.posts? (
        <div className="prorightbottom">
        {/*  */}
       <Posts posts={posts} updatePostState={updatePostState}  user={user} />

       </div>
         ) :'Create some posts'
        }

      </div>
      <RightBar/>
    </div>
  );
};

export default Profile;
