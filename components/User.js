import { useState } from "react";
import Image from "next/image";

function User({ userData }) {
  const [user, setUser] = useState(userData);

  return (
    <div className="userContainer">
      {user && (
        <Image
          className="avatar"
          src={user.avatarfull}
          alt="Steam avatar"
          width={0}
          height={0}
          sizes="100vw"
        />
      )}
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
