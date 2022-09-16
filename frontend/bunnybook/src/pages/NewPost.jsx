import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const NewPost = ({addToPost}) => {
  const initialState = {
    status_body : "",
    date : "",
    file : "",
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
    media.append("file", formData.file);
    // media.append("name", formData.name);
    media.append("status_body", formData.status_body);
    media.append("date", formData.date);

    console.log(formData)
    axios.post("http://localhost:8000/bunnybook/posts/", media).then((res) => {
      console.log(media)
      setFormData(initialState);
      addToPost(res.data);
      navigate("/", { replace: true });
    });
  };

  const handleFile = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.id]: e.target.files[0] });
  };


return (
  <div className="lright">
  <form onSubmit={handleSubmit} encType="multipart/form-data" className="lbox">
          <input
            id="status_body"
            name="status_body"
            type="text"
            className="linput"
            placeholder="Post"
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
            name="media"
            id="media"
            type="file"
            accept="video/*,image/*"
            onChange={handleFile}
          />

           <button id="new" type="submit" className="signupbutton"> + New Post </button>
          
  </form>
  </div>
);
};

export default NewPost


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

