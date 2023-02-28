import { useState } from "react";
import User from "@/components/User";
import Games from "@/components/Games";
import GameStats from "@/components/GameStats";
import Recent from "@/components/Recent";

export default function Home({ user, recent, games }) {
  const [toggle, setToggle] = useState(false);
  const [stats, setStats] = useState(null);
  const [achievements, setAchievements] = useState(null);

  return (
    <div className="App">
      <div className="menu">
        <User userData={user} />
        <Recent
          recentList={recent}
          setShowStats={setToggle}
          setStats={setStats}
          setAchievements={setAchievements}
        />
      </div>
      <div className="content">
        {toggle && (
          <GameStats
            toggle={setToggle}
            stats={stats}
            achievements={achievements}
          />
        )}
        <div style={toggle ? { display: "none" } : { height: "inherit" }}>
          <Games
            gamesList={games}
            setShowStats={setToggle}
            setStats={setStats}
            setAchievements={setAchievements}
          />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const userRes = await fetch(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.NEXT_PUBLIC_STEAM_API_KEY}&steamids=${process.env.NEXT_PUBLIC_STEAM_ID}`
  );
  const userJSON = await userRes.json();
  const userData = userJSON["response"]["players"][0];

  const recentRes = await fetch(
    `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.NEXT_PUBLIC_STEAM_API_KEY}&steamid=${process.env.NEXT_PUBLIC_STEAM_ID}&format=json`
  );
  const recentJSON = await recentRes.json();
  const recentData = recentJSON["response"]["games"];

  const gamesRes = await fetch(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.NEXT_PUBLIC_STEAM_API_KEY}&steamid=${process.env.NEXT_PUBLIC_STEAM_ID}&include_appinfo=true&format=json`
  );
  const gamesJSON = await gamesRes.json();
  const gamesData = gamesJSON["response"]["games"];

  return {
    props: { user: userData, recent: recentData, games: gamesData },
  };
};
