import React, {  useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const PostView = ({posts, updatePostState}) => {
    
   
    // let post = posts.find( (p) => p._id === (id))

        let navigate = useNavigate()
        
        const deletePost = (id) => {
        axios.delete(`${process.env.REACT_APP_API}/posts/${post.id}/`).then((res) => {
          console.log(res);
          updatePostState(id);
          return navigate("/")
        });
      };

      const {id} = useParams()   
      const [ post, setPost ] = useState()

useEffect(() => {
fetch(`${process.env.REACT_APP_API}/posts/${id}/`)
        .then(res => res.json())
        .then(data => setPost(data))
    })
    

    // console.log(post)


    return (
        <div>
            {
            post && (<>
                        <h1>{post.status_body}</h1>
                        <h2>{post.date}</h2>
                        <img className="cimg" alt='' src={`https://res.cloudinary.com/mushu/${post.file}`} />
                        <Link to={`/posts/edit/${post.id}`}>Edit Post</Link>
                        <button onClick={() => deletePost(post._id)}>Delete</button>
                    </>
                    )
            }
        </div>
    )
}

export default PostView