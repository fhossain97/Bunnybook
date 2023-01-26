import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PostView = ({ updatePostState }) => {
  let navigate = useNavigate();

  const deletePost = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API}/posts/${post.id}/`)
      .then((res) => {
        console.log(res);
        updatePostState(id);
        return navigate("/posts");
      });
  };

  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/posts/${id}/`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  });

  return (
    <div>
      {post && (
        <>
          <div className="flex justify-center" id="viewctn">
            <div className="rounded-lg shadow-lg bg-white max-w-[90%]">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={`https://res.cloudinary.com/mushu/${post.file}`}
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {post.status_body}
                </h5>
                <p className="text-gray-700 text-base mb-4">{post.date}</p>

                <button
                  id="viewbtn"
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-fb-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <Link to={`/posts/edit/${post.id}`}>Edit Post</Link>
                </button>
                <button
                  id="viewbtn"
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-fb-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => deletePost(post._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostView;
