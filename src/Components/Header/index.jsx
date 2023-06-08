import { Link, useLocation } from "react-router-dom";
import NavLogo from "../../assets/NavLogo.jpg";

function Header() {
  const location = useLocation();

  return (
    <header id="header">
      <div className="nav-contain">
        <nav>
          <div className="left-element">
            <Link to="/">
              <img src={NavLogo} alt="présentation de kasa" />
            </Link>
          </div>

          <div className="right-element">
            <Link
              className={location.pathname === "/" ? "active-link" : ""}
              to="/"
            >
              ACCUEIL
            </Link>
            <Link
              className={location.pathname === "/about" ? "active-link" : ""}
              to="/about"
            >
              À PROPOS
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
