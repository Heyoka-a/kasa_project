import Caroussel from "../../Components/Caroussel/index";
import flatData from "../../datas/Flat";
import { useParams, redirect } from "react-router-dom";
import FlatBody from "../../Components/FlatBody/index";
import Dropdown from "../../Components/Dropdown";
function Flat() {
  const location = useParams();
  const itemData = flatData.find((data) => location.getFlatId === data.id);

  // if (!itemData) {
  //   return redirect("/about");
  // }

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
          <Dropdown title={<p>Description</p>} text={itemData.description} />
        </div>
        <div className="wrap">
          <Dropdown
            title={<p>Equipements</p>}
            text={
              <ul>
                {itemData.equipments.map((el) => (
                  <li>{el}</li>
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
