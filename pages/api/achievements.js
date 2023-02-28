export default async function handler(req, res) {
  if (req.method === "GET") {
    const statsRes = await fetch(
      `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${req.query.appid}&key=${process.env.NEXT_PUBLIC_STEAM_API_KEY}&steamid=${process.env.NEXT_PUBLIC_STEAM_ID}`
    );
    const statsJSON = await statsRes.json();
    const statsData = statsJSON["playerstats"]["achievements"];
    res.status(200).json({ achievements: statsData });
  } else {
    res.status(405).json("Method not allowed");
  }
}
