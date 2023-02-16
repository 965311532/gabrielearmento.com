// Global variables retain their value between invocations in the same execution environment.
// This means that we can declare a global variable to store the access token and the variable
// will retain its value between invocations in the same execution environment (i.e. the same
// serverless function instance) without having to re-fetch the access token every time the
// function is invoked.
let memoizedAccessToken;

async function getNewAccessToken() {
  return fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    body: `grant_type=refresh_token&refresh_token=${process.env.SPOTIFY_REFRESH_TOKEN}`,
  })
    .then((res) => res.json())
    .then((data) => {
      memoizedAccessToken = data.access_token;
      return memoizedAccessToken;
    });
}

async function querySpotify(url) {
  // Define a helper function to query the Spotify API
  async function fetch_(url) {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${memoizedAccessToken}`,
      },
    });
  }
  // If we don't have an access token yet, get one
  if (!memoizedAccessToken) {
    await getNewAccessToken();
  }
  // Try to query the Spotify API
  const response = await fetch_(url);
  // If the request was unauthorized, get a new access token and try again
  if (response.status === 401) {
    await getNewAccessToken();
    return fetch_(url);
  }
  return response;
}

function reduceSongData(data) {
  // The data is formatted differently depending on the endpoint
  const song = data.item || data.track;
  return {
    name: song.name,
    artists: song.artists.map((artist) => artist.name),
    album: song.album.name,
    images: song.album.images,
    explicit: song.explicit,
    preview: song.preview_url,
    durationMs: song.duration_ms,
    isPlaying: data.is_playing || false,
    url: song.external_urls.spotify,
  };
}

export default async function handler(request, response) {
  // We want to get either the currently playing song or the most
  // recently listened to song
  const CURRENTLY_PLAYING_URL =
    "https://api.spotify.com/v1/me/player/currently-playing";
  const RECENTLY_PLAYED_URL =
    "https://api.spotify.com/v1/me/player/recently-played";
  // Query the Spotify API for the latest song
  let currentSongData = await querySpotify(CURRENTLY_PLAYING_URL);
  if (currentSongData.status === 200) {
    const currentSong = await currentSongData.json();
    response.json(reduceSongData(currentSong));
    return;
  }
  // If there is none, query the recently played songs
  let recentlyPlayedData = await querySpotify(
    RECENTLY_PLAYED_URL + "?limit=1" // Only get the most recent song
  );
  const recentlyPlayed = await recentlyPlayedData.json();
  response.json(reduceSongData(recentlyPlayed.items[0]));
}
