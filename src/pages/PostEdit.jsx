import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PostEdit = ({ setPosts, posts }) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    status_body: "",
    file: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const media = new FormData();
    media.append("file", formData.file);
    media.append("status_body", formData.status_body);

    axios
      .put(`${process.env.REACT_APP_API}/posts/${id}/`, formData)
      .then((res) => {
        setFormData(initialState);
        setPosts([...posts, res.data]);
        navigate("/", { replace: true });
      });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/posts/${id}/`).then((res) => {
      setFormData(res.data);
    });
  }, [id]);

  const handleFile = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.files[0] });
  };

  return (
    <div className="lright">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="lbox"
      >
        <input
          id="status_body"
          name="status_body"
          type="text"
          className="linput"
          placeholder="Post"
          value={formData.status_body}
          onChange={handleChange}
        />
        <input
          className="linput"
          name="file"
          id="file"
          type="file"
          accept="image/*"
   
          onChange={handleFile}
        />

        <button type="submit" className="signupbutton">
          {" "}
          Edit Post{" "}
        </button>
      </form>
    </div>
  );
};

export default PostEdit;
