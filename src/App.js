import User from "./components/User";
import Recent from "./components/Recent";
import Games from "./components/Games";
import GameStats from "./components/GameStats";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [stats, setStats] = useState(null);
  const [achievements, setAchievements] = useState(null);

  return (
    <div className="App">
      <div className="menu">
        <User />
        <Recent
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
            setShowStats={setToggle}
            setStats={setStats}
            setAchievements={setAchievements}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
