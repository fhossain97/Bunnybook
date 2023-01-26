import { Link  } from "react-router-dom";
import {useState, useEffect} from 'react'
import "./Navbar.css";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CottageIcon from '@mui/icons-material/Cottage';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Searchbar from '../Searchbar/Search'

const Navbar = ({ user, handleLogout }) => {

  const [posts, setPosts] = useState([]);

 let token = localStorage.getItem('token')

  useEffect(() => {
    fetch(`${process.env.REACT_API}/posts/`)
      .then(res => res.json())
      .then(post => setPosts(post));
  }, []);


  let nav = token ? (

    <div className="navbarContainer">


      <div className="navbarLeft">
        <span className="title">bunnybook</span>
      </div>
      <div className="navbarCenter">
        

<Searchbar data={posts} />


      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            <span className="navbarLink"><CottageIcon/> Home</span>{" "}
          </Link>
        </div>
        
        <div className="navbarLinks">
          <Link to="/message" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            <span className="navbarLink"><ChatBubbleOutlineIcon />Chat</span>{" "}
          </Link>
        </div>

        <div className="navbarLinks">
          <Link to="/profile" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            <span className="navbarLink"> <AccountCircleIcon /> Profile</span>{" "}
          </Link>
        </div>


      </div>

      <div className="navbarLinks">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <Link to="" style={{textDecoration: 'none'}} onClick={handleLogout}>
           <LogoutIcon/> {user} Log Out
              </Link>
              </button>  
              </div>


     
 
      {/* <img
        src="/assets/profile/mushu.jpg"
        alt="profile"
        className="navbarProfilePic"
      /> */}
    </div>
  ) : (
    <div className="navbarContainer">
    <div className="loginandregister">
          <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            <span className="navbarLink"> <AppRegistrationIcon/>Register</span>{" "}
          </Link>
        </div>

<div className="loginandregister">
<Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
  <span className="navbarLink">
    <LoginIcon/> Login</span>{" "}
</Link>
</div>
</div>

  )

  return (
<nav>{nav}</nav>

  );
};

export default Navbar;


