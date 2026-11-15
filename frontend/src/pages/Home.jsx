import "../css/Home.css";

import FilmCard from "../components/FilmCard";
import { useState, useEffect } from "react";
import { getPopularFilms, searchFilms } from "../../services/api.js";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularFIlms = async () => {
      try {
        const popularFilms = await getPopularFilms();
        setFilms(popularFilms);
      } catch (err) {
        console.log(err);
        setError("Failed to load films ");
      } finally {
        setLoading(false);
      }
    };

    loadPopularFIlms();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchFilms(searchQuery);
      setFilms(searchResults);
      setError(null);
    } catch (e) {
      console.log(e);
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="search"
          placeholder="Search for film"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading</div>
      ) : (
        <div className="film-grid">
          {films.map((film) => (
            <FilmCard film={film} key={film.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
