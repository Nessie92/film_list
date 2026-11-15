import "../css/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar">
        <Link to="/">Film App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/favourites" className="navbar-link">
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
