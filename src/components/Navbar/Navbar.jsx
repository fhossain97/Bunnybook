import { Link  } from "react-router-dom";
import {useState, useEffect} from 'react'
import "./Navbar.css";

import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Searchbar from '../Searchbar/Search'

const Navbar = ({ user, handleLogout }) => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/posts/`)
      .then(res => res.json())
      .then(post => setPosts(post));
  }, []);



if (user){
  return(

    <div className="navbarContainer">


      <div className="navbarLeft">
        <span className="title">bunnybook</span>
      </div>
      <div className="navbarCenter">
        

<Searchbar data={posts} />


      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <Link to="/" className="text-white font-medium text-xs leading-tight uppercase">
            <span className="navbarLink"> Home</span>
          </Link>
        </div>
        
        <div className="navbarLinks">
          <Link to="/message" className="text-white font-medium text-xs leading-tight uppercase">
            <span className="navbarLink">Messenger</span>
          </Link>
        </div>
{/* 
        <div className="navbarLinks">
          <Link to="/profile" className="text-white font-medium text-xs leading-tight uppercase">
            <span className="navbarLink"> Profile</span>
          </Link>
        </div> */}


    

      <div className="navbarLinks">
      <button className="text-white font-medium text-xs leading-tight uppercase" style={{textDecoration: 'none'}} onClick={handleLogout}>
   
     {user.username} Log Out
     
              </button>  
              </div>

              </div>
     
 
      {/* <img
        src="/assets/profile/mushu.jpg"
        alt="profile"
        className="navbarProfilePic"
      /> */}
    </div>


  ) } else {
    return (
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
    }

};

export default Navbar;


