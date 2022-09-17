import React, {useState} from 'react'
import {PermMedia,CalendarToday, Room, EmojiEmotions} from "@mui/icons-material";
import axios from "axios";
import { useNavigate} from "react-router-dom";


const Status = ({addToPost}) => {
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
    axios.post("http://localhost:8000/bunnybook/posts/", media)
    .then((res) => {
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
    <div className="post">
<div className="pwrapper">
<form onSubmit={handleSubmit} encType="multipart/form-data">
    <div className="top">
    <img className="pprofilepic" src="/assets/friends/friend9.jpg" alt="profilefriendpic" />

    <input
            id="status_body"
            name="status_body"
            type="text"
            className="postInput" 
            placeholder="What's on your mind Bun?"
            onChange={handleChange}
          />
  
    </div>


    <hr className="posthr" />
    <div className="bottom">
        <div className="options">
            <div className="option">
                <PermMedia htmlColor='red' className="posticon" />
                <span className="optionpost">Media</span>
                <input
            className="linput"
            name="file"
            id="file"
            type="file"
            accept="video/*,image/*"
            onChange={handleFile}
          />

            </div>

            <div className="option">
                <CalendarToday htmlColor='blue' className="posticon" />
                <input
            className="linput"
            id="date"
            name="date"
            type="date"
            placeholder="Date"
            onChange={handleChange}
          />

            </div>
            <div className="option">
                <Room htmlColor='green' className="posticon" />
                <span className="optionpost">Location</span>
            </div>
            <div className="option">
                <EmojiEmotions htmlColor='purple' className="posticon" />
                <span className="optionpost">Like or Dislike</span>
            </div>
        </div>
        <button id="new" type="submit" className="pbutton"> Share </button>
    </div>
    </form>
</div>

    </div>
  )
}

export default Status

          

