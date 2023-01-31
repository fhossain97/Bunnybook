import "./RightBar.css";
import { useState, useEffect } from "react";
import Friends from "../Friends/Friends";

const newsUrl =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=O0WMvPRUYhxAKNjMH6Hdvqin6phDynos";

const RightBar = ({friends}) => {
  const [news, setNews] = useState({});

  useEffect(() => {
    fetch(newsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "News API");
        setNews(data.results[0]);
      });
  }, []);

  return (
    <>
    {!news ? 'No news to display' : ( <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img
              className="birthdayImg"
              src={news.media[0]["media-metadata"][0]["url"]}
              alt=""
            />

            <span>
              {" "}
              {news.source} on {news.published_date}
            </span>
          </div>
          <b>{news.title}</b> {news.byline}
          <img
            className="rightbarAd"
            src={news.media[0]["media-metadata"][2]["url"]}
            alt=""
          />
        </div>
        <h4 className="rightbarTitle">Online Friends</h4>
        {/* <Friends/> */}
      </div>

    )}
     
    </>
  );
};

export default RightBar;
