# Personal Steam Profile

A basic Steam profile loader that retrieves all owned games and data for the game. This project was designed with the idea of showing all of the content without needing to scroll through the entire page. The project supports resolutions for mobile platforms.

## Project Demo

The project can be viewed from the following link: [https://personal-steamprofile.vercel.app](https://personal-steamprofile.vercel.app)

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

Note that the Steam ID will be required, but is optional to be stored in the env file as it is already public information via your steam profile.
