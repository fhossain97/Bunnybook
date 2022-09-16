import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewPost from './pages/NewPost'
import Layout from './components/Layout'
import PostView from './pages/PostView'
import PostEdit from './pages/PostEdit'
import userService from './utils/userService.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Profile from './components/Profile/Profile.jsx'


const App = () => {

const [ posts, setPosts  ] = useState([])
const [user , setUser ] = useState()

  useEffect(() => {
    fetch('http://localhost:8000/bunnybook/posts/')
    .then( res => res.json())
    .then( items => setPosts(items))
  }, [])
  


  
  const addToPost= (post) => {
     setPosts([...posts, post])
  }

  const updatePostState = (id) => {
      setPosts(posts.filter(post=> post._id !== id))
  }
  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  return (
    <Layout user={user} setUser={setUser} handleLogout={handleLogout}>
      
    <Routes>
        <Route path='/' element={ <Home posts={posts} updatePostState={updatePostState} user={ user} />} />
        <Route path='/new-post' element={ <NewPost addPost={addToPost}  /> } />
        <Route path='/posts/edit/:id' element={ <PostEdit  setPosts={setPosts} /> } />
        <Route path='/posts/:id' element={ <PostView posts={posts}/>} />
        <Route path='/login' element={ <Login handleSignupOrLogin={handleSignupOrLogin}
              setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>

  
    
  </Layout>
  )
}

export default App