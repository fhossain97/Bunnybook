import React from 'react'
import Posts from '../../components/Post/Posts'
import Status from '../Status'
import Sidebar from '../../components/Sidebar/Sidebar'
import Rightbar from '../../components/Rightbar/Rightbar'
import './Home.css'

const Home = ({ posts, updatePostState, user }) => {
  return (
    <div className="homefeed">
<Sidebar />
      <div className="hfwrapper">
<Status />
      <Posts posts={posts} updatePostState={updatePostState}  user={user} />

 
        </div>
        <Rightbar />
    </div>
  )
}

export default Home