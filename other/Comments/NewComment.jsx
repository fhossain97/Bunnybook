import {useState} from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './Comments.css'

const NewComment = ({addComment}) => {
const initialState ={
    body: ''
}
let {id} = useParams()

const [formData, setFormData] = useState(initialState)
const navigate = useNavigate();

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
}

const handleSubmit = (e) => {
    e.preventDefault();
    const bodycom = new FormData();
    bodycom.append("body", formData.body);
    console.log(formData);
    axios.post(`${process.env.REACT_APP_API}/posts/${id}/comments/`, bodycom)
    .then((res) => {
      setFormData(initialState);
      addComment(res.data);
      console.log(res.data)
      navigate("/", { replace: true });
    });
}

  return (
   <form onSubmit = {handleSubmit}>

            	<div class="container">
		<div className="col-md-12" id="fbcomment">

			<div className="body_comment">
				<div className="row">
					<div className="avatar_comment col-md-1">
					  <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
					</div>
					<div className="box_comment col-md-11">
                         <input
              id="body"
              name="body"
              type="text"
              className="commentar" 
              placeholder="Add a comment..."
              onChange={handleChange}
            />
				
					  <div className="box_post">
						<div className="pull-right">
	
						  <button type="submit" >Post</button>
						</div>
					  </div>
					</div>
				</div>
				</div></div>
</div>
   </form>
  )
}

export default NewComment