import Caroussel from "../../Components/Caroussel/index";
import flatData from "../../datas/Flat";
import { useParams, useNavigate } from "react-router-dom";
import FlatBody from "../../Components/FlatBody/index";
import Dropdown from "../../Components/Dropdown";
import { useEffect } from "react";

function Flat() {
  const location = useParams();
  const itemData = flatData.find((data) => location.getFlatId === data.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!itemData) {
      navigate("/error");
      return;
    }
  }, [itemData, navigate]);

  if (!itemData) {
    return;
  }

  return (
    <>
      <div className="slider-container">
        <Caroussel pictures={itemData.pictures} />
      </div>
      <div className="flat-body-container">
        <FlatBody
          title={itemData.title}
          location={itemData.location}
          tags={itemData.tags}
          host={itemData.host}
          rating={itemData.rating}
        />
      </div>
      <div className="dropdown-container">
        <div className="wrap">
          <Dropdown title="Description" text={itemData.description} />
        </div>
        <div className="wrap">
          <Dropdown
            title="Equipements"
            text={
              <ul>
                {itemData.equipments.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </>
  );
}

export default Flat;
