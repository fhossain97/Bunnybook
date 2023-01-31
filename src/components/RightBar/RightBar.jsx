import "./RightBar.css";
import { useState, useEffect } from "react";

const newsUrl =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=O0WMvPRUYhxAKNjMH6Hdvqin6phDynos";

  const friendUrl='https://randomuser.me/api/'

const RightBar = () => {
  const [news, setNews] = useState({});
  const [friend, setFriend] = useState({})

  useEffect(() => {
    fetch(newsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'News API');
        setNews(data.results[0]);
      });
  }, []);


  useEffect(() => {
    fetch(friendUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'User API');
        setFriend(data.results[0]);
      });
  }, []);

  return (
<>


    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            // src={news.media[0]["media-metadata"][0]["url"]}
            alt=""
          />

          <span>
            {" "}
            {news.source} on {news.published_date}
          </span>
        </div>
        <b>{news.title}</b> {news.byline}
        {/* <img className="rightbarAd" src={news.media[0]["media-metadata"][2]["url"]}  alt='' /> */}
      </div>
      
    </div>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={friend.picture.thumbnail}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{friend.name.first}{friend.name.last}</span>
          </div>
</div>
<li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={friend.picture.thumbnail} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{friend.picture.thumbnail}</span>
    </li>

    </>
  );
};

export default RightBar;

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
//         
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
