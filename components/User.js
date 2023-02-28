import { useState } from "react";

function User({ userData }) {
  const [user, setUser] = useState(userData);

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
