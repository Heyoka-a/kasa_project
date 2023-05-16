import { Link } from "react-router-dom";
import flatData from "../../datas/Flat";
import { useEffect, useState } from "react";

function Card({ title, cover }) {
  const [flatId, setFlatId] = useState("");

  useEffect(() => {
    setFlatId(
      flatData.find((item) => {
        if (item.title === title) {
          return true;
        }
        return false;
      }).id || ""
    );
  }, [title]);

  return (
    <div className="card">
      <Link to={`/flat/${flatId}`}>
        <div className="card-cover">
          <span>
            <img src={cover} alt="correspond à l'appartement" />
          </span>
        </div>
        <div className="card-title">{title}</div>
      </Link>
    </div>
  );
}

export default Card;
