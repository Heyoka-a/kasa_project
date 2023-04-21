import { Link } from "react-router-dom";
import NavLogo from "../../assets/NavLogo.jpg";

function Header() {
  const getUrl = window.location.pathname;
  const PagesUrl = ["/", "/about"];
  return (
    <header>
      <div className="nav-contain">
        <nav>
          <div className="left-element">
            <img src={NavLogo} alt="présentation de kasa" />
          </div>

          <div className="right-element">
            <Link to="/">ACCUEIL</Link>
            <Link to="/about">À PROPOS</Link>
          </div>
        </nav>
      </div>
      {getUrl === PagesUrl[0] || getUrl === PagesUrl[1] ? (
        <div className="test">
          <div className="section-header">
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
}

export default Header;
