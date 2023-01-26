
import Posts from '../../components/Post/Posts'
import Status from '../Status'
import './Home.css'

const Home = ({ posts, updatePostState, user }) => {
  return (
    <div className="homefeed">

      <div className="hfwrapper">
<Status />
      <Posts posts={posts} updatePostState={updatePostState}  user={user} />

 
        </div>
     
    </div>
  )
}

export default Home