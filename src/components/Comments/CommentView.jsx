import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Comments.css'

const CommentView = ({user}) => {

const [comment, setComment] = useState()

let {id} =useParams()

useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/posts/`)
      .then((res) => res.json())
      .then((data) => setComment(data));
  },[id]);

  return (

    <div className="row">
        {comment && 
					<ul id="list_comment" className="col-md-12">
                    <li class="box_result row">
							<div class="avatar_comment col-md-1">
								<img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
							</div>
							<div class="result_comment col-md-11">
								<h4>{user}</h4>
								<p>{comment.body}</p>
								{/* <div class="tools_comment">
									<a class="like" href="#">Like</a>
									<span aria-hidden="true"> · </span>
									<a class="replay" href="#">Reply</a>
									<span aria-hidden="true"> · </span>
									<i class="fa fa-thumbs-o-up"></i> <span class="count">1</span> 
									<span aria-hidden="true"> · </span>
									<span>26m</span>
								</div> */}
								
							</div>
						</li>
                        </ul>
                        }
</div>

					
                   
  )
}

export default CommentView