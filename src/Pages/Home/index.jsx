import Banner from "../../Components/Banner";
import Card from "../../Components/Card/index";
import FlatData from "../../datas/Flat";

function App() {
  return (
    <>
      <Banner />
      <div className="cards-container">
        {FlatData.map((appart, index) => (
          <Card
            key={`${appart.title}-${index}`}
            title={appart.title}
            cover={appart.cover}
          />
        ))}
      </div>
    </>
  );
}

export default App;
