# Personal Steam Profile

A basic Steam profile loader that retrieves all owned games and data for the game. This project was designed with the idea of showing all of the content without needing to scroll through the entire page. The project supports resolutions for mobile platforms.

## Project Samples

**Desktop platform**\
![Desktop Platform (no game selected)](./sample%20images/desktop1.png)
![Desktop Platform (game selected)](./sample%20images/desktop2.png)

**Mobile platform (Landscape orientation)**\
![Mobile Platform (landscape, no game selected)](./sample%20images/mobile1.png)
![Mobile Platform (landscape, game selected)](./sample%20images/mobile2.png)

**Mobile platform (Landscape orientation)**\
![Mobile Platform (portrait, no game selected)](./sample%20images/mobile3.png)
![Mobile Platform (portrait, game selected)](./sample%20images/mobile4.png)

## Steam API Key

The Steam APIs used will require a Steam account and a personal Steam API key to use. A Steam API key can be obtained directly from this link: [https://steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey)

## Steam APIs Used

All Steam API endpoints available can be found in the following link: [https://developer.valvesoftware.com/wiki/Steam_Web_API](https://developer.valvesoftware.com/wiki/Steam_Web_API)

The following API endpoints are used for this project:

- GetPlayerSummaries
- GetRecentlyPlayedGames
- GetUserStatsForGame
- GetOwnedGames

## Setting Up Personal Steam Profile

A `.env` will need to be made in the project directory. A `.env_sample` file is available to show what should be in the .env file.

In `index.js` in the main project directory and not the `src` directory, the **STEAM_ID** variable can be replaced with any ID of a Steam account (my ID is provided as a default).

## Available Scripts

### `npm run start:backend`

Runs the app's server locally.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

Can test API endpoints made from `index.js` in the main project directory.\

### `npm run start:frontend`

**Note: Must run backend server first with `npm run start:backend` before using this script**

Opens the user interface of the project and presents Steam data.
