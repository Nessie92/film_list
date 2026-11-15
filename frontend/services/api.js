const API_KEY = "2d9387e504dd714af8bf4dd00c41e6cc";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularFilms = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();

  return data.results;
};

export const searchFilms = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );
  const data = await response.json();
  console.log(data.results);

  return data.results;
};
