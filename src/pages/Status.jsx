import React, { useState } from "react";
import { PermMedia } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Status = ({ addToPost }) => {
  const initialState = {
    status_body: "",
    // date : "",
    file: "",
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
    media.append("status_body", formData.status_body);
    // media.append("date", formData.date);
    console.log(formData);

    axios.post(`${process.env.REACT_APP_API}/posts/`, media).then((res) => {
      console.log(media);
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
            <img
              className="pprofilepic"
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-2kDls_PjBmfK-m6uNF25fI4sVjBdBft_w&usqp=CAU'
              alt="profilefriendpic"
            />

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
                <PermMedia htmlColor="red" className="posticon" />
                <span className="optionpost">Photo</span>
                <input
                  className="linput"
                  name="file"
                  id="file"
                  type="file"
                  accept="video/*,image/*"
                  onChange={handleFile}
                />
              </div>

              {/* <div className="option">
                <CalendarToday htmlColor='blue' className="posticon" />
                <input
            className="linput"
            id="date"
            name="date"
            type="date"
            placeholder="Date"
            onChange={handleChange}
          />

            </div>  */}
            </div>
            <button id="new" type="submit" className="pbutton">
              {" "}
              Share{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Status;
