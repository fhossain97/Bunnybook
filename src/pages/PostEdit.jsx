import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'



const PostEdit = ({ setPosts, posts }) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    status_body: "",
    date: "",
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
    // media.append("name", formData.name);
    media.append("status_body", formData.status_body);
    media.append("date", formData.date);

    axios
      .put(`http://localhost:8000/bunnybook/posts/${id}/`, media)
      .then((res) => {
        console.log(res.data)
        setFormData(initialState);
        setPosts([...posts, res.data]);
        navigate("/", { replace: true });
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/bunnybook/posts/${id}/`).then((res) => {
      setFormData(res.data)
      console.log(res.data)
    });
  }, [id]);

  const handleFile = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.id]: e.target.files[0] });
  };

 

    // let {id} = useParams()


// const [comment, setComment] = useState('')
// const [newComment, setNewComment] = useState('')

// const handleNewComment = (e)=> {
//   e.preventDefault()
//   setComment([...comment, newComment])
//   setNewComment('');
// }


// const handleNewCommentUpdate = (e) => {
//     setNewComment(e.target.value);
// }

// const CommentDelete = (id) => {
//   axios.delete(`http://localhost:8000/bunnybook/posts/${id}/comments/${id}`).then((res) => {
//     updateComment(id);
//     return navigate("/")
//   })
// }

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
        id="date"
        name="date"
        type="date"
        value={formData.date}
        placeholder="Date"
        onChange={handleChange}
      />

      <input
        className="linput"
        name="file"
        id="file"
        type="file"
        // value={formData.file}
        accept="video/*,image/*"
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


export default PostEdit
