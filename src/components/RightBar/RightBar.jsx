import "./RightBar.css";
import { useState, useEffect } from 'react'


const newsUrl = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=O0WMvPRUYhxAKNjMH6Hdvqin6phDynos";

// export default function Rightbar() {

//   



// // useEffect(() => {
// //   fetch(newsUrl)
// //   .then( res => res.json())
// //   .then( data => {
// //     console.log(data)
// //     setNews(data.articles[0].urlToImage)})
// // }, [])



  const RightBar = () => {

    const [news, setNews] = useState({});

    // const getNewsData = async () => {
    //   let response = await fetch(newsUrl)
    //   let jsonD = await response.json()
    //   setNews(jsonD)
      
    // }

    // useEffect(() => {
    //   getNewsData()
    // }, [])

 useEffect(() => {
  fetch(newsUrl)
  .then( res => res.json())
   .then( data => {
    console.log(data)
    setNews(data.results[0])})
 }, [])


    return (

      <div className="rightbar">
       <div className="rightbarWrapper">
          <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <span className="birthdayText">
            {news.source}
            {news.published_date}  
            <b>{news.title}</b> {news.byline}
          </span>
        </div>
        
        <img className="rightbarAd" src={news.media[0]["media-metadata"][2]['url']}  alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
  
      </div>
   </div>
       

    );
  };

  export default RightBar

  //   const ProfileRightbar = () => {
  //     return (
  //       <>
  //         <h4 className="rightbarTitle">User information</h4>
  //         <div className="rightbarInfo">
  //           <div className="rightbarInfoItem">
  //             <span className="rightbarInfoKey">City:</span>
  //             <span className="rightbarInfoValue">New York</span>
  //           </div>
  //           <div className="rightbarInfoItem">
  //             <span className="rightbarInfoKey">From:</span>
  //             <span className="rightbarInfoValue">Madrid</span>
  //           </div>
  //           <div className="rightbarInfoItem">
  //             <span className="rightbarInfoKey">Relationship:</span>
  //             <span className="rightbarInfoValue">Single</span>
  //           </div>
  //         </div>
  //         <h4 className="rightbarTitle">User friends</h4>
  //         <div className="rightbarFollowings">
  //           <div className="rightbarFollowing">
  //             <img
  //               src="assets/person/1.jpeg"
  //               alt=""
  //               className="rightbarFollowingImg"
  //             />
  //             <span className="rightbarFollowingName">John Carter</span>
  //           </div>
  //           <div className="rightbarFollowing">
  //             <img
  //               src="assets/person/2.jpeg"
  //               alt=""
  //               className="rightbarFollowingImg"
  //             />
  //             <span className="rightbarFollowingName">John Carter</span>
  //           </div>
  //           <div className="rightbarFollowing">
  //             <img
  //               src="assets/person/3.jpeg"
  //               alt=""
  //               className="rightbarFollowingImg"
  //             />
  //             <span className="rightbarFollowingName">John Carter</span>
  //           </div>
  //           <div className="rightbarFollowing">
  //             <img
  //               src="assets/person/4.jpeg"
  //               alt=""
  //               className="rightbarFollowingImg"
  //             />
  //             <span className="rightbarFollowingName">John Carter</span>
  //           </div>
  //           <div className="rightbarFollowing">
  //             <img
  //               src="assets/person/5.jpeg"
  //               alt=""
  //               className="rightbarFollowingImg"
  //             />
  //             <span className="rightbarFollowingName">John Carter</span>
  //           </div>
  //           <div className="rightbarFollowing">
  //             <img
  //               src="assets/person/6.jpeg"
  //               alt=""
  //               className="rightbarFollowingImg"
  //             />
  //             <span className="rightbarFollowingName">John Carter</span>
  //           </div>
  //         </div>
  //       </>
  //     );
  //   };
  // return (
  //   <div className="rightbar">
  //     <div className="rightbarWrapper">
  //       {/* {profile ? <ProfileRightbar /> : <HomeRightbar />} */}
  //       <Newsbar />
  //     </div>
  //   </div>
//   );
// }
