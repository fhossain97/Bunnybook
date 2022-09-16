import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import HomeFeed from '../../components/HomeFeed/HomeFeed'
import Rightbar from '../../components/Rightbar/Rightbar'
import { Link} from 'react-router-dom'
import "./Homepage.css"
// import Posts from '../../components/Post/Posts'
// import {Link} from "react-router-dom";


const Homepage = ({user}) => {
  // if(user){
  //   console.log(user)
    return (
    <div>
    <div className="barContainer">
    <Sidebar />
  <HomeFeed />
  <Rightbar />
      </div> 
      </div>
    )
//   }
//     else {
//       return (
//         <div>
//               <Link to='/login'>
//                   <div id='login'>
//                     Login
//                   </div>
//                 </Link>
         
//                 <Link to='/register'>
//                   <div id='signup'>
//                     Sign Up
//                   </div>
//                 </Link>
// </div>
//       )
//     }
  
}

export default Homepage