import React from 'react'
import Posts from '../components/Post/Posts'

const Home = ({ posts, updatePostState, user }) => {
  return (
    <div>
        <Posts posts={posts} updatePostState={updatePostState}  user={user} />
    </div>
  )
}

export default Home