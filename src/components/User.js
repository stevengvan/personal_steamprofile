import { useState, useEffect } from "react";
import axios from "axios";
import "./User.css";

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/user",
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data["response"]["players"][0]);
        setUser(response.data["response"]["players"][0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="userContainer">
      <img
        className="avatar"
        src={user ? user.avatarfull : null}
        alt="Steam avatar"
      />
      <div className="info">
        <h1 className="username" alt="Steam username">
          {user && user.personaname.substring(0, 16)}
          {user && user.personaname.length > 16 && "..."}
        </h1>
        <h6 className="steamid" alt="Steam user ID">
          {user ? user.steamid : null}
        </h6>
      </div>
    </div>
  );
}

export default User;
