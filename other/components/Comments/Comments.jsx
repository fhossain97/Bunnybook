import React from "react";
import axios from "axios";
import Comment from "./Comment";

const Comments = ({ comments, updateComment, user }) => {
  const deleteComment = (id) => {
    axios.delete(`http://localhost:8000/comments/${id}`).then((res) => {
      //console.log(res);
      updateComment(id);
    });
  };
  return (
    comments.map((comment) =>
      (
        <Comment
          key={comment._id}
          comment={comment}
          deleteComment={deleteComment}
          user={user}
        />
      )
      ));
};
export default Comments;
