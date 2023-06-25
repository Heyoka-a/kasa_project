import Banner from "../../Components/Banner";
import Card from "../../Components/Card/index";
import FlatData from "../../datas/Flat";

function App() {
  return (
    <>
      <Banner />
      <section className="cards-container">
        {FlatData.map((appart, index) => (
          <Card
            key={`${appart.title}-${index}`}
            title={appart.title}
            cover={appart.cover}
          />
        ))}
      </section>
    </>
  );
}

export default App;
