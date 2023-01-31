import Posts from "../../components/Post/Posts";
import Status from "../Status";
import LeftBar from "../../components/LeftBar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import "./Home.css";

const Home = ({ posts, updatePostState, user }) => {
  return (
    <div className="homefeed">
      <LeftBar />

      <div className="hfwrapper">
        <Status />
        <Posts posts={posts} updatePostState={updatePostState} user={user} />
      </div>

      <RightBar />
    </div>
  );
};

export default Home;
