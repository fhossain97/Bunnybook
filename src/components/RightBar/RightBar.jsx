import "./RightBar.css";
import { useState, useEffect } from "react";
import Friends from "../Friends/Friends";



const RightBar = () => {
  const newsUrl =
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=O0WMvPRUYhxAKNjMH6Hdvqin6phDynos";

  const [news, setNews] = useState({});

  useEffect(() => {
    fetch(newsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("News API", data);
        setNews(data.results[0]);
      });
  }, []);

  return (
    <>
      {!news ? (
        "No news to display"
      ) : (
        <div className="rightbar">
          <div className="rightbarWrapper">
            <div className="birthdayContainer">
 {news && news.multimedia ?


(      <img
      className="birthdayImg"
      src={news.multimedia[2].url}
      alt=""
    />)
 : null}
          
  
              <span>
              <b>{news.title}</b> 
              </span>
            </div>
            {news.byline}
            <hr/>
            <i><a href={news.url}>Click me for more information!</a></i>
            {news && news.multimedia ?(
              <img
                className="rightbarAd"
                src={news.multimedia[0].url}
                alt=""
              />
              
            ) : null}
          </div>
      
          <h4 className="rightbarTitle">Online Friends</h4>
          <hr/>

          <Friends />
        </div>
      )}
    </>
  );
};

export default RightBar;
