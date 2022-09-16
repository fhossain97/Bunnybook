import React from "react";
import axios from "axios";
import Post from "./Post";

const Posts = ({ posts, updatePostState, user }) => {
      const deletePost= (id) => {
        axios.delete(`http://localhost:8000/bunnybook/posts/${id}/`)
        .then(res => {
            console.log(res)
            updatePostState(id)
        },[id])
    }


    return (

    <div>
        { 
          posts.length === 0 ? 'No Post Available' :  (posts.map( post => {
                return <Post id={post.id} post={post} deletePost={deletePost} user={user}/>
            }))
        }
    </div>
  )
};
export default Posts;

