import Caroussel from "../../Components/Caroussel/index";
import flatData from "../../datas/Flat";
import { useParams } from "react-router-dom";
import FlatBody from "../../Components/FlatBody/index";

function Flat() {
  const location = useParams();
  const itemData = flatData.find((data) => location.getFlatId === data.id);

  // useEffect(() => {
  //   setItemData();
  // }, []);

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
    </>
  );
}

export default Flat;
