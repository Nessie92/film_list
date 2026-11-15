import "../css/FilmCard.css";

function FilmCard({ film }) {
  function onClickLike() {
    alert("liked");
  }

  return (
    <div className="film-card">
      <div className="film-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt={film.name}
        />
        <div className="film-overlay">
          <button className="favourite-button" onClick={onClickLike}>
            ❤️
          </button>
        </div>
      </div>
      <div className="film-info">
        <h3>{film.title}</h3>
        <p>{film.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default FilmCard;
