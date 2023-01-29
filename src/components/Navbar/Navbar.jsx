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
    fetch(`${process.env.REACT_APP_API}/posts/`)
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
          <Link to="/" className="px-6 py-2.5 fb-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            <span className="navbarLink"><CottageIcon/> Home</span>{" "}
          </Link>
        </div>
        
        <div className="navbarLinks">
          <Link to="/message" className="px-6 py-2.5 fb-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            <span className="navbarLink"><ChatBubbleOutlineIcon />Messenger</span>{" "}
          </Link>
        </div>

        <div className="navbarLinks">
          <Link to="/profile" className="px-6 py-2.5 fb-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            <span className="navbarLink"> <AccountCircleIcon /> Profile</span>{" "}
          </Link>
        </div>


      </div>

      <div className="navbarLinks">
      <button className=" px-6 py-2.5 fb-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
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
          <Link to="/register" className="px-6 py-2.5 fb-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            <span className="navbarLink"> <AppRegistrationIcon/>Register</span>{" "}
          </Link>
        </div>

<div className="loginandregister">
<Link to="/login" className="px-6 py-2.5 fb-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
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


