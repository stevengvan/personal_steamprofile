import { useState, useEffect } from "react";
import axios from "axios";
import "./Games.css";

function Games({ setShowStats, setStats, setAchievements }) {
  const [games, setGames] = useState(null);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [showIndices, setShowindices] = useState(false);
  const [indexmodif, setIndexmodif] = useState(() => {
    if (window.innerWidth < 400) {
      return 20;
    } else if (window.innerWidth < 700) {
      return 25;
    } else if (window.innerWidth < 1200) {
      return 30;
    } else {
      return 75;
    }
  });

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://personal-steamprofile.vercel.app/games",
    };

    axios
      .request(options)
      .then((response) => {
        setGames(response.data["response"]["games"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const smallHandler = () => setIndexmodif(20);
  const medHandler = () => setIndexmodif(25);
  const largeHandler = () => setIndexmodif(30);
  const wideHandler = () => setIndexmodif(60);

  useEffect(() => {
    const smallMedia = window.matchMedia("(max-width: 400px)");
    smallMedia.addEventListener("change", smallHandler);

    const medMedia = window.matchMedia("(max-width: 700px)");
    medMedia.addEventListener("change", medHandler);

    const largeMedia = window.matchMedia("(max-width: 1200px)");
    largeMedia.addEventListener("change", largeHandler);

    const wideMedia = window.matchMedia("(min-width: 1201px)");
    wideMedia.addEventListener("change", wideHandler);

    return () => {
      smallMedia.removeEventListener("change", smallHandler);
      medMedia.removeEventListener("change", medHandler);
      largeMedia.removeEventListener("change", largeHandler);
      wideMedia.removeEventListener("change", wideHandler);
    };
  }, []);

  const achievementsInit = async (gameID) => {
    setAchievements(null);

    const options = {
      method: "GET",
      url: `https://personal-steamprofile.vercel.app/home/gamestat/${gameID}`,
    };

    axios
      .request(options)
      .then((response) => {
        setAchievements(response.data["playerstats"]["achievements"]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="gamesCon">
      <h1 className="contentHeader">GAMES</h1>

      <div className="list">
        {games &&
          games.slice(index, index + indexmodif).map((game, _) => {
            return (
              <img
                className="gameIcon"
                src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`}
                alt={game.name}
                onClick={() => {
                  setStats(game);
                  achievementsInit(game.appid);
                  setShowStats(true);
                }}
              />
            );
          })}
      </div>

      <div className="buttons">
        <button
          disabled={games && index === 0}
          onClick={() => {
            setIndex(index - indexmodif);
            setPage(page - 1);
          }}
        >
          Back
        </button>

        <div
          className={showIndices ? "indexListPressed" : "indexList"}
          onClick={() => {
            setShowindices(!showIndices);
          }}
        >
          <span>{page}</span>

          {showIndices === true && games && games.length > 0 && (
            <div className="indices">
              {Array.from(
                Array(Math.ceil(games.length / indexmodif)).keys()
              ).map((_, idx) => {
                return (
                  <div
                    className="index"
                    onClick={() => {
                      setIndex(indexmodif * idx);
                      setPage(idx + 1);
                    }}
                  >
                    <p key={idx}>{idx + 1}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <button
          disabled={games && index + indexmodif >= games.length}
          onClick={() => {
            setIndex(index + indexmodif);
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Games;
