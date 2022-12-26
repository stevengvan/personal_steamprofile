const PORT = 8000;
const STEAM_ID = "76561198343185128";
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

// User info
app.get("/user", (req, res) => {
  const options = {
    method: "GET",
    url: `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.REACT_APP_STEAM_API_KEY}&steamids=${STEAM_ID}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Recent Games Played
app.get("/home/recent", (req, res) => {
  const options = {
    method: "GET",
    url: `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.REACT_APP_STEAM_API_KEY}&steamid=${STEAM_ID}&format=json`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Stats for a Game
app.get(`/home/gamestat/:appid`, (req, res) => {
  const options = {
    method: "GET",
    url: `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${req.params.appid}&key=${process.env.REACT_APP_STEAM_API_KEY}&steamid=${STEAM_ID}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

// List of Owned Games
app.get("/games", (req, res) => {
  const options = {
    method: "GET",
    url: `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.REACT_APP_STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=true&format=json`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
