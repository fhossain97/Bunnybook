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
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFile = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.files[0] });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const media = new FormData();
    media.append("file", formData.file);
    media.append("status_body", formData.status_body);
    axios
      .put(`${process.env.REACT_APP_API}/posts/${id}/`, media)
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


  return (
    <div className='editform'>
<div className="containeredit">

<div className="form-panel">
  <form    onSubmit={handleSubmit}
        encType="multipart/form-data">
    <div className="form-control">
      <input id="status_body"
          name="status_body"
          type="text"
          value={formData.status_body}
          onChange={handleChange} />
     

    </div>
    <div className="form-control">

      <input className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-pink-50 file:text-pink-700
      hover:file:bg-pink-100
    "
    name="file"
                  id="file"
                  type="file"
                  accept="image/*"
                  onChange={handleFile}/>
    </div>
    <button className="btnedit">Submit</button>

  </form>
</div>
<img alt='' src='https://media.giphy.com/media/pqCxL43whDKzS/giphy.gif' className="picture-panel">
</img>
</div>
</div>
  );
};

export default PostEdit;
