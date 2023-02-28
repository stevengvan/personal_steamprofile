import { useState, useEffect } from "react";

function Recent({ recentList, setShowStats, setStats, setAchievements }) {
  const [recent, setRecent] = useState(recentList);
  const [gameID, setGameID] = useState("");

  const achievementsInit = async (appid) => {
    const response = await fetch(`/api/achievements?appid=${appid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setAchievements(data.achievements);
  };

  return (
    <div className="recentGames">
      <h5 className="recentHeader">RECENTLY PLAYED</h5>
      <div className="gameList">
        {recent &&
          recent.slice(0, 10).map((game, _) => {
            return (
              <div
                key={game.appid}
                className={
                  gameID === game.appid ? "gameConSelected" : "gameCon"
                }
                onClick={() => {
                  setGameID(game.appid);
                  setStats(game);
                  achievementsInit(game.appid);
                  setShowStats(true);
                }}
              >
                <img
                  className="gameImg"
                  alt={game.name}
                  src={` http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`}
                />
                <p>{game.name.slice(0, 30)}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Recent;
