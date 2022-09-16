import React, {  useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const PostView = ({posts}) => {
    const { id } = useParams()
    const [ post, setPost ] = useState()
    // let post = posts.find( (p) => p._id === (id))

    useEffect(()=> {
        fetch(`http://localhost:8000/bunnybook/posts/${id}/`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[id])
    

    console.log(post)


    return (
        <div>
            {
            post && ( <>
                        <h1>{post.status_body}</h1>
                        <h2>{post.date}</h2>
                        <img src={post.file} alt="" />
                        <Link to={`/posts/edit/${post.id}`}>Edit Post</Link>
                    </>
                    )
            }
        </div>
    )
}

export default PostView