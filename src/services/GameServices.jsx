export const BASE_URL = "https://api.rawg.io/api";
export const API_KEY = process.env.REACT_APP_APIKEY;

const fetchGames = (search = "", page = 1, parentPlatform, controller) => {
  let URL = `${BASE_URL}/games?key=${API_KEY}&page=${page}&search=${search}`;

  if (parentPlatform) {
    URL += `&parent_platforms=${parentPlatform}`;
  }

  return fetch(URL, { signal: controller?.signal })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("something went wrong");
    })
    .then((data) => {
      const gamesPromises = data.results.map((game) => fetchGame(game));
      return Promise.all(gamesPromises);
    });
};

const fetchGame = (generalGame) => {
  const URL = `${BASE_URL}/games/${generalGame.id}?key=${API_KEY}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((game) => Object.assign(generalGame, game));
};

const fetchTrailer = (gameId) => {
  const URL = `${BASE_URL}/games/${gameId}/movies?key=${API_KEY}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.results[0]?.data.max);
};

const fetchPlatforms = () => {
  let URL = `${BASE_URL}/platforms/lists/parents?key=${API_KEY}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.results);
};

export { fetchGames, fetchPlatforms, fetchTrailer };
