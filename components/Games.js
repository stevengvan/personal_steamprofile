import { useState, useEffect } from "react";

function Games({ gamesList, setShowStats, setStats, setAchievements }) {
  const [screenSize, setScreenSize] = useState("small");
  const [games, setGames] = useState(gamesList);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [showIndices, setShowindices] = useState(false);
  const [indexmodif, setIndexmodif] = useState(20);

  const handleResize = () => {
    if (window.innerWidth < 400) {
      setIndexmodif(20);
      setScreenSize("small");
    } else if (window.innerWidth < 700) {
      setIndexmodif(25);
      setScreenSize("med");
    } else if (window.innerWidth < 1200) {
      setIndexmodif(30);
      setScreenSize("large");
    } else {
      setIndexmodif(60);
      setScreenSize("wide");
    }
  };
  useEffect(() => {
    if (window.innerWidth < 400) {
      setIndexmodif(20);
      setScreenSize("small");
    } else if (window.innerWidth < 700) {
      setIndexmodif(25);
      setScreenSize("med");
    } else if (window.innerWidth < 1200) {
      setIndexmodif(30);
      setScreenSize("large");
    } else {
      setIndexmodif(60);
      setScreenSize("wide");
    }
    window.addEventListener("resize", handleResize);
  }, []);

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
    <div className="gamesCon">
      <h1 className="contentHeader">GAMES</h1>

      <div className="list">
        {games &&
          games.slice(index, index + indexmodif).map((game, _) => {
            return (
              <img
                className="gameIcon"
                src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`}
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
