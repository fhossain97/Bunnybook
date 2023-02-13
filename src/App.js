import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Layout from "./components/Layout";
import PostView from "./pages/PostView";
import PostEdit from "./pages/PostEdit";
import userService from "./utils/userService.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Profile from "./components/Profile/Profile.jsx";
// import BBchat from "./pages/BBchat.jsx";

const App = () => {
  let navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/posts/`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const updatePostState = (id) => {
    setPosts(posts.filter((idx, post) => post._id !== id));
  };
  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  const handleLogout = () => {
    userService.logout();
    setUser(null);
    navigate("/login");
  };

  return (
   
    <Layout user={user} setUser={setUser} handleLogout={handleLogout}>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              handleSignupOrLogin={handleSignupOrLogin}
              setUser={setUser}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <Home
              posts={posts}
              updatePostState={updatePostState}
              user={user}
              addPost={addPost}
              addComment={addComment}
            />
          }
        />

        <Route
          path="/posts/edit/:id"
          element={
            <PostEdit
              setPosts={setPosts}
              posts={posts}
              updatePostState={updatePostState}
            />
          }
        />
        <Route
          path="/posts/:id"
          element={<PostView posts={posts} updatePostState={updatePostState} />}
        />

        <Route
          path="/profile"
          element={
            <Profile
              posts={posts}
              updatePostState={updatePostState}
              user={user}
            />
          }
        />
        {/* <Route path="/message" element={<BBchat />} /> */}
      </Routes>
    </Layout>
  );
};

export default App;
