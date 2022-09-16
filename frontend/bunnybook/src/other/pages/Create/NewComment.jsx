import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewPost = ({addComment}) => {
  const initialState = {
    body : "",
    date : "",
    like: "",
    dislike: "",
    post: "",
  };


  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);


  const handleChange = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const media = new FormData();
    axios.post("http://localhost:8000/bunnybook/comments/", media).then((res) => {
      console.log(media)
      setFormData(initialState);
      addComment(res.data);
      navigate("/", { replace: true });
    });
  };


return (
  <div className="lright">
  <form onSubmit={handleSubmit} encType="multipart/form-data" className="lbox">
          <input
            id="body"
            name="body"
            type="text"
            className="linput"
            placeholder="Comment"
            onChange={handleChange}
          />
          <input
            className="linput"
            id="date"
            name="date"
            type="date"
            placeholder="Date"
            onChange={handleChange}
          />

            <input
            className="linput"
            id="like"
            name="like"
            type="number"
            placeholder="Like"
            onChange={handleChange}
          />

            <input
            className="linput"
            id="dislike"
            name="dislike"
            type="number"
            placeholder="Dislike"
            onChange={handleChange}
          />

        <input
            id="post"
            name="post"
            type="text"
            className="linput"
            placeholder="Post"
            onChange={e => handleChange(e, e.id)}
          />
           <button id="new" type="submit" className="signupbutton"> + New Comment </button>
          
  </form>
  </div>
);
};

export default NewPost