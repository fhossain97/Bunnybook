import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'
import "./Navbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import SearchBar from "../Search/SearchBar";

import React from "react";

const Navbar = ({ user, handleLogout, setUser }) => {

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch(process.env.REACT_APP_BUNNYBOOK_API_URL)
  //     .then(res => res.json())
  //     .then(posts => setPosts(posts));
  // }, []);


  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="title">bunnybook</span>
      </div>
      <div className="navbarCenter">
        <div className="search">
          <Search className="searchIcon" />
          {/* <SearchBar className="input" data={posts}/> */}
 
          <input placeholder="Search" className="input" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <Link to="/">
            <span className="navbarLink">Home</span>{" "}
          </Link>
        </div>

        <div className="navbarIcons">
          <div className="navbarIcon">
            <Person />
            <span className="navbarIconNotification">1</span>
          </div>
          <div className="navbarIcon">
          <Link to="/message">
          <Chat />
          </Link>
            <span className="navbarIconNotification">5</span>
          </div>
          <div className="navbarIcon">
            <Notifications />
            <span className="navbarIconNotification">4</span>
          </div>
        </div>
      </div>

        { user ? <li>Welcome! </li> : <li> <Link to='/login'> Login </Link></li>}
    { user ? <button onClick={handleLogout}>Log Out</button> : null}
 
      <img
        src="/assets/profile/mushu.jpg"
        alt="profile"
        className="navbarProfilePic"
      />
    </div>

  );
};

export default Navbar;


