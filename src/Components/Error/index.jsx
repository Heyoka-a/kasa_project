import { Link } from "react-router-dom";
import ErrorImg from "../../assets/404.svg";

function Error() {
  return (
    <div className="error-container">
      <div className="contain-error-img">
        <img src={ErrorImg} alt="Erreur 404" />
        <h1>Oups ! La page que vous demandez n'existe pas.</h1>
      </div>
      <div className="back-home-btn">
        <Link to="/">Retourner vers la page d'accueil</Link>
      </div>
    </div>
  );
}

export default Error;
