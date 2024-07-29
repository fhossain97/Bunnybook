import Posts from "../../components/Post/Posts";
import Status from "../Status";
import LeftBar from "../../components/LeftBar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import Login from "../Login/Login";
import "./Home.css";

const Home = ({
  posts,
  updatePostState,
  user,
  addPost,
  handleSignupOrLogin,
  setUser,
}) => {
  if (user) {
    return (
      <div className="homefeed">
        <LeftBar />
        <div className="hfwrapper">
          <Status addPost={addPost} />
          <Posts posts={posts} updatePostState={updatePostState} user={user} />
        </div>
        <RightBar />
      </div>
    );
  } else {
    return (
      <Login handleSignupOrLogin={handleSignupOrLogin} setUser={setUser} />
    );
  }
};

export default Home;
