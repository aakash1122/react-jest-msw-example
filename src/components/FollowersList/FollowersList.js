import React, { useEffect, useState } from "react";
import "./FollowersList.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    fetchFollowers();
    return () => {
      source.cancel();
    };
  }, []);

  const fetchFollowers = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/", {
        cancelToken: source.token,
      });
      setFollowers(data.results);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className="followerslist-container" data-testid="follower-container">
      <div>
        {followers.map((follower, i) => (
          <div
            className="follower-item"
            data-testid={`follower-item-${i}`}
            key={i}
          >
            <img src={follower.picture.large} alt="img" />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
