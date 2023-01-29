
import Posts from '../../components/Post/Posts'
import Status from '../Status'
import LeftBar from '../../components/LeftBar/LeftBar'
import RightBar from '../../components/RightBar/RightBar'
import { useState, useEffect } from 'react'

import './Home.css'

const Home = ({ posts, updatePostState, user , updatedNews}) => {
  const [news, setNews] = useState("");
  const newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f0788f39cf2248c294d082d3cf6af917";

const getNewsApi = async (data) => {

  try {
    const request = await fetch(newsUrl);
    const dataJson = await request.json();
    if (data) {
      setNews(dataJson.articles[0].urlToImage);
    } else {
      console.log("Did not get API");
    }
  }catch(err){
    console.log(err, 'This is the error from API')
  }
   
  };

  useEffect(() => {
    getNewsApi();
  }, []);


// const getNews = (data) => {
//   axios.get(newsUrl)
//   .then(newsdata => {
//       console.log(newsdata)
//       updatedNews(data)
//   },[])
// }

  return (
    <div className="homefeed">
      <LeftBar />

      <div className="hfwrapper">
<Status />
      <Posts posts={posts} updatePostState={updatePostState}  user={user} />

        </div>

 <RightBar  news={news}/>
     
    </div>
  )
}

export default Home