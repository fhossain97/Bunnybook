import "./Post.css";
import { Link } from "react-router-dom";
import { MoreVert } from "@mui/icons-material";


const Post = ({ post, id, addComment}) => {
  return (
    <div className="content" key={id}>
      <div className="cwrapper">
        <div className="ctop">
          <div className="topleft">
            
          </div>
          <div className="topright"></div>
          <Link to={`/posts/${id}`}>
            <MoreVert />{" "}
          </Link>
        </div>
        <div className="ccenter">
          <span className="ctext">{post.status_body}</span>
          <img
            className="cimg"
            alt=""
            src={`${process.env.REACT_APP_CLOUDINARY}/${post.file}`}
          />
        </div>
        <div className="cbottom">
          <div className="cbottomleft"><span className="cdate">{post.date}</span></div> 
          {/* {/* <div className="cbottomright"> comment<Comments /></div> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
