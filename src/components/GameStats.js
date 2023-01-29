import { useState, useEffect } from "react";
import "./GameStats.css";

function GameStats({ toggle, stats, achievements }) {
  const [numAch, setNumAch] = useState(() => {
    if (window.innerHeight < 700) {
      return 5;
    } else if (window.innerHeight < 1080) {
      return 10;
    } else {
      return 15;
    }
  });

  const smallHandler = () => setNumAch(5);
  const largeHandler = () => setNumAch(10);
  const wideHandler = () => setNumAch(15);

  useEffect(() => {
    const smallMedia = window.matchMedia("(max-height: 700px)");
    smallMedia.addEventListener("change", smallHandler);

    const largeMedia = window.matchMedia("(max-height: 1080px)");
    largeMedia.addEventListener("change", largeHandler);

    const wideMedia = window.matchMedia("(min-height: 1081px)");
    wideMedia.addEventListener("change", wideHandler);

    return () => {
      smallMedia.removeEventListener("change", smallHandler);
      largeMedia.removeEventListener("change", largeHandler);
      wideMedia.removeEventListener("change", wideHandler);
    };
  }, []);

  return (
    <div className="statsContainer">
      <button className="closeBtn" onClick={() => toggle(false)}>
        CLOSE
      </button>

      <a
        className={"gameName"}
        title={stats.name}
        alt={stats.name}
        href={`https://store.steampowered.com/app/${stats.appid}/`}
      >
        <h3>
          {stats.name.substring(0, 50)}
          {stats.name.length > 50 && "..."}
        </h3>
      </a>
      <i className="gameID">ID: {stats.appid}</i>

      <h5 className="achievementsHead">Achievements</h5>
      <div className="achievements">
        {achievements &&
          achievements.slice(0, numAch).map((achievement, index) => {
            return <p key={index}>{achievement.name}</p>;
          })}
      </div>
    </div>
  );
}

export default GameStats;
