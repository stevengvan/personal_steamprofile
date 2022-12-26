import { useState, useEffect } from "react";
import axios from "axios";
import "./Recent.css";

function Recent({ setShowStats, setStats, setAchievements }) {
  const [recent, setRecent] = useState(null);
  const [gameID, setGameID] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/home/recent",
    };

    axios
      .request(options)
      .then((response) => {
        console.log("Recently Played: ", response.data["response"]["games"]);
        setRecent(response.data["response"]["games"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const achievementsInit = async (gameID) => {
    setAchievements(null);

    const options = {
      method: "GET",
      url: `http://localhost:8000/home/gamestat/${gameID}`,
    };

    axios
      .request(options)
      .then((response) => {
        console.log(
          "Achievements: ",
          response.data["playerstats"]["achievements"]
        );
        setAchievements(response.data["playerstats"]["achievements"]);
      })
      .catch((error) => {
        console.error(error);
      });
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
