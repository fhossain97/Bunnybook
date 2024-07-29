import "./Friends.css";
import { useState, useEffect } from "react";

const Friends = ({ profile }) => {
  const friendUrl = `${process.env.REACT_APP_FRIEND_URL}`;
  const [friend, setFriend] = useState({});

  useEffect(() => {
    fetch(friendUrl)
      .then((res) => res.json())
      .then((data) => {
        setFriend(data);
      });
  }, [friendUrl]);

  return (
    <>
      {!friend ? (
        "No friends online!"
      ) : (
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            {friend.results ? (
              <>
                <img
                  className="rightbarProfileImg"
                  src={friend.results[0].picture.thumbnail}
                  alt=""
                />
                <span className="rightbarOnline"></span>
                <span className="rightbarUsername">
                  {friend.results[0].name.first} {friend.results[0].name.last}
                </span>
              </>
            ) : null}
          </div>
          <div className="rightbarProfileImgContainer">
            {friend.results ? (
              <>
                <img
                  className="rightbarProfileImg"
                  src={friend.results[1].picture.thumbnail}
                  alt=""
                />
                <span className="rightbarOnline"></span>
                <span className="rightbarUsername">
                  {friend.results[1].name.first} {friend.results[1].name.last}
                </span>
              </>
            ) : null}
          </div>
          <div className="rightbarProfileImgContainer">
            {friend.results ? (
              <>
                <img
                  className="rightbarProfileImg"
                  src={friend.results[2].picture.thumbnail}
                  alt=""
                />
                <span className="rightbarOnline"></span>
                <span className="rightbarUsername">
                  {friend.results[2].name.first} {friend.results[2].name.last}
                </span>
              </>
            ) : null}
          </div>

          <div className="rightbarProfileImgContainer">
            {friend.results ? (
              <>
                <img
                  className="rightbarProfileImg"
                  src={friend.results[3].picture.thumbnail}
                  alt=""
                />
                <span className="rightbarOnline"></span>
                <span className="rightbarUsername">
                  {friend.results[3].name.first} {friend.results[3].name.last}
                </span>
              </>
            ) : null}
          </div>
          <div className="rightbarProfileImgContainer">
            {friend.results ? (
              <>
                <img
                  className="rightbarProfileImg"
                  src={friend.results[4].picture.thumbnail}
                  alt=""
                />
                <span className="rightbarUsername">
                  {friend.results[4].name.first} {friend.results[4].name.last}
                </span>
              </>
            ) : null}
            <span className="rightbarOnline"></span>
          </div>
          <div className="rightbarProfileImgContainer">
            {friend.results ? (
              <>
                <img
                  className="rightbarProfileImg"
                  src={friend.results[5].picture.thumbnail}
                  alt=""
                />
                <span className="rightbarUsername">
                  {friend.results[5].name.first} {friend.results[5].name.last}
                </span>
              </>
            ) : null}
            <span className="rightbarOnline"></span>
          </div>
          <div className="rightbarProfileImgContainer">
            {friend.results ? (
              <>
                <img
                  className="rightbarProfileImg"
                  src={friend.results[6].picture.thumbnail}
                  alt=""
                />
                <span className="rightbarUsername">
                  {friend.results[6].name.first} {friend.results[6].name.last}
                </span>
              </>
            ) : null}
            <span className="rightbarOnline"></span>
          </div>
          <div className="rightbarProfileImgContainer">
            {friend.results ? (
              <>
                <img
                  className="rightbarProfileImg"
                  src={friend.results[7].picture.thumbnail}
                  alt=""
                />

                <span className="rightbarUsername">
                  {friend.results[7].name.first} {friend.results[7].name.last}
                </span>
              </>
            ) : null}
            <span className="rightbarOnline"></span>
          </div>
          <div className="rightbarProfileImgContainer">
            {friend.results ? (
              <>
                <img
                  className="rightbarProfileImg"
                  src={friend.results[8].picture.thumbnail}
                  alt=""
                />

                <span className="rightbarUsername">
                  {friend.results[8].name.first} {friend.results[8].name.last}
                </span>
              </>
            ) : null}
            <span className="rightbarOnline"></span>
          </div>

          <div className="rightbarProfileImgContainer">
            {friend.results ? (
              <>
                <img
                  className="rightbarProfileImg"
                  src={friend.results[9].picture.thumbnail}
                  alt=""
                />

                <span className="rightbarUsername">
                  {friend.results[9].name.first} {friend.results[9].name.last}
                </span>
              </>
            ) : null}
            <span className="rightbarOnline"></span>
          </div>
        </li>
      )}
    </>
  );
};

export default Friends;
