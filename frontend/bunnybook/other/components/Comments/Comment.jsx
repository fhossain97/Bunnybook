import React from "react";
// import { Link } from "react-router-dom";


const Comment = ({ comment, deleteComment, user }) => {

  //console.log(item)
  return (
    <div key={comment._id}>
<p>{comment.body}</p>
<p>{comment.date}</p>
<p>{comment.like}</p>
<p>{comment.dislike}</p>
<p>{comment.post}</p>

    </div>
  )
}
export default Comment 
