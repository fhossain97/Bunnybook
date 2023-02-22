import { useState } from "react";
import { Link } from "react-router-dom";
import "./Searchbar.css";

const Searchbar = ({ placeholder, data }) => {
  const [filteredPost, setFilteredPost] = useState([]);
  const handleFilter = (e) => {
    let postSearch = e.target.value;
    const newFilter = data.filter((word) => {
      return word.status_body.toLowerCase().includes(postSearch.toLowerCase());
    });

    if (postSearch === "") {
      setFilteredPost([]);
    } else {
      setFilteredPost(newFilter);
    }
  };

  return (
    <div className='main'>
    <div className="search">
      <div className="input">
        <input type="text" placeholder="Search" onChange={handleFilter} />
      </div>
      {filteredPost.length !== 0 && (
        <div className="dropdown">
          {filteredPost.map((post) => {
            console.log(filteredPost, "Filtered Post");
            return (
              <Link
                className="postData"
                key={post.id}
                target="_blank"
                to={`${process.env.REACT_APP_API}/posts/${post.id}`}
              >
                <p className='dropdown-row'>{post.status_body}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
    </div>
  );
};

export default Searchbar;
//link for help: https://www.youtube.com/watch?v=x7niho285qs
