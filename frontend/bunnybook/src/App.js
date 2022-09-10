import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import userService from "./utils/userService";
import LoginTest from "./pages/Login";
import SignupTest from "./pages/Signup";
import Layout from "./components/Layout/Layout";
import Homepage from './pages/Homepage';

function App() {
  const [state, setState] = useState({})
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log('useEffect Ran!')
    fetch('http://localhost:8000/posts/')
    .then(res => res.json())
    .then(res => {
      setState(res)
      return res
    }).then(res => console.log(res))
  }, []) 



const handleSignupOrLogin = () => {
  setUser(userService.getUser())
}


const handleLogout = () => {
    userService.logout();
    setUser(null)
}


  return (
    <Layout user={user} setUser={setUser} handleLogout={handleLogout}>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/login" element={<LoginTest handleSignupOrLogin={handleSignupOrLogin} setUser={setUser} />} />
        <Route path="/signup" element={<SignupTest handleSignupOrLogin={handleSignupOrLogin}/>}/>

      </Routes>
    </Layout>
  );
}

export default App;





