import { Link, useLocation } from "react-router-dom";
import NavLogo from "../../assets/NavLogo.jpg";
import { useEffect, useState } from "react";
import flatData from "../../datas/Flat";

function Header() {
  const location = useLocation();
  const [pagesUrl, setPagesUrl] = useState(["/"]);
  const [displayBanner, setDisplayBanner] = useState(true);

  useEffect(() => {
    const links = pagesUrl;
    flatData.forEach(({ id }) => links.push(`/flat/${id}`));
    setPagesUrl(links);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDisplayBanner(pagesUrl.find((string) => string === location.pathname));
    console.log(location.pathname, pagesUrl);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagesUrl, location.pathname]);

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
      {displayBanner ? (
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
