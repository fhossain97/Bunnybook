import React from 'react'
import './HomeFeed.css'
import Status from '../Post/Status'
// import PostContent from '../Post/PostContent'
import Posts from '../../components/Post/Posts'
// import {Posts} from '../../seeds/Seeds'


const HomeFeed = ({posts, updatePost, user }) => {
  // if (user) {
  //   console.log(user)
    return (
      <div className="homefeed">
  <div className="hfwrapper">
  <Status />
  {/* {Posts.map((p) => (
            <PostContent key={p.id} post={p} />
          ))} */}
          <Posts posts={posts} updatePost={updatePost} user={user} />
  </div>
  </div>
)}
//   else {
//     return(
// <h1>Login</h1>
//     )
//   }
   

// }

export default HomeFeed