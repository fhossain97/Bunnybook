import './Post.css'

import { Link} from 'react-router-dom'

import {MoreVert} from "@mui/icons-material";


const Post = ({ post, deletePost, user, id }) => {

    // const isAdmin = props.user.authority === "ADMIN"

      // const [like, setLike] = useState(post.like)
      // const [liked, setLiked] = useState(false)

      // const [dislike, setDislike] = useState(post.dislike)
      // const [disliked, setDisliked] = useState(false)

      // const likeHandler = () => {
      //   setLike(liked ? like -1 : like +1)
      //   setLiked(!liked)
      // }

      // const dislikeHandler = () => {
      //   setDislike(disliked ? dislike -1 : dislike +1)
      //   setDisliked(!disliked)
      // }


    //   const [isAuthorized,setIsAuthorized] = useState(['ADMIN'].includes(user.authority));
    //   useEffect(()=>{
    //         setIsAuthorized(['ADMIN'].includes(user.authority))
    //        },[user.authority]) 



  return (
    <div className="content" key={id}>
<div className="cwrapper">
    <div className="ctop">
    <div className="topleft">
    {/* <img className="cpic" alt='profilepic' src={user.filter((u) => u.id === post.id)[0].profilePicture}/>
    <span className="cusername">{user.filter((u) => u.id === post.id)[0].username}</span> */}

    <span className="cdate">{post.date}</span>
    </div>
    <div className="topright"></div>
    <Link to={`/posts/${id}`}><MoreVert /> </Link> 

    </div>
    <div className="ccenter">
    <span className="ctext">{post.status_body}</span>
    <img className="cimg" alt='' src={`https://res.cloudinary.com/mushu/${post.file}`} />
{/* 
  { 
      user?.isAdmin ? (
          <>  
              <button onClick={() => deletePost(id)}>Delete</button>
          </>
      )  : null
  } */}


 
    </div>
    <div className="cbottom">
 <div className="cbottomleft">
{/* <img className="cicon" alt='iconpic' src='/assets/icons/like.png' onClick={likeHandler} />
<img className="cicon" alt='iconpic' src='/assets/icons/dislike.png' onClick={dislikeHandler} />
<span className="like">{like} liked</span>
<span className="dislike">{dislike} disliked</span> */}
</div>
<div className="cbottomright">
{/* <span className="commenttext">{post.comments} comments</span> */}
</div>
    </div>
</div>


    </div>
  )
}

export default Post



