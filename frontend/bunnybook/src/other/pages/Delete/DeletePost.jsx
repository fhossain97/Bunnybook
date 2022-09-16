import React, { useState, useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeletePost = ({ posts, updatePost }) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const deletePost = () => {
    axios.delete(`http://localhost:8000/bunnybook/posts/${id}/`).then((res) => {
      console.log('deleted')
    updatePost(id);
    console.log(updatePost)
      navigate("/posts");
    });
  };

  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/bunnybook/posts/${id}/`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      {post && (
        <>
          <p>{post.status_body}</p>
          <img src={post.file} alt="" />
          <p>{post.date}</p>

          <Link to={`/posts/edit/${post._id}`}> Edit Post </Link>
          <>
            <div>
              <button onClick={() => deletePost(post._id)}>Delete</button>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default DeletePost;


<Route
path="/posts/:id"
element={<DeletePost updatePost={updatePost} posts={posts} />}
/>