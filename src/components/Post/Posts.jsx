import React from "react";
import axios from "axios";
import Post from "./Post";


const Posts = ({ posts, updatePostState, user }) => {

      const deletePost= (id) => {
        axios.delete(`${process.env.REACT_APP_API}/posts/${id}/`)
        .then(res => {
            console.log(res)
            updatePostState(id)
        },[id])
    }
console.log(posts)

    return (

    <div>
        { 
          posts.length === 0 ? 'No Post Available' :  (posts?.map( post => {
                return <Post key={post.id} id={post.id} post={post} deletePost={deletePost} user={user}/>
            }))
        }
    </div>
  )
};
export default Posts;

